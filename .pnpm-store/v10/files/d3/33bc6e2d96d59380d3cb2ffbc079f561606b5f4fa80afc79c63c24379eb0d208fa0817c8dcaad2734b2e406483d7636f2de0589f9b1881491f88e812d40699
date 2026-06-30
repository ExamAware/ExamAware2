import { TNode, TScroll, ComponentScrollToElementParams } from '../common';
export interface TdListProps {
    asyncLoading?: string | TNode;
    footer?: string | TNode;
    header?: string | TNode;
    layout?: 'horizontal' | 'vertical';
    scroll?: TScroll;
    size?: 'small' | 'medium' | 'large';
    split?: boolean;
    stripe?: boolean;
    onLoadMore?: (options: {
        e: MouseEvent;
    }) => void;
    onScroll?: (options: {
        e: Event | WheelEvent;
        scrollTop: number;
        scrollBottom: number;
    }) => void;
}
export interface ListInstanceFunctions {
    scrollTo?: (scrollToParams: ComponentScrollToElementParams) => void;
}
export interface TdListItemProps {
    action?: string | TNode;
    content?: string | TNode;
    default?: string | TNode;
}
export interface TdListItemMetaProps {
    avatar?: string | TNode;
    description?: string | TNode;
    image?: string | TNode;
    title?: string | TNode;
}
