<template>
  <BaseCard :custom-class="customCardClass">
    <div class="clock-content" :class="{ 'large-mode': isLargeClock }">
      <!-- 左侧：北京时间 -->
      <div class="time-side time-left">
        <div class="side-label">北京时间</div>
        <div
          class="time-display"
          :class="{ 'time-display-large': isLargeClock }"
          :style="timeDisplayStyle"
        >
          {{ ctx.formattedCurrentTime.value }}
        </div>
      </div>

      <!-- 中间：提示文字 -->
      <div class="time-hint">一切考试时间以现场为准，仅供参考</div>

      <!-- 右侧：考试倒计时 -->
      <div class="time-side time-right">
        <div v-if="countdownShowValue" class="side-label" :class="countdownLabelClass">
          {{ countdownLabel }}
        </div>
        <div
          v-if="countdownShowValue"
          class="countdown-value"
          :class="{ 'countdown-value-large': isLargeClock }"
          :style="timeDisplayStyle"
        >
          {{ countdownValue }}
        </div>
        <div
          v-else
          class="countdown-text"
          :class="[{ 'countdown-text-large': isLargeClock }, countdownLabelClass]"
          :style="timeDisplayStyle"
        >
          {{ countdownText }}
        </div>
      </div>
    </div>
  </BaseCard>

  <slot />
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import BaseCard from '../BaseCard.vue';
import { parseDateTime } from '@dsz-examaware/core';

export interface ExamPlayerCtx {
  formattedCurrentTime: any;
  timeSyncStatus?: any;
  largeClockEnabled?: any;
  largeClockScale?: any;
  currentExam?: any;
  examStatus?: any;
  remainingTime?: any;
  sortedExamInfos?: any;
  preCountdownMinutes?: any;
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;

const isLargeClock = computed(() => Boolean(ctx.largeClockEnabled?.value));
const customCardClass = computed(() =>
  isLargeClock.value ? 'clock-card clock-card-large' : 'clock-card'
);
const timeDisplayStyle = computed(() => ({
  '--clock-scale': ctx.largeClockScale?.value ?? 1
}));

const PRE_COUNTDOWN_MS = computed(() => {
  const minutes = Number(ctx.preCountdownMinutes?.value ?? 15);
  return (Number.isFinite(minutes) && minutes > 0 ? minutes : 15) * 60 * 1000;
});

// 记录当前考试结束的时间戳，用于实现“结束后1分钟仍显示已结束，再检查下一场”
const EXAM_END_GRACE_MS = 60 * 1000; // 1 分钟
const examEndedAtRef = ref<number | null>(null);
let lastExamId: string | null = null;

watch(
  () => [ctx.currentExam?.value, ctx.examStatus?.value?.status] as const,
  ([exam, status]) => {
    const examId = exam ? String(exam.id ?? exam.name ?? '') : '';
    if (status === 'completed') {
      // 只在第一次进入 completed 时记录时间
      if (examId && examId !== lastExamId) {
        lastExamId = examId;
        examEndedAtRef.value = Date.now();
      } else if (examId && examId === lastExamId && examEndedAtRef.value === null) {
        examEndedAtRef.value = Date.now();
      }
    } else if (status === 'inProgress' || status === 'pending') {
      // 切换了考试或重新开始，重置
      if (examId && examId !== lastExamId) {
        lastExamId = examId;
      }
      examEndedAtRef.value = null;
    }
  },
  { immediate: true }
);

// 判断是否所有考试都已结束
const allExamsEnded = computed(() => {
  const list = ctx.sortedExamInfos?.value;
  if (!list || !Array.isArray(list) || list.length === 0) return false;
  const now = Date.now();
  return list.every((exam: any) => {
    try {
      return parseDateTime(exam.end).getTime() <= now;
    } catch {
      return false;
    }
  });
});

// 是否存在下一场未结束的考试（在当前考试结束后判断）
const hasNextExam = computed(() => {
  const list = ctx.sortedExamInfos?.value;
  if (!list || !Array.isArray(list) || list.length === 0) return false;
  const now = Date.now();
  return list.some((exam: any) => {
    try {
      return parseDateTime(exam.end).getTime() > now;
    } catch {
      return false;
    }
  });
});

// 当前考试结束后是否仍在1分钟宽限期内
const inExamEndGrace = computed(() => {
  if (ctx.examStatus?.value?.status !== 'completed') return false;
  if (examEndedAtRef.value === null) return false;
  return Date.now() - examEndedAtRef.value < EXAM_END_GRACE_MS;
});

// 倒计时显示状态
const countdownState = computed(() => {
  const status = ctx.examStatus?.value?.status;
  const timeRemaining = ctx.examStatus?.value?.timeRemaining;

  // 考试进行中：显示倒计时
  if (status === 'inProgress') {
    return {
      label: '考试倒计时',
      showValue: true,
      value: ctx.remainingTime?.value || '00:00',
      text: '',
      labelClass: ''
    };
  }

  // 考试已结束
  if (status === 'completed') {
    // 1分钟宽限期内：红色「考试已结束」
    if (inExamEndGrace.value) {
      return {
        label: '考试已结束',
        showValue: false,
        value: '',
        text: '考试已结束',
        labelClass: 'text-danger'
      };
    }
    // 宽限期过后：检查下一场
    if (hasNextExam.value) {
      return {
        label: '考试未开始',
        showValue: false,
        value: '',
        text: '考试未开始',
        labelClass: 'text-warning'
      };
    }
    // 没有下一场
    return {
      label: '考试已全部结束',
      showValue: false,
      value: '',
      text: '考试已结束',
      labelClass: 'text-danger'
    };
  }

  // 考试未开始
  if (status === 'pending') {
    // 考前 15 分钟内才显示倒计时
    if (typeof timeRemaining === 'number' && timeRemaining <= PRE_COUNTDOWN_MS.value) {
      return {
        label: '距离开考',
        showValue: true,
        value: ctx.remainingTime?.value || '00:00',
        text: '',
        labelClass: ''
      };
    }
    // 还没到 15 分钟，显示黄色「考试未开始」
    return {
      label: '考试未开始',
      showValue: false,
      value: '',
      text: '考试未开始',
      labelClass: 'text-warning'
    };
  }

  // 默认
  if (allExamsEnded.value) {
    return {
      label: '考试已全部结束',
      showValue: false,
      value: '',
      text: '考试已结束',
      labelClass: 'text-danger'
    };
  }
  return {
    label: '考试未开始',
    showValue: false,
    value: '',
    text: '考试未开始',
    labelClass: 'text-warning'
  };
});

const countdownLabel = computed(() => countdownState.value.label);
const countdownValue = computed(() => countdownState.value.value);
const countdownText = computed(() => countdownState.value.text);
const countdownShowValue = computed(() => countdownState.value.showValue);
const countdownLabelClass = computed(() => countdownState.value.labelClass);
</script>

<style scoped>
.clock-card :deep(.card-content) {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.75rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.25rem);
}

.clock-content {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  padding: 0;
  width: 100%;
  position: relative;
}

.clock-content.large-mode {
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.5rem);
}

.time-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.25rem);
  min-width: 0;
  flex: 1;
  padding-top: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.15rem);
  padding-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.2rem);
}

.time-left {
  align-items: center;
}

.time-right {
  align-items: center;
}

.side-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.35rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 1.2;
  white-space: nowrap;
  text-align: center;
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.15rem);
}

.time-hint {
  color: rgba(255, 255, 255, 0.45);
  font-size: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.15rem);
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
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
  text-align: center;
}

.clock-card-large .time-display,
.time-display-large {
  font-size: calc(
    var(--ui-scale, 1) * var(--clock-scale, var(--large-clock-scale, 1)) * clamp(5rem, 12vw, 10rem)
  );
}

.countdown-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * clamp(3rem, 8vw, 6rem));
  font-weight: 600;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.1rem) calc(var(--ui-scale, 1) * 0.8rem)
    rgba(255, 255, 255, 0.25);
  line-height: 1;
  white-space: nowrap;
  text-align: center;
}

.countdown-value-large {
  font-size: calc(
    var(--ui-scale, 1) * var(--clock-scale, var(--large-clock-scale, 1)) * clamp(5rem, 12vw, 10rem)
  );
}

.countdown-text {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * clamp(2rem, 5vw, 4rem));
  font-weight: 700;
  font-family: 'MiSans', sans-serif;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.05em;
}

.countdown-text-large {
  font-size: calc(
    var(--ui-scale, 1) * var(--clock-scale, var(--large-clock-scale, 1)) * clamp(3.5rem, 9vw, 7rem)
  );
}

.text-warning {
  color: #f1c40f !important;
}

.text-danger {
  color: #ff3b30 !important;
}
</style>
