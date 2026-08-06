import { Injectable } from '@nestjs/common';
import { and, desc, eq, isNull, sql } from 'drizzle-orm';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import { devicePartitionMembership } from '../partitions/partition.schema.js';
import { device, deviceCredential, deviceEnrollmentCode } from './device.schema.js';
import { DEVICE_LIFECYCLE_STATUS } from './device.constants.js';

export type DeviceEnrollmentCodeRecord = typeof deviceEnrollmentCode.$inferSelect;
export type DeviceCredentialRecord = typeof deviceCredential.$inferSelect;
export type DeviceRecord = typeof device.$inferSelect;

export interface CreateEnrollmentCodeRecord {
  codeHash: string;
  displayName?: string;
  partitionNodeIds: string[];
  maxUses: number;
  expiresAt: Date;
  createdBy: string;
}

export interface EnrolledDeviceIdentity {
  displayName: string;
  platform: string;
  architecture: string;
  appVersion: string;
  protocolVersion: string;
}

@Injectable()
export class DeviceEnrollmentRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async listCodes(): Promise<Omit<DeviceEnrollmentCodeRecord, 'codeHash'>[]> {
    return this.databaseService.db
      .select({
        id: deviceEnrollmentCode.id,
        schoolId: deviceEnrollmentCode.schoolId,
        displayName: deviceEnrollmentCode.displayName,
        partitionNodeIds: deviceEnrollmentCode.partitionNodeIds,
        maxUses: deviceEnrollmentCode.maxUses,
        usedCount: deviceEnrollmentCode.usedCount,
        expiresAt: deviceEnrollmentCode.expiresAt,
        createdBy: deviceEnrollmentCode.createdBy,
        createdAt: deviceEnrollmentCode.createdAt,
        revokedAt: deviceEnrollmentCode.revokedAt
      })
      .from(deviceEnrollmentCode)
      .orderBy(desc(deviceEnrollmentCode.createdAt));
  }

  async createCode(
    transaction: DatabaseTransaction,
    input: CreateEnrollmentCodeRecord
  ): Promise<DeviceEnrollmentCodeRecord> {
    const records = await transaction.insert(deviceEnrollmentCode).values(input).returning();
    return records[0]!;
  }

  async lockCodeByHash(
    transaction: DatabaseTransaction,
    codeHash: string
  ): Promise<DeviceEnrollmentCodeRecord | undefined> {
    const records = await transaction
      .select()
      .from(deviceEnrollmentCode)
      .where(eq(deviceEnrollmentCode.codeHash, codeHash))
      .limit(1)
      .for('update');
    return records[0];
  }

  async consumeCode(transaction: DatabaseTransaction, id: string): Promise<void> {
    await transaction
      .update(deviceEnrollmentCode)
      .set({ usedCount: sql`${deviceEnrollmentCode.usedCount} + 1` })
      .where(eq(deviceEnrollmentCode.id, id));
  }

  async revokeCode(
    transaction: DatabaseTransaction,
    id: string,
    revokedAt: Date
  ): Promise<DeviceEnrollmentCodeRecord | undefined> {
    const records = await transaction
      .update(deviceEnrollmentCode)
      .set({ revokedAt })
      .where(eq(deviceEnrollmentCode.id, id))
      .returning();
    return records[0];
  }

  async createDevice(
    transaction: DatabaseTransaction,
    identity: EnrolledDeviceIdentity
  ): Promise<DeviceRecord> {
    const records = await transaction.insert(device).values(identity).returning();
    return records[0]!;
  }

  async replaceCredential(
    transaction: DatabaseTransaction,
    deviceId: string,
    credentialHash: string
  ): Promise<DeviceCredentialRecord> {
    const records = await transaction
      .insert(deviceCredential)
      .values({ deviceId, credentialHash })
      .onConflictDoUpdate({
        target: deviceCredential.deviceId,
        set: {
          credentialHash,
          version: sql`${deviceCredential.version} + 1`,
          issuedAt: new Date(),
          lastUsedAt: null,
          revokedAt: null
        }
      })
      .returning();
    return records[0]!;
  }

  async assignPartitions(
    transaction: DatabaseTransaction,
    deviceId: string,
    nodeIds: string[],
    assignedBy: string
  ): Promise<void> {
    if (nodeIds.length === 0) return;
    await transaction
      .insert(devicePartitionMembership)
      .values(nodeIds.map((nodeId) => ({ deviceId, nodeId, assignedBy })));
  }

  async findAuthenticatedDevice(
    deviceId: string,
    credentialHash: string
  ): Promise<DeviceRecord | undefined> {
    const records = await this.databaseService.db
      .select({ device })
      .from(deviceCredential)
      .innerJoin(device, eq(device.id, deviceCredential.deviceId))
      .where(
        and(
          eq(deviceCredential.deviceId, deviceId),
          eq(deviceCredential.credentialHash, credentialHash),
          isNull(deviceCredential.revokedAt),
          eq(device.lifecycleStatus, DEVICE_LIFECYCLE_STATUS.active)
        )
      )
      .limit(1);
    return records[0]?.device;
  }

  async markCredentialUsed(deviceId: string): Promise<void> {
    await this.databaseService.db
      .update(deviceCredential)
      .set({ lastUsedAt: new Date() })
      .where(and(eq(deviceCredential.deviceId, deviceId), isNull(deviceCredential.revokedAt)));
  }
}
