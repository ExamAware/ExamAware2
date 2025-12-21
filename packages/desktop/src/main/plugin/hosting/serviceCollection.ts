import {
  DesktopApiToken,
  HostApplicationLifetimeToken,
  PluginContextToken,
  PluginLoggerToken,
  PluginSettingsToken
} from './tokens'
import { DefaultHostApplicationLifetime } from './lifetime'
import type {
  Disposer,
  InjectableClass,
  PluginRuntimeContext,
  ServiceDescriptor,
  ServiceFactory,
  ServiceFactoryOrValue,
  ServiceLifetime,
  ServiceToken
} from './types'

// 检查值是否为构造函数
function isConstructor<T>(value: ServiceFactoryOrValue<T>): value is InjectableClass<T> {
  return (
    typeof value === 'function' &&
    !!(value as any).prototype &&
    (value as any).prototype.constructor === value
  )
}

// 服务集合类，管理所有注册的服务描述符
export class ServiceCollection {
  private readonly descriptors = new Map<ServiceToken, ServiceDescriptor>() // 服务描述符映射
  private readonly hostLifetime: DefaultHostApplicationLifetime // 应用生命周期管理器

  constructor(private readonly ctx: PluginRuntimeContext) {
    this.hostLifetime = new DefaultHostApplicationLifetime()
    // 预注册常用服务
    this.addSingleton(PluginContextToken, () => ctx)
    this.addSingleton(PluginLoggerToken, () => ctx.logger)
    this.addSingleton(PluginSettingsToken, () => ctx.settings)
    this.addSingleton(DesktopApiToken, () => ctx.desktopApi)
    this.addSingleton(HostApplicationLifetimeToken, () => this.hostLifetime)
  }

  // 获取生命周期管理器
  getLifetime() {
    return this.hostLifetime
  }

  // 添加单例服务
  addSingleton<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this {
    return this.register(token, 'singleton', impl)
  }

  // 添加作用域服务
  addScoped<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this {
    return this.register(token, 'scoped', impl)
  }

  // 添加瞬时服务
  addTransient<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this {
    return this.register(token, 'transient', impl)
  }

  // 尝试添加单例服务（如果不存在）
  tryAddSingleton<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this {
    if (!this.descriptors.has(token)) {
      this.addSingleton(token, impl)
    }
    return this
  }

  // 检查服务是否已注册
  has(token: ServiceToken): boolean {
    return this.descriptors.has(token)
  }

  // 清空所有服务
  clear(): void {
    this.descriptors.clear()
  }

  // 构建服务提供者
  buildServiceProvider(): ServiceProvider {
    return new ServiceProvider(this.ctx, new Map(this.descriptors))
  }

  // 注册服务
  private register<T>(
    token: ServiceToken<T>,
    lifetime: ServiceLifetime,
    impl: ServiceFactoryOrValue<T>
  ): this {
    const descriptor: ServiceDescriptor = {
      token,
      lifetime,
      factory: this.normalizeFactory(impl) // 标准化工厂函数
    }
    this.descriptors.set(token, descriptor)
    return this
  }

  // 标准化工厂函数
  private normalizeFactory<T>(impl: ServiceFactoryOrValue<T>): ServiceFactory<T> {
    if (isConstructor(impl)) {
      return (provider) => this.instantiateClass(impl, provider) // 构造函数，实例化类
    }

    if (typeof impl === 'function') {
      return impl as ServiceFactory<T> // 已经是工厂函数
    }

    return () => impl // 直接值，返回常量
  }

  // 实例化类，注入依赖
  private instantiateClass<T>(Ctor: InjectableClass<T>, provider: ServiceProvider): T {
    const deps = [...(Ctor.inject ?? [])].map((token) => provider.get(token)) // 获取依赖
    return new Ctor(...deps) // 构造实例
  }
}

// 服务提供者类，负责解析和提供服务实例
export class ServiceProvider {
  private readonly singletonCache: Map<ServiceToken, unknown> // 单例缓存
  private readonly scopedCache = new Map<ServiceToken, unknown>() // 作用域缓存
  private readonly singletonCleanup: Disposer[] // 单例清理函数
  private readonly scopedCleanup: Disposer[] = [] // 作用域清理函数
  private readonly root: ServiceProvider | null // 根提供者

  constructor(
    private readonly ctx: PluginRuntimeContext,
    private readonly descriptors: Map<ServiceToken, ServiceDescriptor>,
    root: ServiceProvider | null = null,
    private readonly isScope = false // 是否为作用域提供者
  ) {
    this.root = root
    this.singletonCache = root ? root.singletonCache : new Map() // 共享单例缓存
    this.singletonCleanup = root ? root.singletonCleanup : []
  }

  // 获取服务实例
  get<T>(token: ServiceToken<T>): T {
    const descriptor = this.descriptors.get(token) as ServiceDescriptor<T> | undefined
    if (!descriptor) {
      const hostValue = this.resolveFromHost<T>(token) // 尝试从宿主获取
      if (hostValue !== undefined) return hostValue
      throw new Error(`Service not registered for token: ${token.toString?.() ?? String(token)}`)
    }

    switch (descriptor.lifetime) {
      case 'singleton':
        return this.resolveSingleton(descriptor)
      case 'scoped':
        return this.resolveScoped(descriptor)
      case 'transient':
      default:
        return this.instantiate(descriptor) // 每次都新实例
    }
  }

  // 创建作用域提供者
  createScope(): ServiceProvider {
    return new ServiceProvider(this.ctx, this.descriptors, this.root ?? this, true)
  }

  // 释放资源
  async dispose(): Promise<void> {
    await this.flushCleanup(this.scopedCleanup) // 先清理作用域
    if (!this.isScope) {
      await this.flushCleanup(this.singletonCleanup) // 再清理单例
      this.singletonCache.clear()
    }
    this.scopedCache.clear()
  }

  // 解析单例服务
  private resolveSingleton<T>(descriptor: ServiceDescriptor<T>): T {
    const cacheOwner = this.root ?? this
    if (cacheOwner.singletonCache.has(descriptor.token)) {
      return cacheOwner.singletonCache.get(descriptor.token) as T
    }
    const instance = this.instantiate(descriptor)
    cacheOwner.singletonCache.set(descriptor.token, instance)
    const disposer = this.extractDisposer(instance) // 提取清理函数
    if (disposer) cacheOwner.singletonCleanup.push(disposer)
    return instance
  }

  // 解析作用域服务
  private resolveScoped<T>(descriptor: ServiceDescriptor<T>): T {
    if (this.scopedCache.has(descriptor.token)) {
      return this.scopedCache.get(descriptor.token) as T
    }
    const instance = this.instantiate(descriptor)
    this.scopedCache.set(descriptor.token, instance)
    const disposer = this.extractDisposer(instance)
    if (disposer) this.scopedCleanup.push(disposer)
    return instance
  }

  // 实例化服务
  private instantiate<T>(descriptor: ServiceDescriptor<T>): T {
    return descriptor.factory(this)
  }

  // 从宿主服务API解析
  private resolveFromHost<T>(token: ServiceToken<T>): T | undefined {
    if (typeof token === 'string' && this.ctx.services?.has?.(token)) {
      return this.ctx.services.inject<T>(token)
    }
    return undefined
  }

  // 提取实例的清理函数
  private extractDisposer(instance: unknown): Disposer | null {
    if (!instance) return null
    if (typeof (instance as any).dispose === 'function') {
      return () => (instance as any).dispose()
    }
    if (typeof (instance as any).destroy === 'function') {
      return () => (instance as any).destroy()
    }
    if (typeof (instance as any).stop === 'function') {
      return () => (instance as any).stop()
    }
    return null
  }

  // 执行清理函数列表
  private async flushCleanup(cleanup: Disposer[]) {
    while (cleanup.length) {
      const disposer = cleanup.pop()
      if (!disposer) continue
      await disposer()
    }
  }
}
