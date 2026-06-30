import { Ref } from 'vue';
import { BaseTableCol, TableRowData, TableRowspanAndColspanFunc } from '../type';
export interface SkipSpansValue {
    colspan?: number;
    rowspan?: number;
    skipped?: boolean;
}
export declare function getCellKey(row: TableRowData, rowKey: string, colKey: string, colIndex: number): string;
export declare function getRowKeyFromCell(cellKey: string): string;
export default function useRowspanAndColspan(data: Ref<TableRowData[]>, columns: Ref<BaseTableCol<TableRowData>[]>, rowKey: Ref<string>, rowspanAndColspan: Ref<TableRowspanAndColspanFunc<TableRowData>>): {
    skipSpansMap: Ref<Map<string, SkipSpansValue>>;
};
