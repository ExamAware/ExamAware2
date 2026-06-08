import { BrowserWindow, ipcMain } from 'electron'
import { windowManager } from './windowManager'
import { appLogger } from '../logging/winstonLogger'

let pipWindow: BrowserWindow | null = null

export function getPipWindow(): BrowserWindow | null {
  return pipWindow
}

export function createPipWindow(parentWindow: BrowserWindow): BrowserWindow {
  // 如果已存在则直接返回
  if (pipWindow && !pipWindow.isDestroyed()) {
    pipWindow.showInactive()
    return pipWindow
  }

  pipWindow = new BrowserWindow({
    width: 520,
    height: 280,
    frame: false,
    skipTaskbar: true,
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    transparent: true,
    backgroundColor: '#00000000',
    show: false,
    parent: parentWindow,
    x: 20,
    y: 20,
    roundedCorners: true,
    webPreferences: {
      preload: undefined,
      nodeIntegration: false,
      contextIsolation: false,
      backgroundThrottling: false,
      offscreen: false
    }
  })

  // 加载极简 HTML（内联，无需路由）
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body {
  width: 100%; height: 100%;
  overflow: hidden;
  border-radius: 16px;
}
body {
  background: rgba(32, 32, 32, 0.85);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-family: 'Segoe UI', 'MiSans', sans-serif;
  cursor: grab;
  user-select: none;
  -webkit-app-region: drag;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
body:active { cursor: grabbing; }
#time {
  color: #fff;
  font-size: 96px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  pointer-events: none;
}
#current {
  color: rgba(255,255,255,0.6);
  font-size: 28px;
  margin-top: 8px;
  pointer-events: none;
}
</style>
</head>
<body>
<div id="time">00:00</div>
<div id="current"></div>
<script>
const timeEl = document.getElementById('time');
const currentEl = document.getElementById('current');

let showRemaining = true;
let showCurrent = false;

// 直接监听 IPC，不走 Vue
const { ipcRenderer } = require('electron');

ipcRenderer.on('pip:data', (_, data) => {
  if (data.remainingTime !== undefined && showRemaining) {
    timeEl.textContent = data.remainingTime;
  }
  if (data.currentTime !== undefined && showCurrent) {
    currentEl.textContent = data.currentTime;
  }
});

ipcRenderer.on('pip:init', (_, opts) => {
  showRemaining = opts.showRemaining ?? true;
  showCurrent = opts.showCurrent ?? false;
  if (!showRemaining) timeEl.style.display = 'none';
  if (!showCurrent) currentEl.style.display = 'none';
});

// 点击返回播放页（body 有 -webkit-app-region: drag，所以用 click 事件）
document.body.addEventListener('click', () => {
  ipcRenderer.send('pip:toggle');
});
</script>
</body>
</html>`

  pipWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html))

  pipWindow.once('ready-to-show', () => {
    pipWindow?.showInactive()
  })

  pipWindow.on('closed', () => {
    pipWindow = null
  })

  return pipWindow
}

export function closePipWindow(): void {
  if (pipWindow && !pipWindow.isDestroyed()) {
    pipWindow.close()
    pipWindow = null
  }
}

export function isPipWindowOpen(): boolean {
  return pipWindow !== null && !pipWindow.isDestroyed()
}

export function sendPipData(data: { remainingTime?: string; currentTime?: string }): void {
  if (pipWindow && !pipWindow.isDestroyed()) {
    pipWindow.webContents.send('pip:data', data)
  }
}

function restorePlayerWindow(): void {
  try {
    const playerWin = windowManager.get('player')
    if (playerWin && !playerWin.isDestroyed()) {
      if (playerWin.isMinimized()) playerWin.restore()
      if (!playerWin.isVisible()) playerWin.show()
      playerWin.focus()
    }
  } catch (error) {
    appLogger.warn('[pipWindow] failed to restore player window', error as Error)
  }
}

function minimizePlayerWindow(): void {
  try {
    const playerWin = windowManager.get('player')
    if (playerWin && !playerWin.isDestroyed()) {
      playerWin.minimize()
    }
  } catch (error) {
    appLogger.warn('[pipWindow] failed to minimize player window', error as Error)
  }
}

export function setupPipIpc(): () => void {
  const onToggle = (
    _event: Electron.IpcMainEvent,
    opts?: { showRemaining?: boolean; showCurrent?: boolean }
  ) => {
    if (isPipWindowOpen()) {
      closePipWindow()
      restorePlayerWindow()
    } else {
      const playerWin = windowManager.get('player')
      if (playerWin && !playerWin.isDestroyed()) {
        createPipWindow(playerWin)
        // 发送初始选项
        setTimeout(() => {
          sendPipData({})
          pipWindow?.webContents.send('pip:init', {
            showRemaining: opts?.showRemaining ?? true,
            showCurrent: opts?.showCurrent ?? false
          })
        }, 100)
        minimizePlayerWindow()
      }
    }
  }

  const onUpdate = (
    _event: Electron.IpcMainEvent,
    data: { remainingTime?: string; currentTime?: string }
  ) => {
    sendPipData(data)
  }

  ipcMain.on('pip:toggle', onToggle)
  ipcMain.on('pip:update', onUpdate)

  return () => {
    ipcMain.off('pip:toggle', onToggle)
    ipcMain.off('pip:update', onUpdate)
  }
}
