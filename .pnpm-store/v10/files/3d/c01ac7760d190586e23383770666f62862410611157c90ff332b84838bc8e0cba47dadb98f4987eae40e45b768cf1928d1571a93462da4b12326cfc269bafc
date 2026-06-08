import { TNode } from '../common';
export interface TdCheckboxProps {
    checkAll?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    modelValue?: boolean;
    default?: string | TNode;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: string | TNode;
    lazyLoad?: boolean;
    name?: string;
    readonly?: boolean;
    title?: string;
    value?: string | number | boolean;
    onChange?: (checked: boolean, context: {
        e: Event;
    }) => void;
}
export interface TdCheckboxGroupProps<T = CheckboxGroupValue> {
    disabled?: boolean;
    lazyLoad?: boolean;
    max?: number;
    name?: string;
    options?: Array<CheckboxOption>;
    readonly?: boolean;
    value?: T;
    defaultValue?: T;
    modelValue?: T;
    onChange?: (value: T, context: CheckboxGroupChangeContext) => void;
}
export type CheckboxOption = string | number | CheckboxOptionObj;
export interface CheckboxOptionObj extends TdCheckboxProps {
    text?: string;
}
export type CheckboxGroupValue = Array<string | number | boolean>;
export interface CheckboxGroupChangeContext {
    e: Event;
    current: string | number | boolean;
    option: CheckboxOption | TdCheckboxProps;
    type: 'check' | 'uncheck';
}
