import type { Ref } from 'vue'
import type { UIDensity } from '@dsz-examaware/player'
import { useSettingRef } from './useSetting'

const roundToStep = (value: number, step: number) => {
  if (!Number.isFinite(value) || step <= 0) return value
  return Math.round(value / step) * step
}

export const clampUiScale = (value: number | string) => {
  const num = Number(value)
  if (!Number.isFinite(num)) {
    return 1
  }
  const clamped = Math.min(2, Math.max(0.5, num))
  return Number(roundToStep(clamped, 0.01).toFixed(2))
}

export const clampLargeClockScale = (value: number | string) => {
  const num = Number(value)
  if (!Number.isFinite(num)) {
    return 1
  }
  const clamped = Math.min(1.8, Math.max(0.5, num))
  return Number(roundToStep(clamped, 0.05).toFixed(2))
}

export const normalizeDensity = (value: unknown): UIDensity => {
  if (value === 'comfortable' || value === 'cozy' || value === 'compact') {
    return value
  }
  return 'comfortable'
}

export interface PlaybackSettingsRefs {
  uiScale: Ref<number>
  uiDensity: Ref<UIDensity>
  largeClockEnabled: Ref<boolean>
  largeClockScale: Ref<number>
  examInfoLargeFont: Ref<boolean>
}

export const usePlaybackSettings = (): PlaybackSettingsRefs => {
  const uiScale = useSettingRef<number>('player.uiScale', 1, {
    mapIn: clampUiScale,
    mapOut: clampUiScale
  })

  const uiDensity = useSettingRef<UIDensity>('player.uiDensity', 'comfortable', {
    mapIn: normalizeDensity,
    mapOut: normalizeDensity
  })

  const largeClockEnabled = useSettingRef<boolean>('player.largeClockEnabled', false, {
    mapIn: (raw) => Boolean(raw),
    mapOut: (val) => Boolean(val)
  })

  const largeClockScale = useSettingRef<number>('player.largeClockScale', 1, {
    mapIn: clampLargeClockScale,
    mapOut: clampLargeClockScale
  })

  const examInfoLargeFont = useSettingRef<boolean>('player.examInfoLargeFont', false, {
    mapIn: (raw) => Boolean(raw),
    mapOut: (val) => Boolean(val)
  })

  return {
    uiScale,
    uiDensity,
    largeClockEnabled,
    largeClockScale,
    examInfoLargeFont
  }
}

export type { UIDensity } from '@dsz-examaware/player'
