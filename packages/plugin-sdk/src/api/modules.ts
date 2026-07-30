import type { DisposableLike, PluginAwaitable } from './disposable';
import type { PluginPermission } from './permissions';
import type { PluginApiModuleToken } from './tokens';

export type PluginApiModuleScope = 'main' | 'renderer' | 'both';

export interface PluginApiModuleContext {
  readonly pluginName: string;
  readonly process: 'main' | 'renderer';
  hasPermission(permission: PluginPermission): boolean;
  requirePermission(permission: PluginPermission): void;
  resolve<TApi extends object>(token: PluginApiModuleToken<TApi>): TApi;
  own(disposable: DisposableLike): void;
}

export interface PluginApiModule<TApi extends object> {
  readonly token: PluginApiModuleToken<TApi>;
  readonly scope: PluginApiModuleScope;
  readonly dependencies?: readonly PluginApiModuleToken<object>[];
  readonly permissions?: readonly PluginPermission[];
  create(context: PluginApiModuleContext): PluginAwaitable<TApi>;
}

export function definePluginApiModule<TApi extends object>(
  module: PluginApiModule<TApi>
): PluginApiModule<TApi> {
  return Object.freeze(module);
}
