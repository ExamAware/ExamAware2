import { Ref } from 'vue';
import { BaseTableCol, TableRowData, TdBaseTableProps } from '../type';
export default function useColumnResize(params: {
    isWidthOverflow: Ref<boolean>;
    tableContentRef: Ref<HTMLDivElement>;
    showColumnShadow: {
        left: boolean;
        right: boolean;
    };
    getThWidthList: (type?: 'default' | 'calculate') => {
        [colKeys: string]: number;
    };
    updateThWidthList: (data: {
        [colKey: string]: number;
    }) => void;
    setTableElmWidth: (width: number) => void;
    updateTableAfterColumnResize: () => void;
    onColumnResizeChange: TdBaseTableProps['onColumnResizeChange'];
}): {
    resizeLineRef: Ref<HTMLDivElement>;
    resizeLineStyle: {
        display: string;
        height: string;
        left: string;
        bottom: string;
    };
    onColumnMouseover: (e: MouseEvent, col: BaseTableCol<TableRowData>) => void;
    onColumnMousedown: (e: MouseEvent, col: BaseTableCol<TableRowData>, index: number) => void;
    setEffectColMap: (nodes: BaseTableCol<TableRowData>[], parent: BaseTableCol<TableRowData> | null) => void;
};
