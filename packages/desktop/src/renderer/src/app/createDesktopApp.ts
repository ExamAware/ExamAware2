import { createApp } from 'vue'
import type { DesktopAppOptions, AppContext, AppModule, DesktopAppInstance } from './types'
import AppRoot from '../App.vue'

export async function createDesktopApp(options: DesktopAppOptions = {}): Promise<DesktopAppInstance> {
  const app = createApp(AppRoot)
  const ctx: AppContext = { provides: {} }

  const modules: AppModule[] = options.modules || []
  for (const m of modules) {
    // eslint-disable-next-line no-await-in-loop
    await m.install(app, ctx)
  }

  const destroy = async () => {
    for (let i = modules.length - 1; i >= 0; i--) {
      const m = modules[i]
      if (m.uninstall) {
        // eslint-disable-next-line no-await-in-loop
        await m.uninstall(app, ctx)
      }
    }
  }

  return { app, ctx, destroy }
}
