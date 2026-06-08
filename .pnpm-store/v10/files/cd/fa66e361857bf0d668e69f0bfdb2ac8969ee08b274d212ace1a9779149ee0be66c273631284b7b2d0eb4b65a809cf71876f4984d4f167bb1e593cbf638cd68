import { ImageProps } from '../image';
import { PopupProps } from '../popup';
import { TNode, ShapeEnum } from '../common';
export interface TdAvatarProps {
    alt?: string;
    content?: string | TNode;
    default?: string | TNode;
    hideOnLoadFailed?: boolean;
    icon?: TNode;
    image?: string;
    imageProps?: ImageProps;
    shape?: ShapeEnum;
    size?: string;
    onError?: (context: {
        e: Event;
    }) => void;
}
export interface TdAvatarGroupProps {
    cascading?: CascadingValue;
    collapseAvatar?: string | TNode;
    max?: number;
    popupProps?: PopupProps;
    size?: string;
}
export type CascadingValue = 'left-up' | 'right-up';
