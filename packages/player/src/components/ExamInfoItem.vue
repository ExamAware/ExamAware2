<template>
  <div class="exam-table-row" :class="{ 'is-current': isCurrent }">
    <div class="cell cell-period">{{ period }}</div>
    <div class="cell cell-subject">{{ subject }}</div>
    <div class="cell cell-time">{{ startTime }}</div>
    <div class="cell cell-time">{{ endTime }}</div>
    <div class="cell cell-status">
      <span class="status-badge" :class="statusClass">{{ status }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ExamInfoItemProps {
  period: string;
  subject: string;
  startTime: string;
  endTime: string;
  status: '已结束' | '进行中' | '未开始';
  isCurrent?: boolean;
}

const props = withDefaults(defineProps<ExamInfoItemProps>(), {
  isCurrent: false
});

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
.exam-table-row {
  display: grid;
  grid-template-columns: 0.6fr 1.6fr 1fr 1fr 0.8fr;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.45rem) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.exam-table-row:last-child {
  border-bottom: none;
}

.cell {
  color: rgba(255, 255, 255, 0.9);
  font-size: calc(var(--ui-scale, 1) * 1.2rem);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cell-period {
  color: rgba(255, 255, 255, 0.6);
  font-size: calc(var(--ui-scale, 1) * 1.1rem);
}

.cell-subject {
  color: #ffffff;
  font-weight: 600;
}

.cell-time {
  color: rgba(255, 255, 255, 0.75);
  font-family: 'TCloudNumber', 'MiSans', monospace;
}

.cell-status {
  display: flex;
  justify-content: flex-end;
}

.status-badge {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.2rem)
    calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.6rem);
  border-radius: calc(var(--ui-scale, 1) * 4px);
  font-size: calc(var(--ui-scale, 1) * 1rem);
  font-weight: 600;
  white-space: nowrap;
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

.exam-table-row.is-current {
  background: rgba(255, 255, 255, 0.06);
  border-radius: calc(var(--ui-scale, 1) * 6px);
  margin: 0 calc(var(--ui-scale, 1) * var(--density-scale, 1) * -0.4rem);
  padding-left: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
  padding-right: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 0.4rem);
}

.exam-table-row.is-current .cell-subject {
  color: #4dabf7;
}
</style>
