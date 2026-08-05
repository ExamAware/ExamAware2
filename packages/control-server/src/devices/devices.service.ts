import { BadRequestException, Injectable, NotFoundException, Optional } from '@nestjs/common';
import { CONTROL_WEBSOCKET_CLOSE_CODES } from '@dsz-examaware/control-protocol';
import { AuditService } from '../audit/audit.service.js';
import { DatabaseService } from '../database/database.service.js';
import type { DatabaseTransaction } from '../database/client.js';
import type { Page } from '../api/pagination.dto.js';
import type { WriteContext } from '../api/write-context.js';
import { PartitionsRepository } from '../partitions/partitions.repository.js';
import { DeviceConnectionsService } from './device-connections.service.js';
import type { DevicePartitionAssignment } from '../partitions/partitions.repository.js';
import { DevicesRepository } from './devices.repository.js';
import {
  DEVICE_CONNECTION_CLOSE_REASONS,
  DEVICE_CONNECTION_STATUS,
  DEVICE_LIFECYCLE_STATUS
} from './device.constants.js';
import type { DeviceConnectionStatus } from './device.constants.js';
import type { DeviceRecord, DeviceUpdate } from './devices.repository.js';

const DEVICE_ONLINE_WINDOW_MS = 60_000;

export type DeviceView = DeviceRecord & {
  connectionStatus: DeviceConnectionStatus;
  partitions: DevicePartitionAssignment[];
};

export function deriveDeviceConnectionStatus(
  record: Pick<DeviceRecord, 'lifecycleStatus' | 'lastSeenAt'>,
  now = Date.now()
): DeviceConnectionStatus {
  if (record.lifecycleStatus === DEVICE_LIFECYCLE_STATUS.revoked) {
    return DEVICE_CONNECTION_STATUS.revoked;
  }
  if (!record.lastSeenAt) {
    return DEVICE_CONNECTION_STATUS.neverConnected;
  }
  return now - record.lastSeenAt.getTime() <= DEVICE_ONLINE_WINDOW_MS
    ? DEVICE_CONNECTION_STATUS.online
    : DEVICE_CONNECTION_STATUS.offline;
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

  async resolveTargets(deviceIds: string[], partitionNodeIds: string[]): Promise<DeviceView[]> {
    const resolvedIds = new Set(deviceIds);
    for (const rootId of new Set(partitionNodeIds)) {
      const nodeIds = await this.partitionsRepository.descendantNodeIds(rootId);
      if (nodeIds.length === 0) {
        throw new BadRequestException({
          code: 'partition_node_not_found',
          message: `Partition node ${rootId} does not exist`
        });
      }
      for (const deviceId of await this.partitionsRepository.deviceIdsForNodeIds(nodeIds)) {
        resolvedIds.add(deviceId);
      }
    }
    const records = await this.devicesRepository.findByIds([...resolvedIds]);
    const assignments = await this.partitionsRepository.assignmentsForDevices(
      records.map((record) => record.id)
    );
    return records
      .map((record) => this.toView(record, assignments.get(record.id) ?? []))
      .sort((left, right) => left.displayName.localeCompare(right.displayName));
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
      if (current.lifecycleStatus === DEVICE_LIFECYCLE_STATUS.revoked) {
        return current;
      }

      const revoked = await this.devicesRepository.update(transaction, id, {
        lifecycleStatus: DEVICE_LIFECYCLE_STATUS.revoked
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
    this.connectionsService?.disconnect(
      id,
      CONTROL_WEBSOCKET_CLOSE_CODES.deviceRevoked,
      DEVICE_CONNECTION_CLOSE_REASONS.deviceRevoked
    );

    const assignments = await this.partitionsRepository.assignmentsForDevices([id]);
    return this.toView(record, assignments.get(id) ?? []);
  }

  async remove(id: string, context: WriteContext): Promise<void> {
    await this.databaseService.transaction(async (transaction) => {
      const current = await this.devicesRepository.lockById(transaction, id);
      if (!current) {
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }
      if (current.lifecycleStatus !== DEVICE_LIFECYCLE_STATUS.revoked) {
        throw new BadRequestException({
          code: 'device_must_be_revoked',
          message: 'A device must be revoked before it can be deleted'
        });
      }
      const removed = await this.devicesRepository.softDelete(transaction, id, new Date());
      if (!removed) {
        throw new NotFoundException({ code: 'device_not_found', message: 'Device not found' });
      }
      await this.auditService.record(transaction, {
        actorUserId: context.actorUserId,
        action: 'device.deleted',
        resourceType: 'device',
        resourceId: id,
        requestId: context.requestId,
        metadata: { displayName: current.displayName }
      });
    });
  }

  private toView(record: DeviceRecord, partitions: DevicePartitionAssignment[]): DeviceView {
    const connectionStatus =
      record.lifecycleStatus === DEVICE_LIFECYCLE_STATUS.revoked
        ? DEVICE_CONNECTION_STATUS.revoked
        : this.connectionsService?.isOnline(record.id)
          ? DEVICE_CONNECTION_STATUS.online
          : deriveDeviceConnectionStatus(record);
    return { ...record, connectionStatus, partitions };
  }
}
