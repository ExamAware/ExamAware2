<template>
  <div ref="pipRef" class="pip-window" @mousedown="startDrag">
    <div class="pip-content">
      <div v-if="showRemaining" class="pip-time">{{ remainingTime }}</div>
      <div v-if="showCurrent" class="pip-time pip-current">{{ currentTime }}</div>
    </div>
    <button class="pip-close" @click.stop="handleClose">
      <CloseIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { CloseIcon } from 'tdesign-icons-vue-next'

const remainingTime = ref('00:00')
const currentTime = ref('')
const showRemaining = ref(true)
const showCurrent = ref(false)

const pipRef = ref<HTMLElement | null>(null)
const pos = ref({ x: 20, y: 20 })
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

const ipc = window.api.ipc

const startDrag = (e: MouseEvent) => {
  if ((e.target as HTMLElement).closest('.pip-close')) return
  isDragging.value = true
  dragOffset.value = {
    x: e.clientX - pos.value.x,
    y: e.clientY - pos.value.y
  }
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  const maxX = window.innerWidth - (pipRef.value?.offsetWidth || 320)
  const maxY = window.innerHeight - (pipRef.value?.offsetHeight || 160)
  pos.value.x = Math.max(0, Math.min(maxX, e.clientX - dragOffset.value.x))
  pos.value.y = Math.max(0, Math.min(maxY, e.clientY - dragOffset.value.y))
  updatePosition()
}

const onMouseUp = () => {
  isDragging.value = false
}

const updatePosition = () => {
  if (pipRef.value) {
    pipRef.value.style.left = `${pos.value.x}px`
    pipRef.value.style.top = `${pos.value.y}px`
  }
}

const handleClose = () => {
  ipc.send('pip:toggle')
}

const onInit = (_event: any, opts: { showRemaining?: boolean; showCurrent?: boolean }) => {
  showRemaining.value = opts.showRemaining ?? true
  showCurrent.value = opts.showCurrent ?? false
}

const onData = (_event: any, data: { remainingTime?: string; currentTime?: string }) => {
  if (data.remainingTime !== undefined) remainingTime.value = data.remainingTime
  if (data.currentTime !== undefined) currentTime.value = data.currentTime
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  ipc.on('pip:init', onInit)
  ipc.on('pip:data', onData)
  updatePosition()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  ipc.off('pip:init', onInit)
  ipc.off('pip:data', onData)
})
</script>

<style scoped>
.pip-window {
  position: fixed;
  z-index: 9999;
  background: rgba(4, 14, 21, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 28px 36px;
  cursor: grab;
  user-select: none;
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  min-width: 260px;
}

.pip-window:active {
  cursor: grabbing;
}

.pip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.pip-time {
  color: #fff;
  font-family: 'TCloudNumber', 'MiSans', monospace;
  font-size: 56px;
  font-weight: 600;
  line-height: 1.2;
  text-shadow: 0 2px 16px rgba(255, 255, 255, 0.3);
}

.pip-current {
  font-size: 28px;
  color: rgba(255, 255, 255, 0.7);
}

.pip-close {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 59, 48, 0.9);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  opacity: 0;
  transition: opacity 0.2s ease;
  padding: 0;
}

.pip-window:hover .pip-close {
  opacity: 1;
}
</style>
