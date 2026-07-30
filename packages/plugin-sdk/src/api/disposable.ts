export type PluginAwaitable<T> = T | Promise<T>;

export interface Disposable {
  dispose(): PluginAwaitable<void>;
}

export type DisposableLike = Disposable | (() => PluginAwaitable<void>);

export interface PluginDisposableScope extends Disposable {
  readonly disposed: boolean;
  add(disposable: DisposableLike): Disposable;
  defer(dispose: () => PluginAwaitable<void>): Disposable;
}

export function toDisposable(disposable: DisposableLike): Disposable {
  return typeof disposable === 'function' ? { dispose: disposable } : disposable;
}
