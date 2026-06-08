import { TreeNode } from './tree-node';
import { TreeOptionData } from '../common';
export type TreeNodeValue = string | number;
export interface KeysType {
    value?: string;
    label?: string;
    children?: string;
    disabled?: string;
}
export interface TreeNodeState {
    checkable?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    draggable?: boolean;
    visible?: boolean;
    loading?: boolean;
    value?: TreeNodeValue;
    label?: any;
    expanded?: boolean;
    expandMutex?: boolean;
    actived?: boolean;
    activable?: boolean;
}
export interface TreeNodeModelProps<DataOption extends TreeOptionData = TreeOptionData> {
    value: TreeNodeValue;
    label: any;
    actived: boolean;
    checked: boolean;
    data: DataOption;
    expanded: boolean;
    indeterminate: boolean;
    loading: boolean;
    disabled: boolean;
}
export interface TreeNodeModel<T extends TreeOptionData = TreeOptionData> extends TreeNodeModelProps {
    appendData: (data: T | Array<T>) => void;
    getIndex: () => number;
    getLevel: () => number;
    getParent: () => TreeNodeModel;
    getParents: () => TreeNodeModel[];
    getChildren: (deep?: boolean) => boolean | TreeNodeModel[];
    getPath: () => TreeNodeModel[];
    getRoot: () => TreeNodeModel;
    getSiblings: () => TreeNodeModel[];
    insertAfter: (newData: T) => void;
    insertBefore: (newData: T) => void;
    isFirst: () => boolean;
    isLast: () => boolean;
    isLeaf: () => boolean;
    remove: (value?: TreeNodeValue) => void;
    setData: (data: T) => void;
}
export type TypeTargetNode = TreeNodeValue | TreeNode;
export type TypeIdMap = Map<TreeNodeValue, boolean>;
export type TypeValueMode = 'all' | 'parentFirst' | 'onlyLeaf';
export type TypeTimer = ReturnType<typeof setTimeout>;
export interface TypeSettingOptions {
    directly?: boolean;
    isAction?: boolean;
}
export interface TypeRelatedNodesOptions {
    reverse?: boolean;
    withParents?: boolean;
}
export interface TypeTreeFilterOptions {
    level?: number;
    filter?: Function;
    props?: TreeNodeState;
}
export interface TypeTreeNodeData extends TreeNodeState {
    children?: TypeTreeNodeData[] | boolean;
    [key: string]: any;
}
export type TypeTreeItem = TypeTreeNodeData | TreeNode;
export type TypeTreeNodeModel = TreeNodeModel<TypeTreeNodeData>;
export type TypeTreeFilter = (node: TreeNodeModel<TypeTreeNodeData>) => boolean;
export type TypeUpdatedMap = Map<TreeNodeValue, string>;
export type TypeFnOperation = (node: TreeNode) => void;
export interface TypeTreeEventState {
    node?: TreeNode;
    nodes?: TreeNode[];
    map?: TypeUpdatedMap;
    data?: TypeTreeNodeData[];
}
export interface TypeTreeStoreOptions {
    prefix?: string;
    keys?: KeysType;
    expandAll?: boolean;
    expandLevel?: number;
    expandMutex?: boolean;
    expandParent?: boolean;
    activable?: boolean;
    activeMultiple?: boolean;
    checkable?: boolean;
    checkStrictly?: boolean;
    disabled?: boolean;
    disableCheck?: boolean | TypeTreeFilter;
    draggable?: boolean;
    load?: Function;
    lazy?: boolean;
    valueMode?: TypeValueMode;
    filter?: TypeTreeFilter;
    onLoad?: Function;
    onReflow?: Function;
    onUpdate?: Function;
    allowFoldNodeOnFilter?: Boolean;
}
