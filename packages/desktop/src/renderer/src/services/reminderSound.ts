import type { ReminderSoundKind } from '../../../shared/reminderSoundPack'

export type { ReminderSoundKind } from '../../../shared/reminderSoundPack'

export const REMINDER_SOUND_SOURCES: Readonly<Record<ReminderSoundKind, string>> = {
  start: './audio/exam-start.mp3',
  alert: './audio/exam-alert.mp3',
  end: './audio/exam-end.mp3'
}

export interface ReminderSoundSettings {
  master: boolean
  start: boolean
  alert: boolean
  end: boolean
  volume: number
}

export type ReminderSoundSettingsInput = Partial<Record<keyof ReminderSoundSettings, unknown>>

export interface AudioLike {
  currentTime: number
  volume: number
  play(): Promise<void>
  pause(): void
  addEventListener(type: 'error', listener: (error?: unknown) => void): void
  removeEventListener(type: 'error', listener: (error?: unknown) => void): void
}

export type ReminderSoundResult =
  | { ok: true; kind: ReminderSoundKind }
  | {
      ok: false
      kind: ReminderSoundKind
      reason: 'disabled' | 'superseded' | 'playback-error' | 'disposed'
    }

export interface ReminderSoundFailure {
  kind: ReminderSoundKind
  phase: 'load' | 'play'
  error: unknown
}

export interface ReminderSoundController {
  play(kind: ReminderSoundKind, settings?: ReminderSoundSettingsInput): Promise<ReminderSoundResult>
  preview(
    kind: ReminderSoundKind,
    settings?: ReminderSoundSettingsInput
  ): Promise<ReminderSoundResult>
  stop(): void
  dispose(): void
}

export interface CreateReminderSoundControllerOptions {
  audioFactory?: (src: string, kind: ReminderSoundKind) => AudioLike
  baseUrl?: string | URL
  sourceProvider?: (kind: ReminderSoundKind) => string
  reporter?: (failure: ReminderSoundFailure) => unknown
}

interface CachedAudio {
  audio: AudioLike
  source: string
  onError: (error?: unknown) => void
  pendingPlays: number
  retired: boolean
  listenerAttached: boolean
}

interface ActivePlay {
  generation: number
  kind: ReminderSoundKind
  audio: AudioLike
  settled: boolean
  resolve: (result: ReminderSoundResult) => void
}

export function resolveReminderSoundSource(
  kind: ReminderSoundKind,
  baseUrl: string | URL = globalThis.location?.href ?? 'file:///',
  sources: Partial<Record<ReminderSoundKind, string>> = REMINDER_SOUND_SOURCES
): string {
  return new URL(sources[kind] ?? REMINDER_SOUND_SOURCES[kind], baseUrl).href
}

export function normalizeReminderSoundSettings(
  settings: ReminderSoundSettingsInput = {}
): ReminderSoundSettings {
  const booleanOrDefault = (value: unknown) => (typeof value === 'boolean' ? value : true)
  const volume =
    typeof settings.volume === 'number' && Number.isFinite(settings.volume)
      ? Math.min(1, Math.max(0, settings.volume))
      : 0.7

  return {
    master: booleanOrDefault(settings.master),
    start: booleanOrDefault(settings.start),
    alert: booleanOrDefault(settings.alert),
    end: booleanOrDefault(settings.end),
    volume
  }
}

export function shouldPlayReminderSound(
  kind: ReminderSoundKind,
  settings: ReminderSoundSettingsInput = {}
): boolean {
  const normalized = normalizeReminderSoundSettings(settings)
  return normalized.master && normalized[kind]
}

export function createReminderSoundController(
  options: CreateReminderSoundControllerOptions = {}
): ReminderSoundController {
  const audioFactory =
    options.audioFactory ?? ((src: string) => new Audio(src) as unknown as AudioLike)
  const reporter = options.reporter ?? (() => undefined)
  const cache = new Map<ReminderSoundKind, CachedAudio>()
  const allAudios = new Set<AudioLike>()
  const managedAudios = new Set<CachedAudio>()
  let active: ActivePlay | undefined
  let generation = 0
  let disposed = false

  const prepareReset = (audio: AudioLike) => {
    let failed = false
    let firstError: unknown
    try {
      audio.pause()
    } catch (error) {
      failed = true
      firstError = error
    }
    try {
      audio.currentTime = 0
    } catch (error) {
      if (!failed) firstError = error
      failed = true
    }
    if (failed) throw firstError
  }

  const resetBestEffort = (audio: AudioLike) => {
    try {
      audio.pause()
    } catch {
      // Media cleanup must never escape into the exam flow.
    }
    try {
      audio.currentTime = 0
    } catch {
      // A partially torn-down media element is safe to abandon.
    }
  }

  const removeErrorListenerBestEffort = (cached: CachedAudio) => {
    if (!cached.listenerAttached) return true
    try {
      cached.audio.removeEventListener('error', cached.onError)
      cached.listenerAttached = false
      return true
    } catch {
      // Listener removal is cleanup only and cannot affect controller results.
      return false
    }
  }

  const reportBestEffort = (failure: ReminderSoundFailure) => {
    try {
      const result = reporter(failure)
      void Promise.resolve(result).catch(() => undefined)
    } catch {
      // Diagnostics are observational and must not alter playback behavior.
    }
  }

  const settle = (entry: ActivePlay, result: ReminderSoundResult) => {
    if (entry.settled) return false
    entry.settled = true
    if (active === entry) active = undefined
    entry.resolve(result)
    return true
  }

  const invalidateActive = (reason: 'superseded' | 'disposed') => {
    if (!active) return
    settle(active, { ok: false, kind: active.kind, reason })
  }

  const releaseRetired = (cached: CachedAudio) => {
    if (cached.retired && cached.pendingPlays === 0) {
      allAudios.delete(cached.audio)
      if (!cached.listenerAttached) managedAudios.delete(cached)
    }
  }

  const getAudio = (kind: ReminderSoundKind) => {
    const source = resolveReminderSoundSource(
      kind,
      options.baseUrl,
      options.sourceProvider ? { [kind]: options.sourceProvider(kind) } : undefined
    )
    const existing = cache.get(kind)
    if (existing && existing.pendingPlays === 0 && existing.source === source) return existing
    if (existing && existing.pendingPlays === 0) {
      prepareReset(existing.audio)
      existing.retired = true
      removeErrorListenerBestEffort(existing)
      cache.delete(kind)
      releaseRetired(existing)
    }

    const audio = audioFactory(source, kind)
    const onError = (error?: unknown) => {
      const entry = active
      if (!entry || entry.audio !== audio || entry.generation !== generation || entry.settled)
        return
      if (settle(entry, { ok: false, kind: entry.kind, reason: 'playback-error' })) {
        reportBestEffort({ kind: entry.kind, phase: 'load', error })
      }
    }
    const cached: CachedAudio = {
      audio,
      source,
      onError,
      pendingPlays: 0,
      retired: false,
      listenerAttached: true
    }
    managedAudios.add(cached)
    try {
      audio.addEventListener('error', onError)
    } catch (error) {
      if (removeErrorListenerBestEffort(cached)) managedAudios.delete(cached)
      resetBestEffort(audio)
      throw error
    }
    cache.set(kind, cached)
    allAudios.add(audio)
    return cached
  }

  const begin = (
    kind: ReminderSoundKind,
    settings: ReminderSoundSettingsInput,
    bypassSwitches: boolean
  ): Promise<ReminderSoundResult> => {
    if (disposed) return Promise.resolve({ ok: false, kind, reason: 'disposed' })

    generation += 1
    invalidateActive('superseded')
    let normalized: ReminderSoundSettings
    try {
      normalized = normalizeReminderSoundSettings(settings)
    } catch (error) {
      reportBestEffort({ kind, phase: 'play', error })
      return Promise.resolve({ ok: false, kind, reason: 'playback-error' })
    }
    if (!normalized.master || (!bypassSwitches && !normalized[kind])) {
      return Promise.resolve({ ok: false, kind, reason: 'disabled' })
    }

    const existing = cache.get(kind)
    if (existing && existing.pendingPlays > 0) {
      try {
        prepareReset(existing.audio)
      } catch (error) {
        reportBestEffort({ kind, phase: 'play', error })
        return Promise.resolve({ ok: false, kind, reason: 'playback-error' })
      }
      existing.retired = true
      removeErrorListenerBestEffort(existing)
      cache.delete(kind)
    }
    let cached: CachedAudio
    try {
      cached = getAudio(kind)
    } catch (error) {
      reportBestEffort({ kind, phase: 'load', error })
      return Promise.resolve({ ok: false, kind, reason: 'playback-error' })
    }
    const { audio } = cached
    try {
      let resetFailed = false
      let firstResetError: unknown
      for (const [otherKind, otherCached] of cache) {
        if (otherKind === kind) continue
        try {
          prepareReset(otherCached.audio)
        } catch (error) {
          if (!resetFailed) firstResetError = error
          resetFailed = true
        }
      }
      if (resetFailed) throw firstResetError
      audio.volume = normalized.volume
      audio.currentTime = 0
    } catch (error) {
      reportBestEffort({ kind, phase: 'play', error })
      return Promise.resolve({ ok: false, kind, reason: 'playback-error' })
    }

    const currentGeneration = generation
    return new Promise<ReminderSoundResult>((resolve) => {
      const entry: ActivePlay = {
        generation: currentGeneration,
        kind,
        audio,
        settled: false,
        resolve
      }
      active = entry

      let playPromise: Promise<void>
      try {
        cached.pendingPlays += 1
        playPromise = audio.play()
      } catch (error) {
        cached.pendingPlays -= 1
        if (settle(entry, { ok: false, kind, reason: 'playback-error' })) {
          reportBestEffort({ kind, phase: 'play', error })
        }
        return
      }

      Promise.resolve(playPromise).then(
        () => {
          cached.pendingPlays -= 1
          if (entry.generation !== generation || disposed || entry.settled) {
            resetBestEffort(audio)
            releaseRetired(cached)
            return
          }
          settle(entry, { ok: true, kind })
          releaseRetired(cached)
        },
        (error) => {
          cached.pendingPlays -= 1
          if (entry.generation !== generation || disposed || entry.settled) {
            resetBestEffort(audio)
            releaseRetired(cached)
            return
          }
          if (settle(entry, { ok: false, kind, reason: 'playback-error' })) {
            reportBestEffort({ kind, phase: 'play', error })
          }
          releaseRetired(cached)
        }
      )
    })
  }

  return {
    play(kind, settings = {}) {
      return begin(kind, settings, false)
    },
    preview(kind, settings = {}) {
      return begin(kind, settings, true)
    },
    stop() {
      if (disposed) return
      generation += 1
      invalidateActive('superseded')
      for (const audio of allAudios) resetBestEffort(audio)
      for (const cached of cache.values()) {
        cached.retired = true
        removeErrorListenerBestEffort(cached)
        releaseRetired(cached)
      }
      cache.clear()
    },
    dispose() {
      if (disposed) return
      disposed = true
      generation += 1
      invalidateActive('disposed')
      for (const cached of managedAudios) {
        removeErrorListenerBestEffort(cached)
        resetBestEffort(cached.audio)
      }
      cache.clear()
      allAudios.clear()
      managedAudios.clear()
    }
  }
}
