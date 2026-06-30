import { TNodeReturnValue } from '../common';
import { TdBaseTableProps, TableExpandedRowParams, TableRowData, TdPrimaryTableProps, TdEnhancedTableProps, RowspanColspan, BaseTableCol, PrimaryTableInstanceFunctions, PrimaryTableCol, BaseTableInstanceFunctions } from './type';
export interface BaseTableProps extends TdBaseTableProps {
    renderExpandedRow?: (params: TableExpandedRowParams<TableRowData>) => TNodeReturnValue;
    onLeafColumnsChange?: (columns: BaseTableColumns) => void;
    onShowElementChange?: (show: boolean) => void;
    thDraggable?: boolean;
}
export type PrimaryTableProps<T extends TableRowData = TableRowData> = TdPrimaryTableProps<T>;
export type EnhancedTableProps<T extends TableRowData = TableRowData> = TdEnhancedTableProps<T>;
export type TableProps<T extends TableRowData = TableRowData> = PrimaryTableProps<T>;
export type TableCol<T extends TableRowData = TableRowData> = PrimaryTableCol<T>;
export type TableInstanceFunctions<T extends TableRowData = TableRowData> = PrimaryTableInstanceFunctions<T> & BaseTableInstanceFunctions<T>;
export type ThRowspanAndColspan = Map<any, RowspanColspan>;
export type BaseTableColumns = BaseTableCol<TableRowData>[];
export interface ColumnStickyLeftAndRight {
    left: number[];
    right: number[];
    top: number[];
    bottom?: number[];
}
export interface TableColFixedClasses {
    left: string;
    right: string;
    lastLeft: string;
    firstRight: string;
    leftShadow: string;
    rightShadow: string;
}
export interface TableRowFixedClasses {
    top: string;
    bottom: string;
    firstBottom: string;
    withoutBorderBottom: string;
}
export interface FixedColumnInfo {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    parent?: FixedColumnInfo;
    children?: string[];
    width?: number;
    height?: number;
    col?: BaseTableCol;
    index?: number;
    lastLeftFixedCol?: boolean;
    firstRightFixedCol?: boolean;
}
export type RowAndColFixedPosition = Map<string | number, FixedColumnInfo>;
export type TableTreeExpandType = 'expand-all' | 'fold-all' | 'user-reaction-change' | 'props-change';
export interface SimplePageInfo {
    current?: number;
    defaultCurrent?: number;
    pageSize?: number;
    defaultPageSize?: number;
}
