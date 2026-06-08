import { ButtonProps } from '../button';
import { RadioGroupProps } from '../radio';
import { CheckTagProps } from '../tag';
import { SelectProps } from '../select';
import { TNode } from '../common';
export interface TdCalendarProps {
    cell?: string | TNode<CalendarCell>;
    cellAppend?: string | TNode<CalendarCell>;
    controllerConfig?: boolean | CalendarController;
    fillWithZero?: boolean;
    firstDayOfWeek?: number;
    format?: string;
    head?: string | TNode<ControllerOptions>;
    isShowWeekendDefault?: boolean;
    mode?: 'month' | 'year';
    month?: string | number;
    multiple?: boolean;
    preventCellContextmenu?: boolean;
    range?: Array<CalendarValue>;
    theme?: 'full' | 'card';
    value?: CalendarValue | CalendarValue[];
    week?: Array<string> | TNode<CalendarWeek>;
    year?: string | number;
    onCellClick?: (options: {
        cell: CalendarCell;
        e: MouseEvent;
    }) => void;
    onCellDoubleClick?: (options: {
        cell: CalendarCell;
        e: MouseEvent;
    }) => void;
    onCellRightClick?: (options: {
        cell: CalendarCell;
        e: MouseEvent;
    }) => void;
    onControllerChange?: (options: ControllerOptions) => void;
    onMonthChange?: (options: {
        month: string;
        year: string;
    }) => void;
}
export interface CalendarController {
    current?: {
        visible?: boolean;
        currentDayButtonProps?: ButtonProps;
        currentMonthButtonProps?: ButtonProps;
    };
    disabled?: boolean;
    mode?: {
        visible?: boolean;
        radioGroupProps?: RadioGroupProps;
    };
    month?: {
        visible?: boolean;
        selectProps?: SelectProps;
    };
    weekend?: {
        visible?: boolean;
        showWeekendButtonProps?: CheckTagProps;
        hideWeekendButtonProps?: CheckTagProps;
    };
    year?: {
        visible?: boolean;
        selectProps?: SelectProps;
    };
}
export interface CalendarCell extends ControllerOptions {
    belongTo?: number;
    date?: Date;
    day?: number;
    formattedDate?: string;
    isCurrent?: boolean;
    weekOrder?: number;
}
export interface CalendarInstanceFunctions {
    toCurrent: () => void;
}
export type CalendarValue = string | Date;
export interface CalendarWeek {
    day: WeekDay;
}
export type WeekDay = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export interface ControllerOptions {
    filterDate: Date;
    formattedFilterDate: string;
    mode: string;
    isShowWeekend: boolean;
}
