import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { Pinia } from 'pinia'

export type ThemeMode = 'light' | 'dark' | 'auto'

export interface AppContext {
  router?: Router
  pinia?: Pinia
  provides: Record<string | symbol, unknown>
  // disposable/context APIs
  effect?: (d: () => void) => void
  disposable?: (fn: () => void | (() => void) | Promise<void | (() => void)>) => Promise<void>
  provide?: (name: string | symbol, value: unknown) => void
  inject?: <T = unknown>(name: string | symbol) => T | undefined
  // optional sugar helpers
  addHomeButton?: (meta: any) => Promise<void>
  addPage?: (meta: any) => Promise<void>
  // event & store helpers
  on?: (target: any, event: string, listener: (...args: any[]) => any, options?: any) => void
  piniaSubscribe?: (store: { $subscribe: Function }, cb: (...args: any[]) => any, options?: any) => void
}

export interface AppModule {
  name: string
  install: (app: App, ctx: AppContext) => void | Promise<void>
  uninstall?: (app: App, ctx: AppContext) => void | Promise<void>
}

export interface DesktopAppOptions {
  modules?: AppModule[]
}

export interface DesktopAppInstance {
  app: App
  ctx: AppContext
  destroy: () => Promise<void>
}
