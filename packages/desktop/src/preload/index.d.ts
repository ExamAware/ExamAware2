import type { DesktopBridge } from '../shared/ipc/bridge'

declare global {
  interface Window {
    api: DesktopBridge
  }
}
