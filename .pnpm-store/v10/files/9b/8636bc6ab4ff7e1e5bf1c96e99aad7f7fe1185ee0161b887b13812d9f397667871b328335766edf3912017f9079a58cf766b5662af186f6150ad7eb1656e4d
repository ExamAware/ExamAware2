import type { PropType, VNode } from 'vue';
import type { MenuOptions } from './ContextMenuDefine';
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
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    closeMenu: () => void;
    isClosed: () => boolean;
    getMenuRef: () => import("./ContextMenuDefine").ContextSubMenuInstance | undefined;
    getMenuDimensions: () => {
        width: number;
        height: number;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "update:show": (...args: any[]) => void;
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
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
}, {
    options: MenuOptions;
    show: boolean;
}, {}>, Partial<Record<number, (_: any) => any>>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
