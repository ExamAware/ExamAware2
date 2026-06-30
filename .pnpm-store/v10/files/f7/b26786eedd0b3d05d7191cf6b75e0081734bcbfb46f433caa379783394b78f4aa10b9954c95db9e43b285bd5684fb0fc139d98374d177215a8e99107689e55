import { type PropType, type Ref } from 'vue';
import type { MenuItem, MenuPopDirection, MenuItemContext } from './ContextMenuDefine';
/**
 * Submenu container
 */
export interface SubMenuContext {
    name: Ref<string>;
    el: Ref<HTMLElement | undefined>;
    isTopLevel: () => boolean;
    closeSelfAndActiveParent: () => boolean;
    openCurrentItemSubMenu: () => boolean;
    closeCurrentSubMenu: () => void;
    moveCurrentItemFirst: () => void;
    moveCurrentItemLast: () => void;
    moveCurrentItemDown: () => void;
    moveCurrentItemUp: () => void;
    focusCurrentItem: () => void;
    triggerCurrentItemClick: (e: KeyboardEvent | MouseEvent) => void;
}
export interface SubMenuParentContext {
    container: HTMLElement;
    zIndex: number;
    adjustPadding: {
        x: number;
        y: number;
    };
    getParentWidth: () => number;
    getParentHeight: () => number;
    getPositon: () => [number, number];
    getZoom: () => number;
    addOpenedSubMenu: (closeFn: () => void) => void;
    closeOtherSubMenu: () => void;
    closeOtherSubMenuWithTimeOut: () => void;
    checkCloseOtherSubMenuTimeOut: () => boolean;
    addChildMenuItem: (item: MenuItemContext, index?: number) => void;
    removeChildMenuItem: (item: MenuItemContext) => void;
    markActiveMenuItem: (item: MenuItemContext, updateState?: boolean) => void;
    markThisOpenedByKeyBoard: () => void;
    isOpenedByKeyBoardFlag: () => boolean;
    isMenuItemDataCollectedFlag: () => boolean;
    getSubMenuInstanceContext: () => SubMenuContext | null;
    getParentContext: () => SubMenuParentContext | null;
    getElement: () => HTMLElement | null;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /**
     * Items from options
     */
    items: {
        type: PropType<MenuItem[]>;
        default: null;
    };
    /**
     * Show
     */
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Max height for this submenu
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Max width for this submenu
     */
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Min width for this submenu
     */
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Specifies should submenu adjust it position
     * when the menu exceeds the screen. The default is true
     */
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Menu direction
     */
    direction: {
        type: PropType<MenuPopDirection>;
        default: string;
    };
    parentMenuItemContext: {
        type: PropType<MenuItemContext>;
        default: null;
    };
}, {
    getSubmenuRoot: () => HTMLElement | undefined;
    getMenu: () => HTMLElement | undefined;
    getChildItem: (index: number) => MenuItemContext | undefined;
    getMenuDimensions(): {
        width: number;
        height: number;
    };
    getScrollValue: () => number;
    setScrollValue: (v: number) => void;
    getScrollHeight: () => number;
    adjustPosition: () => void;
    getMaxHeight: () => number;
    getPosition: () => {
        x: number;
        y: number;
    };
    setPosition: (x: number, y: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    closeAnimFinished: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Items from options
     */
    items: {
        type: PropType<MenuItem[]>;
        default: null;
    };
    /**
     * Show
     */
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Max height for this submenu
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Max width for this submenu
     */
    maxWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Min width for this submenu
     */
    minWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    /**
     * Specifies should submenu adjust it position
     * when the menu exceeds the screen. The default is true
     */
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Menu direction
     */
    direction: {
        type: PropType<MenuPopDirection>;
        default: string;
    };
    parentMenuItemContext: {
        type: PropType<MenuItemContext>;
        default: null;
    };
}>> & {
    onCloseAnimFinished?: ((...args: any[]) => any) | undefined;
}, {
    direction: MenuPopDirection;
    maxHeight: number;
    maxWidth: string | number;
    minWidth: string | number;
    items: MenuItem[];
    adjustPosition: boolean;
    show: boolean;
    parentMenuItemContext: MenuItemContext;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
