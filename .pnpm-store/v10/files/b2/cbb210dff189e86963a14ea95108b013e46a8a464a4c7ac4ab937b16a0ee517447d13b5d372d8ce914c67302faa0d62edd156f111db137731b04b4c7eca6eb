import { ButtonProps } from '../button';
import { PopupProps } from '../popup';
import { TNode, AttachNode } from '../common';
export interface TdGuideProps {
    counter?: TNode<{
        current: number;
        total: number;
    }>;
    current?: number;
    defaultCurrent?: number;
    modelValue?: number;
    finishButtonProps?: ButtonProps;
    hideCounter?: boolean;
    hidePrev?: boolean;
    hideSkip?: boolean;
    highlightPadding?: number;
    mode?: 'popup' | 'dialog';
    nextButtonProps?: ButtonProps;
    prevButtonProps?: ButtonProps;
    showOverlay?: boolean;
    skipButtonProps?: ButtonProps;
    steps?: Array<GuideStep>;
    zIndex?: number;
    onChange?: (current: number, context?: {
        e: MouseEvent;
        total: number;
    }) => void;
    onFinish?: (context: {
        e: MouseEvent;
        current: number;
        total: number;
    }) => void;
    onNextStepClick?: (context: {
        e: MouseEvent;
        next: number;
        current: number;
        total: number;
    }) => void;
    onPrevStepClick?: (context: {
        e: MouseEvent;
        prev: number;
        current: number;
        total: number;
    }) => void;
    onSkip?: (context: {
        e: MouseEvent;
        current: number;
        total: number;
    }) => void;
}
export interface GuideStep {
    body?: string | TNode;
    content?: TNode;
    element: AttachNode;
    highlightContent?: TNode;
    highlightPadding?: number;
    mode?: 'popup' | 'dialog';
    nextButtonProps?: ButtonProps;
    offset?: Array<string | number>;
    placement?: StepPopupPlacement | StepDialogPlacement;
    popupProps?: PopupProps;
    prevButtonProps?: ButtonProps;
    showOverlay?: boolean;
    skipButtonProps?: ButtonProps;
    stepOverlayClass?: string;
    title?: string;
}
export type StepPopupPlacement = 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
export type StepDialogPlacement = 'top' | 'center';
