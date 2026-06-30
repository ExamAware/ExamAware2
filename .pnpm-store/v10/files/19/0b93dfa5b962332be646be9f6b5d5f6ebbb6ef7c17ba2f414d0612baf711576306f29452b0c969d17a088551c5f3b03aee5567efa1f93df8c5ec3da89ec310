import { PopupProps } from '../popup';
import { TNode } from '../common';
export interface TdStickyToolProps {
    list?: Array<TdStickyItemProps>;
    offset?: Array<string | number>;
    placement?: 'right-top' | 'right-center' | 'right-bottom' | 'left-top' | 'left-center' | 'left-bottom';
    popupProps?: PopupProps;
    shape?: 'square' | 'round';
    type?: 'normal' | 'compact';
    width?: string | number;
    onClick?: (context: {
        e: MouseEvent;
        item: TdStickyItemProps;
    }) => void;
    onHover?: (context: {
        e: MouseEvent;
        item: TdStickyItemProps;
    }) => void;
}
export interface TdStickyItemProps {
    icon?: TNode;
    label?: string | TNode;
    popup?: string | TNode;
    popupProps?: PopupProps;
    trigger?: 'hover' | 'click';
}
