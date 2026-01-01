import { appLogger } from '../../logging/winstonLogger'
import type { Awaitable, Disposer, PluginHostApplicationLifetime } from './types'

// 默认的应用生命周期实现，管理启动/停止事件
export class DefaultHostApplicationLifetime implements PluginHostApplicationLifetime {
  private readonly started = new Set<() => Awaitable<void>>() // 启动事件处理器
  private readonly stopping = new Set<() => Awaitable<void>>() // 停止事件处理器
  private readonly stopped = new Set<() => Awaitable<void>>() // 已停止事件处理器

  // 注册启动事件处理器
  onStarted(handler: () => Awaitable<void>): Disposer {
    this.started.add(handler)
    return () => {
      this.started.delete(handler)
    } // 返回清理函数
  }

  // 注册停止事件处理器
  onStopping(handler: () => Awaitable<void>): Disposer {
    this.stopping.add(handler)
    return () => {
      this.stopping.delete(handler)
    }
  }

  // 注册已停止事件处理器
  onStopped(handler: () => Awaitable<void>): Disposer {
    this.stopped.add(handler)
    return () => {
      this.stopped.delete(handler)
    }
  }

  // 通知所有启动事件处理器
  async notifyStarted() {
    await this.dispatch(this.started)
  }

  // 通知所有停止事件处理器
  async notifyStopping() {
    await this.dispatch(this.stopping)
  }

  // 通知所有已停止事件处理器
  async notifyStopped() {
    await this.dispatch(this.stopped)
  }

  // 执行事件处理器列表
  private async dispatch(targets: Set<() => Awaitable<void>>) {
    for (const handler of Array.from(targets)) {
      try {
        await handler()
      } catch (error) {
        appLogger.error('[PluginHostLifetime] handler failed', error as Error) // 记录错误但不中断
      }
    }
  }
}
