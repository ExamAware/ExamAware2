export interface PlayerOpenOptions {
  source?: 'file' | 'url' | 'remote'
  pathOrUrl?: string
}

export interface PlayerLauncher {
  selectLocalAndOpen(): Promise<void>
  openWith(options: PlayerOpenOptions): Promise<void>
}

export function createPlayerLauncher(
  bridge: Pick<DesktopBridge, 'files' | 'player'> = window.api
): PlayerLauncher {
  return {
    async selectLocalAndOpen() {
      const p = await bridge.files.selectExam()
      if (p) await this.openWith({ source: 'file', pathOrUrl: p })
    },
    async openWith(options: PlayerOpenOptions) {
      if (options.source === 'file' && options.pathOrUrl) {
        bridge.player.openWindow(options.pathOrUrl)
        return
      }
      if (options.source === 'url' && options.pathOrUrl) {
        const value = options.pathOrUrl.trim()
        if (!value) {
          throw new Error('URL 不能为空')
        }
        await bridge.player.openFromUrl(value)
        return
      }
      // TODO: 扩展远端打开方式
      throw new Error('不支持的打开方式或缺少路径/URL')
    }
  }
}
import type { DesktopBridge } from '../../../shared/ipc/bridge'
