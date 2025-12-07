<template>
  <div class="exam-info-item">
    <div class="exam-date">{{ date }}</div>
    <div class="exam-details">
      <div class="exam-subject">{{ subject }}</div>
      <div class="exam-time">{{ time }}</div>
      <div class="exam-status" :class="statusClass">{{ status }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ExamInfoItemProps {
  date: string;
  subject: string;
  time: string;
  status: '已结束' | '进行中' | '未开始';
}

const props = defineProps<ExamInfoItemProps>();

const statusClass = computed(() => {
  switch (props.status) {
    case '已结束':
      return 'status-finished';
    case '进行中':
      return 'status-ongoing';
    case '未开始':
      return 'status-pending';
    default:
      return '';
  }
});
</script>

<style scoped>
.exam-info-item {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr) max-content max-content;
  align-items: baseline;
  column-gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  row-gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.25rem);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.5rem) 0;
}

.exam-date {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.6rem);
  font-weight: 600;
  min-width: calc(var(--ui-scale, 1) * 88px);
  justify-self: start;
}

.exam-details {
  display: contents;
}

.exam-subject {
  color: #ffffff;
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.65rem);
  font-weight: 600;
  min-width: 0;
  line-height: 1.2;
}

.exam-time {
  color: rgba(255, 255, 255, 0.85);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.5rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 120px);
  line-height: 1.2;
}

.exam-status {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.35rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 1rem);
  border-radius: calc(var(--ui-scale, 1) * 6px);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1rem);
  font-weight: 600;
  white-space: nowrap;
  justify-self: end;
  line-height: 1.2;
}

.status-finished {
  background: rgba(192, 192, 192, 0.2);
  color: #c0c0c0;
}

.status-ongoing {
  background: rgba(69, 164, 82, 0.2);
  color: #45a452;
}

.status-pending {
  background: rgba(227, 115, 24, 0.2);
  color: #e37318;
}
</style>
