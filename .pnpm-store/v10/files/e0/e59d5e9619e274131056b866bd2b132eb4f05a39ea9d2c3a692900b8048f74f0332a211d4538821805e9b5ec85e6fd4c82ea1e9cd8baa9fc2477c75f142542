import { ComputedRef, Ref } from 'vue';
import { TdEnhancedTableProps, TableRowData } from '../type';
import TableTreeStore from 'tdesign-vue-next/cjs/common/js/table/tree-store';
export declare function useTreeDataExpand(props: TdEnhancedTableProps, params: {
    store: Ref<InstanceType<typeof TableTreeStore>>;
    dataSource: Ref<TdEnhancedTableProps['data']>;
    rowDataKeys: ComputedRef<{
        rowKey: string;
        childrenKey: string;
    }>;
}): {
    tExpandedTreeNode: Ref<(string | number)[]>;
    isDefaultExpandAllExecute: Ref<boolean>;
    isDefaultExpandedTreeNodesExecute: Ref<boolean>;
    expandAll: (type?: "expand-all" | "default-expand-all", list?: TableRowData[]) => void;
    foldAll: () => void;
    onExpandFoldIconClick: (p: {
        row: TableRowData;
        rowIndex: number;
    }, trigger?: "expand-fold-icon" | "row-click") => void;
    updateExpandOnDataChange: (data: TableRowData[]) => void;
};
export default useTreeDataExpand;
