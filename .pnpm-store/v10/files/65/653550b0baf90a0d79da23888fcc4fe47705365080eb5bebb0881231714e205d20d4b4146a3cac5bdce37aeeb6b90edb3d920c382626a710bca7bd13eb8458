import { TNode, SizeEnum } from '../common';
export interface TdTagProps {
    closable?: boolean;
    color?: string;
    content?: string | TNode;
    default?: string | TNode;
    disabled?: boolean;
    icon?: TNode;
    maxWidth?: string | number;
    shape?: 'square' | 'round' | 'mark';
    size?: SizeEnum;
    theme?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
    title?: string;
    variant?: 'dark' | 'light' | 'outline' | 'light-outline';
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
    onClose?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface TdCheckTagProps {
    checked?: boolean;
    defaultChecked?: boolean;
    modelValue?: boolean;
    checkedProps?: TdTagProps;
    content?: string | number | string[] | TNode;
    default?: string | TNode;
    disabled?: boolean;
    size?: SizeEnum;
    uncheckedProps?: TdTagProps;
    value?: string | number;
    onChange?: (checked: boolean, context: CheckTagChangeContext) => void;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface TdCheckTagGroupProps {
    checkedProps?: TdTagProps;
    multiple?: boolean;
    options?: CheckTagGroupOption[];
    uncheckedProps?: TdTagProps;
    value?: CheckTagGroupValue;
    defaultValue?: CheckTagGroupValue;
    modelValue?: CheckTagGroupValue;
    onChange?: (value: CheckTagGroupValue, context: CheckTagGroupChangeContext) => void;
}
export interface CheckTagChangeContext {
    e: MouseEvent | KeyboardEvent;
    value: string | number;
}
export interface CheckTagGroupOption extends TdCheckTagProps {
    label: string | TNode;
    value: string | number;
}
export type CheckTagGroupValue = Array<string | number>;
export interface CheckTagGroupChangeContext {
    type: 'check' | 'uncheck';
    e: MouseEvent | KeyboardEvent;
    value: string | number;
}
