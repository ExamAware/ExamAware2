import { InputProps } from '../input';
import { TagProps } from '../tag';
import { TNode, SizeEnum } from '../common';
export interface TdTagInputProps {
    autoWidth?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    collapsedItems?: TNode<{
        value: TagInputValue;
        collapsedSelectedItems: TagInputValue;
        count: number;
        onClose: (context: {
            index: number;
            e?: MouseEvent;
        }) => void;
    }>;
    disabled?: boolean;
    dragSort?: boolean;
    excessTagsDisplayType?: 'scroll' | 'break-line';
    inputProps?: InputProps;
    inputValue?: string;
    defaultInputValue?: string;
    label?: string | TNode;
    max?: number;
    minCollapsedNum?: number;
    placeholder?: string;
    prefixIcon?: TNode;
    readonly?: boolean;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffix?: string | TNode;
    suffixIcon?: TNode;
    tag?: string | TNode<{
        value: string | number;
    }>;
    tagProps?: TagProps;
    tips?: string | TNode;
    value?: TagInputValue;
    defaultValue?: TagInputValue;
    modelValue?: TagInputValue;
    valueDisplay?: string | TNode<{
        value: TagInputValue;
        onClose: (index: number, item?: any) => void;
    }>;
    onBlur?: (value: TagInputValue, context: {
        inputValue: string;
        e: FocusEvent;
    }) => void;
    onChange?: (value: TagInputValue, context: TagInputChangeContext) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
    onDragSort?: (context: TagInputDragSortContext) => void;
    onEnter?: (value: TagInputValue, context: {
        e: KeyboardEvent;
        inputValue: string;
    }) => void;
    onFocus?: (value: TagInputValue, context: {
        inputValue: string;
        e: FocusEvent;
    }) => void;
    onInputChange?: (value: string, context?: InputValueChangeContext) => void;
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
    onRemove?: (context: TagInputRemoveContext) => void;
}
export type TagInputValue = Array<string | number>;
export interface TagInputChangeContext {
    trigger: TagInputTriggerSource;
    index?: number;
    item?: string | number;
    e?: MouseEvent | KeyboardEvent;
}
export type TagInputTriggerSource = 'enter' | 'tag-remove' | 'backspace' | 'clear';
export interface TagInputDragSortContext {
    newTags: TagInputValue;
    currentIndex: number;
    current: string | number;
    targetIndex: number;
    target: string | number;
}
export interface InputValueChangeContext {
    e?: InputEvent | MouseEvent | CompositionEvent | KeyboardEvent;
    trigger: 'input' | 'clear' | 'enter' | 'blur';
}
export interface TagInputRemoveContext {
    value: TagInputValue;
    index: number;
    item: string | number;
    e?: MouseEvent | KeyboardEvent;
    trigger: TagInputRemoveTrigger;
}
export type TagInputRemoveTrigger = 'tag-remove' | 'backspace';
