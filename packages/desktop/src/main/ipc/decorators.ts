import { ipcMain } from 'electron'
import type { MainContext } from '../runtime/context'

export type IpcKind = 'handle' | 'on'

export interface IpcRouteDefinition {
  kind: IpcKind
  channel: string
  propertyKey: string | symbol
}

const IPC_ROUTES = Symbol('ipc_routes')

function addRoute(target: any, route: IpcRouteDefinition) {
  const ctor = target.constructor
  if (!ctor[IPC_ROUTES]) {
    ctor[IPC_ROUTES] = [] as IpcRouteDefinition[]
  }
  ;(ctor[IPC_ROUTES] as IpcRouteDefinition[]).push(route)
}

export function IpcHandle(channel: string) {
  return (target: any, propertyKey: string | symbol) => {
    addRoute(target, { kind: 'handle', channel, propertyKey })
  }
}

export function IpcOn(channel: string) {
  return (target: any, propertyKey: string | symbol) => {
    addRoute(target, { kind: 'on', channel, propertyKey })
  }
}

export function getIpcRoutes(instance: any): IpcRouteDefinition[] {
  const ctor = instance?.constructor as any
  return (ctor && (ctor[IPC_ROUTES] as IpcRouteDefinition[])) || []
}

export function applyIpcControllers(controllers: any[], ctx?: MainContext): () => void {
  const disposers: Array<() => void> = []
  const bus = ctx?.ipc

  controllers.forEach((controller) => {
    const routes = getIpcRoutes(controller)
    routes.forEach((route) => {
      const handler = (controller as any)[route.propertyKey].bind(controller)
      if (route.kind === 'handle') {
        if (bus) {
          bus.handle(route.channel, handler)
        } else {
          ipcMain.handle(route.channel, handler)
        }
        disposers.push(() => ipcMain.removeHandler(route.channel))
      } else {
        if (bus) {
          bus.on(route.channel, handler)
        } else {
          ipcMain.on(route.channel, handler)
        }
        disposers.push(() => ipcMain.removeListener(route.channel, handler))
      }
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
