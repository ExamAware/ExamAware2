<template>
  <div :class="settingStore.displayMode">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/store';

const settingStore = useSettingStore();
</script>

<style lang="less">
#app {
  min-height: 100vh;
}

#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
