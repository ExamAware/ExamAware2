import { PopupProps } from '../popup';
import { TNode } from '../common';
export interface TdMenuProps {
    collapsed?: boolean;
    expanded?: Array<MenuValue>;
    defaultExpanded?: Array<MenuValue>;
    expandMutex?: boolean;
    expandType?: 'normal' | 'popup';
    logo?: TNode;
    operations?: TNode;
    theme?: 'light' | 'dark';
    value?: MenuValue;
    defaultValue?: MenuValue;
    modelValue?: MenuValue;
    width?: string | number | Array<string | number>;
    onChange?: (value: MenuValue) => void;
    onExpand?: (value: Array<MenuValue>) => void;
}
export interface TdHeadMenuProps {
    expanded?: Array<MenuValue>;
    defaultExpanded?: Array<MenuValue>;
    expandType?: 'normal' | 'popup';
    logo?: TNode;
    operations?: TNode;
    theme?: 'light' | 'dark';
    value?: MenuValue;
    defaultValue?: MenuValue;
    modelValue?: MenuValue;
    onChange?: (value: MenuValue) => void;
    onExpand?: (value: Array<MenuValue>) => void;
}
export interface TdSubmenuProps {
    content?: string | TNode;
    default?: string | TNode;
    disabled?: boolean;
    icon?: TNode;
    popupProps?: PopupProps;
    title?: string | TNode;
    value?: MenuValue;
}
export interface TdMenuItemProps {
    content?: string | TNode;
    default?: string | TNode;
    disabled?: boolean;
    href?: string;
    icon?: TNode;
    replace?: boolean;
    router?: Record<string, any>;
    routerLink?: boolean;
    target?: '_blank' | '_self' | '_parent' | '_top';
    to?: string | MenuRoute;
    value?: MenuValue;
    onClick?: (context: {
        e: MouseEvent;
        value: MenuValue;
    }) => void;
}
export interface TdMenuGroupProps {
    title?: string | TNode;
}
export type MenuValue = string | number;
export interface MenuRoute {
    path?: string;
    name?: string;
    hash?: string;
    query?: MenuQueryData;
    params?: MenuQueryData;
}
export type MenuQueryData = {
    [key: string]: string | string[];
};
