<template>
  <BaseCard custom-class="current-exam-info-card">
    <!-- 表头 -->
    <div class="table-header">
      <div class="header-cell" style="flex: 1">日期</div>
      <div class="header-cell" style="flex: 2">科目</div>
      <div class="header-cell" style="flex: 1.2">开始时间</div>
      <div class="header-cell" style="flex: 1.2">结束时间</div>
      <div class="header-cell" style="flex: 1; text-align: right">考试状态</div>
    </div>

    <!-- 考试信息列表 -->
    <div class="exam-info-list" :class="{ 'is-scrollable': examInfos && examInfos.length > 5 }">
      <ExamInfoItem
        v-for="(exam, idx) in examInfos"
        :key="exam.name"
        :date="exam.date"
        :period="exam.period"
        :subject="exam.name"
        :start-time="exam.startTime"
        :end-time="exam.endTime"
        :status="exam.statusText"
        :is-current="idx === currentExamIndex"
      />
      <div v-if="!examInfos || examInfos.length === 0" class="empty-state">
        <span class="empty-text">暂无考试安排</span>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import ExamInfoItem from './ExamInfoItem.vue';

export interface FormattedExamInfo {
  index: number;
  name: string;
  date: string;
  period: string;
  startTime: string;
  endTime: string;
  status: string;
  statusText: '已结束' | '进行中' | '未开始';
  rawData: any;
}

export interface CurrentExamInfoProps {
  examInfos?: FormattedExamInfo[];
  currentExamIndex?: number;
}

const props = withDefaults(defineProps<CurrentExamInfoProps>(), {
  examInfos: () => [],
  currentExamIndex: 0
});
</script>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.5rem);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.5rem) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.5rem);
  flex-shrink: 0;
}

.header-cell {
  color: rgba(255, 255, 255, 0.55);
  font-size: calc(var(--ui-scale, 1) * 1.15rem);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exam-info-list {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 20rem);
}

.exam-info-list.is-scrollable {
  padding-right: calc(var(--ui-scale, 1) * 0.5rem);
}

/* 自定义滚动条 */
.exam-info-list::-webkit-scrollbar {
  width: calc(var(--ui-scale, 1) * 0.3rem);
}

.exam-info-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: calc(var(--ui-scale, 1) * 4px);
}

.exam-info-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: calc(var(--ui-scale, 1) * 4px);
}

.exam-info-list::-webkit-scrollbar-thumb:hover {
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
