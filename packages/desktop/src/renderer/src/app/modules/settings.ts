import { markRaw, type App, type Component } from 'vue'
import type { AppModule } from '../types'

export interface SettingsPageMeta {
  id: string
  label: string
  icon?: string
  order?: number
  // 懒加载组件
  component: () => Promise<Component | any>
}

export interface RegisteredSettingsPage extends SettingsPageMeta {
  path: string
}

export class SettingsRegistry {
  private pages = new Map<string, RegisteredSettingsPage>()
  private listeners = new Set<() => void>()

  register(meta: SettingsPageMeta) {
    const path = `/settings/${meta.id}`
    const component =
      typeof meta.component === 'function' ? meta.component : markRaw(meta.component)
    const full: RegisteredSettingsPage = { order: 0, ...meta, component, path }
    this.pages.set(meta.id, full)
    this.notify()
    return () => {
      // 反注册
      if (this.pages.has(meta.id)) {
        this.pages.delete(meta.id)
        this.notify()
      }
    }
  }

  unregister(id: string) {
    this.pages.delete(id)
    this.notify()
  }

  get(id: string): RegisteredSettingsPage | undefined {
    return this.pages.get(id)
  }

  list(): RegisteredSettingsPage[] {
    return Array.from(this.pages.values()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  }

  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private notify() {
    this.listeners.forEach((l) => {
      try {
        l()
      } catch {}
    })
  }
}

export const settingsModule: AppModule = {
  name: 'settings',
  install(app: App, ctx) {
    const registry = new SettingsRegistry()

    // 注册api
    ;(ctx as any).addSettingsPage = async (meta: SettingsPageMeta) => {
      const disposer = registry.register(meta)
      const path = `/settings/${meta.id}`
      if (ctx.disposable) await ctx.disposable(() => disposer)
      return { path, dispose: disposer }
    }
    ;(app.config.globalProperties as any).$settings = registry
    ctx.provides.settings = registry
    if (ctx.provide) ctx.provide('settings', registry)

    if ((ctx as any).addSettingsPage) {
      ;(ctx as any).addSettingsPage({
        id: 'basic',
        label: '基本',
        icon: 'setting',
        order: 0,
        component: () => import('@renderer/views/settings/BasicSettings.vue')
      })
      ;(ctx as any).addSettingsPage({
        id: 'appearance',
        label: '外观',
        icon: 'palette',
        order: 1,
        component: () => import('@renderer/views/settings/AppearanceSettings.vue')
      })
      ;(ctx as any).addSettingsPage({
        id: 'player',
        label: '播放器',
        icon: 'play-circle',
        order: 2,
        component: () => import('@renderer/views/settings/PlayerSettings.vue')
      })
      ;(ctx as any).addSettingsPage({
        id: 'time',
        label: '时间同步',
        icon: 'time',
        order: 3,
        component: () => import('@renderer/views/settings/TimeSettings.vue')
      })
      ;(ctx as any).addSettingsPage({
        id: 'plugins',
        label: '插件',
        icon: 'component',
        order: 4,
        component: () => import('@renderer/views/settings/PluginSettings.vue')
      })
      ;(ctx as any).addSettingsPage({
        id: 'about',
        label: '关于',
        icon: 'info-circle',
        order: 99,
        component: () => import('@renderer/views/settings/AboutSettings.vue')
      })
    } else {
      registry.register({
        id: 'basic',
        label: '基本',
        icon: 'setting',
        order: 0,
        component: () => import('@renderer/views/settings/BasicSettings.vue')
      })
      registry.register({
        id: 'appearance',
        label: '外观',
        icon: 'palette',
        order: 1,
        component: () => import('@renderer/views/settings/AppearanceSettings.vue')
      })
      registry.register({
        id: 'player',
        label: '播放器',
        icon: 'play-circle',
        order: 2,
        component: () => import('@renderer/views/settings/PlayerSettings.vue')
      })
      registry.register({
        id: 'time',
        label: '时间同步',
        icon: 'time',
        order: 3,
        component: () => import('@renderer/views/settings/TimeSettings.vue')
      })
      registry.register({
        id: 'plugins',
        label: '插件',
        icon: 'component',
        order: 4,
        component: () => import('@renderer/views/settings/PluginSettings.vue')
      })
      registry.register({
        id: 'about',
        label: '关于',
        icon: 'info-circle',
        order: 99,
        component: () => import('@renderer/views/settings/AboutSettings.vue')
      })
    }
  },
  uninstall(app: App, ctx) {
    if ((app.config.globalProperties as any).$settings) {
      delete (app.config.globalProperties as any).$settings
    }
    delete (ctx as any).addSettingsPage
  }
}
