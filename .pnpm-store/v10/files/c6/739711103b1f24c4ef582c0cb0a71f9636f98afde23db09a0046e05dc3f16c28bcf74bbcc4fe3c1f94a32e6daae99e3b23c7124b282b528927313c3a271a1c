import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { TextareaProps } from '../textarea';
import { TNode, SizeEnum } from '../common';
export interface TdAutoCompleteProps<T extends AutoCompleteOption = AutoCompleteOption> {
    autofocus?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    default?: string | TNode;
    disabled?: boolean;
    empty?: string | TNode;
    filter?: (filterWords: string, option: T) => boolean | Promise<boolean>;
    filterable?: boolean;
    highlightKeyword?: boolean;
    inputProps?: InputProps;
    options?: Array<T>;
    panelBottomContent?: string | TNode;
    panelTopContent?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    readonly?: boolean;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    textareaProps?: TextareaProps;
    tips?: string | TNode;
    triggerElement?: string | TNode;
    value?: string;
    defaultValue?: string;
    modelValue?: string;
    onBlur?: (context: {
        e: FocusEvent;
        value: string;
    }) => void;
    onChange?: (value: string, context?: {
        e?: InputEvent | MouseEvent | CompositionEvent | KeyboardEvent;
    }) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onCompositionend?: (context: {
        e: CompositionEvent;
        value: string;
    }) => void;
    onCompositionstart?: (context: {
        e: CompositionEvent;
        value: string;
    }) => void;
    onEnter?: (context: {
        e: KeyboardEvent;
        value: string;
    }) => void;
    onFocus?: (context: {
        e: FocusEvent;
        value: string;
    }) => void;
    onSelect?: (value: string, context: {
        e: MouseEvent | KeyboardEvent;
    }) => void;
}
export type AutoCompleteOption = string | AutoCompleteOptionObj;
export interface AutoCompleteOptionObj {
    label?: string | TNode;
    text?: string;
    [key: string]: any;
}
