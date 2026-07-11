export type ReminderSoundKind = 'start' | 'alert' | 'end'

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
  reporter?: (failure: ReminderSoundFailure) => void
}

interface CachedAudio {
  audio: AudioLike
  onError: (error?: unknown) => void
  pendingPlays: number
  retired: boolean
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
  baseUrl: string | URL = globalThis.location.href
): string {
  return new URL(REMINDER_SOUND_SOURCES[kind], baseUrl).href
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
  let active: ActivePlay | undefined
  let generation = 0
  let disposed = false

  const reset = (audio: AudioLike) => {
    audio.pause()
    audio.currentTime = 0
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
    if (cached.retired && cached.pendingPlays === 0) allAudios.delete(cached.audio)
  }

  const getAudio = (kind: ReminderSoundKind) => {
    const existing = cache.get(kind)
    if (existing && existing.pendingPlays === 0) return existing
    if (existing) {
      existing.retired = true
      reset(existing.audio)
      existing.audio.removeEventListener('error', existing.onError)
      cache.delete(kind)
    }

    const audio = audioFactory(resolveReminderSoundSource(kind, options.baseUrl), kind)
    const onError = (error?: unknown) => {
      const entry = active
      if (!entry || entry.audio !== audio || entry.generation !== generation || entry.settled)
        return
      if (settle(entry, { ok: false, kind: entry.kind, reason: 'playback-error' })) {
        reporter({ kind: entry.kind, phase: 'load', error })
      }
    }
    audio.addEventListener('error', onError)
    const cached: CachedAudio = { audio, onError, pendingPlays: 0, retired: false }
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
    if (!bypassSwitches && !shouldPlayReminderSound(kind, settings)) {
      return Promise.resolve({ ok: false, kind, reason: 'disabled' })
    }

    const normalized = normalizeReminderSoundSettings(settings)
    const cached = getAudio(kind)
    const { audio } = cached
    for (const [otherKind, cached] of cache) {
      if (otherKind !== kind) reset(cached.audio)
    }
    audio.volume = normalized.volume
    audio.currentTime = 0

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
          reporter({ kind, phase: 'play', error })
        }
        return
      }

      Promise.resolve(playPromise).then(
        () => {
          cached.pendingPlays -= 1
          if (entry.generation !== generation || disposed || entry.settled) {
            reset(audio)
            releaseRetired(cached)
            return
          }
          settle(entry, { ok: true, kind })
          releaseRetired(cached)
        },
        (error) => {
          cached.pendingPlays -= 1
          if (entry.generation !== generation || disposed || entry.settled) {
            reset(audio)
            releaseRetired(cached)
            return
          }
          if (settle(entry, { ok: false, kind, reason: 'playback-error' })) {
            reporter({ kind, phase: 'play', error })
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
      for (const audio of allAudios) reset(audio)
    },
    dispose() {
      if (disposed) return
      disposed = true
      generation += 1
      invalidateActive('disposed')
      for (const { audio, onError } of cache.values()) {
        audio.removeEventListener('error', onError)
      }
      for (const audio of allAudios) {
        reset(audio)
      }
      cache.clear()
      allAudios.clear()
    }
  }
}
