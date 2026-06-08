import type { App, ComputedRef, InjectionKey, Ref } from "vue";
import type { DarkModeOptions } from "../../shared/index.js";
export type DarkmodeStatus = "light" | "dark" | "auto";
export type DarkModeRef = ComputedRef<boolean>;
export type DarkModeStatusRef = Ref<DarkmodeStatus>;
export interface DarkMode {
    isDarkMode: DarkModeRef;
    config: ComputedRef<DarkModeOptions>;
    status: DarkModeStatusRef;
    canToggle: ComputedRef<boolean>;
}
export declare const darkModeSymbol: InjectionKey<DarkMode>;
/**
 * Inject dark mode global computed
 */
export declare const useDarkMode: () => DarkMode;
export declare const injectDarkMode: (app: App) => void;
export declare const setupDarkMode: () => void;
declare module "vue" {
    interface ComponentCustomProperties {
        $isDarkMode: boolean;
    }
}
//# sourceMappingURL=useDarkMode.d.ts.map