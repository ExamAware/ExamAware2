import { Injectable } from '@nestjs/common';
import { asc, desc, eq, inArray } from 'drizzle-orm';
import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import { devicePolicy, devicePolicyDevice, devicePolicyPartition } from './policy.schema.js';

export type DevicePolicyRecord = typeof devicePolicy.$inferSelect;

@Injectable()
export class PoliciesRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  list(): Promise<DevicePolicyRecord[]> {
    return this.databaseService.db
      .select()
      .from(devicePolicy)
      .orderBy(desc(devicePolicy.priority), asc(devicePolicy.name));
  }

  async findById(id: string): Promise<DevicePolicyRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(devicePolicy)
      .where(eq(devicePolicy.id, id))
      .limit(1);
    return records[0];
  }

  async targets(id: string): Promise<{ deviceIds: string[]; partitionNodeIds: string[] }> {
    const [devices, partitions] = await Promise.all([
      this.databaseService.db
        .select({ id: devicePolicyDevice.deviceId })
        .from(devicePolicyDevice)
        .where(eq(devicePolicyDevice.policyId, id)),
      this.databaseService.db
        .select({ id: devicePolicyPartition.partitionNodeId })
        .from(devicePolicyPartition)
        .where(eq(devicePolicyPartition.policyId, id))
    ]);
    return {
      deviceIds: devices.map((item) => item.id),
      partitionNodeIds: partitions.map((item) => item.id)
    };
  }

  async create(
    transaction: DatabaseTransaction,
    input: {
      name: string;
      description: string;
      priority: number;
      enabled: boolean;
      settings: ManagedSetting[];
      createdBy: string;
    }
  ): Promise<DevicePolicyRecord> {
    const records = await transaction.insert(devicePolicy).values(input).returning();
    return records[0]!;
  }

  async update(
    transaction: DatabaseTransaction,
    id: string,
    patch: Partial<
      Pick<DevicePolicyRecord, 'name' | 'description' | 'priority' | 'enabled' | 'settings'>
    >
  ): Promise<DevicePolicyRecord | undefined> {
    const records = await transaction
      .update(devicePolicy)
      .set({ ...patch, updatedAt: new Date() })
      .where(eq(devicePolicy.id, id))
      .returning();
    return records[0];
  }

  async replaceTargets(
    transaction: DatabaseTransaction,
    policyId: string,
    deviceIds: string[],
    partitionNodeIds: string[]
  ): Promise<void> {
    await transaction.delete(devicePolicyDevice).where(eq(devicePolicyDevice.policyId, policyId));
    await transaction
      .delete(devicePolicyPartition)
      .where(eq(devicePolicyPartition.policyId, policyId));
    if (deviceIds.length) {
      await transaction
        .insert(devicePolicyDevice)
        .values(deviceIds.map((deviceId) => ({ policyId, deviceId })));
    }
    if (partitionNodeIds.length) {
      await transaction
        .insert(devicePolicyPartition)
        .values(partitionNodeIds.map((partitionNodeId) => ({ policyId, partitionNodeId })));
    }
  }

  async remove(
    transaction: DatabaseTransaction,
    id: string
  ): Promise<DevicePolicyRecord | undefined> {
    const records = await transaction
      .delete(devicePolicy)
      .where(eq(devicePolicy.id, id))
      .returning();
    return records[0];
  }

  async directPolicyIds(deviceId: string): Promise<string[]> {
    const rows = await this.databaseService.db
      .select({ policyId: devicePolicyDevice.policyId })
      .from(devicePolicyDevice)
      .where(eq(devicePolicyDevice.deviceId, deviceId));
    return rows.map((item) => item.policyId);
  }

  async nodePolicyTargets(nodeIds: string[]): Promise<Array<{ policyId: string; nodeId: string }>> {
    if (!nodeIds.length) return [];
    return this.databaseService.db
      .select({
        policyId: devicePolicyPartition.policyId,
        nodeId: devicePolicyPartition.partitionNodeId
      })
      .from(devicePolicyPartition)
      .where(inArray(devicePolicyPartition.partitionNodeId, nodeIds));
  }

  findByIds(ids: string[]): Promise<DevicePolicyRecord[]> {
    if (!ids.length) return Promise.resolve([]);
    return this.databaseService.db.select().from(devicePolicy).where(inArray(devicePolicy.id, ids));
  }
}
