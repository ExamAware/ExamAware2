import type { BrowserWindowConstructorOptions } from 'electron';
import type { PluginRuntimeContext } from './types';
export interface CreateEauiWindowOptions {
  routeId?: string;
  electronWindow?: {
    width?: number;
    height?: number;
    title?: string;
    resizable?: boolean;
    fullscreenable?: boolean;
    show?: boolean;
    extraOptions?: BrowserWindowConstructorOptions;
  };
  buildUi: (ctx: PluginRuntimeContext) => void;
}
export declare function createEauiWindowForPlugin(
  ctx: PluginRuntimeContext,
  options: CreateEauiWindowOptions
): Promise<void>;
//# sourceMappingURL=eauiWindowHelper.d.ts.map
