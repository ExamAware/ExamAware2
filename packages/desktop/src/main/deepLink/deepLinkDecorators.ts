import type { DeepLinkManager, DeepLinkMiddleware, DeepLinkRouteOptions } from './deepLinkManager'
import type { DeepLinkHandler, DeepLinkPayload } from '../../shared/types/deepLink'

interface DeepLinkRoute {
  name: string
  propertyKey: string | symbol
  options?: DeepLinkRouteOptions
}

interface DeepLinkMiddlewareDefinition {
  propertyKey: string | symbol
}

const ROUTES = Symbol('deep_link_routes')
const MIDDLEWARE = Symbol('deep_link_middleware')

type DeepLinkControllerMethod = (payload: DeepLinkPayload) => ReturnType<DeepLinkHandler>
type DeepLinkMiddlewareMethod = DeepLinkMiddleware

function addRoute(target: object, route: DeepLinkRoute) {
  const metadata = decoratorMetadataTarget(target) as typeof target & {
    [ROUTES]?: DeepLinkRoute[]
  }
  if (!metadata[ROUTES]) metadata[ROUTES] = []
  metadata[ROUTES]!.push(route)
}

function addMiddleware(target: object, definition: DeepLinkMiddlewareDefinition) {
  const metadata = decoratorMetadataTarget(target) as typeof target & {
    [MIDDLEWARE]?: DeepLinkMiddlewareDefinition[]
  }
  if (!metadata[MIDDLEWARE]) metadata[MIDDLEWARE] = []
  metadata[MIDDLEWARE]!.push(definition)
}

export function DeepLink(name: string, options?: DeepLinkRouteOptions) {
  return <Handler extends DeepLinkControllerMethod>(
    target: object,
    propertyKey: string | symbol,
    _descriptor: TypedPropertyDescriptor<Handler>
  ) => addRoute(target, { name, propertyKey, options })
}

export function DeepLinkHost(host: string, name = `host:${host}`) {
  return DeepLink(name, { host })
}

export function DeepLinkRoute(
  host: string,
  path: DeepLinkRouteOptions['path'] = '/',
  name = `route:${host}:${String(path)}`
) {
  return DeepLink(name, { host, path })
}

export function UseDeepLinkMiddleware() {
  return <Middleware extends DeepLinkMiddlewareMethod>(
    target: object,
    propertyKey: string | symbol,
    _descriptor: TypedPropertyDescriptor<Middleware>
  ) => addMiddleware(target, { propertyKey })
}

export function getDeepLinkRoutes(instance: object): readonly DeepLinkRoute[] {
  return readDecoratorMetadata<DeepLinkRoute>(instance, ROUTES)
}

export function getDeepLinkMiddleware(instance: object): readonly DeepLinkMiddlewareDefinition[] {
  return readDecoratorMetadata<DeepLinkMiddlewareDefinition>(instance, MIDDLEWARE)
}

function decoratorMetadataTarget(target: object): object {
  return typeof target === 'function' ? target : target.constructor
}

function readDecoratorMetadata<T>(instance: object, key: symbol): readonly T[] {
  const constructor = instance.constructor as unknown as Record<symbol, T[] | undefined>
  const prototype = Object.getPrototypeOf(instance) as Record<symbol, T[] | undefined> | null
  return constructor[key] ?? prototype?.[key] ?? []
}

export function applyDeepLinkControllers(
  controllers: readonly object[],
  manager: DeepLinkManager
): () => void {
  const disposers: Array<() => void> = []
  for (const controller of controllers) {
    for (const definition of getDeepLinkMiddleware(controller)) {
      const middleware = getControllerMethod<DeepLinkMiddleware>(controller, definition.propertyKey)
      disposers.push(manager.use(middleware))
    }
    for (const route of getDeepLinkRoutes(controller)) {
      const handler = getControllerMethod<DeepLinkHandler>(controller, route.propertyKey)
      disposers.push(
        route.options
          ? manager.registerRoute(route.name, route.options, handler)
          : manager.registerHandler(route.name, handler)
      )
    }
  }
  return () => {
    for (let index = disposers.length - 1; index >= 0; index -= 1) {
      try {
        disposers[index]()
      } catch {}
    }
  }
}

function getControllerMethod<T extends (...args: never[]) => unknown>(
  controller: object,
  propertyKey: string | symbol
): T {
  const method = (controller as Record<string | symbol, unknown>)[propertyKey]
  if (typeof method !== 'function') {
    throw new TypeError(`Deep-link controller member ${String(propertyKey)} is not a function`)
  }
  return method.bind(controller) as T
}
