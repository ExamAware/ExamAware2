<template>
  <div class="exam-container" ref="rootRef">
    <!-- 主题负责完整页面布局；播放器只提供统一数据、动作与功能层 -->
    <div class="player-theme-host">
      <component :is="activeTheme.component" :context="themeContext" />
    </div>

    <!-- 底部按钮栏 -->
    <ActionButtonBar
      v-if="showActionBar && shellRendersActionBar"
      :initial-scale="props.uiScale"
      :initial-density="densityState"
      :initial-large-clock-enabled="largeClockState"
      :initial-large-clock-scale="largeClockScaleState"
      :initial-exam-info-large-font="examInfoLargeFontState"
      :themes="availableThemes"
      :theme-id="resolvedThemeId"
      :extra-tools="toolbarTools"
      :allow-exit="allowExit"
      :show-call-proctor="showCallProctor"
      :call-proctor-loading="callProctorLoading"
      @exit="emit('exit')"
      @scale-change="emit('scaleChange', $event)"
      @density-change="handleDensityChange"
      @theme-change="handleThemeChange"
      @large-clock-toggle="handleLargeClockToggle"
      @clock-scale-change="handleLargeClockScaleChange"
      @exam-info-large-font-toggle="handleExamInfoLargeFontToggle"
      @dev-reminder-test="handleDevReminderTest"
      @dev-reminder-hide="handleDevReminderHide"
      @call-proctor="emit('callProctor')"
    />

    <!-- 默认壳层提醒；主题可通过 chrome 标记接管 -->
    <ColorfulAlertOverlay
      v-if="shellRendersColorfulAlert"
      :visible="colorfulVisible"
      :title="colorfulTitle"
      :message="colorfulMessage"
      :overlay-style="colorfulOverlayStyle"
      :hdr-highlight="colorfulHdrActive"
    />
    <NoticeOverlay
      v-if="shellRendersNotice"
      :notice="currentNotice"
      :html="renderedMarkdown"
      @close="handleCloseNotice"
    />

    <!-- 考场号设置弹窗（TDesign Dialog） -->
    <t-dialog
      header="设置考场号"
      v-model:visible="showRoomNumberModal"
      :footer="true"
      @cancel="handleRoomNumberCancel"
      @esc-keydown="handleRoomNumberCancel"
      @close-btn-click="handleRoomNumberCancel"
      @close="handleRoomNumberCancel"
      @confirm="handleRoomNumberConfirm"
    >
      <template #body>
        <t-input v-model="tempRoomNumber" type="text" placeholder="请输入考场号" maxlength="10" />
        <div class="keyboard-container">
          <div ref="keyboardRef" class="virtual-keyboard"></div>
        </div>
      </template>
    </t-dialog>

    <!-- 自定义插槽用于额外内容 -->
    <slot name="extra"></slot>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineComponent,
  h,
  ref,
  onMounted,
  onUnmounted,
  watch,
  watchEffect,
  provide,
  useSlots,
  type PropType,
  type VNode
} from 'vue';
// 为避免 SFC 类型解析跨包问题，这里使用本地最小类型定义
type ExamConfig = {
  examName: string;
  message: string;
  examInfos: any[];
};
import { useExamPlayer, type TimeProvider } from '../useExamPlayer';
import type { PlayerConfig, PlayerEventHandlers } from '../types';
import { builtinPlayerThemes } from '../themes';
import {
  DEFAULT_PLAYER_THEME_ID,
  normalizePlayerThemes,
  playerThemeContextKey,
  resolvePlayerTheme,
  type PlayerThemeAlertState,
  type PlayerThemeChromeContext,
  type PlayerThemeColorfulAlert,
  type PlayerThemeComponents,
  type PlayerThemeContext,
  type PlayerThemeDefinition,
  type PlayerThemeNotice,
  type PlayerThemeSelection,
  type PlayerThemeSlots
} from '../types/theme';
import 'simple-keyboard/build/css/index.css';
import BaseCard from './BaseCard.vue';
import InfoCardWithIcon from './InfoCardWithIcon.vue';
import InfoItem from './InfoItem.vue';
import ExamRoomNumber from './ExamRoomNumber.vue';
import CurrentExamInfo from './CurrentExamInfo.vue';
import ClockCard from './cards/ClockCard.vue';
import ExamInfoCard from './cards/ExamInfoCard.vue';
import ExamRoomCard from './cards/ExamRoomCard.vue';
import CurrentListCard from './cards/CurrentListCard.vue';
import ActionButtonBar from './ActionButtonBar.vue';
import ColorfulAlertOverlay from './overlays/ColorfulAlertOverlay.vue';
import NoticeOverlay from './overlays/NoticeOverlay.vue';
import { providePlayerToolbar } from '../composables/usePlayerToolbar';
import {
  ReminderEventGate,
  createReminderOccurrenceKey,
  type ReminderEventKind
} from '../core/reminderEventGate';
// 本地引入 TDesign 组件，确保不依赖宿主全局注册
import { Dialog as TDialog, Input as TInput } from 'tdesign-vue-next';
import { useReminderService, ReminderUtils } from '../utils/reminderService';

// 轻量 Markdown 渲染器：使用浏览器原生实现，避免引入重依赖
// 支持少量常见标记：# 标题、**加粗**、*斜体*、`行内代码`、换行
const renderMarkdownLight = (md: string): string => {
  let html = md;
  // 转义基础字符以避免注入
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // 标题（仅支持 # 与 ##）
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');
  // 加粗与斜体
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // 代码
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // 换行
  html = html.replace(/\n/g, '<br/>');
  return html;
};

// 根容器，用于就近设置 CSS 变量，避免继承/作用域导致的失效
const rootRef = ref<HTMLElement | null>(null);

// 工具栏注册器（供外部动态扩展按钮）
const toolbarRegistry = providePlayerToolbar();
const toolbarTools = toolbarRegistry.tools;

// Props 定义
type UIDensity = 'comfortable' | 'cozy' | 'compact';

interface Props {
  /** 考试配置 */
  examConfig: ExamConfig | null;
  /** 播放器配置 */
  config?: PlayerConfig;
  /** 初始界面缩放倍数 */
  uiScale?: number;
  /** UI 密度 */
  uiDensity?: UIDensity;
  /** 本场考试信息是否使用大字体 */
  examInfoLargeFont?: boolean;
  /** 时间提供者 */
  timeProvider?: TimeProvider;
  /** 时间同步状态描述 */
  timeSyncStatus?: string;
  /** 考场号 */
  roomNumber?: string;
  /** 是否显示操作栏 */
  showActionBar?: boolean;
  /** 是否允许用户主动退出放映 */
  allowExit?: boolean;
  /** 是否显示呼叫巡考操作 */
  showCallProctor?: boolean;
  /** 是否正在提交巡考呼叫 */
  callProctorLoading?: boolean;
  /** HDR 高亮提醒（仅对白色文字生效） */
  hdrHighlight?: boolean;
  /** 是否启用大时钟样式 */
  largeClock?: boolean;
  /** 大时钟字号缩放 */
  largeClockScale?: number;
  /** 是否允许编辑考场号 */
  allowEditRoomNumber?: boolean;
  /** 事件处理器 */
  eventHandlers?: PlayerEventHandlers;
  /** 可插拔卡片：替换默认卡片组件 */
  cards?: Partial<{
    clock: any;
    examInfo: any;
    room: any;
    list: any;
  }>;
  /** 可用的完整页面主题；内置默认主题始终可用 */
  themes?: readonly PlayerThemeDefinition[];
  /** 当前主题 ID；插件主题 ID 由宿主命名空间化 */
  themeId?: string;
}

// Events 定义
interface Emits {
  (e: 'roomNumberClick'): void;
  (e: 'roomNumberChange', roomNumber: string): void;
  (e: 'update:roomNumber', roomNumber: string): void;
  (e: 'update:largeClock', enabled: boolean): void;
  (e: 'update:examInfoLargeFont', enabled: boolean): void;
  (e: 'exit'): void;
  (e: 'scaleChange', scale: number): void;
  (e: 'largeClockToggle', enabled: boolean): void;
  (e: 'largeClockScaleChange', scale: number): void;
  (e: 'examInfoLargeFontToggle', enabled: boolean): void;
  (e: 'densityChange', density: UIDensity): void;
  (e: 'update:themeId', themeId: string): void;
  (e: 'themeChange', themeId: string): void;
  (e: 'callProctor'): void;
  (e: 'examStart', exam: any): void;
  (e: 'examEnd', exam: any): void;
  (e: 'examAlert', exam: any, alertTime: number): void;
  (
    e: 'colorfulAlert',
    payload: { kind: 'start' | 'alert' | 'end'; title: string; exam: any }
  ): void;
  (e: 'examSwitch', fromExam: any, toExam: any): void;
  (e: 'error', error: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({ roomNumber: '01' }),
  uiScale: undefined,
  largeClockScale: undefined,
  examInfoLargeFont: false,
  timeProvider: () => ({ getCurrentTime: () => Date.now() }),
  timeSyncStatus: '电脑时间',
  roomNumber: '01',
  showActionBar: true,
  allowExit: true,
  showCallProctor: false,
  callProctorLoading: false,
  hdrHighlight: false,
  largeClock: false,
  allowEditRoomNumber: true,
  eventHandlers: () => ({}),
  cards: () => ({}),
  themes: () => [],
  themeId: DEFAULT_PLAYER_THEME_ID,
  uiDensity: 'comfortable'
});

const emit = defineEmits<Emits>();

// 旧版具名插槽仍通过主题 slots 转发；在壳层模板中显式声明以保证类型完整。
defineSlots<{
  'left:logo'?: () => VNode[];
  'left:title'?: () => VNode[];
  extra?: () => VNode[];
}>();

// 内置主题始终存在；外部主题只补充，不能覆盖默认实现。
const availableThemes = computed(() =>
  normalizePlayerThemes([...builtinPlayerThemes, ...props.themes])
);

const localThemeId = ref(props.themeId);
const activeTheme = computed(() => resolvePlayerTheme(availableThemes.value, localThemeId.value));
const resolvedThemeId = computed(() => activeTheme.value.id);
const shellRendersActionBar = computed(() => !activeTheme.value.chrome?.actionBar);
const shellRendersColorfulAlert = computed(() => !activeTheme.value.chrome?.colorfulAlert);
const shellRendersNotice = computed(() => !activeTheme.value.chrome?.notice);

watch(
  () => props.themeId,
  (value) => {
    if (value) localThemeId.value = value;
  }
);

const handleThemeChange = (themeId: string) => {
  if (!themeId || themeId === localThemeId.value) return;
  if (!availableThemes.value.some((theme) => theme.id === themeId)) return;
  localThemeId.value = themeId;
  emit('update:themeId', themeId);
  emit('themeChange', themeId);
};

const slots = useSlots();
const themeSlots = computed<PlayerThemeSlots>(() => ({
  logo: slots['left:logo'] ? () => slots['left:logo']?.() : undefined,
  title: slots['left:title'] ? () => slots['left:title']?.() : undefined
}));

const reminder = useReminderService();

const reminderEventGate = new ReminderEventGate();
const lastStatusRef = ref<string | null>(null);
const lastExamKeyRef = ref<string | null>(null);

const presentExamReminder = (
  kind: ReminderEventKind,
  exam: any,
  options: { title: string; themeBaseColor: string; forceWhiteText?: boolean }
) => {
  if (!reminderEventGate.accept(kind, exam)) return false;
  reminder.showColorfulAlert(options);
  emit('colorfulAlert', { kind, title: options.title, exam });
  return true;
};

const resetReminderEvents = () => {
  reminderEventGate.reset();
  lastStatusRef.value = null;
  lastExamKeyRef.value = null;
};

// 合并事件处理器
const mergedEventHandlers: PlayerEventHandlers = {
  ...props.eventHandlers,
  onExamStart: (exam: any) => {
    props.eventHandlers?.onExamStart?.(exam);
    emit('examStart', exam);
    // 考试开始（绿色）
    presentExamReminder('start', exam, { title: '考试开始', themeBaseColor: '#2ecc71' });
  },
  onExamEnd: (exam: any) => {
    props.eventHandlers?.onExamEnd?.(exam);
    emit('examEnd', exam);
    // 考试结束（红色）
    presentExamReminder('end', exam, { title: '考试结束', themeBaseColor: '#ff3b30' });
  },
  onExamAlert: (exam: any, alertTime: number) => {
    props.eventHandlers?.onExamAlert?.(exam, alertTime);
    emit('examAlert', exam, alertTime);
    // 考试即将结束（黄色）
    presentExamReminder('alert', exam, {
      title: '考试即将结束',
      themeBaseColor: '#f1c40f',
      forceWhiteText: true
    });
  },
  onExamSwitch: (fromExam: any, toExam: any) => {
    props.eventHandlers?.onExamSwitch?.(fromExam, toExam);
    emit('examSwitch', fromExam, toExam);
  },
  onError: (error: string) => {
    props.eventHandlers?.onError?.(error);
    emit('error', error);
  }
};

const densityState = ref<UIDensity>(props.uiDensity ?? 'comfortable');
const densityFactorMap: Record<UIDensity, number> = {
  comfortable: 1,
  cozy: 0.85,
  compact: 0.7
};
const densityFactor = computed(() => densityFactorMap[densityState.value] ?? 1);

const clampLargeClockScale = (value: unknown) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return 1;
  return Math.min(1.8, Math.max(0.5, num));
};

const largeClockState = ref<boolean>(Boolean(props.largeClock));
const resolveInitialLargeClockScale = () => {
  if (props.largeClockScale !== undefined && props.largeClockScale !== null) {
    return clampLargeClockScale(props.largeClockScale);
  }
  return 1;
};
const largeClockScaleState = ref<number>(resolveInitialLargeClockScale());

const examInfoLargeFontState = ref<boolean>(Boolean(props.examInfoLargeFont));

watch(
  () => props.largeClockScale,
  (value) => {
    if (value === undefined || value === null) return;
    const safe = clampLargeClockScale(value);
    if (safe !== largeClockScaleState.value) {
      largeClockScaleState.value = safe;
    }
  }
);

// 使用播放器逻辑 - 初始化时传入配置
const examPlayer = useExamPlayer(
  props.examConfig, // 直接传入考试配置
  props.config || { roomNumber: props.roomNumber || '01' },
  props.timeProvider || { getCurrentTime: () => Date.now() },
  mergedEventHandlers
);

// 监听 props 变化并更新播放器
watch(
  () => props.examConfig,
  (newConfig, oldConfig) => {
    console.log('ExamPlayer: 配置变化', newConfig);
    if (newConfig !== oldConfig) resetReminderEvents();
    examPlayer.updateConfig(newConfig);
  },
  { immediate: false, deep: true }
);

watch(
  () => props.uiDensity,
  (val) => {
    if (!val) return;
    densityState.value = val;
  }
);

watch(
  () => props.largeClock,
  (next) => {
    largeClockState.value = Boolean(next);
  }
);

const setLargeClockScaleVar = (scale: number) => {
  const safe = clampLargeClockScale(scale);
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty('--large-clock-scale', String(safe));
  }
  const root = rootRef.value;
  if (root) {
    root.style.setProperty('--large-clock-scale', String(safe));
  }
};

watch(
  largeClockScaleState,
  (value) => {
    const safe = clampLargeClockScale(value);
    setLargeClockScaleVar(safe);
    emit('largeClockScaleChange', safe);
  },
  { immediate: true }
);

watchEffect(() => {
  if (typeof window === 'undefined') return;
  const factor = densityFactor.value;
  document.documentElement.style.setProperty('--density-scale', String(factor));
  const root = rootRef.value;
  if (root) {
    root.style.setProperty('--density-scale', String(factor));
    root.dataset.density = densityState.value;
  }
});

watchEffect(() => {
  const root = rootRef.value;
  if (!root) return;
  root.dataset.largeClock = largeClockState.value ? 'true' : 'false';
});

watch(
  () => props.config,
  (newConfig) => {
    // 当 config 变化时，需要重新初始化 examPlayer
    // 这里可以添加配置更新逻辑
  },
  { deep: true }
);

watch(
  () => props.timeProvider,
  (newTimeProvider) => {
    if (newTimeProvider) {
      // 更新时间提供器
      examPlayer.taskQueue.stop();
      examPlayer.taskQueue.start();
    }
  },
  { deep: true }
);

// 从 examPlayer 解构需要的数据
const {
  state,
  examConfig: playerExamConfig,
  currentExam,
  sortedExamInfos,
  formattedExamInfos,
  examStatus,
  currentExamName,
  currentExamTimeRange,
  remainingTime,
  formattedCurrentTime,
  currentTime,
  switchToExam,
  updateConfig
} = examPlayer;

const handleDensityChange = (next: UIDensity) => {
  densityState.value = next;
  emit('densityChange', next);
};

const handleLargeClockToggle = (enabled: boolean) => {
  largeClockState.value = enabled;
  emit('update:largeClock', enabled);
  emit('largeClockToggle', enabled);
};

const handleLargeClockScaleChange = (scale: number) => {
  largeClockScaleState.value = scale;
};

const handleExamInfoLargeFontToggle = (enabled: boolean) => {
  const flag = Boolean(enabled);
  examInfoLargeFontState.value = flag;
  emit('update:examInfoLargeFont', flag);
  emit('examInfoLargeFontToggle', flag);
};

watch(
  () => props.examInfoLargeFont,
  (next) => {
    if (typeof next !== 'boolean') return;
    if (examInfoLargeFontState.value === next) return;
    examInfoLargeFontState.value = next;
  }
);

type DevReminderPreset = 'start' | 'warning' | 'end';
type DevReminderPayload = { title: string; themeBaseColor: string; forceWhiteText?: boolean };

const devReminderPresets: Record<DevReminderPreset, DevReminderPayload> = {
  start: { title: '考试开始', themeBaseColor: '#2ecc71' },
  warning: { title: '考试即将结束', themeBaseColor: '#f1c40f', forceWhiteText: true },
  end: { title: '考试结束', themeBaseColor: '#ff3b30' }
};

const resolveDevReminderPayload = (payload: DevReminderPreset | DevReminderPayload) => {
  if (typeof payload === 'string') {
    return devReminderPresets[payload] ?? devReminderPresets.start;
  }
  return payload;
};

const handleDevReminderTest = (payload: DevReminderPreset | DevReminderPayload) => {
  const resolved = resolveDevReminderPayload(payload);
  reminder.showColorfulAlert(resolved);
};

const handleDevReminderHide = () => {
  reminder.hideColorfulAlert();
};

// === 提醒服务 ===
// colorful 提醒派生
const colorfulVisible = reminder.isColorfulVisible;
const colorfulTitle = computed(() => reminder._colorfulReminder.value?.title || '提示');
const colorfulMessage = computed(() => reminder._colorfulReminder.value?.message || '');
const colorfulOverlayStyle = computed(() => {
  const base = reminder._colorfulReminder.value?.themeBaseColor || '#ff3b30';
  const forceWhite = Boolean(reminder._colorfulReminder.value?.forceWhiteText);
  const text = forceWhite ? '#ffffff' : ReminderUtils.getContrastingTextColor(base);
  const shadow = forceWhite
    ? '0 10px 32px rgba(255, 255, 255, 0.55), 0 0 18px rgba(255, 255, 255, 0.45)'
    : '0 6px 24px rgba(0, 0, 0, 0.35)';
  return {
    '--colorful-bg': base,
    '--colorful-text': text,
    '--colorful-shadow': shadow
  } as Record<string, string>;
});
const colorfulHdrActive = computed(() => {
  if (!props.hdrHighlight) return false;
  return Boolean(reminder._colorfulReminder.value?.forceWhiteText);
});

// 普通通知派生
const currentNotice = computed(() => reminder.currentNotice.value);
const renderedMarkdown = computed(() =>
  currentNotice.value ? renderMarkdownLight(currentNotice.value.markdown) : ''
);
const handleCloseNotice = () => reminder.closeCurrentNotice('manual');

// 可插拔卡片：注册与上下文将在依赖项声明后注入（见下文）

// 将 API 暴露给父组件，便于外部触发
defineExpose({
  // 彩色提醒（新）
  showColorfulAlert: reminder.showColorfulAlert,
  hideColorfulAlert: reminder.hideColorfulAlert,
  // 兼容旧名
  showEndingAlert: reminder.showEndingAlert,
  hideEndingAlert: reminder.hideEndingAlert,
  // 普通提醒
  notify: reminder.notify,
  closeCurrentNotice: reminder.closeCurrentNotice,
  clearAllNotices: reminder.clearAllNotices,
  toolbar: {
    register: toolbarRegistry.register,
    unregister: toolbarRegistry.unregister,
    clear: toolbarRegistry.clear
  }
});

// 与考试事件联动：当 onExamAlert 触发时，自动弹出“即将结束”提醒
// 使用配置中的 alertTime（分钟）阈值，避免依赖剩余时间字符串。
watch(
  () => examStatus.value?.timeRemaining,
  (remainingMs) => {
    if (!currentExam.value) return;
    if (typeof remainingMs !== 'number') return;

    const alertMinutes = Number(currentExam.value.alertTime);
    if (!Number.isFinite(alertMinutes) || alertMinutes <= 0) return; // 未配置则不触发

    const minutesLeft = remainingMs / (1000 * 60);
    if (examStatus.value?.status === 'inProgress' && minutesLeft <= alertMinutes) {
      presentExamReminder('alert', currentExam.value, {
        title: '考试即将结束',
        themeBaseColor: '#f1c40f',
        forceWhiteText: true
      });
    }
  }
);

watch(
  () => [currentExam.value, examStatus.value?.status] as const,
  ([exam, status]) => {
    const examKey = createReminderOccurrenceKey('start', exam);
    if (!examKey || !status) {
      lastExamKeyRef.value = examKey || null;
      lastStatusRef.value = status ?? null;
      return;
    }

    if (lastExamKeyRef.value !== examKey) {
      lastExamKeyRef.value = examKey;
      lastStatusRef.value = status;
      return;
    }

    if (status === 'inProgress' && lastStatusRef.value !== 'inProgress') {
      presentExamReminder('start', exam, { title: '考试开始', themeBaseColor: '#2ecc71' });
    } else if (status === 'completed' && lastStatusRef.value !== 'completed') {
      presentExamReminder('end', exam, { title: '考试结束', themeBaseColor: '#ff3b30' });
    }

    lastStatusRef.value = status;
  },
  { immediate: true }
);

// === 考场号设置相关状态 ===
const showRoomNumberModal = ref(false);
const STORAGE_KEY = 'examaware:roomNumber';

const loadStoredRoomNumber = (): string | null => {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v && v.trim() ? v.trim() : null;
  } catch {
    return null;
  }
};

const saveStoredRoomNumber = (val: string) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, val);
  } catch {}
};

// 内部房间号（用于本地持久化与无外部绑定时的显示）
const localRoomNumber = ref<string>(props.roomNumber || loadStoredRoomNumber() || '01');

// 对外生效的房间号（优先使用外部的 prop，否则使用内部本地值）
const effectiveRoomNumber = computed<string>(() => props.roomNumber ?? localRoomNumber.value);

// 弹窗里的临时值
const tempRoomNumber = ref(effectiveRoomNumber.value);
const keyboardRef = ref<HTMLElement>();
let keyboardInstance: any = null;

// 处理考场号点击
const handleRoomNumberClick = () => {
  if (!props.allowEditRoomNumber) {
    emit('roomNumberClick');
    return;
  }

  tempRoomNumber.value = effectiveRoomNumber.value || '01';
  showRoomNumberModal.value = true;

  // 延迟初始化键盘，确保DOM已渲染
  setTimeout(() => {
    initKeyboard();
  }, 100);
};

// 键盘按键处理
const onKeyPress = (button: string) => {
  if (button === '{clear}') {
    tempRoomNumber.value = '';
  } else if (button === '{bksp}') {
    tempRoomNumber.value = tempRoomNumber.value.slice(0, -1);
  } else {
    // 限制只能输入数字和字母，最大长度10
    if (/^[0-9a-zA-Z]$/.test(button) && tempRoomNumber.value.length < 10) {
      tempRoomNumber.value += button;
    }
  }
};

// 初始化虚拟键盘
const initKeyboard = () => {
  // 动态导入 simple-keyboard
  //  TODO: 已知这块会卡一下 不是很影响体验 先不改了 回头改
  import('simple-keyboard')
    .then(({ default: Keyboard }) => {
      if (keyboardRef.value && !keyboardInstance) {
        keyboardInstance = new Keyboard(keyboardRef.value, {
          layout: {
            default: ['1 2 3', '4 5 6', '7 8 9', '{clear} 0 {bksp}']
          },
          display: {
            '{clear}': '清空',
            '{bksp}': '⌫ 删除'
          },
          theme: 'hg-theme-default hg-layout-numeric numeric-keyboard-dark',
          physicalKeyboardHighlight: false,
          syncInstanceInputs: false,
          mergeDisplay: true,
          onKeyPress: (button: string) => onKeyPress(button)
        });
      }
    })
    .catch((error) => {
      console.warn('Failed to load simple-keyboard:', error);
    });
};

// 销毁虚拟键盘
const destroyKeyboard = () => {
  if (keyboardInstance) {
    keyboardInstance.destroy();
    keyboardInstance = null;
  }
};

// 确认考场号设置
const handleRoomNumberConfirm = () => {
  if (tempRoomNumber.value && tempRoomNumber.value.trim()) {
    const next = tempRoomNumber.value.trim();
    localRoomNumber.value = next;
    saveStoredRoomNumber(next);
    emit('update:roomNumber', next); // v-model 支持
    emit('roomNumberChange', next); // 兼容旧事件
    showRoomNumberModal.value = false;
    destroyKeyboard();
  } else {
    emit('error', '考场号不能为空');
  }
};

// 取消考场号设置
const handleRoomNumberCancel = () => {
  showRoomNumberModal.value = false;
  tempRoomNumber.value = effectiveRoomNumber.value || '01';
  destroyKeyboard();
};

// 格式化的考试信息用于CurrentExamInfo组件 - 现在使用 examPlayer 的 formattedExamInfos
const displayFormattedExamInfos = computed(() => {
  const formatted = formattedExamInfos.value || [];
  return formatted;
});

// pending 状态时不显示剩余时间
// 没用的屎山 我现在不敢删
const displayedRemainingTime = computed(() => {
  return examStatus.value?.status === 'pending' ? '' : remainingTime.value || '';
});

// 添加调试信息与本地存储同步
onMounted(() => {
  console.log('ExamPlayer: mounted, props.examConfig:', props.examConfig);
  console.log('ExamPlayer: examPlayer state:', examPlayer.state.value);
  console.log('ExamPlayer: formattedExamInfos:', formattedExamInfos.value);
  // 初次挂载时，如果本地存储有值且与外部不同，则同步给外部
  const stored = loadStoredRoomNumber();
  if (stored && stored !== props.roomNumber) {
    localRoomNumber.value = stored;
    emit('update:roomNumber', stored);
    emit('roomNumberChange', stored);
  }

  // 初次挂载后，根据当前状态弹一次彩色提醒
  setTimeout(() => {
    const status = examStatus.value?.status;
    if (status === 'inProgress') {
      reminder.showColorfulAlert({ title: '考试进行中', themeBaseColor: '#2ecc71' });
    } else if (status === 'pending') {
      // 不打扰：未开始不弹，或按需提示“未开始”
    } else if (status === 'completed') {
      reminder.showColorfulAlert({ title: '考试已结束', themeBaseColor: '#ff3b30' });
    }
  }, 0);
});

// === UI 自动缩放逻辑 ===
let autoScaleAnimationId: number | null = null;
let currentAutoScale = 1;

// 根据窗口宽度计算缩放比例
const calculateAutoScale = () => {
  const w = window.innerWidth;
  if (w >= 1920) return 1.2;
  if (w >= 1440) return 1.0;
  if (w >= 1024) return 0.85;
  return 0.7;
};

// 缓动函数 - 使用 ease-out-cubic
//  TODO: 这几次测试的时候感觉其实还是不是很好看 回来换一个
const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

const setAutoRootScale = (scale: number) => {
  // 同时设置到 documentElement 与组件根容器，确保 scoped 样式也能读取到
  document.documentElement.style.setProperty('--ui-scale', String(scale));
  if (rootRef.value) {
    rootRef.value.style.setProperty('--ui-scale', String(scale));
  }
  console.log('Auto-scale set to:', scale);
};

// 平滑动画到目标缩放值
const animateToAutoScale = (target: number) => {
  if (autoScaleAnimationId) {
    cancelAnimationFrame(autoScaleAnimationId);
  }

  const startScale = currentAutoScale;
  const startTime = performance.now();
  const duration = 400; // 动画持续时间400ms

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // 应用缓动函数
    const easedProgress = easeOutCubic(progress);

    // 计算当前缩放值
    const scale = startScale + (target - startScale) * easedProgress;
    currentAutoScale = scale;
    setAutoRootScale(scale);

    if (progress < 1) {
      autoScaleAnimationId = requestAnimationFrame(animate);
      // 将动画ID暴露到window对象，以便ActionButtonBar可以停止它
      (window as any).autoScaleAnimationId = autoScaleAnimationId;
    } else {
      autoScaleAnimationId = null;
      (window as any).autoScaleAnimationId = null;
    }
  };

  autoScaleAnimationId = requestAnimationFrame(animate);
  (window as any).autoScaleAnimationId = autoScaleAnimationId;
};

// 处理窗口大小变化
const handleAutoScaleResize = () => {
  const targetScale = calculateAutoScale();
  animateToAutoScale(targetScale);
};

onMounted(() => {
  // 初始化 UI 自动缩放
  currentAutoScale = calculateAutoScale();
  setAutoRootScale(currentAutoScale);
  window.addEventListener('resize', handleAutoScaleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleAutoScaleResize);

  // 清理自动缩放动画
  if (autoScaleAnimationId) {
    cancelAnimationFrame(autoScaleAnimationId);
  }
});

// 同步外部传入 roomNumber 的变化
watch(
  () => props.roomNumber,
  (val) => {
    if (val != null) {
      localRoomNumber.value = val;
      tempRoomNumber.value = val;
    }
  }
);

// === 可插拔卡片：在依赖都声明后注入 provide，并计算卡片组件 ===
const ctxForCards = {
  formattedCurrentTime,
  timeSyncStatus: computed(() => props.timeSyncStatus),
  currentExam,
  currentExamName,
  currentExamTimeRange,
  displayedRemainingTime: computed(() =>
    examStatus.value?.status === 'pending' ? '' : remainingTime.value || ''
  ),
  displayFormattedExamInfos,
  effectiveRoomNumber,
  uiDensity: densityState,
  largeClockEnabled: computed(() => largeClockState.value),
  largeClockScale: largeClockScaleState,
  examInfoLargeFont: computed(() => examInfoLargeFontState.value),
  handleRoomNumberClick
};
provide('ExamPlayerCtx', ctxForCards);

const resolvedCards = computed(() => ({
  clock: props.cards?.clock ?? ClockCard,
  examInfo: props.cards?.examInfo ?? ExamInfoCard,
  room: props.cards?.room ?? ExamRoomCard,
  list: props.cards?.list ?? CurrentListCard
}));

const themeColorfulAlert = computed<PlayerThemeColorfulAlert | null>(() => {
  if (!colorfulVisible.value) return null;
  const baseColor = reminder._colorfulReminder.value?.themeBaseColor || '#ff3b30';
  const forceWhiteText = Boolean(reminder._colorfulReminder.value?.forceWhiteText);
  return {
    title: colorfulTitle.value,
    message: colorfulMessage.value,
    baseColor,
    textColor: forceWhiteText ? '#ffffff' : ReminderUtils.getContrastingTextColor(baseColor),
    forceWhiteText,
    hdrHighlight: colorfulHdrActive.value,
    overlayStyle: colorfulOverlayStyle.value
  };
});

const themeNotice = computed<PlayerThemeNotice | null>(() => {
  const notice = currentNotice.value;
  if (!notice) return null;
  return {
    id: notice.id,
    markdown: notice.markdown,
    html: renderedMarkdown.value,
    remainingSec: notice.remainingSec,
    timeoutMs: notice.timeoutMs
  };
});

const ThemeActionBar = defineComponent({
  name: 'PlayerThemeActionBar',
  props: {
    variant: {
      type: String as PropType<'fixed' | 'inline'>,
      default: 'fixed'
    }
  },
  setup(wrapperProps) {
    return () => {
      if (!props.showActionBar) return null;
      return h(ActionButtonBar, {
        initialScale: props.uiScale,
        initialDensity: densityState.value,
        initialLargeClockEnabled: largeClockState.value,
        initialLargeClockScale: largeClockScaleState.value,
        initialExamInfoLargeFont: examInfoLargeFontState.value,
        themes: availableThemes.value,
        themeId: resolvedThemeId.value,
        extraTools: toolbarTools.value,
        allowExit: props.allowExit,
        showCallProctor: props.showCallProctor,
        callProctorLoading: props.callProctorLoading,
        variant: wrapperProps.variant,
        onExit: () => emit('exit'),
        onScaleChange: (scale: number) => emit('scaleChange', scale),
        onDensityChange: handleDensityChange,
        onThemeChange: handleThemeChange,
        onLargeClockToggle: handleLargeClockToggle,
        onClockScaleChange: handleLargeClockScaleChange,
        onExamInfoLargeFontToggle: handleExamInfoLargeFontToggle,
        onDevReminderTest: handleDevReminderTest,
        onDevReminderHide: handleDevReminderHide,
        onCallProctor: () => emit('callProctor')
      });
    };
  }
});

const ThemeColorfulAlert = defineComponent({
  name: 'PlayerThemeColorfulAlert',
  setup: () => () =>
    h(ColorfulAlertOverlay, {
      visible: colorfulVisible.value,
      title: colorfulTitle.value,
      message: colorfulMessage.value,
      overlayStyle: colorfulOverlayStyle.value,
      hdrHighlight: colorfulHdrActive.value
    })
});

const ThemeNotice = defineComponent({
  name: 'PlayerThemeNotice',
  setup: () => () =>
    h(NoticeOverlay, {
      notice: currentNotice.value,
      html: renderedMarkdown.value,
      onClose: handleCloseNotice
    })
});

const themeComponents = {
  actionBar: ThemeActionBar,
  colorfulAlert: ThemeColorfulAlert,
  notice: ThemeNotice
} satisfies PlayerThemeComponents;

const themeAlerts = {
  colorful: themeColorfulAlert,
  notice: themeNotice,
  closeNotice: handleCloseNotice,
  hideColorful: reminder.hideColorfulAlert
} satisfies PlayerThemeAlertState;

const themeChrome = {
  showActionBar: computed(() => props.showActionBar),
  allowExit: computed(() => props.allowExit),
  showCallProctor: computed(() => props.showCallProctor),
  callProctorLoading: computed(() => props.callProctorLoading),
  toolbarItems: toolbarTools
} satisfies PlayerThemeChromeContext;

const themeSelection = {
  options: computed(() =>
    availableThemes.value.map(({ id, name, description }) => ({ id, name, description }))
  ),
  currentId: resolvedThemeId,
  set: handleThemeChange
} satisfies PlayerThemeSelection;

const themeContext = computed(
  () =>
    ({
      state,
      examConfig: playerExamConfig,
      currentExam,
      sortedExamInfos,
      formattedExamInfos,
      examStatus,
      currentExamName,
      currentExamTimeRange,
      remainingTime,
      currentTime,
      formattedCurrentTime,
      displayedRemainingTime,
      displayFormattedExamInfos,
      roomNumber: effectiveRoomNumber,
      timeSyncStatus: computed(() => props.timeSyncStatus),
      density: densityState,
      largeClockEnabled: computed(() => largeClockState.value),
      largeClockScale: largeClockScaleState,
      examInfoLargeFont: computed(() => examInfoLargeFontState.value),
      cards: resolvedCards.value,
      slots: themeSlots.value,
      alerts: themeAlerts,
      chrome: themeChrome,
      components: themeComponents,
      theme: themeSelection,
      actions: {
        switchToExam,
        openRoomNumberDialog: handleRoomNumberClick,
        exit: () => emit('exit'),
        callProctor: () => emit('callProctor')
      }
    }) satisfies PlayerThemeContext
);
provide(playerThemeContextKey, themeContext);
</script>

<style scoped>
.player-theme-host {
  position: absolute;
  inset: 0;
}

.exam-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #02080d;
  font-family: 'MiSans';
  /* 提供本地默认变量，防止未继承导致的变量缺失 */
  --ui-scale: 1;
  --density-scale: 1;
  --large-clock-scale: 1;
}

/* 键盘样式 */
.keyboard-container {
  margin-top: 16px;
}

.virtual-keyboard {
  max-width: 340px;
  margin: 0 auto;
  background: transparent;
}

:deep(.numeric-keyboard-dark) {
  background: #1a1a1a !important;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

:deep(.numeric-keyboard-dark .hg-button) {
  background: #2d2d2d !important;
  color: #ffffff !important;
  border: 1px solid #404040 !important;
  border-radius: 6px !important;
  height: 50px !important;
  margin: 3px !important;
  font-size: 18px !important;
  font-weight: 500 !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.numeric-keyboard-dark .hg-button:hover) {
  background: #3d3d3d !important;
  border-color: #505050 !important;
  transform: translateY(-1px) !important;
}

:deep(.numeric-keyboard-dark .hg-button:active) {
  background: #1d1d1d !important;
  transform: translateY(0) !important;
}

:deep(.numeric-keyboard-dark .hg-button.hg-functionBtn) {
  background: #0052d9 !important;
  color: #ffffff !important;
  border-color: #0052d9 !important;
}

:deep(.numeric-keyboard-dark .hg-button.hg-functionBtn:hover) {
  background: #1668dc !important;
  border-color: #1668dc !important;
}

:deep(.numeric-keyboard-dark .hg-row) {
  display: flex !important;
  justify-content: center !important;
}
</style>
