<template>
  <div class="plugin-card">
    <h3>ExamAware 插件设置</h3>
    <p>该页面由插件 renderer 入口注册，示例展示了如何读写宿主配置。</p>
    <p class="plugin-desc">累计点击次数：{{ clickCount }}</p>
    <div class="plugin-actions">
      <button class="primary" :disabled="saving" @click="increment">
        {{ saving ? '保存中…' : '点我 +1' }}
      </button>
      <button class="ghost" :disabled="saving" @click="reset">
        重置配置
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PluginRuntimeContext } from '@dsz-examaware/plugin-sdk'

const props = defineProps<{ ctx: PluginRuntimeContext }>()
const settings = props.ctx.settings
const clickCount = ref(settings?.get<number>('demo.clicks', 0) ?? 0)
const saving = ref(false)

if (settings?.onChange) {
  props.ctx.effect(() =>
    settings.onChange((config) => {
      const next = (config.demo?.clicks as number) ?? 0
      clickCount.value = next
    })
  )
}

const persist = async () => {
  if (!settings) return
  saving.value = true
  try {
    await settings.set('demo.clicks', clickCount.value)
  } finally {
    saving.value = false
  }
}

const increment = async () => {
  clickCount.value += 1
  await persist()
}

const reset = async () => {
  if (!settings) return
  await settings.reset()
}
</script>

<style scoped>
.plugin-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.plugin-desc {
  font-size: 14px;
  color: #5f6c7b;
}

.plugin-actions {
  display: flex;
  gap: 10px;
}

button {
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button.primary {
  background: #0052d9;
  color: #fff;
}

button.ghost {
  background: transparent;
  color: #0052d9;
  border: 1px solid #0052d9;
}
</style>
