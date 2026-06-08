import dayjs from 'dayjs';
type DateValue = string | number | Date;
export declare const TIME_FORMAT = "HH:mm:ss";
export declare function extractTimeFormat(dateFormat?: string): string;
export declare function parseToDayjs(value: string | Date | number, format: string, timeOfDay?: string, dayjsLocale?: string, defaultTime?: string): dayjs.Dayjs;
export declare function isValidDate(value: DateValue | DateValue[], format: string): boolean;
export declare function formatDate(newDate: DateValue | DateValue[], { format, targetFormat, dayjsLocale, autoSwap, defaultTime, }: {
    format: string;
    dayjsLocale?: string;
    targetFormat?: string;
    autoSwap?: boolean;
    defaultTime?: string | string[];
}): string | number | string[] | number[] | Date | Date[];
export declare function calcFormatTime(time: string, timeFormat: string): string;
export declare function formatTime(value: any, format: string, timeFormat: string, defaultTime: string | string[]): any;
export declare function getDefaultFormat({ mode, format, valueType, enableTimePicker, }: {
    mode?: string;
    format?: string;
    valueType?: string;
    enableTimePicker?: boolean;
}): {
    format: string;
    valueType: string;
    timeFormat: string;
} | {
    format?: undefined;
    valueType?: undefined;
    timeFormat?: undefined;
};
export declare function initYearMonthTime({ value, mode, format, timeFormat, enableTimePicker, }: {
    value: Array<any>;
    mode: string;
    format: string;
    timeFormat?: string;
    enableTimePicker?: boolean;
}): {
    year: number[];
    month: number[];
    time: string[];
};
export {};
