import { describe, expect, it } from 'vitest';
import {
  formatLocalDateTime,
  formatTimeRange,
  getMinutesDifference,
  isTimeRangeOverlap,
  parseDateTime
} from '../src/utils';

describe('date utilities', () => {
  it('formats local fields with stable zero padding', () => {
    expect(formatLocalDateTime(new Date(2026, 0, 2, 3, 4, 5))).toBe('2026-01-02 03:04:05');
  });

  it('parses local timestamps without changing their local fields', () => {
    const parsed = parseDateTime('2026-01-02 03:04:05');
    expect(formatLocalDateTime(parsed)).toBe('2026-01-02 03:04:05');
  });

  it.each(['', 'not-a-date', '2026-02-30', '2026-02-30 03:04:05', '2025-02-29T03:04:05'])(
    'returns an invalid date for malformed calendar input %j',
    (value) => expect(parseDateTime(value).getTime()).toBeNaN()
  );

  it('accepts leap day in a leap year', () => {
    expect(Number.isFinite(parseDateTime('2024-02-29T03:04:05').getTime())).toBe(true);
    expect(Number.isFinite(parseDateTime('2024-02-29').getTime())).toBe(true);
  });

  it('returns a placeholder when either range endpoint is invalid', () => {
    expect(formatTimeRange(new Date(Number.NaN), new Date())).toBe('时间待设置');
    expect(formatTimeRange(new Date(), new Date(Number.NaN))).toBe('时间待设置');
  });

  it('treats adjacent ranges as non-overlapping and proper intersections as overlapping', () => {
    expect(
      isTimeRangeOverlap(
        '2026-01-01T09:00:00',
        '2026-01-01T10:00:00',
        '2026-01-01T10:00:00',
        '2026-01-01T11:00:00'
      )
    ).toBe(false);
    expect(
      isTimeRangeOverlap(
        '2026-01-01T09:00:00',
        '2026-01-01T10:00:00',
        '2026-01-01T09:59:59',
        '2026-01-01T11:00:00'
      )
    ).toBe(true);
  });

  it('returns false when any overlap endpoint is invalid', () => {
    expect(
      isTimeRangeOverlap(
        'invalid',
        '2026-01-01T10:00:00',
        '2026-01-01T09:00:00',
        '2026-01-01T11:00:00'
      )
    ).toBe(false);
  });

  it('rounds minute differences to the nearest whole minute', () => {
    expect(getMinutesDifference('2026-01-01T09:00:00', '2026-01-01T09:01:29')).toBe(1);
    expect(getMinutesDifference('2026-01-01T09:00:00', '2026-01-01T09:01:30')).toBe(2);
  });
});
