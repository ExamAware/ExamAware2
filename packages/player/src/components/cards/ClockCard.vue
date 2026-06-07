<template>
  <BaseCard :custom-class="customCardClass">
    <div class="clock-content" :class="{ 'large-mode': isLargeClock }">
      <div class="beijing-time-label">北京时间</div>
      <div
        class="time-display"
        :class="{ 'time-display-large': isLargeClock }"
        :style="timeDisplayStyle"
      >
        {{ ctx.formattedCurrentTime.value }}
      </div>
      <div class="countdown-display">
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

// 倒计时标签：考前倒计时 / 考试倒计时
const countdownLabel = computed(() => {
  const status = ctx.examStatus?.value?.status;
  if (status === 'pending') return '考前倒计时';
  if (status === 'inProgress') return '考试倒计时';
  return '';
});

// 倒计时值，根据状态显示不同前缀
const countdownValue = computed(() => {
  const time = ctx.remainingTime?.value || '00:00:00';
  const status = ctx.examStatus?.value?.status;
  if (status === 'pending') return `距离考试开始：${time}`;
  if (status === 'inProgress') return `考试倒计时：${time}`;
  return '';
});
</script>

<style scoped>
.clock-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--ui-scale, 1) * 0.75rem);
  padding: calc(var(--ui-scale, 1) * 1rem) 0;
}

.clock-content.large-mode {
  gap: calc(var(--ui-scale, 1) * 1rem);
}

.beijing-time-label {
  color: rgba(255, 255, 255, 0.85);
  font-size: calc(var(--ui-scale, 1) * 1.25rem);
  font-weight: 500;
  letter-spacing: 0.1em;
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

.countdown-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 0.5rem);
  margin-top: calc(var(--ui-scale, 1) * 0.5rem);
}

.countdown-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 400;
}

.countdown-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * 2.8rem);
  font-weight: 600;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.1rem) calc(var(--ui-scale, 1) * 0.8rem)
    rgba(255, 255, 255, 0.25);
}
</style>
