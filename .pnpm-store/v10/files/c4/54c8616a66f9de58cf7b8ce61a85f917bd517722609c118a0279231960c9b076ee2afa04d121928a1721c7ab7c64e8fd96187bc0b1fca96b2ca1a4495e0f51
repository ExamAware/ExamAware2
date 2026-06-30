import { TNode, AttachNode, AppContext } from '../common';
export interface TdMessageProps {
    closeBtn?: string | boolean | TNode;
    content?: string | TNode;
    duration?: number;
    icon?: boolean | TNode;
    theme?: MessageThemeList;
    onClose?: (context: {
        trigger: 'close-click' | 'duration-end';
        e?: MouseEvent;
    }) => void;
    onCloseBtnClick?: (context: {
        e: MouseEvent;
    }) => void;
    onDurationEnd?: () => void;
}
export interface MessageOptions extends TdMessageProps {
    attach?: AttachNode;
    className?: string;
    offset?: Array<string | number>;
    placement?: MessagePlacementList;
    style?: object;
    zIndex?: number;
}
export type MessageThemeList = 'info' | 'success' | 'warning' | 'error' | 'question' | 'loading';
export type MessagePlacementList = 'center' | 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface MessageInstance {
    close: () => void;
}
export type MessageMethod = (theme: MessageThemeList, message: string | TNode | MessageOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageInfoOptions = Omit<MessageOptions, 'theme'>;
export type MessageInfoMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageErrorMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageWarningMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageSuccessMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageLoadingMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageQuestionMethod = (message: string | TNode | MessageInfoOptions, duration?: number, context?: AppContext) => Promise<MessageInstance>;
export type MessageCloseMethod = (options: Promise<MessageInstance>) => void;
export type MessageCloseAllMethod = () => void;
export type MessageConfigMethod = (message: MessageOptions) => void;
