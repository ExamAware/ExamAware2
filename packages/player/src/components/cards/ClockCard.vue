<template>
  <BaseCard :custom-class="customCardClass">
    <div class="clock-content" :class="{ 'large-mode': isLargeClock }">
      <div class="time-left">
        <div class="time-label">北京时间</div>
        <div
          class="time-display"
          :class="{ 'time-display-large': isLargeClock }"
          :style="timeDisplayStyle"
        >
          {{ ctx.formattedCurrentTime.value }}
        </div>
        <div class="time-hint">一切考试时间以现场为准，仅供参考</div>
      </div>
      <div v-if="!isLargeClock" class="countdown-right">
        <div class="countdown-label">{{ countdownLabel }}</div>
        <div class="countdown-value">{{ countdownValue }}</div>
      </div>
    </div>
  </BaseCard>

  <slot />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import BaseCard from '../BaseCard.vue';

export interface ExamPlayerCtx {
  formattedCurrentTime: any;
  timeSyncStatus?: any;
  largeClockEnabled?: any;
  largeClockScale?: any;
  currentExam?: any;
  examStatus?: any;
  remainingTime?: any;
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;

const isLargeClock = computed(() => Boolean(ctx.largeClockEnabled?.value));
const customCardClass = computed(() =>
  isLargeClock.value ? 'clock-card clock-card-large' : 'clock-card'
);
const timeDisplayStyle = computed(() => ({
  '--clock-scale': ctx.largeClockScale?.value ?? 1
}));

const PRE_COUNTDOWN_MS = 15 * 60 * 1000;

const countdownState = computed(() => {
  const status = ctx.examStatus?.value?.status;
  const timeRemaining = ctx.examStatus?.value?.timeRemaining;

  if (status === 'inProgress') {
    return {
      label: '考试倒计时',
      value: ctx.remainingTime?.value || '00:00'
    };
  }

  if (status === 'pending') {
    if (typeof timeRemaining === 'number' && timeRemaining <= PRE_COUNTDOWN_MS) {
      return {
        label: '考前倒计时',
        value: ctx.remainingTime?.value || '00:00'
      };
    }
    return {
      label: '考试未开始',
      value: '--:--'
    };
  }

  if (status === 'completed') {
    return {
      label: '考试已结束',
      value: '00:00'
    };
  }

  return {
    label: '考试未开始',
    value: '--:--'
  };
});

const countdownLabel = computed(() => countdownState.value.label);
const countdownValue = computed(() => countdownState.value.value);
</script>

<style scoped>
.clock-card :deep(.card-content) {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.75rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.25rem);
}

.clock-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  padding: 0;
}

.clock-content.large-mode {
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.5rem);
  justify-content: center;
}

.time-left,
.countdown-right {
  display: flex;
  flex-direction: column;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.25rem);
  min-width: 0;
}

.time-left {
  align-items: flex-start;
}

.countdown-right {
  align-items: flex-end;
}

.time-label,
.countdown-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.1rem);
  font-weight: 500;
  letter-spacing: 0.05em;
  line-height: 1.2;
  white-space: nowrap;
}

.time-hint {
  color: rgba(255, 255, 255, 0.45);
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.85rem);
  font-weight: 400;
  line-height: 1.2;
  text-align: left;
  white-space: nowrap;
  margin-top: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.15rem);
}

.time-display {
  font-size: calc(var(--ui-scale, 1) * clamp(3rem, 8vw, 6rem));
  line-height: 1;
  color: #fff;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.167rem) calc(var(--ui-scale, 1) * 1.458rem)
    rgba(255, 255, 255, 0.3);
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-style: normal;
  font-weight: 600;
}

.clock-card-large .time-display,
.time-display-large {
  font-size: calc(
    var(--ui-scale, 1) * var(--clock-scale, var(--large-clock-scale, 1)) * clamp(5rem, 12vw, 10rem)
  );
}

.countdown-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * clamp(2rem, 5vw, 3.5rem));
  font-weight: 600;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.1rem) calc(var(--ui-scale, 1) * 0.8rem)
    rgba(255, 255, 255, 0.25);
  line-height: 1;
  white-space: nowrap;
}
</style>
