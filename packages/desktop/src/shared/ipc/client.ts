import type {
  AnyIpcEventEndpoint,
  AnyIpcInvokeEndpoint,
  AnyIpcSendEndpoint,
  IpcEndpointArgs,
  IpcEndpointResult
} from './contract'

export interface IpcClientTransport {
  invoke(channel: string, ...args: any[]): Promise<any>
  send(channel: string, ...args: any[]): void
  on(channel: string, listener: (event: unknown, ...args: any[]) => void): unknown
  off(channel: string, listener: (event: unknown, ...args: any[]) => void): unknown
}

export interface TypedIpcClient {
  invoke<Endpoint extends AnyIpcInvokeEndpoint>(
    endpoint: Endpoint,
    ...args: IpcEndpointArgs<Endpoint>
  ): Promise<IpcEndpointResult<Endpoint>>
  send<Endpoint extends AnyIpcSendEndpoint>(
    endpoint: Endpoint,
    ...args: IpcEndpointArgs<Endpoint>
  ): void
  on<Endpoint extends AnyIpcEventEndpoint>(
    endpoint: Endpoint,
    listener: (...args: IpcEndpointArgs<Endpoint>) => void
  ): () => void
}

export function createIpcClient(transport: IpcClientTransport): TypedIpcClient {
  return {
    invoke(endpoint, ...args) {
      return transport.invoke(endpoint.channel, ...(args as any[]))
    },
    send(endpoint, ...args) {
      transport.send(endpoint.channel, ...(args as any[]))
    },
    on(endpoint, listener) {
      const wrapped = (_event: unknown, ...args: any[]) =>
        (listener as (...listenerArgs: any[]) => void)(...args)
      transport.on(endpoint.channel, wrapped)
      return () => {
        transport.off(endpoint.channel, wrapped)
      }
    }
  }
}
