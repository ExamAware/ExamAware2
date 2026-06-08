import { PrimaryTableCol, TableRowState, TableRowValue, TableRowData } from './types';
export type TableTreeDataMap = Map<string | number, TableRowState>;
export interface TableRowModel<T> extends TableRowState<T> {
    setData?: (key: string | number, data: T) => void;
}
export interface KeysType {
    rowKey: string;
    childrenKey: string;
}
export interface SwapParams<T> {
    current: T;
    target: T;
    currentIndex: number;
    targetIndex: number;
}
export declare const TABLE_TREE_ERROR_CODE_NOT_SAME_LEVEL: {
    code: number;
    reason: string;
};
export declare function getUniqueRowValue(row: TableRowData, colKey: string, rowIndex?: number, level?: number): any;
declare class TableTreeStore<T extends TableRowData = TableRowData> {
    treeDataMap: TableTreeDataMap;
    expandAllRowIndex: 0;
    constructor();
    initialTreeStore(dataSource: T[], columns: PrimaryTableCol[], keys: KeysType): void;
    getAllUniqueKeys(data: T[], keys: KeysType, arr?: T[]): T[];
    getExpandedChildrenKeys(data: T[], keys: KeysType, arr?: (string | number)[]): (string | number)[];
    expandTreeNode(rowList: (string | number)[], dataSource: T[], keys: KeysType): T[];
    foldTreeNode(rowList: (string | number)[], dataSource: T[], keys: KeysType): T[];
    toggleExpandData(p: {
        rowIndex: number;
        row: T;
    }, dataSource: T[], keys: KeysType, type?: 'expand' | 'fold'): T[];
    updateExpandRow(changeRow: TableRowState, dataSource: T[], keys: KeysType): T[];
    getData(key: TableRowValue): TableRowState;
    updateData(rowValue: TableRowValue, newRowData: T, dataSource: T[], keys: KeysType): number;
    remove(key: TableRowValue, dataSource: T[], keys: KeysType): T[];
    removeChildren(key: TableRowValue, dataSource: T[], keys: KeysType): T[];
    appendTo(rowValue: string | number, newData: T | T[], dataSource: T[], keys: KeysType): T[];
    appendToRoot(newData: T | T[], dataSource: T[], keys: KeysType): T[];
    insertAfter(rowValue: string | number, newData: T, dataSource: T[], keys: KeysType): T[];
    insertBefore(rowValue: string | number, newData: T, dataSource: T[], keys: KeysType): T[];
    insert(rowValue: string | number, newData: T, dataSource: T[], keys: KeysType, type: 'before' | 'after'): T[];
    swapData(dataSource: T[], params: SwapParams<T>, keys: KeysType): {
        dataSource: T[];
        result: boolean;
        code?: number;
        reason?: string;
    };
    expandAll(dataSource: T[], keys: KeysType): T[];
    foldAll(dataSource: T[], keys: KeysType): T[];
    getTreeNode(dataSource: T[], keys: KeysType): T[];
    getTreeExpandedRow(dataSource: T[], keys: KeysType, type?: 'unique' | 'data' | 'all'): any[];
    initialTreeDataMap(treeDataMap: TableTreeDataMap, dataSource: T[], column: PrimaryTableCol, keys: KeysType, level?: number, parent?: TableRowState): void;
    updateDisabledState(dataSource: T[], column: PrimaryTableCol, keys: KeysType): void;
    validateDataExist(state: TableRowState, rowValue: string | number): boolean;
    validateDataDoubleExist(state: TableRowState, rowValue: string | number): boolean;
}
export default TableTreeStore;
export declare function updateRowExpandLength(treeDataMap: TableTreeDataMap, row: TableRowData, distance: number, type: 'expand' | 'fold' | 'delete' | 'insert', keys: KeysType): void;
export declare function clearRowExpandLength<T>(treeDataMap: TableTreeDataMap, row: T, keys: KeysType): void;
export declare function updateChildrenRowState<T>(treeDataMap: TableTreeDataMap, rowState: TableRowState, expanded: boolean, keys: KeysType): void;
export declare function updateRowData<T extends TableRowData = TableRowData>(data: T[], key: string | number, newData: T, keys: KeysType): void;
export declare function updateRowIndex<T>(treeDataMap: TableTreeDataMap, dataSource: T[], extra: {
    rowKey: string;
    minRowIndex?: number;
    maxRowIndex?: number;
    type?: 'add' | 'remove';
    count?: number;
}): void;
export declare function diffExpandedTreeNode(newExpandedNode?: (number | string)[], oldExpandedNode?: (number | string)[]): {
    removedList: (string | number)[];
    addedList: (string | number)[];
};
export type TreeDataMapType = InstanceType<typeof TableTreeStore>['treeDataMap'];
