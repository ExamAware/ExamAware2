import type { App } from 'vue'
import type { AppModule } from '../types'

export interface PageMeta {
  id: string
  label: string
  path: string
  icon?: string
  group?: 'sidebar' | 'hidden' | 'toolbar'
  order?: number
  visible?: boolean
  routeName?: string
  component?: () => Promise<any>
}

export class PagesRegistry {
  private pages = new Map<string, PageMeta>()
  private listeners = new Set<() => void>()

  register(meta: PageMeta) {
    this.pages.set(meta.id, { visible: true, group: 'sidebar', order: 0, ...meta })
    this.notify()
    return () => {
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

  get(id: string): PageMeta | undefined {
    return this.pages.get(id)
  }

  list(filter?: Partial<PageMeta>): PageMeta[] {
    let arr = Array.from(this.pages.values())
    if (filter) {
      arr = arr.filter((p) => Object.entries(filter).every(([k, v]) => (p as any)[k] === v))
    }
    return arr.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
  }

  listSidebar(): PageMeta[] {
    return this.list({ group: 'sidebar', visible: true })
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

export const pagesModule: AppModule = {
  name: 'pages',
  install(app: App, ctx) {
    const registry = new PagesRegistry()
    // helpers
    const add = (meta: PageMeta) => registry.register(meta)
    ctx.addPage = async (meta: PageMeta) => {
      if (ctx.disposable) await ctx.disposable(() => registry.register(meta))
      else add(meta)
    }

    // 默认页面注册
    ;(ctx.disposable
      ? [
          {
            id: 'home',
            label: '主页',
            path: '/mainpage',
            icon: 'home',
            order: 1,
            group: 'sidebar' as const,
            routeName: 'mainpage',
            component: () => import('@renderer/views/home/MainpageView.vue')
          },
          {
            id: 'playerhome',
            label: '放映器',
            path: '/playerhome',
            icon: 'play-circle',
            order: 2,
            group: 'sidebar' as const,
            routeName: 'playerhome',
            component: () => import('@renderer/views/home/PlayerHomeView.vue')
          },
          {
            id: 'discover',
            label: '发现',
            path: '/discover',
            icon: 'search',
            order: 3,
            group: 'sidebar' as const,
            routeName: 'discover',
            component: () => import('@renderer/views/home/DiscoverView.vue')
          },
          {
            id: 'ntpsettings',
            label: 'NTP 设置',
            path: '/ntpsettings',
            icon: 'time',
            order: 4,
            group: 'sidebar' as const,
            visible: false,
            routeName: 'ntpsettings',
            component: () => import('@renderer/views/home/ntpSettingsPage.vue')
          }
        ]
      : []
    ).forEach((meta) => ctx.disposable!(() => registry.register(meta)))

    if (!ctx.disposable) {
      // fallback when ctx.disposable not available (should not happen after our changes)
      add({
        id: 'home',
        label: '主页',
        path: '/mainpage',
        icon: 'home',
        order: 1,
        group: 'sidebar',
        routeName: 'mainpage',
        component: () => import('@renderer/views/home/MainpageView.vue')
      })
      add({
        id: 'playerhome',
        label: '放映器',
        path: '/playerhome',
        icon: 'play-circle',
        order: 2,
        group: 'sidebar',
        routeName: 'playerhome',
        component: () => import('@renderer/views/home/PlayerHomeView.vue')
      })
      add({
        id: 'discover',
        label: '发现',
        path: '/discover',
        icon: 'search',
        order: 3,
        group: 'sidebar',
        routeName: 'discover',
        component: () => import('@renderer/views/home/DiscoverView.vue')
      })
      add({
        id: 'ntpsettings',
        label: 'NTP 设置',
        path: '/ntpsettings',
        icon: 'time',
        order: 4,
        group: 'sidebar',
        visible: false,
        routeName: 'ntpsettings',
        component: () => import('@renderer/views/home/ntpSettingsPage.vue')
      })
    }

    ;(app.config.globalProperties as any).$pages = registry
    ctx.provides.pages = registry
    if (ctx.provide) ctx.provide('pages', registry)
  },
  uninstall(app: App) {
    if ((app.config.globalProperties as any).$pages) {
      delete (app.config.globalProperties as any).$pages
    }
  }
}
