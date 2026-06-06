import { IpcHandle } from './decorators'
import { castService, type CastConfig } from '../cast/castService'
import type { SharedConfigEntry } from '../state/sharedConfigStore'

export class CastController {
  @IpcHandle('cast:get-config')
  getConfig() {
    return castService.getConfig()
  }

  @IpcHandle('cast:set-config')
  async setConfig(_e: Electron.IpcMainInvokeEvent, cfg: Partial<CastConfig>) {
    return castService.setConfig(cfg ?? {})
  }

  @IpcHandle('cast:restart')
  async restart() {
    await castService.restart()
    return castService.getConfig()
  }

  @IpcHandle('cast:list-peers')
  listPeers() {
    return castService.listPeers()
  }

  @IpcHandle('cast:local-shares')
  localShares() {
    return castService.getLocalShares()
  }

  @IpcHandle('cast:shared-config')
  sharedConfig(_e: Electron.IpcMainInvokeEvent, id?: string) {
    return castService.getSharedConfigRaw(id)
  }

  @IpcHandle('cast:set-shares')
  setShares(_e: Electron.IpcMainInvokeEvent, shares: SharedConfigEntry[]) {
    return castService.setSharedEntries(shares || [])
  }

  @IpcHandle('cast:upsert-share')
  upsertShare(_e: Electron.IpcMainInvokeEvent, share: SharedConfigEntry) {
    return castService.upsertSharedEntry(share)
  }

  @IpcHandle('cast:peer-shares')
  async peerShares(_e: Electron.IpcMainInvokeEvent, peerId: string) {
    return castService.fetchPeerShares(peerId)
  }

  @IpcHandle('cast:peer-config')
  async peerConfig(_e: Electron.IpcMainInvokeEvent, payload: { peerId: string; shareId?: string }) {
    if (!payload?.peerId) return null
    return castService.fetchPeerConfig(payload.peerId, payload.shareId)
  }

  @IpcHandle('cast:send')
  async send(_e: Electron.IpcMainInvokeEvent, payload: { peerId: string; config: string }) {
    if (!payload?.peerId || !payload?.config) throw new Error('peerId and config are required')
    return castService.castToPeer(payload.peerId, payload.config)
  }
}
