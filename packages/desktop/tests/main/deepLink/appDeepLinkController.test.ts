import { beforeEach, describe, expect, it, vi } from 'vitest'

const state = vi.hoisted(() => ({
  createSettingsWindow: vi.fn(),
  createEditorWindow: vi.fn(),
  startPlayer: vi.fn(),
  error: vi.fn()
}))

vi.mock('../../../src/main/windows/settingsWindow', () => ({
  createSettingsWindow: state.createSettingsWindow
}))
vi.mock('../../../src/main/windows/editorWindow', () => ({
  createEditorWindow: state.createEditorWindow
}))
vi.mock('../../../src/main/player/playerSessionService', () => ({
  playerSessionService: { start: state.startPlayer }
}))
vi.mock('../../../src/main/logging/logger', () => ({
  appLogger: { error: state.error }
}))

import { AppDeepLinkController } from '../../../src/main/deepLink/appDeepLinkController'
import type { DeepLinkPayload } from '../../../src/shared/types/deepLink'

const payload = (
  host: string,
  pathname = '/',
  query: Record<string, string> = {}
): DeepLinkPayload => ({
  raw: `examaware://${host}${pathname}`,
  scheme: 'examaware',
  host,
  pathname,
  search: '',
  query
})

describe('AppDeepLinkController', () => {
  const focusMainWindow = vi.fn(() => null)
  const broadcast = vi.fn()
  const createTempConfigFromBase64 = vi.fn()
  const controller = new AppDeepLinkController({
    focusMainWindow,
    broadcast,
    createTempConfigFromBase64
  })

  beforeEach(() => {
    vi.clearAllMocks()
    state.startPlayer.mockResolvedValue({ id: 'player' })
    createTempConfigFromBase64.mockResolvedValue('/tmp/exam.json')
  })

  it('keeps focus and broadcast behavior around route dispatch', async () => {
    const input = payload('unknown', '/path', { id: '42' })
    const next = vi.fn().mockResolvedValue(undefined)
    const context = { payload: input, handled: false }

    await controller.focusAndBroadcast(context, next)

    expect(focusMainWindow).toHaveBeenCalledOnce()
    expect(broadcast).toHaveBeenCalledWith(input)
    expect(context.handled).toBe(true)
    expect(next).toHaveBeenCalledOnce()
  })

  it('keeps settings route parameter precedence', () => {
    controller.openSettings(
      payload('settings', '/path-page', { page: 'page-query', tab: 'tab-query' })
    )
    controller.openSettings(payload('settings', '/path-page', { tab: 'tab-query' }))
    controller.openSettings(payload('settings', '/path-page'))
    controller.openSettings(payload('settings'))

    expect(state.createSettingsWindow.mock.calls).toEqual([
      ['page-query'],
      ['tab-query'],
      ['path-page'],
      [undefined]
    ])
  })

  it('keeps editor file, data, and empty-target behavior', async () => {
    await expect(
      controller.openEditor(payload('editor', '/', { file: '/tmp/direct.json' }))
    ).resolves.toBe(true)
    await expect(controller.openEditor(payload('editor', '/', { data: 'encoded' }))).resolves.toBe(
      true
    )
    await expect(controller.openEditor(payload('editor'))).resolves.toBe(true)

    expect(createTempConfigFromBase64).toHaveBeenCalledWith('encoded', 'editor')
    expect(state.createEditorWindow.mock.calls).toEqual([
      ['/tmp/direct.json'],
      ['/tmp/exam.json'],
      [undefined]
    ])
  })

  it('keeps player file and data parameter behavior', async () => {
    await expect(
      controller.openPlayer(payload('player', '/', { file: '/tmp/direct.json' }))
    ).resolves.toBe(true)
    await expect(controller.openPlayer(payload('player', '/', { data: 'encoded' }))).resolves.toBe(
      true
    )
    await expect(controller.openPlayer(payload('player'))).resolves.toBe(false)

    expect(createTempConfigFromBase64).toHaveBeenCalledWith('encoded', 'player')
    expect(state.startPlayer.mock.calls).toEqual([
      [{ kind: 'file', path: '/tmp/direct.json' }],
      [{ kind: 'file', path: '/tmp/exam.json' }]
    ])
  })
})
