import { type PropType, type VNode } from 'vue';
import type { ContextSubMenuInstance, MenuItem, MenuOptions } from './ContextMenuDefine';
/**
 * Context menu component
 */
export type GlobalHasSlot = (name: string) => boolean;
export type GlobalRenderSlot = (name: string, params: Record<string, unknown>) => VNode;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /**
     * Menu options
     */
    options: {
        type: PropType<MenuOptions>;
        default: null;
    };
    /**
     * Show menu?
     */
    show: {
        type: null;
        default: null;
    };
    /**
     * Current container, For calculation only
     */
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
    /**
     * Make sure is user set the custom container.
     */
    isFullScreenContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    closeMenu(fromItem?: MenuItem | undefined): void;
    isClosed(): boolean;
    getMenuRef(): ContextSubMenuInstance | undefined;
    getMenuDimensions(): {
        width: number;
        height: number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAnimFinished: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Menu options
     */
    options: {
        type: PropType<MenuOptions>;
        default: null;
    };
    /**
     * Show menu?
     */
    show: {
        type: null;
        default: null;
    };
    /**
     * Current container, For calculation only
     */
    container: {
        type: PropType<HTMLElement>;
        default: null;
    };
    /**
     * Make sure is user set the custom container.
     */
    isFullScreenContainer: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onCloseAnimFinished?: ((...args: any[]) => any) | undefined;
}, {
    options: MenuOptions;
    show: any;
    container: HTMLElement;
    isFullScreenContainer: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
