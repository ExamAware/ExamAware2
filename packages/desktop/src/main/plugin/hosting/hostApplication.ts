import type {
  ConfigureHostDelegate,
  HostBuilderContext,
  HostExposure,
  HostedService,
  PluginHostApplicationContext,
  PluginMiddleware,
  ServiceToken
} from './types'
import { ServiceProvider } from './serviceCollection'

// 插件Host应用类，管理应用的生命周期和托管服务
export class PluginHostApplication {
  private hostedInstances: HostedService[] = [] // 已启动的托管服务实例
  private hostDisposers: Array<() => void> = [] // 清理函数列表
  private started = false // 是否已启动

  constructor(
    private readonly context: HostBuilderContext, // Host构建器上下文
    private readonly provider: ServiceProvider, // 服务提供者
    private readonly configureDelegates: ConfigureHostDelegate[], // 配置委托
    private readonly middleware: PluginMiddleware[], // 中间件
    private readonly hostedTokens: ServiceToken<HostedService>[] // 托管服务令牌
  ) {}

  // 包装应用，添加服务暴露功能
  withExposures(exposures: HostExposure[]): PluginHostApplicationWithExposures {
    return new PluginHostApplicationWithExposures(this, exposures)
  }

  // 启动应用
  async start(): Promise<void> {
    if (this.started) return
    const appCtx = this.createApplicationContext() // 创建应用上下文

    // 执行所有配置委托
    for (const configure of this.configureDelegates) {
      await configure(this.context, appCtx)
    }

    // 通过中间件管道执行终端逻辑（启动托管服务）
    await this.dispatch(0, appCtx, async () => {
      await this.bootstrapHostedServices()
    })

    this.started = true
    await this.context.lifetime.notifyStarted() // 通知生命周期已启动
  }

  // 停止应用
  async stop(): Promise<void> {
    if (!this.started) return
    await this.context.lifetime.notifyStopping() // 通知正在停止
    await this.disposeHostedServices() // 停止托管服务
    await this.context.lifetime.notifyStopped() // 通知已停止
    this.started = false
  }

  // 释放资源
  async dispose(): Promise<void> {
    await this.stop()
    await this.provider.dispose() // 释放服务提供者
  }

  // 获取服务提供者
  get services(): ServiceProvider {
    return this.provider
  }

  // 获取Host上下文
  get hostContext(): HostBuilderContext {
    return this.context
  }

  // 创建应用上下文
  private createApplicationContext(): PluginHostApplicationContext {
    return {
      ctx: this.context.ctx,
      services: this.provider,
      host: this.context
    }
  }

  // 启动所有托管服务
  private async bootstrapHostedServices() {
    for (const token of this.hostedTokens) {
      const service = this.provider.get(token) // 从提供者获取服务实例
      this.hostedInstances.push(service)
      if (typeof service.start === 'function') {
        await service.start() // 调用启动方法
      }
    }
  }

  // 停止所有托管服务
  private async disposeHostedServices() {
    while (this.hostedInstances.length) {
      const service = this.hostedInstances.pop()
      if (!service) continue
      if (typeof service.stop === 'function') {
        await service.stop() // 调用停止方法
      }
    }
  }

  // 执行中间件管道
  private async dispatch(
    index: number,
    appCtx: PluginHostApplicationContext,
    terminal: () => Promise<void>
  ) {
    const middleware = this.middleware[index]
    if (!middleware) {
      await terminal() // 执行终端逻辑
      return
    }

    // 调用中间件，传入下一个中间件的执行函数
    await middleware(appCtx, () => this.dispatch(index + 1, appCtx, terminal))
  }
}

// 带服务暴露的Host应用类
export class PluginHostApplicationWithExposures {
  private readonly exposureDisposers: Array<() => void> = [] // 暴露服务的清理函数

  constructor(
    private readonly app: PluginHostApplication,
    private readonly exposures: HostExposure[]
  ) {}

  // 启动应用，包括注册暴露服务
  async start(): Promise<void> {
    try {
      await this.registerExposures() // 先注册暴露服务
      await this.app.start() // 再启动应用
    } catch (error) {
      await this.disposeExposures() // 出错时清理暴露服务
      throw error
    }
  }

  // 停止应用，包括清理暴露服务
  async stop(): Promise<void> {
    await this.app.stop()
    await this.disposeExposures()
  }

  // 释放资源
  async dispose(): Promise<void> {
    await this.app.dispose()
    await this.disposeExposures()
  }

  // 获取服务提供者
  get services() {
    return this.app.services
  }

  // 获取Host上下文
  get hostContext() {
    return this.app.hostContext
  }

  // 注册暴露的服务到插件上下文
  private async registerExposures() {
    const ctx = this.app.hostContext.ctx
    if (!ctx.services) return
    for (const exposure of this.exposures) {
      const value = exposure.resolver(this.app.services) // 解析服务值
      const disposer = ctx.services.provide(exposure.name, value) // 注册到服务API
      this.exposureDisposers.push(disposer)
    }
  }

  // 清理暴露的服务
  private async disposeExposures() {
    while (this.exposureDisposers.length) {
      const dispose = this.exposureDisposers.pop()
      if (!dispose) continue
      await dispose() // 调用清理函数
    }
  }
}
