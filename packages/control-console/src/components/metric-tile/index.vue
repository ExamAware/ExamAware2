<template>
  <t-card :bordered="false">
    <t-statistic :title="label" :value="value">
      <template #prefix><t-icon :name="icon" /></template>
      <template v-if="hint" #extra>{{ hint }}</template>
    </t-statistic>
  </t-card>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    value: number;
    hint?: string;
    icon: string;
  }>(),
  { hint: '' }
);
</script>
