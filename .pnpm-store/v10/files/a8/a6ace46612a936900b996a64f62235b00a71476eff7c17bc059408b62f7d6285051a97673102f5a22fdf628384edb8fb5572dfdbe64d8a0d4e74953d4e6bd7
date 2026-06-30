import { TNode } from '../common';
export interface TdSkeletonProps {
    animation?: 'gradient' | 'flashed' | 'none';
    content?: string | TNode;
    default?: string | TNode;
    delay?: number;
    loading?: boolean;
    rowCol?: SkeletonRowCol;
    theme?: 'text' | 'avatar' | 'paragraph' | 'avatar-text' | 'tab' | 'article';
}
export type SkeletonRowCol = Array<number | SkeletonRowColObj | Array<SkeletonRowColObj>>;
export interface SkeletonRowColObj {
    width?: string;
    height?: string;
    size?: string;
    marginRight?: string;
    marginLeft?: string;
    margin?: string;
    content?: string | TNode;
    type?: 'rect' | 'circle' | 'text';
}
