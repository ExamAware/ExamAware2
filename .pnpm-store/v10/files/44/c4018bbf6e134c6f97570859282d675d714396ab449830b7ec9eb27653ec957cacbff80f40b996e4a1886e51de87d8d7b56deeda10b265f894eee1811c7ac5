import { TNode } from '../common';
export interface TdStepsProps {
    current?: string | number;
    defaultCurrent?: string | number;
    modelValue?: string | number;
    layout?: 'horizontal' | 'vertical';
    options?: Array<TdStepItemProps>;
    readonly?: boolean;
    separator?: 'line' | 'dashed' | 'arrow';
    sequence?: 'positive' | 'reverse';
    theme?: 'default' | 'dot';
    onChange?: (current: string | number, previous: string | number, context?: {
        e?: MouseEvent;
    }) => void;
}
export interface TdStepItemProps {
    content?: string | TNode;
    default?: string | TNode;
    extra?: string | TNode;
    icon?: boolean | TNode;
    status?: StepStatus;
    title?: string | TNode;
    value?: string | number;
}
export type StepStatus = 'default' | 'process' | 'finish' | 'error';
