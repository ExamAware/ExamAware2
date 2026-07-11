import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ExamConfig } from '@dsz-examaware/core';
import type { ComputedRef } from 'vue';
import { getSortedExamConfig, parseDateTime } from '@dsz-examaware/core';
import type { ExamInfo } from '../../src/types';
import { ExamDataProcessor } from '../../src/utils/dataProcessor';
import { ExamPlayerCore } from '../../src/core/ExamPlayerCore';
import type { IExamConfigService, TimeProvider } from '../../src/core/interfaces';

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
  vi.restoreAllMocks();
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

  it('exposes the canonical sequence as a computed read-only ref', () => {
    const { core } = createCore(parseDateTime('2026-07-11T09:30:00').getTime());
    const sortedExamInfos: ComputedRef<readonly ExamInfo[]> = core.sortedExamInfos;

    expect(sortedExamInfos.value).toEqual([]);
  });

  it('does not let consumers reorder the canonical sequence', () => {
    vi.useFakeTimers();
    const { core } = createCore(parseDateTime('2026-07-11T09:30:00').getTime());
    core.updateConfig(unsortedConfig);
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);

    (core.sortedExamInfos.value as ExamInfo[]).reverse();

    expect(core.sortedExamInfos.value.map((exam) => exam.name)).toEqual(['early', 'late']);
    expect(core.currentExam.value?.name).toBe('early');
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

  it('formats the canonical sequence without sorting again as time changes', () => {
    vi.useFakeTimers();
    const getSortedConfig = vi.fn(getSortedExamConfig);
    const legacyFormatter = vi.spyOn(ExamDataProcessor, 'formatExamInfos');
    const core = new ExamPlayerCore(
      null,
      { roomNumber: '101' },
      { getCurrentTime: () => parseDateTime('2026-07-11T09:30:00').getTime() },
      {},
      { ...configService, getSortedConfig }
    );

    core.updateConfig(unsortedConfig);
    expect(core.formattedExamInfos.value.map((exam) => exam.name)).toEqual(['early', 'late']);
    core.currentTime.value = parseDateTime('2026-07-11T11:30:00').getTime();
    expect(core.formattedExamInfos.value.map((exam) => exam.name)).toEqual(['early', 'late']);

    expect(getSortedConfig).toHaveBeenCalledTimes(1);
    expect(legacyFormatter).not.toHaveBeenCalled();
    core.stop();
  });
});

describe('ExamPlayerCore time listener lifecycle', () => {
  it('subscribes once and removes the exact callback across restarts', () => {
    vi.useFakeTimers();
    let now = 0;
    const listeners = new Set<() => void>();
    const onTimeChange = vi.fn((callback: () => void) => listeners.add(callback));
    const offTimeChange = vi.fn((callback: () => void) => listeners.delete(callback));
    const provider: TimeProvider = {
      getCurrentTime: () => now,
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
    core.stop();
    expect(offTimeChange).toHaveBeenCalledTimes(1);
    now = 100;
    listeners.forEach((listener) => listener());
    expect(core.currentTime.value).toBe(0);
    core.start();
    expect(listeners.size).toBe(1);
    core.stop();
  });

  it('does not subscribe when the provider cannot detach listeners', () => {
    vi.useFakeTimers();
    const onTimeChange = vi.fn();
    const core = new ExamPlayerCore(
      null,
      { roomNumber: '101' },
      { getCurrentTime: () => 0, onTimeChange },
      {},
      configService
    );

    core.start();
    expect(onTimeChange).not.toHaveBeenCalled();
    core.stop();
  });
});
