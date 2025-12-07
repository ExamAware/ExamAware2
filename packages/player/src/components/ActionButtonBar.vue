<template>
  <!-- 全屏遮罩 - 长按退出时显示 -->
  <div
    v-if="isPressing || darknessProgress > 0"
    class="fullscreen-overlay"
    :style="{ '--darkness': darknessProgress }"
  ></div>

  <div
    class="action-button-bar"
    :class="{
      collapsed: isCollapsed,
      'settings-open': showSettings,
      'manual-collapsed': manualCollapsed
    }"
    @mouseenter="handleUserActivity"
    @mousemove="handleUserActivity"
    @mouseleave="scheduleCollapse"
    @touchstart.passive="handleUserActivity"
  >
    <div class="button-container">
      <!-- 退出播放按钮 - 长按退出 -->
      <button
        class="action-button exit-button"
        :class="{ pressing: isPressing }"
        @mousedown="startLongPress"
        @mouseup="cancelLongPress"
        @mouseleave="cancelLongPress"
        @touchstart="startLongPress"
        @touchend="cancelLongPress"
        @touchcancel="cancelLongPress"
      >
        <div
          class="progress-border"
          v-if="isPressing"
          :style="{ '--progress': pressProgress }"
        ></div>
        <div class="button-icon">
          <LogoutIcon />
        </div>
        <div class="button-text">{{ isPressing ? '按住退出' : '退出播放' }}</div>
      </button>

      <!-- 播放设置按钮 -->
      <button class="action-button" type="button" @click="handlePlaybackSettings">
        <div class="button-icon">
          <SettingIcon />
        </div>
        <div class="button-text">播放设置</div>
      </button>

      <!-- 额外工具 -->
      <template v-for="tool in sortedExtraTools" :key="tool.id">
        <component
          v-if="tool.component"
          :is="tool.component"
          class="action-button custom-tool"
          v-bind="tool.componentProps ?? {}"
        />
        <button
          v-else
          class="action-button extra-tool"
          :class="tool.className"
          type="button"
          :title="tool.tooltip || tool.label"
          :disabled="tool.disabled"
          @click="handleToolClick(tool, $event)"
        >
          <div class="button-icon">
            <component v-if="tool.icon" :is="tool.icon" />
          </div>
          <div class="button-text">{{ tool.label }}</div>
        </button>
      </template>

      <!-- 折叠开关 -->
      <button
        class="action-button collapse-toggle"
        type="button"
        :aria-pressed="manualCollapsed"
        :aria-label="manualCollapsed ? '展开工具栏' : '收起工具栏'"
        :title="manualCollapsed ? '展开工具栏' : '收起工具栏'"
        @click.stop="toggleManualCollapse"
      >
        <div class="button-icon">
          <ChevronRightIcon v-if="isCollapsed" />
          <ChevronLeftIcon v-else />
        </div>
        <div class="button-text">{{ manualCollapsed ? '展开' : '收起' }}</div>
      </button>
    </div>
  </div>

  <PlaybackSettingsDrawer
    :visible="showSettings"
    :scale="tempScale"
    :density="tempDensity"
    :large-clock-enabled="tempLargeClockEnabled"
    :large-clock-scale="tempLargeClockScale"
    :density-options="densityOptions"
    :format-scale="formatScale"
    :is-dev-mode="isDevMode"
    @update:visible="handleSettingsVisibleChange"
    @update:scale="handleTempScaleUpdate"
    @update:density="handleTempDensityUpdate"
    @update:largeClockEnabled="handleTempLargeClockEnabledUpdate"
    @update:largeClockScale="handleTempLargeClockScaleUpdate"
    @close="handleSettingsClosed"
    @confirm="handleSettingsConfirm"
    @dev-reminder-test="triggerDevReminderTest"
    @dev-reminder-hide="triggerDevReminderHide"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
import type { PlayerToolbarItem } from '../types';
import type {
  UIDensity,
  DensityOption,
  DevReminderPreset,
  DevReminderPayload
} from '../types/toolbar';
import { defaultDensityOptions } from '../types/toolbar';
import PlaybackSettingsDrawer from './PlaybackSettingsDrawer.vue';
const props = withDefaults(
  defineProps<{
    initialScale?: number;
    initialDensity?: UIDensity;
    initialLargeClockScale?: number;
    initialLargeClockEnabled?: boolean;
    extraTools?: readonly PlayerToolbarItem[];
  }>(),
  {
    initialScale: undefined,
    initialDensity: 'comfortable',
    initialLargeClockScale: 1,
    initialLargeClockEnabled: false,
    extraTools: () => []
  }
);
const emit = defineEmits<{
  (e: 'exit'): void;
  (e: 'scaleChange', scale: number): void;
  (e: 'densityChange', density: UIDensity): void;
  (e: 'clockScaleChange', scale: number): void;
  (e: 'largeClockToggle', enabled: boolean): void;
  (e: 'devReminderTest', preset: DevReminderPreset | DevReminderPayload): void;
  (e: 'devReminderHide'): void;
}>();
import { LogoutIcon, SettingIcon, ChevronLeftIcon, ChevronRightIcon } from 'tdesign-icons-vue-next';

const isDevMode = Boolean(import.meta.env?.DEV ?? false);

const clampScale = (value: unknown) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return 1;
  return Math.min(2, Math.max(0.5, num));
};

const clampClockScale = (value: unknown) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return 1;
  return Math.min(2, Math.max(0.5, num));
};

const normalizeDensity = (value: unknown): UIDensity => {
  if (value === 'comfortable' || value === 'cozy' || value === 'compact') {
    return value as UIDensity;
  }
  return 'comfortable';
};

const densityOptions: DensityOption[] = defaultDensityOptions;

const densityFactorMap: Record<UIDensity, number> = {
  comfortable: 1,
  cozy: 0.85,
  compact: 0.7
};

const providedInitialScale =
  props.initialScale !== undefined && props.initialScale !== null
    ? clampScale(props.initialScale)
    : undefined;

const providedInitialDensity = normalizeDensity(props.initialDensity);

const uiScale = ref(providedInitialScale ?? getInitialScale());
const tempScale = ref(uiScale.value);
let currentScale = uiScale.value;

const density = ref<UIDensity>(providedInitialDensity);
const tempDensity = ref<UIDensity>(density.value);
const largeClockScale = ref<number>(
  props.initialLargeClockScale !== undefined && props.initialLargeClockScale !== null
    ? clampClockScale(props.initialLargeClockScale)
    : 1
);
const tempLargeClockScale = ref<number>(largeClockScale.value);
const largeClockEnabled = ref<boolean>(Boolean(props.initialLargeClockEnabled));
const tempLargeClockEnabled = ref<boolean>(largeClockEnabled.value);

const handleTempScaleUpdate = (value: number) => {
  tempScale.value = value;
};

const handleTempDensityUpdate = (value: UIDensity) => {
  tempDensity.value = value;
};

const handleTempLargeClockEnabledUpdate = (value: boolean) => {
  tempLargeClockEnabled.value = value;
};

const handleTempLargeClockScaleUpdate = (value: number) => {
  tempLargeClockScale.value = value;
};

// 播放设置弹窗开关
const showSettings = ref(false);
const autoCollapsed = ref(false);
const manualCollapsed = ref(false);
const isCollapsed = computed(() => manualCollapsed.value || autoCollapsed.value);

const sortedExtraTools = computed(() => {
  const list = Array.isArray(props.extraTools) ? [...props.extraTools] : [];
  return list.sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
});

const COLLAPSE_DELAY = 4000;
let collapseTimer: number | null = null;
let lastActivityAt = 0;
const activityEvents = ['mousemove', 'mousedown', 'keydown', 'wheel', 'touchstart'];

const cancelCollapseTimer = () => {
  if (collapseTimer !== null) {
    window.clearTimeout(collapseTimer);
    collapseTimer = null;
  }
};

const scheduleCollapse = () => {
  if (showSettings.value || isPressing.value || manualCollapsed.value) return;
  cancelCollapseTimer();
  collapseTimer = window.setTimeout(() => {
    if (!showSettings.value && !isPressing.value && !manualCollapsed.value) {
      autoCollapsed.value = true;
    }
  }, COLLAPSE_DELAY);
};

const markActivity = () => {
  lastActivityAt = Date.now();
};

const handleUserActivity = () => {
  const now = Date.now();
  if (now - lastActivityAt < 100) {
    return;
  }
  markActivity();
  if (manualCollapsed.value) {
    return;
  }
  if (autoCollapsed.value) {
    autoCollapsed.value = false;
  }
  scheduleCollapse();
};

const handleGlobalActivity = () => {
  handleUserActivity();
};

const toggleManualCollapse = () => {
  if (manualCollapsed.value) {
    manualCollapsed.value = false;
    autoCollapsed.value = false;
    handleUserActivity();
    return;
  }
  if (autoCollapsed.value) {
    autoCollapsed.value = false;
    handleUserActivity();
    return;
  }
  manualCollapsed.value = true;
  autoCollapsed.value = false;
  cancelCollapseTimer();
};

// 长按相关状态
const isPressing = ref(false);
const pressProgress = ref(0);
const darknessProgress = ref(0); // 新增：单独控制变暗进度
let longPressTimer: number | null = null;
let progressAnimationId: number | null = null; // 改用 requestAnimationFrame
let lightenAnimationId: number | null = null; // 改用 requestAnimationFrame

function getInitialScale() {
  // 默认根据屏幕宽度自动设置初始缩放
  if (typeof window === 'undefined') {
    return 1;
  }
  const w = window.innerWidth;
  if (w >= 1920) return 1.2;
  if (w >= 1440) return 1.0;
  if (w >= 1024) return 0.85;
  return 0.7;
}

const setRootScale = (scale: number) => {
  // 停止自动缩放动画，允许手动缩放覆盖
  const autoScaleAnimationId = (window as any).autoScaleAnimationId;
  if (autoScaleAnimationId) {
    cancelAnimationFrame(autoScaleAnimationId);
    (window as any).autoScaleAnimationId = null;
  }
  // 设置到 documentElement
  document.documentElement.style.setProperty('--ui-scale', String(scale));
  // 同时设置到最近的 .exam-container（如果存在）
  const container = document.querySelector('.exam-container') as HTMLElement | null;
  if (container) {
    container.style.setProperty('--ui-scale', String(scale));
  }
  console.log('Manual scale set to:', scale);
  console.log(
    'CSS variable --ui-scale is now:',
    getComputedStyle(document.documentElement).getPropertyValue('--ui-scale')
  );
};

const setRootDensity = (value: UIDensity) => {
  if (typeof window === 'undefined') return;
  const factor = densityFactorMap[value] ?? 1;
  document.documentElement.style.setProperty('--density-scale', String(factor));
  const container = document.querySelector('.exam-container') as HTMLElement | null;
  if (container) {
    container.style.setProperty('--density-scale', String(factor));
    container.dataset.density = value;
  }
};

const setLargeClockScale = (value: number) => {
  if (typeof window === 'undefined') return;
  const target = String(value);
  document.documentElement.style.setProperty('--large-clock-scale', target);
  const container = document.querySelector('.exam-container') as HTMLElement | null;
  if (container) {
    container.style.setProperty('--large-clock-scale', target);
  }
};

const devReminderPresets: Record<DevReminderPreset, DevReminderPayload> = {
  start: { title: '考试开始（测试）', themeBaseColor: '#2ecc71' },
  warning: { title: '考试即将结束（测试）', themeBaseColor: '#f1c40f' },
  end: { title: '考试结束（测试）', themeBaseColor: '#ff3b30' }
};

const triggerDevReminderTest = (preset: DevReminderPreset) => {
  if (!isDevMode) return;
  const payload = devReminderPresets[preset];
  emit('devReminderTest', payload ?? devReminderPresets.start);
};

const triggerDevReminderHide = () => {
  if (!isDevMode) return;
  emit('devReminderHide');
};

onMounted(() => {
  currentScale = uiScale.value;
  setRootScale(uiScale.value);
  setRootDensity(density.value);
  setLargeClockScale(largeClockScale.value);
  markActivity();
  scheduleCollapse();
  activityEvents.forEach((eventName) => {
    window.addEventListener(eventName, handleGlobalActivity, { passive: true });
  });
});

watch(
  () => props.initialScale,
  (value) => {
    if (value === undefined || value === null) return;
    const safe = clampScale(value);
    currentScale = safe;
    uiScale.value = safe;
    tempScale.value = safe;
  }
);

watch(
  () => props.initialDensity,
  (value) => {
    if (value === undefined || value === null) return;
    const safe = normalizeDensity(value);
    density.value = safe;
    tempDensity.value = safe;
  }
);

watch(
  () => props.initialLargeClockScale,
  (value) => {
    if (value === undefined || value === null) return;
    const safe = clampClockScale(value);
    largeClockScale.value = safe;
    tempLargeClockScale.value = safe;
  }
);

watch(
  () => props.initialLargeClockEnabled,
  (value) => {
    if (typeof value !== 'boolean') return;
    largeClockEnabled.value = value;
    tempLargeClockEnabled.value = value;
  }
);

watch(uiScale, (newValue, oldValue) => {
  const safe = clampScale(newValue);
  if (safe !== newValue) {
    uiScale.value = safe;
    return;
  }
  if (safe === oldValue) {
    // 仍然确保最新缩放应用
    currentScale = safe;
    setRootScale(safe);
    return;
  }
  console.log('uiScale watch triggered:', safe);
  currentScale = safe;
  setRootScale(safe);
  emit('scaleChange', safe);
  console.log('CSS variable --ui-scale set to:', safe);
});

watch(tempScale, (value) => {
  const safe = clampScale(value);
  if (safe !== value) {
    tempScale.value = safe;
    return;
  }
  if (uiScale.value !== safe) {
    uiScale.value = safe;
  }
});

watch(
  density,
  (newValue, oldValue) => {
    const safe = normalizeDensity(newValue);
    if (safe !== newValue) {
      density.value = safe;
      return;
    }
    setRootDensity(safe);
    if (safe !== oldValue) {
      emit('densityChange', safe);
    }
  },
  { immediate: true }
);

watch(tempDensity, (value) => {
  const safe = normalizeDensity(value);
  if (density.value !== safe) {
    density.value = safe;
  }
});

watch(
  largeClockScale,
  (newValue, oldValue) => {
    const safe = clampClockScale(newValue);
    if (safe !== newValue) {
      largeClockScale.value = safe;
      return;
    }
    setLargeClockScale(safe);
    if (safe !== oldValue) {
      emit('clockScaleChange', safe);
    }
  },
  { immediate: true }
);

watch(tempLargeClockScale, (value) => {
  const safe = clampClockScale(value);
  if (largeClockScale.value !== safe) {
    largeClockScale.value = safe;
  }
});

watch(
  largeClockEnabled,
  (enabled, previous) => {
    if (enabled === previous) return;
    emit('largeClockToggle', enabled);
  },
  { immediate: true }
);

watch(tempLargeClockEnabled, (value) => {
  const flag = Boolean(value);
  if (largeClockEnabled.value !== flag) {
    largeClockEnabled.value = flag;
  }
});

onUnmounted(() => {
  // 清理定时器和动画帧
  cancelLongPress();
  if (lightenAnimationId) {
    cancelAnimationFrame(lightenAnimationId);
    lightenAnimationId = null;
  }
  cancelCollapseTimer();
  activityEvents.forEach((eventName) => {
    window.removeEventListener(eventName, handleGlobalActivity);
  });
});

// 长按功能
const startLongPress = (e: Event) => {
  handleUserActivity();
  e.preventDefault();
  console.log('开始长按退出');

  isPressing.value = true;
  pressProgress.value = 0;
  darknessProgress.value = 0;

  const startTime = performance.now();
  const duration = 2000;
  const darknessPhase = 600;

  longPressTimer = window.setTimeout(() => {
    handleExitPlayback();
  }, duration);

  // 使用 requestAnimationFrame 替代 setInterval，避免与缩放动画冲突
  const updateProgress = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    pressProgress.value = Math.min(elapsed / duration, 1);

    // 变暗进度：第一秒内从0到1，使用非线性动画
    if (elapsed <= darknessPhase) {
      const linearProgress = elapsed / darknessPhase;
      // 使用 ease-out-expo 缓动函数：非常快速开始，然后急剧减缓
      darknessProgress.value = linearProgress === 1 ? 1 : 1 - Math.pow(2, -10 * linearProgress);
    } else {
      darknessProgress.value = 1;
    }

    if (pressProgress.value < 1) {
      progressAnimationId = requestAnimationFrame(updateProgress);
    } else {
      progressAnimationId = null;
    }
  };

  progressAnimationId = requestAnimationFrame(updateProgress);
};

const cancelLongPress = () => {
  handleUserActivity();
  if (longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }

  if (progressAnimationId) {
    cancelAnimationFrame(progressAnimationId);
    progressAnimationId = null;
  }

  isPressing.value = false;
  pressProgress.value = 0;

  // 启动变亮动画 - 使用 requestAnimationFrame
  const startDarkness = darknessProgress.value;
  const startTime = performance.now();
  const lightenDuration = 500; // 0.5秒变亮动画

  if (startDarkness > 0) {
    const updateLightness = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const linearProgress = Math.min(elapsed / lightenDuration, 1);

      // 使用 ease-out-quart 缓动函数：快速开始，平滑结束
      const easedProgress = 1 - Math.pow(1 - linearProgress, 4);

      darknessProgress.value = startDarkness * (1 - easedProgress);

      if (linearProgress < 1) {
        lightenAnimationId = requestAnimationFrame(updateLightness);
      } else {
        darknessProgress.value = 0;
        lightenAnimationId = null;
      }
    };

    lightenAnimationId = requestAnimationFrame(updateLightness);
  } else {
    darknessProgress.value = 0;
  }

  console.log('取消长按退出');
};

const handleExitPlayback = () => {
  handleUserActivity();
  console.log('退出播放（触发 exit 事件）');
  emit('exit');
};

const handleToolClick = async (tool: PlayerToolbarItem, event: MouseEvent) => {
  if (tool.disabled) {
    event.preventDefault();
    return;
  }
  handleUserActivity();
  try {
    await tool.onClick?.(event);
  } catch (error) {
    console.error('执行工具栏按钮失败:', error);
  }
};

const handlePlaybackSettings = () => {
  handleUserActivity();
  console.log('打开播放设置弹窗');
  tempScale.value = uiScale.value;
  tempDensity.value = density.value;
  tempLargeClockScale.value = largeClockScale.value;
  tempLargeClockEnabled.value = largeClockEnabled.value;
  showSettings.value = true;
};

const handleSettingsConfirm = () => {
  handleUserActivity();
  const safe = clampScale(tempScale.value);
  tempScale.value = safe;
  uiScale.value = safe;
  density.value = normalizeDensity(tempDensity.value);
  largeClockScale.value = clampClockScale(tempLargeClockScale.value);
  largeClockEnabled.value = Boolean(tempLargeClockEnabled.value);
  showSettings.value = false;
};

const handleSettingsVisibleChange = (visible: boolean) => {
  if (visible) {
    handleUserActivity();
    autoCollapsed.value = false;
    manualCollapsed.value = false;
    cancelCollapseTimer();
  } else {
    scheduleCollapse();
  }
  showSettings.value = visible;
  if (!visible) {
    tempScale.value = uiScale.value;
    tempDensity.value = density.value;
    tempLargeClockScale.value = largeClockScale.value;
    tempLargeClockEnabled.value = largeClockEnabled.value;
  }
};

const handleSettingsClosed = () => {
  // 关闭时重置临时缩放值，避免下次打开残留中间值
  tempScale.value = uiScale.value;
  tempDensity.value = density.value;
  tempLargeClockScale.value = largeClockScale.value;
  tempLargeClockEnabled.value = largeClockEnabled.value;
  scheduleCollapse();
};

const formatScale = (value: number | string) => {
  const num = Number(value);
  if (!Number.isFinite(num)) {
    return `${clampScale(uiScale.value).toFixed(2)}x`;
  }
  return `${clampScale(num).toFixed(2)}x`;
};
</script>

<style scoped>
/* 全屏遮罩 - 逐渐变暗效果 */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, calc(0.9 * var(--darkness, 0)));
  z-index: 40; /* 低于按钮栏但高于其他内容 */
  pointer-events: none; /* 不阻止事件传递 */
  /* 移除过渡效果，使用JavaScript控制动画 */
}

.action-button-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.75rem);
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}

.button-container {
  display: flex;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.25rem);
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  transition: gap 0.2s ease;
}

.action-button {
  width: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 5rem);
  height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 5rem);
  border-radius: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 15px);
  border: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2px) solid rgba(255, 255, 255, 0.16);
  background: #040e15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.25rem);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.5rem);
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
}

.action-button.extra-tool {
  min-width: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 4.25rem);
}

.action-button:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: #051015;
}

.action-button:active {
  transform: scale(0.95);
}

/* 退出按钮特殊样式 - 圆角正方形边框进度动画 */
.exit-button {
  transition: all 0.1s ease;
  position: relative;
  overflow: visible;
  z-index: 60; /* 确保在遮罩之上 */
}

.progress-border {
  position: absolute;
  top: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -3px);
  left: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -3px);
  right: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -3px);
  bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -3px);
  border-radius: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 18px);
  pointer-events: none;
  z-index: 1;
}

.progress-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 18px);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 3px);
  background: conic-gradient(
    from 0deg,
    #ff5757 0deg,
    #ff5757 calc(360deg * var(--progress, 0)),
    transparent calc(360deg * var(--progress, 0)),
    transparent 360deg
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
}

.exit-button.pressing {
  border-color: rgba(255, 87, 87, 0.6);
  background: rgba(139, 0, 0, 0.1);
  transform: scale(0.98);
  z-index: 60; /* 保持在最上层 */
}

.exit-button.pressing .button-icon,
.exit-button.pressing .button-text {
  color: rgba(255, 255, 255, 0.95);
}

.button-icon {
  color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 30px);
}

.button-text {
  color: rgba(255, 255, 255, 0.85);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.875rem);
  font-weight: 500;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}

.icon-svg {
  width: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 30px);
  height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 30px);
}

.action-button.collapse-toggle {
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.35rem);
}

.action-button.collapse-toggle .button-icon {
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 26px);
}

.action-button-bar.collapsed {
  opacity: 0.92;
  transform: translateY(calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.5rem));
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.75rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.25rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.75rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.25rem);
}

.action-button-bar.collapsed .button-container {
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.75rem);
}

.action-button-bar.collapsed .action-button {
  width: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 3.2rem);
  height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 3.2rem);
  border-radius: 999px;
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.25rem);
  gap: 0;
}

.action-button-bar.collapsed .progress-border {
  top: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -2px);
  left: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -2px);
  right: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -2px);
  bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * -2px);
  border-radius: 999px;
}

.action-button-bar.collapsed .progress-border::before {
  border-radius: 999px;
}

.action-button-bar.collapsed .button-text {
  opacity: 0;
  pointer-events: none;
  display: none;
}

.action-button-bar.collapsed .button-icon {
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 24px);
}

.action-button-bar.collapsed .action-button.collapse-toggle {
  width: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2.8rem);
  height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2.8rem);
}

.action-button-bar.manual-collapsed {
  opacity: 0.88;
}

.action-button-bar.manual-collapsed .action-button.collapse-toggle {
  border-color: rgba(255, 255, 255, 0.35);
}

.action-button-bar.settings-open {
  transform: none;
  opacity: 1;
}

.settings-body {
  padding: calc(var(--ui-scale, 1) * 12px) 0;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: calc(var(--ui-scale, 1) * 8px);
}

.settings-label {
  font-size: calc(var(--ui-scale, 1) * 14px);
  color: var(--td-text-color-primary, rgba(255, 255, 255, 0.9));
}

.settings-control {
  display: flex;
  flex-direction: column;
  gap: calc(var(--ui-scale, 1) * 8px);
}

.switch-label {
  font-size: calc(var(--ui-scale, 1) * 13px);
  color: var(--td-text-color-secondary, rgba(255, 255, 255, 0.7));
}

.settings-hint {
  font-size: calc(var(--ui-scale, 1) * 12px);
  color: var(--td-text-color-placeholder, rgba(255, 255, 255, 0.45));
}

.density-options {
  gap: calc(var(--ui-scale, 1) * 12px);
}

.density-option-label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: calc(var(--ui-scale, 1) * 2px);
}

.density-option-title {
  font-size: calc(var(--ui-scale, 1) * 14px);
  font-weight: 600;
  color: var(--td-text-color-primary, rgba(255, 255, 255, 0.95));
}

.density-option-description {
  font-size: calc(var(--ui-scale, 1) * 12px);
  color: var(--td-text-color-secondary, rgba(255, 255, 255, 0.65));
}

.density-options :deep(.t-radio-button-group) {
  width: 100%;
  display: flex;
  gap: calc(var(--ui-scale, 1) * 8px);
}

.density-options :deep(.t-radio-button) {
  flex: 1;
}

.density-options :deep(.t-radio-button__content) {
  width: 100%;
  display: flex;
  justify-content: center;
}

.dev-reminder-tools .settings-label {
  color: #ff9f43;
}

.dev-reminder-tools :deep(.t-button) {
  border-color: rgba(255, 255, 255, 0.3);
}
</style>
