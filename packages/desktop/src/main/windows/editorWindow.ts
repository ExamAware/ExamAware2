import { BrowserWindow, shell } from 'electron'
import * as path from 'path'
import { is } from '@electron-toolkit/utils'

export function createEditorWindow(filePath?: string): BrowserWindow {
  let windowConfig: any = {
    width: 920,
    height: 700,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
  preload: path.join(__dirname, '../preload/index.mjs'),
      sandbox: false
    }
  }

  // 根据平台设置窗口样式
  if (process.platform === 'linux') {
    // Linux 使用普通窗口
    windowConfig.titleBarStyle = 'default'
  } else {
    // Windows 和 macOS 使用无边框窗口
    windowConfig.frame = false
    windowConfig.titleBarStyle = 'hidden'
    // 为 macOS 设置原生交通灯按钮
    if (process.platform === 'darwin') {
      windowConfig.titleBarStyle = 'hiddenInset'
      windowConfig.trafficLightPosition = { x: 10, y: 10 }
    }
  }

  const editorWindow = new BrowserWindow(windowConfig)

  editorWindow.on('ready-to-show', () => {
    editorWindow.show()

    // 如果有文件路径，通知渲染进程打开文件
    if (filePath) {
      editorWindow.webContents.send('open-file-at-startup', filePath)
    }
  })

  editorWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  const route = 'editor'

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    const url = process.env['ELECTRON_RENDERER_URL']
    editorWindow.loadURL(`${url}#/${route}`)
  } else {
    editorWindow.loadFile(path.resolve(__dirname, '../renderer/index.html'), { hash: route })
  }

  return editorWindow
}
