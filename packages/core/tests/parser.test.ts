import { describe, expect, it } from 'vitest';
import type { ExamConfig, ExamInfo } from '../src/types';
import { hasExamTimeOverlap, validateExamConfig } from '../src/parser';

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
