import { beforeEach, describe, expect, it, vi } from 'vitest'

const { lookup } = vi.hoisted(() => ({ lookup: vi.fn() }))

vi.mock('node:dns', () => ({
  promises: { lookup }
}))

import { secureFetch } from '../../../src/main/network/secureFetch'

describe('secureFetch', () => {
  beforeEach(() => {
    lookup.mockReset().mockResolvedValue([{ address: '93.184.216.34', family: 4 }])
    vi.stubGlobal('fetch', vi.fn())
  })

  it.each(['file:///tmp/exam.ea2', 'ftp://example.test/exam.ea2'])(
    'rejects non-HTTP URL %s',
    async (url) => {
      await expect(secureFetch(url)).rejects.toMatchObject({
        code: 'invalid-argument',
        domain: 'network'
      })
    }
  )

  it('blocks direct private targets unless local access is explicitly allowed', async () => {
    await expect(secureFetch('http://127.0.0.1/config')).rejects.toMatchObject({
      code: 'permission-denied'
    })
    expect(fetch).not.toHaveBeenCalled()

    vi.mocked(fetch).mockResolvedValue(new Response('ok', { status: 200 }))
    await expect(
      secureFetch('http://127.0.0.1/config', { allowLocalNetwork: true })
    ).resolves.toMatchObject({ status: 200, body: new TextEncoder().encode('ok') })
  })

  it('revalidates every redirect target and blocks a public-to-private redirect', async () => {
    vi.mocked(fetch).mockResolvedValue(
      new Response(null, { status: 302, headers: { location: 'http://192.168.1.10/config' } })
    )

    await expect(secureFetch('https://public.example/config')).rejects.toMatchObject({
      code: 'permission-denied'
    })
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('enforces response size while reading a body without Content-Length', async () => {
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('1234'))
        controller.enqueue(new TextEncoder().encode('5678'))
        controller.close()
      }
    })
    vi.mocked(fetch).mockResolvedValue(new Response(stream, { status: 200 }))

    await expect(
      secureFetch('https://public.example/config', { maxBytes: 6 })
    ).rejects.toMatchObject({ code: 'invalid-argument', domain: 'network' })
  })

  it('reports external cancellation distinctly from timeout', async () => {
    vi.mocked(fetch).mockImplementation(
      (_input, init) =>
        new Promise((_resolve, reject) => {
          if (init?.signal?.aborted) {
            reject(init.signal.reason)
            return
          }
          init?.signal?.addEventListener('abort', () => reject(init.signal?.reason), { once: true })
        })
    )
    const controller = new AbortController()
    const request = secureFetch('https://public.example/config', { signal: controller.signal })

    controller.abort()

    await expect(request).rejects.toMatchObject({ code: 'cancelled', domain: 'network' })
  })
})
