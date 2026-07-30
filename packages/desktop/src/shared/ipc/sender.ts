import type { AnyIpcEventEndpoint, IpcEndpointArgs } from './contract'

export interface IpcEventTransport {
  send(channel: string, ...args: any[]): void
}

export function sendIpcEvent<Endpoint extends AnyIpcEventEndpoint>(
  transport: IpcEventTransport,
  endpoint: Endpoint,
  ...args: IpcEndpointArgs<Endpoint>
): void {
  transport.send(endpoint.channel, ...(args as any[]))
}
