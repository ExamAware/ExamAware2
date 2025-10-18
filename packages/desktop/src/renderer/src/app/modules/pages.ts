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
    // 默认页面注册
  registry.register({ id: 'home', label: '主页', path: '/mainpage', icon: 'home', order: 1, group: 'sidebar', routeName: 'mainpage', component: () => import('@renderer/views/home/MainpageView.vue') })
  registry.register({ id: 'playerhome', label: '放映器', path: '/playerhome', icon: 'play-circle', order: 2, group: 'sidebar', routeName: 'playerhome', component: () => import('@renderer/views/home/PlayerHomeView.vue') })
  registry.register({ id: 'ntpsettings', label: 'NTP 设置', path: '/ntpsettings', icon: 'time', order: 3, group: 'sidebar', routeName: 'ntpsettings', component: () => import('@renderer/views/home/ntpSettingsPage.vue') })

    ;(app.config.globalProperties as any).$pages = registry
    ctx.provides.pages = registry
  },
  uninstall(app: App) {
    if ((app.config.globalProperties as any).$pages) {
      delete (app.config.globalProperties as any).$pages
    }
  }
}
