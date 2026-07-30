import { ServiceCollection, ServiceProvider } from './serviceCollection'
import { PluginHostApplication, PluginHostApplicationWithExposures } from './hostApplication'
import {
  type ConfigureHostDelegate,
  type ConfigureServicesDelegate,
  type HostBuilderContext,
  type HostBuilderSettings,
  type HostExposure,
  type HostExposureResolver,
  type HostedService,
  type PluginMiddleware,
  type PluginRuntimeContext,
  type ServiceToken
} from './types'

// ExamAware Host构建器，类似.NET的HostBuilder，用于配置插件的服务和生命周期
export class ExamAwareHostBuilder {
  private readonly serviceCollection: ServiceCollection // 服务集合，管理所有注册的服务
  private readonly configureServicesDelegates: ConfigureServicesDelegate[] = [] // 配置服务的委托列表
  private readonly configureDelegates: ConfigureHostDelegate[] = [] // 配置应用的委托列表
  private readonly middleware: PluginMiddleware[] = [] // 中间件列表
  private readonly hostedServices: ServiceToken<HostedService>[] = [] // 托管服务的令牌列表
  private readonly exposures: HostExposure[] = [] // 要暴露的服务列表
  private readonly builderContext: HostBuilderContext // 构建器上下文

  constructor(
    private readonly runtimeCtx: PluginRuntimeContext,
    settings: HostBuilderSettings = {}
  ) {
    this.serviceCollection = new ServiceCollection(runtimeCtx)
    this.builderContext = {
      ctx: runtimeCtx,
      environmentName: settings.environment ?? process.env.EXAMAWARE_ENV ?? 'Production',
      properties: new Map(Object.entries(settings.properties ?? {})),
      lifetime: this.serviceCollection.getLifetime() // 获取应用生命周期管理器
    }
  }

  // 获取构建器上下文
  get context(): HostBuilderContext {
    return this.builderContext
  }

  // 添加服务配置委托
  configureServices(callback: ConfigureServicesDelegate): this {
    this.configureServicesDelegates.push(callback)
    return this
  }

  // 添加应用配置委托
  configure(callback: ConfigureHostDelegate): this {
    this.configureDelegates.push(callback)
    return this
  }

  // 添加中间件
  use(middleware: PluginMiddleware): this {
    this.middleware.push(middleware)
    return this
  }

  // 添加托管服务
  addHostedService(token: ServiceToken<HostedService>): this {
    this.hostedServices.push(token)
    return this
  }

  // 暴露服务到插件上下文
  exposeHostService(name: string, resolver: HostExposureResolver): this {
    const normalized = this.normalizeResolver(resolver)
    if (normalized) {
      this.exposures.push({ name, resolver: normalized })
    }
    return this
  }

  // 构建Host应用
  async build(): Promise<PluginHost> {
    // 执行所有服务配置委托
    for (const configure of this.configureServicesDelegates) {
      await configure(this.builderContext, this.serviceCollection)
    }

    const provider = this.serviceCollection.buildServiceProvider() // 构建服务提供者
    const application = new PluginHostApplication(
      this.builderContext,
      provider,
      this.configureDelegates,
      this.middleware,
      this.hostedServices
    )
    return new PluginHost(application.withExposures(this.exposures)) // 返回包装了暴露服务的Host
  }

  // 标准化暴露解析器
  private normalizeResolver(
    resolver: HostExposureResolver
  ): ((provider: ServiceProvider) => unknown) | null {
    if (resolver.token) {
      return (provider) => provider.get(resolver.token as ServiceToken) // 通过令牌获取服务
    }
    if (resolver.factory) {
      return resolver.factory // 使用工厂函数
    }
    return null
  }
}

// 插件Host类，管理应用的启动和停止
export class PluginHost {
  constructor(private readonly app: PluginHostApplicationWithExposures) {}

  // 获取服务提供者
  get services() {
    return this.app.services
  }

  // 获取Host上下文
  get hostContext() {
    return this.app.hostContext
  }

  // 启动应用
  async start() {
    await this.app.start()
  }

  // 停止应用
  async stop() {
    await this.app.stop()
  }

  // 释放资源
  async dispose() {
    await this.app.dispose()
  }

  // 运行应用，返回停止函数
  async run() {
    await this.start()
    return async () => {
      await this.dispose()
    }
  }
}

// 创建Host构建器的工厂函数
export function createPluginHostBuilder(ctx: PluginRuntimeContext, settings?: HostBuilderSettings) {
  return new ExamAwareHostBuilder(ctx, settings)
}

// Host工具类，提供创建构建器的静态方法
export const Host = {
  createApplicationBuilder: createPluginHostBuilder
}

// 定义插件的辅助函数，使用Host构建器配置插件
export function defineExamAwarePlugin(
  setup: (builder: ExamAwareHostBuilder) => Promise<void> | void
) {
  return async function examAwarePlugin(ctx: PluginRuntimeContext) {
    const builder = Host.createApplicationBuilder(ctx)
    await setup(builder)
    const host = await builder.build()
    return host.run() // 返回运行函数，插件加载时调用
  }
}
