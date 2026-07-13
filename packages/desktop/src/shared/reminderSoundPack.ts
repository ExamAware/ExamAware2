export const REMINDER_SOUND_KINDS = ['start', 'alert', 'end'] as const

export type ReminderSoundKind = (typeof REMINDER_SOUND_KINDS)[number]

export interface ReminderSoundPackManifestEntry {
  name: string
  path: string
  sha256: string
}

export interface ReminderSoundPackManifest {
  schemaVersion: 1
  id: string
  name: string
  version: string
  author: string
  sounds: Record<ReminderSoundKind, ReminderSoundPackManifestEntry>
}

export interface ReminderSoundPackSound {
  name: string
  src: string
}

export interface ReminderSoundPackSummary {
  id: string
  name: string
  version: string
  author: string
  builtIn: boolean
  sounds: Record<ReminderSoundKind, ReminderSoundPackSound>
}

export const POND_REMINDER_SOUND_PACK: ReminderSoundPackSummary = {
  id: 'pond',
  name: 'Pond 池塘',
  version: '1.0.0',
  author: 'ZongziTEK',
  builtIn: true,
  sounds: {
    start: { name: 'Begin 开始', src: './audio/exam-start.mp3' },
    alert: { name: 'Pre-end 即将结束', src: './audio/exam-alert.mp3' },
    end: { name: 'End 结束', src: './audio/exam-end.mp3' }
  }
}

export interface ReminderSoundPackImportResult {
  canceled: boolean
  pack?: ReminderSoundPackSummary
  packs: ReminderSoundPackSummary[]
}

export function selectReminderSoundPack(
  packs: readonly ReminderSoundPackSummary[],
  selectedId?: string
): ReminderSoundPackSummary {
  return packs.find((pack) => pack.id === selectedId) ?? POND_REMINDER_SOUND_PACK
}
