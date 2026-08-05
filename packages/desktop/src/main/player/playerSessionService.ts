import { EventEmitter } from 'node:events'
import { promises as fs } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { type BrowserWindow } from 'electron'
import {
  PluginApiError,
  type PlayerSessionEvent,
  type PlayerSessionSnapshot,
  type PlayerSource,
  type PlayerStartOptions,
  type PreparedPlayerSource
} from '@dsz-examaware/plugin-sdk'
import {
  parseExamConfigDetailed,
  validateExamConfigDetailed,
  type ExamConfig
} from '@dsz-examaware/core'
import { appLogger } from '../logging/logger'
import { secureFetch } from '../network/secureFetch'
import { createPlayerWindow } from '../windows/playerWindow'
import type { PlayerConfigStatus } from '../../shared/types/desktop'

const DEFAULT_MAX_BYTES = 2 * 1024 * 1024
const HARD_MAX_BYTES = 10 * 1024 * 1024
const DEFAULT_READY_TIMEOUT_MS = 10_000
const MAX_READY_TIMEOUT_MS = 5 * 60_000

export interface PlayerStartPolicy {
  allowLocalNetwork?: boolean
  allowUserExit?: () => boolean
}

interface SessionRecord {
  snapshot: PlayerSessionSnapshot
  window?: BrowserWindow
}

export class PlayerSessionService {
  private readonly sessions = new Map<string, SessionRecord>()
  private readonly events = new EventEmitter()
  private activeSessionId?: string

  async prepare(
    source: PlayerSource,
    options: PlayerStartOptions = {},
    policy: PlayerStartPolicy = {}
  ): Promise<PreparedPlayerSource> {
    const maxBytes = normalizeMaxBytes(options.maxBytes)
    let raw: string | ExamConfig

    switch (source.kind) {
      case 'file': {
        const stat = await fs.stat(source.path).catch((error) => {
          throw new PluginApiError(
            'io-error',
            'player',
            '无法读取考试配置文件',
            {
              path: source.path
            },
            error
          )
        })
        if (!stat.isFile()) {
          throw new PluginApiError('invalid-argument', 'player', '考试配置路径不是文件', {
            path: source.path
          })
        }
        if (stat.size > maxBytes) {
          throw new PluginApiError('invalid-argument', 'player', '考试配置文件超过大小限制', {
            path: source.path,
            size: stat.size,
            maxBytes
          })
        }
        raw = await fs.readFile(source.path, 'utf8')
        break
      }
      case 'config':
        raw = source.config
        break
      case 'json':
        raw = source.data
        break
      case 'url': {
        const allowLocalNetwork = options.allowLocalNetwork === true
        if (allowLocalNetwork && !policy.allowLocalNetwork) {
          throw new PluginApiError(
            'permission-denied',
            'player',
            '从局域网 URL 放映需要 network.local 权限'
          )
        }
        const response = await secureFetch(source.url, {
          headers: source.headers,
          timeoutMs: options.requestTimeoutMs,
          maxBytes,
          allowLocalNetwork
        })
        if (response.status < 200 || response.status >= 300) {
          throw new PluginApiError('network-error', 'player', `URL 返回 HTTP ${response.status}`, {
            url: response.url,
            status: response.status
          })
        }
        raw = new TextDecoder().decode(response.body)
        break
      }
      default:
        throw new PluginApiError('invalid-argument', 'player', '不支持的播放器数据源')
    }

    if (typeof raw === 'string' && Buffer.byteLength(raw, 'utf8') > maxBytes) {
      throw new PluginApiError('invalid-argument', 'player', '考试配置超过大小限制', {
        maxBytes
      })
    }

    const validation =
      typeof raw === 'string'
        ? parseExamConfigDetailed(raw, options.validation)
        : validateExamConfigDetailed(raw, options.validation)
    if (!validation.valid || !validation.config) {
      throw new PluginApiError('invalid-config', 'player', '考试配置校验失败', {
        issues: validation.issues
      })
    }

    return {
      source: source.kind,
      config: validation.config,
      json: `${JSON.stringify(validation.config, null, 2)}\n`,
      validation
    }
  }

  async start(
    source: PlayerSource,
    options: PlayerStartOptions = {},
    policy: PlayerStartPolicy = {}
  ): Promise<PlayerSessionSnapshot> {
    const launchStartedAt = performance.now()
    const id = randomUUID()
    const record: SessionRecord = {
      snapshot: {
        id,
        state: 'preparing',
        source: source.kind,
        createdAt: Date.now()
      }
    }
    record.snapshot.origin = options.origin
    record.snapshot.deploymentId = options.deploymentId
    this.sessions.set(id, record)
    this.emit(record)

    try {
      const active = this.activeSessionId ? this.sessions.get(this.activeSessionId) : undefined
      if (active && active.snapshot.state !== 'closed' && active.snapshot.state !== 'failed') {
        if (options.replaceExisting === false) {
          throw new PluginApiError('conflict', 'player', '已有播放器会话正在运行', {
            sessionId: active.snapshot.id
          })
        }
        await this.close(active.snapshot.id)
      }

      const prepared = await this.prepare(source, options, policy)
      record.snapshot.examName = prepared.config.examName
      record.snapshot.examCount = prepared.config.examInfos.length
      this.transition(record, 'opening')

      let resolveReady: (() => void) | undefined
      let rejectReady: ((error: Error) => void) | undefined
      const ready = new Promise<void>((resolve, reject) => {
        resolveReady = resolve
        rejectReady = reject
      })

      record.window = createPlayerWindow(
        {
          data: prepared.json,
          source: source.kind === 'file' ? source.path : source.kind
        },
        {
          onConfigStatus: (status) => {
            appLogger.info('[player] renderer acknowledged session', {
              sessionId: id,
              ok: status?.ok === true,
              elapsedMs: Math.round(performance.now() - launchStartedAt)
            })
            this.onRendererStatus(record, status, resolveReady, rejectReady)
          },
          allowUserExit: policy.allowUserExit,
          onClosed: () => {
            if (record.snapshot.state !== 'failed') this.transition(record, 'closed')
            if (this.activeSessionId === id) this.activeSessionId = undefined
          }
        },
        options.window
      )
      record.snapshot.windowId = record.window.id
      this.activeSessionId = id
      this.emit(record)
      appLogger.info('[player] window created', {
        sessionId: id,
        source: source.kind,
        elapsedMs: Math.round(performance.now() - launchStartedAt)
      })

      if (options.waitForReady !== false) {
        const readyTimeoutMs = normalizeReadyTimeout(options.readyTimeoutMs)
        await withTimeout(ready, readyTimeoutMs, () => {
          const error = new PluginApiError('timeout', 'player', '播放器窗口未在限定时间内就绪', {
            sessionId: id
          })
          this.fail(record, error)
          rejectReady?.(error)
        })
      }
      return cloneSnapshot(record.snapshot)
    } catch (error) {
      const apiError = PluginApiError.from(error, 'player')
      this.fail(record, apiError)
      if (record.window && !record.window.isDestroyed()) record.window.destroy()
      if (this.activeSessionId === id) this.activeSessionId = undefined
      throw apiError
    }
  }

  async replace(
    id: string,
    source: PlayerSource,
    options: PlayerStartOptions = {},
    policy: PlayerStartPolicy = {}
  ) {
    const record = this.requireSession(id)
    if (record.snapshot.state !== 'closed' && record.snapshot.state !== 'failed') {
      await this.close(id)
    }
    return this.start(source, { ...options, replaceExisting: true }, policy)
  }

  get(id: string) {
    const record = this.sessions.get(id)
    return record ? cloneSnapshot(record.snapshot) : undefined
  }

  list() {
    return Array.from(this.sessions.values(), ({ snapshot }) => cloneSnapshot(snapshot)).sort(
      (left, right) => right.createdAt - left.createdAt
    )
  }

  focus(id: string) {
    const record = this.requireSession(id)
    if (!record.window || record.window.isDestroyed()) {
      throw new PluginApiError('not-found', 'player', '播放器窗口不存在', { sessionId: id })
    }
    if (record.window.isMinimized()) record.window.restore()
    if (!record.window.isVisible()) record.window.show()
    record.window.focus()
  }

  async close(id: string) {
    const record = this.requireSession(id)
    if (record.snapshot.state === 'closed') return
    this.transition(record, 'closing')
    if (record.window && !record.window.isDestroyed()) record.window.destroy()
    else this.transition(record, 'closed')
    if (this.activeSessionId === id) this.activeSessionId = undefined
  }

  onChanged(listener: (event: PlayerSessionEvent) => void) {
    this.events.on('changed', listener)
    return () => this.events.off('changed', listener)
  }

  async dispose() {
    for (const id of Array.from(this.sessions.keys())) {
      try {
        await this.close(id)
      } catch (error) {
        appLogger.warn('[player] failed to close session during shutdown', error as Error)
      }
    }
    this.events.removeAllListeners()
  }

  private onRendererStatus(
    record: SessionRecord,
    status: PlayerConfigStatus | undefined,
    resolveReady?: () => void,
    rejectReady?: (error: Error) => void
  ) {
    if (status?.ok) {
      this.transition(record, 'ready')
      resolveReady?.()
      return
    }
    const error = new PluginApiError(
      'invalid-config',
      'player',
      status?.message || '播放器渲染进程未能加载考试配置',
      { sessionId: record.snapshot.id }
    )
    this.fail(record, error)
    rejectReady?.(error)
  }

  private fail(record: SessionRecord, error: PluginApiError) {
    if (record.snapshot.state === 'failed') return
    const previousState = record.snapshot.state
    record.snapshot.state = 'failed'
    record.snapshot.error = {
      code: error.code,
      message: error.message,
      details: error.details
    }
    this.emit(record, previousState)
  }

  private transition(record: SessionRecord, state: PlayerSessionSnapshot['state']) {
    if (record.snapshot.state === state) return
    const previousState = record.snapshot.state
    record.snapshot.state = state
    this.emit(record, previousState)
  }

  private emit(record: SessionRecord, previousState?: PlayerSessionSnapshot['state']) {
    this.events.emit('changed', {
      session: cloneSnapshot(record.snapshot),
      previousState
    } satisfies PlayerSessionEvent)
  }

  private requireSession(id: string) {
    const record = this.sessions.get(id)
    if (!record) {
      throw new PluginApiError('not-found', 'player', '播放器会话不存在', { sessionId: id })
    }
    return record
  }
}

function cloneSnapshot(snapshot: PlayerSessionSnapshot): PlayerSessionSnapshot {
  return {
    ...snapshot,
    error: snapshot.error ? { ...snapshot.error } : undefined
  }
}

function normalizeMaxBytes(value?: number) {
  if (value === undefined) return DEFAULT_MAX_BYTES
  if (!Number.isFinite(value) || value <= 0) {
    throw new PluginApiError('invalid-argument', 'player', 'maxBytes 必须是正数', { value })
  }
  return Math.min(Math.floor(value), HARD_MAX_BYTES)
}

function normalizeReadyTimeout(value?: number) {
  if (value === undefined) return DEFAULT_READY_TIMEOUT_MS
  if (!Number.isFinite(value) || value <= 0) {
    throw new PluginApiError('invalid-argument', 'player', 'readyTimeoutMs 必须是正数', {
      value
    })
  }
  return Math.min(Math.floor(value), MAX_READY_TIMEOUT_MS)
}

async function withTimeout(promise: Promise<void>, timeoutMs: number, onTimeout: () => void) {
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => {
          onTimeout()
          reject(new PluginApiError('timeout', 'player', '播放器启动超时', { timeoutMs }))
        }, timeoutMs)
      })
    ])
  } finally {
    if (timer !== undefined) clearTimeout(timer)
  }
}

export const playerSessionService = new PlayerSessionService()
