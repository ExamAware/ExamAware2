import { ipcMain, type IpcMainEvent, type IpcMainInvokeEvent } from 'electron'
import type {
  AnyIpcInvokeEndpoint,
  AnyIpcSendEndpoint,
  IpcEndpointArgs,
  IpcEndpointResult
} from '../../shared/ipc/contract'
import type { MainContext } from '../runtime/mainContext'

type Awaitable<T> = T | Promise<T>
type ControllerHandle<Endpoint extends AnyIpcInvokeEndpoint> = (
  event: IpcMainInvokeEvent,
  ...args: IpcEndpointArgs<Endpoint>
) => Awaitable<IpcEndpointResult<Endpoint>>
type ControllerListener<Endpoint extends AnyIpcSendEndpoint> = (
  event: IpcMainEvent,
  ...args: IpcEndpointArgs<Endpoint>
) => void

export type IpcRouteDefinition =
  | {
      kind: 'handle'
      endpoint: AnyIpcInvokeEndpoint
      propertyKey: string | symbol
    }
  | {
      kind: 'on'
      endpoint: AnyIpcSendEndpoint
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

export function IpcHandle<Endpoint extends AnyIpcInvokeEndpoint>(endpoint: Endpoint) {
  return <Handler extends ControllerHandle<Endpoint>>(
    target: any,
    propertyKey: string | symbol,
    _descriptor: TypedPropertyDescriptor<Handler>
  ) => {
    addRoute(target, { kind: 'handle', endpoint, propertyKey })
  }
}

export function IpcOn<Endpoint extends AnyIpcSendEndpoint>(endpoint: Endpoint) {
  return <Listener extends ControllerListener<Endpoint>>(
    target: any,
    propertyKey: string | symbol,
    _descriptor: TypedPropertyDescriptor<Listener>
  ) => {
    addRoute(target, { kind: 'on', endpoint, propertyKey })
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
      const { channel } = route.endpoint
      const handler = (controller as any)[route.propertyKey].bind(controller)
      if (route.kind === 'handle') {
        if (bus) {
          bus.handle(channel, handler)
        } else {
          ipcMain.handle(channel, handler)
        }
        disposers.push(() => ipcMain.removeHandler(channel))
      } else {
        if (bus) {
          bus.on(channel, handler)
        } else {
          ipcMain.on(channel, handler)
        }
        disposers.push(() => ipcMain.removeListener(channel, handler))
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
