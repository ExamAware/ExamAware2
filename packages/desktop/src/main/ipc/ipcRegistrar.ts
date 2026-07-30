import { ipcMain, type IpcMainEvent, type IpcMainInvokeEvent } from 'electron'
import type {
  AnyIpcInvokeEndpoint,
  AnyIpcSendEndpoint,
  IpcEndpointArgs,
  IpcEndpointResult
} from '../../shared/ipc/contract'
import type { MainContext } from '../runtime/mainContext'

type Awaitable<T> = T | Promise<T>

export type IpcOnListener<Endpoint extends AnyIpcSendEndpoint> = (
  event: IpcMainEvent,
  ...args: IpcEndpointArgs<Endpoint>
) => void

export type IpcHandleListener<Endpoint extends AnyIpcInvokeEndpoint> = (
  event: IpcMainInvokeEvent,
  ...args: IpcEndpointArgs<Endpoint>
) => Awaitable<IpcEndpointResult<Endpoint>>

export class IpcRegistrar {
  private readonly disposers: Array<() => void> = []
  private disposed = false

  constructor(private readonly context?: MainContext) {}

  on<Endpoint extends AnyIpcSendEndpoint>(endpoint: Endpoint, listener: IpcOnListener<Endpoint>) {
    const { channel } = endpoint
    if (this.context) {
      this.context.ipc.on(channel, listener as Parameters<typeof ipcMain.on>[1])
      return
    }
    ipcMain.on(channel, listener as Parameters<typeof ipcMain.on>[1])
    this.add(() => ipcMain.removeListener(channel, listener as Parameters<typeof ipcMain.on>[1]))
  }

  handle<Endpoint extends AnyIpcInvokeEndpoint>(
    endpoint: Endpoint,
    listener: IpcHandleListener<Endpoint>
  ) {
    const { channel } = endpoint
    if (this.context) {
      this.context.ipc.handle(channel, listener as Parameters<typeof ipcMain.handle>[1])
      return
    }
    ipcMain.handle(channel, listener as Parameters<typeof ipcMain.handle>[1])
    this.add(() => ipcMain.removeHandler(channel))
  }

  add(disposer?: () => void) {
    if (!disposer) return
    if (this.disposed) {
      this.runDisposer(disposer)
      return
    }
    this.disposers.push(disposer)
  }

  dispose() {
    if (this.disposed) return
    this.disposed = true
    for (let index = this.disposers.length - 1; index >= 0; index--) {
      this.runDisposer(this.disposers[index])
    }
    this.disposers.length = 0
  }

  private runDisposer(disposer: () => void) {
    try {
      disposer()
    } catch {}
  }
}
