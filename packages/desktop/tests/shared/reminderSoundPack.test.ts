import { describe, expect, it } from 'vitest'
import {
  POND_REMINDER_SOUND_PACK,
  selectReminderSoundPack,
  type ReminderSoundPackSummary
} from '../../src/shared/reminderSoundPack'

const imported = { id: 'custom', name: 'Custom' } as ReminderSoundPackSummary

describe('selectReminderSoundPack', () => {
  it('returns the selected installed package', () => {
    expect(selectReminderSoundPack([POND_REMINDER_SOUND_PACK, imported], 'custom')).toBe(imported)
  })

  it.each([undefined, '', 'missing'])('falls back to Pond for invalid selection %p', (selected) => {
    expect(selectReminderSoundPack([imported], selected)).toBe(POND_REMINDER_SOUND_PACK)
  })
})
