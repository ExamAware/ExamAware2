import { PropType } from 'vue';
import { PopupProps } from '../../popup';
import { PrimaryTableCol, FilterValue, TdPrimaryTableProps } from '../type';
import type { AttachNode } from '../../common';
import type { TableConfig } from '../../config-provider';
export interface TableFilterControllerProps {
    locale: TableConfig;
    tFilterValue: FilterValue;
    innerFilterValue: FilterValue;
    tableFilterClasses: {
        filterable: string;
        popup: string;
        icon: string;
        popupContent: string;
        result: string;
        inner: string;
        bottomButtons: string;
        contentInner: string;
        iconWrap: string;
    };
    isFocusClass: string;
    column: PrimaryTableCol;
    colIndex: number;
    primaryTableElement: any;
    popupProps: PopupProps;
    attach?: AttachNode;
    onVisibleChange: (val: boolean) => void;
    filterIcon?: TdPrimaryTableProps['filterIcon'];
}
declare const _default: import("vue").DefineComponent<{
    locale: PropType<TableFilterControllerProps["locale"]>;
    column: PropType<TableFilterControllerProps["column"]>;
    colIndex: NumberConstructor;
    tFilterValue: PropType<TableFilterControllerProps["tFilterValue"]>;
    innerFilterValue: PropType<TableFilterControllerProps["innerFilterValue"]>;
    tableFilterClasses: PropType<TableFilterControllerProps["tableFilterClasses"]>;
    isFocusClass: StringConstructor;
    primaryTableElement: {};
    popupProps: PropType<TableFilterControllerProps["popupProps"]>;
    attach: PropType<TableFilterControllerProps["attach"]>;
    onVisibleChange: PropType<TableFilterControllerProps["onVisibleChange"]>;
    filterIcon: PropType<TableFilterControllerProps["filterIcon"]>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "confirm" | "inner-filter-change")[], "reset" | "confirm" | "inner-filter-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    locale: PropType<TableFilterControllerProps["locale"]>;
    column: PropType<TableFilterControllerProps["column"]>;
    colIndex: NumberConstructor;
    tFilterValue: PropType<TableFilterControllerProps["tFilterValue"]>;
    innerFilterValue: PropType<TableFilterControllerProps["innerFilterValue"]>;
    tableFilterClasses: PropType<TableFilterControllerProps["tableFilterClasses"]>;
    isFocusClass: StringConstructor;
    primaryTableElement: {};
    popupProps: PropType<TableFilterControllerProps["popupProps"]>;
    attach: PropType<TableFilterControllerProps["attach"]>;
    onVisibleChange: PropType<TableFilterControllerProps["onVisibleChange"]>;
    filterIcon: PropType<TableFilterControllerProps["filterIcon"]>;
}>> & {
    onReset?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    "onInner-filter-change"?: (...args: any[]) => any;
}, {}, {}>;
export default _default;
