import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps } from '../select-input';
import { TagProps } from '../tag';
import { TreeProps, TreeNodeModel } from '../tree';
import { SelectInputValueChangeContext } from '../select-input';
import { PopupVisibleChangeContext } from '../popup';
import { TNode, TreeOptionData, TreeKeysType } from '../common';
export interface TdTreeSelectProps<DataOption extends TreeOptionData = TreeOptionData, TreeValueType extends TreeSelectValue = TreeSelectValue> {
    autoWidth?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    collapsedItems?: TNode<{
        value: DataOption[];
        collapsedSelectedItems: DataOption[];
        count: number;
        onClose: (context: {
            index: number;
            e?: MouseEvent;
        }) => void;
    }>;
    data?: Array<DataOption>;
    disabled?: boolean;
    empty?: string | TNode;
    filter?: (filterWords: string, option: DataOption) => boolean;
    filterable?: boolean;
    inputProps?: InputProps;
    inputValue?: string;
    defaultInputValue?: string;
    keys?: TreeKeysType;
    loading?: boolean;
    loadingText?: string | TNode;
    max?: number;
    minCollapsedNum?: number;
    multiple?: boolean;
    panelBottomContent?: string | TNode;
    panelTopContent?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    popupVisible?: boolean;
    prefixIcon?: TNode;
    readonly?: boolean;
    selectInputProps?: SelectInputProps;
    size?: 'small' | 'medium' | 'large';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tagProps?: TagProps;
    treeProps?: TreeProps;
    value?: TreeSelectValue;
    defaultValue?: TreeSelectValue;
    modelValue?: TreeSelectValue;
    valueDisplay?: TNode<{
        value: DataOption[];
        onClose: () => void;
    }>;
    valueType?: 'value' | 'object';
    onBlur?: (context: {
        value: TreeSelectValue;
        e: FocusEvent;
    }) => void;
    onChange?: (value: TreeSelectValue, context: {
        node: TreeNodeModel<DataOption>;
        trigger: TreeSelectValueChangeTrigger;
        e?: MouseEvent | KeyboardEvent;
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onFocus?: (context: {
        value: TreeSelectValue;
        e: FocusEvent;
    }) => void;
    onInputChange?: (value: string, context?: SelectInputValueChangeContext) => void;
    onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
    onRemove?: (options: RemoveOptions<DataOption>) => void;
    onSearch?: (filterWords: string) => void;
}
export type TreeSelectValue = string | number | object | Array<TreeSelectValue>;
export type TreeSelectValueChangeTrigger = 'clear' | 'tag-remove' | 'backspace' | 'check' | 'uncheck';
export interface RemoveOptions<T> {
    value: string | number | object;
    data: T;
    e?: MouseEvent;
}
