import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ConfigLoadCancelledError, createConfigLoader } from './configLoader'

function deferred<T>() {
  let resolve!: (value: T | PromiseLike<T>) => void
  let reject!: (reason?: unknown) => void
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise
    reject = rejectPromise
  })
  return { promise, resolve, reject }
}

type ConfigListener = (event: unknown, data: string) => void

class FakeIpcRenderer {
  private listeners = new Map<string, Set<ConfigListener>>()
  readonly invokes: ReturnType<typeof deferred<string | null>>[] = []

  on(channel: string, listener: ConfigListener) {
    const listeners = this.listeners.get(channel) ?? new Set()
    listeners.add(listener)
    this.listeners.set(channel, listeners)
  }

  removeListener(channel: string, listener: ConfigListener) {
    this.listeners.get(channel)?.delete(listener)
  }

  invoke(channel: string) {
    if (channel === 'read-file') return Promise.resolve(validConfig)
    expect(channel).toBe('get-config')
    const request = deferred<string | null>()
    this.invokes.push(request)
    return request.promise
  }

  emit(channel: string, data: string) {
    for (const listener of [...(this.listeners.get(channel) ?? [])]) {
      listener(null, data)
    }
  }

  listenerCount(channel: string) {
    return this.listeners.get(channel)?.size ?? 0
  }
}

const validConfig = JSON.stringify({
  examName: 'Finals',
  message: '',
  examInfos: []
})

describe('ConfigLoader.loadFromIPC', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('resolves a parsed config and releases its listener and timer', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const result = loader.loadFromIPC()

    ipc.emit('load-config', validConfig)

    await expect(result).resolves.toMatchObject({ examName: 'Finals' })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('rejects invalid data, stores the parse error, and releases resources', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const result = loader.loadFromIPC()

    ipc.emit('load-config', '{')

    await expect(result).rejects.toThrow('配置解析失败：JSON 格式错误')
    expect(loader.getState().error).toBe('IPC 数据解析失败: 配置解析失败：JSON 格式错误')
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('rejects once on timeout and releases its listener and timer', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const result = loader.loadFromIPC(100)
    const rejection = expect(result).rejects.toThrow('IPC 配置加载超时')

    await vi.advanceTimersByTimeAsync(100)

    await rejection
    ipc.emit('load-config', validConfig)
    expect(loader.getState().loaded).toBe(false)
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('cancels and cleans the first request before installing the second', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const first = loader.loadFromIPC()
    const firstRejection = expect(first).rejects.toBeInstanceOf(ConfigLoadCancelledError)

    const second = loader.loadFromIPC()

    await firstRejection
    expect(ipc.listenerCount('load-config')).toBe(1)
    expect(vi.getTimerCount()).toBe(1)

    ipc.emit('load-config', validConfig)
    await expect(second).resolves.toMatchObject({ examName: 'Finals' })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('ignores a late invoke from the first request', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const first = loader.loadFromIPC()
    const firstRejection = expect(first).rejects.toBeInstanceOf(ConfigLoadCancelledError)
    const second = loader.loadFromIPC()

    ipc.invokes[0].resolve(validConfig)
    await Promise.resolve()

    await firstRejection
    expect(loader.getState()).toMatchObject({ loading: true, loaded: false, config: null })
    expect(ipc.listenerCount('load-config')).toBe(1)
    expect(vi.getTimerCount()).toBe(1)

    ipc.emit('load-config', validConfig)
    await expect(second).resolves.toMatchObject({ examName: 'Finals' })
  })

  it('keeps the second result current after late first continuations', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const first = loader.loadFromIPC()
    const firstRejection = expect(first).rejects.toBeInstanceOf(ConfigLoadCancelledError)
    const second = loader.loadFromIPC()
    const secondConfig = JSON.stringify({ examName: 'Second', message: '', examInfos: [] })

    ipc.emit('load-config', secondConfig)

    await firstRejection
    await expect(second).resolves.toMatchObject({ examName: 'Second' })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)

    ipc.invokes[0].resolve(validConfig)
    await Promise.resolve()

    expect(loader.getState()).toMatchObject({ loaded: true, config: { examName: 'Second' } })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('ignores a rejected invoke from a cancelled request', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const first = loader.loadFromIPC()
    const firstRejection = expect(first).rejects.toBeInstanceOf(ConfigLoadCancelledError)
    const second = loader.loadFromIPC()

    ipc.invokes[0].reject(new Error('too late'))
    await Promise.resolve()

    await firstRejection
    expect(warn).not.toHaveBeenCalled()
    expect(loader.getState()).toMatchObject({ loading: true, loaded: false, config: null })

    ipc.emit('load-config', validConfig)
    await expect(second).resolves.toMatchObject({ examName: 'Finals' })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('clear cancels an active request and stays cleared after late IPC activity', async () => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    const result = loader.loadFromIPC()
    const rejection = expect(result).rejects.toBeInstanceOf(ConfigLoadCancelledError)

    loader.clear()

    await rejection
    expect(loader.getState()).toEqual({
      loading: false,
      loaded: false,
      error: null,
      source: null,
      config: null
    })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)

    ipc.invokes[0].reject(new Error('too late'))
    ipc.emit('load-config', validConfig)
    await Promise.resolve()

    expect(loader.getState()).toEqual({
      loading: false,
      loaded: false,
      error: null,
      source: null,
      config: null
    })
  })

  it.each([
    ['direct', (loader: ReturnType<typeof createConfigLoader>) => loader.loadDirect(validConfig)],
    [
      'editor',
      (loader: ReturnType<typeof createConfigLoader>) => loader.loadFromEditor(validConfig)
    ],
    ['file', (loader: ReturnType<typeof createConfigLoader>) => loader.loadFromFile('/exam.json')],
    [
      'url',
      (loader: ReturnType<typeof createConfigLoader>) => loader.loadFromUrl('https://example.test')
    ]
  ] as const)('a %s load cancels active IPC and remains current', async (sourceType, startLoad) => {
    const ipc = new FakeIpcRenderer()
    const loader = createConfigLoader(ipc)
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, text: () => Promise.resolve(validConfig) })
    )
    const ipcResult = loader.loadFromIPC()
    const ipcRejection = expect(ipcResult).rejects.toBeInstanceOf(ConfigLoadCancelledError)

    const replacement = startLoad(loader)

    await ipcRejection
    await expect(replacement).resolves.toMatchObject({ examName: 'Finals' })
    expect(ipc.listenerCount('load-config')).toBe(0)
    expect(vi.getTimerCount()).toBe(0)

    ipc.invokes[0].resolve(JSON.stringify({ examName: 'Stale IPC', message: '', examInfos: [] }))
    ipc.emit('load-config', JSON.stringify({ examName: 'Stale event', message: '', examInfos: [] }))
    await Promise.resolve()

    expect(loader.getState()).toMatchObject({
      loading: false,
      loaded: true,
      source: { type: sourceType },
      config: { examName: 'Finals' }
    })
  })
})
