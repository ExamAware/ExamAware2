// @vitest-environment jsdom

import { computed, defineComponent, h, nextTick, ref, type PropType } from 'vue';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { PlayerThemeContext, PlayerThemeDefinition } from '../../src/types/theme';
import { trainStationPlayerTheme } from '../../src/themes';
import type { PlayerEventHandlers } from '../../src/types';

vi.mock('../../src/useExamPlayer', () => ({ useExamPlayer: vi.fn() }));

import { useExamPlayer } from '../../src/useExamPlayer';
import ExamPlayer from '../../src/components/ExamPlayer.vue';
import ActionButtonBar from '../../src/components/ActionButtonBar.vue';

const exam = {
  name: 'Mathematics',
  start: '2026-07-12T09:00:00',
  end: '2026-07-12T10:00:00'
};

const DummyCard = defineComponent({
  setup: () => () => h('div')
});

const cards = {
  clock: DummyCard,
  examInfo: DummyCard,
  room: DummyCard,
  list: DummyCard
};

const CustomTheme = defineComponent({
  props: {
    context: { type: Object as PropType<PlayerThemeContext>, required: true }
  },
  setup(props) {
    return () =>
      h('div', { class: 'custom-theme' }, [
        h('span', { class: 'custom-exam-name' }, props.context.currentExamName.value),
        props.context.slots.title?.()
      ]);
  }
});

const customTheme: PlayerThemeDefinition = {
  id: 'test:custom',
  name: 'Custom',
  order: 10,
  component: CustomTheme
};

const TakeoverTheme = defineComponent({
  props: {
    context: { type: Object as PropType<PlayerThemeContext>, required: true }
  },
  setup(props) {
    return () =>
      h('div', { class: 'takeover-theme' }, [
        h('div', { class: 'takeover-action' }, 'custom controls'),
        h(
          'div',
          { class: 'takeover-alert' },
          props.context.alerts.colorful.value?.title ?? 'no-alert'
        ),
        h(
          'div',
          { class: 'takeover-notice' },
          props.context.alerts.notice.value?.markdown ?? 'no-notice'
        )
      ]);
  }
});

const takeoverTheme: PlayerThemeDefinition = {
  id: 'test:takeover',
  name: 'Takeover',
  chrome: {
    actionBar: true,
    colorfulAlert: true,
    notice: true
  },
  component: TakeoverTheme
};

const ReuseChromeTheme = defineComponent({
  props: {
    context: { type: Object as PropType<PlayerThemeContext>, required: true }
  },
  setup(props) {
    return () =>
      h('div', { class: 'reuse-chrome-theme' }, [
        h(props.context.components.actionBar, { variant: 'inline' })
      ]);
  }
});

const reuseChromeTheme: PlayerThemeDefinition = {
  id: 'test:reuse-chrome',
  name: 'Reuse chrome',
  chrome: { actionBar: true },
  component: ReuseChromeTheme
};

let handlers: PlayerEventHandlers | undefined;
let mountedWrappers: Array<{ unmount: () => void }>;

beforeEach(() => {
  vi.useFakeTimers();
  mountedWrappers = [];
  handlers = undefined;
  const currentExamName = ref(exam.name);
  const examStatus = ref({ status: 'pending', timeRemaining: 60 * 60 * 1000 });

  vi.mocked(useExamPlayer).mockImplementation((_config, _playerConfig, _timeProvider, events) => {
    handlers = events;
    return {
      state: ref({ loaded: true }),
      examConfig: ref({ examName: 'Finals', message: '', examInfos: [exam] }),
      currentExam: ref(exam),
      sortedExamInfos: computed(() => [exam]),
      formattedExamInfos: computed(() => []),
      examStatus,
      currentExamName,
      currentExamTimeRange: computed(() => '09:00 ~ 10:00'),
      remainingTime: computed(() => '60 分钟'),
      currentTime: ref(Date.now()),
      formattedCurrentTime: computed(() => '08:30'),
      switchToExam: vi.fn(),
      updateConfig: vi.fn(),
      taskQueue: { stop: vi.fn(), start: vi.fn() }
    } as unknown as ReturnType<typeof useExamPlayer>;
  });
});

afterEach(() => {
  for (const wrapper of mountedWrappers) wrapper.unmount();
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

type ExamPlayerProps = InstanceType<typeof ExamPlayer>['$props'];

const mountPlayer = (
  options: Partial<ExamPlayerProps> = {},
  slots?: Record<string, () => unknown>
) => {
  const wrapper = mount(ExamPlayer, {
    props: {
      examConfig: { examName: 'Finals', message: '', examInfos: [exam] },
      showActionBar: false,
      cards,
      ...options
    },
    slots
  });
  mountedWrappers.push(wrapper);
  return wrapper;
};

describe('ExamPlayer theme host', () => {
  it('renders a custom full-screen theme from the themeId prop', () => {
    const wrapper = mountPlayer({ themes: [customTheme], themeId: 'test:custom' });

    expect(wrapper.find('.custom-theme').exists()).toBe(true);
    expect(wrapper.find('.player-theme-default').exists()).toBe(false);
    expect(wrapper.get('.custom-exam-name').text()).toBe(exam.name);
  });

  it('falls back to the built-in theme when a plugin theme disappears', async () => {
    const wrapper = mountPlayer({ themes: [customTheme], themeId: 'test:custom' });
    await wrapper.setProps({ themeId: 'test:removed' });

    expect(wrapper.find('.player-theme-default').exists()).toBe(true);
    expect(wrapper.find('.custom-theme').exists()).toBe(false);
  });

  it('forwards legacy title slots to the built-in theme', () => {
    const wrapper = mountPlayer(
      {},
      {
        'left:title': () => h('div', { class: 'legacy-title' }, 'Legacy title')
      }
    );

    expect(wrapper.get('.legacy-title').text()).toBe('Legacy title');
    expect(wrapper.find('.main-title').exists()).toBe(false);
  });

  it('persists an explicit default choice after the selected plugin theme disappears', async () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [customTheme],
      themeId: 'test:custom'
    });

    await wrapper.setProps({ themes: [] });
    expect(wrapper.find('.player-theme-default').exists()).toBe(true);

    wrapper.findComponent(ActionButtonBar).vm.$emit('themeChange', 'default');
    await nextTick();

    expect(wrapper.emitted('themeChange')).toEqual([['default']]);
    expect(wrapper.emitted('update:themeId')).toEqual([['default']]);
  });

  it('suppresses the default action bar and colorful alert when the theme takes over', async () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [takeoverTheme],
      themeId: 'test:takeover'
    });

    expect(wrapper.find('.takeover-action').exists()).toBe(true);
    expect(wrapper.find('.action-button-bar').exists()).toBe(false);

    handlers?.onExamStart?.(exam);
    await nextTick();

    expect(wrapper.find('.colorful-overlay').exists()).toBe(false);
    expect(wrapper.get('.takeover-alert').text()).toBe('考试开始');
  });

  it('suppresses the default notice when the theme takes over', async () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [takeoverTheme],
      themeId: 'test:takeover'
    });

    (
      wrapper.vm as unknown as {
        notify(markdown: string, options?: { timeoutMs?: number }): string;
      }
    ).notify('考务通知', { timeoutMs: 30_000 });
    await nextTick();

    expect(wrapper.find('.notice-overlay').exists()).toBe(false);
    expect(wrapper.get('.takeover-notice').text()).toBe('考务通知');
  });

  it('lets a theme reuse the standard action bar inline', () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [reuseChromeTheme],
      themeId: 'test:reuse-chrome'
    });

    expect(wrapper.find('.action-button-bar.bar-inline').exists()).toBe(true);
  });

  it('renders the train station theme and expands its own controls', async () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [trainStationPlayerTheme],
      themeId: 'train-station'
    });

    expect(wrapper.find('.station-theme').exists()).toBe(true);
    expect(wrapper.find('.schedule-head').exists()).toBe(true);
    expect(wrapper.find('.action-button-bar').exists()).toBe(false);

    await wrapper.get('.control-toggle').trigger('click');
    expect(wrapper.text()).toContain('退出');
    const themeButton = wrapper
      .findAll('.control-button')
      .find((button) => button.text() === '放映设置');
    expect(themeButton).toBeDefined();
    await themeButton!.trigger('click');
    expect(wrapper.find('.theme-picker').exists()).toBe(true);
    expect(wrapper.text()).toContain('放映设置');
    expect(wrapper.text()).toContain('默认主题');

    (
      wrapper.vm as unknown as {
        toolbar: { register(item: { id: string; label: string; onClick(): void }): () => void };
      }
    ).toolbar.register({ id: 'fullscreen', label: '进入全屏', onClick: () => {} });
    (
      wrapper.vm as unknown as {
        toolbar: { register(item: { id: string; label: string; onClick(): void }): () => void };
      }
    ).toolbar.register({ id: 'plugin:demo', label: '插件工具', onClick: () => {} });
    await nextTick();
    expect(wrapper.text()).not.toContain('进入全屏');
    expect(wrapper.text()).toContain('插件工具');

    const defaultOption = wrapper
      .findAll('.theme-option')
      .find((button) => button.text().includes('默认主题'));
    await defaultOption!.trigger('click');

    expect(wrapper.emitted('themeChange')).toEqual([['default']]);
    expect(wrapper.emitted('update:themeId')).toEqual([['default']]);
    expect(wrapper.find('.player-theme-default').exists()).toBe(true);
  });

  it('hides the fullscreen control in the desktop renderer', async () => {
    Object.defineProperty(window, 'api', {
      configurable: true,
      value: {}
    });

    try {
      const wrapper = mountPlayer({
        showActionBar: true,
        themes: [trainStationPlayerTheme],
        themeId: 'train-station'
      });
      await wrapper.get('.control-toggle').trigger('click');
      const labels = wrapper.findAll('.control-button').map((button) => button.text());
      expect(labels).not.toContain('全屏');
      expect(labels).toContain('退出');
    } finally {
      delete (window as Window & { api?: unknown }).api;
    }
  });

  it('switches themes through the action bar event', async () => {
    const wrapper = mountPlayer({
      showActionBar: true,
      themes: [customTheme],
      themeId: 'default'
    });

    wrapper.findComponent(ActionButtonBar).vm.$emit('themeChange', 'test:custom');
    await nextTick();

    expect(wrapper.emitted('themeChange')).toEqual([['test:custom']]);
    expect(wrapper.emitted('update:themeId')).toEqual([['test:custom']]);
    expect(wrapper.find('.custom-theme').exists()).toBe(true);
  });
});
