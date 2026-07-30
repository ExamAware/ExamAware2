import { describe, expect, it } from 'vitest';
import type { ExamConfig, ExamInfo } from '../src/types';
import {
  hasExamTimeOverlap,
  normalizeExamConfig,
  parseExamConfigDetailed,
  validateExamConfig,
  validateExamConfigDetailed,
  validateExamConfigStructure
} from '../src/parser';

const validExam: ExamInfo = {
  name: 'Math',
  start: '2026-07-11T09:00:00',
  end: '2026-07-11T10:00:00',
  alertTime: 10
};

function configWith(...examInfos: ExamInfo[]): ExamConfig {
  return { examName: 'Finals', message: '', examInfos };
}

describe('validateExamConfig', () => {
  it.each([
    ['invalid start', { start: 'not-a-date' }],
    ['invalid end', { end: 'not-a-date' }],
    ['calendar date rollover', { start: '2026-02-30T09:00:00' }],
    ['date-only calendar rollover', { start: '2026-02-30' }],
    ['non-leap February 29', { start: '2025-02-29T09:00:00' }],
    ['reversed range', { start: '2026-07-11T11:00:00' }],
    ['equal range', { end: validExam.start }],
    ['negative alert time', { alertTime: -1 }],
    ['NaN alert time', { alertTime: Number.NaN }],
    ['infinite alert time', { alertTime: Number.POSITIVE_INFINITY }]
  ])('rejects %s', (_description, overrides) => {
    expect(validateExamConfig(configWith({ ...validExam, ...overrides }))).toBe(false);
  });

  it('accepts zero alert time', () => {
    expect(validateExamConfig(configWith({ ...validExam, alertTime: 0 }))).toBe(true);
  });

  it('keeps the existing policy that an empty exam list is valid', () => {
    expect(validateExamConfig(configWith())).toBe(true);
  });
});

describe('validateExamConfigStructure', () => {
  it('allows an equal time range to be opened for repair in the editor', () => {
    const repairableConfig = configWith({ ...validExam, end: validExam.start });

    expect(validateExamConfigStructure(repairableConfig)).toBe(true);
    expect(validateExamConfig(repairableConfig)).toBe(false);
  });

  it('still rejects malformed field types', () => {
    const malformedConfig = configWith({ ...validExam, alertTime: '10' as unknown as number });

    expect(validateExamConfigStructure(malformedConfig)).toBe(false);
  });
});

describe('hasExamTimeOverlap', () => {
  it('treats adjacent exams as non-overlapping', () => {
    const next = {
      ...validExam,
      name: 'English',
      start: validExam.end,
      end: '2026-07-11T11:00:00'
    };
    expect(hasExamTimeOverlap(configWith(validExam, next))).toBe(false);
  });

  it.each([
    ['invalid start', { start: 'not-a-date' }],
    ['invalid end', { end: 'not-a-date' }],
    ['reversed range', { start: '2026-07-11T11:00:00' }],
    ['equal range', { end: validExam.start }]
  ])('returns false when an exam has an %s', (_description, overrides) => {
    const overlapping = {
      ...validExam,
      name: 'English',
      start: '2026-07-11T09:30:00',
      end: '2026-07-11T10:30:00'
    };
    expect(hasExamTimeOverlap(configWith({ ...validExam, ...overrides }, overlapping))).toBe(false);
  });

  it('detects a true overlap', () => {
    const overlapping = {
      ...validExam,
      name: 'English',
      start: '2026-07-11T09:30:00',
      end: '2026-07-11T10:30:00'
    };
    expect(hasExamTimeOverlap(configWith(overlapping, validExam))).toBe(true);
  });
});

describe('detailed configuration validation', () => {
  it('returns structured JSON diagnostics without throwing', () => {
    const result = parseExamConfigDetailed('{ nope');

    expect(result.valid).toBe(false);
    expect(result.errors).toEqual([
      expect.objectContaining({ code: 'invalid-json', path: '$', severity: 'error' })
    ]);
  });

  it('can downgrade overlap to a warning and returns a sorted clone', () => {
    const later = {
      ...validExam,
      name: 'Later',
      start: '2026-07-11T09:30:00',
      end: '2026-07-11T10:30:00'
    };
    const input = configWith(later, validExam);
    const result = validateExamConfigDetailed(input, { overlap: 'warning' });

    expect(result.valid).toBe(true);
    expect(result.warnings).toEqual([expect.objectContaining({ code: 'overlap' })]);
    expect(result.config?.examInfos.map((exam) => exam.name)).toEqual(['Math', 'Later']);
    expect(result.config).not.toBe(input);
    expect(result.config?.examInfos).not.toBe(input.examInfos);
  });

  it('reports field paths for malformed nested material data', () => {
    const result = validateExamConfigDetailed(
      configWith({
        ...validExam,
        materials: [{ name: '', unit: '', quantity: -1 }]
      })
    );

    expect(result.errors.map((issue) => [issue.code, issue.path])).toEqual([
      ['required', '$.examInfos[0].materials[0].name'],
      ['required', '$.examInfos[0].materials[0].unit'],
      ['invalid-number', '$.examInfos[0].materials[0].quantity']
    ]);
  });

  it('normalizes order without mutating the caller', () => {
    const first = {
      ...validExam,
      name: 'First',
      start: '2026-07-11T08:00:00',
      end: '2026-07-11T08:30:00'
    };
    const input = configWith(validExam, first);

    expect(normalizeExamConfig(input).examInfos.map((exam) => exam.name)).toEqual([
      'First',
      'Math'
    ]);
    expect(input.examInfos.map((exam) => exam.name)).toEqual(['Math', 'First']);
  });
});
