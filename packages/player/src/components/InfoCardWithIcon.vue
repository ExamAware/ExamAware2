<template>
  <BaseCard :custom-class="customClass">
    <!-- 标题和图标区域 -->
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <button v-if="showIcon" class="card-icon" @click="$emit('iconClick')">
        <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </button>
    </div>

    <!-- 内容区域 -->
    <div class="card-body">
      <slot />
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'

export interface InfoCardWithIconProps {
  title: string
  showIcon?: boolean
  customClass?: string
}

withDefaults(defineProps<InfoCardWithIconProps>(), {
  showIcon: true,
  customClass: ''
})

defineEmits<{
  iconClick: []
}>()
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: calc(var(--ui-scale, 1) * 1.5rem);
}

.card-title {
  color: rgba(255, 255, 255, 0.6);
  font-size: calc(var(--ui-scale, 1) * 1.4rem);
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  line-height: 1;
}

.card-icon {
  color: rgba(255, 255, 255, 0.6);
  background: none;
  border: none;
  cursor: pointer;
  padding: calc(var(--ui-scale, 1) * 0.25rem);
  border-radius: calc(var(--ui-scale, 1) * 0.375rem);
  transition: color 0.2s ease;
}

.card-icon:hover {
  color: rgba(255, 255, 255, 0.8);
}

.card-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: calc(var(--ui-scale, 1) * 1rem) calc(var(--ui-scale, 1) * 2rem);
}

.icon-svg {
  width: calc(var(--ui-scale, 1) * 1.25rem);
  height: calc(var(--ui-scale, 1) * 1.25rem);
}
</style>
