import { PropType } from 'vue';
import { TableRowData, PrimaryTableCol, PrimaryTableRowEditContext, PrimaryTableRowValidateContext, TdBaseTableProps } from '../type';
import { TableClassName } from '../hooks/useClassName';
import { AllValidateResult } from '../../form/type';
export interface OnEditableChangeContext<T> extends PrimaryTableRowEditContext<T> {
    isEdit: boolean;
    validateEdit: (trigger: 'self' | 'parent') => Promise<true | AllValidateResult[]>;
}
export interface EditableCellProps {
    rowKey: string;
    row: TableRowData;
    rowIndex: number;
    col: PrimaryTableCol<TableRowData>;
    colIndex: number;
    oldCell: PrimaryTableCol<TableRowData>['cell'];
    tableBaseClass?: TableClassName['tableBaseClass'];
    editable?: boolean;
    readonly?: boolean;
    errors?: AllValidateResult[];
    cellEmptyContent?: TdBaseTableProps['cellEmptyContent'];
    onChange?: (context: PrimaryTableRowEditContext<TableRowData>) => void;
    onValidate?: (context: PrimaryTableRowValidateContext<TableRowData>) => void;
    onRuleChange?: (context: PrimaryTableRowEditContext<TableRowData>) => void;
    onEditableChange?: (context: OnEditableChangeContext<TableRowData>) => void;
}
declare const _default: import("vue").DefineComponent<{
    row: PropType<EditableCellProps["row"]>;
    rowKey: StringConstructor;
    rowIndex: NumberConstructor;
    col: PropType<EditableCellProps["col"]>;
    colIndex: NumberConstructor;
    oldCell: PropType<EditableCellProps["oldCell"]>;
    tableBaseClass: PropType<EditableCellProps["tableBaseClass"]>;
    cellEmptyContent: PropType<EditableCellProps["cellEmptyContent"]>;
    editable: {
        type: BooleanConstructor;
        default: any;
    };
    readonly: {
        type: BooleanConstructor;
    };
    errors: {
        type: PropType<EditableCellProps["errors"]>;
        default: any;
    };
    onChange: PropType<EditableCellProps["onChange"]>;
    onValidate: PropType<EditableCellProps["onValidate"]>;
    onRuleChange: PropType<EditableCellProps["onRuleChange"]>;
    onEditableChange: PropType<EditableCellProps["onEditableChange"]>;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "update-edited-cell", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    row: PropType<EditableCellProps["row"]>;
    rowKey: StringConstructor;
    rowIndex: NumberConstructor;
    col: PropType<EditableCellProps["col"]>;
    colIndex: NumberConstructor;
    oldCell: PropType<EditableCellProps["oldCell"]>;
    tableBaseClass: PropType<EditableCellProps["tableBaseClass"]>;
    cellEmptyContent: PropType<EditableCellProps["cellEmptyContent"]>;
    editable: {
        type: BooleanConstructor;
        default: any;
    };
    readonly: {
        type: BooleanConstructor;
    };
    errors: {
        type: PropType<EditableCellProps["errors"]>;
        default: any;
    };
    onChange: PropType<EditableCellProps["onChange"]>;
    onValidate: PropType<EditableCellProps["onValidate"]>;
    onRuleChange: PropType<EditableCellProps["onRuleChange"]>;
    onEditableChange: PropType<EditableCellProps["onEditableChange"]>;
}>>, {
    readonly: boolean;
    editable: boolean;
    errors: AllValidateResult[];
}, {}>;
export default _default;
