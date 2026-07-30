import type { BrowserWindowConstructorOptions } from 'electron'
import type { PluginRuntimeContext } from './types'

export interface CreateEauiWindowOptions {
  routeId?: string
  electronWindow?: {
    width?: number
    height?: number
    title?: string
    resizable?: boolean
    fullscreenable?: boolean
    show?: boolean
    extraOptions?: BrowserWindowConstructorOptions
  }
  buildUi: (ctx: PluginRuntimeContext) => void
}

const defaultRoute = 'plugin-eaui-window'

// Helper: open a dedicated Electron window (via desktopApi.ui.windows) and build eaui UI only inside it.
export async function createEauiWindowForPlugin(
  ctx: PluginRuntimeContext,
  options: CreateEauiWindowOptions
) {
  if (ctx.app !== 'renderer') return

  const routeId = options.routeId ?? defaultRoute
  const hashMarker = `#/${routeId}`
  const loc = (typeof globalThis !== 'undefined' && (globalThis as any).location) || null
  const isPluginWindow = !!loc && typeof loc.hash === 'string' && loc.hash.includes(hashMarker)

  // In main renderer: spawn the dedicated Electron window, then bail out.
  if (!isPluginWindow) {
    try {
      const extraOptions: BrowserWindowConstructorOptions = {
        frame: false,
        titleBarStyle: 'hidden',
        titleBarOverlay: { height: 36 },
        ...(options.electronWindow?.extraOptions ?? {})
      }

      const opened = await (ctx as any)?.desktopApi?.ui?.windows?.open?.({
        id: routeId,
        route: routeId,
        options: {
          width: options.electronWindow?.width ?? 480,
          height: options.electronWindow?.height ?? 420,
          title: options.electronWindow?.title ?? 'Plugin Window',
          resizable: options.electronWindow?.resizable ?? true,
          fullscreenable: options.electronWindow?.fullscreenable ?? false,
          show: options.electronWindow?.show ?? true,
          ...extraOptions
        }
      })
      if (!opened) {
        ctx.logger.warn('[eaui helper] desktopApi.ui.windows.open unavailable')
      }
    } catch (err) {
      ctx.logger.error('[eaui helper] failed to open plugin window', err)
    }
    return
  }

  options.buildUi(ctx)
}
