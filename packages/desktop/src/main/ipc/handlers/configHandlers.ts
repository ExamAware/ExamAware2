import { ipcChannels } from '../../../shared/ipc/channels'
import { getAllConfig, getConfig, patchConfig, setConfig } from '../../config/configStore'
import { getSharedConfig, setSharedConfig } from '../../config/sharedConfigStore'
import { appLogger } from '../../logging/logger'
import { applyTimeConfig } from '../../timeSync/timeService'
import type { IpcRegistrar } from '../ipcRegistrar'

export function registerConfigHandlers(ipc: IpcRegistrar) {
  ipc.handle(ipcChannels.config.getPlayback, () => {
    const config = getSharedConfig()
    appLogger.debug('[ipc] get-config requested (len=%d)', config?.length ?? 0)
    return config
  })

  ipc.on(ipcChannels.config.setPlayback, (_event, data) => {
    appLogger.debug('[ipc] set-config received via IPC (len=%d)', data?.length ?? 0)
    setSharedConfig(data)
  })

  ipc.handle(ipcChannels.config.all, () => getAllConfig())
  ipc.handle(ipcChannels.config.get, (_event, key, defaultValue) => getConfig(key, defaultValue))
  ipc.handle(ipcChannels.config.set, (_event, key, value) => {
    setConfig(key, value)
    if (key?.startsWith('time.')) {
      applyTimeConfig({ [key.slice(5)]: value } as any)
    }
    return true
  })
  ipc.handle(ipcChannels.config.patch, (_event, partial) => {
    patchConfig(partial)
    applyTimePatch(partial)
    return true
  })
}

function applyTimePatch(partial: any) {
  if (!partial || typeof partial !== 'object') return
  if (partial.time && typeof partial.time === 'object') {
    applyTimeConfig(partial.time)
    return
  }

  const timePatch: Record<string, unknown> = {}
  for (const key of Object.keys(partial)) {
    if (key.startsWith('time.')) timePatch[key.slice(5)] = partial[key]
  }
  if (Object.keys(timePatch).length) applyTimeConfig(timePatch)
}
