import type { App } from 'vue'
import type { AppModule } from '../types'
import type { PagesRegistry, PageMeta } from './pages'
import router from '@renderer/router'

export const routerRegistrarModule: AppModule = {
  name: 'router-registrar',
  install(app: App, ctx) {
    const pages: PagesRegistry = (ctx.provides.pages as PagesRegistry) || (app.config.globalProperties as any).$pages
    if (!pages) return

    const ensureRoute = (meta: PageMeta) => {
      if (!meta.routeName || !meta.component) return
      // 检查是否已存在
      const exists = router.hasRoute(meta.routeName)
      if (!exists) {
        router.addRoute({ path: meta.path, name: meta.routeName, component: meta.component })
      }
    }

    const removeRoute = (meta: PageMeta) => {
      if (!meta.routeName) return
      if (router.hasRoute(meta.routeName)) router.removeRoute(meta.routeName)
    }

    // 首次注册现有页面
    pages.list().forEach(ensureRoute)

    // 订阅后续变化（简化实现：全量对比）
    let lastIds = new Set(pages.list().map((p) => p.id))
    const unsub = pages.subscribe(() => {
      const now = pages.list()
      const nowIds = new Set(now.map((p) => p.id))
      // 新增
      now.forEach(ensureRoute)
      // 删除
      lastIds.forEach((id) => {
        if (!nowIds.has(id)) {
          const meta = { id } as any
          removeRoute(meta)
        }
      })
      lastIds = nowIds
    })

    ;(ctx.provides as any).__routerRegistrarUnsub = unsub
  },
  uninstall(_app: App, ctx) {
    const unsub = (ctx.provides as any).__routerRegistrarUnsub as undefined | (() => void)
    if (unsub) unsub()
  }
}
