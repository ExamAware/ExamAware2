import { index, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';

export type AuditMetadata = Record<string, unknown>;

export const auditLog = pgTable(
  'audit_log',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    actorUserId: text('actor_user_id').references(() => user.id, { onDelete: 'set null' }),
    action: text('action').notNull(),
    resourceType: text('resource_type').notNull(),
    resourceId: text('resource_id'),
    requestId: uuid('request_id').notNull(),
    metadata: jsonb('metadata').$type<AuditMetadata>().default({}).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    index('audit_log_actor_user_id_idx').on(table.actorUserId),
    index('audit_log_resource_idx').on(table.resourceType, table.resourceId),
    index('audit_log_created_at_idx').on(table.createdAt)
  ]
);
