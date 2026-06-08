import { PopupProps } from '../popup';
import { TNode } from '../common';
export interface TdDropdownProps {
    direction?: 'left' | 'right';
    disabled?: boolean;
    hideAfterItemClick?: boolean;
    maxColumnWidth?: string | number;
    maxHeight?: number;
    minColumnWidth?: string | number;
    options?: Array<DropdownOption>;
    panelBottomContent?: string | TNode;
    panelTopContent?: string | TNode;
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
    popupProps?: PopupProps;
    trigger?: 'hover' | 'click' | 'focus' | 'context-menu';
    onClick?: (dropdownItem: DropdownOption, context: {
        e: MouseEvent;
    }) => void;
}
export interface TdDropdownItemProps {
    active?: boolean;
    content?: string | TNode;
    disabled?: boolean;
    divider?: boolean;
    prefixIcon?: TNode;
    theme?: DropdownItemTheme;
    value?: string | number | {
        [key: string]: any;
    };
    onClick?: (dropdownItem: DropdownOption, context: {
        e: MouseEvent;
    }) => void;
}
export interface TdDropdownMenuProps {
    content?: string | TNode;
    default?: string | TNode;
}
export type DropdownOption = {
    children?: DropdownOption[];
} & TdDropdownItemProps & Record<string, any>;
export type DropdownItemTheme = 'default' | 'success' | 'warning' | 'error';
