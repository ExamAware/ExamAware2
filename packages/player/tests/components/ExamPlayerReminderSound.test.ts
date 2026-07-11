// @vitest-environment jsdom

import { computed, nextTick, ref } from 'vue';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { PlayerEventHandlers } from '../../src/types';

vi.mock('../../src/useExamPlayer', () => ({ useExamPlayer: vi.fn() }));

import { useExamPlayer } from '../../src/useExamPlayer';
import ExamPlayer from '../../src/components/ExamPlayer.vue';

const firstExam = {
  id: 'shared-id',
  name: 'Mathematics',
  start: '2026-07-12T09:00:00',
  end: '2026-07-12T10:00:00',
  alertTime: 10
};
const secondExam = {
  ...firstExam,
  start: '2026-07-12T11:00:00',
  end: '2026-07-12T12:00:00'
};

const configWith = (exam = firstExam) => ({
  examName: 'Finals',
  message: '',
  examInfos: [exam]
});

let handlers: PlayerEventHandlers;
let currentExam: ReturnType<typeof ref<any>>;
let examStatus: ReturnType<typeof ref<any>>;
const updateConfig = vi.fn();

beforeEach(() => {
  vi.useFakeTimers();
  currentExam = ref(firstExam);
  examStatus = ref({ status: 'pending', timeRemaining: 60 * 60 * 1000 });
  updateConfig.mockReset();
  updateConfig.mockImplementation((newConfig: any) => {
    currentExam.value = newConfig?.examInfos?.[0] ?? null;
    examStatus.value = { status: 'pending', timeRemaining: 60 * 60 * 1000 };
    return true;
  });

  vi.mocked(useExamPlayer).mockImplementation((_examConfig, _config, _timeProvider, events) => {
    handlers = events;
    return {
      state: ref({ loaded: true }),
      examConfig: ref(configWith()),
      currentExam,
      sortedExamInfos: computed(() => [currentExam.value]),
      formattedExamInfos: computed(() => []),
      examStatus,
      currentExamName: computed(() => currentExam.value?.name ?? ''),
      currentExamTimeRange: computed(() => ''),
      remainingTime: computed(() => ''),
      formattedCurrentTime: computed(() => ''),
      switchToExam: vi.fn(),
      updateConfig,
      taskQueue: { stop: vi.fn(), start: vi.fn() }
    } as any;
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

const mountPlayer = (examConfig = configWith()) =>
  mount(ExamPlayer, {
    props: { examConfig, showActionBar: false },
    global: {
      stubs: {
        ClockCard: true,
        ExamInfoCard: true,
        ExamRoomCard: true,
        CurrentListCard: true,
        TDialog: true,
        TInput: true,
        TButton: true
      }
    }
  });

const colorfulEvents = (wrapper: ReturnType<typeof mountPlayer>, kind?: string) => {
  const events = wrapper.emitted('colorfulAlert') ?? [];
  return kind ? events.filter(([payload]) => payload.kind === kind) : events;
};

describe('ExamPlayer reminder sound events', () => {
  it.each([
    ['start', '考试开始', () => handlers.onExamStart?.(firstExam)],
    ['alert', '考试即将结束', () => handlers.onExamAlert?.(firstExam, 10)],
    ['end', '考试结束', () => handlers.onExamEnd?.(firstExam)]
  ] as const)('lets the direct %s handler win an open gate', async (kind, title, trigger) => {
    const wrapper = mountPlayer();

    trigger();
    await nextTick();

    expect(colorfulEvents(wrapper)).toEqual([[{ kind, title, exam: firstExam }]]);
    expect(wrapper.get('.colorful-title').text()).toBe(title);
    wrapper.unmount();
  });

  it('lets the threshold watcher win an open alert gate', async () => {
    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    const wrapper = mountPlayer();
    expect(colorfulEvents(wrapper, 'alert')).toEqual([]);

    examStatus.value = { status: 'inProgress', timeRemaining: 9 * 60 * 1000 };
    await nextTick();

    expect(colorfulEvents(wrapper, 'alert')).toEqual([
      [{ kind: 'alert', title: '考试即将结束', exam: firstExam }]
    ]);
    expect(wrapper.get('.colorful-title').text()).toBe('考试即将结束');
    wrapper.unmount();
  });

  it('lets the status watcher win an open start gate on pending to in-progress', async () => {
    const wrapper = mountPlayer();

    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    await nextTick();

    expect(colorfulEvents(wrapper)).toEqual([
      [{ kind: 'start', title: '考试开始', exam: firstExam }]
    ]);
    wrapper.unmount();
  });

  it('lets the status watcher win an open end gate on in-progress to completed', async () => {
    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    const wrapper = mountPlayer();

    examStatus.value = { status: 'completed', timeRemaining: 0 };
    await nextTick();

    expect(colorfulEvents(wrapper, 'end')).toEqual([
      [{ kind: 'end', title: '考试结束', exam: firstExam }]
    ]);
    expect(wrapper.get('.colorful-title').text()).toBe('考试结束');
    wrapper.unmount();
  });

  it('deduplicates handlers after watcher routes win first', async () => {
    const startWrapper = mountPlayer();
    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    await nextTick();
    handlers.onExamStart?.(firstExam);
    expect(colorfulEvents(startWrapper, 'start')).toHaveLength(1);
    startWrapper.unmount();

    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    const alertWrapper = mountPlayer();
    examStatus.value = { status: 'inProgress', timeRemaining: 9 * 60 * 1000 };
    await nextTick();
    handlers.onExamAlert?.(firstExam, 10);
    expect(colorfulEvents(alertWrapper, 'alert')).toHaveLength(1);
    alertWrapper.unmount();

    examStatus.value = { status: 'inProgress', timeRemaining: 20 * 60 * 1000 };
    const endWrapper = mountPlayer();
    examStatus.value = { status: 'completed', timeRemaining: 0 };
    await nextTick();
    handlers.onExamEnd?.(firstExam);
    expect(colorfulEvents(endWrapper, 'end')).toHaveLength(1);
    endWrapper.unmount();
  });

  it('converges handler, threshold, and status paths on one event per occurrence', async () => {
    const wrapper = mountPlayer();

    handlers.onExamStart?.(firstExam);
    examStatus.value = { status: 'inProgress', timeRemaining: 9 * 60 * 1000 };
    await nextTick();
    handlers.onExamAlert?.(firstExam, 10);
    examStatus.value = { status: 'completed', timeRemaining: 0 };
    await nextTick();
    handlers.onExamEnd?.(firstExam);

    expect(wrapper.emitted('colorfulAlert')).toEqual([
      [{ kind: 'start', title: '考试开始', exam: firstExam }],
      [{ kind: 'alert', title: '考试即将结束', exam: firstExam }],
      [{ kind: 'end', title: '考试结束', exam: firstExam }]
    ]);
    expect(wrapper.get('.colorful-title').text()).toBe('考试结束');

    examStatus.value = { status: 'pending', timeRemaining: 60 * 60 * 1000 };
    currentExam.value = secondExam;
    await nextTick();
    examStatus.value = { status: 'inProgress', timeRemaining: 60 * 60 * 1000 };
    await nextTick();

    expect(wrapper.emitted('colorfulAlert')).toHaveLength(4);
    expect(wrapper.emitted('colorfulAlert')?.[3]).toEqual([
      { kind: 'start', title: '考试开始', exam: secondExam }
    ]);
    wrapper.unmount();
  });

  it('resets all reminder state when the config object is replaced', async () => {
    const initialConfig = configWith();
    const wrapper = mountPlayer(initialConfig);

    handlers.onExamStart?.(firstExam);
    examStatus.value = { status: 'inProgress', timeRemaining: 9 * 60 * 1000 };
    await nextTick();
    expect(wrapper.emitted('colorfulAlert')).toHaveLength(2);

    (wrapper.props('examConfig') as any).message = 'deep update';
    await nextTick();
    handlers.onExamStart?.(firstExam);
    expect(wrapper.emitted('colorfulAlert')).toHaveLength(2);

    await wrapper.setProps({ examConfig: configWith(secondExam) });
    await nextTick();
    expect(colorfulEvents(wrapper)).toHaveLength(2);

    handlers.onExamStart?.(secondExam);
    await nextTick();

    expect(updateConfig).toHaveBeenCalled();
    expect(wrapper.emitted('colorfulAlert')).toHaveLength(3);
    expect(wrapper.emitted('colorfulAlert')?.[2]).toEqual([
      { kind: 'start', title: '考试开始', exam: secondExam }
    ]);
    wrapper.unmount();
  });

  it('rejects a structurally unidentifiable occurrence without overlay or sound event', async () => {
    const wrapper = mountPlayer();
    const malformed = { id: 'missing-times', name: 'Malformed' };

    handlers.onExamStart?.(malformed as any);
    await nextTick();

    expect(wrapper.find('.colorful-overlay').exists()).toBe(false);
    expect(wrapper.emitted('colorfulAlert')).toBeUndefined();
    wrapper.unmount();
  });
});
