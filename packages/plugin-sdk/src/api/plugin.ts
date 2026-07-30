import type { ExamAwareMainApi, ExamAwareRendererApi, PluginV2Logger } from './contracts';
import type { DisposableLike, PluginAwaitable, PluginDisposableScope } from './disposable';
import { PluginApiError } from './errors';
import type { PluginPermissionApi } from './permissions';

export type PluginWindowKind =
  | 'main'
  | 'editor'
  | 'player'
  | 'settings'
  | 'cast'
  | 'logs'
  | 'plugin-store'
  | 'tray'
  | 'plugin';

export interface PluginIdentity {
  name: string;
  displayName?: string;
  version: string;
  apiVersion: 2;
}

interface PluginContextBase<TSettings extends object> {
  readonly plugin: PluginIdentity;
  readonly logger: PluginV2Logger;
  readonly permissions: PluginPermissionApi;
  readonly scope: PluginDisposableScope;
  readonly initialSettings: Readonly<TSettings>;
}

export interface MainPluginContext<
  TSettings extends object = Record<string, unknown>
> extends PluginContextBase<TSettings> {
  readonly process: 'main';
  readonly api: ExamAwareMainApi<TSettings>;
}

export interface RendererPluginContext<
  TSettings extends object = Record<string, unknown>
> extends PluginContextBase<TSettings> {
  readonly process: 'renderer';
  readonly window: { id?: number; kind: PluginWindowKind; route: string };
  readonly api: ExamAwareRendererApi<TSettings>;
}

export interface PluginLifecycle<TContext> {
  onLoad?(context: TContext): PluginAwaitable<void>;
  activate(context: TContext): PluginAwaitable<void | DisposableLike>;
  onReady?(context: TContext): PluginAwaitable<void>;
  deactivate?(context: TContext): PluginAwaitable<void>;
  onUnload?(context: TContext): PluginAwaitable<void>;
  onError?(error: PluginApiError, context: TContext): PluginAwaitable<void>;
}

export interface PluginEntry<TContext> {
  (context: TContext): Promise<void | (() => Promise<void>)>;
  readonly apiVersion: 2;
  readonly process: 'main' | 'renderer';
}

function definePlugin<TContext extends { scope: PluginDisposableScope }>(
  process: 'main' | 'renderer',
  lifecycle: PluginLifecycle<TContext>
): PluginEntry<TContext> {
  const entry = async (context: TContext) => {
    let activation: DisposableLike | void;
    try {
      await lifecycle.onLoad?.(context);
      activation = await lifecycle.activate(context);
      await lifecycle.onReady?.(context);
    } catch (error) {
      const errors: unknown[] = [error];
      await collectLifecycleError(errors, () => context.scope.dispose());
      await collectLifecycleError(errors, () => lifecycle.onUnload?.(context));
      await notifyLifecycleError(lifecycle, context, errors);
      throw mergeLifecycleErrors(errors);
    }

    let disposed = false;
    return async () => {
      if (disposed) return;
      disposed = true;
      const errors: unknown[] = [];
      await collectLifecycleError(errors, () => lifecycle.deactivate?.(context));
      await collectLifecycleError(errors, async () => {
        if (typeof activation === 'function') await activation();
        else await activation?.dispose();
      });
      await collectLifecycleError(errors, () => context.scope.dispose());
      await collectLifecycleError(errors, () => lifecycle.onUnload?.(context));
      if (!errors.length) return;
      await notifyLifecycleError(lifecycle, context, errors);
      throw mergeLifecycleErrors(errors);
    };
  };
  Object.defineProperties(entry, {
    apiVersion: { value: 2, enumerable: true },
    process: { value: process, enumerable: true }
  });
  return entry as PluginEntry<TContext>;
}

async function collectLifecycleError(
  errors: unknown[],
  action: () => PluginAwaitable<void | undefined>
) {
  try {
    await action();
  } catch (error) {
    errors.push(error);
  }
}

async function notifyLifecycleError<TContext>(
  lifecycle: PluginLifecycle<TContext>,
  context: TContext,
  errors: unknown[]
) {
  const primary = PluginApiError.from(errors[0], 'lifecycle');
  await collectLifecycleError(errors, () => lifecycle.onError?.(primary, context));
}

function mergeLifecycleErrors(errors: unknown[]) {
  const primary = PluginApiError.from(errors[0], 'lifecycle');
  if (errors.length === 1) return primary;
  return new PluginApiError(
    primary.code,
    primary.domain,
    primary.message,
    {
      primary: primary.details,
      additionalErrors: errors
        .slice(1)
        .map((error) => PluginApiError.from(error, 'lifecycle').toJSON())
    },
    primary
  );
}

export const defineMainPlugin = <TSettings extends object = Record<string, unknown>>(
  lifecycle: PluginLifecycle<MainPluginContext<TSettings>>
) => definePlugin('main', lifecycle);

export const defineRendererPlugin = <TSettings extends object = Record<string, unknown>>(
  lifecycle: PluginLifecycle<RendererPluginContext<TSettings>>
) => definePlugin('renderer', lifecycle);

export function isPluginEntry(value: unknown): value is PluginEntry<MainPluginContext> {
  return (
    typeof value === 'function' &&
    (value as Partial<PluginEntry<MainPluginContext>>).apiVersion === 2 &&
    ((value as Partial<PluginEntry<MainPluginContext>>).process === 'main' ||
      (value as Partial<PluginEntry<MainPluginContext>>).process === 'renderer')
  );
}
