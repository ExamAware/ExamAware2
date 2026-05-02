<template>
  <div class="url-player-page">
    <div class="page-header">
      <t-button class="back-button" variant="text" @click="goBack">
        <template #icon> <t-icon name="chevron-left" /> </template>
        返回
      </t-button>
      <t-breadcrumb class="breadcrumb">
        <t-breadcrumb-item @click="go('/mainpage')">主页</t-breadcrumb-item>
        <t-breadcrumb-item @click="go('/playerhome')">放映器</t-breadcrumb-item>
        <t-breadcrumb-item>从 URL 放映</t-breadcrumb-item>
      </t-breadcrumb>
    </div>

    <h2 class="page-title">从 URL 放映</h2>

    <t-space direction="vertical" size="12" class="url-form">
      <t-input
        v-model="url"
        placeholder="https://example.com/exam.ea2 或 .json"
        clearable
        @keyup="handleKeyUp"
      />
      <div class="hint">支持 http/https URL，获取内容后将在放映窗口打开。</div>
    </t-space>

    <t-button class="play-button" theme="primary" :loading="loading" @click="handlePlay">
      <template #icon>
        <t-icon name="send" />
      </template>
      放映
    </t-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { MessagePlugin } from 'tdesign-vue-next'
import { createPlayerLauncher } from '@renderer/services/playerLauncher'

const router = useRouter()
const url = ref('')
const loading = ref(false)
const launcher = createPlayerLauncher()

const pickUrlFromText = (text: string) => {
  const matches = text.match(/https?:\/\/[^\s'"<>]+/gi) || []
  if (!matches.length) return ''
  const preferred = matches.find((item) => item.toLowerCase().includes('.ea2'))
  return preferred || matches[0]
}

const go = (path: string) => {
  router.push(path)
}

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
    return
  }
  router.push('/playerhome')
}

const handlePlay = async () => {
  const value = url.value.trim()
  if (!value) {
    MessagePlugin.warning('请输入 URL')
    return
  }

  let parsed: URL
  try {
    parsed = new URL(value)
  } catch {
    MessagePlugin.error('URL 格式不正确')
    return
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    MessagePlugin.error('仅支持 http/https URL')
    return
  }

  loading.value = true
  try {
    await launcher.openWith({ source: 'url', pathOrUrl: parsed.toString() })
    MessagePlugin.success('已开始放映')
  } catch (error) {
    const message = error instanceof Error ? error.message : '打开失败'
    MessagePlugin.error(message)
  } finally {
    loading.value = false
  }
}

const handleKeyUp = (event: KeyboardEvent | Event | string) => {
  if (!event || typeof event !== 'object') return
  if (!('key' in event)) return
  if ((event as KeyboardEvent).key === 'Enter') {
    handlePlay()
  }
}

onMounted(async () => {
  if (url.value.trim()) return
  try {
    const text = await navigator.clipboard.readText()
    const picked = pickUrlFromText(text || '')
    if (picked) {
      url.value = picked
    }
  } catch {
    // Clipboard access may be denied; ignore silently.
  }
})
</script>

<style scoped>
.url-player-page {
  padding: 12px 8px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.page-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-button {
  padding-left: 4px;
}

.breadcrumb :deep(.t-breadcrumb__item) {
  cursor: pointer;
}

.breadcrumb :deep(.t-breadcrumb__item:last-child) {
  cursor: default;
}

.page-title {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
}

.url-form {
  width: 100%;
}

.hint {
  margin-top: 8px;
  font-size: 12px;
  color: var(--td-text-color-secondary);
}

.play-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 10;
}
</style>
