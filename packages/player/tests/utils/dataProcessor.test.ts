import { describe, expect, it } from 'vitest';
import type { ExamConfig, ExamInfo } from '@dsz-examaware/core';
import { ExamDataProcessor } from '../../src/utils/dataProcessor';

const validExam: ExamInfo = {
  name: 'Math',
  start: '2026-07-11T09:00:00',
  end: '2026-07-11T10:00:00',
  alertTime: 10
};

function validate(overrides: Partial<ExamInfo> = {}) {
  const config: ExamConfig = {
    examName: 'Finals',
    message: '',
    examInfos: [{ ...validExam, ...overrides }]
  };
  return ExamDataProcessor.validateConfigWithDetails(config);
}

describe('ExamDataProcessor.validateConfigWithDetails', () => {
  it.each([
    ['invalid start', { start: 'not-a-date' }],
    ['invalid end', { end: 'not-a-date' }]
  ])('reports %s as an error', (_description, overrides) => {
    const result = validate(overrides);
    expect(result.errors).toContain('第1场考试：时间格式无效');
    expect(result.isValid).toBe(false);
  });

  it.each([
    ['non-string start', { start: 123 as unknown as string }],
    ['non-string end', { end: 123 as unknown as string }]
  ])('reports %s as an error instead of throwing', (_description, overrides) => {
    const result = validate(overrides);
    expect(result.errors).toContain('第1场考试：时间格式无效');
    expect(result.isValid).toBe(false);
  });

  it.each([
    ['equal', { end: validExam.start }],
    ['reversed', { start: '2026-07-11T11:00:00' }]
  ])('reports an %s time range as an error', (_description, overrides) => {
    const result = validate(overrides);
    expect(result.errors).toContain('第1场考试：开始时间必须早于结束时间');
    expect(result.isValid).toBe(false);
  });

  it.each([
    ['negative', -1],
    ['NaN', Number.NaN],
    ['infinite', Number.POSITIVE_INFINITY]
  ])('reports a %s alert time as an error', (_description, alertTime) => {
    const result = validate({ alertTime });
    expect(result.errors).toContain('第1场考试：提醒时间必须为非负有限数值');
    expect(result.isValid).toBe(false);
  });

  it('accepts zero alert time without an alert error', () => {
    const result = validate({ alertTime: 0 });
    expect(result.errors).not.toContain('第1场考试：提醒时间必须为非负有限数值');
    expect(result.isValid).toBe(true);
  });

  it('keeps the existing policy that an empty exam list is invalid', () => {
    const result = ExamDataProcessor.validateConfigWithDetails({
      examName: 'Finals',
      message: '',
      examInfos: []
    });
    expect(result.errors).toContain('至少需要一场考试');
    expect(result.isValid).toBe(false);
  });

  it('keeps finite alert times above 300 as warning-only', () => {
    const result = validate({ alertTime: 301 });
    expect(result.errors).toEqual([]);
    expect(result.warnings).toContain('第1场考试：提醒时间建议在0-300分钟之间');
    expect(result.isValid).toBe(true);
  });
});
