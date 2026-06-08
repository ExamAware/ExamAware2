import { h } from 'vue';
import { ActiveRowActionContext, PrimaryTableCellParams, PrimaryTableCol, TableRowData, TdPrimaryTableProps } from '../type';
import { TableClassName } from './useClassName';
export default function useRowSelect(props: TdPrimaryTableProps, tableSelectedClasses: TableClassName['tableSelectedClasses']): {
    selectColumn: import("vue").ComputedRef<PrimaryTableCol<TableRowData>>;
    showRowSelect: import("vue").ComputedRef<boolean>;
    selectedRowClassNames: import("vue").Ref<any>;
    currentPaginateData: import("vue").Ref<{
        [x: string]: any;
        children?: any[];
    }[]>;
    setTSelectedRowKeys: import("@tdesign/shared-hooks").ChangeHandler<(string | number)[], [options: import("..").SelectOptions<TableRowData>]>;
    formatToRowSelectColumn: (col: PrimaryTableCol) => PrimaryTableCol<TableRowData> | {
        width: string | number;
        className: (string | {
            [className: string]: any;
        } | ((context: import("..").CellData<TableRowData>) => import("../..").ClassName) | import("..").TableColumnClassName<TableRowData>[])[];
        cell: (_: typeof h, p: PrimaryTableCellParams<TableRowData>) => JSX.Element;
        title: string | ((h: typeof import("vue").h, props: {
            col: PrimaryTableCol;
            colIndex: number;
        }) => import("../..").TNodeReturnValue);
        checkProps?: import("..").CheckProps<TableRowData>;
        children?: PrimaryTableCol<TableRowData>[];
        colKey?: string;
        disabled?: (options: {
            row: TableRowData;
            rowIndex: number;
        }) => boolean;
        edit?: import("..").TableEditableCellConfig<TableRowData>;
        filter?: import("..").TableColumnFilter;
        render?: (h: typeof import("vue").h, props: import("..").PrimaryTableRenderParams<TableRowData>) => import("../..").TNodeReturnValue;
        sortType?: import("..").SortType;
        sorter?: boolean | import("..").SorterFun<TableRowData>;
        type?: "single" | "multiple";
        resize?: import("..").TableColumnResizeConfig;
        fixed?: "left" | "right";
        minWidth?: string | number;
        align?: "left" | "right" | "center";
        attrs?: import("..").BaseTableColumnAttributes<TableRowData>;
        ellipsis?: boolean | import("../..").TdTooltipProps | ((h: typeof import("vue").h, props: import("..").BaseTableCellParams<TableRowData>) => import("../..").TNodeReturnValue) | {
            props: import("../..").TooltipProps;
            content: (h: typeof import("vue").h, props: import("..").BaseTableCellParams<TableRowData>) => import("../..").TNodeReturnValue;
        };
        stopPropagation?: boolean;
        resizable?: boolean;
        colspan?: number;
        ellipsisTitle?: boolean | import("../..").TdTooltipProps | ((h: typeof import("vue").h, props: import("..").BaseTableColParams<TableRowData>) => import("../..").TNodeReturnValue) | {
            props: import("../..").TooltipProps;
            content: (h: typeof import("vue").h, props: import("..").BaseTableColParams<TableRowData>) => import("../..").TNodeReturnValue;
        };
        foot?: string | import("../..").TNode<{
            col: import("..").BaseTableCol;
            colIndex: number;
        }>;
        thClassName?: import("..").TableColumnClassName<TableRowData> | import("..").TableColumnClassName<TableRowData>[];
    };
    onInnerSelectRowClick: (context: import("..").RowEventContext<TableRowData>) => void;
    handleRowSelectWithAreaSelection: ({ activeRowList, action }: ActiveRowActionContext<TableRowData>) => void;
};
