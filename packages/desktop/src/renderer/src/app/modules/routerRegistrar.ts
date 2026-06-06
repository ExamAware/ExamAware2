import type { App } from 'vue'
import type { AppModule } from '../types'
import type { PagesRegistry, PageMeta } from './pages'
import router from '@renderer/router'

export const routerRegistrarModule: AppModule = {
  name: 'router-registrar',
  install(app: App, ctx) {
    const pages: PagesRegistry =
      (ctx.provides.pages as PagesRegistry) || (app.config.globalProperties as any).$pages
    if (!pages) return

    // track added routes, map id -> routeName for removal
    const idToRoute = new Map<string, string>()

    const ensureRoute = (meta: PageMeta) => {
      if (!meta.routeName || !meta.component) return
      // 检查是否已存在
      const exists = router.hasRoute(meta.routeName)
      if (!exists) {
        router.addRoute({ path: meta.path, name: meta.routeName, component: meta.component })
        idToRoute.set(meta.id, meta.routeName)
      }
    }

    const removeRoute = (meta: PageMeta) => {
      const routeName = meta.routeName || idToRoute.get(meta.id)
      if (!routeName) return
      if (router.hasRoute(routeName)) router.removeRoute(routeName)
      idToRoute.delete(meta.id)
    }

    // 首次注册现有页面
    pages.list().forEach(ensureRoute)

    // 订阅后续变化（简化实现：全量对比）
    let lastList = pages.list()
    let lastIds = new Set(lastList.map((p) => p.id))
    const unsub = pages.subscribe(() => {
      const now = pages.list()
      const nowIds = new Set(now.map((p) => p.id))
      // 新增
      now.forEach(ensureRoute)
      // 删除
      lastIds.forEach((id) => {
        if (!nowIds.has(id)) {
          const old = lastList.find((p) => p.id === id)
          if (old) removeRoute(old)
        }
      })
      lastList = now
      lastIds = nowIds
    })

    ;(ctx.provides as any).__routerRegistrar = { unsub, idToRoute }
  },
  uninstall(_app: App, ctx) {
    const bag = (ctx.provides as any).__routerRegistrar as
      | undefined
      | { unsub: () => void; idToRoute: Map<string, string> }
    if (bag?.unsub) bag.unsub()
    if (bag?.idToRoute) {
      // remove all tracked routes
      for (const [, routeName] of bag.idToRoute) {
        if (router.hasRoute(routeName)) router.removeRoute(routeName)
      }
      bag.idToRoute.clear()
    }
  }
}
