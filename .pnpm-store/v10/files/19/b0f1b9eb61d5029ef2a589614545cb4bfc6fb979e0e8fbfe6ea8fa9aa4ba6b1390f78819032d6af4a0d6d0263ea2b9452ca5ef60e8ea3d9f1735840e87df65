import { InputNumberProps } from '../input-number';
import { TooltipProps } from '../tooltip';
import { TNode } from '../common';
export interface TdSliderProps {
    disabled?: boolean;
    inputNumberProps?: boolean | InputNumberProps;
    label?: string | boolean | TNode<{
        value: SliderValue;
        position?: 'start' | 'end';
    }>;
    layout?: 'vertical' | 'horizontal';
    marks?: Array<number> | SliderMarks;
    max?: number;
    min?: number;
    range?: boolean;
    showStep?: boolean;
    step?: number;
    tooltipProps?: TooltipProps;
    value?: SliderValue;
    defaultValue?: SliderValue;
    modelValue?: SliderValue;
    onChange?: (value: SliderValue) => void;
    onChangeEnd?: (value: SliderValue) => void;
}
export interface SliderMarks {
    [mark: number]: string | TNode<{
        value: number;
    }>;
}
export type SliderValue = number | Array<number>;
