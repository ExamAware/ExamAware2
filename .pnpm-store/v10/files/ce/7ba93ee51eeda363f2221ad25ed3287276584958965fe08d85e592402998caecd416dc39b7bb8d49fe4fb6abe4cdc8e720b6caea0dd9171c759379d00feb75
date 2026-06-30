import { SetupContext } from 'vue';
import { TdPrimaryTableProps, PrimaryTableCol, TableRowData } from '../type';
export default function useFilter(props: TdPrimaryTableProps, context: SetupContext): {
    hasEmptyCondition: import("vue").ComputedRef<boolean>;
    isTableOverflowHidden: import("vue").Ref<boolean>;
    renderFilterIcon: ({ col, colIndex }: {
        col: PrimaryTableCol<TableRowData>;
        colIndex: number;
    }) => JSX.Element;
    renderFirstFilterRow: () => JSX.Element;
    setFilterPrimaryTableRef: (primaryTableElement: any) => void;
};
