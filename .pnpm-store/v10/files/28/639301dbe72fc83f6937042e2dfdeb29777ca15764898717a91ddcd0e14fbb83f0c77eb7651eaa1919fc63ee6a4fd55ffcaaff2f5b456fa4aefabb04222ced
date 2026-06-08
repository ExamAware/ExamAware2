import { SelectProps } from '../select';
import { TNode, SizeEnum } from '../common';
export interface TdPaginationProps {
    current?: number;
    defaultCurrent?: number;
    modelValue?: number;
    disabled?: boolean;
    foldedMaxPageBtn?: number;
    maxPageBtn?: number;
    pageEllipsisMode?: 'mid' | 'both-ends';
    pageSize?: number;
    defaultPageSize?: number;
    pageSizeOptions?: Array<number | {
        label: string;
        value: number;
    }>;
    selectProps?: SelectProps;
    showFirstAndLastPageBtn?: boolean;
    showJumper?: boolean;
    showPageNumber?: boolean;
    showPageSize?: boolean;
    showPreviousAndNextBtn?: boolean;
    size?: 'small' | 'medium';
    theme?: 'default' | 'simple';
    total?: number;
    totalContent?: boolean | TNode;
    onChange?: (pageInfo: PageInfo) => void;
    onCurrentChange?: (current: number, pageInfo: PageInfo) => void;
    onPageSizeChange?: (pageSize: number, pageInfo: PageInfo) => void;
}
export interface TdPaginationMiniProps {
    disabled?: boolean | JumperDisabledConfig;
    layout?: 'horizontal' | 'vertical';
    showCurrent?: boolean;
    size?: SizeEnum;
    tips?: boolean | JumperTipsConfig;
    variant?: 'text' | 'outline';
    onChange?: (context: {
        e: MouseEvent;
        trigger: JumperTrigger;
    }) => void;
}
export interface PageInfo {
    current: number;
    previous: number;
    pageSize: number;
}
export type JumperDisabledConfig = {
    prev?: boolean;
    current?: boolean;
    next?: boolean;
};
export type JumperTipsConfig = {
    prev?: string;
    current?: string;
    next?: string;
};
export type JumperTrigger = 'prev' | 'current' | 'next';
