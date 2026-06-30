<template>
  <CurrentExamInfo
    :exam-infos="ctx.displayFormattedExamInfos.value"
    :current-exam-index="ctx.currentExamIndex?.value ?? 0"
  />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import CurrentExamInfo from '../CurrentExamInfo.vue';

export interface ExamPlayerCtx {
  displayFormattedExamInfos: any;
  currentExamIndex?: any;
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;
</script>
