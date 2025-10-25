<template>
  <BaseCard custom-class="current-exam-info-card">
    <!-- 标题 -->
    <div class="card-header">
      <h3 class="card-title">本次考试信息</h3>
    </div>

    <!-- 考试信息列表 -->
    <div class="exam-info-list">
      <ExamInfoItem
        v-for="exam in examInfos"
        :key="exam.name"
        :date="exam.date"
        :subject="exam.name"
        :time="exam.timeRange"
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
  timeRange: string;
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
.card-header {
  margin-bottom: calc(var(--ui-scale, 1) * 1.5rem);
}

.card-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  margin: 0;
  line-height: 1;
}

.exam-info-list {
  display: flex;
  flex-direction: column;
  gap: calc(var(--ui-scale, 1) * 0.5rem);
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(var(--ui-scale, 1) * 2rem) 0;
}

.empty-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: calc(var(--ui-scale, 1) * 1.2rem);
  font-weight: 400;
}
</style>
