import { afterEach, describe, expect, it, vi } from 'vitest'
import { DownloadManager } from '../../../src/main/runtime/downloadManager'

const response = () =>
  new Response(new Uint8Array([1, 2, 3]), {
    status: 200,
    headers: { 'content-length': '3' }
  })

describe('DownloadManager', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('passes an already-aborted merged signal to fetch', async () => {
    const controller = new AbortController()
    controller.abort()
    const fetchMock = vi.fn(async (_url: string, init?: RequestInit) => {
      expect(init?.signal?.aborted).toBe(true)
      throw new DOMException('aborted', 'AbortError')
    })
    vi.stubGlobal('fetch', fetchMock)
    const manager = new DownloadManager()

    await expect(
      manager.fetchBuffer('https://example.test/a', { signal: controller.signal })
    ).rejects.toMatchObject({ name: 'AbortError' })
    expect(fetchMock).toHaveBeenCalledOnce()
  })

  it('removes external abort listeners after a successful download', async () => {
    const controller = new AbortController()
    const add = vi.spyOn(controller.signal, 'addEventListener')
    const remove = vi.spyOn(controller.signal, 'removeEventListener')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response()))
    const manager = new DownloadManager()

    const result = await manager.fetchBuffer('https://example.test/a', {
      signal: controller.signal
    })

    expect(result.buffer).toEqual(Buffer.from([1, 2, 3]))
    expect(add).toHaveBeenCalledWith('abort', expect.any(Function))
    expect(remove).toHaveBeenCalledWith('abort', expect.any(Function))
  })

  it('normalizes invalid concurrency so queued work still runs', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response()))
    const manager = new DownloadManager({ concurrency: Number.NaN })

    await expect(manager.fetchBuffer('https://example.test/a')).resolves.toMatchObject({ bytes: 3 })
  })
})
