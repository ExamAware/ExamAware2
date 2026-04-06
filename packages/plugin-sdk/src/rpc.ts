import type { PluginRuntimeContext } from './hosting';

export function rpcService<T extends Record<string, any> = Record<string, any>>(
  ctx: PluginRuntimeContext,
  token: string
): T {
  return ctx.rpc.get<T>(token);
}

export function rpcExpose(ctx: PluginRuntimeContext, token: string, service: Record<string, any>) {
  return ctx.rpc.expose(token, service);
}

export function rpcNotify(
  ctx: PluginRuntimeContext,
  token: string,
  method: string,
  ...args: any[]
) {
  ctx.rpc.notify(token, method, ...args);
}

export function rpcToken(namespace: string, name: string) {
  return `${namespace}.${name}`;
}
