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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{ title?: string }>(), { title: 'DSZ ExamAware' })
const route = useRoute()
const showTitlebar = computed(() => !(route.meta && (route.meta as any).hideTitlebar))

// Track document.title so plugin windows can drive the title bar.
const documentTitle = ref<string | undefined>(
  typeof document !== 'undefined' ? document.title : undefined
)
let titleObserver: MutationObserver | undefined

onMounted(() => {
  const titleEl = document.querySelector('title')
  if (!titleEl) return
  titleObserver = new MutationObserver(() => {
    documentTitle.value = document.title
  })
  titleObserver.observe(titleEl, { childList: true })
})

onBeforeUnmount(() => {
  titleObserver?.disconnect()
})

const title = computed(() => {
  const metaTitle = route.meta ? (route.meta as any).title : undefined
  return metaTitle ?? documentTitle.value ?? props.title
})
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
