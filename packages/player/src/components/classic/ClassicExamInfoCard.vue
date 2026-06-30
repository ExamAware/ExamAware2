<template>
  <InfoCardWithIcon title="当前考试信息" :show-icon="false" :custom-class="customClass">
    <InfoItem label="当前科目" :value="ctx.currentExamName.value" />
    <InfoItem label="考试时间" :value="ctx.currentExamTimeRange.value" />
    <InfoItem v-if="preCountdownText" label="距离开考" :value="preCountdownText" />
    <InfoItem v-if="inProgressCountdown" label="剩余时间" :value="inProgressCountdown" />
    <div v-if="statusRow" class="info-row">
      <span class="info-label">考试状态:</span>
      <span class="info-value" :class="statusColorClass">{{ statusText }}</span>
    </div>

    <!-- 页数统计（可选，由 props.showMaterial 控制） -->
    <template v-if="showMaterial">
      <div class="material-row">
        <span class="material-label">试卷:</span>
        <span class="material-text">共</span>
        <div class="number-control" :class="{ 'controls-hidden': !showControls.paperPages }">
          <button v-show="showControls.paperPages" class="num-btn" @click="decrease('paperPages')">
            -
          </button>
          <input
            class="num-input"
            type="number"
            min="0"
            :value="paperPages"
            @change="setValue('paperPages', $event)"
            @focus="handleInputFocus('paperPages')"
          />
          <button v-show="showControls.paperPages" class="num-btn" @click="increase('paperPages')">
            +
          </button>
        </div>
        <span class="material-text">页</span>
        <span class="material-text">共</span>
        <div class="number-control" :class="{ 'controls-hidden': !showControls.paperSheets }">
          <button
            v-show="showControls.paperSheets"
            class="num-btn"
            @click="decrease('paperSheets')"
          >
            -
          </button>
          <input
            class="num-input"
            type="number"
            min="0"
            :value="paperSheets"
            @change="setValue('paperSheets', $event)"
            @focus="handleInputFocus('paperSheets')"
          />
          <button
            v-show="showControls.paperSheets"
            class="num-btn"
            @click="increase('paperSheets')"
          >
            +
          </button>
        </div>
        <span class="material-text">张</span>
      </div>

      <div class="material-row">
        <span class="material-label">答题卡:</span>
        <span class="material-text">共</span>
        <div class="number-control" :class="{ 'controls-hidden': !showControls.answerPages }">
          <button
            v-show="showControls.answerPages"
            class="num-btn"
            @click="decrease('answerPages')"
          >
            -
          </button>
          <input
            class="num-input"
            type="number"
            min="0"
            :value="answerPages"
            @change="setValue('answerPages', $event)"
            @focus="handleInputFocus('answerPages')"
          />
          <button
            v-show="showControls.answerPages"
            class="num-btn"
            @click="increase('answerPages')"
          >
            +
          </button>
        </div>
        <span class="material-text">页</span>
        <span class="material-text">共</span>
        <div class="number-control" :class="{ 'controls-hidden': !showControls.answerSheets }">
          <button
            v-show="showControls.answerSheets"
            class="num-btn"
            @click="decrease('answerSheets')"
          >
            -
          </button>
          <input
            class="num-input"
            type="number"
            min="0"
            :value="answerSheets"
            @change="setValue('answerSheets', $event)"
            @focus="handleInputFocus('answerSheets')"
          />
          <button
            v-show="showControls.answerSheets"
            class="num-btn"
            @click="increase('answerSheets')"
          >
            +
          </button>
        </div>
        <span class="material-text">张</span>
      </div>
    </template>
  </InfoCardWithIcon>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue';
import InfoCardWithIcon from '../InfoCardWithIcon.vue';
import InfoItem from '../InfoItem.vue';

export interface ExamPlayerCtx {
  currentExam: any;
  currentExamName: any;
  currentExamTimeRange: any;
  examStatus?: any;
  remainingTime?: any;
  preCountdownMinutes?: any;
  examInfoLargeFont?: { value: boolean };
  materialFontScale?: { value: number };
  classicShowMaterial?: { value: boolean };
}

const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;

const showMaterial = computed(() => Boolean(ctx.classicShowMaterial?.value));

const customClass = computed(() =>
  ['exam-info-card', ctx.examInfoLargeFont?.value ? 'exam-info-large' : '']
    .filter(Boolean)
    .join(' ')
);

// 考试状态
const statusText = computed(() => {
  const status = ctx.examStatus?.value?.status;
  switch (status) {
    case 'pending':
      return '未开始';
    case 'inProgress':
      return '进行中';
    case 'completed':
      return '已结束';
    default:
      return '暂无安排';
  }
});

const statusColorClass = computed(() => {
  const status = ctx.examStatus?.value?.status;
  switch (status) {
    case 'pending':
      return 'status-pending';
    case 'inProgress':
      return 'status-ongoing';
    case 'completed':
      return 'status-finished';
    default:
      return '';
  }
});

const statusRow = computed(() => {
  const status = ctx.examStatus?.value?.status;
  return status === 'pending' || status === 'inProgress' || status === 'completed';
});

// 考前倒计时
const preCountdownText = computed(() => {
  const status = ctx.examStatus?.value?.status;
  const timeRemaining = ctx.examStatus?.value?.timeRemaining;
  const preMs = (Number(ctx.preCountdownMinutes?.value ?? 15) || 15) * 60 * 1000;
  if (status === 'pending' && typeof timeRemaining === 'number' && timeRemaining <= preMs) {
    return ctx.remainingTime?.value || '00:00';
  }
  return '';
});

// 考试进行中倒计时
const inProgressCountdown = computed(() => {
  const status = ctx.examStatus?.value?.status;
  if (status === 'inProgress') {
    return ctx.remainingTime?.value || '00:00';
  }
  return '';
});

// ====== 页数统计逻辑（从 ExamInfoCard 复制） ======
const STORAGE_KEY = 'examaware:materialCounts';

const loadCounts = () => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveCounts = (counts: Record<string, number>) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
  } catch {}
};

const stored = loadCounts();
const paperPages = ref(stored?.paperPages ?? 0);
const paperSheets = ref(stored?.paperSheets ?? 0);
const answerPages = ref(stored?.answerPages ?? 0);
const answerSheets = ref(stored?.answerSheets ?? 0);

watch(
  [paperPages, paperSheets, answerPages, answerSheets],
  ([pp, ps, ap, as]) => {
    saveCounts({ paperPages: pp, paperSheets: ps, answerPages: ap, answerSheets: as });
  },
  { deep: true }
);

// 考试结束后自动重置
const lastExamKey = ref<string>('');
watch(
  () => ctx.examStatus?.value?.status,
  (status, prevStatus) => {
    const examKey = ctx.currentExam?.value?.id || ctx.currentExam?.value?.name || '';
    if (
      status === 'completed' &&
      prevStatus === 'inProgress' &&
      examKey &&
      lastExamKey.value !== examKey
    ) {
      lastExamKey.value = examKey;
      paperPages.value = 0;
      paperSheets.value = 0;
      answerPages.value = 0;
      answerSheets.value = 0;
      saveCounts({ paperPages: 0, paperSheets: 0, answerPages: 0, answerSheets: 0 });
      showControls.value = {
        paperPages: true,
        paperSheets: true,
        answerPages: true,
        answerSheets: true
      };
    }
  }
);

const showControls = ref({
  paperPages: true,
  paperSheets: true,
  answerPages: true,
  answerSheets: true
});

const hideTimers: Record<string, ReturnType<typeof setTimeout> | null> = {
  paperPages: null,
  paperSheets: null,
  answerPages: null,
  answerSheets: null
};

const clearHideTimer = (field: string) => {
  if (hideTimers[field]) {
    clearTimeout(hideTimers[field]!);
    hideTimers[field] = null;
  }
};

const scheduleHide = (field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets') => {
  clearHideTimer(field);
  hideTimers[field] = setTimeout(() => {
    const val =
      field === 'paperPages'
        ? paperPages.value
        : field === 'paperSheets'
          ? paperSheets.value
          : field === 'answerPages'
            ? answerPages.value
            : answerSheets.value;
    if (val > 0) showControls.value[field] = false;
  }, 10000);
};

const showControlsAndScheduleHide = (
  field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets'
) => {
  showControls.value[field] = true;
  scheduleHide(field);
};

watch(
  () => [paperPages.value, paperSheets.value, answerPages.value, answerSheets.value] as const,
  ([pp, ps, ap, as]) => {
    if (pp > 0 && showControls.value.paperPages) scheduleHide('paperPages');
    if (ps > 0 && showControls.value.paperSheets) scheduleHide('paperSheets');
    if (ap > 0 && showControls.value.answerPages) scheduleHide('answerPages');
    if (as > 0 && showControls.value.answerSheets) scheduleHide('answerSheets');
  },
  { immediate: true }
);

const increase = (field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets') => {
  switch (field) {
    case 'paperPages':
      paperPages.value++;
      break;
    case 'paperSheets':
      paperSheets.value++;
      break;
    case 'answerPages':
      answerPages.value++;
      break;
    case 'answerSheets':
      answerSheets.value++;
      break;
  }
  showControlsAndScheduleHide(field);
};

const decrease = (field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets') => {
  switch (field) {
    case 'paperPages':
      if (paperPages.value > 0) paperPages.value--;
      break;
    case 'paperSheets':
      if (paperSheets.value > 0) paperSheets.value--;
      break;
    case 'answerPages':
      if (answerPages.value > 0) answerPages.value--;
      break;
    case 'answerSheets':
      if (answerSheets.value > 0) answerSheets.value--;
      break;
  }
  showControlsAndScheduleHide(field);
};

const setValue = (
  field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets',
  event: Event
) => {
  const target = event.target as HTMLInputElement;
  const val = Math.max(0, Math.floor(Number(target.value)) || 0);
  switch (field) {
    case 'paperPages':
      paperPages.value = val;
      break;
    case 'paperSheets':
      paperSheets.value = val;
      break;
    case 'answerPages':
      answerPages.value = val;
      break;
    case 'answerSheets':
      answerSheets.value = val;
      break;
  }
  showControlsAndScheduleHide(field);
};

const handleInputFocus = (field: 'paperPages' | 'paperSheets' | 'answerPages' | 'answerSheets') => {
  showControlsAndScheduleHide(field);
};
</script>

<style scoped>
.exam-info-card.exam-info-large :deep(.card-body) {
  grid-template-columns: 1fr;
  gap: calc(var(--ui-scale, 1) * 1.1rem) calc(var(--ui-scale, 1) * 1rem);
}
.exam-info-card.exam-info-large :deep(.card-title) {
  font-size: calc(var(--ui-scale, 1) * 1.6rem);
}
.exam-info-card.exam-info-large :deep(.info-label),
.exam-info-card.exam-info-large :deep(.info-value) {
  font-size: calc(var(--ui-scale, 1) * 1.8rem);
  line-height: 1.15;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 0;
}

.info-label {
  color: rgba(255, 255, 255, 0.75);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 6rem);
}

.info-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 600;
}

.status-pending {
  color: #ff9800;
}
.status-ongoing {
  color: #45a452;
}
.status-finished {
  color: #888888;
}

/* 材料信息行 */
.material-row {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 0.5rem);
  flex-wrap: wrap;
}

.material-label {
  color: rgba(255, 255, 255, 0.75);
  font-size: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 5rem);
}

.material-text {
  color: rgba(255, 255, 255, 0.75);
  font-size: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 1.3rem);
}

.number-control {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 0.25rem);
  background: rgba(255, 255, 255, 0.08);
  border-radius: calc(var(--ui-scale, 1) * 6px);
  padding: calc(var(--ui-scale, 1) * 0.2rem) calc(var(--ui-scale, 1) * 0.4rem);
  transition:
    background 0.3s ease,
    padding 0.3s ease;
}

.number-control.controls-hidden {
  background: transparent;
  padding: calc(var(--ui-scale, 1) * 0.2rem) 0;
}

.num-btn {
  width: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 1.6rem);
  height: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 1.6rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: calc(var(--ui-scale, 1) * 4px);
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 1.1rem);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  line-height: 1;
  padding: 0;
}

.num-btn:hover {
  background: rgba(255, 255, 255, 0.22);
}
.num-btn:active {
  background: rgba(255, 255, 255, 0.08);
}

.num-input {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 2rem);
  font-weight: 700;
  min-width: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 2rem);
  text-align: center;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  background: transparent;
  border: none;
  outline: none;
  width: calc(var(--ui-scale, 1) * var(--material-font-scale, 1) * 3rem);
  padding: 0;
  -moz-appearance: textfield;
}

.num-input::-webkit-outer-spin-button,
.num-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
