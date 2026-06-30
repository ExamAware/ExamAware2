import { PrimaryTableProps } from '../types';
import { PrimaryTableRowEditContext, TableRowData, TableErrorListMap, ErrorListObjectType, PrimaryTableCellParams } from '../type';
import { OnEditableChangeContext } from '../components/editable-cell';
export interface TablePromiseErrorData {
    errors: ErrorListObjectType<TableRowData>[];
    errorMap: TableErrorListMap;
}
export default function useRowEdit(props: PrimaryTableProps): {
    editedFormData: import("vue").Ref<{
        [rowValue: string]: {
            [colKey: string]: any;
        };
    }>;
    errorListMap: import("vue").Ref<TableErrorListMap>;
    editableKeysMap: import("vue").ComputedRef<{
        [key: string]: boolean;
        [key: number]: boolean;
    }>;
    validateTableData: () => Promise<{
        result: TableErrorListMap;
    }>;
    validateTableCellData: () => Promise<{
        result: TableErrorListMap;
    }>;
    validateRowData: (rowValue: any) => Promise<{
        trigger: import("..").TableValidateTrigger;
        result: ErrorListObjectType<TableRowData>[];
    }>;
    onRuleChange: (context: PrimaryTableRowEditContext<TableRowData>) => void;
    clearValidateData: () => void;
    onUpdateEditedCell: (rowValue: any, lastRowData: TableRowData, data: {
        [key: string]: any;
    }) => void;
    getEditRowData: ({ row, col }: PrimaryTableCellParams<TableRowData>) => {
        [x: string]: any;
    };
    onPrimaryTableCellEditChange: (params: OnEditableChangeContext<TableRowData>) => void;
};
