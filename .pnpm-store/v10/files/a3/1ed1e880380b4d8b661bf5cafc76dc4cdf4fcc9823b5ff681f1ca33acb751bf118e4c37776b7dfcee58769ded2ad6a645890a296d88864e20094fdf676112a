import dayjs from 'dayjs';
import { SizeEnum } from '../common';
import { CalendarValue, CalendarCell, WeekDay, TdCalendarProps } from './type';
export interface CalendarData {
    curDate: dayjs.Dayjs;
    curSelectedYear: number;
    curSelectedMonth: number;
    curSelectedMode: string;
    isShowWeekend: boolean;
    controlSize: string;
}
export interface CalendarRange {
    from: CalendarValue;
    to: CalendarValue;
}
export interface YearMonthOption {
    value: number;
    label: string;
    disabled?: boolean;
}
export interface CellColHeader {
    num: WeekDay;
    display: string;
}
export interface ModeOption {
    value: TdCalendarProps['mode'];
    label: string;
}
export interface CellEventOption {
    cell: CalendarCell;
    e: MouseEvent;
}
export interface CalendarState {
    realFirstDayOfWeek: number;
    curDate?: dayjs.Dayjs | null;
    curDateList?: dayjs.Dayjs[];
    curSelectedYear: number | null;
    curSelectedMonth: number | null;
    curSelectedMode: string | null;
    isShowWeekend: boolean;
    controlSize: SizeEnum;
}
export type CellClickEventCallback = (options: CellEventOption) => void;
