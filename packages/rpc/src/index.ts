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

export class JsonRpcClient {
  private nextId = 1;
  private pending = new Map<
    JsonRpcId,
    {
      resolve: (value: unknown) => void;
      reject: (error: Error) => void;
      timeoutId?: ReturnType<typeof setTimeout>;
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

  request<T = unknown>(method: string, params?: unknown): Promise<T> {
    const id = this.nextId++;
    const payload: JsonRpcRequest = { jsonrpc: '2.0', id, method, params };
    const message = JSON.stringify(payload);

    return new Promise<T>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`RPC request timeout: ${method}`));
      }, this.timeoutMs);

      this.pending.set(id, {
        resolve: (value) => resolve(value as T),
        reject,
        timeoutId
      });

      this.transport.send(message);
    });
  }

  notify(method: string, params?: unknown) {
    const payload: JsonRpcNotification = { jsonrpc: '2.0', method, params };
    this.transport.send(JSON.stringify(payload));
  }

  dispose() {
    if (this.disposeListener) {
      this.disposeListener();
      this.disposeListener = null;
    }
    for (const pending of this.pending.values()) {
      if (pending.timeoutId) clearTimeout(pending.timeoutId);
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
    if (parsed.error) {
      const error = new Error(parsed.error.message || 'RPC error');
      pending.reject(error);
      return;
    }
    pending.resolve(parsed.result);
  }
}

export class JsonRpcServer {
  private handlers = new Map<string, (...args: any[]) => unknown>();
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

  registerService(token: string, service: Record<string, any>): () => void {
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
  }

  private async handleMessage(message: string, reply: (response: string) => void) {
    const parsed = safeJsonParse(message);
    if (!parsed) return;
    if (!isRequest(parsed) && !isNotification(parsed)) return;

    const params = normalizeParams(parsed.params);
    const handler = this.handlers.get(parsed.method);

    if (!handler) {
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

    try {
      const result = await handler(...params);
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
              code: -32000,
              message: messageText
            }
          })
        );
      }
    }
  }
}

export function createRpcProxy<T extends Record<string, any>>(
  client: JsonRpcClient,
  token: string
): T {
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
  ) as T;
}

function normalizeParams(params: unknown): any[] {
  if (params === undefined) return [];
  if (Array.isArray(params)) return params;
  return [params];
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
