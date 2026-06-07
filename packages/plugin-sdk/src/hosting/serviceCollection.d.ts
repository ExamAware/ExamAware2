import { DefaultHostApplicationLifetime } from './lifetime';
import type {
  PluginRuntimeContext,
  ServiceDescriptor,
  ServiceFactoryOrValue,
  ServiceToken
} from './types';
export declare class ServiceCollection {
  private readonly ctx;
  private readonly descriptors;
  private readonly hostLifetime;
  constructor(ctx: PluginRuntimeContext);
  getLifetime(): DefaultHostApplicationLifetime;
  addSingleton<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this;
  addScoped<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this;
  addTransient<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this;
  tryAddSingleton<T>(token: ServiceToken<T>, impl: ServiceFactoryOrValue<T>): this;
  has(token: ServiceToken): boolean;
  clear(): void;
  buildServiceProvider(): ServiceProvider;
  private register;
  private normalizeFactory;
  private instantiateClass;
}
export declare class ServiceProvider {
  private readonly ctx;
  private readonly descriptors;
  private readonly isScope;
  private readonly singletonCache;
  private readonly scopedCache;
  private readonly singletonCleanup;
  private readonly scopedCleanup;
  private readonly root;
  constructor(
    ctx: PluginRuntimeContext,
    descriptors: Map<ServiceToken, ServiceDescriptor>,
    root?: ServiceProvider | null,
    isScope?: boolean
  );
  get<T>(token: ServiceToken<T>): T;
  createScope(): ServiceProvider;
  dispose(): Promise<void>;
  private resolveSingleton;
  private resolveScoped;
  private instantiate;
  private resolveFromHost;
  private extractDisposer;
  private flushCleanup;
}
//# sourceMappingURL=serviceCollection.d.ts.map
