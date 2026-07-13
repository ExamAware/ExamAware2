/**
 * @vitest-environment jsdom
 */

import { flushPromises, mount } from '@vue/test-utils'
import { nextTick, reactive, ref } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => {
  const settings: Record<string, unknown> = {}
  type Kind = 'start' | 'alert' | 'end'
  type Result = { ok: true; kind: Kind } | { ok: false; kind: Kind; reason: 'playback-error' }
  const play = vi.fn<(...args: unknown[]) => Promise<Result>>(() =>
    Promise.resolve({ ok: true, kind: 'start' })
  )
  const dispose = vi.fn()
  const createController = vi.fn(() => ({
    play,
    preview: vi.fn(),
    stop: vi.fn(),
    dispose
  }))

  return {
    settings,
    settingsProxy: undefined as Record<string, unknown> | undefined,
    play,
    dispose,
    createController,
    controllerOptions: undefined as any,
    listPacks: vi.fn()
  }
})

vi.mock('@dsz-examaware/player', async () => {
  const { defineComponent } = await import('vue')
  return {
    ExamPlayer: defineComponent({
      name: 'ExamPlayer',
      emits: ['colorful-alert'],
      template: '<div data-testid="exam-player" />'
    })
  }
})

vi.mock('@renderer/services/reminderSound', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@renderer/services/reminderSound')>()
  return { ...actual, createReminderSoundController: mocks.createController }
})

vi.mock('@renderer/stores/settingsStore', () => ({
  useSettingsStore: () => ({
    get: (key: string, fallback?: unknown) =>
      Object.prototype.hasOwnProperty.call(mocks.settingsProxy ?? mocks.settings, key)
        ? (mocks.settingsProxy ?? mocks.settings)[key]
        : fallback
  })
}))

vi.mock('@renderer/runtime/desktopApi', () => ({
  useDesktopApi: () => ({
    playback: {
      uiScale: ref(1),
      uiDensity: ref('comfortable'),
      largeClockEnabled: ref(false),
      largeClockScale: ref(1),
      examInfoLargeFont: ref(false)
    }
  })
}))

vi.mock('@renderer/composables/useConfigLoader', () => ({
  useConfigLoader: () => ({
    loading: ref(false),
    loaded: ref(true),
    config: ref(null),
    source: ref(null),
    loadFromIPC: vi.fn(() => Promise.resolve()),
    reload: vi.fn()
  })
}))

const destroyTimeProvider = vi.fn()
vi.mock('@renderer/adapters/ElectronTimeProvider', () => ({
  ElectronTimeProvider: class {
    performSync = vi.fn(() => Promise.resolve())
    destroy = destroyTimeProvider
    getTimeSyncStatusText = vi.fn(() => '')
    getSyncStatus = vi.fn(() => ({}))
  }
}))

vi.mock('@renderer/core/recentFileManager', () => ({
  RecentFileManager: { addRecentFile: vi.fn() }
}))

vi.mock('@renderer/core/themeManager', () => ({
  getThemeMode: vi.fn(() => 'system'),
  applyThemeMode: vi.fn()
}))

vi.mock('tdesign-vue-next', () => ({
  NotifyPlugin: {
    success: vi.fn(),
    info: vi.fn(),
    warning: vi.fn(),
    error: vi.fn()
  }
}))

import PlayerView from '@renderer/views/PlayerView.vue'

const emitSound = async (wrapper: ReturnType<typeof mount>, kind: 'start' | 'alert' | 'end') => {
  wrapper.findComponent({ name: 'ExamPlayer' }).vm.$emit('colorful-alert', { kind })
  await nextTick()
}

describe('PlayerView reminder sound integration', () => {
  beforeEach(() => {
    mocks.settingsProxy ??= reactive(mocks.settings)
    for (const key of Object.keys(mocks.settingsProxy)) delete mocks.settingsProxy[key]
    Object.assign(mocks.settingsProxy, {
      'player.reminderSound.enabled': true,
      'player.reminderSound.start': true,
      'player.reminderSound.alert': true,
      'player.reminderSound.end': true,
      'player.reminderSound.volume': 0.7,
      'player.reminderSound.packId': 'pond'
    })
    mocks.listPacks.mockReset().mockResolvedValue([
      {
        id: 'pond',
        name: 'Pond 池塘',
        builtIn: true,
        sounds: {
          start: { name: 'Begin 开始', src: './audio/exam-start.mp3' },
          alert: { name: 'Pre-end 即将结束', src: './audio/exam-alert.mp3' },
          end: { name: 'End 结束', src: './audio/exam-end.mp3' }
        }
      },
      {
        id: 'lake-bells',
        name: 'Lake Bells 湖畔',
        builtIn: false,
        sounds: {
          start: { name: '晨光', src: 'examaware-sound://pack/lake-bells/start' },
          alert: { name: '涟漪', src: 'examaware-sound://pack/lake-bells/alert' },
          end: { name: '归岸', src: 'examaware-sound://pack/lake-bells/end' }
        }
      }
    ])
    mocks.play.mockResolvedValue({ ok: true, kind: 'start' })
    Object.defineProperty(window, 'api', {
      configurable: true,
      value: { ipc: {}, config: {}, reminderSounds: { list: mocks.listPacks } }
    })
  })

  afterEach(() => {
    document.documentElement.removeAttribute('data-player-force-dark')
  })

  it('creates one shared controller and reports failures with event context', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const wrapper = mount(PlayerView)
    await flushPromises()

    expect(mocks.createController).toHaveBeenCalledTimes(1)
    const options = mocks.createController.mock.calls[0]?.[0]
    mocks.controllerOptions = options
    expect(options).toEqual(
      expect.objectContaining({
        baseUrl: document.baseURI,
        reporter: expect.any(Function)
      })
    )

    warn.mockClear()
    const error = new Error('decoder failed')
    options.reporter({ kind: 'alert', phase: 'load', error })
    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/alert.*load/), error)

    wrapper.unmount()
  })

  it('provides the selected package sources and refreshes when a new selection is not cached', async () => {
    mocks.settingsProxy!['player.reminderSound.packId'] = 'lake-bells'
    const wrapper = mount(PlayerView)
    await flushPromises()
    const options = mocks.createController.mock.calls[0]?.[0]

    expect(options.sourceProvider('alert')).toBe('examaware-sound://pack/lake-bells/alert')

    mocks.listPacks.mockResolvedValueOnce([
      ...(await mocks.listPacks.mock.results[0].value),
      {
        id: 'new-pack',
        name: 'New Pack',
        builtIn: false,
        sounds: {
          start: { name: 'New Start', src: 'examaware-sound://pack/new-pack/start' },
          alert: { name: 'New Alert', src: 'examaware-sound://pack/new-pack/alert' },
          end: { name: 'New End', src: 'examaware-sound://pack/new-pack/end' }
        }
      }
    ])
    mocks.settingsProxy!['player.reminderSound.packId'] = 'new-pack'
    await nextTick()
    await flushPromises()

    expect(mocks.listPacks).toHaveBeenCalledTimes(2)
    expect(options.sourceProvider('start')).toBe('examaware-sound://pack/new-pack/start')
    wrapper.unmount()
  })

  it.each(['start', 'alert', 'end'] as const)(
    'forwards semantic %s events with strictly normalized settings',
    async (kind) => {
      Object.assign(mocks.settingsProxy!, {
        'player.reminderSound.enabled': 'false',
        'player.reminderSound.start': false,
        'player.reminderSound.alert': 0,
        'player.reminderSound.end': true,
        'player.reminderSound.volume': 4
      })
      const wrapper = mount(PlayerView)
      await emitSound(wrapper, kind)

      expect(mocks.play).toHaveBeenLastCalledWith(kind, {
        master: true,
        start: false,
        alert: true,
        end: true,
        volume: 1
      })

      wrapper.unmount()
    }
  )

  it.each([
    { label: 'string', value: '0.4' },
    { label: 'NaN', value: Number.NaN },
    { label: 'positive infinity', value: Number.POSITIVE_INFINITY },
    { label: 'negative infinity', value: Number.NEGATIVE_INFINITY },
    { label: 'missing', value: undefined, missing: true }
  ])('uses the default volume for $label persisted values', async ({ value, missing }) => {
    if (missing) {
      delete mocks.settingsProxy!['player.reminderSound.volume']
    } else {
      mocks.settingsProxy!['player.reminderSound.volume'] = value
    }
    const wrapper = mount(PlayerView)

    await emitSound(wrapper, 'alert')

    expect(mocks.play).toHaveBeenLastCalledWith('alert', expect.objectContaining({ volume: 0.7 }))
    wrapper.unmount()
  })

  it('reads the latest switches and volume for every event without remounting', async () => {
    const wrapper = mount(PlayerView)
    await emitSound(wrapper, 'start')
    expect(mocks.play).toHaveBeenLastCalledWith('start', expect.objectContaining({ volume: 0.7 }))

    Object.assign(mocks.settingsProxy!, {
      'player.reminderSound.enabled': false,
      'player.reminderSound.alert': false,
      'player.reminderSound.volume': -0.25
    })
    await emitSound(wrapper, 'alert')

    expect(mocks.play).toHaveBeenLastCalledWith('alert', {
      master: false,
      start: true,
      alert: false,
      end: true,
      volume: 0
    })
    expect(mocks.createController).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })

  it('contains rejected playback and disposes the controller with existing cleanup', async () => {
    mocks.play.mockRejectedValueOnce(new Error('unexpected adapter rejection'))
    const wrapper = mount(PlayerView)

    await expect(emitSound(wrapper, 'end')).resolves.toBeUndefined()
    await flushPromises()
    wrapper.unmount()

    expect(mocks.dispose).toHaveBeenCalledTimes(1)
    expect(destroyTimeProvider).toHaveBeenCalledTimes(1)
  })

  it('contains a resolved playback failure result without disturbing later events', async () => {
    mocks.play
      .mockResolvedValueOnce({ ok: false, kind: 'alert', reason: 'playback-error' })
      .mockResolvedValueOnce({ ok: true, kind: 'end' })
    const wrapper = mount(PlayerView)

    await expect(emitSound(wrapper, 'alert')).resolves.toBeUndefined()
    await flushPromises()
    await expect(emitSound(wrapper, 'end')).resolves.toBeUndefined()

    expect(mocks.play).toHaveBeenNthCalledWith(1, 'alert', expect.any(Object))
    expect(mocks.play).toHaveBeenNthCalledWith(2, 'end', expect.any(Object))
    wrapper.unmount()
  })
})
