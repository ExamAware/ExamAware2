<template>
  <ClassicCurrentExamInfo :exam-infos="ctx.displayFormattedExamInfos.value" />
</template>

<script setup lang="ts">
import { inject } from 'vue';
import ClassicCurrentExamInfo from './ClassicCurrentExamInfo.vue';

export interface ExamPlayerCtx {
  displayFormattedExamInfos: any;
}

const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!;
</script>
