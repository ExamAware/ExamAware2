<template>
  <div class="window-controls" :class="{ 'is-linux': isLinux }">
    <!-- Windows/Linux 控制按钮 - 只在非Linux且非macOS平台显示 -->
    <template v-if="showControls && !isMacOS">
      <t-button
        variant="text"
        size="small"
        class="window-control-btn minimize-btn"
        @click="minimizeWindow"
        title="最小化"
      >
        <t-icon name="minus" />
      </t-button>
      <t-button
        variant="text"
        size="small"
        class="window-control-btn maximize-btn"
        @click="maximizeWindow"
        :title="isMaximized ? '还原' : '最大化'"
      >
        <t-icon :name="isMaximized ? 'fullscreen-exit' : 'fullscreen'" />
      </t-button>
      <t-button
        variant="text"
        size="small"
        class="window-control-btn close-btn"
        @click="closeWindow"
        title="关闭"
      >
        <t-icon name="close" />
      </t-button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const ipcRenderer = window.api.ipc
const windowAPI = (window as any).electronAPI

const platform = windowAPI?.platform || 'unknown'
const isMacOS = platform === 'darwin'
const isLinux = platform === 'linux'
const isMaximized = ref(false)

// 只在非Linux平台且API可用时显示控制按钮
const showControls = !isLinux && windowAPI

const minimizeWindow = () => {
  if (windowAPI?.minimize) {
    windowAPI.minimize()
  }
}

const maximizeWindow = () => {
  if (windowAPI?.maximize) {
    windowAPI.maximize()
  }
}

const closeWindow = () => {
  if (windowAPI?.close) {
    windowAPI.close()
  }
}

// 监听窗口状态变化
const handleWindowStateChange = async () => {
  if (windowAPI?.isMaximized) {
    isMaximized.value = await windowAPI.isMaximized()
  }
}

onMounted(() => {
  if (showControls && !isMacOS && windowAPI) {
    // 设置窗口监听器
    if (windowAPI.setupListeners) {
      windowAPI.setupListeners()
    }

    // 监听窗口状态变化
    if (ipcRenderer) {
      ipcRenderer.on('window-maximize', handleWindowStateChange)
      ipcRenderer.on('window-unmaximize', handleWindowStateChange)
    }

    // 初始化状态
    handleWindowStateChange()
  }
})

onUnmounted(() => {
  if (showControls && !isMacOS && ipcRenderer) {
    ipcRenderer.off('window-maximize', handleWindowStateChange)
    ipcRenderer.off('window-unmaximize', handleWindowStateChange)
  }
})
</script>

<style scoped>
.window-controls {
  display: flex;
  align-items: center;
  gap: 0;
  height: 100%;
  -webkit-app-region: no-drag;
}

.window-controls.is-linux {
  /* Linux 下显示普通窗口，不需要自定义控制按钮 */
  display: none;
}

.window-control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 32px;
  border-radius: 0;
  transition: background-color 0.2s ease;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
}

.window-control-btn:hover {
  background-color: var(--td-bg-color-container-hover);
}

.minimize-btn:hover,
.maximize-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.close-btn:hover {
  background-color: #e81123;
  color: white;
}

.close-btn:hover :deep(.t-icon) {
  color: white;
}

/* 深色主题样式 */
@media (prefers-color-scheme: dark) {
  .minimize-btn:hover,
  .maximize-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .close-btn:hover {
    background-color: #e81123;
  }
}

/* Windows 样式优化 */
@media (max-width: 0) { /* 仅用于 Windows */
  .window-control-btn {
    width: 45px;
    height: 30px;
  }
}
</style>
