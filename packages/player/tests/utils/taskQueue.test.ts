import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ExamInfo } from '../../src/types';
import { ExamTaskQueue } from '../../src/utils/taskQueue';

const exam = (name = 'Math'): ExamInfo => ({
  name,
  start: '2026-07-11T10:00:00',
  end: '2026-07-11T11:00:00',
  alertTime: 15,
  materials: []
});

describe('ExamTaskQueue', () => {
  afterEach(() => vi.useRealTimers());

  it('keeps tasks with identical type, name, and execution time independent', () => {
    vi.useFakeTimers();
    let now = 1_000;
    const queue = new ExamTaskQueue(() => now);
    const first = vi.fn();
    const second = vi.fn();

    const firstId = queue.addTask(2_000, 'exam-start', exam(), first);
    const secondId = queue.addTask(2_000, 'exam-start', exam(), second);
    expect(firstId).not.toBe(secondId);
    expect(queue.getTaskCount()).toBe(2);

    queue.start();
    now = 2_000;
    vi.advanceTimersByTime(1_000);
    expect(first).toHaveBeenCalledOnce();
    expect(second).toHaveBeenCalledOnce();
  });

  it('does not rerun completed tasks after stop and restart', () => {
    vi.useFakeTimers();
    let now = 0;
    const queue = new ExamTaskQueue(() => now);
    const callback = vi.fn();
    queue.addTask(10, 'exam-end', exam(), callback);
    queue.start();
    now = 10;
    vi.advanceTimersByTime(10);
    queue.stop();
    queue.start();
    vi.runOnlyPendingTimers();
    expect(callback).toHaveBeenCalledOnce();
  });

  it('marks a throwing task failed without affecting another task at the same time', () => {
    vi.useFakeTimers();
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    let now = 0;
    const queue = new ExamTaskQueue(() => now);
    const next = vi.fn();
    queue.addTask(10, 'exam-start', exam('A'), () => {
      throw new Error('boom');
    });
    queue.addTask(10, 'exam-start', exam('B'), next);
    queue.start();
    now = 10;
    vi.advanceTimersByTime(10);

    expect(queue.getTaskDetails().map((task) => task.status)).toEqual(['failed', 'completed']);
    expect(next).toHaveBeenCalledOnce();
    errorSpy.mockRestore();
  });

  it.each([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY])(
    'rejects a non-finite execution time: %s',
    (executeTime) => {
      const queue = new ExamTaskQueue(() => 0);
      expect(() => queue.addTask(executeTime, 'exam-start', exam(), vi.fn())).toThrow(RangeError);
      expect(queue.getTaskCount()).toBe(0);
    }
  );

  it('chunks delays beyond the maximum platform timer delay', () => {
    vi.useFakeTimers();
    const maxDelay = 2_147_483_647;
    let now = 0;
    const queue = new ExamTaskQueue(() => now);
    const callback = vi.fn();
    queue.addTask(maxDelay + 5_000, 'exam-start', exam(), callback);
    queue.start();

    now = maxDelay;
    vi.advanceTimersByTime(maxDelay);
    expect(callback).not.toHaveBeenCalled();
    vi.advanceTimersByTime(4_999);
    expect(callback).not.toHaveBeenCalled();
    now += 5_000;
    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledOnce();
  });
});
