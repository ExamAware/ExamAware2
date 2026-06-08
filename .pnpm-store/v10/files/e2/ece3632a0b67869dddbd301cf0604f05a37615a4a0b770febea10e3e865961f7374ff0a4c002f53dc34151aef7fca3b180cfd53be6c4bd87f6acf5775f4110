import { CheckboxProps } from '../checkbox';
import { TNode, TreeOptionData, TreeKeysType, TScroll, ComponentScrollToElementParams } from '../common';
export interface TdTreeProps<T extends TreeOptionData = TreeOptionData> {
    activable?: boolean;
    activeMultiple?: boolean;
    actived?: Array<TreeNodeValue>;
    defaultActived?: Array<TreeNodeValue>;
    allowDrop?: (context: {
        e: DragEvent;
        dragNode: TreeNodeModel<T>;
        dropNode: TreeNodeModel<T>;
        dropPosition: number;
    }) => boolean;
    allowFoldNodeOnFilter?: boolean;
    checkProps?: CheckboxProps;
    checkStrictly?: boolean;
    checkable?: boolean;
    data?: Array<T>;
    disableCheck?: boolean | ((node: TreeNodeModel<T>) => boolean);
    disabled?: boolean;
    draggable?: boolean;
    empty?: string | TNode;
    expandAll?: boolean;
    expandLevel?: number;
    expandMutex?: boolean;
    expandOnClickNode?: boolean;
    expandParent?: boolean;
    expanded?: Array<TreeNodeValue>;
    defaultExpanded?: Array<TreeNodeValue>;
    filter?: (node: TreeNodeModel<T>) => boolean;
    height?: string | number;
    hover?: boolean;
    icon?: boolean | TNode<TreeNodeModel<T>>;
    keys?: TreeKeysType;
    label?: string | boolean | TNode<TreeNodeModel<T>>;
    lazy?: boolean;
    line?: boolean | TNode;
    load?: (node: TreeNodeModel<T>) => Promise<Array<T>>;
    maxHeight?: string | number;
    operations?: TNode<TreeNodeModel<T>>;
    scroll?: TScroll;
    transition?: boolean;
    value?: Array<TreeNodeValue>;
    defaultValue?: Array<TreeNodeValue>;
    modelValue?: Array<TreeNodeValue>;
    valueMode?: 'onlyLeaf' | 'parentFirst' | 'all';
    onActive?: (value: Array<TreeNodeValue>, context: {
        node: TreeNodeModel<T>;
        e?: MouseEvent;
        trigger: 'node-click' | 'setItem';
    }) => void;
    onChange?: (value: Array<TreeNodeValue>, context: {
        node: TreeNodeModel<T>;
        e?: any;
        trigger: 'node-click' | 'setItem';
    }) => void;
    onClick?: (context: {
        node: TreeNodeModel<T>;
        e: MouseEvent;
    }) => void;
    onDragEnd?: (context: {
        e: DragEvent;
        node: TreeNodeModel<T>;
    }) => void;
    onDragLeave?: (context: {
        e: DragEvent;
        node: TreeNodeModel<T>;
    }) => void;
    onDragOver?: (context: {
        e: DragEvent;
        node: TreeNodeModel<T>;
    }) => void;
    onDragStart?: (context: {
        e: DragEvent;
        node: TreeNodeModel<T>;
    }) => void;
    onDrop?: (context: {
        e: DragEvent;
        dragNode: TreeNodeModel<T>;
        dropNode: TreeNodeModel<T>;
        dropPosition: number;
    }) => void;
    onExpand?: (value: Array<TreeNodeValue>, context: {
        node: TreeNodeModel<T>;
        e?: MouseEvent;
        trigger: 'node-click' | 'icon-click' | 'setItem';
    }) => void;
    onLoad?: (context: {
        node: TreeNodeModel<T>;
    }) => void;
    onScroll?: (params: {
        e: WheelEvent;
    }) => void;
}
export interface TreeInstanceFunctions<T extends TreeOptionData = TreeOptionData> {
    appendTo: (value: TreeNodeValue, newData: T | Array<T>) => void;
    getIndex: (value: TreeNodeValue) => number;
    getItem: (value: TreeNodeValue) => TreeNodeModel<T>;
    getItems: (value?: TreeNodeValue) => Array<TreeNodeModel<T>>;
    getParent: (value: TreeNodeValue) => TreeNodeModel<T>;
    getParents: (value: TreeNodeValue) => TreeNodeModel<T>[];
    getPath: (value: TreeNodeValue) => TreeNodeModel<T>[];
    getTreeData: (value?: TreeNodeValue) => Array<T>;
    insertAfter: (value: TreeNodeValue, newData: T) => void;
    insertBefore: (value: TreeNodeValue, newData: T) => void;
    refresh: () => void;
    remove: (value: TreeNodeValue) => void;
    scrollTo?: (scrollToParams: ComponentScrollToElementParams) => void;
    setItem: (value: TreeNodeValue, options: TreeNodeState) => void;
}
export interface TreeNodeState {
    activable?: boolean;
    actived?: boolean;
    checkable?: boolean;
    checked?: boolean;
    disabled?: boolean;
    draggable?: boolean;
    expandMutex?: boolean;
    expanded?: boolean;
    indeterminate?: boolean;
    label?: string;
    loading?: boolean;
    value?: string | number;
    visible?: boolean;
}
export interface TreeNodeModel<T extends TreeOptionData = TreeOptionData> extends TreeNodeState {
    actived: boolean;
    checked: boolean;
    data: T;
    disabled: boolean;
    expanded: boolean;
    indeterminate: boolean;
    loading: boolean;
    appendData: (data: T | Array<T>) => void;
    getChildren: (deep: boolean) => Array<TreeNodeModel<T>> | boolean;
    getIndex: () => number;
    getLevel: () => number;
    getParent: () => TreeNodeModel<T>;
    getParents: () => Array<TreeNodeModel<T>>;
    getPath: () => Array<TreeNodeModel<T>>;
    getRoot: () => TreeNodeModel<T>;
    getSiblings: () => Array<TreeNodeModel<T>>;
    insertAfter: (newData: T) => void;
    insertBefore: (newData: T) => void;
    isFirst: () => boolean;
    isLast: () => boolean;
    isLeaf: () => boolean;
    remove: (value?: TreeNodeValue) => void;
    setData: (data: T) => void;
}
export type TreeNodeValue = string | number;
