import { Injectable } from '@nestjs/common';
import { and, count, desc, eq } from 'drizzle-orm';
import { DatabaseService } from '../database/database.service.js';
import { deviceErrorLog } from './device-error.schema.js';
import type { ReportDeviceErrorDto } from './dto/device-error.dto.js';

export type DeviceErrorRecord = typeof deviceErrorLog.$inferSelect;

@Injectable()
export class DeviceErrorsRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(deviceId: string, input: ReportDeviceErrorDto): Promise<DeviceErrorRecord> {
    const records = await this.databaseService.db
      .insert(deviceErrorLog)
      .values({
        deviceId,
        severity: input.severity,
        source: input.source,
        code: input.code,
        message: input.message,
        stack: input.stack,
        context: input.context,
        occurredAt: new Date(input.occurredAt)
      })
      .returning();
    return records[0]!;
  }

  async list(
    page: number,
    pageSize: number,
    filters: { deviceId?: string; severity?: DeviceErrorRecord['severity'] }
  ): Promise<{ records: DeviceErrorRecord[]; total: number }> {
    const conditions = [
      ...(filters.deviceId ? [eq(deviceErrorLog.deviceId, filters.deviceId)] : []),
      ...(filters.severity ? [eq(deviceErrorLog.severity, filters.severity)] : [])
    ];
    const where = conditions.length > 0 ? and(...conditions) : undefined;
    const [records, totals] = await Promise.all([
      this.databaseService.db
        .select()
        .from(deviceErrorLog)
        .where(where)
        .orderBy(desc(deviceErrorLog.occurredAt), desc(deviceErrorLog.id))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      this.databaseService.db.select({ value: count() }).from(deviceErrorLog).where(where)
    ]);
    return { records, total: totals[0]?.value ?? 0 };
  }
}
