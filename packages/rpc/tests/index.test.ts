import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest';

import {
  JsonRpcClient,
  JsonRpcServer,
  RpcRemoteError,
  createRpcProxy,
  defineRpcService,
  type JsonRpcClientTransport,
  type JsonRpcServerTransport,
  type RpcClientProxy
} from '../src/index';

function createLinkedTransports(): {
  client: JsonRpcClientTransport;
  server: JsonRpcServerTransport;
} {
  const clientListeners = new Set<(message: string) => void>();
  const serverListeners = new Set<(message: string, reply: (response: string) => void) => void>();

  return {
    client: {
      send(message) {
        for (const listener of serverListeners) {
          listener(message, (response) => {
            for (const clientListener of clientListeners) clientListener(response);
          });
        }
      },
      onMessage(listener) {
        clientListeners.add(listener);
        return () => clientListeners.delete(listener);
      }
    },
    server: {
      onMessage(listener) {
        serverListeners.add(listener);
        return () => serverListeners.delete(listener);
      }
    }
  };
}

describe('JsonRpcClient', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('cleans up a pending request when transport send throws synchronously', async () => {
    vi.useFakeTimers();
    const thrownValue = { code: 'send-failed' };
    const send = vi.fn(() => {
      throw thrownValue;
    });
    const disposeListener = vi.fn();
    const transport: JsonRpcClientTransport = {
      send,
      onMessage: vi.fn(() => disposeListener)
    };
    const client = new JsonRpcClient(transport, { timeoutMs: 1_000 });

    const request = client.request('example.method');
    const onRejected = vi.fn();
    void request.catch(onRejected);

    await expect(request).rejects.toBe(thrownValue);
    expect(vi.getTimerCount()).toBe(0);
    expect(onRejected).toHaveBeenCalledTimes(1);

    client.dispose();
    vi.runAllTimers();
    await Promise.resolve();

    expect(onRejected).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledTimes(1);
  });

  it('registers and invokes a service through a typed token', async () => {
    interface CalculatorService {
      add(left: number, right: number): number;
      label(): Promise<string>;
    }

    const calculator = defineRpcService<CalculatorService>('test.calculator');
    const transports = createLinkedTransports();
    const client = new JsonRpcClient(transports.client);
    const server = new JsonRpcServer(transports.server);
    const disposeService = server.registerService(calculator, {
      add: (left, right) => left + right,
      label: async () => 'calculator'
    });
    const proxy = createRpcProxy(client, calculator);

    expectTypeOf(proxy).toEqualTypeOf<RpcClientProxy<CalculatorService>>();
    await expect(proxy.add(2, 3)).resolves.toBe(5);
    await expect(proxy.label()).resolves.toBe('calculator');

    disposeService();
    client.dispose();
    server.dispose();
  });

  it('keeps string-token proxies backward compatible', async () => {
    interface LegacyService {
      ping(value: string): Promise<string>;
    }

    const transports = createLinkedTransports();
    const client = new JsonRpcClient(transports.client);
    const server = new JsonRpcServer(transports.server);
    server.registerService('legacy', {
      ping: (value: string) => `pong:${value}`
    });
    const proxy = createRpcProxy<LegacyService>(client, 'legacy');

    await expect(proxy.ping('ready')).resolves.toBe('pong:ready');

    client.dispose();
    server.dispose();
  });

  it('rejects empty service names', () => {
    expect(() => defineRpcService<Record<string, never>>('  ')).toThrow(
      'RPC service name cannot be empty'
    );
  });

  it('cancels an active server request through AbortSignal', async () => {
    const transports = createLinkedTransports();
    const client = new JsonRpcClient(transports.client);
    const server = new JsonRpcServer(transports.server);
    let serverSignal: AbortSignal | undefined;
    server.registerCancellable('slow', (context) => {
      serverSignal = context.signal;
      return new Promise((_resolve, reject) => {
        context.signal.addEventListener('abort', () => reject(new Error('server cancelled')), {
          once: true
        });
      });
    });
    const controller = new AbortController();
    const request = client.request('slow', [], { signal: controller.signal });

    controller.abort();

    await expect(request).rejects.toMatchObject({ name: 'AbortError' });
    expect(serverSignal?.aborted).toBe(true);
    client.dispose();
    server.dispose();
  });

  it('preserves structured remote error data', async () => {
    const transports = createLinkedTransports();
    const client = new JsonRpcClient(transports.client);
    const server = new JsonRpcServer(transports.server);
    server.register('fail', () => {
      throw {
        rpcCode: 4100,
        message: 'permission denied',
        code: 'permission-denied',
        domain: 'plugins',
        details: { permission: 'files.read' }
      };
    });

    const error = await client.request('fail').catch((value) => value as RpcRemoteError);

    expect(error).toBeInstanceOf(RpcRemoteError);
    expect(error).toMatchObject({
      code: 4100,
      data: {
        code: 'permission-denied',
        domain: 'plugins',
        details: { permission: 'files.read' }
      }
    });
    client.dispose();
    server.dispose();
  });
});
