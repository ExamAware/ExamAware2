import type {
  ConfigureHostDelegate,
  HostBuilderContext,
  HostExposure,
  HostedService,
  PluginMiddleware,
  ServiceToken
} from './types';
import { ServiceProvider } from './serviceCollection';
export declare class PluginHostApplication {
  private readonly context;
  private readonly provider;
  private readonly configureDelegates;
  private readonly middleware;
  private readonly hostedTokens;
  private hostedInstances;
  private hostDisposers;
  private started;
  constructor(
    context: HostBuilderContext, // Host构建器上下文
    provider: ServiceProvider, // 服务提供者
    configureDelegates: ConfigureHostDelegate[], // 配置委托
    middleware: PluginMiddleware[], // 中间件
    hostedTokens: ServiceToken<HostedService>[]
  );
  withExposures(exposures: HostExposure[]): PluginHostApplicationWithExposures;
  start(): Promise<void>;
  stop(): Promise<void>;
  dispose(): Promise<void>;
  get services(): ServiceProvider;
  get hostContext(): HostBuilderContext;
  private createApplicationContext;
  private bootstrapHostedServices;
  private disposeHostedServices;
  private dispatch;
}
export declare class PluginHostApplicationWithExposures {
  private readonly app;
  private readonly exposures;
  private readonly exposureDisposers;
  constructor(app: PluginHostApplication, exposures: HostExposure[]);
  start(): Promise<void>;
  stop(): Promise<void>;
  dispose(): Promise<void>;
  get services(): ServiceProvider;
  get hostContext(): HostBuilderContext;
  private registerExposures;
  private disposeExposures;
}
//# sourceMappingURL=hostApplication.d.ts.map
