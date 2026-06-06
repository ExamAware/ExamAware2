<template>
  <CurrentExamInfo :exam-infos="ctx.displayFormattedExamInfos.value" />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import CurrentExamInfo from '../CurrentExamInfo.vue';

export interface ExamPlayerCtx {
  displayFormattedExamInfos: any;
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;
</script>
