import { onMounted, onUnmounted, ref } from 'vue'

export function useWindowControls() {
  const platform = window.api.windows.platform
  const isMaximized = ref(false)
  const disposers: Array<() => void> = []

  const minimize = () => window.api.windows.minimize()
  const close = () => window.api.windows.closeCurrent()
  const toggleMaximize = async () => {
    window.api.windows.toggleMaximize()
  }

  const refreshMaxState = async () => {
    try {
      isMaximized.value = await window.api.windows.isMaximized()
    } catch {
      isMaximized.value = false
    }
  }

  const onMax = () => (isMaximized.value = true)
  const onUnmax = () => (isMaximized.value = false)

  onMounted(() => {
    window.api.windows.setupStateListeners()
    const removeMaximized = window.api.windows.onMaximized(onMax)
    const removeUnmaximized = window.api.windows.onUnmaximized(onUnmax)
    disposers.push(removeMaximized, removeUnmaximized)
    refreshMaxState()
  })

  onUnmounted(() => {
    disposers.splice(0).forEach((dispose) => dispose())
  })

  return { platform, isMaximized, minimize, toggleMaximize, close, refreshMaxState }
}
