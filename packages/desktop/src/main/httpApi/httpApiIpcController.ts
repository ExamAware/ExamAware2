import { ipcChannels } from '../../shared/ipc/channels'
import { IpcHandle } from '../ipc/ipcDecorators'
import { httpApiService, type HttpApiConfig } from './httpApiService'

export class HttpApiController {
  @IpcHandle(ipcChannels.httpApi.getConfig)
  getConfig() {
    return httpApiService.getConfig()
  }

  @IpcHandle(ipcChannels.httpApi.setConfig)
  async setConfig(_e: Electron.IpcMainInvokeEvent, cfg: Partial<HttpApiConfig>) {
    return httpApiService.setConfig(cfg ?? {})
  }

  @IpcHandle(ipcChannels.httpApi.restart)
  async restart() {
    await httpApiService.restart()
    return httpApiService.getConfig()
  }
}
