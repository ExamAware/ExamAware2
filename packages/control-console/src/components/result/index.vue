<template>
  <div class="result-container">
    <img class="result-bg-img" :src="BrowserIncompatibleIcon" alt="" />
    <div class="result-title">{{ title }}</div>
    <div class="result-tip">{{ tip }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import BrowserIncompatibleIcon from '@/assets/result-browser-incompatible.svg';

defineProps<{
  title: string;
  tip: string;
}>();
</script>

<style scoped lang="less">
.result-container {
  min-height: 400px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.result-bg-img {
  width: 200px;
  color: var(--td-brand-color);
}

.result-title {
  margin-top: var(--td-comp-margin-l);
  color: var(--td-text-color-primary);
  font: var(--td-font-title-large);
}

.result-tip {
  margin: var(--td-comp-margin-s) 0 var(--td-comp-margin-xxxl);
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}
</style>
