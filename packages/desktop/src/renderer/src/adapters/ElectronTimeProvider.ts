/**
 * Electron 时间提供器适配器
 * 将 Electron 的 NTP 时间同步功能适配到新的 player 包
 */

// 定义时间提供器接口（与 player 包中的接口保持一致）
interface TimeProvider {
  getCurrentTime: () => number
  onTimeChange?: (callback: () => void) => void
  offTimeChange?: (callback: () => void) => void
}

interface ElectronTimeSyncAPI {
  invoke: (channel: string, ...args: any[]) => Promise<any>
  on: (channel: string, callback: (...args: any[]) => void) => void
  off: (channel: string, callback: (...args: any[]) => void) => void
}

interface TimeSyncInfo {
  offset: number
  roundTripDelay: number
  lastSyncTime: number
  serverAddress: string
  manualOffset: number
  syncStatus: 'success' | 'error' | 'pending' | 'disabled'
  errorMessage?: string
}

export class ElectronTimeProvider implements TimeProvider {
  private electronAPI: ElectronTimeSyncAPI
  private syncedTimeOffset = 0
  private syncStatus: TimeSyncInfo['syncStatus'] = 'pending'
  private changeCallbacks: (() => void)[] = []
  private intervalId: NodeJS.Timeout | null = null

  constructor(electronAPI: ElectronTimeSyncAPI) {
    this.electronAPI = electronAPI
    this.initialize()
  }

  getCurrentTime(): number {
    // 返回同步后的时间
    return Date.now() + this.syncedTimeOffset
  }

  onTimeChange(callback: () => void): void {
    this.changeCallbacks.push(callback)
  }

  offTimeChange(callback: () => void): void {
    const index = this.changeCallbacks.indexOf(callback)
    if (index > -1) {
      this.changeCallbacks.splice(index, 1)
    }
  }

  private async initialize(): Promise<void> {
    try {
      // 获取当前时间同步状态
      await this.updateSyncInfo()

      // 启动定期时间更新
      this.startTimeUpdates()

      // 监听时间同步状态变化（如果有的话）
      // 这里可以监听 Electron 主进程的时间同步事件
    } catch (error) {
      console.error('初始化 Electron 时间提供器失败:', error)
    }
  }

  private async updateSyncInfo(): Promise<void> {
    try {
      const syncInfo: TimeSyncInfo = await this.electronAPI.invoke('time:get-sync-info')

      // 更新时间偏移量
      const newOffset = syncInfo.offset + syncInfo.manualOffset
      const oldOffset = this.syncedTimeOffset

      this.syncedTimeOffset = newOffset
      this.syncStatus = syncInfo.syncStatus

      // 如果偏移量发生变化，触发回调
      if (Math.abs(newOffset - oldOffset) > 100) { // 超过100ms的变化才触发
        this.notifyTimeChange()
      }
    } catch (error) {
      console.error('获取时间同步信息失败:', error)
      this.syncStatus = 'error'
    }
  }

  private startTimeUpdates(): void {
    if (this.intervalId) return

    // 每秒更新一次时间，每30秒检查一次同步状态
    let updateCount = 0
    this.intervalId = setInterval(() => {
      updateCount++

      // 每次都通知时间变化（用于更新显示）
      this.notifyTimeChange()

      // 每30次（30秒）检查一次同步状态
      if (updateCount % 30 === 0) {
        this.updateSyncInfo()
      }
    }, 1000)
  }

  private stopTimeUpdates(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  private notifyTimeChange(): void {
    this.changeCallbacks.forEach(callback => {
      try {
        callback()
      } catch (error) {
        console.error('时间变化回调执行失败:', error)
      }
    })
  }

  /**
   * 获取时间同步状态描述
   */
  getTimeSyncStatusText(): string {
    switch (this.syncStatus) {
      case 'success':
        return '联网时间'
      case 'error':
        return '同步失败'
      case 'pending':
        return '同步中'
      case 'disabled':
        return '同步已禁用'
      default:
        return '电脑时间'
    }
  }

  /**
   * 获取同步状态
   */
  getSyncStatus(): TimeSyncInfo['syncStatus'] {
    return this.syncStatus
  }

  /**
   * 执行时间同步
   */
  async performSync(): Promise<TimeSyncInfo> {
    const result = await this.electronAPI.invoke('time:sync-now')
    await this.updateSyncInfo()
    return result
  }

  /**
   * 更新时间同步配置
   */
  async updateConfig(config: any): Promise<any> {
    const result = await this.electronAPI.invoke('time:update-config', config)
    await this.updateSyncInfo()
    return result
  }

  /**
   * 销毁提供器
   */
  destroy(): void {
    this.stopTimeUpdates()
    this.changeCallbacks = []
  }
}
