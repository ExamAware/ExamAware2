import { InputProps } from '../input';
import { PopupProps } from '../popup';
import { SelectInputProps } from '../select-input';
import { TimePickerProps } from '../time-picker';
import { Dayjs } from 'dayjs';
import { RangeInputProps } from '../range-input';
import { TNode, SizeEnum } from '../common';
export interface TdDatePickerProps {
    allowInput?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    defaultTime?: string;
    disableDate?: DisableDate;
    disabled?: boolean;
    enableTimePicker?: boolean;
    firstDayOfWeek?: number;
    format?: string;
    inputProps?: InputProps;
    label?: string | TNode;
    mode?: 'year' | 'quarter' | 'month' | 'week' | 'date';
    multiple?: boolean;
    needConfirm?: boolean;
    placeholder?: string;
    popupProps?: PopupProps;
    prefixIcon?: TNode;
    presets?: PresetDate;
    presetsPlacement?: 'left' | 'top' | 'right' | 'bottom';
    readonly?: boolean;
    selectInputProps?: SelectInputProps;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffixIcon?: TNode;
    timePickerProps?: TimePickerProps;
    tips?: string | TNode;
    value?: DateValue | DateMultipleValue;
    defaultValue?: DateValue | DateMultipleValue;
    modelValue?: DateValue | DateMultipleValue;
    valueDisplay?: string | TNode<{
        value: DateValue;
        displayValue?: DateValue;
    }>;
    valueType?: DatePickerValueType;
    onBlur?: (context: {
        value: DateValue | DateMultipleValue;
        e: FocusEvent;
    }) => void;
    onChange?: (value: DateValue | DateMultipleValue, context: {
        dayjsValue?: Dayjs;
        trigger?: DatePickerTriggerSource;
    }) => void;
    onConfirm?: (context: {
        date: Date;
        e: MouseEvent;
    }) => void;
    onFocus?: (context: {
        value: DateValue | DateMultipleValue;
        e: FocusEvent;
    }) => void;
    onPick?: (value: DateValue) => void;
    onPresetClick?: (context: {
        preset: PresetDate;
        e: MouseEvent;
    }) => void;
}
export interface TdDateRangePickerProps {
    allowInput?: boolean;
    borderless?: boolean;
    cancelRangeSelectLimit?: boolean;
    clearable?: boolean;
    defaultTime?: string[];
    disableDate?: DisableRangeDate;
    disableTime?: (times: Array<Date | null>, context: {
        partial: DateRangePickerPartial;
    }) => Partial<{
        hour: Array<number>;
        minute: Array<number>;
        second: Array<number>;
    }>;
    disabled?: boolean;
    enableTimePicker?: boolean;
    firstDayOfWeek?: number;
    format?: string;
    label?: string | TNode;
    mode?: 'year' | 'quarter' | 'month' | 'week' | 'date';
    needConfirm?: boolean;
    panelPreselection?: boolean;
    placeholder?: string | Array<string>;
    popupProps?: PopupProps;
    prefixIcon?: TNode;
    presets?: PresetRange;
    presetsPlacement?: 'left' | 'top' | 'right' | 'bottom';
    rangeInputProps?: RangeInputProps;
    readonly?: boolean;
    separator?: string;
    size?: SizeEnum;
    status?: 'default' | 'success' | 'warning' | 'error';
    suffixIcon?: TNode;
    timePickerProps?: TimePickerProps;
    tips?: string | TNode;
    value?: DateRangeValue;
    defaultValue?: DateRangeValue;
    modelValue?: DateRangeValue;
    valueType?: 'time-stamp' | 'Date' | 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm:ss:SSS';
    onBlur?: (context: {
        value: DateRangeValue;
        partial: DateRangePickerPartial;
        e: FocusEvent;
    }) => void;
    onChange?: (value: DateRangeValue, context: {
        dayjsValue?: Dayjs[];
        trigger?: DatePickerTriggerSource;
    }) => void;
    onConfirm?: (context: {
        date: Date[];
        e: MouseEvent;
        partial: DateRangePickerPartial;
    }) => void;
    onFocus?: (context: {
        value: DateRangeValue;
        partial: DateRangePickerPartial;
        e: FocusEvent;
    }) => void;
    onInput?: (context: {
        input: string;
        value: DateRangeValue;
        partial: DateRangePickerPartial;
        e: InputEvent;
    }) => void;
    onPick?: (value: DateValue, context: PickContext) => void;
    onPresetClick?: (context: {
        preset: PresetDate;
        e: MouseEvent;
    }) => void;
}
export interface TdDatePickerPanelProps extends Pick<TdDatePickerProps, 'value' | 'defaultValue' | 'disableDate' | 'enableTimePicker' | 'firstDayOfWeek' | 'format' | 'mode' | 'presets' | 'presetsPlacement' | 'timePickerProps' | 'needConfirm'> {
    defaultTime?: string;
    onCellClick?: (context: {
        date: Date;
        e: MouseEvent;
    }) => void;
    onChange?: (value: DateValue, context: {
        dayjsValue?: Dayjs;
        e?: MouseEvent;
        trigger?: DatePickerTriggerSource;
    }) => void;
    onConfirm?: (context: {
        date: Date;
        e: MouseEvent;
    }) => void;
    onMonthChange?: (context: {
        month: number;
        date: Date;
        e?: MouseEvent;
        trigger: DatePickerMonthChangeTrigger;
    }) => void;
    onPanelClick?: (context: {
        e: MouseEvent;
    }) => void;
    onPresetClick?: (context: {
        preset: PresetDate;
        e: MouseEvent;
    }) => void;
    onTimeChange?: (context: {
        time: string;
        date: Date;
        trigger: DatePickerTimeChangeTrigger;
        e?: MouseEvent;
    }) => void;
    onYearChange?: (context: {
        year: number;
        date: Date;
        trigger: DatePickerYearChangeTrigger;
        e?: MouseEvent;
    }) => void;
}
export interface TdDateRangePickerPanelProps extends Pick<TdDateRangePickerProps, 'value' | 'defaultValue' | 'disableDate' | 'enableTimePicker' | 'firstDayOfWeek' | 'format' | 'mode' | 'presets' | 'presetsPlacement' | 'panelPreselection' | 'timePickerProps'> {
    defaultTime?: string[];
    onCellClick?: (context: {
        date: Date[];
        partial: DateRangePickerPartial;
        e: MouseEvent;
    }) => void;
    onChange?: (value: DateRangeValue, context: {
        dayjsValue?: Dayjs[];
        partial: DateRangePickerPartial;
        e?: MouseEvent;
        trigger?: DatePickerTriggerSource;
    }) => void;
    onConfirm?: (context: {
        date: Date[];
        e: MouseEvent;
    }) => void;
    onMonthChange?: (context: {
        month: number;
        date: Date[];
        partial: DateRangePickerPartial;
        e?: MouseEvent;
        trigger: DatePickerMonthChangeTrigger;
    }) => void;
    onPanelClick?: (context: {
        e: MouseEvent;
    }) => void;
    onPresetClick?: (context: {
        preset: PresetDate;
        e: MouseEvent;
    }) => void;
    onTimeChange?: (context: {
        time: string;
        date: Date[];
        partial: DateRangePickerPartial;
        trigger: DatePickerTimeChangeTrigger;
        e?: MouseEvent;
    }) => void;
    onYearChange?: (context: {
        year: number;
        date: Date[];
        partial: DateRangePickerPartial;
        trigger: DatePickerYearChangeTrigger;
        e?: MouseEvent;
    }) => void;
}
export type DisableDate = Array<DateValue> | DisableDateObj | ((date: DateValue) => boolean);
export interface DisableDateObj {
    from?: string;
    to?: string;
    before?: string;
    after?: string;
}
export interface PresetDate {
    [name: string]: DateValue | (() => DateValue);
}
export type DateValue = string | number | Date;
export type DateMultipleValue = Array<DateValue>;
export type DatePickerValueType = 'time-stamp' | 'Date' | 'YYYY' | 'YYYY-MM' | 'YYYY-MM-DD' | 'YYYY-MM-DD HH' | 'YYYY-MM-DD HH:mm' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm:ss:SSS';
export type ValueTypeEnum = DatePickerValueType;
export type DatePickerTriggerSource = 'confirm' | 'pick' | 'enter' | 'preset' | 'clear' | 'tag-remove';
export type DisableRangeDate = Array<DateValue> | DisableDateObj | ((context: {
    date: DateRangeValue;
    partial: DateRangePickerPartial;
}) => boolean);
export type DateRangePickerPartial = 'start' | 'end';
export interface PresetRange {
    [range: string]: DateRange | (() => DateRange);
}
export type DateRange = [DateValue, DateValue];
export type DateRangeValue = Array<DateValue>;
export interface PickContext {
    e: MouseEvent;
    partial: DateRangePickerPartial;
}
export type DatePickerMonthChangeTrigger = 'month-select' | 'month-arrow-next' | 'month-arrow-previous' | 'today';
export type DatePickerTimeChangeTrigger = 'time-hour' | 'time-minute' | 'time-second';
export type DatePickerYearChangeTrigger = 'year-select' | 'year-arrow-next' | 'year-arrow-previous' | 'today';
