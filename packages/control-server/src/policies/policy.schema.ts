import type { ManagedSetting } from '@dsz-examaware/control-protocol';
import {
  boolean,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid
} from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';
import { device } from '../devices/device.schema.js';
import { partitionNode } from '../partitions/partition.schema.js';

export const devicePolicy = pgTable(
  'device_policy',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    name: text('name').notNull(),
    description: text('description').default('').notNull(),
    priority: integer('priority').default(100).notNull(),
    enabled: boolean('enabled').default(true).notNull(),
    settings: jsonb('settings').$type<ManagedSetting[]>().default([]).notNull(),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    uniqueIndex('device_policy_name_unique').on(table.name),
    index('device_policy_priority_idx').on(table.enabled, table.priority)
  ]
);

export const devicePolicyDevice = pgTable(
  'device_policy_device',
  {
    policyId: uuid('policy_id')
      .notNull()
      .references(() => devicePolicy.id, { onDelete: 'cascade' }),
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'cascade' })
  },
  (table) => [uniqueIndex('device_policy_device_unique').on(table.policyId, table.deviceId)]
);

export const devicePolicyPartition = pgTable(
  'device_policy_partition',
  {
    policyId: uuid('policy_id')
      .notNull()
      .references(() => devicePolicy.id, { onDelete: 'cascade' }),
    partitionNodeId: uuid('partition_node_id')
      .notNull()
      .references(() => partitionNode.id, { onDelete: 'cascade' })
  },
  (table) => [
    uniqueIndex('device_policy_partition_unique').on(table.policyId, table.partitionNodeId)
  ]
);
