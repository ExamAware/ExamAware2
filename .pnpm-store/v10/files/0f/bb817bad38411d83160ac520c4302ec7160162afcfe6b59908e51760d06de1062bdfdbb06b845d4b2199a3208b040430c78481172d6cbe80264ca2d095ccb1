import { CellData, RowClassNameParams, TableColumnClassName, TableRowData, TdBaseTableProps } from '../type';
import { ClassName, HTMLElementAttributes } from '../../common';
import { AffixProps } from '../../affix';
export declare function toString(obj: any): string;
export declare function debounce<T = any>(fn: Function, delay?: number): () => void;
export interface FormatRowAttributesParams {
    row: TableRowData;
    rowIndex: number;
    type: 'body' | 'foot';
}
export declare function formatRowAttributes(attributes: TdBaseTableProps['rowAttributes'], params: FormatRowAttributesParams): HTMLElementAttributes;
export declare function formatRowClassNames(rowClassNames: TdBaseTableProps['rowClassName'], params: RowClassNameParams<TableRowData>, rowKey: string): ClassName;
export declare function formatClassNames(classNames: TableColumnClassName<TableRowData> | TableColumnClassName<TableRowData>[], params: CellData<TableRowData>): any[];
export declare const INNER_PRE_NAME = "@@inner-";
export declare function getCurrentRowByKey<T extends {
    colKey?: string;
    children?: any[];
}>(columns: T[], key: string): T;
export declare function getAffixProps(mainAffixProps: boolean | AffixProps, subAffixProps?: AffixProps): import("../..").TdAffixProps;
