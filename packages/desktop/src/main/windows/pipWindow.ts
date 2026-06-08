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
}
body {
  background: rgba(4, 14, 21, 0.92);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 24px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-family: 'Segoe UI', 'MiSans', sans-serif;
  cursor: default;
  user-select: none;
}
#drag-handle {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 40px;
  cursor: grab;
  -webkit-app-region: drag;
}
#drag-handle:active { cursor: grabbing; }
#time {
  color: #fff;
  font-size: 96px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
#current {
  color: rgba(255,255,255,0.6);
  font-size: 28px;
  margin-top: 8px;
}
#close {
  position: absolute;
  top: -10px; right: -10px;
  width: 32px; height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(255,59,48,0.9);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  -webkit-app-region: no-drag;
}
body:hover #close { opacity: 1; }
</style>
</head>
<body>
<div id="drag-handle"></div>
<div id="time">00:00</div>
<div id="current"></div>
<button id="close">×</button>
<script>
const timeEl = document.getElementById('time');
const currentEl = document.getElementById('current');
const closeBtn = document.getElementById('close');
const dragHandle = document.getElementById('drag-handle');

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

closeBtn.addEventListener('click', () => {
  ipcRenderer.send('pip:toggle');
});

// 点击非拖拽区域返回播放页
document.body.addEventListener('click', (e) => {
  if (e.target === closeBtn || e.target === dragHandle || dragHandle.contains(e.target)) return;
  ipcRenderer.send('pip:toggle');
});

// 拖拽逻辑（仅拖拽手柄）
let dragging = false;
let dragOffset = { x: 0, y: 0 };

dragHandle.addEventListener('mousedown', (e) => {
  dragging = true;
  dragOffset.x = e.screenX - window.screenX;
  dragOffset.y = e.screenY - window.screenY;
});

document.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  window.moveTo(e.screenX - dragOffset.x, e.screenY - dragOffset.y);
});

document.addEventListener('mouseup', () => {
  dragging = false;
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
