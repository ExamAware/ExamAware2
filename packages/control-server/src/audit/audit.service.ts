import { Injectable } from '@nestjs/common';
import type { DatabaseTransaction } from '../database/client.js';
import { auditLog } from './audit.schema.js';
import type { AuditMetadata } from './audit.schema.js';

export interface AuditEntry {
  actorUserId: string;
  action: string;
  resourceType: string;
  resourceId?: string;
  requestId: string;
  metadata?: AuditMetadata;
}

@Injectable()
export class AuditService {
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
