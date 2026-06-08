<template>
  <div class="exam-container" ref="rootRef">
    <!-- 背景渐变椭圆 -->
    <div class="background-ellipse"></div>

    <!-- 主要内容（可插拔卡片区域） -->
    <div class="content-wrapper">
      <!-- 顶部标题栏：考试标题+副标题（左）考场号（右） -->
      <div class="top-header">
        <slot name="left:title">
          <div class="title-section">
            <h1 ref="mainTitleRef" class="main-title">
              {{ playerExamConfig?.examName || '考试' }}
            </h1>
            <p ref="subtitleRef" class="subtitle">
              {{ playerExamConfig?.message || '请遵守考场纪律' }}
            </p>
          </div>
        </slot>
        <div class="header-room">
          <component :is="resolvedCards.room" />
        </div>
      </div>

      <!-- 中间大时钟区域 -->
      <div class="clock-section">
        <component :is="resolvedCards.clock" />
      </div>

      <!-- 底部左右分栏 -->
      <div class="bottom-section">
        <!-- 左侧：当前考试信息 -->
        <div class="bottom-left">
          <component :is="resolvedCards.examInfo" />
        </div>
        <!-- 右侧：考试列表表格 -->
        <div class="bottom-right">
          <component :is="resolvedCards.list" />
        </div>
      </div>
    </div>

    <!-- 底部按钮栏 -->
    <ActionButtonBar
      v-if="showActionBar"
      :initial-scale="props.uiScale"
      :initial-density="densityState"
      :initial-large-clock-enabled="largeClockState"
      :initial-large-clock-scale="largeClockScaleState"
      :initial-exam-info-large-font="examInfoLargeFontState"
      :initial-pre-countdown-minutes="preCountdownMinutesState"
      :initial-pip-show-remaining="pipShowRemaining"
      :initial-pip-show-current="pipShowCurrent"
      :initial-material-font-scale="materialFontScaleState"
      :extra-tools="toolbarTools"
      @exit="emit('exit')"
      @scale-change="emit('scaleChange', $event)"
      @density-change="handleDensityChange"
      @large-clock-toggle="handleLargeClockToggle"
      @clock-scale-change="handleLargeClockScaleChange"
      @exam-info-large-font-toggle="handleExamInfoLargeFontToggle"
      @pre-countdown-minutes-change="handlePreCountdownMinutesChange"
      @dev-reminder-test="handleDevReminderTest"
      @dev-reminder-hide="handleDevReminderHide"
      @pip-toggle="handlePipToggle"
      @material-font-scale-change="handleMaterialFontScaleChange"
    />

    <!-- 彩色提醒：用于考试开始/即将结束/考试结束/即将开考，淡入动画，点击可关闭 -->
    <transition name="fade-soft">
      <div
        v-if="colorfulVisible"
        class="overlay colorful-overlay"
        :class="{ 'hdr-highlight': colorfulHdrActive }"
        :style="colorfulOverlayStyle"
        @click="handleCloseColorfulAlert"
      >
        <div class="colorful-title">{{ colorfulTitle }}</div>
        <div class="colorful-hint">点击任意位置关闭</div>
      </div>
    </transition>

    <!-- 普通提醒：全屏高斯模糊遮罩 + Markdown 内容 + 关闭按钮（含倒计时） -->
    <transition name="fade-soft">
      <div v-if="currentNotice" class="overlay notice-overlay">
        <div class="notice-card">
          <div class="notice-content" v-html="renderedMarkdown"></div>
          <t-button theme="primary" size="large" @click="handleCloseNotice">
            关闭（{{ currentNotice?.remainingSec }}s）
          </t-button>
        </div>
      </div>
    </transition>

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
import { computed, ref, onMounted, onUnmounted, watch, watchEffect, provide } from 'vue';
// 为避免 SFC 类型解析跨包问题，这里使用本地最小类型定义
type ExamConfig = {
  examName: string;
  message: string;
  examInfos: any[];
};
import { useExamPlayer, type TimeProvider } from '../useExamPlayer';
import type { PlayerConfig, PlayerEventHandlers } from '../types';
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
import { providePlayerToolbar } from '../composables/usePlayerToolbar';
// 本地引入 TDesign 组件，确保不依赖宿主全局注册
import { Dialog as TDialog, Input as TInput, Button as TButton } from 'tdesign-vue-next';
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
  /** 考前倒计时分钟数 */
  preCountdownMinutes?: number;
  /** 时间提供者 */
  timeProvider?: TimeProvider;
  /** 时间同步状态描述 */
  timeSyncStatus?: string;
  /** 考场号 */
  roomNumber?: string;
  /** 是否显示操作栏 */
  showActionBar?: boolean;
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
}

// Events 定义
interface Emits {
  (e: 'roomNumberClick'): void;
  (e: 'roomNumberChange', roomNumber: string): void;
  (e: 'update:roomNumber', roomNumber: string): void;
  (e: 'update:largeClock', enabled: boolean): void;
  (e: 'update:examInfoLargeFont', enabled: boolean): void;
  (e: 'update:preCountdownMinutes', minutes: number): void;
  (e: 'exit'): void;
  (e: 'scaleChange', scale: number): void;
  (e: 'largeClockToggle', enabled: boolean): void;
  (e: 'largeClockScaleChange', scale: number): void;
  (e: 'examInfoLargeFontToggle', enabled: boolean): void;
  (e: 'preCountdownMinutesChange', minutes: number): void;
  (e: 'densityChange', density: UIDensity): void;
  (e: 'examStart', exam: any): void;
  (e: 'examEnd', exam: any): void;
  (e: 'examAlert', exam: any, alertTime: number): void;
  (e: 'preExamStart', exam: any, preMinutes: number): void;
  (e: 'examSwitch', fromExam: any, toExam: any): void;
  (e: 'error', error: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({ roomNumber: '01' }),
  uiScale: undefined,
  largeClockScale: undefined,
  examInfoLargeFont: false,
  preCountdownMinutes: 0,
  timeProvider: () => ({ getCurrentTime: () => Date.now() }),
  timeSyncStatus: '电脑时间',
  roomNumber: '01',
  showActionBar: true,
  hdrHighlight: false,
  largeClock: false,
  allowEditRoomNumber: true,
  eventHandlers: () => ({}),
  cards: () => ({}),
  uiDensity: 'comfortable'
});

const emit = defineEmits<Emits>();
const reminder = useReminderService();

const reminderShown = new Set<string>();

const getExamKey = (exam: any): string => {
  const raw = exam?.id ?? exam?.name;
  if (raw === undefined || raw === null) return '';
  return String(raw);
};

const showColorfulOnce = (
  key: string,
  options: { title: string; themeBaseColor: string; forceWhiteText?: boolean }
) => {
  if (!key || reminderShown.has(key)) return;
  reminderShown.add(key);
  reminder.showColorfulAlert(options);
};

const showExamReminder = (
  kind: 'start' | 'end' | 'alert' | 'preStart',
  exam: any,
  options: { title: string; themeBaseColor: string; forceWhiteText?: boolean }
) => {
  const examKey = getExamKey(exam);
  if (!examKey) return;
  showColorfulOnce(`${kind}:${examKey}`, options);
};

// 重置已显示的提醒（用于配置更新后重新触发）
const resetReminderShown = () => {
  reminderShown.clear();
};

// 显式注册局部组件（<t-dialog> / <t-input>）
// 在 <script setup> 中，import 即可自动可用，但为兼容性，保留命名引用
const TDialogComp = TDialog;
const TInputComp = TInput;
const TButtonComp = TButton;

// 合并事件处理器
const mergedEventHandlers: PlayerEventHandlers = {
  ...props.eventHandlers,
  onPreExamStart: (exam: any, preMinutes: number) => {
    props.eventHandlers?.onPreExamStart?.(exam, preMinutes);
    emit('preExamStart', exam, preMinutes);
    // 即将开考（蓝色）
    showExamReminder('preStart', exam, {
      title: `即将开考 · ${exam.name}`,
      themeBaseColor: '#3498db',
      forceWhiteText: true
    });
  },
  onExamStart: (exam: any) => {
    props.eventHandlers?.onExamStart?.(exam);
    emit('examStart', exam);
    // 考试开始（绿色）
    showExamReminder('start', exam, { title: '考试开始', themeBaseColor: '#2ecc71' });
  },
  onExamEnd: (exam: any) => {
    props.eventHandlers?.onExamEnd?.(exam);
    emit('examEnd', exam);
    // 考试结束（红色）
    showExamReminder('end', exam, { title: '考试结束', themeBaseColor: '#ff3b30' });
  },
  onExamAlert: (exam: any, alertTime: number) => {
    props.eventHandlers?.onExamAlert?.(exam, alertTime);
    emit('examAlert', exam, alertTime);
    // 考试即将结束（黄色）
    showExamReminder('alert', exam, {
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

const materialFontScaleState = ref<number>(1);

const preCountdownMinutesState = ref<number>(Number(props.preCountdownMinutes) || 0);

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

watch(
  () => props.preCountdownMinutes,
  (value) => {
    if (value === undefined || value === null) return;
    const safe = Math.min(60, Math.max(0, Math.round(Number(value))));
    if (safe !== preCountdownMinutesState.value) {
      preCountdownMinutesState.value = safe;
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
  (newConfig) => {
    console.log('ExamPlayer: 配置变化', newConfig);
    resetReminderShown();
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

const handlePreCountdownMinutesChange = (minutes: number) => {
  const safe = Math.min(60, Math.max(0, Math.round(Number(minutes))));
  preCountdownMinutesState.value = safe;
  emit('update:preCountdownMinutes', safe);
  emit('preCountdownMinutesChange', safe);
  // 同步更新核心层的播放器配置，重新创建任务队列
  examPlayer.updatePlayerConfig({ preCountdownMinutes: safe });
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

// === 画中画悬浮窗（独立窗口模式） ===
const pipShowRemaining = ref(true);
const pipShowCurrent = ref(false);

const handlePipToggle = () => {
  try {
    const ipc = (window as any).api?.ipc;
    if (ipc) {
      ipc.send('pip:toggle', {
        showRemaining: pipShowRemaining.value,
        showCurrent: pipShowCurrent.value
      });
    }
  } catch {}
};

const handleMaterialFontScaleChange = (scale: number) => {
  const safe = Math.min(3, Math.max(1, Number(scale) || 1));
  materialFontScaleState.value = safe;
};

const handleCloseColorfulAlert = () => {
  reminder.hideColorfulAlert();
};

// === 提醒服务 ===
// colorful 提醒派生
const colorfulVisible = reminder.isColorfulVisible;
const colorfulTitle = computed(() => reminder._colorfulReminder.value?.title || '提示');
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
let hasShownEndingForExamId: string | null = null;
watch(
  () => examStatus.value?.timeRemaining,
  (remainingMs) => {
    if (!currentExam.value) return;
    if (typeof remainingMs !== 'number') return;

    const alertMinutes = Number(currentExam.value.alertTime);
    if (!Number.isFinite(alertMinutes) || alertMinutes <= 0) return; // 未配置则不触发

    const examId = currentExam.value?.id || currentExam.value?.name;
    const minutesLeft = remainingMs / (1000 * 60);
    if (
      examStatus.value?.status === 'inProgress' &&
      minutesLeft <= alertMinutes &&
      examId &&
      hasShownEndingForExamId !== examId
    ) {
      hasShownEndingForExamId = examId;
      showExamReminder('alert', currentExam.value, {
        title: '考试即将结束',
        themeBaseColor: '#f1c40f',
        forceWhiteText: true
      });
    }
  }
);

const lastStatusRef = ref<string | null>(null);
const lastExamKeyRef = ref<string | null>(null);

watch(
  () => [currentExam.value, examStatus.value?.status] as const,
  ([exam, status]) => {
    const examKey = getExamKey(exam);
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
      showExamReminder('start', exam, { title: '考试开始', themeBaseColor: '#2ecc71' });
    } else if (status === 'completed' && lastStatusRef.value !== 'completed') {
      showExamReminder('end', exam, { title: '考试结束', themeBaseColor: '#ff3b30' });
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

// 显示剩余时间（考前倒计时或考试倒计时）
const displayedRemainingTime = computed(() => {
  return remainingTime.value || '';
});

// 监听时间变化，通过 IPC 发送给独立悬浮窗
let lastPipRemaining = '';
let lastPipCurrent = '';
watch(displayedRemainingTime, (val) => {
  if (val && val !== lastPipRemaining) {
    lastPipRemaining = val;
    try {
      const ipc = (window as any).api?.ipc;
      if (ipc) ipc.send('pip:update', { remainingTime: val });
    } catch {}
  }
});
watch(formattedCurrentTime, (val) => {
  if (val && val !== lastPipCurrent) {
    lastPipCurrent = val;
    try {
      const ipc = (window as any).api?.ipc;
      if (ipc) ipc.send('pip:update', { currentTime: val });
    } catch {}
  }
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

// 标题大小调整
const mainTitleRef = ref<HTMLElement>();
const subtitleRef = ref<HTMLElement>();

const adjustTitleSize = () => {
  if (!mainTitleRef.value || !subtitleRef.value) return;

  const container = mainTitleRef.value.parentElement;
  if (!container) return;

  // 等待DOM更新完成再计算（避免布局抖动）
  setTimeout(() => {
    const containerWidth = container.clientWidth;

    // 从一个较大的初始字体开始，逐步减小直到单行完全显示
    let fontSize = 50; // px，初始值
    mainTitleRef.value!.style.fontSize = `${fontSize}px`;

    // 强制重新计算布局
    void mainTitleRef.value!.offsetHeight;

    let scrollWidth = mainTitleRef.value!.scrollWidth;

    // 逐步减小字体直到文字宽度不超过容器宽度
    while (scrollWidth > containerWidth && fontSize > 12) {
      fontSize -= 0.5; // 小步长保证精度
      mainTitleRef.value!.style.fontSize = `${fontSize}px`;
      void mainTitleRef.value!.offsetHeight;
      scrollWidth = mainTitleRef.value!.scrollWidth;
    }

    // 让标题留一点安全边距
    fontSize = Math.max(12, fontSize - 5);
    mainTitleRef.value!.style.fontSize = `${fontSize}px`;

    // 副标题与主标题保持比例（约40%）
    const subtitleFontSize = fontSize * 0.4;
    subtitleRef.value!.style.fontSize = `${subtitleFontSize}px`;
  }, 10);
};

onMounted(() => {
  adjustTitleSize();
  window.addEventListener('resize', adjustTitleSize);

  // 初始化 UI 自动缩放
  currentAutoScale = calculateAutoScale();
  setAutoRootScale(currentAutoScale);
  window.addEventListener('resize', handleAutoScaleResize);

  // 监听UI缩放变化
  const observer = new MutationObserver(() => {
    adjustTitleSize();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['style']
  });

  // 清理函数在组件卸载时执行
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
});

onUnmounted(() => {
  window.removeEventListener('resize', adjustTitleSize);
  window.removeEventListener('resize', handleAutoScaleResize);

  // 清理自动缩放动画
  if (autoScaleAnimationId) {
    cancelAnimationFrame(autoScaleAnimationId);
  }
});

// 当标题/副标题内容变化时，重新计算自适应字号
watch(
  () => playerExamConfig?.value?.examName,
  () => adjustTitleSize()
);
watch(
  () => playerExamConfig?.value?.message,
  () => adjustTitleSize()
);

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
  examStatus,
  remainingTime,
  displayedRemainingTime,
  displayFormattedExamInfos,
  effectiveRoomNumber,
  uiDensity: densityState,
  largeClockEnabled: computed(() => largeClockState.value),
  largeClockScale: largeClockScaleState,
  examInfoLargeFont: computed(() => examInfoLargeFontState.value),
  materialFontScale: materialFontScaleState,
  handleRoomNumberClick,
  currentExamIndex: computed(() => state.value.currentExamIndex)
};
provide('ExamPlayerCtx', ctxForCards);

const resolvedCards = computed(() => ({
  clock: props.cards?.clock ?? ClockCard,
  examInfo: props.cards?.examInfo ?? ExamInfoCard,
  room: props.cards?.room ?? ExamRoomCard,
  list: props.cards?.list ?? CurrentListCard
}));
</script>

<style scoped>
* {
  font-family: 'MiSans';
}

.exam-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #02080d;
  /* 提供本地默认变量，防止未继承导致的变量缺失 */
  --ui-scale: 1;
  --density-scale: 1;
  --large-clock-scale: 1;
}

.background-ellipse {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 45%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(55, 88, 255, 0.3) 0%,
    rgba(70, 82, 255, 0) 100%
  );

  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
}

.exam-room-container {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
  display: flex;
  justify-content: flex-end; /* 右对齐 */
}

.title-section {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
}

.main-title {
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.subtitle {
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;
  line-height: 1.4;
}

.clock-card {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}

.clock-content {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}

.time-display {
  font-size: calc(var(--ui-scale, 1) * 4rem);
  line-height: 1;
  color: #fff;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.167rem) calc(var(--ui-scale, 1) * 1.458rem)
    rgba(255, 255, 255, 0.3);
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-style: normal;
  font-weight: 600;
}

.time-note {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * 1.5rem);
  line-height: calc(var(--ui-scale, 1) * 2rem);
}

.exam-info-card {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}

.content-wrapper {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 6rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
}

/* 顶部标题栏 */
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
}

.top-header .title-section {
  flex: 1;
  min-width: 0;
}

.top-header .header-room {
  flex-shrink: 0;
  margin-left: calc(var(--ui-scale, 1) * 2rem);
}

/* 中间大时钟区域 */
.clock-section {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock-section > * {
  width: 100%;
}

/* 底部左右分栏 */
.bottom-section {
  flex: 1;
  min-height: 0;
  display: flex;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}

.bottom-left {
  width: 45%;
  min-width: 0;
  overflow: hidden;
}

.bottom-right {
  width: 55%;
  min-width: 0;
  overflow: hidden;
}

/* 统一卡片间距（适配可插拔卡片） */
.card-item {
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
}
.card-item:last-child {
  margin-bottom: 0;
}

/* 弹窗样式 */
.room-number-modal .modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.room-number-modal .modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  max-width: calc(100vw - 32px);
  background: #0b1220;
  border: 1px solid #1f2a44;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  z-index: 1001;
  color: #fff;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #9aa4b2;
  cursor: pointer;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  color: #9aa4b2;
}

.room-input {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #1f2a44;
  background: #0e1628;
  color: #fff;
  padding: 0 12px;
}

.btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fff;
}

.btn-cancel {
  background: #1f2a44;
}

.btn-confirm {
  background: #1668dc;
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

/* 覆盖层与动画 */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-soft-enter-active,
.fade-soft-leave-active {
  transition:
    opacity 320ms ease,
    transform 320ms ease;
}
.fade-soft-enter-from,
.fade-soft-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

/* 彩色提醒：全屏遮罩（可定制颜色） */
.colorful-overlay {
  background: var(--colorful-bg, #ff3b30);
  background: color-mix(in srgb, var(--colorful-bg, #ff3b30) 85%, transparent);
  backdrop-filter: blur(2px);
}
.colorful-title {
  color: var(--colorful-text, #fff);
  font-size: calc(var(--ui-scale, 1) * 5rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-shadow: var(--colorful-shadow, 0 6px 24px rgba(0, 0, 0, 0.35));
  text-align: center;
}

.colorful-hint {
  position: absolute;
  bottom: calc(var(--ui-scale, 1) * 3rem);
  left: 50%;
  transform: translateX(-50%);
  color: var(--colorful-text, #fff);
  font-size: calc(var(--ui-scale, 1) * 1.2rem);
  opacity: 0.6;
  text-align: center;
  pointer-events: none;
}

@media (dynamic-range: high) {
  .colorful-overlay.hdr-highlight .colorful-title {
    color: color(display-p3 1 1 1);
  }
}

/* 普通通知：毛玻璃卡片 */
.notice-overlay {
  backdrop-filter: blur(12px) saturate(1.1);
  background: rgba(0, 0, 0, 0.35);
  padding: 24px;
}
.notice-card {
  background: rgba(16, 22, 33, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  max-width: min(960px, 92vw);
  padding: 28px;
  color: #fff;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}
.notice-content :is(h1, h2, h3) {
  margin: 0 0 12px 0;
}
.notice-content h1 {
  font-size: 2rem;
}
.notice-content h2 {
  font-size: 1.5rem;
}
.notice-content p,
.notice-content br {
  line-height: 1.6;
}
.notice-content code {
  background: rgba(255, 255, 255, 0.08);
  padding: 0 6px;
  border-radius: 4px;
}
.notice-card :deep(.t-button) {
  margin-top: 18px;
}
</style>
