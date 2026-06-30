import { TNode, AttachNode, AppContext } from '../common';
export interface TdNotificationProps {
    closeBtn?: string | boolean | TNode;
    content?: string | TNode;
    default?: string | TNode;
    duration?: number;
    footer?: string | TNode;
    icon?: boolean | TNode;
    theme?: NotificationThemeList;
    title?: string | TNode;
    onCloseBtnClick?: (context: {
        e: MouseEvent;
    }) => void;
    onDurationEnd?: () => void;
    onClose?: () => void;
}
export interface NotificationOptions extends TdNotificationProps {
    attach?: AttachNode;
    offset?: Array<string | number>;
    placement?: NotificationPlacementList;
    zIndex?: number;
}
export type NotificationThemeList = 'info' | 'success' | 'warning' | 'error';
export type NotificationPlacementList = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
export interface NotificationInstance {
    close: () => void;
}
export type NotificationMethod = (theme: NotificationThemeList, options: NotificationOptions, context?: AppContext) => Promise<NotificationInstance>;
export type NotificationInfoOptions = Omit<NotificationOptions, 'theme'>;
export type NotificationInfoMethod = (options: NotificationInfoOptions, context?: AppContext) => Promise<NotificationInstance>;
export type NotificationWarningMethod = (options: NotificationInfoOptions, context?: AppContext) => Promise<NotificationInstance>;
export type NotificationErrorMethod = (options: NotificationInfoOptions, context?: AppContext) => Promise<NotificationInstance>;
export type NotificationSuccessMethod = (options: NotificationInfoOptions, context?: AppContext) => Promise<NotificationInstance>;
export type NotificationCloseMethod = (options: Promise<NotificationInstance>) => void;
export type NotificationCloseAllMethod = () => void;
export type NotificationConfigMethod = (notify: NotificationOptions) => void;
