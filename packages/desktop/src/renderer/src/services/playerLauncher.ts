export interface PlayerOpenOptions {
  source?: 'file' | 'url' | 'remote'
  pathOrUrl?: string
}

export interface PlayerLauncher {
  selectLocalAndOpen(): Promise<void>
  openWith(options: PlayerOpenOptions): Promise<void>
}

export function createPlayerLauncher(ipc = window.api.ipc): PlayerLauncher {
  return {
    async selectLocalAndOpen() {
      const p = await ipc.invoke('select-file')
      if (p) await this.openWith({ source: 'file', pathOrUrl: p })
    },
    async openWith(options: PlayerOpenOptions) {
      if (options.source === 'file' && options.pathOrUrl) {
        ipc.send('open-player-window', options.pathOrUrl)
        return
      }
      // TODO: 扩展 URL/远端打开方式
      throw new Error('不支持的打开方式或缺少路径/URL')
    }
  }
}
