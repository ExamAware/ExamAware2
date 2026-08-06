import { index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { user } from '../database/auth-schema.js';
import { device } from '../devices/device.schema.js';

export const proctorCall = pgTable(
  'proctor_call',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    schoolId: text('school_id').default('default').notNull(),
    deviceId: uuid('device_id')
      .notNull()
      .references(() => device.id, { onDelete: 'cascade' }),
    roomNumber: text('room_number'),
    message: text('message'),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).notNull(),
    receivedAt: timestamp('received_at', { withTimezone: true }).defaultNow().notNull(),
    acknowledgedAt: timestamp('acknowledged_at', { withTimezone: true }),
    acknowledgedBy: text('acknowledged_by').references(() => user.id, { onDelete: 'set null' })
  },
  (table) => [
    index('proctor_call_school_acknowledged_occurred_idx').on(
      table.schoolId,
      table.acknowledgedAt,
      table.occurredAt
    ),
    index('proctor_call_device_occurred_idx').on(table.deviceId, table.occurredAt)
  ]
);
