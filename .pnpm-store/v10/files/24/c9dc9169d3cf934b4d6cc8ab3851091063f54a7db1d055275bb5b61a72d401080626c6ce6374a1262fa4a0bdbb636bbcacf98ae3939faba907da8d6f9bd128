import { PropType, Ref, CSSProperties } from 'vue';
import { BaseTableCol, TableRowData, TdBaseTableProps } from '../type';
import { RowAndColFixedPosition, ThRowspanAndColspan } from '../types';
import { AttachNode } from '../../common';
export interface TheadProps {
    classPrefix: string;
    ellipsisOverlayClassName: string;
    isFixedHeader: boolean;
    maxHeight?: TdBaseTableProps['maxHeight'];
    height?: TdBaseTableProps['height'];
    rowAndColFixedPosition: RowAndColFixedPosition;
    thWidthList?: {
        [colKey: string]: number;
    };
    bordered?: boolean;
    isMultipleHeader?: boolean;
    thDraggable?: boolean;
    spansAndLeafNodes?: {
        rowspanAndColspanMap: ThRowspanAndColspan;
        leafColumns: BaseTableCol<TableRowData>[];
    };
    thList: BaseTableCol<TableRowData>[][];
    columnResizeParams: {
        resizeLineRef: Ref<HTMLDivElement>;
        resizeLineStyle: CSSProperties;
        onColumnMouseover: (e: MouseEvent, col: BaseTableCol<TableRowData>) => void;
        onColumnMousedown: (e: MouseEvent, col: BaseTableCol<TableRowData>, index: number) => void;
    };
    resizable?: Boolean;
    attach?: AttachNode;
    showColumnShadow?: {
        left: boolean;
        right: boolean;
    };
}
declare const _default: import("vue").DefineComponent<{
    classPrefix: StringConstructor;
    ellipsisOverlayClassName: StringConstructor;
    isFixedHeader: BooleanConstructor;
    thDraggable: BooleanConstructor;
    maxHeight: PropType<TheadProps["maxHeight"]>;
    height: PropType<TheadProps["height"]>;
    rowAndColFixedPosition: PropType<TheadProps["rowAndColFixedPosition"]>;
    thWidthList: PropType<TheadProps["thWidthList"]>;
    bordered: BooleanConstructor;
    isMultipleHeader: BooleanConstructor;
    resizable: BooleanConstructor;
    attach: PropType<TheadProps["attach"]>;
    spansAndLeafNodes: PropType<TheadProps["spansAndLeafNodes"]>;
    thList: PropType<TheadProps["thList"]>;
    columnResizeParams: PropType<TheadProps["columnResizeParams"]>;
    showColumnShadow: PropType<TheadProps["showColumnShadow"]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    classPrefix: StringConstructor;
    ellipsisOverlayClassName: StringConstructor;
    isFixedHeader: BooleanConstructor;
    thDraggable: BooleanConstructor;
    maxHeight: PropType<TheadProps["maxHeight"]>;
    height: PropType<TheadProps["height"]>;
    rowAndColFixedPosition: PropType<TheadProps["rowAndColFixedPosition"]>;
    thWidthList: PropType<TheadProps["thWidthList"]>;
    bordered: BooleanConstructor;
    isMultipleHeader: BooleanConstructor;
    resizable: BooleanConstructor;
    attach: PropType<TheadProps["attach"]>;
    spansAndLeafNodes: PropType<TheadProps["spansAndLeafNodes"]>;
    thList: PropType<TheadProps["thList"]>;
    columnResizeParams: PropType<TheadProps["columnResizeParams"]>;
    showColumnShadow: PropType<TheadProps["showColumnShadow"]>;
}>>, {
    bordered: boolean;
    resizable: boolean;
    isFixedHeader: boolean;
    thDraggable: boolean;
    isMultipleHeader: boolean;
}, {}>;
export default _default;
