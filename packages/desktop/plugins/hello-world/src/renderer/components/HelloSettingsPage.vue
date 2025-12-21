<template>
  <div class="hello-plugin-card">
    <h3>Hello Plugin 示例页面</h3>
    <p>该界面由插件 renderer 入口动态注册，以下按钮使用 ctx.settings 与宿主配置保持同步。</p>
    <p class="hello-plugin-desc">累计点击次数：{{ clickCount }}</p>
    <button class="hello-plugin-button" :disabled="saving" @click="increment">
      {{ saving ? '保存中…' : '点我 +1' }}
    </button>
    <button class="hello-plugin-button ghost" :disabled="saving" @click="reset">重置配置</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PluginRuntimeContext } from '@examaware/desktop-plugin-types'

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
.hello-plugin-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.hello-plugin-desc {
  font-size: 14px;
  color: #666;
}

.hello-plugin-button {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #fff;
  background: #0052d9;
  transition: opacity 0.2s ease;
}

.hello-plugin-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.hello-plugin-button.ghost {
  background: #fff;
  color: #0052d9;
  border: 1px solid #0052d9;
}
</style>
