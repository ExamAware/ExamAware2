import { ipcChannels } from '../../shared/ipc/channels'
import { IpcHandle } from '../ipc/ipcDecorators'
import { castService, type CastConfig } from './castService'
import type { SharedConfigEntry } from '../config/sharedConfigStore'

export class CastController {
  @IpcHandle(ipcChannels.cast.getConfig)
  getConfig() {
    return castService.getConfig()
  }

  @IpcHandle(ipcChannels.cast.setConfig)
  async setConfig(_e: Electron.IpcMainInvokeEvent, cfg: Partial<CastConfig>) {
    return castService.setConfig(cfg ?? {})
  }

  @IpcHandle(ipcChannels.cast.restart)
  async restart() {
    await castService.restart()
    return castService.getConfig()
  }

  @IpcHandle(ipcChannels.cast.listPeers)
  listPeers() {
    return castService.listPeers()
  }

  @IpcHandle(ipcChannels.cast.localShares)
  localShares() {
    return castService.getLocalShares()
  }

  @IpcHandle(ipcChannels.cast.sharedConfig)
  sharedConfig(_e: Electron.IpcMainInvokeEvent, id?: string) {
    return castService.getSharedConfigRaw(id)
  }

  @IpcHandle(ipcChannels.cast.setShares)
  setShares(_e: Electron.IpcMainInvokeEvent, shares: SharedConfigEntry[]) {
    return castService.setSharedEntries(shares || [])
  }

  @IpcHandle(ipcChannels.cast.upsertShare)
  upsertShare(_e: Electron.IpcMainInvokeEvent, share: SharedConfigEntry) {
    return castService.upsertSharedEntry(share)
  }

  @IpcHandle(ipcChannels.cast.peerShares)
  async peerShares(_e: Electron.IpcMainInvokeEvent, peerId: string) {
    return castService.fetchPeerShares(peerId)
  }

  @IpcHandle(ipcChannels.cast.peerConfig)
  async peerConfig(_e: Electron.IpcMainInvokeEvent, payload: { peerId: string; shareId?: string }) {
    if (!payload?.peerId) return null
    return castService.fetchPeerConfig(payload.peerId, payload.shareId)
  }

  @IpcHandle(ipcChannels.cast.send)
  async send(_e: Electron.IpcMainInvokeEvent, payload: { peerId: string; config: string }) {
    if (!payload?.peerId || !payload?.config) throw new Error('peerId and config are required')
    return castService.castToPeer(payload.peerId, payload.config)
  }
}
