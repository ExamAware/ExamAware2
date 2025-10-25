<template>
  <div class="player" v-if="config" ref="playerRef">
    <ExamPlayer
      :exam-config="config"
      :config="playerConfig"
      :time-sync-status="'电脑时间'"
      v-model:roomNumber="roomNumber"
      :show-action-bar="true"
      @exit="handleExit"
    />
  </div>
  <div v-else class="fallback">
    <p>未找到配置，请先上传考试档案。</p>
    <t-button theme="default" @click="goHome">返回首页</t-button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { ExamConfig } from '@dsz-examaware/core'
import { ExamPlayer, type PlayerConfig } from '@dsz-examaware/player'
import { useRouter } from 'vue-router'

const router = useRouter()
const roomNumber = ref('01')
const playerRef = ref<HTMLElement | null>(null)

const config = computed<ExamConfig | null>(() => {
  const raw = sessionStorage.getItem('examaware:config')
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
})

const playerConfig = computed<PlayerConfig>(() => ({
  roomNumber: roomNumber.value,
  fullscreen: false,
  timeSync: true,
  refreshInterval: 1000
}))

const goHome = () => router.push('/')

// === 全屏相关（Web） ===
const getDoc = () =>
  document as Document & {
    webkitExitFullscreen?: () => Promise<void> | void
    webkitFullscreenElement?: Element | null
  }

const requestFullscreen = async (el: HTMLElement) => {
  const anyEl = el as any
  try {
    if (anyEl.requestFullscreen) {
      await anyEl.requestFullscreen()
      return true
    }
    if (anyEl.webkitRequestFullscreen) {
      await anyEl.webkitRequestFullscreen()
      return true
    }
  } catch (e) {
    // ignore
  }
  return false
}

const exitFullscreen = async () => {
  const anyDoc = getDoc() as any
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen()
      return true
    }
    if (anyDoc.webkitFullscreenElement && anyDoc.webkitExitFullscreen) {
      await anyDoc.webkitExitFullscreen()
      return true
    }
  } catch (e) {
    // ignore
  }
  return false
}

const handleExit = async () => {
  await exitFullscreen()
}

onMounted(async () => {
  const container = playerRef.value || document.documentElement
  await requestFullscreen(container)
})

onUnmounted(() => {
  exitFullscreen()
})
</script>

<style scoped>
.player {
  width: 100vw;
  height: 100vh;
}
.fallback {
  min-height: 100vh;
  display: grid;
  place-content: center;
  gap: 12px;
}
</style>
