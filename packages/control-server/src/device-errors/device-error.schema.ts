import { DEVICE_ERROR_SEVERITY_VALUES } from '@dsz-examaware/control-protocol';
import type { DeviceErrorContext } from '@dsz-examaware/control-protocol';
import { index, jsonb, pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { device } from '../devices/device.schema.js';

export const deviceErrorSeverity = pgEnum('device_error_severity', DEVICE_ERROR_SEVERITY_VALUES);

export const deviceErrorLog = pgTable(
  'device_error_log',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'cascade' }),
    severity: deviceErrorSeverity('severity').notNull(),
    source: text('source').notNull(),
    code: text('code'),
    message: text('message').notNull(),
    stack: text('stack'),
    context: jsonb('context').$type<DeviceErrorContext>().default({}).notNull(),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
    receivedAt: timestamp('received_at', { withTimezone: true }).defaultNow().notNull()
  },
  (table) => [
    index('device_error_log_device_occurred_idx').on(table.deviceId, table.occurredAt),
    index('device_error_log_severity_occurred_idx').on(table.severity, table.occurredAt)
  ]
);
