import { afterEach, describe, expect, it, vi } from 'vitest';

import { JsonRpcClient, type JsonRpcClientTransport } from '../src/index';

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
});
