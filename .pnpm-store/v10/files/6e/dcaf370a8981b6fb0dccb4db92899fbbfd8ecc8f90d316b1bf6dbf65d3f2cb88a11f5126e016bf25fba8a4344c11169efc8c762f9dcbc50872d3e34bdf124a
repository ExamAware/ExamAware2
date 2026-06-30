import { Ref } from 'vue';
import { TdEnhancedTableProps, TdPrimaryTableProps, TableRowData, PrimaryTableCol } from '../type';
import { KeysType, TableTreeDataMap, TreeDataMapType } from 'tdesign-vue-next/es/common/js/table/tree-store';
export interface GetChildrenDataReturnValue {
    allChildren: Array<any>;
    allChildrenKeys: Array<string | number>;
    leafNodeKeys: Array<string | number>;
}
export declare const childrenMap: Map<any, any>;
export declare function getChildrenData(treeDataMap: TreeDataMapType, data: TableRowData, keys: {
    childrenKey: string;
    rowKey: string;
}, r?: GetChildrenDataReturnValue): GetChildrenDataReturnValue;
export interface RemoveParams {
    selectedRowKeys: Array<string | number>;
    removeKeys: Array<string | number>;
}
export interface RemainData {
    data: Array<any>;
    keys: Array<string | number>;
}
export declare function removeChildrenKeys(p: RemoveParams, r?: RemainData): RemainData;
export interface GetKeyDataParams {
    treeDataMap: TreeDataMapType;
    data: Array<any>;
    column: PrimaryTableCol;
    keys: KeysType;
}
export interface GetRowDataParams {
    treeDataMap: TreeDataMapType;
    selectedRowKeys: Array<string | number>;
}
export declare function getRowDataByKeys(p: GetRowDataParams): import("@common/js/table/types").TableRowState<import("@common/js/table/types").TableRowData>[];
type SelectChangeParams = Parameters<TdPrimaryTableProps['onSelectChange']>;
export default function useTreeSelect(props: TdEnhancedTableProps, treeDataMap: Ref<TableTreeDataMap>): {
    tIndeterminateSelectedRowKeys: Ref<(string | number)[]>;
    onInnerSelectChange: (rowKeys: SelectChangeParams[0], extraData: SelectChangeParams[1]) => void;
};
export {};
