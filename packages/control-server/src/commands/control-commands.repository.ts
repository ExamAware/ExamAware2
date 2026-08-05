import { Injectable } from '@nestjs/common';
import { and, count, desc, eq, gt, inArray, isNull, lte, sql } from 'drizzle-orm';
import { CONTROL_COMMAND_TYPES, type ControlCommand } from '@dsz-examaware/control-protocol';
import type { DatabaseTransaction } from '../database/client.js';
import { DatabaseService } from '../database/database.service.js';
import {
  COMMAND_TARGET_STATUS,
  controlCommand,
  controlCommandTarget
} from './control-command.schema.js';

export type ControlCommandRecord = typeof controlCommand.$inferSelect;
export type CommandTargetRecord = typeof controlCommandTarget.$inferSelect;
export type CommandTargetStatus = CommandTargetRecord['status'];

export interface CreateControlCommandRecord {
  id: string;
  command: ControlCommand;
  issuedBy: string;
  issuedAt: Date;
  expiresAt: Date;
  deviceIds: string[];
}

@Injectable()
export class ControlCommandsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    transaction: DatabaseTransaction,
    input: CreateControlCommandRecord
  ): Promise<ControlCommandRecord> {
    const records = await transaction
      .insert(controlCommand)
      .values({
        id: input.id,
        commandType: input.command.type,
        command: input.command,
        issuedBy: input.issuedBy,
        issuedAt: input.issuedAt,
        expiresAt: input.expiresAt
      })
      .returning();
    await transaction
      .insert(controlCommandTarget)
      .values(input.deviceIds.map((deviceId) => ({ commandId: input.id, deviceId })));
    return records[0]!;
  }

  async list(
    page: number,
    pageSize: number
  ): Promise<{ records: ControlCommandRecord[]; total: number }> {
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select()
        .from(controlCommand)
        .orderBy(desc(controlCommand.issuedAt), desc(controlCommand.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      this.databaseService.db.select({ value: count() }).from(controlCommand)
    ]);
    return { records, total: totals[0]?.value ?? 0 };
  }

  async findById(id: string): Promise<ControlCommandRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(controlCommand)
      .where(eq(controlCommand.id, id))
      .limit(1);
    return records[0];
  }

  async latestActivationForDeployment(
    deploymentId: string
  ): Promise<ControlCommandRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(controlCommand)
      .where(
        and(
          eq(controlCommand.commandType, CONTROL_COMMAND_TYPES.playbackActivate),
          sql`${controlCommand.command} -> 'payload' ->> 'deploymentId' = ${deploymentId}`
        )
      )
      .orderBy(desc(controlCommand.issuedAt), desc(controlCommand.id))
      .limit(1);
    return records[0];
  }

  async latestPrepareForExam(examConfigId: string): Promise<ControlCommandRecord | undefined> {
    const records = await this.databaseService.db
      .select()
      .from(controlCommand)
      .where(
        and(
          eq(controlCommand.commandType, CONTROL_COMMAND_TYPES.examConfigPrepare),
          sql`${controlCommand.command} -> 'payload' ->> 'examConfigId' = ${examConfigId}`
        )
      )
      .orderBy(desc(controlCommand.issuedAt), desc(controlCommand.id))
      .limit(1);
    return records[0];
  }

  targets(commandId: string): Promise<CommandTargetRecord[]> {
    return this.databaseService.db
      .select()
      .from(controlCommandTarget)
      .where(eq(controlCommandTarget.commandId, commandId));
  }

  async pendingForDevice(deviceId: string, now: Date): Promise<ControlCommandRecord[]> {
    const rows = await this.databaseService.db
      .select({ command: controlCommand })
      .from(controlCommandTarget)
      .innerJoin(controlCommand, eq(controlCommand.id, controlCommandTarget.commandId))
      .where(
        and(
          eq(controlCommandTarget.deviceId, deviceId),
          inArray(controlCommandTarget.status, [
            COMMAND_TARGET_STATUS.pending,
            COMMAND_TARGET_STATUS.delivered,
            COMMAND_TARGET_STATUS.acknowledged
          ]),
          gt(controlCommand.expiresAt, now),
          isNull(controlCommand.cancelledAt)
        )
      )
      .orderBy(controlCommand.issuedAt, controlCommand.id);
    return rows.map((row) => row.command);
  }

  async markDelivered(commandId: string, deviceId: string, deliveredAt: Date): Promise<void> {
    await this.databaseService.db
      .update(controlCommandTarget)
      .set({ status: COMMAND_TARGET_STATUS.delivered, deliveredAt })
      .where(
        and(
          eq(controlCommandTarget.commandId, commandId),
          eq(controlCommandTarget.deviceId, deviceId),
          eq(controlCommandTarget.status, COMMAND_TARGET_STATUS.pending)
        )
      );
  }
  async markCapabilityRejected(
    commandId: string,
    deviceId: string,
    completedAt: Date,
    errorCode: string,
    errorMessage: string
  ): Promise<void> {
    await this.databaseService.db
      .update(controlCommandTarget)
      .set({
        status: COMMAND_TARGET_STATUS.failed,
        completedAt,
        errorCode,
        errorMessage
      })
      .where(
        and(
          eq(controlCommandTarget.commandId, commandId),
          eq(controlCommandTarget.deviceId, deviceId),
          inArray(controlCommandTarget.status, [
            COMMAND_TARGET_STATUS.pending,
            COMMAND_TARGET_STATUS.delivered,
            COMMAND_TARGET_STATUS.acknowledged
          ])
        )
      );
  }

  async lockTarget(
    transaction: DatabaseTransaction,
    commandId: string,
    deviceId: string
  ): Promise<CommandTargetRecord | undefined> {
    const records = await transaction
      .select()
      .from(controlCommandTarget)
      .where(
        and(
          eq(controlCommandTarget.commandId, commandId),
          eq(controlCommandTarget.deviceId, deviceId)
        )
      )
      .limit(1)
      .for('update');
    return records[0];
  }

  async updateTarget(
    transaction: DatabaseTransaction,
    commandId: string,
    deviceId: string,
    patch: Partial<Omit<CommandTargetRecord, 'commandId' | 'deviceId'>>
  ): Promise<CommandTargetRecord> {
    const records = await transaction
      .update(controlCommandTarget)
      .set(patch)
      .where(
        and(
          eq(controlCommandTarget.commandId, commandId),
          eq(controlCommandTarget.deviceId, deviceId)
        )
      )
      .returning();
    return records[0]!;
  }

  async expireTargets(now: Date): Promise<string[]> {
    const expiredCommandIds = this.databaseService.db
      .select({ id: controlCommand.id })
      .from(controlCommand)
      .where(lte(controlCommand.expiresAt, now));
    const rows = await this.databaseService.db
      .update(controlCommandTarget)
      .set({ status: COMMAND_TARGET_STATUS.expired, completedAt: now })
      .where(
        and(
          inArray(controlCommandTarget.commandId, expiredCommandIds),
          inArray(controlCommandTarget.status, [
            COMMAND_TARGET_STATUS.pending,
            COMMAND_TARGET_STATUS.delivered,
            COMMAND_TARGET_STATUS.acknowledged
          ])
        )
      )
      .returning({ commandId: controlCommandTarget.commandId });
    return [...new Set(rows.map((row) => row.commandId))];
  }

  async deviceIdsByStatus(commandId: string, statuses: CommandTargetStatus[]): Promise<string[]> {
    if (statuses.length === 0) return [];
    const rows = await this.databaseService.db
      .select({ deviceId: controlCommandTarget.deviceId })
      .from(controlCommandTarget)
      .where(
        and(
          eq(controlCommandTarget.commandId, commandId),
          inArray(controlCommandTarget.status, statuses)
        )
      );
    return rows.map((row) => row.deviceId);
  }
}
