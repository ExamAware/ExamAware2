import { ButtonProps } from '../button';
import { PopupProps } from '../popup';
import { TNode } from '../common';
export interface TdPopconfirmProps {
    cancelBtn?: string | ButtonProps | TNode;
    confirmBtn?: string | ButtonProps | TNode;
    content?: string | TNode;
    default?: string | TNode;
    destroyOnClose?: boolean;
    icon?: TNode;
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
    popupProps?: PopupProps;
    showArrow?: boolean;
    theme?: 'default' | 'warning' | 'danger';
    triggerElement?: string | TNode;
    visible?: boolean;
    defaultVisible?: boolean;
    onCancel?: (options: {
        e: MouseEvent;
    }) => void;
    onConfirm?: (options: {
        e: MouseEvent;
    }) => void;
    onVisibleChange?: (visible: boolean, context?: PopconfirmVisibleChangeContext) => void;
}
export interface PopconfirmVisibleChangeContext {
    trigger?: TriggerSource;
    e?: MouseEvent;
}
export type TriggerSource = 'cancel' | 'confirm' | 'document' | 'trigger-element-click';
