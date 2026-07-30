import { describe, expect, it } from 'vitest';
import {
  PluginApiError,
  defineMainPlugin,
  type Disposable,
  type DisposableLike,
  type MainPluginContext,
  type PluginDisposableScope
} from '../src';

class TestScope implements PluginDisposableScope {
  private readonly values: Disposable[] = [];
  disposed = false;

  add(value: DisposableLike) {
    const disposable = typeof value === 'function' ? { dispose: value } : value;
    this.values.push(disposable);
    return disposable;
  }

  defer(dispose: () => void | Promise<void>) {
    return this.add(dispose);
  }

  async dispose() {
    if (this.disposed) return;
    this.disposed = true;
    const errors: unknown[] = [];
    while (this.values.length) {
      try {
        await this.values.pop()?.dispose();
      } catch (error) {
        errors.push(error);
      }
    }
    if (errors.length) throw errors[0];
  }
}

const contextWith = (scope: PluginDisposableScope) => ({ scope }) as unknown as MainPluginContext;

describe('V2 plugin lifecycle', () => {
  it('publishes process metadata and disposes activation and scoped resources once', async () => {
    const calls: string[] = [];
    const scope = new TestScope();
    const entry = defineMainPlugin({
      onLoad: () => calls.push('load'),
      activate: (context) => {
        calls.push('activate');
        context.scope.defer(() => calls.push('resource-1'));
        context.scope.defer(() => calls.push('resource-2'));
        return () => calls.push('activation-disposable');
      },
      onReady: () => calls.push('ready'),
      deactivate: () => calls.push('deactivate'),
      onUnload: () => calls.push('unload')
    });

    expect(entry.apiVersion).toBe(2);
    expect(entry.process).toBe('main');
    const dispose = await entry(contextWith(scope));
    await dispose?.();
    await dispose?.();

    expect(calls).toEqual([
      'load',
      'activate',
      'ready',
      'deactivate',
      'activation-disposable',
      'resource-2',
      'resource-1',
      'unload'
    ]);
  });

  it('runs every cleanup phase even when earlier phases fail', async () => {
    const calls: string[] = [];
    const scope = new TestScope();
    const entry = defineMainPlugin({
      activate: (context) => {
        context.scope.defer(() => calls.push('scoped-cleanup'));
        return () => {
          calls.push('activation-cleanup');
          throw new Error('activation cleanup failed');
        };
      },
      deactivate: () => {
        calls.push('deactivate');
        throw new Error('deactivate failed');
      },
      onUnload: () => calls.push('unload'),
      onError: (error) => calls.push(`error:${error.message}`)
    });

    const dispose = await entry(contextWith(scope));
    await expect(dispose?.()).rejects.toMatchObject<Partial<PluginApiError>>({
      name: 'PluginApiError',
      domain: 'lifecycle',
      message: 'deactivate failed'
    });
    expect(calls).toEqual([
      'deactivate',
      'activation-cleanup',
      'scoped-cleanup',
      'unload',
      'error:deactivate failed'
    ]);
  });

  it('cleans the scope and unloads when activation fails', async () => {
    const calls: string[] = [];
    const scope = new TestScope();
    const entry = defineMainPlugin({
      activate: (context) => {
        context.scope.defer(() => calls.push('scoped-cleanup'));
        throw new PluginApiError('invalid-config', 'demo', 'bad config');
      },
      onUnload: () => calls.push('unload'),
      onError: (error) => calls.push(`error:${error.code}`)
    });

    await expect(entry(contextWith(scope))).rejects.toMatchObject({
      code: 'invalid-config',
      domain: 'demo'
    });
    expect(calls).toEqual(['scoped-cleanup', 'unload', 'error:invalid-config']);
  });
});
