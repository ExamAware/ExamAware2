import type { DeepLinkManager } from '../runtime/deepLink'
import type { DeepLinkPayload } from '../../shared/types/deepLink'

interface DeepLinkRoute {
  name: string
  propertyKey: string | symbol
}

const ROUTES = Symbol('deep_link_routes')

function addRoute(target: any, route: DeepLinkRoute) {
  const ctor = target.constructor as any
  if (!ctor[ROUTES]) ctor[ROUTES] = [] as DeepLinkRoute[]
  ;(ctor[ROUTES] as DeepLinkRoute[]).push(route)
}

export function DeepLink(name: string) {
  return (target: any, propertyKey: string | symbol) => addRoute(target, { name, propertyKey })
}

export function getDeepLinkRoutes(instance: any): DeepLinkRoute[] {
  return ((instance?.constructor as any)?.[ROUTES] as DeepLinkRoute[]) || []
}

export function applyDeepLinkControllers(controllers: any[], manager: DeepLinkManager): () => void {
  const disposers: Array<() => void> = []
  controllers.forEach((controller) => {
    const routes = getDeepLinkRoutes(controller)
    routes.forEach((route) => {
      const handler = (controller as any)[route.propertyKey].bind(controller)
      const dispose = manager.registerHandler(route.name, (payload: DeepLinkPayload) =>
        handler(payload)
      )
      disposers.push(dispose)
    })
  })
  return () => {
    for (let i = disposers.length - 1; i >= 0; i--) {
      try {
        disposers[i]()
      } catch {}
    }
  }
}
