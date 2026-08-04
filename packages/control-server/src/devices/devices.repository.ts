import type { DeviceIdentity, DeviceStateSnapshot } from '@dsz-examaware/control-protocol';
import { count, desc, eq, inArray } from 'drizzle-orm';
import { Injectable } from '@nestjs/common';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import { devicePartitionMembership } from '../partitions/partition.schema.js';
import { device } from './device.schema.js';

export type DeviceRecord = typeof device.$inferSelect;
export type DeviceUpdate = Partial<Pick<DeviceRecord, 'displayName' | 'labels'>>;

@Injectable()
export class DevicesRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async list(
    page: number,
    pageSize: number,
    partitionNodeIds?: string[]
  ): Promise<{ records: DeviceRecord[]; total: number }> {
    if (partitionNodeIds && partitionNodeIds.length === 0) {
      return { records: [], total: 0 };
    }

    const offset = (page - 1) * pageSize;
    const filter = partitionNodeIds
      ? inArray(
          device.id,
          this.databaseService.db
            .select({ deviceId: devicePartitionMembership.deviceId })
            .from(devicePartitionMembership)
            .where(inArray(devicePartitionMembership.nodeId, partitionNodeIds))
        )
      : undefined;
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select()
        .from(device)
        .where(filter)
        .orderBy(desc(device.updatedAt), desc(device.id))
        .limit(pageSize)
        .offset(offset),
      this.databaseService.db.select({ value: count() }).from(device).where(filter)
    ]);

    return { records, total: totals[0]?.value ?? 0 };
  }

  async findById(id: string): Promise<DeviceRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(device)
      .where(eq(device.id, id))
      .limit(1);
    return records[0];
  }

  findByIds(ids: string[]): Promise<DeviceRecord[]> {
    if (ids.length === 0) return Promise.resolve([]);
    return this.databaseService.db.select().from(device).where(inArray(device.id, ids));
  }

  async lockById(transaction: DatabaseTransaction, id: string): Promise<DeviceRecord | undefined> {
    const records = await transaction
      .select()
      .from(device)
      .where(eq(device.id, id))
      .limit(1)
      .for('update');
    return records[0];
  }

  async update(
    transaction: DatabaseTransaction,
    id: string,
    patch: DeviceUpdate | Pick<DeviceRecord, 'lifecycleStatus'>
  ): Promise<DeviceRecord | undefined> {
    const records = await transaction
      .update(device)
      .set({ ...patch, updatedAt: new Date() })
      .where(eq(device.id, id))
      .returning();
    return records[0];
  }

  async recordConnectionState(
    id: string,
    identity: DeviceIdentity,
    state: DeviceStateSnapshot | undefined,
    seenAt: Date
  ): Promise<void> {
    await this.databaseService.db
      .update(device)
      .set({
        platform: identity.platform,
        architecture: identity.architecture,
        appVersion: identity.appVersion,
        protocolVersion: String(identity.protocolVersion),
        lastSeenAt: seenAt,
        ...(state === undefined ? {} : { lastReportedState: state }),
        updatedAt: seenAt
      })
      .where(eq(device.id, id));
  }

  async recordHeartbeat(id: string, state: DeviceStateSnapshot, seenAt: Date): Promise<void> {
    await this.databaseService.db
      .update(device)
      .set({ lastSeenAt: seenAt, lastReportedState: state, updatedAt: seenAt })
      .where(eq(device.id, id));
  }
}
