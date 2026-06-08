import { CheckboxProps } from '../checkbox';
import { PaginationProps, PageInfo } from '../pagination';
import { InputProps } from '../input';
import { TreeProps } from '../tree';
import { TNode, KeysType } from '../common';
export interface TdTransferProps<T extends DataOption = DataOption> {
    checkboxProps?: CheckboxProps;
    checked?: Array<TransferValue>;
    defaultChecked?: Array<TransferValue>;
    data?: Array<T>;
    direction?: 'left' | 'right' | 'both';
    disabled?: boolean | Array<boolean>;
    empty?: EmptyType | Array<EmptyType> | TNode;
    footer?: Array<string | TNode> | TNode<{
        type: TransferListType;
    }>;
    keys?: KeysType;
    operation?: Array<string | TNode> | TNode<{
        direction: 'left' | 'right';
    }>;
    pagination?: PaginationProps | Array<PaginationProps>;
    search?: SearchOption | Array<SearchOption>;
    showCheckAll?: boolean | Array<boolean>;
    targetDraggable?: boolean;
    targetSort?: 'original' | 'push' | 'unshift';
    title?: Array<TitleType> | TNode<{
        type: TransferListType;
    }>;
    transferItem?: TNode<TransferItem<T>>;
    tree?: (tree: TreeProps) => TNode;
    value?: Array<TransferValue>;
    defaultValue?: Array<TransferValue>;
    modelValue?: Array<TransferValue>;
    onChange?: (targetValue: Array<TransferValue>, context: TargetParams) => void;
    onCheckedChange?: (options: CheckedOptions) => void;
    onPageChange?: (page: PageInfo, context: {
        type: TransferListType;
    }) => void;
    onScroll?: (options: {
        e: Event;
        bottomDistance: number;
        type: TransferListType;
    }) => void;
    onSearch?: (options: SearchContext) => void;
}
export type EmptyType = string | TNode;
export type SearchOption = boolean | InputProps;
export type TitleType = string | TNode;
export type TransferListType = 'source' | 'target';
export interface TransferItem<T extends DataOption = DataOption> {
    data: T;
    index: number;
    type: TransferListType;
}
export interface TargetParams {
    type: TransferListType;
    movedValue: Array<TransferValue>;
}
export interface CheckedOptions {
    checked: Array<TransferValue>;
    sourceChecked: Array<TransferValue>;
    targetChecked: Array<TransferValue>;
    type: TransferListType;
}
export interface SearchContext {
    query: string;
    type: TransferListType;
    trigger: 'input' | 'enter';
    e: InputEvent | KeyboardEvent;
}
export type DataOption = {
    label?: string;
    value?: TransferValue;
    disabled?: boolean;
} & Record<string, any>;
export type TransferValue = string | number;
