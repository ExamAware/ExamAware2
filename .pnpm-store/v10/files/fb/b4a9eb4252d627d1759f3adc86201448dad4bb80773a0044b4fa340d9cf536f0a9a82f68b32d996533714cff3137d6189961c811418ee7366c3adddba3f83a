import { CheckboxProps } from '../checkbox';
import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps, SelectInputBlurContext } from '../select-input';
import { TagInputProps } from '../tag-input';
import { TagProps } from '../tag';
import { TreeNodeModel } from '../tree';
import { PopupVisibleChangeContext } from '../popup';
import { TNode, TreeOptionData, SizeEnum, TreeKeysType } from '../common';
export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
    autofocus?: boolean;
    borderless?: boolean;
    checkProps?: CheckboxProps;
    checkStrictly?: boolean;
    clearable?: boolean;
    collapsedItems?: TNode<{
        value: CascaderOption[];
        collapsedSelectedItems: CascaderOption[];
        count: number;
        onClose: (context: {
            index: number;
            e?: MouseEvent;
        }) => void;
    }>;
    disabled?: boolean;
    empty?: string | TNode;
    filter?: (filterWords: string, node: TreeNodeModel) => boolean | Promise<boolean>;
    filterable?: boolean;
    inputProps?: InputProps;
    keys?: TreeKeysType;
    label?: string | TNode;
    lazy?: boolean;
    load?: (node: TreeNodeModel<CascaderOption>) => Promise<Array<CascaderOption>>;
    loading?: boolean;
    loadingText?: string | TNode;
    max?: number;
    minCollapsedNum?: number;
    multiple?: boolean;
    option?: TNode<{
        item: CascaderOption;
        index: number;
        onChange: () => void;
        onExpand: () => void;
    }>;
    options?: Array<CascaderOption>;
    panelBottomContent?: string | TNode;
    panelTopContent?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    popupVisible?: boolean;
    prefixIcon?: TNode;
    readonly?: boolean;
    reserveKeyword?: boolean;
    selectInputProps?: SelectInputProps;
    showAllLevels?: boolean;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tagInputProps?: TagInputProps;
    tagProps?: TagProps;
    tips?: string | TNode;
    trigger?: 'click' | 'hover';
    value?: CascaderValue<CascaderOption>;
    defaultValue?: CascaderValue<CascaderOption>;
    modelValue?: CascaderValue<CascaderOption>;
    valueDisplay?: string | TNode<{
        value: CascaderValue<CascaderOption>;
        onClose: (index: number) => void;
        displayValue?: CascaderValue<CascaderOption>;
        selectedOptions: CascaderOption[];
    }>;
    valueMode?: 'onlyLeaf' | 'parentFirst' | 'all';
    valueType?: 'single' | 'full';
    onBlur?: (context: {
        value: CascaderValue<CascaderOption>;
    } & SelectInputBlurContext) => void;
    onChange?: (value: CascaderValue<CascaderOption>, context: CascaderChangeContext<CascaderOption>) => void;
    onFocus?: (context: {
        value: CascaderValue<CascaderOption>;
        e: FocusEvent;
    }) => void;
    onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
    onRemove?: (context: RemoveContext<CascaderOption>) => void;
}
export type CascaderValue<T extends TreeOptionData = TreeOptionData> = string | number | T | Array<CascaderValue<T>>;
export interface CascaderChangeContext<CascaderOption> {
    node?: TreeNodeModel<CascaderOption>;
    source: CascaderChangeSource;
}
export type CascaderChangeSource = 'invalid-value' | 'check' | 'clear' | 'uncheck';
export interface RemoveContext<T> {
    value: CascaderValue<T>;
    node: TreeNodeModel<T>;
}
