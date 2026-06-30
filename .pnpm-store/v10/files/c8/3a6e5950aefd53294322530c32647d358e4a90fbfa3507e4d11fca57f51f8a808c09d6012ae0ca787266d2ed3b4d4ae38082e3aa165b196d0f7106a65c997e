import { SetupContext } from 'vue';
import { SwapParams } from 'tdesign-vue-next/lib/common/js/table/tree-store';
import { TdEnhancedTableProps, PrimaryTableCol, TableRowData, TableRowValue, TableRowState } from '../type';
export default function useTreeData(props: TdEnhancedTableProps, context: SetupContext): {
    store: import("vue").Ref<{
        treeDataMap: import("tdesign-vue-next/lib/common/js/table/tree-store").TableTreeDataMap;
        expandAllRowIndex: 0;
        initialTreeStore: (dataSource: import("@common/js/table/types").TableRowData[], columns: import("@common/js/table/types").PrimaryTableCol[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => void;
        getAllUniqueKeys: (data: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, arr?: import("@common/js/table/types").TableRowData[]) => import("@common/js/table/types").TableRowData[];
        getExpandedChildrenKeys: (data: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, arr?: (string | number)[]) => (string | number)[];
        expandTreeNode: (rowList: (string | number)[], dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        foldTreeNode: (rowList: (string | number)[], dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        toggleExpandData: (p: {
            rowIndex: number;
            row: import("@common/js/table/types").TableRowData;
        }, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, type?: "expand" | "fold") => import("@common/js/table/types").TableRowData[];
        updateExpandRow: (changeRow: import("@common/js/table/types").TableRowState, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        getData: (key: import("@common/js/table/types").TableRowValue) => import("@common/js/table/types").TableRowState;
        updateData: (rowValue: import("@common/js/table/types").TableRowValue, newRowData: import("@common/js/table/types").TableRowData, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => number;
        remove: (key: import("@common/js/table/types").TableRowValue, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        removeChildren: (key: import("@common/js/table/types").TableRowValue, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        appendTo: (rowValue: string | number, newData: import("@common/js/table/types").TableRowData | import("@common/js/table/types").TableRowData[], dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        appendToRoot: (newData: import("@common/js/table/types").TableRowData | import("@common/js/table/types").TableRowData[], dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        insertAfter: (rowValue: string | number, newData: import("@common/js/table/types").TableRowData, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        insertBefore: (rowValue: string | number, newData: import("@common/js/table/types").TableRowData, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        insert: (rowValue: string | number, newData: import("@common/js/table/types").TableRowData, dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, type: "before" | "after") => import("@common/js/table/types").TableRowData[];
        swapData: (dataSource: import("@common/js/table/types").TableRowData[], params: SwapParams<import("@common/js/table/types").TableRowData>, keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => {
            dataSource: import("@common/js/table/types").TableRowData[];
            result: boolean;
            code?: number;
            reason?: string;
        };
        expandAll: (dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        foldAll: (dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        getTreeNode: (dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => import("@common/js/table/types").TableRowData[];
        getTreeExpandedRow: (dataSource: import("@common/js/table/types").TableRowData[], keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, type?: "unique" | "data" | "all") => any[];
        initialTreeDataMap: (treeDataMap: import("tdesign-vue-next/lib/common/js/table/tree-store").TableTreeDataMap, dataSource: import("@common/js/table/types").TableRowData[], column: import("@common/js/table/types").PrimaryTableCol, keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType, level?: number, parent?: import("@common/js/table/types").TableRowState) => void;
        updateDisabledState: (dataSource: import("@common/js/table/types").TableRowData[], column: import("@common/js/table/types").PrimaryTableCol, keys: import("tdesign-vue-next/lib/common/js/table/tree-store").KeysType) => void;
        validateDataExist: (state: import("@common/js/table/types").TableRowState, rowValue: string | number) => boolean;
        validateDataDoubleExist: (state: import("@common/js/table/types").TableRowState, rowValue: string | number) => boolean;
    }>;
    rowDataKeys: import("vue").ComputedRef<{
        rowKey: string;
        childrenKey: string;
    }>;
    dataSource: import("vue").Ref<{
        [x: string]: any;
        children?: any[];
    }[]>;
    swapData: (params: SwapParams<TableRowData>) => void;
    setData: <T>(key: TableRowValue, newRowData: T) => void;
    getData: (key: TableRowValue) => TableRowState;
    remove: (key: TableRowValue) => void;
    removeChildren: (key: TableRowValue) => void;
    appendTo: <T>(key: TableRowValue, newData: T | T[]) => void;
    insertAfter: <T>(rowValue: TableRowValue, newData: T) => void;
    insertBefore: <T>(rowValue: TableRowValue, newData: T) => void;
    formatTreeColumn: (col: PrimaryTableCol) => PrimaryTableCol;
    toggleExpandData: (p: {
        row: TableRowData;
        rowIndex: number;
    }, trigger?: "expand-fold-icon" | "row-click") => void;
    expandAll: (type?: "expand-all" | "default-expand-all", list?: TableRowData[]) => void;
    foldAll: () => void;
    getTreeNode: () => import("@common/js/table/types").TableRowData[];
    resetData: (data: TableRowData[]) => void;
    getTreeExpandedRow: (type?: "unique" | "data" | "all") => any[];
    onExpandFoldIconClick: (p: {
        row: TableRowData;
        rowIndex: number;
    }, trigger?: "expand-fold-icon" | "row-click") => void;
};
