import type { ComponentPublicInstance, Ref } from 'vue';
export declare const defaultWindow: Window & typeof globalThis;
export interface ConfigurableWindow {
    window?: Window;
}
export interface MutationObserverOptions extends MutationObserverInit, ConfigurableWindow {
}
export type MaybeRef<T> = T | Ref<T>;
export type VueInstance = ComponentPublicInstance;
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>;
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null;
export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance ? Exclude<MaybeElement, VueInstance> : T | undefined;
export type Fn = () => void;
export declare function unrefElement<T extends MaybeElement>(elRef: MaybeElementRef<T>): UnRefElementReturn<T>;
export declare function tryOnScopeDispose(fn: Fn): boolean;
export declare function useMutationObserver(target: MaybeElementRef, callback: MutationCallback, options?: MutationObserverOptions): {
    isSupported: boolean;
    stop: () => void;
};
export type UseMutationObserverReturn = ReturnType<typeof useMutationObserver>;
