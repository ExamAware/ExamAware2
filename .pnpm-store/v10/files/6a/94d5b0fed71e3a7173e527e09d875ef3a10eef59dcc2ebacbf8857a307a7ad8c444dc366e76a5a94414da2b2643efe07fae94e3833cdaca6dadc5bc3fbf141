import { SetupContext } from 'vue';
import { BaseTableCol, PrimaryTableCol, TableRowData, TdBaseTableProps } from '../type';
import { TNodeReturnValue } from '../../common';
import { BaseTableColumns } from '../types';
export declare function renderTitle(slots: SetupContext['slots'], col: BaseTableColumns[0], index: number): import("../..").SlotReturnValue;
export default function useTableHeader(props: TdBaseTableProps): {
    thList: import("vue").ComputedRef<BaseTableColumns[]>;
    isMultipleHeader: import("vue").ComputedRef<boolean>;
    spansAndLeafNodes: import("vue").ComputedRef<{
        rowspanAndColspanMap: import("..").ThRowspanAndColspan;
        leafColumns: BaseTableColumns;
    }>;
    renderTitleWidthIcon: ([title, sortIcon, filterIcon]: TNodeReturnValue[], col: PrimaryTableCol<TableRowData>, colIndex: number, ellipsisTitle: BaseTableCol["ellipsisTitle"], attach: HTMLElement, extra?: {
        classPrefix: string;
        ellipsisOverlayClassName: string;
    }) => JSX.Element;
};
