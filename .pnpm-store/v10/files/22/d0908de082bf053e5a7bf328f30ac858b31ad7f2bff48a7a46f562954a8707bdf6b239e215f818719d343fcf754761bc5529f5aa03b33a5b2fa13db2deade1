import { Ref } from 'vue';
import { BaseTableProps } from '../types';
import { RowEventContext, TableRowData } from '../type';
export declare function useRowHighlight(props: BaseTableProps, tableRef: Ref<HTMLDivElement>): {
    tActiveRow: Ref<(string | number)[]>;
    onHighlightRow: (ctx: RowEventContext<TableRowData>, extra?: {
        action?: "active" | "inactive";
    }) => void;
    addHighlightKeyboardListener: () => void;
    removeHighlightKeyboardListener: () => void;
};
export default useRowHighlight;
