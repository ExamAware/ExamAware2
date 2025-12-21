<template>
  <InfoCardWithIcon
    title="当前考试信息"
    :show-icon="false"
    :custom-class="['exam-info-card', ctx.examInfoLargeFont?.value ? 'exam-info-large' : '']"
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
import { inject } from 'vue';
import InfoCardWithIcon from '../InfoCardWithIcon.vue';
import InfoItem from '../InfoItem.vue';

export interface ExamPlayerCtx {
  currentExam: any;
  currentExamName: any;
  currentExamTimeRange: any;
  displayedRemainingTime: any;
  examInfoLargeFont?: { value: boolean };
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;
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
</style>
