<template>
  <!-- 全屏遮罩 - 长按退出时显示 -->
  <div
    v-if="isPressing || darknessProgress > 0"
    class="fullscreen-overlay"
    :style="{ '--darkness': darknessProgress }"
  ></div>

  <div class="action-button-bar">
    <div class="button-container">
      <!-- 退出播放按钮 - 长按3秒退出 -->
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
      <button class="action-button" @click="handlePlaybackSettings">
        <div class="button-icon">
          <SettingIcon />
        </div>
        <div class="button-text">播放设置</div>
      </button>

      <!-- 呼叫巡考按钮 - 默认隐藏，留给后面集控使用 -->
      <!-- <button class="action-button" @click="handleCallInspector" style="display: none;">
        <div class="button-icon">
          <call-icon />
        </div>
        <div class="button-text">呼叫巡考</div>
      </button> -->
    </div>
  </div>

  <!-- 播放设置弹窗（空内容） -->
  <t-dialog
    :visible="showSettings"
    header="播放设置"
    :confirm-btn="{ content: '完成', theme: 'primary' }"
    :cancel-btn="null"
    :close-on-overlay-click="true"
    :close-on-esc-keydown="true"
    @update:visible="handleSettingsVisibleChange"
    @confirm="handleSettingsConfirm"
    @close="handleSettingsClosed"
  >
    <div class="settings-body">
      <t-space direction="vertical" :size="16" style="width: 100%">
        <div class="settings-group">
          <div class="settings-label">界面缩放</div>
          <div class="settings-control">
            <t-slider
              v-model:value="tempScale"
              :min="0.5"
              :max="2"
              :step="0.01"
              :input-number-props="{ theme: 'column', suffix: 'x', format: formatScale }"
            />
            <div class="settings-hint">拖动或输入数值调整播放器界面大小</div>
          </div>
        </div>
      </t-space>
    </div>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
const props = withDefaults(defineProps<{ initialScale?: number }>(), { initialScale: undefined });
const emit = defineEmits<{ (e: 'exit'): void; (e: 'scaleChange', scale: number): void }>();
import { LogoutIcon, SettingIcon } from 'tdesign-icons-vue-next';
import {
  Dialog as TDialog,
  Slider as TSlider,
  InputNumber as TInputNumber,
  Space as TSpace
} from 'tdesign-vue-next';

const clampScale = (value: unknown) => {
  const num = Number(value);
  if (!Number.isFinite(num)) return 1;
  return Math.min(2, Math.max(0.5, num));
};

const providedInitial =
  props.initialScale !== undefined && props.initialScale !== null
    ? clampScale(props.initialScale)
    : undefined;

const uiScale = ref(providedInitial ?? getInitialScale());
const tempScale = ref(uiScale.value);
let currentScale = uiScale.value;

// 播放设置弹窗开关
const showSettings = ref(false);

// 长按相关状态
const isPressing = ref(false);
const pressProgress = ref(0);
const darknessProgress = ref(0); // 新增：单独控制变暗进度
let longPressTimer: number | null = null;
let progressAnimationId: number | null = null; // 改用 requestAnimationFrame
let lightenAnimationId: number | null = null; // 改用 requestAnimationFrame

function getInitialScale() {
  // 默认根据屏幕宽度自动设置初始缩放
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

onMounted(() => {
  currentScale = uiScale.value;
  setRootScale(uiScale.value);
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

onUnmounted(() => {
  // 清理定时器和动画帧
  cancelLongPress();
  if (lightenAnimationId) {
    cancelAnimationFrame(lightenAnimationId);
    lightenAnimationId = null;
  }
});

// 长按功能
const startLongPress = (e: Event) => {
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
  console.log('退出播放（触发 exit 事件）');
  emit('exit');
};

const handlePlaybackSettings = () => {
  console.log('打开播放设置弹窗');
  tempScale.value = uiScale.value;
  showSettings.value = true;
};

const handleSettingsConfirm = () => {
  const safe = clampScale(tempScale.value);
  tempScale.value = safe;
  uiScale.value = safe;
  showSettings.value = false;
};

const handleSettingsVisibleChange = (visible: boolean) => {
  showSettings.value = visible;
  if (!visible) {
    tempScale.value = uiScale.value;
  }
};

const handleSettingsClosed = () => {
  // 关闭时重置临时缩放值，避免下次打开残留中间值
  tempScale.value = uiScale.value;
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
  padding: calc(var(--ui-scale, 1) * 1rem) calc(var(--ui-scale, 1) * 2rem)
    calc(var(--ui-scale, 1) * 2rem) calc(var(--ui-scale, 1) * 2rem);
}

.button-container {
  display: flex;
  gap: calc(var(--ui-scale, 1) * 1.25rem);
  align-items: center;
  justify-content: flex-start;
}

.action-button {
  width: calc(var(--ui-scale, 1) * 5rem);
  height: calc(var(--ui-scale, 1) * 5rem);
  border-radius: calc(var(--ui-scale, 1) * 15px);
  border: calc(var(--ui-scale, 1) * 2px) solid rgba(255, 255, 255, 0.16);
  background: #040e15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: calc(var(--ui-scale, 1) * 0.25rem);
  padding: calc(var(--ui-scale, 1) * 0.5rem);
  position: relative;
  overflow: hidden;
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
  top: calc(var(--ui-scale, 1) * -3px);
  left: calc(var(--ui-scale, 1) * -3px);
  right: calc(var(--ui-scale, 1) * -3px);
  bottom: calc(var(--ui-scale, 1) * -3px);
  border-radius: calc(var(--ui-scale, 1) * 18px);
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
  border-radius: calc(var(--ui-scale, 1) * 18px);
  padding: calc(var(--ui-scale, 1) * 3px);
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
  font-size: calc(var(--ui-scale, 1) * 30px);
}

.button-text {
  color: rgba(255, 255, 255, 0.85);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 0.875rem);
  font-weight: 500;
  text-align: center;
  line-height: 1;
  white-space: nowrap;
}

.icon-svg {
  width: calc(var(--ui-scale, 1) * 30px);
  height: calc(var(--ui-scale, 1) * 30px);
}

.settings-body {
  padding: 12px 0;
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.settings-label {
  font-size: 14px;
  color: var(--td-text-color-primary, rgba(255, 255, 255, 0.9));
}

.settings-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.settings-hint {
  font-size: 12px;
  color: var(--td-text-color-placeholder, rgba(255, 255, 255, 0.45));
}
</style>
