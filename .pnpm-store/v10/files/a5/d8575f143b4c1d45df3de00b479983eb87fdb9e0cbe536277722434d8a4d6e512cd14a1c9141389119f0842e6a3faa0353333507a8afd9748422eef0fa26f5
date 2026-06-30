import { TNode } from '../common';
export interface TdSwitchProps<T = SwitchValue> {
    beforeChange?: () => boolean | Promise<boolean>;
    customValue?: Array<SwitchValue>;
    disabled?: boolean;
    label?: Array<string | TNode> | TNode<{
        value: SwitchValue;
    }>;
    loading?: boolean;
    size?: 'small' | 'medium' | 'large';
    value?: T;
    defaultValue?: T;
    modelValue?: T;
    onChange?: (value: T, context: {
        e: MouseEvent;
    }) => void;
}
export type SwitchValue = string | number | boolean;
