declare const tokenType: unique symbol;

export type PluginTokenKind = 'command' | 'event' | 'service' | 'api-module';

export interface PluginToken<TValue, TKind extends PluginTokenKind> {
  readonly id: string;
  readonly kind: TKind;
  readonly [tokenType]?: TValue;
}

export type TokenValue<TToken> =
  TToken extends PluginToken<infer TValue, PluginTokenKind> ? TValue : never;

function defineToken<TValue, TKind extends PluginTokenKind>(
  kind: TKind,
  id: string
): PluginToken<TValue, TKind> {
  const normalized = id.trim();
  if (!normalized) throw new Error(`${kind} token id cannot be empty`);
  return Object.freeze({ id: normalized, kind }) as PluginToken<TValue, TKind>;
}

export type CommandHandler<TArgs, TResult> = (args: TArgs) => TResult | Promise<TResult>;
export type CommandToken<TArgs = void, TResult = void> = PluginToken<
  CommandHandler<TArgs, TResult>,
  'command'
>;
export type EventToken<TPayload> = PluginToken<TPayload, 'event'>;
export type PluginServiceToken<TService extends object> = PluginToken<TService, 'service'>;
export type PluginApiModuleToken<TApi extends object> = PluginToken<TApi, 'api-module'>;

export const defineCommand = <TArgs = void, TResult = void>(id: string) =>
  defineToken<CommandHandler<TArgs, TResult>, 'command'>('command', id);

export const defineEvent = <TPayload>(id: string) => defineToken<TPayload, 'event'>('event', id);

export const definePluginService = <TService extends object>(id: string) =>
  defineToken<TService, 'service'>('service', id);

export const definePluginApiModuleToken = <TApi extends object>(id: string) =>
  defineToken<TApi, 'api-module'>('api-module', id);

export function createPluginTokenFactory(namespace: string) {
  const prefix = namespace.trim();
  if (!prefix) throw new Error('plugin token namespace cannot be empty');
  const qualify = (name: string) => {
    const localName = name.trim();
    if (!localName) throw new Error('plugin token name cannot be empty');
    return `${prefix}.${localName}`;
  };
  return Object.freeze({
    command: <TArgs = void, TResult = void>(name: string) =>
      defineCommand<TArgs, TResult>(qualify(name)),
    event: <TPayload>(name: string) => defineEvent<TPayload>(qualify(name)),
    service: <TService extends object>(name: string) =>
      definePluginService<TService>(qualify(name)),
    apiModule: <TApi extends object>(name: string) =>
      definePluginApiModuleToken<TApi>(qualify(name))
  });
}
