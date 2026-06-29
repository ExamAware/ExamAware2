<template>
  <BaseCard custom-class="current-exam-info-card">
    <!-- 按日期分多列展示 -->
    <div v-if="groupedExamInfos.length > 0" class="days-grid">
      <div v-for="day in groupedExamInfos" :key="day.date" class="day-column">
        <div class="day-title">{{ day.date }}</div>
        <div class="day-table-header">
          <div class="day-header-cell" style="flex: 0.6">时段</div>
          <div class="day-header-cell" style="flex: 1.6">科目</div>
          <div class="day-header-cell" style="flex: 1">开始</div>
          <div class="day-header-cell" style="flex: 1">结束</div>
          <div class="day-header-cell" style="flex: 0.8; text-align: right">状态</div>
        </div>
        <div class="day-exam-list">
          <ExamInfoItem
            v-for="exam in day.exams"
            :key="exam.name"
            :period="exam.period"
            :subject="exam.name"
            :start-time="exam.startTime"
            :end-time="exam.endTime"
            :status="exam.statusText"
            :is-current="exam.index === currentExamIndex"
          />
        </div>
      </div>
    </div>

    <div v-else class="empty-state">
      <span class="empty-text">暂无考试安排</span>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from './BaseCard.vue';
import ExamInfoItem from './ExamInfoItem.vue';
import type { FormattedExamInfo } from '../utils/dataProcessor';

export interface CurrentExamInfoProps {
  examInfos?: FormattedExamInfo[];
  currentExamIndex?: number;
}

const props = withDefaults(defineProps<CurrentExamInfoProps>(), {
  examInfos: () => [],
  currentExamIndex: 0
});

const groupedExamInfos = computed(() => {
  const groups = new Map<string, FormattedExamInfo[]>();
  props.examInfos.forEach((exam) => {
    const list = groups.get(exam.date) || [];
    list.push(exam);
    groups.set(exam.date, list);
  });
  return Array.from(groups.entries()).map(([date, exams]) => ({ date, exams }));
});
</script>

<style scoped>
.current-exam-info-card :deep(.card-content) {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1.2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.8rem);
}

.days-grid {
  display: flex;
  flex-direction: row;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  overflow-x: auto;
}

.day-column {
  flex: 1 1 0;
  min-width: calc(var(--ui-scale, 1) * 14rem);
  display: flex;
  flex-direction: column;
}

.day-title {
  color: rgba(255, 255, 255, 0.85);
  font-size: calc(var(--ui-scale, 1) * 1.25rem);
  font-weight: 600;
  text-align: center;
  padding-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-family: 'TCloudNumber', 'MiSans', monospace;
}

.day-table-header {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.3rem) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.3rem);
  flex-shrink: 0;
}

.day-header-cell {
  color: rgba(255, 255, 255, 0.55);
  font-size: calc(var(--ui-scale, 1) * 1.05rem);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.day-exam-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 18rem);
}

.day-exam-list::-webkit-scrollbar {
  width: calc(var(--ui-scale, 1) * 0.25rem);
}

.day-exam-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: calc(var(--ui-scale, 1) * 4px);
}

.day-exam-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: calc(var(--ui-scale, 1) * 4px);
}

.day-exam-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem) 0;
}

.empty-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: calc(var(--ui-scale, 1) * 1.2rem);
  font-weight: 400;
}
</style>
