<template>
  <div class="exam-container" ref="rootRef">
    <!-- 背景渐变椭圆 -->
    <div class="background-ellipse"></div>

    <!-- 主要内容（可插拔卡片区域） -->
    <div class="content-wrapper">
      <!-- 左侧列（默认布局） -->
      <div class="left-column">
        <slot name="left:logo">
          <div class="logo-container"><span class="logo-text">DSZ ExamAware 知试</span></div>
        </slot>

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

        <div class="card-item"><component :is="resolvedCards.clock" /></div>
        <div class="card-item">
          <component :is="resolvedCards.examInfo" @editClick="$emit('editClick')" />
        </div>
      </div>

      <!-- 右侧列（默认布局） -->
      <div class="right-column">
        <div class="card-item"><component :is="resolvedCards.room" /></div>
        <div class="card-item"><component :is="resolvedCards.list" /></div>
      </div>
    </div>

    <!-- 底部按钮栏 -->
    <ActionButtonBar
      v-if="showActionBar"
      :initial-scale="props.uiScale"
      @exit="emit('exit')"
      @scale-change="emit('scaleChange', $event)"
    />

    <!-- 彩色提醒：用于考试开始/即将结束/考试结束，淡入动画 -->
    <transition name="fade-soft">
      <div v-if="colorfulVisible" class="overlay colorful-overlay" :style="colorfulOverlayStyle">
        <div class="colorful-title">{{ colorfulTitle }}</div>
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
import { computed, ref, onMounted, onUnmounted, watch, provide } from 'vue';
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
// 本地引入 TDesign 组件，确保不依赖宿主全局注册
import { Dialog as TDialog, Input as TInput, Button as TButton } from 'tdesign-vue-next';
import { useReminderService, ReminderUtils } from '../reminderService';

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

// Props 定义
interface Props {
  /** 考试配置 */
  examConfig: ExamConfig | null;
  /** 播放器配置 */
  config?: PlayerConfig;
  /** 初始界面缩放倍数 */
  uiScale?: number;
  /** 时间提供者 */
  timeProvider?: TimeProvider;
  /** 时间同步状态描述 */
  timeSyncStatus?: string;
  /** 考场号 */
  roomNumber?: string;
  /** 是否显示操作栏 */
  showActionBar?: boolean;
  /** 是否启用大时钟样式 */
  largeClock?: boolean;
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
  (e: 'editClick'): void;
  (e: 'roomNumberClick'): void;
  (e: 'roomNumberChange', roomNumber: string): void;
  (e: 'update:roomNumber', roomNumber: string): void;
  (e: 'exit'): void;
  (e: 'scaleChange', scale: number): void;
  (e: 'examStart', exam: any): void;
  (e: 'examEnd', exam: any): void;
  (e: 'examAlert', exam: any, alertTime: number): void;
  (e: 'examSwitch', fromExam: any, toExam: any): void;
  (e: 'error', error: string): void;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => ({ roomNumber: '01' }),
  uiScale: undefined,
  timeProvider: () => ({ getCurrentTime: () => Date.now() }),
  timeSyncStatus: '电脑时间',
  roomNumber: '01',
  showActionBar: true,
  largeClock: false,
  allowEditRoomNumber: true,
  eventHandlers: () => ({}),
  cards: () => ({})
});

const emit = defineEmits<Emits>();

// 显式注册局部组件（<t-dialog> / <t-input>）
// 在 <script setup> 中，import 即可自动可用，但为兼容性，保留命名引用
const TDialogComp = TDialog;
const TInputComp = TInput;
const TButtonComp = TButton;

// 合并事件处理器
const mergedEventHandlers: PlayerEventHandlers = {
  ...props.eventHandlers,
  onExamStart: (exam: any) => {
    props.eventHandlers?.onExamStart?.(exam);
    emit('examStart', exam);
    // 考试开始（绿色）
    reminder.showColorfulAlert({ title: '考试开始', themeBaseColor: '#2ecc71' });
  },
  onExamEnd: (exam: any) => {
    props.eventHandlers?.onExamEnd?.(exam);
    emit('examEnd', exam);
    // 考试结束（红色）
    reminder.showColorfulAlert({ title: '考试结束', themeBaseColor: '#ff3b30' });
  },
  onExamAlert: (exam: any, alertTime: number) => {
    props.eventHandlers?.onExamAlert?.(exam, alertTime);
    emit('examAlert', exam, alertTime);
    // 考试即将结束（黄色）
    reminder.showColorfulAlert({ title: '考试即将结束', themeBaseColor: '#f1c40f' });
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
    examPlayer.updateConfig(newConfig);
  },
  { immediate: false, deep: true }
);

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

// === 提醒服务 ===
const reminder = useReminderService();
// colorful 提醒派生
const colorfulVisible = reminder.isColorfulVisible;
const colorfulTitle = computed(() => reminder._colorfulReminder.value?.title || '提示');
const colorfulOverlayStyle = computed(() => {
  const base = reminder._colorfulReminder.value?.themeBaseColor || '#ff3b30';
  const text = ReminderUtils.getContrastingTextColor(base);
  return {
    '--colorful-bg': base,
    '--colorful-text': text
  } as Record<string, string>;
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
  clearAllNotices: reminder.clearAllNotices
});

// 与考试事件联动：当 onExamAlert 触发时，自动弹出“即将结束”提醒
// 注意：这里通过 mergedEventHandlers 上报事件，但在本组件内也监听 examPlayer 的 eventHandlers
// 我们在 mergedEventHandlers 中已 emit('examAlert'...)，此处再监听 props.eventHandlers 的回调即可。
// 为避免重复，这里本地监听 examAlert 事件：在 props.eventHandlers.onExamAlert 外，我们也用 watch examStatus。
let hasShownEndingForExamId: string | null = null;
watch(
  () => remainingTime.value,
  (txt) => {
    // 简单启发：当剩余时间文本中出现 “分钟” 且小于等于 10 分钟时触发一次。
    if (!txt || !currentExam.value) return;
    const m = txt.match(/(\d+)\s*分钟/i);
    if (m) {
      const minutes = parseInt(m[1]);
      const examId = currentExam.value?.id || currentExam.value?.name;
      if (minutes <= 10 && examId && hasShownEndingForExamId !== examId) {
        hasShownEndingForExamId = examId;
        reminder.showColorfulAlert({ title: '考试即将结束', themeBaseColor: '#f1c40f' });
      }
    }
  }
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
  displayedRemainingTime: computed(() =>
    examStatus.value?.status === 'pending' ? '' : remainingTime.value || ''
  ),
  displayFormattedExamInfos,
  effectiveRoomNumber,
  largeClockEnabled: computed(() => !!props.largeClock),
  handleRoomNumberClick
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
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
  display: flex;
  justify-content: flex-end; /* 右对齐 */
}

.logo-container {
  position: relative;
  margin-bottom: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  z-index: 20;
}

.logo-text {
  color: #ffffff;
  font-size: calc(var(--ui-scale, 1) * 1.25rem);
  font-weight: 600;
  letter-spacing: 0.025em;
}

.title-section {
  margin-bottom: calc(var(--ui-scale, 1) * 3rem);
}

.main-title {
  color: #ffffff;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: calc(var(--ui-scale, 1) * 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  line-height: 1.4;
}

.clock-card {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
}

.clock-content {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 2rem);
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
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
}

.content-wrapper {
  position: relative;
  z-index: 10;
  height: 100vh;
  display: flex;
  padding: calc(var(--ui-scale, 1) * 2rem) calc(var(--ui-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * 8rem) calc(var(--ui-scale, 1) * 2rem);
  gap: calc(var(--ui-scale, 1) * 100px);
}

.left-column {
  width: 50%;
  min-width: 0; /* 允许收缩 */
  padding-top: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  overflow: hidden; /* 防止内容溢出 */
}

.right-column {
  width: 50%;
  min-width: 0; /* 允许收缩 */
  padding-top: calc(var(--ui-scale, 1) * 40px * 100vh / 1080px);
  overflow: hidden; /* 防止内容溢出 */
}

/* 统一卡片间距（适配可插拔卡片） */
.card-item {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
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
  background: color-mix(in srgb, var(--colorful-bg, #ff3b30) 85%, transparent);
  backdrop-filter: blur(2px);
}
.colorful-title {
  color: var(--colorful-text, #fff);
  font-size: calc(var(--ui-scale, 1) * 5rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  text-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
  text-align: center;
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
