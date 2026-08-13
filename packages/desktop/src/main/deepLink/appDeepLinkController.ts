import { DeepLinkHost, UseDeepLinkMiddleware } from './deepLinkDecorators'
import type { DeepLinkMiddlewareContext } from './deepLinkManager'
import type { DeepLinkPayload } from '../../shared/types/deepLink'
import type { BrowserWindow } from 'electron'
import { createEditorWindow } from '../windows/editorWindow'
import { playerSessionService } from '../player/playerSessionService'
import { createSettingsWindow } from '../windows/settingsWindow'
import { appLogger } from '../logging/logger'

export interface DeepLinkControllerDeps {
  focusMainWindow: () => BrowserWindow | null
  broadcast: (payload: DeepLinkPayload) => void
  createTempConfigFromBase64: (b64: string, prefix: string) => Promise<string>
}

export class AppDeepLinkController {
  constructor(private deps: DeepLinkControllerDeps) {}

  @UseDeepLinkMiddleware()
  async focusAndBroadcast(context: DeepLinkMiddlewareContext, next: () => Promise<void>) {
    this.deps.focusMainWindow()
    this.deps.broadcast(context.payload)
    context.handled = true
    await next()
  }

  @DeepLinkHost('settings', 'core:settings')
  openSettings(payload: DeepLinkPayload) {
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

  @DeepLinkHost('editor', 'core:editor')
  async openEditor(payload: DeepLinkPayload) {
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

  @DeepLinkHost('player', 'core:player')
  async openPlayer(payload: DeepLinkPayload) {
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
      await playerSessionService.start({ kind: 'file', path: target })
      return true
    } catch (error) {
      appLogger.error('[deeplink] open player failed', error as Error)
      return false
    }
  }
}
