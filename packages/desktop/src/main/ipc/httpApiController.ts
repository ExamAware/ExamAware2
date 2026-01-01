import { IpcHandle } from './decorators'
import { httpApiService, type HttpApiConfig } from '../http/httpApiService'

export class HttpApiController {
  @IpcHandle('http:get-config')
  getConfig() {
    return httpApiService.getConfig()
  }

  @IpcHandle('http:set-config')
  async setConfig(_e: Electron.IpcMainInvokeEvent, cfg: Partial<HttpApiConfig>) {
    return httpApiService.setConfig(cfg ?? {})
  }

  @IpcHandle('http:restart')
  async restart() {
    await httpApiService.restart()
    return httpApiService.getConfig()
  }
}
