import { Injectable } from '@nestjs/common';
import { and, count, desc, eq, ilike, or, type SQL } from 'drizzle-orm';
import type { Page } from '../api/pagination.dto.js';
import type { DatabaseTransaction } from '../database/client.js';
import { user } from '../database/auth-schema.js';
import { DatabaseService } from '../database/database.service.js';
import { auditLog } from './audit.schema.js';
import type { AuditMetadata } from './audit.schema.js';

export interface AuditEntry {
  actorUserId: string | null;
  action: string;
  resourceType: string;
  resourceId?: string;
  requestId: string;
  metadata?: AuditMetadata;
}

@Injectable()
export class AuditService {
  constructor(private readonly databaseService: DatabaseService) {}

  async list(
    page: number,
    pageSize: number,
    filters: { action?: string; resourceType?: string; actor?: string }
  ): Promise<
    Page<{
      id: string;
      actorUserId: string | null;
      actorUsername: string | null;
      action: string;
      resourceType: string;
      resourceId: string | null;
      requestId: string;
      metadata: AuditMetadata;
      createdAt: Date;
    }>
  > {
    const conditions: SQL[] = [];
    if (filters.action) conditions.push(eq(auditLog.action, filters.action));
    if (filters.resourceType) conditions.push(eq(auditLog.resourceType, filters.resourceType));
    if (filters.actor) {
      const pattern = `%${filters.actor.trim()}%`;
      conditions.push(or(ilike(user.username, pattern), ilike(user.name, pattern))!);
    }
    const where = conditions.length ? and(...conditions) : undefined;
    const base = this.databaseService.db
      .select({
        id: auditLog.id,
        actorUserId: auditLog.actorUserId,
        actorUsername: user.username,
        action: auditLog.action,
        resourceType: auditLog.resourceType,
        resourceId: auditLog.resourceId,
        requestId: auditLog.requestId,
        metadata: auditLog.metadata,
        createdAt: auditLog.createdAt
      })
      .from(auditLog)
      .leftJoin(user, eq(auditLog.actorUserId, user.id));
    const [items, totals] = await Promise.all([
      base
        .where(where)
        .orderBy(desc(auditLog.createdAt))
        .limit(pageSize)
        .offset((page - 1) * pageSize),
      this.databaseService.db
        .select({ value: count() })
        .from(auditLog)
        .leftJoin(user, eq(auditLog.actorUserId, user.id))
        .where(where)
    ]);
    return { items, page, pageSize, total: totals[0]?.value ?? 0 };
  }
  async record(transaction: DatabaseTransaction, entry: AuditEntry): Promise<void> {
    await transaction.insert(auditLog).values({
      actorUserId: entry.actorUserId,
      action: entry.action,
      resourceType: entry.resourceType,
      resourceId: entry.resourceId,
      requestId: entry.requestId,
      metadata: entry.metadata ?? {}
    });
  }
}
