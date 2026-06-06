<template>
  <InfoCardWithIcon title="当前考试信息" :show-icon="false" :custom-class="customClass">
    <InfoItem label="当前科目" :value="ctx.currentExamName.value" />
    <InfoItem label="考试时间" :value="ctx.currentExamTimeRange.value" />
    <div class="info-row">
      <span class="info-label">考试状态:</span>
      <span class="info-value" :class="statusColorClass">{{ examStatusText }}</span>
    </div>

    <!-- 试卷信息：共 X 页 共 Y 张 -->
    <div class="material-row">
      <span class="material-label">试卷:</span>
      <span class="material-text">共</span>
      <div class="number-control">
        <button class="num-btn" @click="decrease('paperPages')">-</button>
        <span class="num-value">{{ paperPages }}</span>
        <button class="num-btn" @click="increase('paperPages')">+</button>
      </div>
      <span class="material-text">页</span>
      <span class="material-text">共</span>
      <div class="number-control">
        <button class="num-btn" @click="decrease('paperSheets')">-</button>
        <span class="num-value">{{ paperSheets }}</span>
        <button class="num-btn" @click="increase('paperSheets')">+</button>
      </div>
      <span class="material-text">张</span>
    </div>

    <!-- 答题卡信息：共 X 页 共 Y 张 -->
    <div class="material-row">
      <span class="material-label">答题卡:</span>
      <span class="material-text">共</span>
      <div class="number-control">
        <button class="num-btn" @click="decrease('answerPages')">-</button>
        <span class="num-value">{{ answerPages }}</span>
        <button class="num-btn" @click="increase('answerPages')">+</button>
      </div>
      <span class="material-text">页</span>
      <span class="material-text">共</span>
      <div class="number-control">
        <button class="num-btn" @click="decrease('answerSheets')">-</button>
        <span class="num-value">{{ answerSheets }}</span>
        <button class="num-btn" @click="increase('answerSheets')">+</button>
      </div>
      <span class="material-text">张</span>
    </div>
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
  examInfoLargeFont?: { value: boolean };
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;

const customClass = computed(() =>
  ['exam-info-card', ctx.examInfoLargeFont?.value ? 'exam-info-large' : '']
    .filter(Boolean)
    .join(' ')
);

// 考试状态文本和颜色
const examStatusText = computed(() => {
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

// 本地存储键名
const STORAGE_KEY = 'examaware:materialCounts';

// 从 localStorage 加载
const loadCounts = () => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// 保存到 localStorage
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

// 监听变化并持久化
watch([paperPages, paperSheets, answerPages, answerSheets], ([pp, ps, ap, as]) => {
  saveCounts({ paperPages: pp, paperSheets: ps, answerPages: ap, answerSheets: as });
}, { deep: true });

// 考试结束后自动重置
const lastExamKey = ref<string>('');
watch(() => ctx.examStatus?.value?.status, (status, prevStatus) => {
  const examKey = ctx.currentExam?.value?.id || ctx.currentExam?.value?.name || '';
  if (status === 'completed' && prevStatus === 'inProgress' && examKey && lastExamKey.value !== examKey) {
    lastExamKey.value = examKey;
    paperPages.value = 0;
    paperSheets.value = 0;
    answerPages.value = 0;
    answerSheets.value = 0;
    saveCounts({ paperPages: 0, paperSheets: 0, answerPages: 0, answerSheets: 0 });
  }
});

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

/* 考试状态颜色 */
.info-row {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 0.5rem);
}

.info-label {
  color: rgba(255, 255, 255, 0.6);
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
  color: #e37318;
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
  color: rgba(255, 255, 255, 0.8);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 5rem);
}

.material-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * 1.3rem);
}

/* 数字加减控制器 */
.number-control {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 0.25rem);
  background: rgba(255, 255, 255, 0.08);
  border-radius: calc(var(--ui-scale, 1) * 6px);
  padding: calc(var(--ui-scale, 1) * 0.2rem) calc(var(--ui-scale, 1) * 0.4rem);
}

.num-btn {
  width: calc(var(--ui-scale, 1) * 1.6rem);
  height: calc(var(--ui-scale, 1) * 1.6rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  border-radius: calc(var(--ui-scale, 1) * 4px);
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * 1.1rem);
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

.num-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * 1.3rem);
  font-weight: 600;
  min-width: calc(var(--ui-scale, 1) * 1.8rem);
  text-align: center;
  font-family: 'TCloudNumber', 'MiSans', monospace;
}
</style>
