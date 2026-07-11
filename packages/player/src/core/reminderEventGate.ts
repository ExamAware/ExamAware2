export type ReminderEventKind = 'start' | 'alert' | 'end';

type ReminderExam = Record<string, unknown>;

type NormalizedIdentity = ['string', string] | ['number', string];

const normalizeIdentity = (value: unknown): NormalizedIdentity | null => {
  if (typeof value === 'string') return value.length > 0 ? ['string', value] : null;
  if (typeof value === 'number' && Number.isFinite(value)) return ['number', String(value)];
  return null;
};

const normalizeTimestamp = (value: unknown): string | null => {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value.toISOString();
  }
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : null;
  if (typeof value !== 'string' || value.length === 0) return null;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? String(numeric) : value;
};

export const createReminderOccurrenceKey = (
  kind: ReminderEventKind,
  value: unknown
): string | null => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;

  const exam = value as ReminderExam;
  const start = normalizeTimestamp(exam.start);
  const end = normalizeTimestamp(exam.end);
  if (start === null || end === null) return null;

  const id = normalizeIdentity(exam.id);
  const name = normalizeIdentity(exam.name);
  const identity = id !== null ? ['id', id] : name !== null ? ['name', name] : ['time'];
  return JSON.stringify([kind, identity, start, end]);
};

export class ReminderEventGate {
  private readonly accepted = new Set<string>();

  accept(kind: ReminderEventKind, exam: unknown): boolean {
    const key = createReminderOccurrenceKey(kind, exam);
    if (key === null || this.accepted.has(key)) return false;
    this.accepted.add(key);
    return true;
  }

  reset(): void {
    this.accepted.clear();
  }
}
