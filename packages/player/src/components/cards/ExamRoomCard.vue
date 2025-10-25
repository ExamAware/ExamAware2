<template>
  <div class="exam-room-container">
    <ExamRoomNumber
      :room-number="ctx.effectiveRoomNumber.value"
      @click="ctx.handleRoomNumberClick()"
    />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import ExamRoomNumber from '../ExamRoomNumber.vue'

export interface ExamPlayerCtx {
  effectiveRoomNumber: any
  handleRoomNumberClick: () => void
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!
</script>

<style scoped>
.exam-room-container {
  margin-bottom: calc(var(--ui-scale, 1) * 2rem);
  display: flex;
  justify-content: flex-end;
}
</style>
