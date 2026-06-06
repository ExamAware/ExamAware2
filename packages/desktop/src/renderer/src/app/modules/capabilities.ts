import type { App } from 'vue'
import type { AppModule } from '../types'

type ElectronAPI = Window['electron']
type WindowAPI = Window['electronAPI']
type BackendAPI = Window['api']

export interface CapabilitiesService {
  electron: ElectronAPI
  window: WindowAPI
  backend: BackendAPI
}

export const capabilitiesModule: AppModule = {
  name: 'capabilities',
  install(app: App, ctx) {
    const service: CapabilitiesService = {
      electron: window.electron,
      window: window.electronAPI,
      backend: window.api
    }
    // 提供全局访问
    ;(app.config.globalProperties as any).$cap = service
    ctx.provides.capabilities = service
  },
  uninstall(app: App) {
    // 清理全局引用
    if ((app.config.globalProperties as any).$cap) {
      delete (app.config.globalProperties as any).$cap
    }
  }
}
