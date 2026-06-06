<template>
  <div class="info-item">
    <div class="info-label">{{ label }}</div>
    <div class="info-value">{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
export interface InfoItemProps {
  label: string;
  value: string;
}

defineProps<InfoItemProps>();
</script>

<style scoped>
.info-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 1em);
}

.info-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  line-height: normal;
}

.info-value {
  color: #fff;
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  line-height: normal;
}
</style>
