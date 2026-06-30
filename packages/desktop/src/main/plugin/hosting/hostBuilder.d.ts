import { ServiceProvider } from './serviceCollection'
import { PluginHostApplicationWithExposures } from './hostApplication'
import {
  type ConfigureHostDelegate,
  type ConfigureServicesDelegate,
  type HostBuilderContext,
  type HostBuilderSettings,
  type HostExposureResolver,
  type HostedService,
  type PluginMiddleware,
  type PluginRuntimeContext,
  type ServiceToken
} from './types'
export declare class ExamAwareHostBuilder {
  private readonly runtimeCtx
  private readonly serviceCollection
  private readonly configureServicesDelegates
  private readonly configureDelegates
  private readonly middleware
  private readonly hostedServices
  private readonly exposures
  private readonly builderContext
  constructor(runtimeCtx: PluginRuntimeContext, settings?: HostBuilderSettings)
  get context(): HostBuilderContext
  configureServices(callback: ConfigureServicesDelegate): this
  configure(callback: ConfigureHostDelegate): this
  use(middleware: PluginMiddleware): this
  addHostedService(token: ServiceToken<HostedService>): this
  exposeHostService(name: string, resolver: HostExposureResolver): this
  build(): Promise<PluginHost>
  private normalizeResolver
}
export declare class PluginHost {
  private readonly app
  constructor(app: PluginHostApplicationWithExposures)
  get services(): ServiceProvider
  get hostContext(): HostBuilderContext
  start(): Promise<void>
  stop(): Promise<void>
  dispose(): Promise<void>
  run(): Promise<() => Promise<void>>
}
export declare function createPluginHostBuilder(
  ctx: PluginRuntimeContext,
  settings?: HostBuilderSettings
): ExamAwareHostBuilder
export declare const Host: {
  createApplicationBuilder: typeof createPluginHostBuilder
}
export declare function defineExamAwarePlugin(
  setup: (builder: ExamAwareHostBuilder) => Promise<void> | void
): (ctx: PluginRuntimeContext) => Promise<() => Promise<void>>
//# sourceMappingURL=hostBuilder.d.ts.map
