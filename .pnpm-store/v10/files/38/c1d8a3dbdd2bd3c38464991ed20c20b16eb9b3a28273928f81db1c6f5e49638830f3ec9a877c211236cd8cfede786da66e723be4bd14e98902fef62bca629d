import { AffixProps } from '../affix';
import { LoadingProps } from '../loading';
import { TableConfig } from '../config-provider';
import { PaginationProps, PageInfo } from '../pagination';
import { TooltipProps } from '../tooltip';
import { CheckboxGroupValue } from '../checkbox';
import { SortableEvent, SortableOptions } from 'sortablejs';
import { CheckboxProps } from '../checkbox';
import { RadioProps } from '../radio';
import { PopupProps } from '../popup';
import { InputProps } from '../input';
import { ButtonProps } from '../button';
import { CheckboxGroupProps } from '../checkbox';
import { DialogProps } from '../dialog';
import { FormRule, AllValidateResult } from '../form';
import { TNode, OptionData, SizeEnum, ClassName, Styles, AttachNode, HTMLElementAttributes, ComponentType, TScroll, ComponentScrollToElementParams } from '../common';
export interface TdBaseTableProps<T extends TableRowData = TableRowData> {
    activeRowKeys?: Array<string | number>;
    defaultActiveRowKeys?: Array<string | number>;
    activeRowType?: 'single' | 'multiple';
    allowResizeColumnWidth?: boolean;
    attach?: AttachNode;
    bordered?: boolean;
    bottomContent?: string | TNode;
    cellEmptyContent?: string | TNode<BaseTableCellParams<T>>;
    columns?: Array<BaseTableCol<T>>;
    data?: Array<T>;
    disableDataPage?: boolean;
    disableSpaceInactiveRow?: boolean;
    empty?: string | TNode;
    firstFullRow?: string | TNode;
    fixedRows?: Array<number>;
    footData?: Array<T>;
    footerAffixProps?: Partial<AffixProps>;
    footerAffixedBottom?: boolean | Partial<AffixProps>;
    footerSummary?: string | TNode;
    headerAffixProps?: Partial<AffixProps>;
    headerAffixedTop?: boolean | Partial<AffixProps>;
    height?: string | number;
    horizontalScrollAffixedBottom?: boolean | Partial<AffixProps>;
    hover?: boolean;
    keyboardRowHover?: boolean;
    lastFullRow?: string | TNode;
    lazyLoad?: boolean;
    loading?: boolean | TNode;
    loadingProps?: Partial<LoadingProps>;
    locale?: TableConfig;
    maxHeight?: string | number;
    pagination?: PaginationProps;
    paginationAffixedBottom?: boolean | Partial<AffixProps>;
    resizable?: boolean;
    rowAttributes?: TableRowAttributes<T>;
    rowClassName?: ClassName | ((params: RowClassNameParams<T>) => ClassName);
    rowKey: string;
    rowspanAndColspan?: TableRowspanAndColspanFunc<T>;
    rowspanAndColspanInFooter?: TableRowspanAndColspanFunc<T>;
    scroll?: TScroll;
    showHeader?: boolean;
    size?: SizeEnum;
    stripe?: boolean;
    tableContentWidth?: string;
    tableLayout?: 'auto' | 'fixed';
    topContent?: string | TNode;
    verticalAlign?: 'top' | 'middle' | 'bottom';
    onActiveChange?: (activeRowKeys: Array<string | number>, context: ActiveChangeContext<T>) => void;
    onActiveRowAction?: (context: ActiveRowActionContext<T>) => void;
    onCellClick?: (context: BaseTableCellEventContext<T>) => void;
    onColumnResizeChange?: (context: {
        columnsWidth: {
            [colKey: string]: number;
        };
    }) => void;
    onPageChange?: (pageInfo: PageInfo, newDataSource: Array<T>) => void;
    onRowClick?: (context: RowEventContext<T>) => void;
    onRowDblclick?: (context: RowEventContext<T>) => void;
    onRowMousedown?: (context: RowEventContext<T>) => void;
    onRowMouseenter?: (context: RowEventContext<T>) => void;
    onRowMouseleave?: (context: RowEventContext<T>) => void;
    onRowMouseover?: (context: RowEventContext<T>) => void;
    onRowMouseup?: (context: RowEventContext<T>) => void;
    onScroll?: (params: {
        e: WheelEvent;
    }) => void;
    onScrollX?: (params: {
        e: WheelEvent;
    }) => void;
    onScrollY?: (params: {
        e: WheelEvent;
    }) => void;
}
export interface BaseTableInstanceFunctions<T extends TableRowData = TableRowData> {
    refreshTable: () => void;
    scrollColumnIntoView: (colKey: string) => void;
    scrollToElement: (params: ComponentScrollToElementParams) => void;
}
export interface BaseTableCol<T extends TableRowData = TableRowData> {
    align?: 'left' | 'right' | 'center';
    attrs?: BaseTableColumnAttributes<T>;
    cell?: string | TNode<BaseTableCellParams<T>>;
    children?: Array<BaseTableCol<T>>;
    className?: TableColumnClassName<T> | TableColumnClassName<T>[];
    colKey?: string;
    colspan?: number;
    ellipsis?: boolean | TNode<BaseTableCellParams<T>> | TooltipProps | {
        props: TooltipProps;
        content: TNode<BaseTableCellParams<T>>;
    };
    ellipsisTitle?: boolean | TNode<BaseTableColParams<T>> | TooltipProps | {
        props: TooltipProps;
        content: TNode<BaseTableColParams<T>>;
    };
    fixed?: 'left' | 'right';
    foot?: string | TNode<{
        col: BaseTableCol;
        colIndex: number;
    }>;
    minWidth?: string | number;
    render?: TNode<BaseTableRenderParams<T>>;
    resizable?: boolean;
    resize?: TableColumnResizeConfig;
    stopPropagation?: boolean;
    thClassName?: TableColumnClassName<T> | TableColumnClassName<T>[];
    title?: string | TNode<{
        col: BaseTableCol;
        colIndex: number;
    }>;
    width?: string | number;
}
export interface TdPrimaryTableProps<T extends TableRowData = TableRowData> extends Omit<TdBaseTableProps<T>, 'columns' | 'onCellClick'> {
    asyncLoading?: 'loading' | 'load-more' | TNode;
    columnController?: TableColumnController;
    columnControllerVisible?: boolean;
    defaultColumnControllerVisible?: boolean;
    columns?: Array<PrimaryTableCol<T>>;
    displayColumns?: CheckboxGroupValue;
    defaultDisplayColumns?: CheckboxGroupValue;
    dragSort?: 'row' | 'row-handler' | 'col' | 'row-handler-col' | 'drag-col';
    dragSortOptions?: SortableOptions;
    editableCellState?: EditableCellType<T>;
    editableRowKeys?: Array<string | number>;
    expandIcon?: boolean | TNode<ExpandArrowRenderParams<T>>;
    expandOnRowClick?: boolean;
    expandedRow?: TNode<TableExpandedRowParams<T>>;
    expandedRowKeys?: Array<string | number>;
    defaultExpandedRowKeys?: Array<string | number>;
    filterIcon?: TNode<{
        col: PrimaryTableCol<T>;
        colIndex: number;
    }>;
    filterRow?: string | TNode;
    filterValue?: FilterValue;
    defaultFilterValue?: FilterValue;
    hideSortTips?: boolean;
    indeterminateSelectedRowKeys?: Array<string | number>;
    multipleSort?: boolean;
    reserveSelectedRowOnPaginate?: boolean;
    rowSelectionAllowUncheck?: boolean;
    rowSelectionType?: 'single' | 'multiple';
    selectOnRowClick?: boolean;
    selectedRowKeys?: Array<string | number>;
    defaultSelectedRowKeys?: Array<string | number>;
    showSortColumnBgColor?: boolean;
    sort?: TableSort;
    defaultSort?: TableSort;
    sortIcon?: TNode;
    sortOnRowDraggable?: boolean;
    onAsyncLoadingClick?: (context: {
        status: 'loading' | 'load-more';
    }) => void;
    onCellClick?: (context: PrimaryTableCellEventContext<T>) => void;
    onChange?: (data: TableChangeData, context: TableChangeContext<T>) => void;
    onColumnChange?: (context: PrimaryTableColumnChange<T>) => void;
    onColumnControllerVisibleChange?: (visible: boolean, context: {
        trigger: 'cancel' | 'confirm';
    }) => void;
    onDataChange?: (data: Array<T>, context: TableDataChangeContext) => void;
    onDisplayColumnsChange?: (value: CheckboxGroupValue) => void;
    onDragSort?: (context: DragSortContext<T>) => void;
    onExpandChange?: (expandedRowKeys: Array<string | number>, options: ExpandOptions<T>) => void;
    onFilterChange?: (filterValue: FilterValue, context: TableFilterChangeContext<T>) => void;
    onRowEdit?: (context: PrimaryTableRowEditContext<T>) => void;
    onRowValidate?: (context: PrimaryTableRowValidateContext<T>) => void;
    onSelectChange?: (selectedRowKeys: Array<string | number>, options: SelectOptions<T>) => void;
    onSortChange?: (sort: TableSort, options: SortOptions<T>) => void;
    onValidate?: (context: PrimaryTableValidateContext) => void;
}
export interface PrimaryTableInstanceFunctions<T extends TableRowData = TableRowData> {
    clearValidateData: () => void;
    validateRowData: (rowValue: any) => Promise<{
        trigger: TableValidateTrigger;
        result: ErrorListObjectType<T>[];
    }>;
    validateTableCellData: () => Promise<{
        result: TableErrorListMap;
    }>;
    validateTableData: () => Promise<{
        result: TableErrorListMap;
    }>;
}
export interface PrimaryTableCol<T extends TableRowData = TableRowData> extends Omit<BaseTableCol, 'cell' | 'title' | 'render' | 'children'> {
    cell?: string | TNode<PrimaryTableCellParams<T>>;
    checkProps?: CheckProps<T>;
    children?: Array<PrimaryTableCol<T>>;
    colKey?: string;
    disabled?: (options: {
        row: T;
        rowIndex: number;
    }) => boolean;
    edit?: TableEditableCellConfig<T>;
    filter?: TableColumnFilter;
    render?: TNode<PrimaryTableRenderParams<T>>;
    sortType?: SortType;
    sorter?: boolean | SorterFun<T>;
    title?: string | TNode<{
        col: PrimaryTableCol;
        colIndex: number;
    }>;
    type?: 'single' | 'multiple';
}
export interface TdEnhancedTableProps<T extends TableRowData = TableRowData> extends TdPrimaryTableProps<T> {
    beforeDragSort?: (context: DragSortContext<T>) => boolean;
    expandedTreeNodes?: Array<string | number>;
    defaultExpandedTreeNodes?: Array<string | number>;
    tree?: TableTreeConfig;
    treeExpandAndFoldIcon?: TNode<{
        type: 'expand' | 'fold';
        row: T;
    }>;
    onAbnormalDragSort?: (context: TableAbnormalDragSortContext<T>) => void;
    onExpandedTreeNodesChange?: (expandedTreeNodes: Array<string | number>, options: TableTreeNodeExpandOptions<T>) => void;
    onTreeExpandChange?: (context: TableTreeExpandChangeContext<T>) => void;
}
export interface EnhancedTableInstanceFunctions<T extends TableRowData = TableRowData> {
    appendTo: (key: TableRowValue, newData: T) => void;
    expandAll: () => void;
    foldAll: () => void;
    getData: (key: TableRowValue) => TableRowState<T>;
    getTreeExpandedRow: (type: 'unique' | 'data' | 'all') => void;
    getTreeNode: () => T[];
    insertAfter: (key: TableRowValue, newData: T) => void;
    insertBefore: (key: TableRowValue, newData: T) => void;
    remove: (key: TableRowValue) => void;
    removeChildren: (key: TableRowValue) => void;
    resetData: (newData: T[]) => void;
    setData: (key: TableRowValue, newRowData: T) => void;
    swapData: (params: SwapParams<T>) => void;
    toggleExpandData: (p: {
        row: T;
        rowIndex: number;
    }) => void;
}
export interface TableRowState<T extends TableRowData = TableRowData> {
    disabled?: boolean;
    expandChildrenLength?: number;
    expanded: boolean;
    id: string | number;
    level?: number;
    parent?: TableRowState<T>;
    path?: TableRowState<T>[];
    row: T;
    rowIndex: number;
}
export interface TableColumnFilter {
    attrs?: HTMLElementAttributes;
    classNames?: ClassName;
    component?: ComponentType;
    confirmEvents?: string[];
    label?: string | TNode;
    list?: Array<OptionData>;
    popupProps?: PopupProps;
    props?: FilterProps;
    resetValue?: any;
    showConfirmAndReset?: boolean;
    style?: Styles;
    type?: FilterType;
}
export interface TableColumnController {
    buttonProps?: ButtonProps;
    checkboxProps?: CheckboxGroupProps;
    columnControllerBottomContent?: TNode;
    columnControllerTopContent?: TNode;
    dialogProps?: DialogProps;
    displayType?: 'fixed-width' | 'auto-width';
    fields?: string[];
    groupColumns?: TableColumnGroup[];
    hideTriggerButton?: boolean;
    placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
export interface TableEditableCellConfig<T extends TableRowData = TableRowData> {
    abortEditOnEvent?: string[];
    component?: ComponentType;
    defaultEditable?: boolean;
    keepEditMode?: boolean;
    on?: (context: TableEditableCellPropsParams<T>) => {
        [eventName: string]: Function;
    };
    onEdited?: (context: PrimaryTableOnEditedContext<T>) => void;
    props?: TableEditableCellProps<T>;
    rules?: TableEditableCellRules<T>;
    showEditIcon?: boolean;
    validateTrigger?: 'exit' | 'change';
}
export interface TableTreeConfig {
    checkStrictly?: boolean;
    childrenKey?: string;
    defaultExpandAll?: boolean;
    expandTreeNodeOnClick?: boolean;
    indent?: number;
    treeNodeColumnIndex?: number;
}
export type TableRowAttributes<T> = HTMLElementAttributes | ((params: {
    row: T;
    rowIndex: number;
    type: 'body' | 'foot';
}) => HTMLElementAttributes) | Array<TableRowAttributes<T>>;
export interface RowClassNameParams<T> {
    row: T;
    rowIndex: number;
    rowKey?: string;
    type?: 'body' | 'foot';
}
export type TableRowspanAndColspanFunc<T> = (params: BaseTableCellParams<T>) => RowspanColspan;
export interface RowspanColspan {
    colspan?: number;
    rowspan?: number;
}
export interface ActiveChangeContext<T> {
    activeRowList: Array<{
        row: T;
        rowIndex: number;
    }>;
    currentRowData?: T;
    type: 'active' | 'inactive';
}
export interface ActiveRowActionContext<T> {
    action: ActiveRowActionType;
    activeRowList: Array<{
        row: T;
        rowIndex: number;
    }>;
}
export type ActiveRowActionType = 'shift-area-selection' | 'space-one-selection' | 'clear' | 'select-all';
export interface BaseTableCellEventContext<T> {
    row: T;
    col: BaseTableCol;
    rowIndex: number;
    colIndex: number;
    e: MouseEvent;
}
export interface RowEventContext<T> {
    row: T;
    index: number;
    e: MouseEvent | KeyboardEvent;
}
export interface TableRowData {
    [key: string]: any;
    children?: TableRowData[];
}
export type BaseTableColumnAttributes<T> = {
    [key: string]: any;
} | ((context: CellData<T>) => {
    [key: string]: any;
});
export interface BaseTableCellParams<T> {
    row: T;
    rowIndex: number;
    col: BaseTableCol<T>;
    colIndex: number;
}
export type TableColumnClassName<T> = ClassName | ((context: CellData<T>) => ClassName);
export interface CellData<T> extends BaseTableCellParams<T> {
    type: 'th' | 'td';
}
export interface BaseTableColParams<T> {
    col: BaseTableCol<T>;
    colIndex: number;
}
export interface BaseTableRenderParams<T> extends BaseTableCellParams<T> {
    type: RenderType;
}
export type RenderType = 'cell' | 'title';
export interface TableColumnResizeConfig {
    minWidth: number;
    maxWidth: number;
}
export type DataType = TableRowData;
export type EditableCellType<T> = (params: PrimaryTableCellParams<T>) => boolean;
export interface ExpandArrowRenderParams<T> {
    row: T;
    index: number;
}
export interface TableExpandedRowParams<T> {
    row: T;
    index: number;
    columns: PrimaryTableCol<T>[] | BaseTableCol<T>[];
}
export type FilterValue = {
    [key: string]: any;
};
export type TableSort = SortInfo | Array<SortInfo>;
export interface SortInfo {
    sortBy: string;
    descending: boolean;
}
export interface PrimaryTableCellEventContext<T> {
    row: T;
    col: PrimaryTableCol;
    rowIndex: number;
    colIndex: number;
    e: MouseEvent;
}
export interface TableChangeData {
    sorter?: TableSort;
    filter?: FilterValue;
    pagination?: PaginationProps;
}
export interface TableChangeContext<T> {
    trigger: TableChangeTrigger;
    currentData?: T[];
}
export type TableChangeTrigger = 'filter' | 'sorter' | 'pagination';
export interface PrimaryTableColumnChange<T> {
    columns?: CheckboxGroupValue;
    currentColumn?: PrimaryTableCol<T>;
    type?: 'check' | 'uncheck';
    e?: Event;
}
export interface TableDataChangeContext {
    trigger: 'sort';
}
export interface DragSortContext<T> {
    currentIndex: number;
    current: T;
    targetIndex: number;
    target: T;
    data: T[];
    newData: T[];
    currentData?: T[];
    e: SortableEvent;
    sort: 'row' | 'col';
}
export interface ExpandOptions<T> {
    expandedRowData: Array<T>;
    currentRowData: T;
}
export interface TableFilterChangeContext<T> {
    col?: PrimaryTableCol<T>;
    trigger: 'filter-change' | 'confirm' | 'reset' | 'clear';
}
export type PrimaryTableRowEditContext<T> = PrimaryTableCellParams<T> & {
    value: any;
    editedRow: T;
};
export type PrimaryTableRowValidateContext<T> = {
    result: TableRowValidateResult<T>[];
    trigger: TableValidateTrigger;
};
export type TableValidateTrigger = 'self' | 'parent';
export type TableRowValidateResult<T> = PrimaryTableCellParams<T> & {
    errorList: AllValidateResult[];
    value: any;
};
export interface SelectOptions<T> {
    selectedRowData: Array<T>;
    type: 'uncheck' | 'check';
    currentRowKey?: string;
    currentRowData?: T;
}
export interface SortOptions<T> {
    currentDataSource?: Array<T>;
    col: PrimaryTableCol;
}
export interface PrimaryTableValidateContext {
    result: TableErrorListMap;
}
export type TableErrorListMap = {
    [key: string]: AllValidateResult[];
};
export type ErrorListObjectType<T> = PrimaryTableRowEditContext<T> & {
    errorList: AllValidateResult[];
};
export interface PrimaryTableCellParams<T> {
    row: T;
    rowIndex: number;
    col: PrimaryTableCol<T>;
    colIndex: number;
}
export type CheckProps<T> = CheckboxProps | RadioProps | ((options: {
    row: T;
    rowIndex: number;
}) => CheckboxProps | RadioProps);
export interface PrimaryTableRenderParams<T> extends PrimaryTableCellParams<T> {
    type: RenderType;
}
export type SortType = 'desc' | 'asc' | 'all';
export type SorterFun<T> = (a: T, b: T) => number;
export interface TableAbnormalDragSortContext<T> {
    code: number;
    reason: string;
}
export interface TableTreeNodeExpandOptions<T> {
    row: T;
    rowIndex: number;
    rowState: TableRowState<T>;
    type: 'fold' | 'expand';
    trigger?: 'expand-fold-icon' | 'row-click' | 'default-expand-all' | 'expand-all' | 'fold-all';
}
export interface TableTreeExpandChangeContext<T> {
    row: T;
    rowIndex: number;
    rowState: TableRowState<T>;
    trigger?: 'expand-fold-icon' | 'row-click';
}
export type TableRowValue = string | number;
export interface SwapParams<T> {
    current: T;
    target: T;
    currentIndex: number;
    targetIndex: number;
}
export type FilterProps = RadioProps | CheckboxProps | InputProps | {
    [key: string]: any;
};
export type FilterType = 'input' | 'single' | 'multiple';
export interface TableColumnGroup {
    label: string;
    value?: string | number;
    columns: string[];
}
export type PrimaryTableOnEditedContext<T> = PrimaryTableCellParams<T> & {
    trigger: string;
    newRowData: T;
};
export type TableEditableCellProps<T> = TablePlainObject | ((params: TableEditableCellPropsParams<T>) => TablePlainObject);
export interface TableEditableCellPropsParams<T> extends PrimaryTableCellParams<T> {
    editedRow: T;
    updateEditedCellValue: (val: any | {
        rowValue?: string | number;
        isUpdateCurrentRow?: boolean;
        [key: string]: any;
    }) => void;
}
export interface TablePlainObject {
    [key: string]: any;
}
export type TableEditableCellRules<T> = FormRule[] | ((params: PrimaryTableCellParams<T>) => FormRule[]);
