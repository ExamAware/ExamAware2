import { TNode } from '../common';
export interface TdTextareaProps {
    allowInputOverMax?: boolean;
    autofocus?: boolean;
    autosize?: boolean | {
        minRows?: number;
        maxRows?: number;
    };
    disabled?: boolean;
    maxcharacter?: number;
    maxlength?: string | number;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    status?: 'default' | 'success' | 'warning' | 'error';
    tips?: string | TNode;
    value?: TextareaValue;
    defaultValue?: TextareaValue;
    modelValue?: TextareaValue;
    onBlur?: (value: TextareaValue, context: {
        e: FocusEvent;
    }) => void;
    onChange?: (value: TextareaValue, context?: {
        e?: InputEvent;
    }) => void;
    onFocus?: (value: TextareaValue, context: {
        e: FocusEvent;
    }) => void;
    onKeydown?: (value: TextareaValue, context: {
        e: KeyboardEvent;
    }) => void;
    onKeypress?: (value: TextareaValue, context: {
        e: KeyboardEvent;
    }) => void;
    onKeyup?: (value: TextareaValue, context: {
        e: KeyboardEvent;
    }) => void;
    onValidate?: (context: {
        error?: 'exceed-maximum' | 'below-minimum';
    }) => void;
}
export type TextareaValue = string | number;
