import { createApp } from 'vue'
import type { DesktopAppOptions, AppContext, AppModule, DesktopAppInstance } from './types'
import { DisposerGroup } from '../runtime/disposable'
import { initDesktopApi } from '../runtime/desktopApi'
import AppRoot from '../App.vue'

export async function createDesktopApp(
  options: DesktopAppOptions = {}
): Promise<DesktopAppInstance> {
  const app = createApp(AppRoot)
  const ctx: AppContext = { provides: {} }

  // minimal context implementation (renderer)
  const group = new DisposerGroup()
  ctx.effect = (d: () => void) => group.add(d)
  ctx.disposable = async (fn) => {
    const res = await fn()
    if (typeof res === 'function') group.add(res)
  }
  ctx.provide = (name, value) => {
    ctx.provides[name as any] = value
    app.provide(name as any, value)
  }
  ctx.inject = (name) =>
    (ctx.provides[name as any] as any) ?? (app._context.provides[name as any] as any)
  // event helper: supports DOM/EventTarget or Node-style emitter
  ctx.on = (target: any, event: string, listener: (...args: any[]) => any, options?: any) => {
    if (!target) return
    if (typeof target.addEventListener === 'function') {
      target.addEventListener(event, listener, options)
      group.add(() => target.removeEventListener(event, listener, options))
      return
    }
    if (typeof target.on === 'function') {
      target.on(event, listener)
      group.add(() =>
        target.off ? target.off(event, listener) : target.removeListener?.(event, listener)
      )
      return
    }
  }
  ctx.piniaSubscribe = (store: any, cb: any, options?: any) => {
    if (!store || typeof store.$subscribe !== 'function') return
    const unsub = store.$subscribe(cb, options)
    group.add(() => {
      try {
        unsub?.()
      } catch {}
    })
  }

  const modules: AppModule[] = options.modules || []
  for (const m of modules) {
    // eslint-disable-next-line no-await-in-loop
    await m.install(app, ctx)
  }

  initDesktopApi(ctx, app)

  const destroy = async () => {
    for (let i = modules.length - 1; i >= 0; i--) {
      const m = modules[i]
      if (m.uninstall) {
        // eslint-disable-next-line no-await-in-loop
        await m.uninstall(app, ctx)
      }
    }
    // dispose renderer root context effects
    group.disposeAll()
  }

  return { app, ctx, destroy }
}
