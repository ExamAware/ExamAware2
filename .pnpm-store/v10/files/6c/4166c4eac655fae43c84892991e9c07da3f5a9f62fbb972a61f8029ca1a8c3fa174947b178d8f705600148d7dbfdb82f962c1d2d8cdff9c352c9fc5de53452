import { TNode } from '../common';
export interface TdSwiperProps {
    animation?: 'slide' | 'fade';
    autoplay?: boolean;
    cardScale?: number;
    current?: number;
    defaultCurrent?: number;
    direction?: 'horizontal' | 'vertical';
    duration?: number;
    height?: number;
    interval?: number;
    loop?: boolean;
    navigation?: SwiperNavigation | TNode;
    stopOnHover?: boolean;
    trigger?: 'hover' | 'click';
    type?: 'default' | 'card';
    onChange?: (current: number, context: {
        source: SwiperChangeSource;
    }) => void;
}
export interface SwiperNavigation {
    placement?: 'inside' | 'outside';
    showSlideBtn?: 'always' | 'hover' | 'never';
    size?: 'small' | 'medium' | 'large';
    type?: SwiperNavigationType;
}
export type SwiperChangeSource = 'autoplay' | 'click' | 'hover';
export type SwiperNavigationType = 'dots' | 'dots-bar' | 'bars' | 'fraction';
