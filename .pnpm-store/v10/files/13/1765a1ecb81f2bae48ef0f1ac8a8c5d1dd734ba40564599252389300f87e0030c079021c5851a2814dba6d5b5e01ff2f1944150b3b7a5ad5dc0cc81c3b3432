import { PropType, SetupContext } from 'vue';
import { BaseTableCellParams, TableRowData, RowspanColspan, TdPrimaryTableProps, TdBaseTableProps } from '../type';
import { RowAndColFixedPosition } from '../types';
import { SkipSpansValue } from '../hooks/useRowspanAndColspan';
import { PaginationProps } from '../../pagination';
import type { VirtualScrollConfig } from '@tdesign/shared-hooks';
import { AttachNode } from '../../common';
export interface RenderTdExtra {
    rowAndColFixedPosition: RowAndColFixedPosition;
    columnLength: number;
    dataLength: number;
    cellSpans: RowspanColspan;
    cellEmptyContent: TdBaseTableProps['cellEmptyContent'];
}
export interface RenderEllipsisCellParams {
    cellNode: any;
}
export type TrCommonProps = Pick<TdPrimaryTableProps, TrPropsKeys>;
export declare const TABLE_PROPS: readonly ["rowKey", "rowClassName", "columns", "fixedRows", "footData", "rowAttributes", "rowspanAndColspan", "scroll", "cellEmptyContent", "pagination", "attach", "onCellClick", "onRowClick", "onRowDblclick", "onRowMouseover", "onRowMousedown", "onRowMouseenter", "onRowMouseleave", "onRowMouseup"];
export type TrPropsKeys = typeof TABLE_PROPS[number];
export interface TrProps extends TrCommonProps {
    rowKey: string;
    row: TableRowData;
    rowIndex: number;
    ellipsisOverlayClassName: string;
    classPrefix: string;
    dataLength: number;
    rowAndColFixedPosition?: RowAndColFixedPosition;
    skipSpansMap?: Map<string, SkipSpansValue>;
    tableElm?: any;
    tableContentElm?: any;
    cellEmptyContent: TdBaseTableProps['cellEmptyContent'];
    virtualConfig: VirtualScrollConfig;
    attach?: AttachNode;
    active?: boolean;
    isHover?: boolean;
}
export declare const ROW_LISTENERS: readonly ["click", "dblclick", "mouseover", "mousedown", "mouseenter", "mouseleave", "mouseup"];
export declare function renderCell(params: BaseTableCellParams<TableRowData>, slots: SetupContext['slots'], extra?: {
    cellEmptyContent?: TdBaseTableProps['cellEmptyContent'];
    pagination?: PaginationProps;
}): any;
declare const _default: import("vue").DefineComponent<{
    tableElm: {};
    tableContentElm: {};
    scroll: {
        type: PropType<TdBaseTableProps["scroll"]>;
    };
    pagination: {
        type: PropType<TdBaseTableProps["pagination"]>;
    };
    attach: {
        type: PropType<TdBaseTableProps["attach"]>;
    };
    columns: {
        type: PropType<TdBaseTableProps["columns"]>;
        default: () => TdBaseTableProps["columns"];
    };
    onCellClick: PropType<TdBaseTableProps["onCellClick"]>;
    fixedRows: {
        type: PropType<TdBaseTableProps["fixedRows"]>;
    };
    cellEmptyContent: {
        type: PropType<TdBaseTableProps["cellEmptyContent"]>;
    };
    footData: {
        type: PropType<TdBaseTableProps["footData"]>;
        default: () => TdBaseTableProps["footData"];
    };
    rowAttributes: {
        type: PropType<TdBaseTableProps["rowAttributes"]>;
    };
    rowClassName: {
        type: PropType<TdBaseTableProps["rowClassName"]>;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    rowspanAndColspan: {
        type: PropType<TdBaseTableProps["rowspanAndColspan"]>;
    };
    onRowClick: PropType<TdBaseTableProps["onRowClick"]>;
    onRowDblclick: PropType<TdBaseTableProps["onRowDblclick"]>;
    onRowMousedown: PropType<TdBaseTableProps["onRowMousedown"]>;
    onRowMouseenter: PropType<TdBaseTableProps["onRowMouseenter"]>;
    onRowMouseleave: PropType<TdBaseTableProps["onRowMouseleave"]>;
    onRowMouseover: PropType<TdBaseTableProps["onRowMouseover"]>;
    onRowMouseup: PropType<TdBaseTableProps["onRowMouseup"]>;
    row: PropType<TableRowData>;
    rowIndex: NumberConstructor;
    dataLength: NumberConstructor;
    ellipsisOverlayClassName: StringConstructor;
    classPrefix: StringConstructor;
    rowAndColFixedPosition: PropType<RowAndColFixedPosition>;
    skipSpansMap: PropType<TrProps["skipSpansMap"]>;
    virtualConfig: PropType<TrProps["virtualConfig"]>;
    active: BooleanConstructor;
    isHover: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "row-mounted", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tableElm: {};
    tableContentElm: {};
    scroll: {
        type: PropType<TdBaseTableProps["scroll"]>;
    };
    pagination: {
        type: PropType<TdBaseTableProps["pagination"]>;
    };
    attach: {
        type: PropType<TdBaseTableProps["attach"]>;
    };
    columns: {
        type: PropType<TdBaseTableProps["columns"]>;
        default: () => TdBaseTableProps["columns"];
    };
    onCellClick: PropType<TdBaseTableProps["onCellClick"]>;
    fixedRows: {
        type: PropType<TdBaseTableProps["fixedRows"]>;
    };
    cellEmptyContent: {
        type: PropType<TdBaseTableProps["cellEmptyContent"]>;
    };
    footData: {
        type: PropType<TdBaseTableProps["footData"]>;
        default: () => TdBaseTableProps["footData"];
    };
    rowAttributes: {
        type: PropType<TdBaseTableProps["rowAttributes"]>;
    };
    rowClassName: {
        type: PropType<TdBaseTableProps["rowClassName"]>;
    };
    rowKey: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    rowspanAndColspan: {
        type: PropType<TdBaseTableProps["rowspanAndColspan"]>;
    };
    onRowClick: PropType<TdBaseTableProps["onRowClick"]>;
    onRowDblclick: PropType<TdBaseTableProps["onRowDblclick"]>;
    onRowMousedown: PropType<TdBaseTableProps["onRowMousedown"]>;
    onRowMouseenter: PropType<TdBaseTableProps["onRowMouseenter"]>;
    onRowMouseleave: PropType<TdBaseTableProps["onRowMouseleave"]>;
    onRowMouseover: PropType<TdBaseTableProps["onRowMouseover"]>;
    onRowMouseup: PropType<TdBaseTableProps["onRowMouseup"]>;
    row: PropType<TableRowData>;
    rowIndex: NumberConstructor;
    dataLength: NumberConstructor;
    ellipsisOverlayClassName: StringConstructor;
    classPrefix: StringConstructor;
    rowAndColFixedPosition: PropType<RowAndColFixedPosition>;
    skipSpansMap: PropType<TrProps["skipSpansMap"]>;
    virtualConfig: PropType<TrProps["virtualConfig"]>;
    active: BooleanConstructor;
    isHover: BooleanConstructor;
}>>, {
    active: boolean;
    columns: import("..").BaseTableCol<TableRowData>[];
    isHover: boolean;
    footData: TableRowData[];
    rowKey: string;
}, {}>;
export default _default;
