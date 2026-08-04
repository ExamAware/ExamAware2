import { randomUUID } from 'node:crypto';
import {
  BadRequestException,
  ConflictException,
  GoneException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import {
  COMMAND_RESULT_STATUS,
  controlCommandSchema,
  createServerCommandMessage
} from '@dsz-examaware/control-protocol';
import type { CommandResult, ControlCommand } from '@dsz-examaware/control-protocol';
import type { Page } from '../api/pagination.dto.js';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import { DeviceConnectionsService } from '../devices/device-connections.service.js';
import { DevicesRepository } from '../devices/devices.repository.js';
import { PartitionsRepository } from '../partitions/partitions.repository.js';
import { CONTROL_COMMAND_AUDIT, CONTROL_COMMAND_ERROR_CODES } from './control-command.constants.js';
import { COMMAND_TARGET_STATUS } from './control-command.schema.js';
import { ControlCommandsRepository } from './control-commands.repository.js';
import type {
  CommandTargetRecord,
  CommandTargetStatus,
  ControlCommandRecord
} from './control-commands.repository.js';

export interface CommandTargetSelection {
  deviceIds: string[];
  partitionNodeIds: string[];
}

export interface ControlCommandView extends ControlCommandRecord {
  targets: CommandTargetRecord[];
  progress: Record<CommandTargetStatus, number>;
}

const TERMINAL_TARGET_STATUSES: CommandTargetStatus[] = [
  COMMAND_TARGET_STATUS.succeeded,
  COMMAND_TARGET_STATUS.failed,
  COMMAND_TARGET_STATUS.expired
];

@Injectable()
export class ControlCommandsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly commandsRepository: ControlCommandsRepository,
    private readonly devicesRepository: DevicesRepository,
    private readonly partitionsRepository: PartitionsRepository,
    private readonly connectionsService: DeviceConnectionsService,
    private readonly auditService: AuditService
  ) {}

  async list(page: number, pageSize: number): Promise<Page<ControlCommandView>> {
    await this.commandsRepository.expireTargets(new Date());
    const result = await this.commandsRepository.list(page, pageSize);
    return {
      items: await Promise.all(result.records.map((record) => this.toView(record))),
      page,
      pageSize,
      total: result.total
    };
  }

  async get(id: string): Promise<ControlCommandView> {
    await this.commandsRepository.expireTargets(new Date());
    const record = await this.commandsRepository.findById(id);
    if (!record) {
      throw new NotFoundException({
        code: CONTROL_COMMAND_ERROR_CODES.notFound,
        message: 'Control command not found'
      });
    }
    return this.toView(record);
  }

  async issue(
    command: ControlCommand,
    selection: CommandTargetSelection,
    expiresAt: Date,
    context: WriteContext,
    requestedCommandId?: string
  ): Promise<ControlCommandView> {
    const parsedCommand = controlCommandSchema.safeParse(command);
    if (!parsedCommand.success) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.invalidCommand,
        message: 'Control command does not match the shared protocol',
        errors: parsedCommand.error.issues
      });
    }
    const issuedAt = new Date();
    if (expiresAt.getTime() <= issuedAt.getTime()) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.invalidExpiry,
        message: 'Command expiry must be in the future'
      });
    }
    const deviceIds = await this.resolveTargets(selection);
    const commandId = requestedCommandId ?? randomUUID();
    const record = await this.databaseService.transaction(async (transaction) => {
      const created = await this.commandsRepository.create(transaction, {
        id: commandId,
        command: parsedCommand.data,
        issuedBy: context.actorUserId,
        issuedAt,
        expiresAt,
        deviceIds
      });
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: CONTROL_COMMAND_AUDIT.issued,
        resourceType: CONTROL_COMMAND_AUDIT.resourceType,
        resourceId: commandId,
        requestId: context.requestId,
        metadata: {
          commandType: created.commandType,
          deviceIds,
          expiresAt: expiresAt.toISOString()
        }
      });
      return created;
    });

    await Promise.all(deviceIds.map((deviceId) => this.deliver(record, deviceId)));
    return this.toView(record);
  }

  async deliverPending(deviceId: string): Promise<void> {
    const commands = await this.commandsRepository.pendingForDevice(deviceId, new Date());
    for (const command of commands) await this.deliver(command, deviceId);
  }

  async recordResult(deviceId: string, result: CommandResult): Promise<CommandTargetRecord> {
    const command = await this.commandsRepository.findById(result.commandId);
    if (!command) {
      throw new NotFoundException({
        code: CONTROL_COMMAND_ERROR_CODES.notFound,
        message: 'Control command not found'
      });
    }

    return this.databaseService.transaction(async (transaction) => {
      const target = await this.commandsRepository.lockTarget(
        transaction,
        result.commandId,
        deviceId
      );
      if (!target) {
        throw new BadRequestException({
          code: CONTROL_COMMAND_ERROR_CODES.deviceNotTarget,
          message: 'Device is not a target of this command'
        });
      }
      if (TERMINAL_TARGET_STATUSES.includes(target.status)) {
        if (target.status === result.status) return target;
        throw new ConflictException({
          code: CONTROL_COMMAND_ERROR_CODES.resultAlreadyTerminal,
          message: 'Command result is already terminal'
        });
      }
      const occurredAt = new Date(result.occurredAt);
      if (command.expiresAt.getTime() <= occurredAt.getTime()) {
        await this.commandsRepository.updateTarget(transaction, result.commandId, deviceId, {
          status: COMMAND_TARGET_STATUS.expired,
          completedAt: new Date()
        });
        throw new GoneException({
          code: CONTROL_COMMAND_ERROR_CODES.expired,
          message: 'Command result arrived after expiry'
        });
      }
      if (result.status === COMMAND_RESULT_STATUS.acknowledged) {
        return this.commandsRepository.updateTarget(transaction, result.commandId, deviceId, {
          status: COMMAND_TARGET_STATUS.acknowledged,
          acknowledgedAt: occurredAt,
          resultState: result.state
        });
      }
      return this.commandsRepository.updateTarget(transaction, result.commandId, deviceId, {
        status: result.status,
        acknowledgedAt: target.acknowledgedAt ?? occurredAt,
        completedAt: occurredAt,
        errorCode: result.error?.code ?? null,
        errorMessage: result.error?.message ?? null,
        resultState: result.state
      });
    });
  }

  async successfulDeviceIds(commandId: string): Promise<string[]> {
    return this.commandsRepository.deviceIdsByStatus(commandId, [COMMAND_TARGET_STATUS.succeeded]);
  }

  private async resolveTargets(selection: CommandTargetSelection): Promise<string[]> {
    const selectedIds = new Set(selection.deviceIds);
    for (const rootId of new Set(selection.partitionNodeIds)) {
      const descendants = await this.partitionsRepository.descendantNodeIds(rootId);
      if (descendants.length === 0) {
        throw new BadRequestException({
          code: CONTROL_COMMAND_ERROR_CODES.partitionNotFound,
          message: `Partition node ${rootId} does not exist`
        });
      }
      for (const deviceId of await this.partitionsRepository.deviceIdsForNodeIds(descendants)) {
        selectedIds.add(deviceId);
      }
    }
    if (selectedIds.size === 0) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.emptyTargets,
        message: 'At least one device or partition target is required'
      });
    }
    const records = await this.devicesRepository.findByIds([...selectedIds]);
    if (records.length !== selectedIds.size) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.targetNotFound,
        message: 'One or more command target devices do not exist'
      });
    }
    const revoked = records.find((record) => record.lifecycleStatus === 'revoked');
    if (revoked) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.targetRevoked,
        message: `Device ${revoked.id} is revoked`
      });
    }
    return records.map((record) => record.id).sort();
  }

  private async deliver(record: ControlCommandRecord, deviceId: string): Promise<void> {
    const message = createServerCommandMessage({
      commandId: record.id,
      issuedAt: record.issuedAt.toISOString(),
      expiresAt: record.expiresAt.toISOString(),
      command: record.command
    });
    if (this.connectionsService.sendCommand(deviceId, message)) {
      await this.commandsRepository.markDelivered(record.id, deviceId, new Date());
    }
  }

  private async toView(record: ControlCommandRecord): Promise<ControlCommandView> {
    const targets = await this.commandsRepository.targets(record.id);
    const progress: Record<CommandTargetStatus, number> = {
      pending: 0,
      delivered: 0,
      acknowledged: 0,
      succeeded: 0,
      failed: 0,
      expired: 0
    };
    for (const target of targets) progress[target.status] += 1;
    return { ...record, targets, progress };
  }
}
