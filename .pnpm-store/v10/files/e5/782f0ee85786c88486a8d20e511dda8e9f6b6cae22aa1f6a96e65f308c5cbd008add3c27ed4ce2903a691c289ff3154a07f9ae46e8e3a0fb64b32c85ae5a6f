import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { TagInputProps, TagInputValue, TagInputChangeContext } from '../tag-input';
import { TagProps } from '../tag';
import { PopupVisibleChangeContext } from '../popup';
import { TNode, SizeEnum } from '../common';
export interface TdSelectInputProps {
    allowInput?: boolean;
    autoWidth?: boolean;
    autofocus?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    collapsedItems?: TNode<{
        value: SelectInputValue;
        collapsedSelectedItems: SelectInputValue;
        count: number;
        onClose: (context: {
            index: number;
            e?: MouseEvent;
        }) => void;
    }>;
    disabled?: boolean;
    inputProps?: InputProps;
    inputValue?: string;
    defaultInputValue?: string;
    keys?: SelectInputKeys;
    label?: string | TNode;
    loading?: boolean;
    minCollapsedNum?: number;
    multiple?: boolean;
    panel?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    popupVisible?: boolean;
    defaultPopupVisible?: boolean;
    prefixIcon?: TNode;
    readonly?: boolean;
    reserveKeyword?: boolean;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tag?: string | TNode<{
        value: string | number;
    }>;
    tagInputProps?: TagInputProps;
    tagProps?: TagProps;
    tips?: string | TNode;
    value?: SelectInputValue;
    valueDisplay?: string | TNode<{
        value: TagInputValue;
        onClose: (index: number, item?: any) => void;
    }>;
    onBlur?: (value: SelectInputValue, context: SelectInputBlurContext) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onEnter?: (value: SelectInputValue, context: {
        e: KeyboardEvent;
        inputValue: string;
        tagInputValue?: TagInputValue;
    }) => void;
    onFocus?: (value: SelectInputValue, context: SelectInputFocusContext) => void;
    onInputChange?: (value: string, context?: SelectInputValueChangeContext) => void;
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
    onPopupVisibleChange?: (visible: boolean, context: PopupVisibleChangeContext) => void;
    onTagChange?: (value: TagInputValue, context: SelectInputChangeContext) => void;
}
export interface SelectInputKeys {
    label?: string;
    value?: string;
    children?: string;
}
export type SelectInputValue = string | number | boolean | Date | Object | Array<any> | Array<SelectInputValue>;
export type SelectInputBlurContext = PopupVisibleChangeContext & {
    inputValue: string;
    tagInputValue?: TagInputValue;
};
export interface SelectInputFocusContext {
    inputValue: string;
    tagInputValue?: TagInputValue;
    e: FocusEvent;
}
export interface SelectInputValueChangeContext {
    e?: Event | InputEvent | MouseEvent | FocusEvent | KeyboardEvent | CompositionEvent;
    trigger: 'input' | 'clear' | 'blur' | 'focus' | 'initial' | 'change';
}
export type SelectInputChangeContext = TagInputChangeContext;
