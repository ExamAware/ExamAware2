<template>
  <t-drawer
    :visible="visible"
    header="播放设置"
    placement="right"
    size="420px"
    :close-on-overlay-click="true"
    :show-overlay="true"
    @update:visible="handleVisibleChange"
    @close="handleClose"
  >
    <div class="settings-body" :style="settingsBodyStyle">
      <t-space direction="vertical" :size="16" style="width: 100%">
        <div class="settings-group">
          <div class="settings-label">界面缩放</div>
          <div class="settings-control">
            <div class="slider-row">
              <t-slider
                v-model:value="scaleModel"
                :min="0.5"
                :max="2"
                :step="0.01"
                :input-number-props="{ theme: 'column', suffix: 'x', format: formatScale }"
              />
            </div>
            <div class="settings-hint">拖动或输入数值调整播放器界面大小</div>
          </div>
        </div>
        <div class="settings-group">
          <div class="settings-label">界面密度</div>
          <div class="settings-control density-options">
            <t-radio-group v-model:value="densityModel">
              <t-radio v-for="option in densityOptions" :key="option.value" :value="option.value">
                <div class="density-option-label">
                  <span class="density-option-title">{{ option.label }}</span>
                  <span class="density-option-description">{{ option.description }}</span>
                </div>
              </t-radio>
            </t-radio-group>
            <div class="settings-hint">同步缩放卡片留白与信息排布紧凑程度</div>
          </div>
        </div>
        <div class="settings-group">
          <div class="settings-label">大时钟模式</div>
          <div class="settings-control">
            <div class="switch-row">
              <t-switch v-model:value="largeClockEnabledModel" size="large" />
              <span class="switch-label">{{ largeClockEnabledModel ? '已启用' : '未启用' }}</span>
            </div>
            <div class="settings-hint">启用后主时间卡片将进入大时钟样式，可独立调整字号</div>
          </div>
        </div>
        <div class="settings-group">
          <div class="settings-label">大时钟字号</div>
          <div class="settings-control">
            <div class="slider-row">
              <t-slider
                v-model:value="largeClockScaleModel"
                :min="0.5"
                :max="1.8"
                :step="0.05"
                :disabled="!largeClockEnabledModel"
                :input-number-props="{ theme: 'column', suffix: 'x', format: formatScale }"
              />
            </div>
            <div class="settings-hint">仅在大时钟模式下生效，用于独立放大时间显示字号</div>
          </div>
        </div>
        <div v-if="isDevMode" class="settings-group dev-reminder-tools">
          <div class="settings-label">调试 · 全屏提醒</div>
          <div class="settings-control">
            <t-space direction="vertical" :size="8" style="width: 100%">
              <div class="settings-hint">仅在开发模式可见，用于预览彩色提醒动画</div>
              <t-space :size="8" wrap>
                <t-button size="small" variant="outline" @click="triggerDevReminderTest('start')">
                  模拟开考
                </t-button>
                <t-button size="small" variant="outline" @click="triggerDevReminderTest('warning')">
                  模拟即将结束
                </t-button>
                <t-button size="small" variant="outline" @click="triggerDevReminderTest('end')">
                  模拟结束
                </t-button>
              </t-space>
              <t-button size="small" variant="text" theme="default" @click="triggerDevReminderHide">
                关闭当前提醒
              </t-button>
            </t-space>
          </div>
        </div>
      </t-space>
    </div>
    <template #footer>
      <div class="settings-footer">
        <t-button theme="primary" @click="emit('confirm')">完成</t-button>
      </div>
    </template>
  </t-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  Drawer as TDrawer,
  Slider as TSlider,
  Space as TSpace,
  RadioGroup as TRadioGroup,
  Radio as TRadio,
  Button as TButton,
  Switch as TSwitch
} from 'tdesign-vue-next';
import type { UIDensity, DensityOption } from '../types/toolbar';

type DevReminderPreset = 'start' | 'warning' | 'end';

const props = withDefaults(
  defineProps<{
    visible: boolean;
    scale: number;
    density: UIDensity;
    densityOptions: DensityOption[];
    largeClockEnabled: boolean;
    largeClockScale: number;
    formatScale: (value: number | string) => string;
    isDevMode?: boolean;
  }>(),
  {
    isDevMode: false
  }
);

const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void;
  (e: 'update:scale', value: number): void;
  (e: 'update:density', value: UIDensity): void;
  (e: 'update:largeClockEnabled', value: boolean): void;
  (e: 'update:largeClockScale', value: number): void;
  (e: 'confirm'): void;
  (e: 'close'): void;
  (e: 'devReminderTest', preset: DevReminderPreset): void;
  (e: 'devReminderHide'): void;
}>();

const settingsBodyStyle = { '--ui-scale': '1', '--density-scale': '1' } as const;

const scaleModel = computed({
  get: () => props.scale,
  set: (value: number) => emit('update:scale', value)
});

const densityModel = computed({
  get: () => props.density,
  set: (value: UIDensity) => emit('update:density', value)
});

const largeClockEnabledModel = computed({
  get: () => props.largeClockEnabled,
  set: (value: boolean) => emit('update:largeClockEnabled', value)
});

const largeClockScaleModel = computed({
  get: () => props.largeClockScale,
  set: (value: number) => emit('update:largeClockScale', value)
});

const handleVisibleChange = (value: boolean) => {
  emit('update:visible', value);
};

const handleClose = () => {
  emit('close');
};

const triggerDevReminderTest = (preset: DevReminderPreset) => {
  emit('devReminderTest', preset);
};

const triggerDevReminderHide = () => {
  emit('devReminderHide');
};
</script>

<style scoped>
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

.slider-row {
  --slider-input-width: calc(var(--ui-scale, 1) * 120px);
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: calc(var(--ui-scale, 1) * 12px);
}

.slider-row :deep(.t-slider) {
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
}

.slider-row :deep(.t-slider__main) {
  flex: 1 1 auto;
  width: auto;
  min-width: 0;
}

.slider-row :deep(.t-slider__input) {
  flex: 0 0 var(--slider-input-width);
  width: var(--slider-input-width);
  max-width: calc(var(--ui-scale, 1) * 140px);
  margin-left: calc(var(--ui-scale, 1) * 8px);
}

.slider-row :deep(.t-input-number) {
  width: 100%;
}

.switch-label {
  font-size: calc(var(--ui-scale, 1) * 13px);
  color: var(--td-text-color-secondary, rgba(255, 255, 255, 0.7));
}

.switch-row {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 10px);
  align-self: flex-start;
}

.switch-row :deep(.t-switch) {
  flex: none;
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

.settings-footer {
  display: flex;
  justify-content: flex-end;
}
</style>
