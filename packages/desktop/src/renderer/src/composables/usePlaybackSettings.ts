import type { Ref } from 'vue'
import type { UIDensity } from '@dsz-examaware/player'

// 本地常量：避免设置模块运行时导入整个播放器包（组件、TDesign、键盘样式）。
const DEFAULT_PLAYER_THEME_ID = 'default'
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

export const normalizeThemeId = (value: unknown): string => {
  return typeof value === 'string' && value.trim() ? value.trim() : DEFAULT_PLAYER_THEME_ID
}

export interface PlaybackSettingsRefs {
  uiScale: Ref<number>
  uiDensity: Ref<UIDensity>
  largeClockEnabled: Ref<boolean>
  largeClockScale: Ref<number>
  examInfoLargeFont: Ref<boolean>
  themeId: Ref<string>
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

  const themeId = useSettingRef<string>('player.themeId', DEFAULT_PLAYER_THEME_ID, {
    mapIn: normalizeThemeId,
    mapOut: normalizeThemeId
  })

  return {
    uiScale,
    uiDensity,
    largeClockEnabled,
    largeClockScale,
    examInfoLargeFont,
    themeId
  }
}

export type { UIDensity } from '@dsz-examaware/player'
