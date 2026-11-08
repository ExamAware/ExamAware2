import {
  markRaw,
  type Component,
  type DeepReadonly,
  type InjectionKey,
  type Ref,
  type VNode
} from 'vue';
import type { ExamConfig } from '@dsz-examaware/core';
import type { ExamInfo, PlayerState, PlayerToolbarItem } from '../types';
import type { ExamStatus, FormattedExamInfo } from '../utils/dataProcessor';
import type { UIDensity } from './toolbar';

/**
 * 主题可复用的标准卡片。
 *
 * 卡片会从播放器上下文读取数据，主题只负责把它们放到自己的布局里，
 * 不需要重新实现考试数据、时间计算或提醒逻辑。
 */
export interface PlayerThemeCards {
  clock: Component;
  examInfo: Component;
  room: Component;
  list: Component;
}

export interface PlayerThemeActions {
  /** 切换到指定索引的考试 */
  switchToExam(index: number): boolean;
  /** 打开考场号设置弹窗 */
  openRoomNumberDialog(): void;
  /** 请求退出放映，由宿主决定是否真正关闭窗口 */
  exit(): void;
  /** 请求呼叫巡考，由宿主决定是否处理 */
  callProctor(): void;
}

export interface PlayerThemeColorfulAlert {
  title: string;
  message: string;
  baseColor: string;
  textColor: string;
  forceWhiteText: boolean;
  hdrHighlight: boolean;
  overlayStyle: Record<string, string>;
}

export interface PlayerThemeNotice {
  id: string;
  markdown: string;
  html: string;
  remainingSec: number;
  timeoutMs: number;
}

export interface PlayerThemeAlertState {
  colorful: Readonly<Ref<PlayerThemeColorfulAlert | null>>;
  notice: Readonly<Ref<PlayerThemeNotice | null>>;
  closeNotice(): void;
  hideColorful(): void;
}

/**
 * 播放器壳层状态。主题接管操作栏或提醒层时，用这些状态保持宿主策略一致。
 */
export interface PlayerThemeChromeContext {
  showActionBar: Readonly<Ref<boolean>>;
  allowExit: Readonly<Ref<boolean>>;
  showCallProctor: Readonly<Ref<boolean>>;
  callProctorLoading: Readonly<Ref<boolean>>;
  toolbarItems: Readonly<Ref<readonly PlayerToolbarItem[]>>;
}

export interface PlayerThemeSelection {
  options: Readonly<Ref<readonly PlayerThemeOption[]>>;
  currentId: Readonly<Ref<string>>;
  set(themeId: string): void;
}

/**
 * 可直接复用的标准壳层组件。
 *
 * 主题接管某一层后，可以渲染这里的标准实现，也可以完全自绘；
 * 自绘时使用 `alerts` 与 `actions` 获取状态和动作。
 */
export interface PlayerThemeComponents {
  actionBar: Component;
  colorfulAlert: Component;
  notice: Component;
}

/**
 * 主题组件拿到的只读数据与动作。
 *
 * 所有数据都由 ExamPlayer 统一维护；主题可以读取、布局、换视觉，
 * 但不应自行计算考试状态或创建第二套计时器。
 */
export interface PlayerThemeContext {
  state: Readonly<Ref<DeepReadonly<PlayerState>>>;
  examConfig: Readonly<Ref<DeepReadonly<ExamConfig> | null>>;
  currentExam: Readonly<Ref<DeepReadonly<ExamInfo> | null>>;
  sortedExamInfos: Readonly<Ref<readonly DeepReadonly<ExamInfo>[]>>;
  formattedExamInfos: Readonly<Ref<FormattedExamInfo[]>>;
  examStatus: Readonly<Ref<ExamStatus>>;
  currentExamName: Readonly<Ref<string>>;
  currentExamTimeRange: Readonly<Ref<string>>;
  remainingTime: Readonly<Ref<string>>;
  currentTime: Readonly<Ref<number>>;
  formattedCurrentTime: Readonly<Ref<string>>;
  displayedRemainingTime: Readonly<Ref<string>>;
  displayFormattedExamInfos: Readonly<Ref<FormattedExamInfo[]>>;
  roomNumber: Readonly<Ref<string>>;
  timeSyncStatus: Readonly<Ref<string>>;
  density: Readonly<Ref<UIDensity>>;
  largeClockEnabled: Readonly<Ref<boolean>>;
  largeClockScale: Readonly<Ref<number>>;
  examInfoLargeFont: Readonly<Ref<boolean>>;
  cards: PlayerThemeCards;
  actions: PlayerThemeActions;
  alerts: PlayerThemeAlertState;
  chrome: PlayerThemeChromeContext;
  components: PlayerThemeComponents;
  theme: PlayerThemeSelection;
  slots: PlayerThemeSlots;
}

/**
 * 兼容 ExamPlayer 的具名插槽。
 *
 * 插槽内容作为函数传给主题，主题可选择渲染或忽略；
 * 这样默认主题保留旧插槽行为，插件主题也不会被固定布局绑死。
 */
export interface PlayerThemeSlots {
  logo?: () => VNode[] | undefined;
  title?: () => VNode[] | undefined;
}

/**
 * 主题内部的子组件可通过 inject 获取同一份播放器上下文，
 * 避免在主题里层层透传 props。
 */
export const playerThemeContextKey: InjectionKey<Readonly<Ref<PlayerThemeContext>>> =
  Symbol('playerThemeContext');

export interface PlayerThemeProps {
  context: PlayerThemeContext;
}

export type PlayerThemeComponent = Component<PlayerThemeProps>;

/**
 * 一个完整播放器主题。
 *
 * `component` 必须是全屏页面组件，自行决定标题、时钟、考试信息、房间号、
 * 背景和排布；它不是 CSS token 包，也不是默认布局的局部插槽。
 */
export interface PlayerThemeChrome {
  /** 由主题渲染操作栏，壳层不再渲染默认操作栏 */
  actionBar?: boolean;
  /** 由主题渲染彩色全屏提醒，壳层不再渲染默认层 */
  colorfulAlert?: boolean;
  /** 由主题渲染普通全屏公告，壳层不再渲染默认层 */
  notice?: boolean;
}

export interface PlayerThemeDefinition {
  /** 全局唯一 ID；插件主题由宿主加上插件命名空间 */
  id: string;
  /** 用户可读名称 */
  name: string;
  /** 选择器中的说明 */
  description?: string;
  /** 主题作者，可选 */
  author?: string;
  /** 主题版本，可选 */
  version?: string;
  /** 排序，值越小越靠前；内置默认主题固定为 0 */
  order?: number;
  /**
   * 壳层接管声明。开启后对应默认组件不再渲染，主题必须自行渲染；
   * 可以复用 `context.components` 中的标准实现。
   */
  chrome?: PlayerThemeChrome;
  component: PlayerThemeComponent;
}

export type PlayerThemeOption = Pick<PlayerThemeDefinition, 'id' | 'name' | 'description'>;

export const DEFAULT_PLAYER_THEME_ID = 'default';

export const definePlayerTheme = <T extends PlayerThemeDefinition>(theme: T): T => theme;

export const normalizePlayerThemes = (
  themes: readonly PlayerThemeDefinition[] | undefined
): readonly PlayerThemeDefinition[] => {
  const ordered: PlayerThemeDefinition[] = [];
  const seen = new Set<string>();

  for (const theme of themes ?? []) {
    if (!theme?.id || seen.has(theme.id)) continue;
    seen.add(theme.id);
    ordered.push({ ...theme, component: markRaw(theme.component) });
  }

  return ordered.sort((left, right) => {
    if (left.id === DEFAULT_PLAYER_THEME_ID) return -1;
    if (right.id === DEFAULT_PLAYER_THEME_ID) return 1;
    return (left.order ?? 100) - (right.order ?? 100);
  });
};

export const resolvePlayerTheme = (
  themes: readonly PlayerThemeDefinition[],
  themeId: string | undefined
): PlayerThemeDefinition => {
  const theme =
    themes.find((item) => item.id === themeId) ??
    themes.find((item) => item.id === DEFAULT_PLAYER_THEME_ID) ??
    themes[0];
  if (!theme) {
    throw new Error('At least one player theme must be registered');
  }
  return theme;
};
