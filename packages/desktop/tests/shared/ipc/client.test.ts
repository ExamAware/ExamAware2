import { describe, expect, expectTypeOf, it, vi } from 'vitest'
import { ipcChannels } from '../../../src/shared/ipc/channels'
import { createIpcClient, type IpcClientTransport } from '../../../src/shared/ipc/client'

function createTransport() {
  const listeners = new Map<string, (event: unknown, ...args: any[]) => void>()
  const transport: IpcClientTransport = {
    invoke: vi.fn(async () => undefined),
    send: vi.fn(),
    on: vi.fn((channel, listener) => listeners.set(channel, listener)),
    off: vi.fn((channel, listener) => {
      if (listeners.get(channel) === listener) listeners.delete(channel)
    })
  }
  return { transport, listeners }
}

describe('typed IPC client', () => {
  it('unwraps invoke and send endpoints for the transport', async () => {
    const { transport } = createTransport()
    vi.mocked(transport.invoke).mockResolvedValueOnce('1.4.3')
    const client = createIpcClient(transport)

    const version = client.invoke(ipcChannels.app.getVersion)
    expectTypeOf(version).toEqualTypeOf<Promise<string>>()
    await expect(version).resolves.toBe('1.4.3')

    client.send(ipcChannels.windows.openSettings, 'about')
    expect(transport.invoke).toHaveBeenCalledWith(ipcChannels.app.getVersion.channel)
    expect(transport.send).toHaveBeenCalledWith(ipcChannels.windows.openSettings.channel, 'about')
  })

  it('hides the Electron event and disposes the exact wrapped listener', () => {
    const { transport, listeners } = createTransport()
    const client = createIpcClient(transport)
    const listener = vi.fn()

    const dispose = client.on(ipcChannels.config.loadPlayback, listener)
    listeners.get(ipcChannels.config.loadPlayback.channel)?.({ sender: 'electron' }, 'config')

    expect(listener).toHaveBeenCalledWith('config')
    dispose()
    expect(transport.off).toHaveBeenCalledWith(
      ipcChannels.config.loadPlayback.channel,
      expect.any(Function)
    )
    expect(listeners.has(ipcChannels.config.loadPlayback.channel)).toBe(false)
  })
})
