import { BrowserWindow } from 'electron';

interface Is {
    dev: boolean;
}
declare const is: Is;

interface Platform {
    isWindows: boolean;
    isMacOS: boolean;
    isLinux: boolean;
}
declare const platform: Platform;

interface ElectronApp {
    /**
     * Changes the Application User Model ID to id.
     *
     * The `id` is used only when the applcation is packaged. otherwise use the
     * `process.execPath` value as id.
     *
     * see https://www.electronjs.org/docs/latest/tutorial/notifications#windows
     * @platform — win32
     */
    setAppUserModelId: (id: string) => void;
    /**
     * Whether the call succeeded.
     *
     * Set the app open at login or not.
     *
     *  **Note:** `false` always on Linux.
     * @platform — darwin,win32
     */
    setAutoLaunch: (auto: boolean) => boolean;
    /**
     * Skip proxy for Electron app.
     */
    skipProxy: () => Promise<void>;
}
declare const electronApp: ElectronApp;

type shortcutOptions = {
    /**
     * Use `ESC` key to close window, default `false`.
     */
    escToCloseWindow?: boolean;
    /**
     * Zoom in (`Minus + CommandOrControl`) or zoom out(`Equal + Shift + CommandOrControl`), default `false`.
     */
    zoom?: boolean;
};
interface Optimizer {
    /**
     * Default open or close DevTools by `F12` in development and
     * ignore `CommandOrControl + R` in production.
     *
     * Use `shortcutOptions` to control more shortcuts.
     */
    watchWindowShortcuts: (window: BrowserWindow, shortcutOptions?: shortcutOptions) => void;
    /**
     * If use a frameless window which hide the system's native window controls,
     * we may need to create custom window controls in HTML.
     *
     * The frameless window ipc allow the renderer process to control the
     * browser window.
     *
     * The ipc channel named `win:invoke`.
     *
     * For Example:
     *
     * ```
     * ipcRenderer.send('win:invoke', 'show')
     * ipcRenderer.send('win:invoke', 'showInactive')
     * ipcRenderer.send('win:invoke', 'min')
     * ipcRenderer.send('win:invoke', 'max')
     * ipcRenderer.send('win:invoke', 'close')
     * ```
     */
    registerFramelessWindowIpc: () => void;
}
declare const optimizer: Optimizer;

export { type ElectronApp, type Is, type Optimizer, type Platform, electronApp, is, optimizer, platform, type shortcutOptions };
