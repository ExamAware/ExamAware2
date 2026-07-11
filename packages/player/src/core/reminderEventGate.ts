export type ReminderEventKind = 'start' | 'alert' | 'end';

type ReminderExam = Record<string, unknown>;

const normalizePart = (value: unknown): string | null => {
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
  const start = normalizePart(exam.start);
  const end = normalizePart(exam.end);
  if (start === null || end === null) return null;

  const id = normalizePart(exam.id);
  const name = normalizePart(exam.name);
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
