import fs from 'fs'
import { promises as fsp } from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { pipeline } from 'stream/promises'

export interface DownloadRequest {
  url?: string
  headers?: Record<string, string>
  signal?: AbortSignal
  timeoutMs?: number
  onProgress?: (percent: number) => void
  cacheKey?: string
  targetPath?: string
}

export interface DownloadResult {
  url: string
  status: number
  headers: Headers
  bytes: number
  elapsedMs: number
  path?: string
  buffer?: Buffer
}

interface LoggerLike {
  debug?: (...args: any[]) => void
  warn?: (...args: any[]) => void
  error?: (...args: any[]) => void
}

interface QueueJob<T> {
  task: () => Promise<T>
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
}

function mergeSignals(signals: (AbortSignal | undefined)[]) {
  const active = signals.filter(Boolean) as AbortSignal[]
  if (!active.length) return undefined
  if (active.length === 1) return active[0]
  const controller = new AbortController()
  const onAbort = () => {
    controller.abort()
    active.forEach((sig) => sig.removeEventListener('abort', onAbort))
  }
  active.forEach((sig) => sig.addEventListener('abort', onAbort))
  return controller.signal
}

export class DownloadManager {
  private readonly concurrency: number
  private readonly defaultTimeoutMs: number
  private readonly logger?: LoggerLike
  private active = 0
  private queue: QueueJob<any>[] = []
  private inflight = new Map<string, Promise<any>>()

  constructor(
    options: { concurrency?: number; defaultTimeoutMs?: number; logger?: LoggerLike } = {}
  ) {
    this.concurrency = Math.max(1, options.concurrency ?? 4)
    this.defaultTimeoutMs = options.defaultTimeoutMs ?? 15000
    this.logger = options.logger
  }

  async fetchBuffer(url: string, options: DownloadRequest = {}): Promise<DownloadResult> {
    const key = options.cacheKey ?? url
    return this.enqueue(key, () => this.run({ ...options, url }))
  }

  async fetchToFile(
    url: string,
    targetPath: string,
    options: DownloadRequest = {}
  ): Promise<DownloadResult> {
    const key = options.cacheKey ?? `${url}::${targetPath}`
    return this.enqueue(key, () => this.run({ ...options, url, targetPath }))
  }

  private enqueue<T>(key: string, task: () => Promise<T>): Promise<T> {
    const existing = this.inflight.get(key)
    if (existing) return existing as Promise<T>
    const job = this.schedule(task)
    this.inflight.set(key, job)
    job.finally(() => this.inflight.delete(key)).catch(() => {})
    return job
  }

  private schedule<T>(task: () => Promise<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.queue.push({ task, resolve, reject })
      this.drain()
    })
  }

  private drain() {
    while (this.active < this.concurrency && this.queue.length) {
      const job = this.queue.shift() as QueueJob<any>
      this.active += 1
      job
        .task()
        .then((res) => job.resolve(res))
        .catch((err) => job.reject(err))
        .finally(() => {
          this.active -= 1
          this.drain()
        })
    }
  }

  private async run(request: DownloadRequest): Promise<DownloadResult> {
    const url = request.url
    if (!url) {
      throw new Error('DownloadManager.run requires url')
    }
    const started = Date.now()
    const timeoutMs = request.timeoutMs ?? this.defaultTimeoutMs
    const timeoutController = new AbortController()
    const timer = setTimeout(() => timeoutController.abort(), timeoutMs)
    const signal = mergeSignals([request.signal, timeoutController.signal])

    try {
      const res = await fetch(url, { headers: request.headers, signal })
      if (res.status >= 400) {
        throw new Error(`Download failed (${res.status}) ${url}`)
      }
      const total = Number(res.headers.get('content-length') ?? 0)
      let received = 0

      if (!res.body) {
        return {
          url,
          status: res.status,
          headers: res.headers,
          bytes: received,
          elapsedMs: Date.now() - started
        }
      }

      if (request.targetPath) {
        await fsp.mkdir(path.dirname(request.targetPath), { recursive: true })
        const readable = Readable.fromWeb(res.body as any)
        await pipeline(
          readable,
          async function* (source: AsyncIterable<Uint8Array>) {
            for await (const chunk of source) {
              const buf = Buffer.from(chunk)
              received += buf.byteLength
              if (total > 0 && request.onProgress) {
                request.onProgress(Math.min(100, Math.round((received / total) * 100)))
              }
              yield buf
            }
          },
          fs.createWriteStream(request.targetPath)
        )
        return {
          url,
          status: res.status,
          headers: res.headers,
          bytes: received,
          elapsedMs: Date.now() - started,
          path: request.targetPath
        }
      }

      const chunks: Buffer[] = []
      const readable = Readable.fromWeb(res.body as any)
      for await (const chunk of readable) {
        const buf = Buffer.from(chunk as Buffer)
        received += buf.byteLength
        if (total > 0 && request.onProgress) {
          request.onProgress(Math.min(100, Math.round((received / total) * 100)))
        }
        chunks.push(buf)
      }

      return {
        url,
        status: res.status,
        headers: res.headers,
        bytes: received,
        elapsedMs: Date.now() - started,
        buffer: Buffer.concat(chunks)
      }
    } catch (error) {
      this.logger?.warn?.('[DownloadManager] download failed', url, error)
      throw error
    } finally {
      clearTimeout(timer)
    }
  }
}
