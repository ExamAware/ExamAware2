import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps } from '../select-input';
import { TagInputProps } from '../tag-input';
import { TagProps } from '../tag';
import { SelectInputValueChangeContext } from '../select-input';
import { PopupVisibleChangeContext } from '../popup';
import { PlainObject, TNode, SizeEnum, KeysType, InfinityScroll } from '../common';
export interface TdSelectProps<T extends SelectOption = SelectOption> {
    autoWidth?: boolean;
    autofocus?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    collapsedItems?: TNode<{
        value: T[];
        collapsedSelectedItems: T[];
        count: number;
        onClose: (context: {
            index: number;
            e?: MouseEvent;
        }) => void;
    }>;
    creatable?: boolean;
    disabled?: boolean;
    empty?: string | TNode;
    filter?: (filterWords: string, option: T) => boolean | Promise<boolean>;
    filterable?: boolean;
    inputProps?: InputProps;
    inputValue?: string;
    defaultInputValue?: string;
    keys?: KeysType;
    label?: string | TNode;
    loading?: boolean;
    loadingText?: string | TNode;
    max?: number;
    minCollapsedNum?: number;
    multiple?: boolean;
    options?: Array<T>;
    panelBottomContent?: string | TNode;
    panelTopContent?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    prefixIcon?: TNode;
    readonly?: boolean;
    reserveKeyword?: boolean;
    scroll?: InfinityScroll;
    selectInputProps?: SelectInputProps;
    showArrow?: boolean;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tagInputProps?: TagInputProps;
    tagProps?: TagProps;
    tips?: string | TNode;
    value?: SelectValue;
    defaultValue?: SelectValue;
    modelValue?: SelectValue;
    valueDisplay?: string | TNode<{
        value: SelectValue;
        onClose: (index: number) => void;
        displayValue?: SelectValue;
    } | SelectValue>;
    valueType?: 'value' | 'object';
    onBlur?: (context: {
        value: SelectValue;
        e: FocusEvent | KeyboardEvent;
    }) => void;
    onChange?: (value: SelectValue, context: {
        option?: T;
        selectedOptions: T[];
        trigger: SelectValueChangeTrigger;
        e?: MouseEvent | KeyboardEvent;
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onCreate?: (value: string | number | boolean) => void;
    onEnter?: (context: {
        inputValue: string;
        e: KeyboardEvent;
        value: SelectValue;
    }) => void;
    onFocus?: (context: {
        value: SelectValue;
        e: FocusEvent | KeyboardEvent;
    }) => void;
    onInputChange?: (value: string, context?: SelectInputValueChangeContext) => void;
    onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
    onRemove?: (options: SelectRemoveContext<T>) => void;
    onSearch?: (filterWords: string, context: {
        e: KeyboardEvent;
    }) => void;
}
export interface TdOptionProps {
    checkAll?: boolean;
    content?: string | TNode;
    default?: string | TNode;
    disabled?: boolean;
    label?: string;
    title?: string;
    value?: string | number | boolean;
}
export interface TdOptionGroupProps {
    divider?: boolean;
    label?: string;
}
export interface SelectKeysType {
    value?: string | ((option: SelectOption) => string);
    label?: string | ((option: SelectOption) => string);
    disabled?: string;
}
export type SelectValue<T extends SelectOption = SelectOption> = string | number | boolean | T | Array<SelectValue<T>>;
export type SelectValueChangeTrigger = 'clear' | 'tag-remove' | 'backspace' | 'check' | 'uncheck' | 'default';
export interface SelectRemoveContext<T> {
    value: string | number;
    data: T;
    e: MouseEvent | KeyboardEvent;
}
export type SelectOption = TdOptionProps | SelectOptionGroup | PlainObject;
export interface SelectOptionGroup extends TdOptionGroupProps {
    group: string;
    children: Array<TdOptionProps>;
}
