<template>
  <header v-if="platform !== 'linux'" class="ea-titlebar" @dblclick="toggleMaximize">
    <div class="ea-titlebar__side left" :class="platform">
      <slot name="left">
        <span class="ea-titlebar__title" v-if="title">{{ title }}</span>
      </slot>
    </div>
    <div class="ea-titlebar__spacer" />
    <div class="ea-titlebar__side right" :class="platform">
      <slot name="right" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useWindowControls } from '@renderer/composables/useWindowControls'

defineProps<{ title?: string }>()

const { platform, toggleMaximize } = useWindowControls()
</script>

<style scoped>
.ea-titlebar {
  -webkit-app-region: drag;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 8px;
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-border-level-1-color);
}
.ea-titlebar__side {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ea-titlebar__spacer {
  flex: 1;
}
.ea-titlebar .no-drag {
  -webkit-app-region: no-drag;
}
.ea-titlebar__title {
  color: var(--td-text-color-primary);
  font-weight: 400;
  font-size: 14px;
}

.ea-titlebar__side.left.darwin {
  padding-left: 76px;
}
</style>
