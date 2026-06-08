import { TooltipProps } from '../tooltip';
import { TNode } from '../common';
export interface TdTextProps {
    code?: boolean;
    content?: string | TNode;
    copyable?: boolean | TypographyCopyable;
    default?: string | TNode;
    delete?: boolean;
    disabled?: boolean;
    ellipsis?: boolean | TypographyEllipsis;
    italic?: boolean;
    keyboard?: boolean;
    mark?: string | boolean;
    strong?: boolean;
    theme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    underline?: boolean;
}
export interface TdTitleProps {
    content?: string | TNode;
    default?: string | TNode;
    ellipsis?: boolean | TypographyEllipsis;
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export interface TdParagraphProps {
    content?: string | TNode;
    default?: string | TNode;
    ellipsis?: boolean | TypographyEllipsis;
}
export interface TypographyEllipsis {
    collapsible?: boolean;
    expandable?: boolean;
    row?: number;
    suffix?: TNode<{
        expanded: boolean;
    }>;
    tooltipProps?: TooltipProps;
    onExpand?: (expanded: boolean) => void;
}
export interface TypographyCopyable {
    text?: string;
    suffix?: TNode<{
        copied: boolean;
    }>;
    tooltipProps?: TooltipProps;
    onCopy?: () => void;
}
