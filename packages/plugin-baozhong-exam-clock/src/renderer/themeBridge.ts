import { createApp, defineComponent, h, shallowRef, type PropType } from 'vue';
import type { RendererPluginContext } from '@dsz-examaware/plugin-sdk';
import type { PlayerThemeOption, PlayerThemeProps, PlayerToolbarItem } from '@dsz-examaware/player';
import ExamClockTheme from './ExamClockTheme.vue';
import PluginSettingsPage from './PluginSettingsPage.vue';
import type { BaozhongExamClockSettings } from '../shared/settings';

type ThemeContext = PlayerThemeProps['context'];

export interface ThemeSnapshot {
  examConfig: ThemeContext['examConfig']['value'];
  formattedExamInfos: ThemeContext['formattedExamInfos']['value'];
  state: ThemeContext['state']['value'];
  currentTime: number;
  themeOptions: readonly PlayerThemeOption[];
  currentThemeId: string;
  allowExit: boolean;
  roomNumber: string;
  toolbarItems: readonly PlayerToolbarItem[];
  showCallProctor: boolean;
  callProctorLoading: boolean;
}

export interface ThemeBridge {
  setTheme(themeId: string): void;
  exit(): void;
  openRoomNumber(): void;
  callProctor(): void;
}

const cleanups = new WeakMap<HTMLElement, () => void>();

const readSnapshot = (context: ThemeContext): ThemeSnapshot => ({
  examConfig: context.examConfig.value,
  formattedExamInfos: context.formattedExamInfos.value,
  state: context.state.value,
  currentTime: context.currentTime.value,
  themeOptions: context.theme.options.value,
  currentThemeId: context.theme.currentId.value,
  allowExit: context.chrome.allowExit.value,
  roomNumber: context.roomNumber.value,
  toolbarItems: context.chrome.toolbarItems.value,
  showCallProctor: context.chrome.showCallProctor.value,
  callProctorLoading: context.chrome.callProctorLoading.value
});

export const createThemeEntry = (ctx: RendererPluginContext<BaozhongExamClockSettings>) =>
  defineComponent({
    name: 'BaozhongExamClockThemeHost',
    props: {
      context: {
        type: Object as PropType<ThemeContext>,
        required: true
      }
    },
    mounted() {
      const container = this.$el as HTMLElement | undefined;
      if (!container) return;

      const snapshot = shallowRef(readSnapshot(this.context));
      const bridge: ThemeBridge = {
        setTheme: (themeId) => this.context.theme.set(themeId),
        exit: () => this.context.actions.exit(),
        openRoomNumber: () => this.context.actions.openRoomNumberDialog(),
        callProctor: () => this.context.actions.callProctor()
      };
      const timer = window.setInterval(() => {
        snapshot.value = readSnapshot(this.context);
      }, 500);
      const app = createApp({
        name: 'BaozhongExamClockInnerApp',
        setup() {
          return () =>
            h(ExamClockTheme, {
              snapshot: snapshot.value,
              bridge,
              ctx
            });
        }
      });
      app.mount(container);
      cleanups.set(container, () => {
        window.clearInterval(timer);
        app.unmount();
        cleanups.delete(container);
      });
    },
    beforeUnmount() {
      const container = this.$el as HTMLElement | undefined;
      if (container) cleanups.get(container)?.();
    },
    render() {
      return h('div', {
        style: { width: '100%', height: '100%' }
      });
    }
  });

export const createSettingsEntry = (ctx: RendererPluginContext<BaozhongExamClockSettings>) =>
  defineComponent({
    name: 'BaozhongExamClockSettingsHost',
    mounted() {
      const container = this.$el as HTMLElement | undefined;
      if (!container) return;
      const app = createApp(PluginSettingsPage, { ctx });
      app.mount(container);
      cleanups.set(container, () => {
        app.unmount();
        cleanups.delete(container);
      });
    },
    beforeUnmount() {
      const container = this.$el as HTMLElement | undefined;
      if (container) cleanups.get(container)?.();
    },
    render() {
      return h('div');
    }
  });
