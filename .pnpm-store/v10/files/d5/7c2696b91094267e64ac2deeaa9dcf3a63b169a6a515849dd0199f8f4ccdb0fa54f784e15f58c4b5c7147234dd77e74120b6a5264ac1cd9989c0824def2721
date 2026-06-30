import { TNode } from '../common';
export interface TdWatermarkProps {
    alpha?: number;
    content?: string | TNode;
    default?: string | TNode;
    height?: number;
    isRepeat?: boolean;
    layout?: 'rectangular' | 'hexagonal';
    lineSpace?: number;
    movable?: boolean;
    moveInterval?: number;
    offset?: Array<number>;
    removable?: boolean;
    rotate?: number;
    watermarkContent?: WatermarkText | WatermarkImage | Array<WatermarkText | WatermarkImage>;
    width?: number;
    x?: number;
    y?: number;
    zIndex?: number;
}
export interface WatermarkText {
    fontColor?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder';
    text?: string;
}
export interface WatermarkImage {
    isGrayscale?: boolean;
    url?: string;
}
