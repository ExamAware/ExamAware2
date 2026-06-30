import dayjs from 'dayjs';
import { TdTimePickerProps, TdTimeRangePickerProps } from './type';
export type TimePickerProps = TdTimePickerProps;
export type TimeRangePickerProps = TdTimeRangePickerProps;
export * from './type';
export type TimeInputType = 'hour' | 'minute' | 'second' | 'meridiem';
export declare enum KeyboardDirection {
    left = 37,
    up = 38,
    right = 39,
    down = 40
}
export declare enum EPickerCols {
    hour = "hour",
    minute = "minute",
    second = "second",
    meridiem = "meridiem"
}
export interface InputTime {
    hour: number | string;
    minute?: number | string;
    second?: number | string;
    meridiem: 'AM' | 'PM' | string;
}
interface TimePickerSetInputValue {
    (val: dayjs.Dayjs | undefined): InputTime | undefined;
}
interface TimePickerDayjs2InputTime {
    (val: dayjs.Dayjs): InputTime;
}
export interface TimePickerInstance {
    setInputValue: TimePickerSetInputValue;
    dayjs2InputTime: TimePickerDayjs2InputTime;
    formatString: string;
    formatedValue: string;
}
export interface PickerData {
    hour: number | string;
    minute?: number | string;
    second?: number | string;
    meridiem?: 'AM' | 'PM';
}
export interface InputEvent extends Event {
    data?: string;
    target: HTMLInputElement;
}
export interface TimeInputEvent {
    type: 'hour' | 'minute' | 'second';
    value: number;
    index?: number;
}
