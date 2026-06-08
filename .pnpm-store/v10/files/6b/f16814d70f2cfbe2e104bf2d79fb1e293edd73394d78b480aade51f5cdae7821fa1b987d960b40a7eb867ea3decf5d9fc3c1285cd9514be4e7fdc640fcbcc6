import { PropType } from 'vue';
import { TNodeReturnValue } from '../../common';
import { BaseTableProps, RowAndColFixedPosition } from '../types';
import { TdBaseTableProps } from '../type';
import type { VirtualScrollConfig } from '@tdesign/shared-hooks';
export declare const ROW_AND_TD_LISTENERS: string[];
export interface TableBodyProps extends BaseTableProps {
    classPrefix: string;
    ellipsisOverlayClassName: string;
    rowAndColFixedPosition: RowAndColFixedPosition;
    showColumnShadow: {
        left: boolean;
        right: boolean;
    };
    tableElm: any;
    tableWidth: number;
    isWidthOverflow: boolean;
    virtualConfig: VirtualScrollConfig;
    tableContentElm: any;
    cellEmptyContent: TdBaseTableProps['cellEmptyContent'];
    handleRowMounted: (rowData: any) => void;
}
export declare const extendTableProps: string[];
declare const _default: import("vue").DefineComponent<{
    activeRowKeys?: {
        type: PropType<TdBaseTableProps["activeRowKeys"]>;
        default: TdBaseTableProps["activeRowKeys"];
    };
    defaultActiveRowKeys?: {
        type: PropType<TdBaseTableProps["defaultActiveRowKeys"]>;
        default: () => TdBaseTableProps["defaultActiveRowKeys"];
    };
    activeRowType?: {
        type: PropType<TdBaseTableProps["activeRowType"]>;
        default: TdBaseTableProps["activeRowType"];
    };
    allowResizeColumnWidth?: {
        type: BooleanConstructor;
        default: any;
    };
    attach?: {
        type: PropType<TdBaseTableProps["attach"]>;
    };
    bordered?: BooleanConstructor;
    bottomContent?: {
        type: PropType<TdBaseTableProps["bottomContent"]>;
    };
    cellEmptyContent?: {
        type: PropType<TdBaseTableProps["cellEmptyContent"]>;
    };
    columns: PropType<import("..").BaseTableCol<import("..").TableRowData>[]> | {
        type: PropType<TdBaseTableProps["columns"]>;
        default: () => TdBaseTableProps["columns"];
    };
    data: PropType<import("..").TableRowData[]> | {
        type: PropType<TdBaseTableProps["data"]>;
        default: () => TdBaseTableProps["data"];
    };
    disableDataPage?: BooleanConstructor;
    disableSpaceInactiveRow?: {
        type: BooleanConstructor;
        default: any;
    };
    empty?: {
        type: PropType<TdBaseTableProps["empty"]>;
        default: TdBaseTableProps["empty"];
    };
    firstFullRow: PropType<string | ((h: typeof import("vue").h) => TNodeReturnValue)> | {
        type: PropType<TdBaseTableProps["firstFullRow"]>;
    };
    fixedRows?: {
        type: PropType<TdBaseTableProps["fixedRows"]>;
    };
    footData?: {
        type: PropType<TdBaseTableProps["footData"]>;
        default: () => TdBaseTableProps["footData"];
    };
    footerAffixProps?: {
        type: PropType<TdBaseTableProps["footerAffixProps"]>;
    };
    footerAffixedBottom?: {
        type: PropType<TdBaseTableProps["footerAffixedBottom"]>;
        default: TdBaseTableProps["footerAffixedBottom"];
    };
    footerSummary?: {
        type: PropType<TdBaseTableProps["footerSummary"]>;
    };
    headerAffixProps?: {
        type: PropType<TdBaseTableProps["headerAffixProps"]>;
    };
    headerAffixedTop?: {
        type: PropType<TdBaseTableProps["headerAffixedTop"]>;
        default: TdBaseTableProps["headerAffixedTop"];
    };
    height?: {
        type: PropType<TdBaseTableProps["height"]>;
    };
    horizontalScrollAffixedBottom?: {
        type: PropType<TdBaseTableProps["horizontalScrollAffixedBottom"]>;
    };
    hover?: BooleanConstructor;
    keyboardRowHover?: {
        type: BooleanConstructor;
        default: boolean;
    };
    lastFullRow: PropType<string | ((h: typeof import("vue").h) => TNodeReturnValue)> | {
        type: PropType<TdBaseTableProps["lastFullRow"]>;
    };
    lazyLoad?: BooleanConstructor;
    loading?: {
        type: PropType<TdBaseTableProps["loading"]>;
        default: TdBaseTableProps["loading"];
    };
    loadingProps?: {
        type: PropType<TdBaseTableProps["loadingProps"]>;
    };
    locale?: {
        type: PropType<TdBaseTableProps["locale"]>;
    };
    maxHeight?: {
        type: PropType<TdBaseTableProps["maxHeight"]>;
    };
    pagination?: {
        type: PropType<TdBaseTableProps["pagination"]>;
    };
    paginationAffixedBottom?: {
        type: PropType<TdBaseTableProps["paginationAffixedBottom"]>;
    };
    resizable?: BooleanConstructor;
    rowAttributes?: {
        type: PropType<TdBaseTableProps["rowAttributes"]>;
    };
    rowClassName?: {
        type: PropType<TdBaseTableProps["rowClassName"]>;
    };
    rowKey?: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    rowspanAndColspan?: {
        type: PropType<TdBaseTableProps["rowspanAndColspan"]>;
    };
    rowspanAndColspanInFooter?: {
        type: PropType<TdBaseTableProps["rowspanAndColspanInFooter"]>;
    };
    scroll?: {
        type: PropType<TdBaseTableProps["scroll"]>;
    };
    showHeader?: {
        type: BooleanConstructor;
        default: boolean;
    };
    size?: {
        type: PropType<TdBaseTableProps["size"]>;
        validator(val: TdBaseTableProps["size"]): boolean;
    };
    stripe?: BooleanConstructor;
    tableContentWidth?: {
        type: StringConstructor;
        default: string;
    };
    tableLayout?: {
        type: PropType<TdBaseTableProps["tableLayout"]>;
        default: TdBaseTableProps["tableLayout"];
        validator(val: TdBaseTableProps["tableLayout"]): boolean;
    };
    topContent?: {
        type: PropType<TdBaseTableProps["topContent"]>;
    };
    verticalAlign?: {
        type: PropType<TdBaseTableProps["verticalAlign"]>;
        default: TdBaseTableProps["verticalAlign"];
        validator(val: TdBaseTableProps["verticalAlign"]): boolean;
    };
    onActiveChange?: PropType<TdBaseTableProps["onActiveChange"]>;
    onActiveRowAction?: PropType<TdBaseTableProps["onActiveRowAction"]>;
    onCellClick?: PropType<TdBaseTableProps["onCellClick"]>;
    onColumnResizeChange?: PropType<TdBaseTableProps["onColumnResizeChange"]>;
    onPageChange?: PropType<TdBaseTableProps["onPageChange"]>;
    onRowClick?: PropType<TdBaseTableProps["onRowClick"]>;
    onRowDblclick?: PropType<TdBaseTableProps["onRowDblclick"]>;
    onRowMousedown?: PropType<TdBaseTableProps["onRowMousedown"]>;
    onRowMouseenter?: PropType<TdBaseTableProps["onRowMouseenter"]>;
    onRowMouseleave?: PropType<TdBaseTableProps["onRowMouseleave"]>;
    onRowMouseover?: PropType<TdBaseTableProps["onRowMouseover"]>;
    onRowMouseup?: PropType<TdBaseTableProps["onRowMouseup"]>;
    onScroll?: PropType<TdBaseTableProps["onScroll"]>;
    onScrollX?: PropType<TdBaseTableProps["onScrollX"]>;
    onScrollY?: PropType<TdBaseTableProps["onScrollY"]>;
    classPrefix: StringConstructor;
    ellipsisOverlayClassName: StringConstructor;
    rowAndColFixedPosition: PropType<TableBodyProps["rowAndColFixedPosition"]>;
    showColumnShadow: PropType<TableBodyProps["showColumnShadow"]>;
    tableElm: {};
    tableWidth: NumberConstructor;
    isWidthOverflow: BooleanConstructor;
    virtualConfig: PropType<VirtualScrollConfig>;
    tableContentElm: {};
    handleRowMounted: PropType<TableBodyProps["handleRowMounted"]>;
    renderExpandedRow: PropType<TableBodyProps["renderExpandedRow"]>;
    activeRow: PropType<Array<string | number>>;
    hoverRow: (StringConstructor | NumberConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activeRowKeys?: {
        type: PropType<TdBaseTableProps["activeRowKeys"]>;
        default: TdBaseTableProps["activeRowKeys"];
    };
    defaultActiveRowKeys?: {
        type: PropType<TdBaseTableProps["defaultActiveRowKeys"]>;
        default: () => TdBaseTableProps["defaultActiveRowKeys"];
    };
    activeRowType?: {
        type: PropType<TdBaseTableProps["activeRowType"]>;
        default: TdBaseTableProps["activeRowType"];
    };
    allowResizeColumnWidth?: {
        type: BooleanConstructor;
        default: any;
    };
    attach?: {
        type: PropType<TdBaseTableProps["attach"]>;
    };
    bordered?: BooleanConstructor;
    bottomContent?: {
        type: PropType<TdBaseTableProps["bottomContent"]>;
    };
    cellEmptyContent?: {
        type: PropType<TdBaseTableProps["cellEmptyContent"]>;
    };
    columns: PropType<import("..").BaseTableCol<import("..").TableRowData>[]> | {
        type: PropType<TdBaseTableProps["columns"]>;
        default: () => TdBaseTableProps["columns"];
    };
    data: PropType<import("..").TableRowData[]> | {
        type: PropType<TdBaseTableProps["data"]>;
        default: () => TdBaseTableProps["data"];
    };
    disableDataPage?: BooleanConstructor;
    disableSpaceInactiveRow?: {
        type: BooleanConstructor;
        default: any;
    };
    empty?: {
        type: PropType<TdBaseTableProps["empty"]>;
        default: TdBaseTableProps["empty"];
    };
    firstFullRow: PropType<string | ((h: typeof import("vue").h) => TNodeReturnValue)> | {
        type: PropType<TdBaseTableProps["firstFullRow"]>;
    };
    fixedRows?: {
        type: PropType<TdBaseTableProps["fixedRows"]>;
    };
    footData?: {
        type: PropType<TdBaseTableProps["footData"]>;
        default: () => TdBaseTableProps["footData"];
    };
    footerAffixProps?: {
        type: PropType<TdBaseTableProps["footerAffixProps"]>;
    };
    footerAffixedBottom?: {
        type: PropType<TdBaseTableProps["footerAffixedBottom"]>;
        default: TdBaseTableProps["footerAffixedBottom"];
    };
    footerSummary?: {
        type: PropType<TdBaseTableProps["footerSummary"]>;
    };
    headerAffixProps?: {
        type: PropType<TdBaseTableProps["headerAffixProps"]>;
    };
    headerAffixedTop?: {
        type: PropType<TdBaseTableProps["headerAffixedTop"]>;
        default: TdBaseTableProps["headerAffixedTop"];
    };
    height?: {
        type: PropType<TdBaseTableProps["height"]>;
    };
    horizontalScrollAffixedBottom?: {
        type: PropType<TdBaseTableProps["horizontalScrollAffixedBottom"]>;
    };
    hover?: BooleanConstructor;
    keyboardRowHover?: {
        type: BooleanConstructor;
        default: boolean;
    };
    lastFullRow: PropType<string | ((h: typeof import("vue").h) => TNodeReturnValue)> | {
        type: PropType<TdBaseTableProps["lastFullRow"]>;
    };
    lazyLoad?: BooleanConstructor;
    loading?: {
        type: PropType<TdBaseTableProps["loading"]>;
        default: TdBaseTableProps["loading"];
    };
    loadingProps?: {
        type: PropType<TdBaseTableProps["loadingProps"]>;
    };
    locale?: {
        type: PropType<TdBaseTableProps["locale"]>;
    };
    maxHeight?: {
        type: PropType<TdBaseTableProps["maxHeight"]>;
    };
    pagination?: {
        type: PropType<TdBaseTableProps["pagination"]>;
    };
    paginationAffixedBottom?: {
        type: PropType<TdBaseTableProps["paginationAffixedBottom"]>;
    };
    resizable?: BooleanConstructor;
    rowAttributes?: {
        type: PropType<TdBaseTableProps["rowAttributes"]>;
    };
    rowClassName?: {
        type: PropType<TdBaseTableProps["rowClassName"]>;
    };
    rowKey?: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    rowspanAndColspan?: {
        type: PropType<TdBaseTableProps["rowspanAndColspan"]>;
    };
    rowspanAndColspanInFooter?: {
        type: PropType<TdBaseTableProps["rowspanAndColspanInFooter"]>;
    };
    scroll?: {
        type: PropType<TdBaseTableProps["scroll"]>;
    };
    showHeader?: {
        type: BooleanConstructor;
        default: boolean;
    };
    size?: {
        type: PropType<TdBaseTableProps["size"]>;
        validator(val: TdBaseTableProps["size"]): boolean;
    };
    stripe?: BooleanConstructor;
    tableContentWidth?: {
        type: StringConstructor;
        default: string;
    };
    tableLayout?: {
        type: PropType<TdBaseTableProps["tableLayout"]>;
        default: TdBaseTableProps["tableLayout"];
        validator(val: TdBaseTableProps["tableLayout"]): boolean;
    };
    topContent?: {
        type: PropType<TdBaseTableProps["topContent"]>;
    };
    verticalAlign?: {
        type: PropType<TdBaseTableProps["verticalAlign"]>;
        default: TdBaseTableProps["verticalAlign"];
        validator(val: TdBaseTableProps["verticalAlign"]): boolean;
    };
    onActiveChange?: PropType<TdBaseTableProps["onActiveChange"]>;
    onActiveRowAction?: PropType<TdBaseTableProps["onActiveRowAction"]>;
    onCellClick?: PropType<TdBaseTableProps["onCellClick"]>;
    onColumnResizeChange?: PropType<TdBaseTableProps["onColumnResizeChange"]>;
    onPageChange?: PropType<TdBaseTableProps["onPageChange"]>;
    onRowClick?: PropType<TdBaseTableProps["onRowClick"]>;
    onRowDblclick?: PropType<TdBaseTableProps["onRowDblclick"]>;
    onRowMousedown?: PropType<TdBaseTableProps["onRowMousedown"]>;
    onRowMouseenter?: PropType<TdBaseTableProps["onRowMouseenter"]>;
    onRowMouseleave?: PropType<TdBaseTableProps["onRowMouseleave"]>;
    onRowMouseover?: PropType<TdBaseTableProps["onRowMouseover"]>;
    onRowMouseup?: PropType<TdBaseTableProps["onRowMouseup"]>;
    onScroll?: PropType<TdBaseTableProps["onScroll"]>;
    onScrollX?: PropType<TdBaseTableProps["onScrollX"]>;
    onScrollY?: PropType<TdBaseTableProps["onScrollY"]>;
    classPrefix: StringConstructor;
    ellipsisOverlayClassName: StringConstructor;
    rowAndColFixedPosition: PropType<TableBodyProps["rowAndColFixedPosition"]>;
    showColumnShadow: PropType<TableBodyProps["showColumnShadow"]>;
    tableElm: {};
    tableWidth: NumberConstructor;
    isWidthOverflow: BooleanConstructor;
    virtualConfig: PropType<VirtualScrollConfig>;
    tableContentElm: {};
    handleRowMounted: PropType<TableBodyProps["handleRowMounted"]>;
    renderExpandedRow: PropType<TableBodyProps["renderExpandedRow"]>;
    activeRow: PropType<Array<string | number>>;
    hoverRow: (StringConstructor | NumberConstructor)[];
}>>, {
    empty?: string | ((h: typeof import("vue").h) => TNodeReturnValue);
    loading?: boolean | ((h: typeof import("vue").h) => TNodeReturnValue);
    hover?: boolean;
    tableLayout?: "fixed" | "auto";
    verticalAlign?: "top" | "middle" | "bottom";
    lazyLoad?: boolean;
    bordered?: boolean;
    stripe?: boolean;
    activeRowKeys?: (string | number)[];
    defaultActiveRowKeys?: (string | number)[];
    activeRowType?: "single" | "multiple";
    allowResizeColumnWidth?: boolean;
    disableDataPage?: boolean;
    disableSpaceInactiveRow?: boolean;
    footData?: import("..").TableRowData[];
    footerAffixedBottom?: boolean | Partial<import("../..").TdAffixProps>;
    headerAffixedTop?: boolean | Partial<import("../..").TdAffixProps>;
    keyboardRowHover?: boolean;
    resizable?: boolean;
    rowKey?: string;
    showHeader?: boolean;
    tableContentWidth?: string;
    isWidthOverflow: boolean;
}, {}>;
export default _default;
