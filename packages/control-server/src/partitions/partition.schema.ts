import { sql } from 'drizzle-orm';
import {
  boolean,
  foreignKey,
  index,
  integer,
  jsonb,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
  uuid
} from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';
import { device } from '../devices/device.schema.js';

export type PartitionMetadata = Record<string, string | number | boolean | null>;

export const partitionDimension = pgTable(
  'partition_dimension',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    key: text('key').notNull(),
    name: text('name').notNull(),
    description: text('description'),
    allowMultiple: boolean('allow_multiple').default(false).notNull(),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull()
  },
  (table) => [
    uniqueIndex('partition_dimension_school_key_unique').on(table.schoolId, table.key),
    index('partition_dimension_school_name_idx').on(table.schoolId, table.name)
  ]
);

export const partitionNode = pgTable(
  'partition_node',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    dimensionId: uuid('dimension_id')
      .notNull()
      .references(() => partitionDimension.id, { onDelete: 'cascade' }),
    parentId: uuid('parent_id'),
    name: text('name').notNull(),
    description: text('description'),
    metadata: jsonb('metadata').$type<PartitionMetadata>().default({}).notNull(),
    sortOrder: integer('sort_order').default(0).notNull(),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull()
  },
  (table) => [
    foreignKey({
      name: 'partition_node_parent_id_fk',
      columns: [table.parentId],
      foreignColumns: [table.id]
    }).onDelete('cascade'),
    index('partition_node_dimension_parent_idx').on(
      table.dimensionId,
      table.parentId,
      table.sortOrder
    ),
    uniqueIndex('partition_node_sibling_name_unique').on(
      table.dimensionId,
      sql`coalesce(${table.parentId}, '00000000-0000-0000-0000-000000000000'::uuid)`,
      table.name
    )
  ]
);

export const devicePartitionMembership = pgTable(
  'device_partition_membership',
  {
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'cascade' }),
    nodeId: uuid('node_id')
      .notNull()
      .references(() => partitionNode.id, { onDelete: 'cascade' }),
    assignedBy: text('assigned_by').references(() => user.id, { onDelete: 'set null' }),
    assignedAt: timestamp('assigned_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    primaryKey({ columns: [table.deviceId, table.nodeId] }),
    index('device_partition_membership_node_idx').on(table.nodeId),
    index('device_partition_membership_device_idx').on(table.deviceId)
  ]
);
