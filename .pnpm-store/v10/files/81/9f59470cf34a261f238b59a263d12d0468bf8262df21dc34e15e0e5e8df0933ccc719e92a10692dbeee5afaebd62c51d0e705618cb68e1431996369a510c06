import dayjs from 'dayjs';
export declare function firstUpperCase(str: string): string;
export declare function isSame(date1: Date, date2: Date, type?: string, dayjsLocale?: string): boolean;
export declare function outOfRanges(d: Date, min: any, max: any): boolean;
export declare function getToday(): Date;
export declare function getDateObj(date: Date): {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    meridiem: string;
};
export declare function setDateTime(date: Date, hours: number, minutes: number, seconds: number, milliseconds?: number): Date;
export declare function subtractMonth(date: Date, num: number): Date;
export declare function addMonth(date: Date, num: number): Date;
export type DateValue = string | Date | number;
export interface DisableDateObj {
    from?: string;
    to?: string;
    before?: string;
    after?: string;
}
export type DisableDate = Array<DateValue> | DisableDateObj | ((date: DateValue) => boolean);
export interface OptionsType {
    firstDayOfWeek: number;
    disableDate: DisableDate;
    minDate: Date;
    maxDate: Date;
    showWeekOfYear?: Boolean;
    dayjsLocale?: string;
    monthLocal?: string[];
    quarterLocal?: string[];
    cancelRangeSelectLimit?: boolean;
}
export declare function getWeeks({ year, month }: {
    year: number;
    month: number;
}, { firstDayOfWeek, showWeekOfYear, disableDate, minDate, maxDate, dayjsLocale, cancelRangeSelectLimit, }: OptionsType): ({
    text: number;
    active: boolean;
    value: Date;
    disabled: boolean;
    now: boolean;
    firstDayOfMonth: boolean;
    lastDayOfMonth: boolean;
    type: string;
    dayjsObj: dayjs.Dayjs;
    additional?: undefined;
} | {
    text: string;
    active: boolean;
    value: Date;
    disabled: boolean;
    additional: boolean;
    type: string;
    dayjsObj: dayjs.Dayjs;
    now?: undefined;
    firstDayOfMonth?: undefined;
    lastDayOfMonth?: undefined;
} | {
    text: number;
    active: boolean;
    value: Date;
    disabled: boolean;
    additional: boolean;
    type: string;
    dayjsObj: dayjs.Dayjs;
    now?: undefined;
    firstDayOfMonth?: undefined;
    lastDayOfMonth?: undefined;
})[][];
export declare function getQuarters(year: number, { disableDate, minDate, maxDate, quarterLocal, dayjsLocale, cancelRangeSelectLimit, }: OptionsType): {
    value: Date;
    now: boolean;
    disabled: boolean;
    active: boolean;
    text: string;
    dayjsObj: dayjs.Dayjs;
}[][];
export declare function getYears(year: number, { disableDate, minDate, maxDate, dayjsLocale, cancelRangeSelectLimit }: OptionsType): {
    value: Date;
    now: boolean;
    disabled: boolean;
    active: boolean;
    text: string;
    dayjsObj: dayjs.Dayjs;
}[][];
export declare function getMonths(year: number, params: OptionsType): {
    value: Date;
    now: boolean;
    disabled: boolean;
    active: boolean;
    text: string;
    dayjsObj: dayjs.Dayjs;
}[][];
export interface DateTime {
    additional: boolean;
    active: boolean;
    highlight: boolean;
    hoverHighlight: boolean;
    startOfRange: boolean;
    endOfRange: boolean;
    hoverStartOfRange: boolean;
    hoverEndOfRange: boolean;
    value: Date;
}
interface FlagActiveOptions {
    start: Date;
    end: Date;
    hoverStart: Date;
    hoverEnd: Date;
    type: any;
    isRange: boolean;
    value: DateValue | DateValue[];
    multiple: boolean;
}
export declare function flagActive(data: any[], { ...args }: FlagActiveOptions): any[];
export declare function extractTimeObj(timeFormat?: string): {
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    meridiem: string;
};
export declare function isEnabledDate({ value, disableDate, mode, format, }: {
    value: Date;
    mode: 'year' | 'month' | 'date' | 'quarter' | 'week';
    format: string;
    disableDate: any;
}): boolean;
export declare function covertToDate(value: string, valueType: string): Date;
export {};
