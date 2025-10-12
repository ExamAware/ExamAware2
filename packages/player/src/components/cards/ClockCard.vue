<template>
  <BaseCard custom-class="clock-card">
    <div class="clock-content">
      <div class="time-display">{{ ctx.formattedCurrentTime.value }}</div>
      <div class="time-note">
        <div>{{ ctx.timeSyncStatus?.value || '电脑时间' }}仅供参考</div>
        <div>以考场铃声为准</div>
      </div>
    </div>
  </BaseCard>

  <slot />
</template>

<script setup lang="ts">
import { inject } from 'vue'
import BaseCard from '../BaseCard.vue'

export interface ExamPlayerCtx {
  formattedCurrentTime: any
  timeSyncStatus?: any
}
const ctx = inject<ExamPlayerCtx>('ExamPlayerCtx')!
</script>

<style scoped>
.clock-content {
  display: flex;
  align-items: center;
  gap: calc(var(--ui-scale, 1) * 2rem);
}

.time-display {
  font-size: calc(var(--ui-scale, 1) * 4rem);
  line-height: 1;
  color: #fff;
  text-shadow: 0 calc(var(--ui-scale, 1) * 0.167rem) calc(var(--ui-scale, 1) * 1.458rem)
    rgba(255, 255, 255, 0.3);
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-style: normal;
  font-weight: 600;
}

.time-note {
  color: rgba(255, 255, 255, 0.7);
  font-size: calc(var(--ui-scale, 1) * 1.5rem);
  line-height: calc(var(--ui-scale, 1) * 2rem);
}
</style>
