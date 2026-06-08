import { AffixProps } from '../affix';
import { TNode, ScrollContainer } from '../common';
export interface TdAnchorProps {
    affixProps?: AffixProps;
    bounds?: number;
    container?: ScrollContainer;
    cursor?: TNode;
    size?: 'small' | 'medium' | 'large';
    targetOffset?: number;
    onChange?: (currentLink: string, prevLink: string) => void;
    onClick?: (link: {
        href: string;
        title: string;
        e: MouseEvent;
    }) => void;
}
export interface TdAnchorTargetProps {
    id: string;
    tag?: string;
}
export interface TdAnchorItemProps {
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    title?: string | TNode;
    customScroll?: boolean;
}
