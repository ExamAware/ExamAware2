import { ButtonProps } from '../button';
import { TNode, Styles, AttachNode, AppContext } from '../common';
export interface TdDrawerProps {
    attach?: AttachNode;
    body?: string | TNode;
    cancelBtn?: FooterButton;
    closeBtn?: string | boolean | TNode;
    closeOnEscKeydown?: boolean;
    closeOnOverlayClick?: boolean;
    confirmBtn?: FooterButton;
    default?: string | TNode;
    destroyOnClose?: boolean;
    drawerClassName?: string;
    footer?: boolean | TNode;
    header?: string | boolean | TNode;
    lazy?: boolean;
    mode?: 'overlay' | 'push';
    placement?: 'left' | 'right' | 'top' | 'bottom';
    preventScrollThrough?: boolean;
    showInAttachedElement?: boolean;
    showOverlay?: boolean;
    size?: string;
    sizeDraggable?: boolean | SizeDragLimit;
    visible?: boolean;
    zIndex?: number;
    onBeforeClose?: () => void;
    onBeforeOpen?: () => void;
    onCancel?: (context: {
        e: MouseEvent;
    }) => void;
    onClose?: (context: DrawerCloseContext) => void;
    onCloseBtnClick?: (context: {
        e: MouseEvent;
    }) => void;
    onConfirm?: (context: {
        e: MouseEvent;
    }) => void;
    onEscKeydown?: (context: {
        e: KeyboardEvent;
    }) => void;
    onOverlayClick?: (context: {
        e: MouseEvent;
    }) => void;
    onSizeDragEnd?: (context: {
        e: MouseEvent;
        size: number;
    }) => void;
}
export interface DrawerOptions extends Omit<TdDrawerProps, 'attach'> {
    attach?: AttachNode;
    className?: string;
    style?: string | Styles;
}
export interface DrawerInstance {
    destroy?: () => void;
    hide?: () => void;
    show?: () => void;
    update?: (props: DrawerOptions) => void;
}
export type FooterButton = string | ButtonProps | TNode | null;
export interface SizeDragLimit {
    max: number;
    min: number;
}
export type DrawerEventSource = 'esc' | 'close-btn' | 'cancel' | 'overlay';
export interface DrawerCloseContext {
    trigger: DrawerEventSource;
    e: MouseEvent | KeyboardEvent;
}
export type DrawerMethod = (options?: DrawerOptions, context?: AppContext) => DrawerInstance;
