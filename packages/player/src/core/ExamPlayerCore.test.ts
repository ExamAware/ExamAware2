import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ExamConfig } from '@dsz-examaware/core';
import { getSortedExamConfig, parseDateTime } from '@dsz-examaware/core';
import { ExamPlayerCore } from './ExamPlayerCore';
import type { IExamConfigService, TimeProvider } from './interfaces';

const early = {
  name: 'early',
  start: '2026-07-11T09:00:00',
  end: '2026-07-11T10:00:00',
  alertTime: 10
};
const late = {
  name: 'late',
  start: '2026-07-11T11:00:00',
  end: '2026-07-11T12:00:00',
  alertTime: 10
};
const unsortedConfig: ExamConfig = {
  examName: 'Finals',
  message: '',
  examInfos: [late, early]
};
const configService: IExamConfigService = {
  validate: () => true,
  hasOverlap: () => false,
  getSortedConfig: getSortedExamConfig,
  parse: parseDateTime
};

function createCore(now: number, onExamSwitch = vi.fn()) {
  const timeProvider: TimeProvider = { getCurrentTime: () => now };
  return {
    core: new ExamPlayerCore(
      null,
      { roomNumber: '101' },
      timeProvider,
      { onExamSwitch },
      configService
    ),
    onExamSwitch
  };
}

afterEach(() => {
  vi.useRealTimers();
});

describe('ExamPlayerCore exam ordering', () => {
  it('uses the sorted sequence for selection and manual switching', () => {
    vi.useFakeTimers();
    const { core, onExamSwitch } = createCore(parseDateTime('2026-07-11T09:30:00').getTime());

    expect(core.updateConfig(unsortedConfig)).toBe(true);
    expect(core.sortedExamInfos.value.map((exam) => exam.name)).toEqual(['early', 'late']);
    expect(core.state.value.currentExamIndex).toBe(0);
    expect(core.currentExam.value?.name).toBe('early');
    expect(core.examStatus.value.status).toBe('inProgress');

    expect(core.switchToExam(1)).toBe(true);
    expect(core.currentExam.value?.name).toBe('late');
    expect(onExamSwitch).toHaveBeenLastCalledWith(early, late);
    core.stop();
  });

  it('emits one sorted exam transition when time advances', () => {
    vi.useFakeTimers();
    const { core, onExamSwitch } = createCore(parseDateTime('2026-07-11T09:30:00').getTime());
    core.updateConfig(unsortedConfig);
    onExamSwitch.mockClear();

    core.currentTime.value = parseDateTime('2026-07-11T11:30:00').getTime();
    core.updateCurrentExam();

    expect(core.state.value.currentExamIndex).toBe(1);
    expect(core.currentExam.value?.name).toBe('late');
    expect(core.examStatus.value.status).toBe('inProgress');
    expect(onExamSwitch).toHaveBeenCalledTimes(1);
    expect(onExamSwitch).toHaveBeenCalledWith(early, late);
    core.stop();
  });
});

describe('ExamPlayerCore time listener lifecycle', () => {
  it('subscribes once and removes the exact callback across restarts', () => {
    vi.useFakeTimers();
    const listeners = new Set<() => void>();
    const onTimeChange = vi.fn((callback: () => void) => listeners.add(callback));
    const offTimeChange = vi.fn((callback: () => void) => listeners.delete(callback));
    const provider: TimeProvider = {
      getCurrentTime: () => 0,
      onTimeChange,
      offTimeChange
    };
    const core = new ExamPlayerCore(null, { roomNumber: '101' }, provider, {}, configService);

    expect(listeners.size).toBe(0);
    core.start();
    expect(listeners.size).toBe(1);
    core.start();
    expect(listeners.size).toBe(1);
    const registeredCallback = onTimeChange.mock.calls[0][0];
    core.stop();
    expect(listeners.size).toBe(0);
    expect(offTimeChange).toHaveBeenCalledWith(registeredCallback);
    core.start();
    expect(listeners.size).toBe(1);
    core.stop();
  });
});
