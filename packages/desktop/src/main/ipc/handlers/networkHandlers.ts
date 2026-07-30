import { ipcChannels } from '../../../shared/ipc/channels'
import { secureFetch } from '../../network/secureFetch'
import type { IpcRegistrar } from '../ipcRegistrar'

export function registerNetworkHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.network.request, async (_event, url, options) => {
    const response = await secureFetch(url, options)
    return {
      status: response.status,
      headers: response.headers,
      body: response.body
    }
  })
}
