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
      readAsset: vi.fn()
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
      readAsset: vi.fn()
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
  it('returns validated sound bytes without exposing a mutable file path', async () => {
    const bytes = Buffer.from('validated audio')
    const store = {
      readAsset: vi.fn((id: string, kind: string) =>
        Promise.resolve(
          id === 'lake-bells' && kind === 'alert'
            ? { data: bytes, mimeType: 'audio/wav' }
            : undefined
        )
      )
    }
    const handler = createReminderSoundProtocolHandler(store)

    const response = await handler({ url: 'examaware-sound://pack/lake-bells/alert' } as Request)

    expect(store.readAsset).toHaveBeenCalledWith('lake-bells', 'alert')
    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toBe('audio/wav')
    expect(response.headers.get('cache-control')).toBe('no-store')
    await expect(response.arrayBuffer()).resolves.toEqual(
      bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)
    )
  })

  it.each([
    'examaware-sound://other/lake-bells/alert',
    'examaware-sound://pack/lake-bells/unknown',
    'examaware-sound://pack/missing/start',
    'examaware-sound://pack/lake-bells/start/extra'
  ])('rejects malformed or unresolved URL %s', async (url) => {
    const handler = createReminderSoundProtocolHandler({ readAsset: vi.fn() })

    const response = await handler({ url } as Request)

    expect(response.status).toBe(404)
  })

  it('contains asset read failures as a not-found response', async () => {
    const handler = createReminderSoundProtocolHandler({
      readAsset: vi.fn().mockRejectedValue(new Error('disk unavailable'))
    })

    await expect(
      handler({ url: 'examaware-sound://pack/lake-bells/start' } as Request)
    ).resolves.toMatchObject({ status: 404 })
  })
})
