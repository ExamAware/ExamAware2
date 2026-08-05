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
  CONTROL_CAPABILITY_NAMES,
  CONTROL_COMMAND_TYPES,
  controlCommandSchema,
  PLAYER_STATUS,
  createServerCommandMessage
} from '@dsz-examaware/control-protocol';
import type { CommandResult, ControlCommand } from '@dsz-examaware/control-protocol';
import type { Page } from '../api/pagination.dto.js';
import type { WriteContext } from '../api/write-context.js';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import { DeviceConnectionsService } from '../devices/device-connections.service.js';
import { DevicesRepository } from '../devices/devices.repository.js';
import { DEVICE_LIFECYCLE_STATUS } from '../devices/device.constants.js';
import { ExamConfigsRepository } from '../exam-configs/exam-configs.repository.js';
import type { DeviceRecord } from '../devices/devices.repository.js';
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

interface TargetCapabilityMismatch {
  deviceId: string;
  capabilityName: string;
  unsupportedSettingKeys: string[];
}

type TargetCapabilityProblem =
  | {
      code: typeof CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnknown;
      message: string;
      errors: { deviceIds: string[] };
    }
  | {
      code: typeof CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnsupported;
      message: string;
      errors: { devices: TargetCapabilityMismatch[] };
    };
type CommandResultOutcome = { accepted: true; target: CommandTargetRecord } | { accepted: false };

const TERMINAL_TARGET_STATUSES: CommandTargetStatus[] = [
  COMMAND_TARGET_STATUS.succeeded,
  COMMAND_TARGET_STATUS.failed,
  COMMAND_TARGET_STATUS.expired
];
const COMMAND_CAPABILITY_NAMES: Record<ControlCommand['type'], string> = {
  [CONTROL_COMMAND_TYPES.examConfigPrepare]: CONTROL_CAPABILITY_NAMES.examDeployment,
  [CONTROL_COMMAND_TYPES.playbackActivate]: CONTROL_CAPABILITY_NAMES.playback,
  [CONTROL_COMMAND_TYPES.playbackStop]: CONTROL_CAPABILITY_NAMES.playback,
  [CONTROL_COMMAND_TYPES.broadcastShow]: CONTROL_CAPABILITY_NAMES.broadcast,
  [CONTROL_COMMAND_TYPES.broadcastDismiss]: CONTROL_CAPABILITY_NAMES.broadcast,
  [CONTROL_COMMAND_TYPES.settingsApply]: CONTROL_CAPABILITY_NAMES.managedSettings
};

@Injectable()
export class ControlCommandsService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly commandsRepository: ControlCommandsRepository,
    private readonly devicesRepository: DevicesRepository,
    private readonly partitionsRepository: PartitionsRepository,
    private readonly examConfigsRepository: ExamConfigsRepository,
    private readonly connectionsService: DeviceConnectionsService,
    private readonly auditService: AuditService
  ) {}

  async list(page: number, pageSize: number): Promise<Page<ControlCommandView>> {
    const expiredCommandIds = await this.commandsRepository.expireTargets(new Date());
    await Promise.all(expiredCommandIds.map((commandId) => this.finalizePrepareCommand(commandId)));
    const result = await this.commandsRepository.list(page, pageSize);
    return {
      items: await Promise.all(result.records.map((record) => this.toView(record))),
      page,
      pageSize,
      total: result.total
    };
  }

  async get(id: string): Promise<ControlCommandView> {
    const expiredCommandIds = await this.commandsRepository.expireTargets(new Date());
    await Promise.all(expiredCommandIds.map((commandId) => this.finalizePrepareCommand(commandId)));
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
    requestedCommandId?: string,
    options: { validateTargetCapabilities?: boolean } = {}
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
    const deviceIds = await this.resolveTargets(
      selection,
      parsedCommand.data,
      options.validateTargetCapabilities !== false
    );
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
    const device = await this.devicesRepository.findById(deviceId);
    if (!device) return;
    const commands = await this.commandsRepository.pendingForDevice(deviceId, new Date());
    for (const command of commands) {
      const problem = this.targetCapabilityProblem([device], command.command);
      if (problem) {
        await this.commandsRepository.markCapabilityRejected(
          command.id,
          deviceId,
          new Date(),
          problem.code,
          problem.message
        );
        await this.finalizePrepareCommand(command.id);
        continue;
      }
      await this.deliver(command, deviceId);
    }
  }

  async recordResult(deviceId: string, result: CommandResult): Promise<CommandTargetRecord> {
    const command = await this.commandsRepository.findById(result.commandId);
    if (!command) {
      throw new NotFoundException({
        code: CONTROL_COMMAND_ERROR_CODES.notFound,
        message: 'Control command not found'
      });
    }

    const receivedAt = new Date();
    const outcome: CommandResultOutcome = await this.databaseService.transaction(
      async (transaction) => {
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
          if (target.status === result.status) return { accepted: true, target };
          throw new ConflictException({
            code: CONTROL_COMMAND_ERROR_CODES.resultAlreadyTerminal,
            message: 'Command result is already terminal'
          });
        }
        if (command.expiresAt.getTime() <= receivedAt.getTime()) {
          await this.commandsRepository.updateTarget(transaction, result.commandId, deviceId, {
            status: COMMAND_TARGET_STATUS.expired,
            completedAt: receivedAt
          });
          return { accepted: false };
        }
        if (result.status === COMMAND_RESULT_STATUS.acknowledged) {
          const target = await this.commandsRepository.updateTarget(
            transaction,
            result.commandId,
            deviceId,
            {
              status: COMMAND_TARGET_STATUS.acknowledged,
              acknowledgedAt: receivedAt,
              resultState: result.state
            }
          );
          return { accepted: true, target };
        }
        const completed = await this.commandsRepository.updateTarget(
          transaction,
          result.commandId,
          deviceId,
          {
            status: result.status,
            acknowledgedAt: target.acknowledgedAt ?? receivedAt,
            completedAt: receivedAt,
            errorCode: result.error?.code ?? null,
            errorMessage: result.error?.message ?? null,
            resultState: result.state
          }
        );
        return { accepted: true, target: completed };
      }
    );
    if (result.status !== COMMAND_RESULT_STATUS.acknowledged) {
      await this.finalizePrepareCommand(result.commandId);
    }
    if (!outcome.accepted) {
      throw new GoneException({
        code: CONTROL_COMMAND_ERROR_CODES.expired,
        message: 'Command result arrived after expiry'
      });
    }
    return outcome.target;
  }

  async successfulDeviceIds(commandId: string): Promise<string[]> {
    return this.commandsRepository.deviceIdsByStatus(commandId, [COMMAND_TARGET_STATUS.succeeded]);
  }

  async latestPrepareForExam(examConfigId: string): Promise<ControlCommandRecord | undefined> {
    return this.commandsRepository.latestPrepareForExam(examConfigId);
  }

  async allActivatedDevicesExited(deploymentId: string): Promise<boolean> {
    const activation = await this.commandsRepository.latestActivationForDeployment(deploymentId);
    if (!activation) return false;
    const deviceIds = await this.commandsRepository.deviceIdsByStatus(activation.id, [
      COMMAND_TARGET_STATUS.succeeded
    ]);
    if (deviceIds.length === 0) return false;
    const devices = await this.devicesRepository.findByIds(deviceIds);
    return (
      devices.length === deviceIds.length &&
      devices.every(
        (device) =>
          device.lastReportedState?.player?.status === PLAYER_STATUS.idle &&
          device.lastReportedState.player.deploymentId === deploymentId
      )
    );
  }

  private async resolveTargets(
    selection: CommandTargetSelection,
    command: ControlCommand,
    validateTargetCapabilities: boolean
  ): Promise<string[]> {
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
    const revoked = records.find(
      (record) => record.lifecycleStatus === DEVICE_LIFECYCLE_STATUS.revoked
    );
    if (revoked) {
      throw new BadRequestException({
        code: CONTROL_COMMAND_ERROR_CODES.targetRevoked,
        message: `Device ${revoked.id} is revoked`
      });
    }
    if (validateTargetCapabilities) this.assertTargetCapabilities(records, command);
    return records.map((record) => record.id).sort();
  }

  private assertTargetCapabilities(records: DeviceRecord[], command: ControlCommand): void {
    const problem = this.targetCapabilityProblem(records, command);
    if (problem) throw new BadRequestException(problem);
  }

  private targetCapabilityProblem(
    records: DeviceRecord[],
    command: ControlCommand
  ): TargetCapabilityProblem | undefined {
    const unknownDeviceIds = records
      .filter((record) => !record.lastCapabilities)
      .map((record) => record.id);
    if (unknownDeviceIds.length > 0) {
      return {
        code: CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnknown,
        message: 'One or more target devices have not reported control capabilities',
        errors: { deviceIds: unknownDeviceIds }
      };
    }

    const capabilityName = COMMAND_CAPABILITY_NAMES[command.type];
    const unsupported = records.flatMap((record): TargetCapabilityMismatch[] => {
      const capabilities = record.lastCapabilities!;
      const supportsCommand = capabilities.commands.some(
        (capability) => capability.name === capabilityName && capability.version >= 1
      );
      const unsupportedSettingKeys =
        command.type === CONTROL_COMMAND_TYPES.settingsApply
          ? command.payload.settings
              .filter(
                (setting) =>
                  !capabilities.managedSettings.some(
                    (capability) => capability.key === setting.key && capability.schemaVersion >= 1
                  )
              )
              .map((setting) => setting.key)
          : [];
      return supportsCommand && unsupportedSettingKeys.length === 0
        ? []
        : [{ deviceId: record.id, capabilityName, unsupportedSettingKeys }];
    });
    return unsupported.length > 0
      ? {
          code: CONTROL_COMMAND_ERROR_CODES.targetCapabilitiesUnsupported,
          message: 'One or more target devices do not support this command',
          errors: { devices: unsupported }
        }
      : undefined;
  }

  private async finalizePrepareCommand(commandId: string): Promise<void> {
    const command = await this.commandsRepository.findById(commandId);
    if (command?.command.type !== CONTROL_COMMAND_TYPES.examConfigPrepare) return;
    const latest = await this.commandsRepository.latestPrepareForExam(
      command.command.payload.examConfigId
    );
    if (latest?.id !== command.id) return;
    const exam = await this.examConfigsRepository.findById(command.command.payload.examConfigId);
    if (exam?.status !== 'preparing') return;
    const targets = await this.commandsRepository.targets(command.id);
    if (
      targets.length === 0 ||
      targets.some((target) => !TERMINAL_TARGET_STATUSES.includes(target.status))
    ) {
      return;
    }
    await this.examConfigsRepository.setStatus(
      command.command.payload.examConfigId,
      targets.some((target) => target.status === COMMAND_TARGET_STATUS.succeeded)
        ? 'ready'
        : 'draft'
    );
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
