<template>
  <div class="player" v-if="config">
    <ExamPlayer :exam-config="config" :config="playerConfig" :time-sync-status="'网络时间'" :room-number="roomNumber" :show-action-bar="true" />
  </div>
  <div v-else class="fallback">
    <p>未找到配置，请先上传考试档案。</p>
    <t-button theme="default" @click="goHome">返回首页</t-button>
  </div>
  </template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ExamConfig } from '@examaware/core'
import { ExamPlayer, type PlayerConfig } from '@examaware/player'
import { useRouter } from 'vue-router'

const router = useRouter()
const roomNumber = ref('01')

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
</script>

<style scoped>
.player { width: 100vw; height: 100vh; }
.fallback { min-height: 100vh; display: grid; place-content: center; gap: 12px; }
</style>
