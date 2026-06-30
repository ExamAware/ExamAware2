import { TNode, AttachNode, AppContext } from '../common';
export interface TdLoadingProps {
    attach?: AttachNode;
    content?: string | TNode;
    default?: string | TNode;
    delay?: number;
    fullscreen?: boolean;
    indicator?: boolean | TNode;
    inheritColor?: boolean;
    loading?: boolean;
    preventScrollThrough?: boolean;
    showOverlay?: boolean;
    size?: string;
    text?: string | TNode;
    zIndex?: number;
}
export interface LoadingInstance {
    hide: () => void;
}
export type LoadingMethod = (options: boolean | TdLoadingProps, context?: AppContext) => LoadingInstance;
