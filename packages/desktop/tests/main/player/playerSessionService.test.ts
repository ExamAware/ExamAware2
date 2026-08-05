import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { ExamConfig } from '@dsz-examaware/core'
import type { PlayerConfigStatus } from '../../../src/shared/types/desktop'

interface FakeWindow {
  id: number
  destroyed: boolean
  isDestroyed(): boolean
  isMinimized(): boolean
  isVisible(): boolean
  restore(): void
  show(): void
  focus(): void
  destroy(): void
}

const state = vi.hoisted(() => ({
  nextWindowId: 1,
  rendererStatus: { ok: true } as PlayerConfigStatus | undefined,
  windows: [] as FakeWindow[],
  receivedConfig: undefined as { data: string; source: string } | undefined
}))

vi.mock('electron', () => ({}))

vi.mock('../../../src/main/logging/logger', () => ({
  appLogger: { info: vi.fn(), warn: vi.fn() }
}))

vi.mock('../../../src/main/windows/playerWindow', () => ({
  createPlayerWindow: vi.fn(
    (
      config: { data: string; source: string },
      hooks: { onConfigStatus(status: PlayerConfigStatus): void; onClosed(): void }
    ) => {
      state.receivedConfig = config
      let minimized = false
      let visible = true
      const window: FakeWindow = {
        id: state.nextWindowId++,
        destroyed: false,
        isDestroyed: () => window.destroyed,
        isMinimized: () => minimized,
        isVisible: () => visible,
        restore: () => {
          minimized = false
        },
        show: () => {
          visible = true
        },
        focus: vi.fn(),
        destroy: () => {
          if (window.destroyed) return
          window.destroyed = true
          hooks.onClosed()
        }
      }
      state.windows.push(window)
      if (state.rendererStatus) {
        queueMicrotask(() => hooks.onConfigStatus(state.rendererStatus as PlayerConfigStatus))
      }
      return window
    }
  )
}))

import { PlayerSessionService } from '../../../src/main/player/playerSessionService'

const examConfig = (name = 'Final Exam'): ExamConfig => ({
  examName: name,
  message: 'Be prepared',
  examInfos: [
    {
      name: 'Math',
      start: '2026-07-30T09:00:00',
      end: '2026-07-30T10:00:00',
      alertTime: 10
    }
  ]
})

describe('PlayerSessionService', () => {
  beforeEach(() => {
    state.nextWindowId = 1
    state.rendererStatus = { ok: true }
    state.windows.length = 0
    state.receivedConfig = undefined
  })

  afterEach(() => vi.clearAllMocks())

  it('prepares JSON and returns actionable validation failures', async () => {
    const service = new PlayerSessionService()
    const prepared = await service.prepare({ kind: 'json', data: JSON.stringify(examConfig()) })

    expect(prepared).toMatchObject({
      source: 'json',
      config: { examName: 'Final Exam' },
      validation: { valid: true, errors: [] }
    })
    await expect(
      service.prepare({ kind: 'config', config: { ...examConfig(), examInfos: [] } })
    ).rejects.toMatchObject({
      code: 'invalid-config',
      details: { issues: [expect.objectContaining({ code: 'empty-exams' })] }
    })
  })

  it('tracks ready state and replaces the exact session', async () => {
    const service = new PlayerSessionService()
    const events: string[] = []
    service.onChanged((event) =>
      events.push(`${event.previousState ?? 'none'}:${event.session.state}`)
    )

    const first = await service.start({ kind: 'config', config: examConfig('First') })
    const second = await service.replace(first.id, { kind: 'config', config: examConfig('Second') })

    expect(first.state).toBe('ready')
    expect(service.get(first.id)?.state).toBe('closed')
    expect(second).toMatchObject({ state: 'ready', examName: 'Second', examCount: 1 })
    expect(state.receivedConfig).toMatchObject({
      source: 'config',
      data: expect.stringContaining('"examName": "Second"')
    })
    expect(second.id).not.toBe(first.id)
    expect(state.windows[0].destroyed).toBe(true)
    expect(events).toContain('opening:ready')
    await service.dispose()
  })

  it('preserves control deployment metadata in the session snapshot', async () => {
    const service = new PlayerSessionService()

    const session = await service.start(
      { kind: 'config', config: examConfig() },
      { origin: 'control', deploymentId: '43408313-512f-4e86-a91b-0a5f58b7ee3e' }
    )

    expect(session).toMatchObject({
      origin: 'control',
      deploymentId: '43408313-512f-4e86-a91b-0a5f58b7ee3e'
    })
    expect(service.get(session.id)).toMatchObject({
      origin: 'control',
      deploymentId: '43408313-512f-4e86-a91b-0a5f58b7ee3e'
    })
    await service.dispose()
  })

  it('destroys the window but preserves failed state when renderer readiness times out', async () => {
    state.rendererStatus = undefined
    const service = new PlayerSessionService()

    await expect(
      service.start({ kind: 'config', config: examConfig() }, { readyTimeoutMs: 5 })
    ).rejects.toMatchObject({ code: 'timeout' })

    expect(state.windows[0].destroyed).toBe(true)
    expect(service.list()[0]).toMatchObject({
      state: 'failed',
      error: { code: 'timeout' }
    })
    await service.dispose()
  })

  it('closes a window that reports invalid renderer configuration', async () => {
    state.rendererStatus = { ok: false, message: 'renderer rejected config' }
    const service = new PlayerSessionService()

    await expect(service.start({ kind: 'config', config: examConfig() })).rejects.toMatchObject({
      code: 'invalid-config',
      message: 'renderer rejected config'
    })
    expect(state.windows[0].destroyed).toBe(true)
    expect(service.list()[0].state).toBe('failed')
    await service.dispose()
  })
})
