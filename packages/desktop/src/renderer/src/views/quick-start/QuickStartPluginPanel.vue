<template>
  <component :is="resolved" v-if="resolved" :config="config" :step="step" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from 'vue'
import type { ExamConfig } from '@renderer/core/configTypes'

const props = defineProps<{
  component: unknown
  config?: ExamConfig | null
  step?: string
}>()

const resolved = shallowRef<unknown>(null)

async function resolveComponent(value: unknown): Promise<void> {
  if (typeof value !== 'function') {
    resolved.value = value
    return
  }
  try {
    const result = (value as () => unknown)()
    if (result && typeof (result as Promise<unknown>).then === 'function') {
      const module = await (result as Promise<{ default?: unknown } | unknown>)
      resolved.value = (module as { default?: unknown })?.default ?? module
      return
    }
    resolved.value = value
  } catch {
    resolved.value = value
  }
}

watch(() => props.component, resolveComponent, { immediate: true })
</script>
