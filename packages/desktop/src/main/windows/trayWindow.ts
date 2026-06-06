import { BrowserWindow } from 'electron'
import { windowManager } from './windowManager'
import { getConfig } from '../configStore'
import { appLogger } from '../logging/winstonLogger'

export async function createOrGetTrayWindow(): Promise<BrowserWindow> {
  return await windowManager.open(({ commonOptions }) => {
    const options: Electron.BrowserWindowConstructorOptions = {
      ...commonOptions(),
      width: 280,
      height: 240,
      useContentSize: true,
      frame: false,
      resizable: false,
      movable: false,
      skipTaskbar: true,
      transparent: process.platform !== 'win32',
      alwaysOnTop: true,
      focusable: true,
      acceptFirstMouse: true,
      show: false,
      hasShadow: true,
      backgroundColor: '#00000000'
    }

    return {
      id: 'tray-popover',
      route: 'tray',
      options,
      setup(_win) {
        const log = (...args: any[]) => {
          try {
            appLogger.debug('[trayWindow]', ...args)
          } catch {}
        }
        log('create tray window; isDestroyed?', _win.isDestroyed())
        // 失焦自动隐藏：受配置项控制（tray.autoHideOnBlur），默认关闭
        // 保护期：显示后在 tray.autoHideProtectionMs 毫秒内的 blur 不触发隐藏
        let lastShowTime = 0
        const getProtectionMs = () => {
          let v = Number(getConfig('tray.autoHideProtectionMs', 400))
          if (!Number.isFinite(v) || v < 0) v = 0
          return v
        }
        const shouldAutoHide = () => !!getConfig('tray.autoHideOnBlur', true)
        const focusSnapshot = (label: string) => {
          try {
            const focused = BrowserWindow.getFocusedWindow()
            return {
              label,
              focusedId: focused?.id,
              focusedTitle: focused?.getTitle?.(),
              trayVisible: _win.isVisible(),
              trayFocused: _win.isFocused(),
              trayAlwaysOnTop: _win.isAlwaysOnTop()
            }
          } catch (error) {
            return { label, error: String(error) }
          }
        }
        log('config snapshot', {
          autoHideOnBlur: shouldAutoHide(),
          protectionMs: getProtectionMs(),
          focusable: _win.isFocusable(),
          alwaysOnTop: _win.isAlwaysOnTop(),
          bounds: _win.getBounds()
        })

        if (process.platform === 'darwin') {
          try {
            // 让托盘弹窗位于所有普通窗口之上（更像系统菜单）
            _win.setAlwaysOnTop(true)
            _win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true })
            _win.setFullScreenable(false)
            log('applied macOS top-level styles')
            // 背景模糊 / 视觉效果 (macOS): 使用 vibrancy/popover 如果不可用则回退 menu
            try {
              _win.setVibrancy('popover')
              log('set vibrancy = popover')
            } catch (e) {
              log('set vibrancy popover failed, fallback to menu', e)
              try {
                _win.setVibrancy('menu')
                log('set vibrancy = menu')
              } catch {}
            }
            // 在新版 Electron 可选：背景材质
            try {
              // @ts-ignore 某些版本可能未声明
              if (typeof (_win as any).setBackgroundMaterial === 'function') {
                ;(_win as any).setBackgroundMaterial('popover')
                log('set backgroundMaterial = popover')
              }
            } catch (e) {
              log('set backgroundMaterial popover failed', e)
            }
          } catch {}
        }
        _win.on('show', () => {
          lastShowTime = Date.now()
          log('show event; lastShowTime=', lastShowTime, focusSnapshot('show'))
        })
        _win.on('hide', () => log('hide event', focusSnapshot('hide')))
        _win.on('focus', () => log('focus event', focusSnapshot('focus')))
        _win.on('blur', () => {
          const now = Date.now()
          const protection = getProtectionMs()
          const delta = now - lastShowTime
          log(
            'blur event; deltaSinceShow=',
            delta,
            'protectionMs=',
            protection,
            'autoHideEnabled=',
            shouldAutoHide(),
            focusSnapshot('blur')
          )
          if (!shouldAutoHide()) return
          if (delta < protection) {
            log('blur ignored due to protection period')
            return
          }
          // 若仍可见则隐藏
          try {
            if (_win.isVisible()) {
              log('auto hide on blur triggered')
              _win.hide()
            }
          } catch (e) {
            log('auto hide error', e)
          }
        })
        _win.on('close', () => log('close event', focusSnapshot('close')))
        _win.on('closed', () => log('closed event'))
      }
    }
  })
}
