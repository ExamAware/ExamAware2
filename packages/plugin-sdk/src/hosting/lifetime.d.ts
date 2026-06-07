import type { Awaitable, Disposer, PluginHostApplicationLifetime } from './types';
type LoggerLike = {
  error: (...args: any[]) => void;
};
export declare class DefaultHostApplicationLifetime implements PluginHostApplicationLifetime {
  private readonly logger;
  constructor(logger?: LoggerLike);
  private readonly started;
  private readonly stopping;
  private readonly stopped;
  onStarted(handler: () => Awaitable<void>): Disposer;
  onStopping(handler: () => Awaitable<void>): Disposer;
  onStopped(handler: () => Awaitable<void>): Disposer;
  notifyStarted(): Promise<void>;
  notifyStopping(): Promise<void>;
  notifyStopped(): Promise<void>;
  private dispatch;
}
export {};
//# sourceMappingURL=lifetime.d.ts.map
