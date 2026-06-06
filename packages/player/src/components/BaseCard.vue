<template>
  <div class="base-card" :class="customClass" :style="customStyle">
    <!-- 卡片内容 -->
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface BaseCardProps {
  /** 自定义CSS类 */
  customClass?: string;
  /** 自定义样式 */
  customStyle?: Record<string, string>;
}

withDefaults(defineProps<BaseCardProps>(), {
  customClass: '',
  customStyle: () => ({})
});
</script>

<style scoped>
.base-card {
  background: rgba(4, 14, 21, 0.8);
  border: 1px solid rgba(36, 47, 56, 0.6);
  border-radius: calc(var(--ui-scale, 1) * 20px);
  position: relative;
  overflow: hidden;
}

.card-content {
  padding: calc(var(--ui-scale, 1) * var(--density-scale, 1) * 2rem);
  position: relative;
  z-index: 1;
}
</style>
