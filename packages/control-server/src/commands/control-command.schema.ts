import type { ControlCommand, DeviceStateSnapshot } from '@dsz-examaware/control-protocol';
import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';
import { device } from '../devices/device.schema.js';

export const COMMAND_TARGET_STATUS_VALUES = [
  'pending',
  'delivered',
  'acknowledged',
  'succeeded',
  'failed',
  'expired'
] as const;

export const COMMAND_TARGET_STATUS = {
  pending: COMMAND_TARGET_STATUS_VALUES[0],
  delivered: COMMAND_TARGET_STATUS_VALUES[1],
  acknowledged: COMMAND_TARGET_STATUS_VALUES[2],
  succeeded: COMMAND_TARGET_STATUS_VALUES[3],
  failed: COMMAND_TARGET_STATUS_VALUES[4],
  expired: COMMAND_TARGET_STATUS_VALUES[5]
} as const;

export type CommandTargetStatusValue = (typeof COMMAND_TARGET_STATUS_VALUES)[number];

export const commandTargetStatus = pgEnum('command_target_status', COMMAND_TARGET_STATUS_VALUES);

export const controlCommand = pgTable(
  'control_command',
  {
    id: uuid('id').primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    commandType: text('command_type').notNull(),
    command: jsonb('command').$type<ControlCommand>().notNull(),
    issuedBy: text('issued_by').references(() => user.id, { onDelete: 'restrict' }),
    issuedAt: timestamp('issued_at', { withTimezone: true }).notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    cancelledAt: timestamp('cancelled_at', { withTimezone: true })
  },
  (table) => [
    index('control_command_school_issued_idx').on(table.schoolId, table.issuedAt),
    index('control_command_expiry_idx').on(table.expiresAt)
  ]
);

export const controlCommandTarget = pgTable(
  'control_command_target',
  {
    commandId: uuid('command_id')
      .notNull()
      .references(() => controlCommand.id, { onDelete: 'cascade' }),
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'restrict' }),
    status: commandTargetStatus('status').default(COMMAND_TARGET_STATUS.pending).notNull(),
    deliveredAt: timestamp('delivered_at', { withTimezone: true }),
    acknowledgedAt: timestamp('acknowledged_at', { withTimezone: true }),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    errorCode: text('error_code'),
    errorMessage: text('error_message'),
    resultState: jsonb('result_state').$type<DeviceStateSnapshot>()
  },
  (table) => [
    primaryKey({ columns: [table.commandId, table.deviceId] }),
    index('control_command_target_device_status_idx').on(table.deviceId, table.status),
    index('control_command_target_command_status_idx').on(table.commandId, table.status)
  ]
);
