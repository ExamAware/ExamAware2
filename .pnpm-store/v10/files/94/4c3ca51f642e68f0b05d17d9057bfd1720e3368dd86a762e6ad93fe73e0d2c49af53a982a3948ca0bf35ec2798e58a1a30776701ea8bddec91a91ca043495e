import { InputProps, InputValue, InputFormatType } from '../input';
import { PopupProps } from '../popup';
import { RangeInputProps } from '../range-input';
import { PopupVisibleChangeContext } from '../popup';
import { TNode } from '../common';
export interface TdRangeInputProps {
    activeIndex?: number;
    borderless?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    format?: InputFormatType | Array<InputFormatType>;
    inputProps?: InputProps | Array<InputProps>;
    label?: string | TNode;
    placeholder?: string | Array<string>;
    prefixIcon?: TNode;
    readonly?: boolean;
    separator?: string | TNode;
    showClearIconOnEmpty?: boolean;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tips?: string | TNode;
    value?: RangeInputValue;
    defaultValue?: RangeInputValue;
    modelValue?: RangeInputValue;
    onBlur?: (value: RangeInputValue, context?: {
        e?: FocusEvent;
        position?: RangeInputPosition;
    }) => void;
    onChange?: (value: RangeInputValue, context?: {
        e?: InputEvent | MouseEvent | CompositionEvent;
        position?: RangeInputPosition;
        trigger?: 'input' | 'initial' | 'clear';
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onClick?: (context?: {
        e?: MouseEvent;
        position?: RangeInputPosition;
    }) => void;
    onEnter?: (value: RangeInputValue, context?: {
        e?: InputEvent | MouseEvent;
        position?: RangeInputPosition;
    }) => void;
    onFocus?: (value: RangeInputValue, context?: {
        e?: FocusEvent;
        position?: RangeInputPosition;
    }) => void;
    onMouseenter?: (context: {
        e: MouseEvent;
    }) => void;
    onMouseleave?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface RangeInputInstanceFunctions {
    blur?: (options?: {
        position?: RangeInputPosition;
    }) => void;
    focus?: (options?: {
        position?: RangeInputPosition;
    }) => void;
    select?: (options?: {
        position?: RangeInputPosition;
    }) => void;
}
export interface TdRangeInputPopupProps {
    autoWidth?: boolean;
    disabled?: boolean;
    inputValue?: RangeInputValue;
    defaultInputValue?: RangeInputValue;
    label?: string | TNode;
    panel?: string | TNode;
    popupProps?: PopupProps;
    popupVisible?: boolean;
    rangeInputProps?: RangeInputProps;
    readonly?: boolean;
    status?: 'default' | 'success' | 'warning' | 'error';
    tips?: string | TNode;
    onInputChange?: (value: RangeInputValue, context?: RangeInputValueChangeContext) => void;
    onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
}
export type RangeInputValue = Array<InputValue>;
export type RangeInputPosition = 'first' | 'second' | 'all';
export type RangeInputValueChangeContext = {
    e?: InputEvent | MouseEvent;
    trigger?: 'input' | 'clear';
    position?: RangeInputPosition;
};
