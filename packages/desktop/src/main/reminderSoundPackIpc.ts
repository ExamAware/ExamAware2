import type { OpenDialogReturnValue } from 'electron'
import { REMINDER_SOUND_KINDS, type ReminderSoundKind } from '../shared/reminderSoundPack'
import type { ReminderSoundPackStore } from './reminderSoundPackStore'

type IpcHandler = (event: unknown, ...args: any[]) => any

interface ReminderSoundPackIpcOptions {
  handle(channel: string, listener: IpcHandler): void
  showOpenDialog(options: {
    properties: ['openFile']
    filters: Array<{ name: string; extensions: string[] }>
  }): Promise<Pick<OpenDialogReturnValue, 'canceled' | 'filePaths'>>
  store: Pick<ReminderSoundPackStore, 'list' | 'install'>
}

export function registerReminderSoundPackIpc(options: ReminderSoundPackIpcOptions) {
  options.handle('reminder-sounds:list', () => options.store.list())
  options.handle('reminder-sounds:import', async () => {
    const result = await options.showOpenDialog({
      properties: ['openFile'],
      filters: [{ name: 'ExamAware 铃声包', extensions: ['ea2r'] }]
    })
    if (result.canceled || !result.filePaths[0]) {
      return { canceled: true, packs: await options.store.list() }
    }
    const pack = await options.store.install(result.filePaths[0])
    return { canceled: false, pack, packs: await options.store.list() }
  })
}

export function createReminderSoundProtocolHandler(
  store: Pick<ReminderSoundPackStore, 'readAsset'>
) {
  return async (request: Pick<Request, 'url'>): Promise<Response> => {
    try {
      const url = new URL(request.url)
      const pathParts = url.pathname.split('/').filter(Boolean)
      const packId = decodeURIComponent(pathParts[0] ?? '')
      const kind = pathParts[1] as ReminderSoundKind
      if (
        url.protocol !== 'examaware-sound:' ||
        url.hostname !== 'pack' ||
        pathParts.length !== 2 ||
        !REMINDER_SOUND_KINDS.includes(kind)
      ) {
        return new Response(null, { status: 404 })
      }
      const asset = await store.readAsset(packId, kind)
      if (!asset) return new Response(null, { status: 404 })
      return new Response(new Uint8Array(asset.data), {
        headers: {
          'Cache-Control': 'no-store',
          'Content-Type': asset.mimeType
        }
      })
    } catch {
      return new Response(null, { status: 404 })
    }
  }
}
