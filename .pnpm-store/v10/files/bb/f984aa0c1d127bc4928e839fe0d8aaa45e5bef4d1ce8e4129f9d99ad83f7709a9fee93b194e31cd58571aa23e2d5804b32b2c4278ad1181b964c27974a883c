import { SetupContext } from 'vue';
import { TdPrimaryTableProps, PrimaryTableCol, TableRowData, TableExpandedRowParams, RowEventContext, RowClassNameParams } from '../type';
export default function useRowExpand(props: TdPrimaryTableProps, context: SetupContext): {
    showExpandedRow: import("vue").ComputedRef<boolean>;
    showExpandIconColumn: import("vue").ComputedRef<boolean>;
    getExpandColumn: () => PrimaryTableCol<TableRowData>;
    renderExpandedRow: (p: TableExpandedRowParams<TableRowData> & {
        tableWidth: number;
        isWidthOverflow: boolean;
    }) => JSX.Element;
    onInnerExpandRowClick: (p: RowEventContext<TableRowData>) => void;
    getExpandedRowClass: (params: RowClassNameParams<TableRowData>) => string;
};
