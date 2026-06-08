import { InputProps } from '../input';
import { TNode } from '../common';
export interface TdInputNumberProps<T = InputNumberValue> {
    align?: 'left' | 'center' | 'right';
    allowInputOverLimit?: boolean;
    autoWidth?: boolean;
    decimalPlaces?: InputNumberDecimalPlaces;
    disabled?: boolean;
    format?: (value: InputNumberValue, context?: {
        fixedNumber?: InputNumberValue;
    }) => InputNumberValue;
    inputProps?: InputProps;
    label?: string | TNode;
    largeNumber?: boolean;
    max?: InputNumberValue;
    min?: InputNumberValue;
    placeholder?: string;
    readonly?: boolean;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'success' | 'warning' | 'error';
    step?: InputNumberValue;
    suffix?: string | TNode;
    theme?: 'column' | 'row' | 'normal';
    tips?: string | TNode;
    value?: T;
    defaultValue?: T;
    modelValue?: T;
    onBlur?: (value: InputNumberValue, context: {
        e: FocusEvent;
    }) => void;
    onChange?: (value: T, context: ChangeContext) => void;
    onEnter?: (value: InputNumberValue, context: {
        e: KeyboardEvent;
    }) => void;
    onFocus?: (value: InputNumberValue, context: {
        e: FocusEvent;
    }) => void;
    onKeydown?: (value: InputNumberValue, context: {
        e: KeyboardEvent;
    }) => void;
    onKeypress?: (value: InputNumberValue, context: {
        e: KeyboardEvent;
    }) => void;
    onKeyup?: (value: InputNumberValue, context: {
        e: KeyboardEvent;
    }) => void;
    onValidate?: (context: {
        error?: 'exceed-maximum' | 'below-minimum';
    }) => void;
}
export type InputNumberDecimalPlaces = number | {
    enableRound: boolean;
    places: number;
};
export type InputNumberValue = number | string;
export interface ChangeContext {
    type: ChangeSource;
    e: InputEvent | MouseEvent | FocusEvent | KeyboardEvent | CompositionEvent;
}
export type ChangeSource = 'add' | 'reduce' | 'input' | 'blur' | 'enter' | 'clear' | 'props';
