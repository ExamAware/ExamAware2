declare const endpointArgs: unique symbol
declare const endpointResult: unique symbol

interface IpcEndpoint<Kind extends string, Args extends unknown[]> {
  readonly kind: Kind
  readonly channel: string
  readonly [endpointArgs]: Args
}

export interface IpcInvokeEndpoint<Args extends unknown[] = [], Result = void> extends IpcEndpoint<
  'invoke',
  Args
> {
  readonly [endpointResult]: Result
}

export type IpcSendEndpoint<Args extends unknown[] = []> = IpcEndpoint<'send', Args>
export type IpcEventEndpoint<Args extends unknown[] = []> = IpcEndpoint<'event', Args>

export type AnyIpcInvokeEndpoint = IpcInvokeEndpoint<any, any>
export type AnyIpcSendEndpoint = IpcSendEndpoint<any>
export type AnyIpcEventEndpoint = IpcEventEndpoint<any>
export type IpcEndpointArgs<Endpoint> =
  Endpoint extends IpcEndpoint<string, infer Args> ? Args : never
export type IpcEndpointResult<Endpoint> =
  Endpoint extends IpcInvokeEndpoint<any, infer Result> ? Result : never

function endpoint<Endpoint>(kind: 'invoke' | 'send' | 'event', channel: string): Endpoint {
  return Object.freeze({ kind, channel }) as Endpoint
}

export function invokeEndpoint<Args extends unknown[] = [], Result = void>(channel: string) {
  return endpoint<IpcInvokeEndpoint<Args, Result>>('invoke', channel)
}

export function sendEndpoint<Args extends unknown[] = []>(channel: string) {
  return endpoint<IpcSendEndpoint<Args>>('send', channel)
}

export function eventEndpoint<Args extends unknown[] = []>(channel: string) {
  return endpoint<IpcEventEndpoint<Args>>('event', channel)
}

// Dynamic plugin RPC channels cannot be known at build time. Creating an endpoint makes that
// boundary explicit while preserving argument typing at each call site.
export function dynamicSendEndpoint<Args extends unknown[] = []>(channel: string) {
  return sendEndpoint<Args>(channel)
}

export function dynamicInvokeEndpoint<Args extends unknown[] = [], Result = unknown>(
  channel: string
) {
  return invokeEndpoint<Args, Result>(channel)
}

export function dynamicEventEndpoint<Args extends unknown[] = []>(channel: string) {
  return eventEndpoint<Args>(channel)
}
