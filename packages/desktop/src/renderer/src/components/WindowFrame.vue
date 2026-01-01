<template>
  <div class="ea-window-frame">
    <CustomTitleBar v-if="showTitlebar" :title="title" />
    <div class="ea-window-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomTitleBar from './CustomTitleBar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{ title?: string }>(), { title: 'DSZ ExamAware' })
const route = useRoute()
const showTitlebar = computed(() => !(route.meta && (route.meta as any).hideTitlebar))
const title = computed(() => props.title)
</script>

<style scoped>
.ea-window-frame {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.ea-window-content {
  flex: 1;
  min-height: 0;
}
</style>
