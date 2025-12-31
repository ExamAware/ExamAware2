import { DeepLink } from './decorators'
import type { DeepLinkPayload } from '../../shared/types/deepLink'
import type { BrowserWindow } from 'electron'
import { createEditorWindow } from '../windows/editorWindow'
import { createPlayerWindow } from '../windows/playerWindow'
import { createSettingsWindow } from '../windows/settingsWindow'
import { appLogger } from '../logging/winstonLogger'

export interface DeepLinkControllerDeps {
  focusMainWindow: () => BrowserWindow | null
  broadcast: (payload: DeepLinkPayload) => void
  createTempConfigFromBase64: (b64: string, prefix: string) => Promise<string>
}

export class CoreDeepLinkController {
  constructor(private deps: DeepLinkControllerDeps) {}

  @DeepLink('core:focus-and-broadcast')
  focusAndBroadcast(payload: DeepLinkPayload) {
    this.deps.focusMainWindow()
    this.deps.broadcast(payload)
    return true
  }

  @DeepLink('core:settings')
  openSettings(payload: DeepLinkPayload) {
    if (payload.host !== 'settings') return false
    const page =
      payload.query.page || payload.query.tab || payload.pathname.replace('/', '') || undefined
    try {
      createSettingsWindow(page)
    } catch (error) {
      appLogger.error('[deeplink] failed to open settings', error as Error)
      return false
    }
    return true
  }

  @DeepLink('core:editor')
  async openEditor(payload: DeepLinkPayload) {
    if (payload.host !== 'editor') return false
    const file = payload.query.file
    const data = payload.query.data
    let target: string | undefined
    if (file) {
      target = file
    } else if (data) {
      try {
        target = await this.deps.createTempConfigFromBase64(data, 'editor')
      } catch (error) {
        appLogger.error('[deeplink] failed to create temp editor file', error as Error)
        return false
      }
    }
    try {
      createEditorWindow(target)
      return true
    } catch (error) {
      appLogger.error('[deeplink] open editor failed', error as Error)
      return false
    }
  }

  @DeepLink('core:player')
  async openPlayer(payload: DeepLinkPayload) {
    if (payload.host !== 'player') return false
    const file = payload.query.file
    const data = payload.query.data
    let target: string | undefined
    if (file) {
      target = file
    } else if (data) {
      try {
        target = await this.deps.createTempConfigFromBase64(data, 'player')
      } catch (error) {
        appLogger.error('[deeplink] failed to create temp player file', error as Error)
        return false
      }
    }
    if (!target) return false
    try {
      createPlayerWindow(target)
      return true
    } catch (error) {
      appLogger.error('[deeplink] open player failed', error as Error)
      return false
    }
  }
}
