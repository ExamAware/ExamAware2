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
import { computed } from 'vue'

export interface ExamInfoItemProps {
  date: string
  subject: string
  time: string
  status: '已结束' | '进行中' | '未开始'
}

const props = defineProps<ExamInfoItemProps>()

const statusClass = computed(() => {
  switch (props.status) {
    case '已结束':
      return 'status-finished'
    case '进行中':
      return 'status-ongoing'
  case '未开始':
      return 'status-pending'
    default:
      return ''
  }
})
</script>

<style scoped>
.exam-info-item {
  display: flex;
  align-items: center;
  padding: calc(var(--ui-scale, 1) * 0.25rem) 0;
  gap: calc(var(--ui-scale, 1) * 1rem);
}

.exam-date {
  color: rgba(255, 255, 255, 0.8);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 80px);
}

.exam-details {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 1rem);
  flex: 1;
}

.exam-subject {
  color: #ffffff;
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 50px);
}

.exam-time {
  color: #ffffff;
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  min-width: calc(var(--ui-scale, 1) * 120px);
}

.exam-status {
  padding: calc(var(--ui-scale, 1) * 0.2rem) calc(var(--ui-scale, 1) * 0.8rem);
  border-radius: calc(var(--ui-scale, 1) * 5px);
  font-family: 'MiSans', sans-serif;
  font-size: calc(var(--ui-scale, 1) * 0.875rem);
  font-weight: 500;
  white-space: nowrap;
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
