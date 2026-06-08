import { TNode, SizeEnum } from '../common';
export interface TdRadioProps<T = RadioValue> {
    allowUncheck?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    modelValue?: boolean;
    default?: string | TNode;
    disabled?: boolean;
    label?: string | TNode;
    name?: string;
    readonly?: boolean;
    value?: T;
    onChange?: (checked: boolean, context: {
        e: Event;
    }) => void;
    onClick?: (context: {
        e: MouseEvent;
    }) => void;
}
export interface TdRadioGroupProps<T = RadioValue> {
    allowUncheck?: boolean;
    disabled?: boolean;
    name?: string;
    options?: Array<RadioOption>;
    readonly?: boolean;
    size?: SizeEnum;
    theme?: 'radio' | 'button';
    value?: T;
    defaultValue?: T;
    modelValue?: T;
    variant?: 'outline' | 'primary-filled' | 'default-filled';
    onChange?: (value: T, context: {
        e: Event;
        name?: string;
    }) => void;
}
export type RadioOption = string | number | RadioOptionObj;
export interface RadioOptionObj {
    label?: string | TNode;
    value?: string | number | boolean;
    disabled?: boolean;
}
export type RadioValue = string | number | boolean;
