import { SetupContext, ComputedRef, Ref } from 'vue';
import { ClassName, Styles } from '../../common';
import { BaseTableCol, TableRowData, TdBaseTableProps } from '../type';
import { TableRowFixedClasses, RowAndColFixedPosition, TableColFixedClasses } from '../types';
export declare function getColumnFixedStyles(col: TdBaseTableProps['columns'][0], index: number, rowAndColFixedPosition: RowAndColFixedPosition, tableColFixedClasses: TableColFixedClasses): {
    style?: Styles;
    classes?: ClassName;
};
export declare function getRowFixedStyles(rowId: string | number, rowIndex: number, rowLength: number, fixedRows: TdBaseTableProps['fixedRows'], rowAndColFixedPosition: RowAndColFixedPosition, tableRowFixedClasses: TableRowFixedClasses, virtualTranslateY?: number): {
    style: Styles;
    classes: ClassName;
};
export default function useFixed(props: TdBaseTableProps, context: SetupContext, finalColumns: ComputedRef<BaseTableCol<TableRowData>[]>, affixRef: Record<string, Ref>): {
    tableWidth: Ref<number>;
    tableElmWidth: Ref<number>;
    thWidthList: Ref<{
        [colKey: string]: number;
    }>;
    isFixedHeader: Ref<boolean>;
    isWidthOverflow: Ref<boolean>;
    tableContentRef: Ref<HTMLDivElement>;
    isFixedColumn: Ref<boolean>;
    showColumnShadow: {
        left: boolean;
        right: boolean;
    };
    rowAndColFixedPosition: Ref<RowAndColFixedPosition>;
    virtualScrollHeaderPos: Ref<{
        left: number;
        top: number;
    }>;
    scrollbarWidth: Ref<number>;
    setData: (dataSource: TableRowData[]) => void;
    refreshTable: () => void;
    setTableElmWidth: (width: number) => void;
    emitScrollEvent: (e: WheelEvent) => void;
    updateThWidthListHandler: () => void;
    updateColumnFixedShadow: (target: HTMLElement, extra?: {
        skipScrollLimit?: boolean;
    }) => void;
    setUseFixedTableElmRef: (val: HTMLTableElement) => void;
    getThWidthList: (type?: "default" | "calculate") => {
        [colKey: string]: number;
    };
    updateThWidthList: (trList: HTMLCollection | {
        [colKey: string]: number;
    }) => {
        [colKey: string]: number;
    };
    addTableResizeObserver: (tableElement: HTMLDivElement) => void;
    updateTableAfterColumnResize: () => void;
};
