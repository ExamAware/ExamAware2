import { TNode } from '../common';
export interface TdTimelineProps {
    labelAlign?: 'left' | 'right' | 'alternate' | 'top' | 'bottom';
    layout?: 'horizontal' | 'vertical';
    mode?: 'alternate' | 'same';
    reverse?: boolean;
    theme?: 'default' | 'dot';
}
export interface TdTimelineItemProps {
    content?: string | TNode;
    dot?: TNode;
    dotColor?: string;
    label?: string | TNode;
    labelAlign?: 'left' | 'right' | 'top' | 'bottom';
    loading?: boolean;
    onClick?: (context: {
        e: MouseEvent;
        item: TdTimelineItemProps;
    }) => void;
}
