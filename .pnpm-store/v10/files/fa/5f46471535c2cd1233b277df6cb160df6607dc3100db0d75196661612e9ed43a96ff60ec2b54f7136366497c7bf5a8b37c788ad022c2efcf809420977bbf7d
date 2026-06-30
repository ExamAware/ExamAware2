import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps } from '../select-input';
import { SelectInputBlurContext } from '../select-input';
import { RangeInputProps } from '../range-input';
import { TNode } from '../common';
export interface TdTimePickerProps {
    allowInput?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    disableTime?: (h: number, m: number, s: number, ms: number) => Partial<{
        hour: Array<number>;
        minute: Array<number>;
        second: Array<number>;
        millisecond: Array<number>;
    }>;
    disabled?: boolean;
    format?: string;
    hideDisabledTime?: boolean;
    inputProps?: InputProps;
    label?: string | TNode;
    placeholder?: string;
    popupProps?: PopupProps;
    presets?: PresetTime;
    readonly?: boolean;
    selectInputProps?: SelectInputProps;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'success' | 'warning' | 'error';
    steps?: Array<string | number>;
    tips?: string | TNode;
    value?: TimePickerValue;
    defaultValue?: TimePickerValue;
    modelValue?: TimePickerValue;
    valueDisplay?: string | TNode<{
        value: TimePickerValue;
    }>;
    onBlur?: (context: {
        value: TimePickerValue;
    } & SelectInputBlurContext) => void;
    onChange?: (value: TimePickerValue) => void;
    onClear?: (context: {
        e: MouseEvent;
    }) => void;
    onClose?: (context: {
        e: MouseEvent;
    }) => void;
    onConfirm?: (context: {
        e: MouseEvent;
    }) => void;
    onFocus?: (context: {
        value: TimePickerValue;
        e: FocusEvent;
    }) => void;
    onInput?: (context: {
        value: TimePickerValue;
        e: InputEvent;
    }) => void;
    onOpen?: (context: {
        e: MouseEvent;
    }) => void;
    onPick?: (value: TimePickerValue, context: {
        e: MouseEvent;
    }) => void;
}
export interface TdTimeRangePickerProps {
    allowInput?: boolean;
    autoSwap?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    disableTime?: (h: number, m: number, s: number, ms: number, context: {
        partial: TimeRangePickerPartial;
    }) => Partial<{
        hour: Array<number>;
        minute: Array<number>;
        second: Array<number>;
    }>;
    disabled?: boolean | Array<boolean>;
    format?: string;
    hideDisabledTime?: boolean;
    label?: string | TNode;
    placeholder?: string | Array<string>;
    popupProps?: PopupProps;
    presets?: PresetTimeRange;
    rangeInputProps?: RangeInputProps;
    readonly?: boolean;
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'success' | 'warning' | 'error';
    steps?: Array<string | number>;
    tips?: string | TNode;
    value?: TimeRangeValue;
    defaultValue?: TimeRangeValue;
    modelValue?: TimeRangeValue;
    onBlur?: (context: {
        value: TimeRangeValue;
        e?: FocusEvent;
        position?: TimeRangePickerPartial;
    }) => void;
    onChange?: (value: TimeRangeValue) => void;
    onFocus?: (context?: {
        value: TimeRangeValue;
        e?: FocusEvent;
        position?: TimeRangePickerPartial;
    }) => void;
    onInput?: (context: {
        value: TimeRangeValue;
        e?: InputEvent;
        position?: TimeRangePickerPartial;
    }) => void;
    onPick?: (value: TimeRangeValue, context: {
        e: MouseEvent;
        position?: TimeRangePickerPartial;
    }) => void;
}
export interface PresetTime {
    [presetName: string]: TimePickerValue | (() => TimePickerValue);
}
export type TimePickerValue = string;
export type TimeRangePickerPartial = 'start' | 'end';
export interface PresetTimeRange {
    [presetRageName: string]: TimeRangeValue | (() => TimeRangeValue);
}
export type TimeRangeValue = Array<string>;
