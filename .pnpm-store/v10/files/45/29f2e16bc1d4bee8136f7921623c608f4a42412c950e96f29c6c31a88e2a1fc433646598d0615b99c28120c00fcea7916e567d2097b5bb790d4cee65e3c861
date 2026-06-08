import { BaseTableCol } from './types';
export declare function filterDataByIds(data?: Array<object>, ids?: Array<string | number>, byId?: string): Array<object>;
export declare enum SCROLL_DIRECTION {
    X = "x",
    Y = "y",
    UNKNOWN = "unknown"
}
export declare const getScrollDirection: (scrollLeft: number, scrollTop: number) => SCROLL_DIRECTION;
export declare function isRowSelectedDisabled(selectColumn: {
    [key: string]: any;
}, row: Record<string, any>, rowIndex: number): boolean;
export declare function getColWidthAttr<T extends BaseTableCol<T>>(col: T, attrKey: 'width' | 'minWidth'): number;
export declare function getEditableKeysMap(keys: Array<string | number>, list: any[], rowKey: string): {
    [key: string]: boolean;
    [key: number]: boolean;
};
export declare function getColumnDataByKey(columns: any[], colKey: string): any;
export declare function getColumnIndexByKey(columns: any[], colKey: string): number;
export declare function getColumnsResetValue(columns: any[], resetValue?: {
    [key: string]: any;
}): {
    [key: string]: any;
};
