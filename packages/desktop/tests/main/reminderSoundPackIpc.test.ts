import { describe, expect, it, vi } from 'vitest'
import {
  createReminderSoundProtocolHandler,
  registerReminderSoundPackIpc
} from '../../src/main/reminderSoundPackIpc'
import {
  POND_REMINDER_SOUND_PACK,
  type ReminderSoundPackSummary
} from '../../src/shared/reminderSoundPack'

const importedPack: ReminderSoundPackSummary = {
  id: 'lake-bells',
  name: 'Lake Bells 湖畔',
  version: '1.2.0',
  author: 'Test',
  builtIn: false,
  sounds: {
    start: { name: '晨光', src: 'examaware-sound://pack/lake-bells/start' },
    alert: { name: '涟漪', src: 'examaware-sound://pack/lake-bells/alert' },
    end: { name: '归岸', src: 'examaware-sound://pack/lake-bells/end' }
  }
}

describe('reminder sound pack IPC', () => {
  it('lists packages and imports only the file selected by the restricted dialog', async () => {
    const handlers = new Map<string, (...args: any[]) => any>()
    const store = {
      list: vi.fn().mockResolvedValue([POND_REMINDER_SOUND_PACK, importedPack]),
      install: vi.fn().mockResolvedValue(importedPack),
      resolveAsset: vi.fn()
    }
    const showOpenDialog = vi.fn().mockResolvedValue({
      canceled: false,
      filePaths: ['/workspace/lake-bells.ea2r']
    })
    registerReminderSoundPackIpc({
      handle: (channel, listener) => handlers.set(channel, listener),
      showOpenDialog,
      store
    })

    await expect(handlers.get('reminder-sounds:list')?.({})).resolves.toEqual([
      POND_REMINDER_SOUND_PACK,
      importedPack
    ])
    await expect(handlers.get('reminder-sounds:import')?.({})).resolves.toEqual({
      canceled: false,
      pack: importedPack,
      packs: [POND_REMINDER_SOUND_PACK, importedPack]
    })
    expect(showOpenDialog).toHaveBeenCalledWith({
      properties: ['openFile'],
      filters: [{ name: 'ExamAware 铃声包', extensions: ['ea2r'] }]
    })
    expect(store.install).toHaveBeenCalledWith('/workspace/lake-bells.ea2r')
  })

  it('does not install anything when import is canceled', async () => {
    const handlers = new Map<string, (...args: any[]) => any>()
    const store = {
      list: vi.fn().mockResolvedValue([POND_REMINDER_SOUND_PACK]),
      install: vi.fn(),
      resolveAsset: vi.fn()
    }
    registerReminderSoundPackIpc({
      handle: (channel, listener) => handlers.set(channel, listener),
      showOpenDialog: vi.fn().mockResolvedValue({ canceled: true, filePaths: [] }),
      store
    })

    await expect(handlers.get('reminder-sounds:import')?.({})).resolves.toEqual({
      canceled: true,
      packs: [POND_REMINDER_SOUND_PACK]
    })
    expect(store.install).not.toHaveBeenCalled()
  })
})

describe('reminder sound pack protocol', () => {
  it('maps only known pack sound URLs to validated store assets', () => {
    const store = {
      resolveAsset: vi.fn((id: string, kind: string) =>
        id === 'lake-bells' && kind === 'alert' ? '/app-data/packs/lake-bells/alert.wav' : undefined
      )
    }
    const handler = createReminderSoundProtocolHandler(store)
    const callback = vi.fn()

    handler({ url: 'examaware-sound://pack/lake-bells/alert' } as any, callback)

    expect(store.resolveAsset).toHaveBeenCalledWith('lake-bells', 'alert')
    expect(callback).toHaveBeenCalledWith({ path: '/app-data/packs/lake-bells/alert.wav' })
  })

  it.each([
    'examaware-sound://other/lake-bells/alert',
    'examaware-sound://pack/lake-bells/unknown',
    'examaware-sound://pack/missing/start',
    'examaware-sound://pack/lake-bells/start/extra'
  ])('rejects malformed or unresolved URL %s', (url) => {
    const handler = createReminderSoundProtocolHandler({ resolveAsset: vi.fn() })
    const callback = vi.fn()

    handler({ url } as any, callback)

    expect(callback).toHaveBeenCalledWith({ error: -6 })
  })
})
