import { Injectable } from '@nestjs/common';
import { and, asc, count, eq, isNull } from 'drizzle-orm';
import type { ProctorCallRequest } from '@dsz-examaware/control-protocol';
import { DatabaseService } from '../database/database.service.js';
import { device } from '../devices/device.schema.js';
import { proctorCall } from './proctor-call.schema.js';

export type ProctorCallRecord = typeof proctorCall.$inferSelect;
export type ProctorCallView = ProctorCallRecord & { deviceDisplayName: string };

@Injectable()
export class ProctorCallsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(
    deviceId: string,
    schoolId: string,
    input: ProctorCallRequest
  ): Promise<ProctorCallView> {
    const records = await this.databaseService.db
      .insert(proctorCall)
      .values({
        deviceId,
        schoolId,
        roomNumber: input.roomNumber,
        message: input.message,
        occurredAt: new Date(input.occurredAt)
      })
      .returning();
    return this.requireView(records[0]!.id);
  }

  async listPending(
    page: number,
    pageSize: number
  ): Promise<{ records: ProctorCallView[]; total: number }> {
    const condition = isNull(proctorCall.acknowledgedAt);
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select(this.viewSelection())
        .from(proctorCall)
        .innerJoin(device, eq(proctorCall.deviceId, device.id))
        .where(condition)
        .orderBy(asc(proctorCall.occurredAt), asc(proctorCall.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      this.databaseService.db.select({ value: count() }).from(proctorCall).where(condition)
    ]);
    return { records, total: totals[0]?.value ?? 0 };
  }

  async acknowledge(id: string, userId: string): Promise<ProctorCallView | undefined> {
    const updated = await this.databaseService.db
      .update(proctorCall)
      .set({ acknowledgedAt: new Date(), acknowledgedBy: userId })
      .where(and(eq(proctorCall.id, id), isNull(proctorCall.acknowledgedAt)))
      .returning({ id: proctorCall.id });
    return updated[0] ? this.requireView(updated[0].id) : undefined;
  }

  private async requireView(id: string): Promise<ProctorCallView> {
    const records = await this.databaseService.db
      .select(this.viewSelection())
      .from(proctorCall)
      .innerJoin(device, eq(proctorCall.deviceId, device.id))
      .where(eq(proctorCall.id, id))
      .limit(1);
    return records[0]!;
  }

  private viewSelection() {
    return {
      id: proctorCall.id,
      schoolId: proctorCall.schoolId,
      deviceId: proctorCall.deviceId,
      roomNumber: proctorCall.roomNumber,
      message: proctorCall.message,
      occurredAt: proctorCall.occurredAt,
      receivedAt: proctorCall.receivedAt,
      acknowledgedAt: proctorCall.acknowledgedAt,
      acknowledgedBy: proctorCall.acknowledgedBy,
      deviceDisplayName: device.displayName
    };
  }
}
