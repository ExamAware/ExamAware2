<template>
  <InfoCardWithIcon
    title="当前考试信息"
    @icon-click="$emit('editClick')"
    custom-class="exam-info-card"
  >
    <InfoItem label="当前科目" :value="ctx.currentExamName.value" />
    <InfoItem label="考试时间" :value="ctx.currentExamTimeRange.value" />
    <InfoItem label="剩余时间" :value="ctx.displayedRemainingTime.value" />

    <template v-if="ctx.currentExam.value?.materials?.length">
      <InfoItem
        v-for="material in ctx.currentExam.value.materials"
        :key="material.name"
        :label="material.name"
        :value="`${material.quantity}${material.unit}`"
      />
    </template>
  </InfoCardWithIcon>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import InfoCardWithIcon from '../InfoCardWithIcon.vue'
import InfoItem from '../InfoItem.vue'

export interface ExamPlayerCtx {
  currentExam: any
  currentExamName: any
  currentExamTimeRange: any
  displayedRemainingTime: any
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!
defineEmits<{ (e: 'editClick'): void }>()
</script>
