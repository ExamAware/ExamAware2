import { Instance } from '@popperjs/core';
import { TNode, ClassName, Styles, AttachNode } from '../common';
export interface TdPopupProps {
    attach?: AttachNode;
    content?: string | TNode;
    default?: string | TNode;
    delay?: number | Array<number>;
    destroyOnClose?: boolean;
    disabled?: boolean;
    hideEmptyPopup?: boolean;
    overlayClassName?: ClassName;
    overlayInnerClassName?: ClassName;
    overlayInnerStyle?: Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles);
    overlayStyle?: Styles | ((triggerElement: HTMLElement, popupElement: HTMLElement) => Styles);
    placement?: PopupPlacement;
    popperOptions?: object;
    showArrow?: boolean;
    trigger?: 'hover' | 'click' | 'focus' | 'mousedown' | 'context-menu';
    triggerElement?: string | TNode;
    visible?: boolean;
    defaultVisible?: boolean;
    modelValue?: boolean;
    zIndex?: number;
    onOverlayClick?: (context: {
        e: MouseEvent;
    }) => void;
    onScroll?: (context: {
        e: WheelEvent;
    }) => void;
    onScrollToBottom?: (context: {
        e: WheelEvent;
    }) => void;
    onVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}
export interface PopupInstanceFunctions {
    getOverlay?: () => HTMLElement | null;
    getOverlayState?: () => {
        hover: boolean;
    };
    getPopper?: () => Instance | null;
    update?: () => void;
}
export type PopupPlacement = 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
export interface PopupVisibleChangeContext {
    e?: PopupTriggerEvent;
    trigger?: PopupTriggerSource;
}
export type PopupTriggerEvent = MouseEvent | FocusEvent | KeyboardEvent;
export type PopupTriggerSource = 'document' | 'trigger-element-click' | 'trigger-element-hover' | 'trigger-element-blur' | 'trigger-element-focus' | 'trigger-element-mousedown' | 'trigger-element-close' | 'context-menu' | 'keydown-esc';
