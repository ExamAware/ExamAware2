import { onMounted, onUnmounted, ref } from 'vue'

export function useWindowControls() {
  const platform = window.electronAPI?.platform || process.platform || 'unknown'
  const isMaximized = ref(false)

  const minimize = () => window.electronAPI?.minimize()
  const close = () => window.electronAPI?.close()
  const toggleMaximize = async () => {
    window.electronAPI?.maximize()
  }

  const refreshMaxState = async () => {
    try {
      isMaximized.value = await (window.electronAPI?.isMaximized?.() || Promise.resolve(false))
    } catch {
      isMaximized.value = false
    }
  }

  const onMax = () => (isMaximized.value = true)
  const onUnmax = () => (isMaximized.value = false)

  onMounted(() => {
    window.electronAPI?.setupListeners?.()
    window.api?.ipc?.on?.('window-maximize', onMax)
    window.api?.ipc?.on?.('window-unmaximize', onUnmax)
    refreshMaxState()
  })

  onUnmounted(() => {
    window.api?.ipc?.off?.('window-maximize', onMax)
    window.api?.ipc?.off?.('window-unmaximize', onUnmax)
  })

  return { platform, isMaximized, minimize, toggleMaximize, close, refreshMaxState }
}
