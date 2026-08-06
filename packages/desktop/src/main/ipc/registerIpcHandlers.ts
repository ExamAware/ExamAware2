import { app, dialog, protocol } from 'electron'
import * as path from 'path'
import { CastController } from '../cast/castIpcController'
import { HttpApiController } from '../httpApi/httpApiIpcController'
import { captureConsoleLogs } from '../logging/consoleLogCapture'
import { LoggingIpcController } from '../logging/loggingIpcController'
import {
  createReminderSoundProtocolHandler,
  registerReminderSoundPackIpc
} from '../reminderSound/soundPackIntegration'
import { ReminderSoundPackStore } from '../reminderSound/soundPackStore'
import type { MainContext } from '../runtime/mainContext'
import { registerAppHandlers } from './handlers/appHandlers'
import { registerConfigHandlers } from './handlers/configHandlers'
import { registerControlHandlers } from './handlers/controlHandlers'
import { registerFileHandlers } from './handlers/fileHandlers'
import { registerPlayerHandlers } from './handlers/playerHandlers'
import { registerNetworkHandlers } from './handlers/networkHandlers'
import { registerWindowHandlers } from './handlers/windowHandlers'
import { applyIpcControllers } from './ipcDecorators'
import { IpcRegistrar } from './ipcRegistrar'

export function registerIpcHandlers(context?: MainContext): () => void {
  const ipc = new IpcRegistrar(context)
  const soundPackStore = new ReminderSoundPackStore(
    path.join(app.getPath('userData'), 'reminder-sound-packs')
  )

  ipc.add(
    applyIpcControllers(
      [new LoggingIpcController(), new HttpApiController(), new CastController()],
      context
    )
  )
  registerReminderSoundPackIpc({
    handle: (channel, listener) => ipc.handle(channel, listener),
    showOpenDialog: (options) => dialog.showOpenDialog(options),
    store: soundPackStore
  })
  registerSoundPackProtocol(context, ipc, soundPackStore)
  ipc.add(captureConsoleLogs())

  registerAppHandlers(ipc)
  registerConfigHandlers(ipc)
  registerControlHandlers(ipc)
  registerPlayerHandlers(ipc)
  registerNetworkHandlers(ipc)
  registerWindowHandlers(ipc)
  registerFileHandlers(ipc)

  return () => ipc.dispose()
}

function registerSoundPackProtocol(
  context: MainContext | undefined,
  ipc: IpcRegistrar,
  store: ReminderSoundPackStore
) {
  const handler = createReminderSoundProtocolHandler(store)
  if (context) {
    context.protocol.register('examaware-sound', handler)
    return
  }

  protocol.handle('examaware-sound', handler)
  ipc.add(() => {
    try {
      protocol.unhandle('examaware-sound')
    } catch {}
  })
}
