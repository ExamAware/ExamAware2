import { describe, expect, it, vi } from 'vitest'

import {
  REMINDER_SOUND_SOURCES,
  createReminderSoundController,
  normalizeReminderSoundSettings,
  resolveReminderSoundSource,
  shouldPlayReminderSound,
  type AudioLike,
  type ReminderSoundKind
} from '../../../src/renderer/src/services/reminderSound'

function deferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (error: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

class FakeAudio implements AudioLike {
  currentTime = 12
  volume = 1
  play = vi.fn<() => Promise<void>>().mockResolvedValue(undefined)
  pause = vi.fn()
  private listeners = new Set<(error?: unknown) => void>()

  constructor(readonly src: string) {}

  addEventListener(type: 'error', listener: (error?: unknown) => void) {
    if (type === 'error') this.listeners.add(listener)
  }

  removeEventListener(type: 'error', listener: (error?: unknown) => void) {
    if (type === 'error') this.listeners.delete(listener)
  }

  emitError(error?: unknown) {
    for (const listener of this.listeners) listener(error)
  }

  get listenerCount() {
    return this.listeners.size
  }
}

function setup() {
  const audios = new Map<ReminderSoundKind, FakeAudio>()
  const factory = vi.fn((src: string, kind: ReminderSoundKind) => {
    const audio = new FakeAudio(src)
    audios.set(kind, audio)
    return audio
  })
  const reporter = vi.fn()
  const controller = createReminderSoundController({
    audioFactory: factory,
    baseUrl: 'file:///app/dist/renderer/index.html',
    reporter
  })
  return { audios, factory, reporter, controller }
}

describe('reminder sound sources', () => {
  it('defines the canonical relative sources', () => {
    expect(REMINDER_SOUND_SOURCES).toEqual({
      start: './audio/exam-start.mp3',
      alert: './audio/exam-alert.mp3',
      end: './audio/exam-end.mp3'
    })
  })

  it('resolves audio beside a packaged renderer document', () => {
    expect(
      resolveReminderSoundSource(
        'start',
        'file:///Applications/ExamAware.app/Contents/Resources/app.asar/dist/renderer/index.html'
      )
    ).toBe(
      'file:///Applications/ExamAware.app/Contents/Resources/app.asar/dist/renderer/audio/exam-start.mp3'
    )
  })

  it('supports an injected URL base', () => {
    expect(resolveReminderSoundSource('alert', 'https://example.test/app/index.html')).toBe(
      'https://example.test/app/audio/exam-alert.mp3'
    )
  })

  it('resolves a selected package source without rewriting its custom protocol', () => {
    expect(
      resolveReminderSoundSource('end', 'file:///app/index.html', {
        end: 'examaware-sound://pack/lake-bells/end'
      })
    ).toBe('examaware-sound://pack/lake-bells/end')
  })
})

describe('reminder sound settings', () => {
  it('accepts only actual booleans and defaults switches to true', () => {
    expect(
      normalizeReminderSoundSettings({ master: false, start: 0, alert: 'false', end: true })
    ).toEqual({ master: false, start: true, alert: true, end: true, volume: 0.7 })
  })

  it.each([
    [-1, 0],
    [0.25, 0.25],
    [2, 1],
    ['0.2', 0.7],
    [Number.NaN, 0.7],
    [Number.POSITIVE_INFINITY, 0.7]
  ])('normalizes volume %p to %p', (value, expected) => {
    expect(normalizeReminderSoundSettings({ volume: value }).volume).toBe(expected)
  })

  it('requires both the master and kind switches', () => {
    expect(shouldPlayReminderSound('start', { master: true, start: true })).toBe(true)
    expect(shouldPlayReminderSound('start', { master: false, start: true })).toBe(false)
    expect(shouldPlayReminderSound('start', { master: true, start: false })).toBe(false)
  })
})

describe('reminder sound controller', () => {
  it('replaces cached audio when the selected package source changes', async () => {
    let selected = 'examaware-sound://pack/first/start'
    const created: FakeAudio[] = []
    const controller = createReminderSoundController({
      sourceProvider: () => selected,
      audioFactory: (src) => {
        const audio = new FakeAudio(src)
        created.push(audio)
        return audio
      }
    })

    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })
    selected = 'examaware-sound://pack/second/start'
    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })

    expect(created.map((audio) => audio.src)).toEqual([
      'examaware-sound://pack/first/start',
      'examaware-sound://pack/second/start'
    ])
    expect(created[0].pause).toHaveBeenCalled()
    expect(created[0].listenerCount).toBe(0)
  })

  it('contains source provider failures as load errors', async () => {
    const error = new Error('source unavailable')
    const reporter = vi.fn()
    const controller = createReminderSoundController({
      sourceProvider: () => {
        throw error
      },
      reporter
    })

    await expect(controller.play('alert')).resolves.toEqual({
      ok: false,
      kind: 'alert',
      reason: 'playback-error'
    })
    expect(reporter).toHaveBeenCalledWith({ kind: 'alert', phase: 'load', error })
  })

  it('converts audio creation and listener setup failures into load errors', async () => {
    const factoryError = new Error('factory failed')
    const factoryReporter = vi.fn()
    const factoryController = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory() {
        throw factoryError
      },
      reporter: factoryReporter
    })

    await expect(factoryController.play('start')).resolves.toEqual({
      ok: false,
      kind: 'start',
      reason: 'playback-error'
    })
    expect(factoryReporter).toHaveBeenCalledOnce()
    expect(factoryReporter).toHaveBeenCalledWith({
      kind: 'start',
      phase: 'load',
      error: factoryError
    })

    const listenerError = new Error('listener failed')
    const listenerReporter = vi.fn()
    const listenerController = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        const audio = new FakeAudio(src)
        audio.addEventListener = () => {
          throw listenerError
        }
        return audio
      },
      reporter: listenerReporter
    })

    await expect(listenerController.preview('alert')).resolves.toEqual({
      ok: false,
      kind: 'alert',
      reason: 'playback-error'
    })
    expect(listenerReporter).toHaveBeenCalledOnce()
    expect(listenerReporter).toHaveBeenCalledWith({
      kind: 'alert',
      phase: 'load',
      error: listenerError
    })

    const urlReporter = vi.fn()
    const urlController = createReminderSoundController({
      baseUrl: 'not a valid absolute URL',
      audioFactory: () => new FakeAudio('unused'),
      reporter: urlReporter
    })
    await expect(urlController.play('end')).resolves.toMatchObject({
      ok: false,
      kind: 'end',
      reason: 'playback-error'
    })
    expect(urlReporter).toHaveBeenCalledOnce()
    expect(urlReporter.mock.calls[0][0]).toMatchObject({ kind: 'end', phase: 'load' })
  })

  it('converts reset and volume setter failures into playback errors', async () => {
    const resetError = new Error('rewind failed')
    const reporter = vi.fn()
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src) {
        const audio = new FakeAudio(src)
        Object.defineProperty(audio, 'currentTime', {
          get: () => 0,
          set: () => {
            throw resetError
          }
        })
        return audio
      }
    })

    await expect(controller.play('end')).resolves.toEqual({
      ok: false,
      kind: 'end',
      reason: 'playback-error'
    })
    expect(reporter).toHaveBeenCalledOnce()
    expect(reporter).toHaveBeenCalledWith({ kind: 'end', phase: 'play', error: resetError })
  })

  it.each(['play', 'preview'] as const)(
    'converts a volume setter throw during %s into a play-phase error',
    async (method) => {
      const volumeError = new Error('volume failed')
      const reporter = vi.fn()
      const controller = createReminderSoundController({
        baseUrl: 'file:///app/index.html',
        reporter,
        audioFactory(src) {
          const audio = new FakeAudio(src)
          Object.defineProperty(audio, 'volume', {
            get: () => 1,
            set: () => {
              throw volumeError
            }
          })
          return audio
        }
      })

      await expect(controller[method]('alert')).resolves.toEqual({
        ok: false,
        kind: 'alert',
        reason: 'playback-error'
      })
      expect(reporter).toHaveBeenCalledOnce()
      expect(reporter).toHaveBeenCalledWith({
        kind: 'alert',
        phase: 'play',
        error: volumeError
      })
    }
  )

  it('attempts rewind and remaining media cleanup when pause throws during begin', async () => {
    const reporter = vi.fn()
    const audios = new Map<ReminderSoundKind, FakeAudio>()
    const rewindAttempts = new Map<ReminderSoundKind, number>()
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src, kind) {
        const audio = new FakeAudio(src)
        let currentTime = 5
        Object.defineProperty(audio, 'currentTime', {
          get: () => currentTime,
          set: (value: number) => {
            rewindAttempts.set(kind, (rewindAttempts.get(kind) ?? 0) + 1)
            currentTime = value
          }
        })
        audios.set(kind, audio)
        return audio
      }
    })

    await controller.play('start')
    await controller.play('alert')
    audios.get('start')!.pause.mockImplementation(() => {
      throw new Error('start pause failed')
    })
    const startRewindsBefore = rewindAttempts.get('start') ?? 0
    const alertRewindsBefore = rewindAttempts.get('alert') ?? 0

    await expect(controller.play('end')).resolves.toMatchObject({
      ok: false,
      kind: 'end',
      reason: 'playback-error'
    })
    expect(rewindAttempts.get('start')).toBeGreaterThan(startRewindsBefore)
    expect(rewindAttempts.get('alert')).toBeGreaterThan(alertRewindsBefore)
    expect(reporter).toHaveBeenCalledWith(expect.objectContaining({ kind: 'end', phase: 'play' }))
  })

  it('contains a pause throw while preparing an unresolved same-kind element', async () => {
    const pending = deferred<void>()
    const reporter = vi.fn()
    let rewindAttempts = 0
    let audio!: FakeAudio
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src) {
        audio = new FakeAudio(src)
        audio.play.mockReturnValueOnce(pending.promise)
        let currentTime = 6
        Object.defineProperty(audio, 'currentTime', {
          get: () => currentTime,
          set: (value: number) => {
            rewindAttempts += 1
            currentTime = value
          }
        })
        return audio
      }
    })

    const first = controller.play('start')
    audio.pause.mockImplementation(() => {
      throw new Error('pause failed')
    })
    const rewindsBefore = rewindAttempts
    await expect(controller.preview('start')).resolves.toMatchObject({
      ok: false,
      kind: 'start',
      reason: 'playback-error'
    })
    expect(rewindAttempts).toBeGreaterThan(rewindsBefore)
    expect(reporter).toHaveBeenCalledWith(expect.objectContaining({ kind: 'start', phase: 'play' }))

    pending.resolve()
    await expect(first).resolves.toMatchObject({ reason: 'superseded' })
  })

  it.each(['sync throw', 'promise rejection', 'media error'] as const)(
    'contains a reporter failure after %s',
    async (failureMode) => {
      const pending = deferred<void>()
      let audio!: FakeAudio
      const controller = createReminderSoundController({
        baseUrl: 'file:///app/index.html',
        reporter() {
          throw new Error('reporter failed')
        },
        audioFactory(src) {
          audio = new FakeAudio(src)
          if (failureMode === 'sync throw') {
            audio.play.mockImplementationOnce(() => {
              throw new Error('play failed')
            })
          } else if (failureMode === 'promise rejection') {
            audio.play.mockRejectedValueOnce(new Error('play failed'))
          } else {
            audio.play.mockReturnValueOnce(pending.promise)
          }
          return audio
        }
      })

      const result = controller.play('start')
      if (failureMode === 'media error') {
        expect(() => audio.emitError(new Error('media failed'))).not.toThrow()
      }
      await expect(result).resolves.toEqual({
        ok: false,
        kind: 'start',
        reason: 'playback-error'
      })
      await Promise.resolve()
    }
  )

  it.each(['sync throw', 'promise rejection', 'media error', 'load error'] as const)(
    'contains an asynchronously rejecting reporter after %s',
    async (failureMode) => {
      const pending = deferred<void>()
      let audio: FakeAudio | undefined
      const controller = createReminderSoundController({
        baseUrl: 'file:///app/index.html',
        reporter: async () => {
          throw new Error('async reporter failed')
        },
        audioFactory(src) {
          if (failureMode === 'load error') throw new Error('load failed')
          audio = new FakeAudio(src)
          if (failureMode === 'sync throw') {
            audio.play.mockImplementationOnce(() => {
              throw new Error('play failed')
            })
          } else if (failureMode === 'promise rejection') {
            audio.play.mockRejectedValueOnce(new Error('play failed'))
          } else {
            audio.play.mockReturnValueOnce(pending.promise)
          }
          return audio
        }
      })

      const result = controller.play('start')
      if (failureMode === 'media error') audio!.emitError(new Error('media failed'))
      await expect(result).resolves.toMatchObject({ reason: 'playback-error' })
      await new Promise((resolve) => setTimeout(resolve, 0))
    }
  )

  it('contains a reporter with a hostile then getter', async () => {
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory() {
        throw new Error('load failed')
      },
      reporter: (() =>
        Object.defineProperty({}, 'then', {
          get() {
            throw new Error('then getter failed')
          }
        })) as () => never
    })

    await expect(controller.play('start')).resolves.toMatchObject({ reason: 'playback-error' })
  })

  it('retries cleanup on dispose after listener setup and immediate removal both throw', async () => {
    let audio!: FakeAudio
    let removeAttempts = 0
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        audio = new FakeAudio(src)
        audio.addEventListener = (type, listener) => {
          FakeAudio.prototype.addEventListener.call(audio, type, listener)
          throw new Error('listener setup failed after registration')
        }
        audio.removeEventListener = (type, listener) => {
          removeAttempts += 1
          if (removeAttempts === 1) throw new Error('immediate removal failed')
          FakeAudio.prototype.removeEventListener.call(audio, type, listener)
        }
        return audio
      }
    })

    await expect(controller.play('start')).resolves.toMatchObject({ reason: 'playback-error' })
    expect(audio.listenerCount).toBe(1)
    controller.dispose()
    expect(removeAttempts).toBeGreaterThan(1)
    expect(audio.listenerCount).toBe(0)
  })

  it('retries failed rotation listener removal during dispose', async () => {
    const pending = deferred<void>()
    const created: FakeAudio[] = []
    let oldRemoveAttempts = 0
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        const audio = new FakeAudio(src)
        if (created.length === 0) {
          audio.play.mockReturnValueOnce(pending.promise)
          audio.removeEventListener = (type, listener) => {
            oldRemoveAttempts += 1
            if (oldRemoveAttempts === 1) throw new Error('rotation removal failed')
            FakeAudio.prototype.removeEventListener.call(audio, type, listener)
          }
        }
        created.push(audio)
        return audio
      }
    })

    const first = controller.play('start')
    await controller.play('start')
    expect(created[0].listenerCount).toBe(1)
    pending.resolve()
    await expect(first).resolves.toMatchObject({ reason: 'superseded' })
    controller.dispose()
    expect(oldRemoveAttempts).toBeGreaterThan(1)
    expect(created[0].listenerCount).toBe(0)
  })

  it('makes stop and dispose best-effort when media cleanup throws', async () => {
    let audio!: FakeAudio
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        audio = new FakeAudio(src)
        return audio
      }
    })
    await controller.play('start')
    audio.pause.mockImplementation(() => {
      throw new Error('pause failed')
    })
    audio.removeEventListener = () => {
      throw new Error('remove failed')
    }

    expect(() => controller.stop()).not.toThrow()
    expect(() => controller.dispose()).not.toThrow()
    expect(() => controller.dispose()).not.toThrow()
    await expect(controller.play('start')).resolves.toMatchObject({ reason: 'disposed' })
  })

  it('continues stop and dispose cleanup when currentTime setters throw', async () => {
    const audios = new Map<ReminderSoundKind, FakeAudio>()
    const rewindAttempts = new Map<ReminderSoundKind, number>()
    let throwOnStartRewind = false
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src, kind) {
        const audio = new FakeAudio(src)
        let currentTime = 9
        Object.defineProperty(audio, 'currentTime', {
          get: () => currentTime,
          set: (value: number) => {
            rewindAttempts.set(kind, (rewindAttempts.get(kind) ?? 0) + 1)
            if (kind === 'start' && throwOnStartRewind) throw new Error('rewind failed')
            currentTime = value
          }
        })
        audios.set(kind, audio)
        return audio
      }
    })

    await controller.play('start')
    await controller.play('end')
    throwOnStartRewind = true
    const endRewindsBefore = rewindAttempts.get('end') ?? 0
    expect(() => controller.stop()).not.toThrow()
    expect(rewindAttempts.get('end')).toBeGreaterThan(endRewindsBefore)

    expect(() => controller.dispose()).not.toThrow()
    expect(audios.get('start')!.listenerCount).toBe(0)
    expect(audios.get('end')!.listenerCount).toBe(0)
    expect(audios.get('end')!.currentTime).toBe(0)
  })

  it('keeps an unresolved cached element managed when rotation reset fails', async () => {
    const pending = deferred<void>()
    let throwOnRewind = false
    let currentTime = 0
    let audio!: FakeAudio
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        audio = new FakeAudio(src)
        audio.play.mockReturnValueOnce(pending.promise)
        Object.defineProperty(audio, 'currentTime', {
          get: () => currentTime,
          set: (value: number) => {
            if (throwOnRewind) throw new Error('rewind failed')
            currentTime = value
          }
        })
        return audio
      }
    })

    const first = controller.play('start')
    throwOnRewind = true
    await expect(controller.play('start')).resolves.toMatchObject({ reason: 'playback-error' })
    throwOnRewind = false
    pending.resolve()
    await expect(first).resolves.toMatchObject({ reason: 'superseded' })
    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })

    currentTime = 7
    controller.dispose()
    expect(currentTime).toBe(0)
  })

  it('lazily caches one element per kind, applies volume, rewinds, and stops other kinds', async () => {
    const { controller, factory, audios } = setup()

    await controller.play('start', { volume: 0.2 })
    const start = audios.get('start')!
    expect(factory).toHaveBeenCalledTimes(1)
    expect(start.volume).toBe(0.2)
    expect(start.currentTime).toBe(0)

    start.currentTime = 9
    await controller.play('start', { volume: 0.8 })
    expect(factory).toHaveBeenCalledTimes(1)
    expect(start.volume).toBe(0.8)

    await controller.play('end')
    expect(start.pause).toHaveBeenCalled()
    expect(start.currentTime).toBe(0)
  })

  it('requires the master switch while preview bypasses only the kind switch', async () => {
    const { controller, factory } = setup()
    await expect(controller.play('alert', { master: false })).resolves.toEqual({
      ok: false,
      kind: 'alert',
      reason: 'disabled'
    })
    await expect(controller.preview('alert', { master: false, alert: false })).resolves.toEqual({
      ok: false,
      kind: 'alert',
      reason: 'disabled'
    })
    expect(factory).not.toHaveBeenCalled()
    await expect(controller.preview('alert', { master: true, alert: false })).resolves.toEqual({
      ok: true,
      kind: 'alert'
    })
    expect(factory).toHaveBeenCalledTimes(1)
  })

  it('lets the newest request win when promises settle out of order', async () => {
    const { controller, audios } = setup()
    const firstPlay = deferred<void>()
    const first = controller.play('start')
    audios.get('start')!.play.mockReturnValueOnce(firstPlay.promise)
    // Re-run now that the controlled implementation is installed.
    const controlledFirst = controller.play('start')
    const secondPlay = deferred<void>()
    const start = audios.get('start')!
    start.play.mockReturnValueOnce(secondPlay.promise)
    const second = controller.play('start')

    await expect(controlledFirst).resolves.toMatchObject({ ok: false, reason: 'superseded' })
    secondPlay.resolve()
    await expect(second).resolves.toEqual({ ok: true, kind: 'start' })
    firstPlay.resolve()
    await first
  })

  it('does not let a stale same-kind settlement stop the current element', async () => {
    const firstPlay = deferred<void>()
    const secondPlay = deferred<void>()
    const created: FakeAudio[] = []
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      audioFactory(src) {
        const audio = new FakeAudio(src)
        audio.play.mockReturnValueOnce(
          created.length === 0 ? firstPlay.promise : secondPlay.promise
        )
        created.push(audio)
        return audio
      }
    })

    const first = controller.play('start')
    const second = controller.play('start')
    expect(created).toHaveLength(2)
    await expect(first).resolves.toMatchObject({ reason: 'superseded' })
    secondPlay.resolve()
    await expect(second).resolves.toEqual({ ok: true, kind: 'start' })
    const current = created[1]
    current.currentTime = 6
    const currentPauseCount = current.pause.mock.calls.length

    firstPlay.resolve()
    await Promise.resolve()
    expect(current.pause).toHaveBeenCalledTimes(currentPauseCount)
    expect(current.currentTime).toBe(6)
  })

  it('does not attribute an old same-kind element error to the current attempt', async () => {
    const firstPlay = deferred<void>()
    const secondPlay = deferred<void>()
    const created: FakeAudio[] = []
    const reporter = vi.fn()
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src) {
        const audio = new FakeAudio(src)
        audio.play.mockReturnValueOnce(
          created.length === 0 ? firstPlay.promise : secondPlay.promise
        )
        created.push(audio)
        return audio
      }
    })

    const first = controller.play('alert')
    const second = controller.play('alert')
    await expect(first).resolves.toMatchObject({ reason: 'superseded' })
    created[0].emitError(new Error('stale media error'))
    expect(reporter).not.toHaveBeenCalled()

    secondPlay.resolve()
    await expect(second).resolves.toEqual({ ok: true, kind: 'alert' })
    expect(created[0].listenerCount).toBe(0)
    expect(created[1].listenerCount).toBe(1)
  })

  it('rotates an unresolved element after stop before a new same-kind request', async () => {
    const oldPlay = deferred<void>()
    const created: FakeAudio[] = []
    const reporter = vi.fn()
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src) {
        const audio = new FakeAudio(src)
        if (created.length === 0) audio.play.mockReturnValueOnce(oldPlay.promise)
        created.push(audio)
        return audio
      }
    })

    const old = controller.play('start')
    controller.stop()
    await expect(old).resolves.toMatchObject({ reason: 'superseded' })
    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })
    expect(created).toHaveLength(2)
    created[1].currentTime = 8
    const pauseCount = created[1].pause.mock.calls.length

    created[0].emitError(new Error('stale after stop'))
    oldPlay.resolve()
    await Promise.resolve()
    expect(reporter).not.toHaveBeenCalled()
    expect(created[1].pause).toHaveBeenCalledTimes(pauseCount)
    expect(created[1].currentTime).toBe(8)

    const retiredPauseCount = created[0].pause.mock.calls.length
    controller.stop()
    controller.dispose()
    expect(created[0].pause).toHaveBeenCalledTimes(retiredPauseCount)
  })

  it('rotates an unresolved element after another kind intervenes', async () => {
    const oldPlay = deferred<void>()
    const starts: FakeAudio[] = []
    const reporter = vi.fn()
    const controller = createReminderSoundController({
      baseUrl: 'file:///app/index.html',
      reporter,
      audioFactory(src, kind) {
        const audio = new FakeAudio(src)
        if (kind === 'start') {
          if (starts.length === 0) audio.play.mockReturnValueOnce(oldPlay.promise)
          starts.push(audio)
        }
        return audio
      }
    })

    const old = controller.play('start')
    await controller.play('end')
    await expect(old).resolves.toMatchObject({ reason: 'superseded' })
    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })
    expect(starts).toHaveLength(2)
    starts[1].currentTime = 4
    const pauseCount = starts[1].pause.mock.calls.length

    starts[0].emitError(new Error('stale after intervening kind'))
    oldPlay.reject(new Error('stale rejection'))
    await Promise.resolve()
    expect(reporter).not.toHaveBeenCalled()
    expect(starts[1].pause).toHaveBeenCalledTimes(pauseCount)
    expect(starts[1].currentTime).toBe(4)
  })

  it('does not start audio for a disabled request while invalidating the pending attempt', async () => {
    const oldPlay = deferred<void>()
    const { controller, audios, factory } = setup()
    await controller.play('start')
    const start = audios.get('start')!
    start.play.mockReturnValueOnce(oldPlay.promise)
    const old = controller.play('start')

    await expect(controller.play('start', { master: false })).resolves.toMatchObject({
      reason: 'disabled'
    })
    await expect(old).resolves.toMatchObject({ reason: 'superseded' })
    expect(start.play).toHaveBeenCalledTimes(2)
    await expect(controller.play('start')).resolves.toEqual({ ok: true, kind: 'start' })
    expect(factory).toHaveBeenCalledTimes(2)
    oldPlay.resolve()
  })

  it('invalidates pending requests on stop and dispose', async () => {
    const { controller, audios, factory } = setup()
    const pending = deferred<void>()
    const initial = controller.play('end')
    await initial
    audios.get('end')!.play.mockReturnValueOnce(pending.promise)
    const stopped = controller.play('end')
    controller.stop()
    controller.stop()
    await expect(stopped).resolves.toMatchObject({ ok: false, reason: 'superseded' })

    const pendingAfterStop = deferred<void>()
    audios.get('end')!.play.mockReturnValueOnce(pendingAfterStop.promise)
    const disposed = controller.play('end')
    controller.dispose()
    controller.dispose()
    await expect(disposed).resolves.toMatchObject({ ok: false, reason: 'disposed' })
    pending.resolve()
    pendingAfterStop.resolve()
    const factoryCallsAfterDispose = factory.mock.calls.length
    await expect(controller.play('end')).resolves.toMatchObject({ ok: false, reason: 'disposed' })
    expect(factory).toHaveBeenCalledTimes(factoryCallsAfterDispose)
  })

  it('converts sync throws and rejections into playback errors and reports them once', async () => {
    const { controller, audios, reporter } = setup()
    await controller.play('start')
    const audio = audios.get('start')!
    const thrown = new Error('throw')
    audio.play.mockImplementationOnce(() => {
      throw thrown
    })
    await expect(controller.play('start')).resolves.toMatchObject({
      ok: false,
      reason: 'playback-error'
    })
    expect(reporter).toHaveBeenCalledWith({ kind: 'start', phase: 'play', error: thrown })

    const rejected = new Error('reject')
    audio.play.mockRejectedValueOnce(rejected)
    await expect(controller.play('start')).resolves.toMatchObject({
      ok: false,
      reason: 'playback-error'
    })
    expect(reporter).toHaveBeenCalledWith({ kind: 'start', phase: 'play', error: rejected })
  })

  it('settles on media error and ignores a later rejection for that generation', async () => {
    const { controller, audios, reporter } = setup()
    await controller.play('alert')
    const audio = audios.get('alert')!
    const pending = deferred<void>()
    audio.play.mockReturnValueOnce(pending.promise)
    const result = controller.play('alert')
    const mediaError = new Error('media error')
    audio.emitError(mediaError)

    await expect(result).resolves.toMatchObject({ ok: false, reason: 'playback-error' })
    pending.reject(new Error('later rejection'))
    await Promise.resolve()
    expect(reporter).toHaveBeenCalledTimes(1)
    expect(reporter).toHaveBeenCalledWith({ kind: 'alert', phase: 'load', error: mediaError })
  })

  it('ignores stale media errors and removes the single listener on dispose', async () => {
    const { controller, audios, reporter } = setup()
    await controller.play('start')
    const start = audios.get('start')!
    expect(start.listenerCount).toBe(1)
    await controller.play('end')
    start.emitError()
    expect(reporter).not.toHaveBeenCalled()

    controller.dispose()
    expect(start.listenerCount).toBe(0)
    expect(audios.get('end')!.listenerCount).toBe(0)
    expect(start.pause).toHaveBeenCalled()
    expect(start.currentTime).toBe(0)
  })
})
