import type { App } from 'vue'
import type { Router } from 'vue-router'
import type { Pinia } from 'pinia'

export type ThemeMode = 'light' | 'dark' | 'auto'

export interface AppContext {
  router?: Router
  pinia?: Pinia
  provides: Record<string | symbol, unknown>
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
