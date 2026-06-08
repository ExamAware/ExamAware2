import { ButtonProps } from '../button';
import { TNode, Styles, AttachNode, AppContext } from '../common';
export interface TdDialogProps {
    attach?: AttachNode;
    body?: string | TNode;
    cancelBtn?: string | ButtonProps | TNode | null;
    closeBtn?: string | boolean | TNode;
    closeOnEscKeydown?: boolean;
    closeOnOverlayClick?: boolean;
    confirmBtn?: string | ButtonProps | TNode | null;
    confirmLoading?: boolean;
    confirmOnEnter?: boolean;
    default?: string | TNode;
    destroyOnClose?: boolean;
    dialogClassName?: string;
    dialogStyle?: Styles;
    draggable?: boolean;
    footer?: boolean | TNode;
    header?: string | boolean | TNode;
    lazy?: boolean;
    mode?: 'modal' | 'modeless' | 'normal' | 'full-screen';
    placement?: 'top' | 'center';
    preventScrollThrough?: boolean;
    showInAttachedElement?: boolean;
    showOverlay?: boolean;
    theme?: 'default' | 'info' | 'warning' | 'danger' | 'success';
    top?: string | number;
    visible?: boolean;
    width?: string | number;
    zIndex?: number;
    onBeforeClose?: () => void;
    onBeforeOpen?: () => void;
    onCancel?: (context: {
        e: MouseEvent;
    }) => void;
    onClose?: (context: DialogCloseContext) => void;
    onCloseBtnClick?: (context: {
        e: MouseEvent;
    }) => void;
    onClosed?: () => void;
    onConfirm?: (context: {
        e: MouseEvent | KeyboardEvent;
    }) => void;
    onEscKeydown?: (context: {
        e: KeyboardEvent;
    }) => void;
    onOpened?: () => void;
    onOverlayClick?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface TdDialogCardProps extends Pick<TdDialogProps, 'body' | 'cancelBtn' | 'closeBtn' | 'confirmBtn' | 'footer' | 'header' | 'theme' | 'onCancel' | 'onCloseBtnClick' | 'onConfirm' | 'confirmLoading'> {
}
export interface DialogOptions extends Omit<TdDialogProps, 'attach'> {
    attach?: AttachNode;
    className?: string;
    style?: string | Styles;
}
export interface DialogInstance {
    destroy: () => void;
    hide: () => void;
    setConfirmLoading: (loading: boolean) => void;
    show: () => void;
    update: (props: DialogOptions) => void;
}
export type DialogEventSource = 'esc' | 'close-btn' | 'cancel' | 'overlay';
export interface DialogCloseContext {
    trigger: DialogEventSource;
    e: MouseEvent | KeyboardEvent;
}
export type DialogMethod = (options?: DialogOptions, context?: AppContext) => DialogInstance;
export type DialogConfirmMethod = (options?: DialogOptions, context?: AppContext) => DialogInstance;
export type DialogAlertMethod = (options?: Omit<DialogOptions, 'cancelBtn'>, context?: AppContext) => DialogInstance;
