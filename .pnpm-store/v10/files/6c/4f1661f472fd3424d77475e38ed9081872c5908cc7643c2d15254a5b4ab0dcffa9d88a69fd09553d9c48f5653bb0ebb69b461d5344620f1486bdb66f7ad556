import { TypeCreateElement, TypeTreeOptionData } from './utils/adapt';
import { TreeNodeState, TreeNodeValue, TypeTreeNodeModel } from './types';
declare const _default: import("vue").DefineComponent<{
    activable: BooleanConstructor;
    activeMultiple: BooleanConstructor;
    actived: {
        type: import("vue").PropType<import("./type").TdTreeProps["actived"]>;
        default: import("./type").TdTreeProps["actived"];
    };
    defaultActived: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultActived"]>;
    };
    allowDrop: {
        type: import("vue").PropType<import("./type").TdTreeProps["allowDrop"]>;
    };
    allowFoldNodeOnFilter: BooleanConstructor;
    checkProps: {
        type: import("vue").PropType<import("./type").TdTreeProps["checkProps"]>;
    };
    checkStrictly: BooleanConstructor;
    checkable: BooleanConstructor;
    data: {
        type: import("vue").PropType<import("./type").TdTreeProps["data"]>;
        default: () => import("./type").TdTreeProps["data"];
    };
    disableCheck: {
        type: import("vue").PropType<import("./type").TdTreeProps["disableCheck"]>;
        default: import("./type").TdTreeProps["disableCheck"];
    };
    disabled: BooleanConstructor;
    draggable: BooleanConstructor;
    empty: {
        type: import("vue").PropType<import("./type").TdTreeProps["empty"]>;
        default: import("./type").TdTreeProps["empty"];
    };
    expandAll: BooleanConstructor;
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    expandMutex: BooleanConstructor;
    expandOnClickNode: BooleanConstructor;
    expandParent: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<import("./type").TdTreeProps["expanded"]>;
        default: import("./type").TdTreeProps["expanded"];
    };
    defaultExpanded: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultExpanded"]>;
        default: () => import("./type").TdTreeProps["defaultExpanded"];
    };
    filter: {
        type: import("vue").PropType<import("./type").TdTreeProps["filter"]>;
    };
    height: {
        type: import("vue").PropType<import("./type").TdTreeProps["height"]>;
    };
    hover: BooleanConstructor;
    icon: {
        type: import("vue").PropType<import("./type").TdTreeProps["icon"]>;
        default: import("./type").TdTreeProps["icon"];
    };
    keys: {
        type: import("vue").PropType<import("./type").TdTreeProps["keys"]>;
    };
    label: {
        type: import("vue").PropType<import("./type").TdTreeProps["label"]>;
        default: import("./type").TdTreeProps["label"];
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    line: {
        type: import("vue").PropType<import("./type").TdTreeProps["line"]>;
        default: import("./type").TdTreeProps["line"];
    };
    load: {
        type: import("vue").PropType<import("./type").TdTreeProps["load"]>;
    };
    maxHeight: {
        type: import("vue").PropType<import("./type").TdTreeProps["maxHeight"]>;
    };
    operations: {
        type: import("vue").PropType<import("./type").TdTreeProps["operations"]>;
    };
    scroll: {
        type: import("vue").PropType<import("./type").TdTreeProps["scroll"]>;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<import("./type").TdTreeProps["value"]>;
        default: import("./type").TdTreeProps["value"];
    };
    modelValue: {
        type: import("vue").PropType<import("./type").TdTreeProps["value"]>;
        default: import("./type").TdTreeProps["value"];
    };
    defaultValue: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultValue"]>;
        default: () => import("./type").TdTreeProps["defaultValue"];
    };
    valueMode: {
        type: import("vue").PropType<import("./type").TdTreeProps["valueMode"]>;
        default: import("./type").TdTreeProps["valueMode"];
        validator(val: import("./type").TdTreeProps["valueMode"]): boolean;
    };
    onActive: import("vue").PropType<import("./type").TdTreeProps["onActive"]>;
    onChange: import("vue").PropType<import("./type").TdTreeProps["onChange"]>;
    onClick: import("vue").PropType<import("./type").TdTreeProps["onClick"]>;
    onDragEnd: import("vue").PropType<import("./type").TdTreeProps["onDragEnd"]>;
    onDragLeave: import("vue").PropType<import("./type").TdTreeProps["onDragLeave"]>;
    onDragOver: import("vue").PropType<import("./type").TdTreeProps["onDragOver"]>;
    onDragStart: import("vue").PropType<import("./type").TdTreeProps["onDragStart"]>;
    onDrop: import("vue").PropType<import("./type").TdTreeProps["onDrop"]>;
    onExpand: import("vue").PropType<import("./type").TdTreeProps["onExpand"]>;
    onLoad: import("vue").PropType<import("./type").TdTreeProps["onLoad"]>;
    onScroll: import("vue").PropType<import("./type").TdTreeProps["onScroll"]>;
}, {
    t: <T>(pattern: T, ...args: any[]) => any;
    global: import("vue").ComputedRef<{} & (import("..").TreeConfig | ({
        readonly folderIcon: any;
    } & {
        readonly empty: "暂无数据";
    } & import("..").TreeConfig))>;
    classPrefix: import("vue").ComputedRef<string>;
    componentName: import("vue").ComputedRef<string>;
    state: import("./types").TypeTreeState;
    store: import("@common/js/tree/tree-store").TreeStore;
    treeClasses: import("vue").ComputedRef<string[]>;
    treeContentRef: import("./utils/adapt").TypeRef<HTMLDivElement>;
    renderTNodeJSX: (name: string, options?: import("packages/shared/utils").OptionsType) => any;
    rebuild: (list: import("./types").TreeProps["data"]) => void;
    updateStoreConfig: () => void;
    setActived: (item: import("./types").TypeTargetNode, isActived: boolean) => import("@common/js/tree/types").TreeNodeValue[];
    setExpanded: (item: import("./types").TypeTargetNode, isExpanded: boolean) => TreeNodeValue[];
    setChecked: (item: import("./types").TypeTargetNode, isChecked: boolean, ctx: {
        e: Event;
    }) => TreeNodeValue[];
    renderTreeNodes: (h: TypeCreateElement) => import("./utils/adapt").TypeVNode[];
    nodesEmpty: import("vue").Ref<boolean>;
    isScrolling: import("./utils/adapt").TypeRef<boolean>;
    onInnerVirtualScroll: (e: WheelEvent) => void;
    treeContentStyles: import("vue").ComputedRef<import("..").Styles>;
    scrollStyles: import("vue").ComputedRef<import("..").Styles>;
    cursorStyles: import("vue").ComputedRef<import("..").Styles>;
    virtualConfig: {
        visibleData: import("vue").Ref<any[]>;
        translateY: import("vue").Ref<number>;
        scrollHeight: import("vue").Ref<number>;
        isVirtualScroll: import("vue").ComputedRef<boolean>;
        handleScroll: () => void;
        handleRowMounted: (rowData: any) => void;
        scrollToElement: (p: import("@tdesign/shared-hooks").ScrollToElementParams) => void;
    };
    scrollToElement: (params: import("..").ComponentScrollToElementParams) => void;
    scrollTo: (params: import("..").ComponentScrollToElementParams) => void;
}, unknown, {}, {
    refresh(): void;
    setItem(value: TreeNodeValue, options: TreeNodeState): void;
    getItem(value: TreeNodeValue): TypeTreeNodeModel;
    getItems(value?: TreeNodeValue): TypeTreeNodeModel[];
    appendTo(para?: TreeNodeValue, item?: TypeTreeOptionData | TypeTreeOptionData[]): void;
    insertBefore(value: TreeNodeValue, item: TypeTreeOptionData): void;
    insertAfter(value: TreeNodeValue, item: TypeTreeOptionData): void;
    remove(value?: TreeNodeValue): void;
    getIndex(value: TreeNodeValue): number;
    getParent(value: TreeNodeValue): TypeTreeNodeModel;
    getParents(value: TreeNodeValue): TypeTreeNodeModel[];
    getPath(value: TreeNodeValue): TypeTreeNodeModel[];
    getTreeData(value?: TreeNodeValue): TypeTreeOptionData[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    activable: BooleanConstructor;
    activeMultiple: BooleanConstructor;
    actived: {
        type: import("vue").PropType<import("./type").TdTreeProps["actived"]>;
        default: import("./type").TdTreeProps["actived"];
    };
    defaultActived: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultActived"]>;
    };
    allowDrop: {
        type: import("vue").PropType<import("./type").TdTreeProps["allowDrop"]>;
    };
    allowFoldNodeOnFilter: BooleanConstructor;
    checkProps: {
        type: import("vue").PropType<import("./type").TdTreeProps["checkProps"]>;
    };
    checkStrictly: BooleanConstructor;
    checkable: BooleanConstructor;
    data: {
        type: import("vue").PropType<import("./type").TdTreeProps["data"]>;
        default: () => import("./type").TdTreeProps["data"];
    };
    disableCheck: {
        type: import("vue").PropType<import("./type").TdTreeProps["disableCheck"]>;
        default: import("./type").TdTreeProps["disableCheck"];
    };
    disabled: BooleanConstructor;
    draggable: BooleanConstructor;
    empty: {
        type: import("vue").PropType<import("./type").TdTreeProps["empty"]>;
        default: import("./type").TdTreeProps["empty"];
    };
    expandAll: BooleanConstructor;
    expandLevel: {
        type: NumberConstructor;
        default: number;
    };
    expandMutex: BooleanConstructor;
    expandOnClickNode: BooleanConstructor;
    expandParent: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<import("./type").TdTreeProps["expanded"]>;
        default: import("./type").TdTreeProps["expanded"];
    };
    defaultExpanded: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultExpanded"]>;
        default: () => import("./type").TdTreeProps["defaultExpanded"];
    };
    filter: {
        type: import("vue").PropType<import("./type").TdTreeProps["filter"]>;
    };
    height: {
        type: import("vue").PropType<import("./type").TdTreeProps["height"]>;
    };
    hover: BooleanConstructor;
    icon: {
        type: import("vue").PropType<import("./type").TdTreeProps["icon"]>;
        default: import("./type").TdTreeProps["icon"];
    };
    keys: {
        type: import("vue").PropType<import("./type").TdTreeProps["keys"]>;
    };
    label: {
        type: import("vue").PropType<import("./type").TdTreeProps["label"]>;
        default: import("./type").TdTreeProps["label"];
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    line: {
        type: import("vue").PropType<import("./type").TdTreeProps["line"]>;
        default: import("./type").TdTreeProps["line"];
    };
    load: {
        type: import("vue").PropType<import("./type").TdTreeProps["load"]>;
    };
    maxHeight: {
        type: import("vue").PropType<import("./type").TdTreeProps["maxHeight"]>;
    };
    operations: {
        type: import("vue").PropType<import("./type").TdTreeProps["operations"]>;
    };
    scroll: {
        type: import("vue").PropType<import("./type").TdTreeProps["scroll"]>;
    };
    transition: {
        type: BooleanConstructor;
        default: boolean;
    };
    value: {
        type: import("vue").PropType<import("./type").TdTreeProps["value"]>;
        default: import("./type").TdTreeProps["value"];
    };
    modelValue: {
        type: import("vue").PropType<import("./type").TdTreeProps["value"]>;
        default: import("./type").TdTreeProps["value"];
    };
    defaultValue: {
        type: import("vue").PropType<import("./type").TdTreeProps["defaultValue"]>;
        default: () => import("./type").TdTreeProps["defaultValue"];
    };
    valueMode: {
        type: import("vue").PropType<import("./type").TdTreeProps["valueMode"]>;
        default: import("./type").TdTreeProps["valueMode"];
        validator(val: import("./type").TdTreeProps["valueMode"]): boolean;
    };
    onActive: import("vue").PropType<import("./type").TdTreeProps["onActive"]>;
    onChange: import("vue").PropType<import("./type").TdTreeProps["onChange"]>;
    onClick: import("vue").PropType<import("./type").TdTreeProps["onClick"]>;
    onDragEnd: import("vue").PropType<import("./type").TdTreeProps["onDragEnd"]>;
    onDragLeave: import("vue").PropType<import("./type").TdTreeProps["onDragLeave"]>;
    onDragOver: import("vue").PropType<import("./type").TdTreeProps["onDragOver"]>;
    onDragStart: import("vue").PropType<import("./type").TdTreeProps["onDragStart"]>;
    onDrop: import("vue").PropType<import("./type").TdTreeProps["onDrop"]>;
    onExpand: import("vue").PropType<import("./type").TdTreeProps["onExpand"]>;
    onLoad: import("vue").PropType<import("./type").TdTreeProps["onLoad"]>;
    onScroll: import("vue").PropType<import("./type").TdTreeProps["onScroll"]>;
}>>, {
    disabled: boolean;
    data: import("..").TreeOptionData[];
    value: TreeNodeValue[];
    empty: string | ((h: typeof import("vue").h) => import("..").TNodeReturnValue);
    icon: boolean | ((h: typeof import("vue").h, props: import("./type").TreeNodeModel<import("..").TreeOptionData>) => import("..").TNodeReturnValue);
    label: string | boolean | ((h: typeof import("vue").h, props: import("./type").TreeNodeModel<import("..").TreeOptionData>) => import("..").TNodeReturnValue);
    line: boolean | ((h: typeof import("vue").h) => import("..").TNodeReturnValue);
    expanded: TreeNodeValue[];
    checkable: boolean;
    draggable: boolean;
    expandMutex: boolean;
    actived: TreeNodeValue[];
    activable: boolean;
    expandAll: boolean;
    expandLevel: number;
    expandParent: boolean;
    activeMultiple: boolean;
    checkStrictly: boolean;
    disableCheck: boolean | ((node: import("./type").TreeNodeModel<import("..").TreeOptionData>) => boolean);
    lazy: boolean;
    valueMode: "all" | "parentFirst" | "onlyLeaf";
    allowFoldNodeOnFilter: boolean;
    defaultValue: TreeNodeValue[];
    transition: boolean;
    modelValue: TreeNodeValue[];
    hover: boolean;
    defaultExpanded: TreeNodeValue[];
    expandOnClickNode: boolean;
}, {}>;
export default _default;
