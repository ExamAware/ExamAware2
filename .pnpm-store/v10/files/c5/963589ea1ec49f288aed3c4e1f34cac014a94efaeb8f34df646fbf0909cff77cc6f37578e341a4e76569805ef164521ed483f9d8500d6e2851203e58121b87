import { type PropType, type SVGAttributes } from 'vue';
import type { MenuItem, MenuItemContext } from './ContextMenuDefine';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /**
     * Is this menu disabled?
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Is this menu hidden?
     */
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customRender: {
        type: FunctionConstructor;
        default: null;
    };
    /**
     * Custom css class for submenu
     */
    customClass: {
        type: StringConstructor;
        default: string;
    };
    clickHandler: {
        type: PropType<(e: MouseEvent | KeyboardEvent) => void>;
        default: null;
    };
    /**
     * Menu label
     */
    label: {
        type: (FunctionConstructor | StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * Menu icon (for icon class)
     */
    icon: {
        type: (FunctionConstructor | StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * Custom icon library font class name.
     *
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Is this menu item checked?
     *
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Shortcut key text display on the right.
     *
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
        type: PropType<SVGAttributes>;
        default: null;
    };
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     *
     * Default is true .
     *
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasChildren: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When there are subitems in this item, is it allowed to trigger its own click event? Default is false
     */
    clickableWhenHasChildren: {
        type: BooleanConstructor;
        default: boolean;
    };
    rawMenuItem: {
        type: PropType<MenuItem>;
        default: undefined;
    };
}, {
    getSubMenuInstance: () => import("./ContextMenuDefine").ContextSubMenuInstance | undefined;
    showSubMenu: () => boolean;
    hideSubMenu: () => void;
    getElement: () => HTMLElement | undefined;
    isDisabledOrHidden: () => boolean;
    focus: () => void;
    blur: () => void;
    click: (e: MouseEvent | KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    subMenuOpen: (...args: any[]) => void;
    subMenuClose: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Is this menu disabled?
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Is this menu hidden?
     */
    hidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    customRender: {
        type: FunctionConstructor;
        default: null;
    };
    /**
     * Custom css class for submenu
     */
    customClass: {
        type: StringConstructor;
        default: string;
    };
    clickHandler: {
        type: PropType<(e: MouseEvent | KeyboardEvent) => void>;
        default: null;
    };
    /**
     * Menu label
     */
    label: {
        type: (FunctionConstructor | StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * Menu icon (for icon class)
     */
    icon: {
        type: (FunctionConstructor | StringConstructor | ObjectConstructor)[];
        default: string;
    };
    /**
     * Custom icon library font class name.
     *
     * Only for css font icon, If you use the svg icon, you do not need to use this.
     */
    iconFontClass: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Is this menu item checked?
     *
     * The check mark are displayed on the left side of the icon, so it is not recommended to display the icon at the same time.
     */
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Shortcut key text display on the right.
     *
     * The shortcut keys here are only for display. You need to handle the key events by yourself.
     */
    shortcut: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Display icons use svg symbol (`<use xlink:href="#icon-symbol-name">`) ， only valid when icon attribute is empty.
     */
    svgIcon: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The user-defined attribute of the svg tag, which is valid when using `svgIcon`.
     */
    svgProps: {
        type: PropType<SVGAttributes>;
        default: null;
    };
    /**
     * Should a fixed-width icon area be reserved for menu items without icon. (this item)
     *
     * Default is true .
     *
     * The width of icon area can be override with css var `--mx-menu-placeholder-width`.
     */
    preserveIconWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Show right arrow on this menu?
     */
    showRightArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasChildren: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Should close menu when Click this menu item ?
     */
    clickClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When there are subitems in this item, is it allowed to trigger its own click event? Default is false
     */
    clickableWhenHasChildren: {
        type: BooleanConstructor;
        default: boolean;
    };
    rawMenuItem: {
        type: PropType<MenuItem>;
        default: undefined;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onSubMenuClose?: ((...args: any[]) => any) | undefined;
    onSubMenuOpen?: ((...args: any[]) => any) | undefined;
}, {
    customRender: Function;
    label: string | Function | Record<string, any>;
    icon: string | Function | Record<string, any>;
    iconFontClass: string;
    preserveIconWidth: boolean;
    svgIcon: string;
    svgProps: SVGAttributes;
    disabled: boolean;
    hidden: boolean;
    checked: boolean;
    shortcut: string;
    clickableWhenHasChildren: boolean;
    clickClose: boolean;
    customClass: string;
    hasChildren: boolean;
    clickHandler: (e: MouseEvent | KeyboardEvent) => void;
    showRightArrow: boolean;
    rawMenuItem: MenuItem;
}, {}>, {
    default?(_: {}): any;
    icon?(_: {}): any;
    check?(_: {}): any;
    label?(_: {}): any;
    shortcut?(_: {}): any;
    rightArrow?(_: {}): any;
    submenu?(_: {
        context: MenuItemContext;
        show: boolean;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
