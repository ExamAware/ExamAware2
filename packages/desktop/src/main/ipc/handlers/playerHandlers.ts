import { BrowserWindow } from 'electron'
import { ipcChannels } from '../../../shared/ipc/channels'
import { appLogger } from '../../logging/logger'
import { playerSessionService } from '../../player/playerSessionService'
import { assertControlSessionClosable } from '../../player/controlSessionGuard'
import { sendIpcEvent } from '../../../shared/ipc/sender'
import type { IpcRegistrar } from '../ipcRegistrar'

export function registerPlayerHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.player.prepare, (_event, source, options) =>
    playerSessionService.prepare(source, options, {
      allowLocalNetwork: options?.allowLocalNetwork === true
    })
  )
  ipc.handle(ipcChannels.player.start, (_event, source, options) =>
    playerSessionService.start(source, options, {
      allowLocalNetwork: options?.allowLocalNetwork === true
    })
  )
  ipc.handle(ipcChannels.player.replaceSession, (_event, id, source, options) => {
    assertControlSessionClosable(playerSessionService.get(id))
    return playerSessionService.replace(id, source, options, {
      allowLocalNetwork: options?.allowLocalNetwork === true
    })
  })
  ipc.handle(ipcChannels.player.getSession, (_event, id) => playerSessionService.get(id))
  ipc.handle(ipcChannels.player.listSessions, () => playerSessionService.list())
  ipc.handle(ipcChannels.player.focusSession, (_event, id) => playerSessionService.focus(id))
  ipc.handle(ipcChannels.player.closeSession, (_event, id) => {
    assertControlSessionClosable(playerSessionService.get(id))
    return playerSessionService.close(id)
  })

  ipc.add(
    playerSessionService.onChanged((event) => {
      for (const window of BrowserWindow.getAllWindows()) {
        try {
          sendIpcEvent(window.webContents, ipcChannels.player.sessionChanged, event)
        } catch (error) {
          appLogger.warn('[player] failed to broadcast session state', error as Error)
        }
      }
    })
  )

  ipc.handle(ipcChannels.player.openFromEditor, async (_event, data) => {
    const session = await playerSessionService.start({ kind: 'json', data })
    return session.id
  })
  ipc.handle(ipcChannels.player.openFromUrl, async (_event, url) => {
    const session = await playerSessionService.start({ kind: 'url', url })
    return session.id
  })
}
