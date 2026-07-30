import type { PluginRuntimeContext } from './hosting';
import { createPluginTokenFactory } from './api/tokens';
import {
  defineRpcService,
  type RpcClientProxy,
  type RpcMethodName,
  type RpcServiceToken
} from '@dsz-examaware/rpc';

export function rpcService<TService extends object>(
  ctx: PluginRuntimeContext,
  token: RpcServiceToken<TService>
): RpcClientProxy<TService>;
export function rpcService<T extends Record<string, any> = Record<string, any>>(
  ctx: PluginRuntimeContext,
  token: string
): T;
export function rpcService(ctx: PluginRuntimeContext, token: string) {
  return ctx.rpc.get(token);
}

export function rpcExpose<TService extends object>(
  ctx: PluginRuntimeContext,
  token: RpcServiceToken<TService>,
  service: TService
): ReturnType<PluginRuntimeContext['rpc']['expose']>;
export function rpcExpose(
  ctx: PluginRuntimeContext,
  token: string,
  service: Record<string, any>
): ReturnType<PluginRuntimeContext['rpc']['expose']>;
export function rpcExpose(ctx: PluginRuntimeContext, token: string, service: object) {
  return ctx.rpc.expose(token, service);
}

export function rpcNotify<TService extends object, Method extends RpcMethodName<TService>>(
  ctx: PluginRuntimeContext,
  token: RpcServiceToken<TService>,
  method: Method,
  ...args: TService[Method] extends (...args: infer Args) => any ? Args : never
): void;
export function rpcNotify(
  ctx: PluginRuntimeContext,
  token: string,
  method: string,
  ...args: any[]
) {
  ctx.rpc.notify(token, method, ...args);
}

export function rpcToken<TService extends object>(
  namespace: string,
  name: string
): RpcServiceToken<TService> {
  return defineRpcService<TService>(`${namespace}.${name}`);
}

/**
 * Creates every public token for one plugin from a single namespace.
 * Export the resulting tokens from a shared contracts module and avoid raw IDs elsewhere.
 */
export function createPluginTokens(namespace: string) {
  const tokens = createPluginTokenFactory(namespace);
  return Object.freeze({
    command: tokens.command,
    event: tokens.event,
    service: tokens.service,
    apiModule: tokens.apiModule,
    rpc: <TService extends object>(name: string) => rpcToken<TService>(namespace, name)
  });
}
