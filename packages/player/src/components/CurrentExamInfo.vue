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
    <div class="exam-info-list">
      <ExamInfoItem
        v-for="exam in examInfos"
        :key="exam.name"
        :date="exam.date"
        :subject="exam.name"
        :start-time="exam.startTime"
        :end-time="exam.endTime"
        :status="exam.statusText"
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
  startTime: string;
  endTime: string;
  status: string;
  statusText: '已结束' | '进行中' | '未开始';
  rawData: any;
}

export interface CurrentExamInfoProps {
  examInfos?: FormattedExamInfo[];
}

const props = withDefaults(defineProps<CurrentExamInfoProps>(), {
  examInfos: () => []
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
