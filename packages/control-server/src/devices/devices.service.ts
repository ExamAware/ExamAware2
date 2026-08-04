import { BadRequestException, Injectable, NotFoundException, Optional } from '@nestjs/common';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import type { DatabaseTransaction } from '../database/client.js';
import type { Page } from '../api/pagination.dto.js';
import type { WriteContext } from '../api/write-context.js';
import { PartitionsRepository } from '../partitions/partitions.repository.js';
import { DeviceConnectionsService } from './device-connections.service.js';
import type { DevicePartitionAssignment } from '../partitions/partitions.repository.js';
import { DevicesRepository } from './devices.repository.js';
import type { DeviceRecord, DeviceUpdate } from './devices.repository.js';

const DEVICE_ONLINE_WINDOW_MS = 60_000;

export type DeviceConnectionStatus = 'online' | 'offline' | 'never_connected' | 'revoked';
export type DeviceView = DeviceRecord & {
  connectionStatus: DeviceConnectionStatus;
  partitions: DevicePartitionAssignment[];
};

export function deriveDeviceConnectionStatus(
  record: Pick<DeviceRecord, 'lifecycleStatus' | 'lastSeenAt'>,
  now = Date.now()
): DeviceConnectionStatus {
  if (record.lifecycleStatus === 'revoked') {
    return 'revoked';
  }
  if (!record.lastSeenAt) {
    return 'never_connected';
  }
  return now - record.lastSeenAt.getTime() <= DEVICE_ONLINE_WINDOW_MS ? 'online' : 'offline';
}

@Injectable()
export class DevicesService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly devicesRepository: DevicesRepository,
    private readonly partitionsRepository: PartitionsRepository,
    private readonly auditService: AuditService,
    @Optional() private readonly connectionsService?: DeviceConnectionsService
  ) {}

  async list(page: number, pageSize: number, partitionId?: string): Promise<Page<DeviceView>> {
    const partitionNodeIds = partitionId
      ? await this.partitionsRepository.descendantNodeIds(partitionId)
      : undefined;
    const result = await this.devicesRepository.list(page, pageSize, partitionNodeIds);
    const assignments = await this.partitionsRepository.assignmentsForDevices(
      result.records.map((record) => record.id)
    );
    return {
      items: result.records.map((record) => this.toView(record, assignments.get(record.id) ?? [])),
      page,
      pageSize,
      total: result.total
    };
  }

  async get(id: string): Promise<DeviceView> {
    const record = await this.devicesRepository.findById(id);
    if (!record) {
      throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
    }
    const assignments = await this.partitionsRepository.assignmentsForDevices([id]);
    return this.toView(record, assignments.get(id) ?? []);
  }

  async update(id: string, patch: DeviceUpdate, context: WriteContext): Promise<DeviceView> {
    const changedFields = Object.keys(patch);
    if (changedFields.length === 0) {
      throw new BadRequestException({
        code: 'empty_patch',
        message: 'At least one device field is required'
      });
    }

    const record = await this.databaseService.transaction(async (transaction) => {
      const updated = await this.devicesRepository.update(transaction, id, patch);
      if (!updated) {
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device.updated',
        resourceType: 'device',
        resourceId: id,
        requestId: context.requestId,
        metadata: { changedFields }
      });
      return updated;
    });

    const assignments = await this.partitionsRepository.assignmentsForDevices([id]);
    return this.toView(record, assignments.get(id) ?? []);
  }

  async setPartitions(id: string, nodeIds: string[], context: WriteContext): Promise<DeviceView> {
    const uniqueNodeIds = [...new Set(nodeIds)];
    const record = await this.databaseService.transaction(async (transaction) => {
      const current = await this.devicesRepository.lockById(transaction, id);
      if (!current) {
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }

      await this.validatePartitionAssignments(transaction, current.schoolId, uniqueNodeIds);

      await this.partitionsRepository.replaceDeviceAssignments(
        transaction,
        id,
        uniqueNodeIds,
        context.actorUserId
      );
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device.partitions-replaced',
        resourceType: 'device',
        resourceId: id,
        requestId: context.requestId,
        metadata: { nodeIds: uniqueNodeIds }
      });
      return current;
    });

    const assignments = await this.partitionsRepository.assignmentsForDevices([id]);
    return this.toView(record, assignments.get(id) ?? []);
  }
  async validatePartitionAssignments(
    transaction: DatabaseTransaction,
    schoolId: string,
    nodeIds: string[]
  ): Promise<void> {
    const nodes = await this.partitionsRepository.findNodesByIds(transaction, nodeIds);
    if (nodes.length !== nodeIds.length) {
      throw new BadRequestException({
        code: 'partition_nodes_not_found',
        message: 'One or more partition nodes do not exist'
      });
    }
    if (nodes.some((node) => node.schoolId !== schoolId)) {
      throw new BadRequestException({
        code: 'partition_school_mismatch',
        message: 'Partition nodes and device must belong to the same school'
      });
    }

    const dimensionCounts = new Map<string, number>();
    for (const node of nodes) {
      dimensionCounts.set(node.dimensionId, (dimensionCounts.get(node.dimensionId) ?? 0) + 1);
    }
    const exclusiveViolation = nodes.find(
      (node) => !node.allowMultiple && (dimensionCounts.get(node.dimensionId) ?? 0) > 1
    );
    if (exclusiveViolation) {
      throw new BadRequestException({
        code: 'partition_dimension_is_exclusive',
        message: `Partition dimension ${exclusiveViolation.dimensionKey} allows one node per device`
      });
    }
  }

  async revoke(id: string, context: WriteContext): Promise<DeviceView> {
    const record = await this.databaseService.transaction(async (transaction) => {
      const current = await this.devicesRepository.lockById(transaction, id);
      if (!current) {
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }
      if (current.lifecycleStatus === 'revoked') {
        return current;
      }

      const revoked = await this.devicesRepository.update(transaction, id, {
        lifecycleStatus: 'revoked'
      });
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device.revoked',
        resourceType: 'device',
        resourceId: id,
        requestId: context.requestId,
        metadata: {}
      });
      return revoked!;
    });

    const assignments = await this.partitionsRepository.assignmentsForDevices([id]);
    return this.toView(record, assignments.get(id) ?? []);
  }

  private toView(record: DeviceRecord, partitions: DevicePartitionAssignment[]): DeviceView {
    const connectionStatus =
      record.lifecycleStatus === 'revoked'
        ? 'revoked'
        : this.connectionsService?.isOnline(record.id)
          ? 'online'
          : record.lastSeenAt
            ? 'offline'
            : 'never_connected';
    return { ...record, connectionStatus, partitions };
  }
}
