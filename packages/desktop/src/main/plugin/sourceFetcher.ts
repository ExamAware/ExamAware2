import { app } from 'electron'
import crypto from 'crypto'
import { promises as fsp } from 'fs'
import path from 'path'
import { DownloadManager } from '../runtime/downloadManager'
import {
  DEFAULT_PLUGIN_INDEX_URL,
  type PluginIndexPayload,
  type PluginSourceFetchRequest,
  type PluginSourceFetchResult
} from '../../shared/pluginSource'
import type { PluginLogger } from './types'

interface LoggerLike {
  info?: (...args: any[]) => void
  warn?: (...args: any[]) => void
  error?: (...args: any[]) => void
  debug?: (...args: any[]) => void
}

function hashKey(input: string) {
  return crypto.createHash('sha1').update(input).digest('hex')
}

function normalizeJsDelivr(url: string) {
  const match = url.match(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/(.+)$/)
  if (!match) return null
  const [, owner, repo, rest] = match
  const trimmed = rest.replace(/^refs\/heads\//, '')
  return `https://fastly.jsdelivr.net/gh/${owner}/${repo}@${trimmed}`
}

function buildCandidates(url: string, mirrors?: string[]) {
  const list = new Set<string>()
  list.add(url)
  if (mirrors) {
    mirrors.filter(Boolean).forEach((m) => list.add(m))
  }
  list.add(`https://ghproxy.com/${url}`)
  const jsdelivr = normalizeJsDelivr(url)
  if (jsdelivr) list.add(jsdelivr)
  return Array.from(list)
}

function isValidPayload(payload: any): payload is PluginIndexPayload {
  return payload && typeof payload === 'object' && Array.isArray(payload.plugins)
}

interface CacheEntry {
  payload: PluginIndexPayload
  etag?: string
  lastModified?: string
  fetchedAt?: string
}

export class PluginSourceFetcher {
  private readonly cacheDir: string
  private readonly downloader: DownloadManager
  private readonly logger?: LoggerLike

  constructor(
    options: { cacheDir?: string; downloader?: DownloadManager; logger?: PluginLogger } = {}
  ) {
    this.cacheDir =
      options.cacheDir ?? path.join(app.getPath('userData'), 'plugin-cache', 'sources')
    this.downloader = options.downloader ?? new DownloadManager({ logger: options.logger })
    this.logger = options.logger
  }

  async fetch(request?: PluginSourceFetchRequest): Promise<PluginSourceFetchResult> {
    const primary = (request?.url ?? DEFAULT_PLUGIN_INDEX_URL).trim()
    const candidates = buildCandidates(primary, request?.mirrors)
    const cacheKey = hashKey(primary)
    const cache = await this.readCache(cacheKey)
    const tried: string[] = []

    for (const url of candidates) {
      tried.push(url)
      const headers: Record<string, string> = {}
      if (cache?.etag) headers['if-none-match'] = cache.etag
      if (cache?.lastModified) headers['if-modified-since'] = cache.lastModified

      try {
        const res = await this.downloader.fetchBuffer(url, {
          headers,
          timeoutMs: request?.timeoutMs,
          cacheKey: `source:${url}`
        })
        const etag = res.headers.get('etag') ?? cache?.etag
        const lastModified = res.headers.get('last-modified') ?? cache?.lastModified

        if (res.status === 304 && cache?.payload) {
          return {
            url: primary,
            usedUrl: url,
            tried,
            fetchedAt: new Date().toISOString(),
            fromCache: true,
            stale: false,
            etag,
            lastModified,
            payload: cache.payload
          }
        }

        const buffer = res.buffer ?? Buffer.alloc(0)
        const payload = JSON.parse(buffer.toString('utf-8')) as PluginIndexPayload
        if (!isValidPayload(payload)) {
          throw new Error('插件源返回数据格式不正确')
        }
        await this.writeCache(cacheKey, payload, etag, lastModified)
        return {
          url: primary,
          usedUrl: url,
          tried,
          fetchedAt: new Date().toISOString(),
          fromCache: false,
          stale: false,
          etag,
          lastModified,
          payload
        }
      } catch (error) {
        this.logger?.warn?.('[PluginSourceFetcher] fetch failed', url, error)
      }
    }

    if (cache?.payload) {
      return {
        url: primary,
        usedUrl: primary,
        tried,
        fetchedAt: new Date().toISOString(),
        fromCache: true,
        stale: true,
        etag: cache.etag,
        lastModified: cache.lastModified,
        payload: cache.payload
      }
    }

    throw new Error('无法获取插件源清单')
  }

  private async readCache(key: string): Promise<CacheEntry | null> {
    try {
      const cachePath = path.join(this.cacheDir, `${key}.json`)
      const metaPath = path.join(this.cacheDir, `${key}.meta.json`)
      const [payloadRaw, metaRaw] = await Promise.all([
        fsp.readFile(cachePath, 'utf-8'),
        fsp.readFile(metaPath, 'utf-8').catch(() => '{}')
      ])
      const payload = JSON.parse(payloadRaw) as PluginIndexPayload
      const meta = JSON.parse(metaRaw) as {
        etag?: string
        lastModified?: string
        fetchedAt?: string
      }
      if (!isValidPayload(payload)) return null
      return {
        payload,
        etag: meta.etag,
        lastModified: meta.lastModified,
        fetchedAt: meta.fetchedAt
      }
    } catch (error) {
      this.logger?.debug?.('[PluginSourceFetcher] read cache failed', error)
      return null
    }
  }

  private async writeCache(
    key: string,
    payload: PluginIndexPayload,
    etag?: string,
    lastModified?: string
  ) {
    await fsp.mkdir(this.cacheDir, { recursive: true })
    const cachePath = path.join(this.cacheDir, `${key}.json`)
    const metaPath = path.join(this.cacheDir, `${key}.meta.json`)
    await Promise.all([
      fsp.writeFile(cachePath, JSON.stringify(payload, null, 2), 'utf-8'),
      fsp.writeFile(
        metaPath,
        JSON.stringify({ etag, lastModified, fetchedAt: new Date().toISOString() }, null, 2),
        'utf-8'
      )
    ])
  }
}
