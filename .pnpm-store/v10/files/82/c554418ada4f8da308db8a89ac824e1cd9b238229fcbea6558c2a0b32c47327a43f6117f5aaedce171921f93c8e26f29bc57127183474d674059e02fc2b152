import { TNode } from '../common';
export interface TdBreadcrumbProps {
    ellipsis?: string | TNode<{
        items: Array<TdBreadcrumbItemProps>;
        separator: TdBreadcrumbProps['separator'];
    }>;
    itemsAfterCollapse?: number;
    itemsBeforeCollapse?: number;
    maxItemWidth?: string;
    maxItems?: number;
    options?: Array<TdBreadcrumbItemProps>;
    separator?: string | TNode;
    theme?: 'light';
}
export interface TdBreadcrumbItemProps {
    content?: string | TNode;
    default?: string | TNode;
    disabled?: boolean;
    href?: string;
    icon?: TNode;
    maxWidth?: string;
    replace?: boolean;
    router?: any;
    target?: '_blank' | '_self' | '_parent' | '_top';
    to?: string | Route;
    onClick?: (e: MouseEvent) => void;
}
export interface Route {
    path?: string;
    name?: string;
    hash?: string;
    query?: RouteData;
    params?: RouteData;
}
export type RouteData = {
    [key: string]: string | string[];
};
