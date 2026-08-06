import type { ExamConfig, ExamConfigIssue } from '@dsz-examaware/core';
import {
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
import type { ExamStatus } from './exam-config.constants.js';

export const examConfig = pgTable(
  'exam_config',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    name: text('name').notNull(),
    latestVersion: integer('latest_version').default(0).notNull(),
    status: text('status').$type<ExamStatus>().default('draft').notNull(),
    assignedDeviceIds: jsonb('assigned_device_ids').$type<string[]>().default([]).notNull(),
    assignedPartitionNodeIds: jsonb('assigned_partition_node_ids')
      .$type<string[]>()
      .default([])
      .notNull(),
    deletedAt: timestamp('deleted_at', { withTimezone: true }),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull()
  },
  (table) => [index('exam_config_school_updated_at_idx').on(table.schoolId, table.updatedAt)]
);

export const examConfigVersion = pgTable(
  'exam_config_version',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    examConfigId: uuid('exam_config_id')
      .notNull()
      .references(() => examConfig.id, { onDelete: 'cascade' }),
    version: integer('version').notNull(),
    content: jsonb('content').$type<ExamConfig>().notNull(),
    contentHash: text('content_hash').notNull(),
    validationIssues: jsonb('validation_issues').$type<ExamConfigIssue[]>().default([]).notNull(),
    createdBy: text('created_by')
      .notNull()
      .references(() => user.id, { onDelete: 'restrict' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    uniqueIndex('exam_config_version_number_unique').on(table.examConfigId, table.version),
    index('exam_config_version_hash_idx').on(table.contentHash)
  ]
);
