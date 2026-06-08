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

export const clampPreCountdownMinutes = (value: number | string) => {
  const num = Number(value)
  if (!Number.isFinite(num)) {
    return 0
  }
  return Math.min(60, Math.max(0, Math.round(num)))
}

export interface PlaybackSettingsRefs {
  uiScale: Ref<number>
  uiDensity: Ref<UIDensity>
  largeClockEnabled: Ref<boolean>
  largeClockScale: Ref<number>
  examInfoLargeFont: Ref<boolean>
  preCountdownMinutes: Ref<number>
  pipShowRemaining: Ref<boolean>
  pipShowCurrent: Ref<boolean>
  materialFontScale: Ref<number>
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

  const preCountdownMinutes = useSettingRef<number>('player.preCountdownMinutes', 0, {
    mapIn: clampPreCountdownMinutes,
    mapOut: clampPreCountdownMinutes
  })

  const pipShowRemaining = useSettingRef<boolean>('player.pipShowRemaining', true, {
    mapIn: (raw) => Boolean(raw),
    mapOut: (val) => Boolean(val)
  })

  const pipShowCurrent = useSettingRef<boolean>('player.pipShowCurrent', false, {
    mapIn: (raw) => Boolean(raw),
    mapOut: (val) => Boolean(val)
  })

  const materialFontScale = useSettingRef<number>('player.materialFontScale', 1, {
    mapIn: (raw) => Math.min(3, Math.max(1, Number(raw) || 1)),
    mapOut: (val) => Math.min(3, Math.max(1, Number(val) || 1))
  })

  return {
    uiScale,
    uiDensity,
    largeClockEnabled,
    largeClockScale,
    examInfoLargeFont,
    preCountdownMinutes,
    pipShowRemaining,
    pipShowCurrent,
    materialFontScale
  }
}

export type { UIDensity } from '@dsz-examaware/player'
