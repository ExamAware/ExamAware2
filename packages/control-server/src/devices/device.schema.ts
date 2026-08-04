import type { DeviceStateSnapshot } from '@dsz-examaware/control-protocol';
import {
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid
} from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';

export const deviceLifecycleStatus = pgEnum('device_lifecycle_status', ['active', 'revoked']);

export type DeviceReportedState = DeviceStateSnapshot;

export const device = pgTable(
  'device',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    displayName: text('display_name').notNull(),
    lifecycleStatus: deviceLifecycleStatus('lifecycle_status').default('active').notNull(),
    platform: text('platform'),
    architecture: text('architecture'),
    appVersion: text('app_version'),
    protocolVersion: text('protocol_version'),
    labels: jsonb('labels').$type<string[]>().default([]).notNull(),
    lastSeenAt: timestamp('last_seen_at', { withTimezone: true }),
    lastReportedState: jsonb('last_reported_state').$type<DeviceReportedState>(),
    enrolledAt: timestamp('enrolled_at', { withTimezone: true }).defaultNow().notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull()
  },
  (table) => [
    index('device_school_status_idx').on(table.schoolId, table.lifecycleStatus),
    index('device_last_seen_at_idx').on(table.lastSeenAt),
    index('device_school_updated_at_idx').on(table.schoolId, table.updatedAt)
  ]
);

export const deviceEnrollmentCode = pgTable(
  'device_enrollment_code',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    codeHash: text('code_hash').notNull(),
    displayName: text('display_name'),
    partitionNodeIds: jsonb('partition_node_ids').$type<string[]>().default([]).notNull(),
    maxUses: integer('max_uses').default(1).notNull(),
    usedCount: integer('used_count').default(0).notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    revokedAt: timestamp('revoked_at', { withTimezone: true })
  },
  (table) => [
    uniqueIndex('device_enrollment_code_hash_unique').on(table.codeHash),
    index('device_enrollment_code_school_created_idx').on(table.schoolId, table.createdAt),
    index('device_enrollment_code_expires_idx').on(table.expiresAt)
  ]
);

export const deviceCredential = pgTable(
  'device_credential',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'cascade' }),
    credentialHash: text('credential_hash').notNull(),
    version: integer('version').default(1).notNull(),
    issuedAt: timestamp('issued_at', { withTimezone: true }).defaultNow().notNull(),
    lastUsedAt: timestamp('last_used_at', { withTimezone: true }),
    revokedAt: timestamp('revoked_at', { withTimezone: true })
  },
  (table) => [
    uniqueIndex('device_credential_device_unique').on(table.deviceId),
    uniqueIndex('device_credential_hash_unique').on(table.credentialHash)
  ]
);
