import { TNode, SizeEnum, ClassName } from '../common';
export interface TdInputProps<T = InputValue> {
    align?: 'left' | 'center' | 'right';
    allowInputOverMax?: boolean;
    autoWidth?: boolean;
    autocomplete?: string;
    autofocus?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    format?: InputFormatType;
    inputClass?: ClassName;
    label?: string | TNode;
    maxcharacter?: number;
    maxlength?: string | number;
    name?: string;
    placeholder?: string;
    prefixIcon?: TNode;
    readonly?: boolean;
    showClearIconOnEmpty?: boolean;
    showLimitNumber?: boolean;
    size?: SizeEnum;
    spellCheck?: boolean;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tips?: string | TNode;
    type?: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search' | 'submit' | 'hidden';
    value?: T;
    defaultValue?: T;
    modelValue?: T;
    onBlur?: (value: T, context: {
        e: FocusEvent;
    }) => void;
    onChange?: (value: T, context?: {
        e?: InputEvent | MouseEvent | CompositionEvent;
        trigger: 'input' | 'initial' | 'clear';
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
    onCompositionend?: (value: string, context: {
        e: CompositionEvent;
    }) => void;
    onCompositionstart?: (value: string, context: {
        e: CompositionEvent;
    }) => void;
    onEnter?: (value: T, context: {
        e: KeyboardEvent;
    }) => void;
    onFocus?: (value: T, context: {
        e: FocusEvent;
    }) => void;
    onKeydown?: (value: T, context: {
        e: KeyboardEvent;
    }) => void;
    onKeypress?: (value: T, context: {
        e: KeyboardEvent;
    }) => void;
    onKeyup?: (value: T, context: {
        e: KeyboardEvent;
    }) => void;
    onMouseenter?: (context: {
        e: MouseEvent;
    }) => void;
    onMouseleave?: (context: {
        e: MouseEvent;
    }) => void;
    onPaste?: (context: {
        e: ClipboardEvent;
        pasteValue: string;
    }) => void;
    onValidate?: (context: {
        error?: 'exceed-maximum' | 'below-minimum';
    }) => void;
    onWheel?: (context: {
        e: WheelEvent;
    }) => void;
}
export interface TdInputGroupProps {
    separate?: boolean;
}
export type InputFormatType = (value: string) => string;
export type InputValue = string | number;
