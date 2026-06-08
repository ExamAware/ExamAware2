export interface BaseTableCol<T> {
    children?: T[];
    colKey?: string;
    resize?: {
        [attr: string]: any;
    };
    width?: number | string;
    minWidth?: number | string;
}
export interface ThMap {
    [colKey: string]: number;
}
export interface PlainObject {
    [key: string]: any;
}
export interface TableRowData {
    [key: string]: any;
    children?: TableRowData[];
}
export type PrimaryTableCol = PlainObject;
export type TableRowValue = string | number;
export interface TableRowState<T extends TableRowData = TableRowData> {
    disabled?: boolean;
    expandChildrenLength?: number;
    expanded: boolean;
    id: string | number;
    level?: number;
    parent?: TableRowState<T>;
    path?: TableRowState<T>[];
    row: T;
    rowIndex: number;
}
