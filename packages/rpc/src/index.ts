export type JsonRpcId = number | string;

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  id: JsonRpcId;
  method: string;
  params?: unknown;
}

export interface JsonRpcNotification {
  jsonrpc: '2.0';
  method: string;
  params?: unknown;
}

export interface JsonRpcError {
  code: number;
  message: string;
  data?: unknown;
}

export interface JsonRpcResponse {
  jsonrpc: '2.0';
  id: JsonRpcId | null;
  result?: unknown;
  error?: JsonRpcError;
}

export interface JsonRpcClientTransport {
  send(message: string): void;
  onMessage(handler: (message: string) => void): () => void;
}

export interface JsonRpcServerTransport {
  onMessage(handler: (message: string, reply: (response: string) => void) => void): () => void;
}

export interface JsonRpcClientOptions {
  timeoutMs?: number;
}

export interface JsonRpcRequestOptions {
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface JsonRpcRequestContext {
  readonly id: JsonRpcId;
  readonly method: string;
  readonly signal: AbortSignal;
}

export class RpcRemoteError extends Error {
  readonly name = 'RpcRemoteError';

  constructor(
    message: string,
    readonly code: number,
    readonly data?: unknown
  ) {
    super(message);
  }
}

declare const rpcServiceType: unique symbol;

/**
 * A runtime-compatible string token carrying the service contract for TypeScript.
 * Define and export one token next to each cross-process service interface.
 */
export type RpcServiceToken<TService extends object> = string & {
  readonly [rpcServiceType]: TService;
};

export type RpcMethodName<TService extends object> = {
  [Key in keyof TService]-?: TService[Key] extends (...args: any[]) => any ? Key : never;
}[keyof TService] &
  string;

export type RpcClientProxy<TService extends object> = {
  [Key in RpcMethodName<TService>]: TService[Key] extends (...args: infer Args) => infer Result
    ? (...args: Args) => Promise<Awaited<Result>>
    : never;
} & {
  $notify<Key extends RpcMethodName<TService>>(
    method: Key,
    ...args: TService[Key] extends (...args: infer Args) => any ? Args : never
  ): void;
};

export function defineRpcService<TService extends object>(name: string): RpcServiceToken<TService> {
  if (!name.trim()) {
    throw new Error('RPC service name cannot be empty');
  }
  return name as RpcServiceToken<TService>;
}

export class JsonRpcClient {
  private nextId = 1;
  private pending = new Map<
    JsonRpcId,
    {
      resolve: (value: unknown) => void;
      reject: (error: unknown) => void;
      timeoutId?: ReturnType<typeof setTimeout>;
      disposeAbort?: () => void;
    }
  >();
  private disposeListener: (() => void) | null = null;
  private timeoutMs: number;

  constructor(
    private transport: JsonRpcClientTransport,
    options: JsonRpcClientOptions = {}
  ) {
    this.timeoutMs = options.timeoutMs ?? 20_000;
    this.disposeListener = transport.onMessage((message) => this.handleMessage(message));
  }

  request<T = unknown>(
    method: string,
    params?: unknown,
    options: JsonRpcRequestOptions = {}
  ): Promise<T> {
    const id = this.nextId++;
    const payload: JsonRpcRequest = { jsonrpc: '2.0', id, method, params };
    const message = JSON.stringify(payload);

    return new Promise<T>((resolve, reject) => {
      if (options.signal?.aborted) {
        reject(createAbortError(method));
        return;
      }
      const timeoutId = setTimeout(() => {
        const pending = this.pending.get(id);
        pending?.disposeAbort?.();
        this.pending.delete(id);
        this.cancel(id);
        reject(new Error(`RPC request timeout: ${method}`));
      }, options.timeoutMs ?? this.timeoutMs);

      const onAbort = () => {
        const pending = this.pending.get(id);
        if (!pending) return;
        clearTimeout(timeoutId);
        pending.disposeAbort?.();
        this.pending.delete(id);
        this.cancel(id);
        reject(createAbortError(method));
      };
      options.signal?.addEventListener('abort', onAbort, { once: true });

      this.pending.set(id, {
        resolve: (value) => resolve(value as T),
        reject,
        timeoutId,
        disposeAbort: options.signal
          ? () => options.signal?.removeEventListener('abort', onAbort)
          : undefined
      });

      try {
        this.transport.send(message);
      } catch (error) {
        clearTimeout(timeoutId);
        options.signal?.removeEventListener('abort', onAbort);
        this.pending.delete(id);
        reject(error);
        return;
      }
    });
  }

  notify(method: string, params?: unknown) {
    const payload: JsonRpcNotification = { jsonrpc: '2.0', method, params };
    this.transport.send(JSON.stringify(payload));
  }

  cancel(id: JsonRpcId) {
    this.notify('$/cancelRequest', { id });
  }

  dispose() {
    if (this.disposeListener) {
      this.disposeListener();
      this.disposeListener = null;
    }
    for (const pending of this.pending.values()) {
      if (pending.timeoutId) clearTimeout(pending.timeoutId);
      pending.disposeAbort?.();
      pending.reject(new Error('RPC client disposed'));
    }
    this.pending.clear();
  }

  private handleMessage(message: string) {
    const parsed = safeJsonParse(message);
    if (!parsed) return;
    if (!isResponse(parsed)) return;
    const pending = this.pending.get(parsed.id as JsonRpcId);
    if (!pending) return;
    this.pending.delete(parsed.id as JsonRpcId);
    if (pending.timeoutId) clearTimeout(pending.timeoutId);
    pending.disposeAbort?.();
    if (parsed.error) {
      const error = new RpcRemoteError(
        parsed.error.message || 'RPC error',
        parsed.error.code,
        parsed.error.data
      );
      pending.reject(error);
      return;
    }
    pending.resolve(parsed.result);
  }
}

export class JsonRpcServer {
  private handlers = new Map<string, (...args: any[]) => unknown>();
  private cancellableHandlers = new Map<
    string,
    (context: JsonRpcRequestContext, ...args: any[]) => unknown
  >();
  private activeRequests = new Map<JsonRpcId, AbortController>();
  private disposeListener: (() => void) | null = null;

  constructor(private transport: JsonRpcServerTransport) {
    this.disposeListener = transport.onMessage((message, reply) =>
      this.handleMessage(message, reply)
    );
  }

  register(method: string, handler: (...args: any[]) => unknown): () => void {
    this.handlers.set(method, handler);
    return () => {
      this.handlers.delete(method);
    };
  }

  registerCancellable(
    method: string,
    handler: (context: JsonRpcRequestContext, ...args: any[]) => unknown
  ): () => void {
    this.cancellableHandlers.set(method, handler);
    return () => {
      this.cancellableHandlers.delete(method);
    };
  }

  registerService<TService extends object>(
    token: RpcServiceToken<TService>,
    service: TService
  ): () => void;
  registerService(token: string, service: Record<string, any>): () => void;
  registerService(token: string, service: object): () => void {
    const disposers: Array<() => void> = [];
    for (const [key, value] of Object.entries(service)) {
      if (typeof value !== 'function') continue;
      const method = `${token}.${key}`;
      disposers.push(this.register(method, value.bind(service)));
    }
    return () => {
      for (const disposer of disposers) disposer();
    };
  }

  dispose() {
    if (this.disposeListener) {
      this.disposeListener();
      this.disposeListener = null;
    }
    this.handlers.clear();
    this.cancellableHandlers.clear();
    for (const controller of this.activeRequests.values()) controller.abort();
    this.activeRequests.clear();
  }

  private async handleMessage(message: string, reply: (response: string) => void) {
    const parsed = safeJsonParse(message);
    if (!parsed) return;
    if (!isRequest(parsed) && !isNotification(parsed)) return;

    if (parsed.method === '$/cancelRequest') {
      const id = readCancellationId(parsed.params);
      if (id !== undefined) this.activeRequests.get(id)?.abort();
      return;
    }

    const params = normalizeParams(parsed.params);
    const handler = this.handlers.get(parsed.method);
    const cancellableHandler = this.cancellableHandlers.get(parsed.method);

    if (!handler && !cancellableHandler) {
      if (isRequest(parsed)) {
        reply(
          JSON.stringify({
            jsonrpc: '2.0',
            id: parsed.id,
            error: {
              code: -32601,
              message: `Method not found: ${parsed.method}`
            }
          })
        );
      }
      return;
    }

    const controller = new AbortController();
    if (isRequest(parsed)) this.activeRequests.set(parsed.id, controller);
    try {
      const result = cancellableHandler
        ? await cancellableHandler(
            {
              id: isRequest(parsed) ? parsed.id : 'notification',
              method: parsed.method,
              signal: controller.signal
            },
            ...params
          )
        : await handler!(...params);
      if (isRequest(parsed)) {
        reply(
          JSON.stringify({
            jsonrpc: '2.0',
            id: parsed.id,
            result
          })
        );
      }
    } catch (error) {
      if (isRequest(parsed)) {
        const messageText = error instanceof Error ? error.message : String(error);
        reply(
          JSON.stringify({
            jsonrpc: '2.0',
            id: parsed.id,
            error: {
              code: readErrorCode(error),
              message: messageText,
              data: serializeErrorData(error)
            }
          })
        );
      }
    } finally {
      if (isRequest(parsed)) this.activeRequests.delete(parsed.id);
    }
  }
}

export function createRpcProxy<TService extends object>(
  client: JsonRpcClient,
  token: RpcServiceToken<TService>
): RpcClientProxy<TService>;
export function createRpcProxy<T extends Record<string, any>>(
  client: JsonRpcClient,
  token: string
): T;
export function createRpcProxy(
  client: JsonRpcClient,
  token: string
): Record<string, (...args: any[]) => unknown> {
  return new Proxy(
    {},
    {
      get(_target, prop) {
        if (prop === 'then') return undefined;
        if (prop === '$notify') {
          return (method: string, ...args: any[]) => client.notify(`${token}.${method}`, args);
        }
        if (typeof prop !== 'string') return undefined;
        return (...args: any[]) => client.request(`${token}.${prop}`, args);
      }
    }
  );
}

function normalizeParams(params: unknown): any[] {
  if (params === undefined) return [];
  if (Array.isArray(params)) return params;
  return [params];
}

function createAbortError(method: string) {
  const error = new Error(`RPC request cancelled: ${method}`);
  error.name = 'AbortError';
  return error;
}

function readCancellationId(params: unknown): JsonRpcId | undefined {
  if (!params || typeof params !== 'object') return undefined;
  const id = (params as { id?: unknown }).id;
  return typeof id === 'string' || typeof id === 'number' ? id : undefined;
}

function readErrorCode(error: unknown): number {
  if (!error || typeof error !== 'object') return -32000;
  const code = (error as { rpcCode?: unknown }).rpcCode;
  return typeof code === 'number' ? code : -32000;
}

function serializeErrorData(error: unknown): unknown {
  if (!error || typeof error !== 'object') return undefined;
  const value = error as {
    toJSON?: () => unknown;
    code?: unknown;
    domain?: unknown;
    details?: unknown;
  };
  if (typeof value.toJSON === 'function') return value.toJSON();
  if (value.code !== undefined || value.domain !== undefined || value.details !== undefined) {
    return { code: value.code, domain: value.domain, details: value.details };
  }
  return undefined;
}

function safeJsonParse(message: string): any | null {
  try {
    return JSON.parse(message);
  } catch {
    return null;
  }
}

function isRequest(message: any): message is JsonRpcRequest {
  return (
    message &&
    message.jsonrpc === '2.0' &&
    typeof message.method === 'string' &&
    typeof message.id !== 'undefined'
  );
}

function isNotification(message: any): message is JsonRpcNotification {
  return (
    message &&
    message.jsonrpc === '2.0' &&
    typeof message.method === 'string' &&
    typeof message.id === 'undefined'
  );
}

function isResponse(message: any): message is JsonRpcResponse {
  return (
    message &&
    message.jsonrpc === '2.0' &&
    typeof message.id !== 'undefined' &&
    (Object.prototype.hasOwnProperty.call(message, 'result') ||
      Object.prototype.hasOwnProperty.call(message, 'error'))
  );
}
