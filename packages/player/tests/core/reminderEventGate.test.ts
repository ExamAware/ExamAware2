import { describe, expect, it } from 'vitest';
import { ReminderEventGate, createReminderOccurrenceKey } from '../../src/core/reminderEventGate';

const exam = {
  id: 'math-1',
  name: 'Mathematics',
  start: '2026-07-12T09:00:00',
  end: '2026-07-12T10:00:00'
};

describe('ReminderEventGate', () => {
  it('accepts each semantic kind once for an occurrence', () => {
    const gate = new ReminderEventGate();

    for (const kind of ['start', 'alert', 'end'] as const) {
      expect(gate.accept(kind, exam)).toBe(true);
      expect(gate.accept(kind, { ...exam })).toBe(false);
    }
  });

  it('distinguishes reused IDs and names by start and end timestamps', () => {
    const gate = new ReminderEventGate();
    const later = {
      ...exam,
      start: '2026-07-12T11:00:00',
      end: '2026-07-12T12:00:00'
    };

    expect(gate.accept('start', exam)).toBe(true);
    expect(gate.accept('start', later)).toBe(true);
  });

  it('uses structured serialization so delimiter-like values cannot collide', () => {
    const first = { id: 'a:b', start: 'c', end: 'd' };
    const second = { id: 'a', start: 'b:c', end: 'd' };

    expect(createReminderOccurrenceKey('alert', first)).not.toBe(
      createReminderOccurrenceKey('alert', second)
    );
  });

  it('preserves exact string identities instead of coercing numeric-looking IDs', () => {
    const gate = new ReminderEventGate();
    const occurrence = { start: exam.start, end: exam.end };

    expect(gate.accept('start', { ...occurrence, id: '001' })).toBe(true);
    expect(gate.accept('start', { ...occurrence, id: '1' })).toBe(true);
  });

  it('type-tags identities so numeric and string IDs cannot collide', () => {
    const occurrence = { start: exam.start, end: exam.end };

    expect(createReminderOccurrenceKey('start', { ...occurrence, id: 1 })).not.toBe(
      createReminderOccurrenceKey('start', { ...occurrence, id: '1' })
    );
  });

  it('normalizes supported timestamp values independently from identity', () => {
    const first = {
      id: '42',
      start: new Date('2026-07-12T09:00:00.000Z'),
      end: 1_752_311_600_000
    };
    const second = {
      id: '42',
      start: '2026-07-12T09:00:00.000Z',
      end: '1752311600000'
    };

    expect(createReminderOccurrenceKey('start', first)).toBe(
      createReminderOccurrenceKey('start', second)
    );
  });

  it('uses start and end to distinguish occurrences without ID or name', () => {
    const gate = new ReminderEventGate();
    const unnamed = { start: '2026-07-12T09:00:00', end: '2026-07-12T10:00:00' };

    expect(gate.accept('end', unnamed)).toBe(true);
    expect(gate.accept('end', { ...unnamed })).toBe(false);
    expect(gate.accept('end', { ...unnamed, end: '2026-07-12T10:30:00' })).toBe(true);
  });

  it.each([null, undefined, 7, 'exam', {}, { id: 'x' }, { start: 'x' }, { end: 'y' }])(
    'rejects a truly unidentifiable or malformed occurrence: %j',
    (value) => {
      expect(createReminderOccurrenceKey('start', value)).toBeNull();
      expect(new ReminderEventGate().accept('start', value)).toBe(false);
    }
  );

  it('accepts the same occurrence again after reset', () => {
    const gate = new ReminderEventGate();

    expect(gate.accept('alert', exam)).toBe(true);
    expect(gate.accept('alert', exam)).toBe(false);
    gate.reset();
    expect(gate.accept('alert', exam)).toBe(true);
  });

  it('keeps independent schedule gates independent', () => {
    const firstSchedule = new ReminderEventGate();
    const secondSchedule = new ReminderEventGate();

    expect(firstSchedule.accept('start', exam)).toBe(true);
    expect(firstSchedule.accept('start', exam)).toBe(false);
    expect(secondSchedule.accept('start', exam)).toBe(true);
  });
});
