import { ref, onMounted, onUnmounted } from 'vue'

// 使用预加载脚本暴露的API
const ipcRenderer = window.api?.ipc

// 缓存上次同步信息
let lastSyncInfo = {
  offset: 0,
  manualOffset: 0,
  lastSyncTime: 0
}

// 时间同步变更监听器
type TimeSyncChangeListener = () => void
const timeSyncChangeListeners: TimeSyncChangeListener[] = []

// 添加时间同步变更监听器
export function addTimeSyncChangeListener(listener: TimeSyncChangeListener) {
  timeSyncChangeListeners.push(listener)
}

// 移除时间同步变更监听器
export function removeTimeSyncChangeListener(listener: TimeSyncChangeListener) {
  const index = timeSyncChangeListeners.indexOf(listener)
  if (index > -1) {
    timeSyncChangeListeners.splice(index, 1)
  }
}

// 通知所有监听器时间同步发生了变更
function notifyTimeSyncChange() {
  timeSyncChangeListeners.forEach(listener => {
    try {
      listener()
    } catch (error) {
      console.error('时间同步变更监听器执行失败:', error)
    }
  })
}

// 获取同步后的当前时间
export function getSyncedTime(): number {
  // 如果未连接到主进程或者没有进行过同步，则使用本地时间
  if (!lastSyncInfo.lastSyncTime) {
    return Date.now()
  }

  // 应用偏移计算时间
  return Date.now() + lastSyncInfo.offset + lastSyncInfo.manualOffset
}

// 获取时间同步状态
export async function getTimeSyncInfo() {
  try {
    if (!ipcRenderer) {
      console.warn('IPC renderer not available')
      return null
    }
    const info = await ipcRenderer.invoke('time:get-sync-info')

    // 检查时间同步信息是否发生变化
    const hasChanged = (
      lastSyncInfo.offset !== info.offset ||
      lastSyncInfo.manualOffset !== info.manualOffset ||
      lastSyncInfo.lastSyncTime !== info.lastSyncTime
    )

    lastSyncInfo = info

    // 如果时间同步信息发生变化，通知所有监听器
    if (hasChanged) {
      notifyTimeSyncChange()
    }

    return info
  } catch (error) {
    console.error('获取时间同步信息失败:', error)
    return null
  }
}

// 执行时间同步
export async function syncTime() {
  try {
    if (!ipcRenderer) {
      console.warn('IPC renderer not available')
      throw new Error('IPC renderer not available')
    }
    const result = await ipcRenderer.invoke('time:sync-now')

    // 检查时间同步信息是否发生变化
    const hasChanged = (
      lastSyncInfo.offset !== result.offset ||
      lastSyncInfo.manualOffset !== result.manualOffset ||
      lastSyncInfo.lastSyncTime !== result.lastSyncTime
    )

    lastSyncInfo = result

    // 如果时间同步信息发生变化，通知所有监听器
    if (hasChanged) {
      notifyTimeSyncChange()
    }

    return result
  } catch (error) {
    console.error('时间同步失败:', error)
    throw error
  }
}

// 更新时间同步配置
export async function updateTimeSyncConfig(config) {
  try {
    if (!ipcRenderer) {
      console.warn('IPC renderer not available')
      throw new Error('IPC renderer not available')
    }
    const result = await ipcRenderer.invoke('time:update-config', config)

    // 配置更新后重新获取同步信息以触发变更通知
    await getTimeSyncInfo()

    return result
  } catch (error) {
    console.error('更新时间同步配置失败:', error)
    throw error
  }
}

// 组合式函数，提供响应式的时间同步状态
export function useTimeSync() {
  const syncInfo = ref()
  const syncStatus = ref('pending')
  const isLoading = ref(false)
  const currentTime = ref(getSyncedTime())
  let intervalId: NodeJS.Timeout | null = null

  // 时间同步变更处理函数
  const handleTimeSyncChange = () => {
    // 更新当前时间
    currentTime.value = getSyncedTime()
    console.log('时间同步发生变更，已更新当前时间:', new Date(currentTime.value).toLocaleString())
  }

  // 加载同步信息
  const loadSyncInfo = async () => {
    try {
      isLoading.value = true
      syncInfo.value = await getTimeSyncInfo()
      syncStatus.value = syncInfo.value?.syncStatus || 'pending'
    } catch (error) {
      syncStatus.value = 'error'
    } finally {
      isLoading.value = false
    }
  }

  // 执行同步
  const performSync = async () => {
    try {
      isLoading.value = true
      syncStatus.value = 'pending'
      syncInfo.value = await syncTime()
      syncStatus.value = 'success'
    } catch (error: unknown) {
      // 明确声明 error 类型为 unknown
      if (error instanceof Error) {
        // 检查 error 是否为 Error 实例
        syncStatus.value = 'error'
        syncInfo.value = { ...syncInfo.value, errorMessage: error.message } // 安全访问 message
      } else {
        syncStatus.value = 'error'
        syncInfo.value = { ...syncInfo.value, errorMessage: '未知错误' } // 处理非 Error 类型的错误
      }
    } finally {
      isLoading.value = false
    }
  }

  // 更新配置
  const updateConfig = async (config) => {
    try {
      isLoading.value = true
      const result = await updateTimeSyncConfig(config)
      syncInfo.value = await getTimeSyncInfo()
      return result
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    // 加载初始同步信息
    loadSyncInfo()

    // 添加时间同步变更监听器
    addTimeSyncChangeListener(handleTimeSyncChange)

    // 监听来自主进程的时间同步变更事件
    if (ipcRenderer) {
      ipcRenderer.on('time:sync-changed', handleTimeSyncChange)
    }

    // 设置定时器更新当前时间
    intervalId = setInterval(() => {
      currentTime.value = getSyncedTime()
    }, 1000)
  })

  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId) // 修复：确保 intervalId 不为空时才清除定时器
    }

    // 移除时间同步变更监听器
    removeTimeSyncChangeListener(handleTimeSyncChange)

    // 移除 IPC 监听器
    if (ipcRenderer) {
      ipcRenderer.off('time:sync-changed', handleTimeSyncChange)
    }
  })

  return {
    syncInfo,
    syncStatus,
    isLoading,
    currentTime,
    loadSyncInfo,
    performSync,
    updateConfig,
    getSyncedTime
  }
}
