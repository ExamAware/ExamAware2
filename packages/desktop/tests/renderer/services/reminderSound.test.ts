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

  it('returns disabled without creating audio, while preview bypasses switches', async () => {
    const { controller, factory } = setup()
    await expect(controller.play('alert', { master: false })).resolves.toEqual({
      ok: false,
      kind: 'alert',
      reason: 'disabled'
    })
    await expect(controller.preview('alert', { master: false, alert: false })).resolves.toEqual({
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
