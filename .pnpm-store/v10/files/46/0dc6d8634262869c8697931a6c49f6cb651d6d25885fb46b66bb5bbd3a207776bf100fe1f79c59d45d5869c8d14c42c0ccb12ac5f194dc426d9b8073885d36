import { ComponentPublicInstance } from 'vue';
import { TransferListOptionBase, TransferItemOption, TdTransferProps, TransferValue, DataOption } from '../types';
export declare const TRANSFER_NAME = "TTransfer";
export declare const SOURCE = "source";
export declare const TARGET = "target";
interface TreeNode {
    children?: Array<TreeNode>;
}
declare function findTopNode(vm: ComponentPublicInstance): ComponentPublicInstance;
declare function getTransferListOption<T>(prop: T | Array<T>): TransferListOptionBase<T>;
declare function getDataValues(data: Array<TransferItemOption>, filterValues: Array<TransferValue>, { isTreeMode, include, remainValue, }?: {
    isTreeMode?: boolean;
    include?: boolean;
    remainValue?: TransferValue[];
}): Array<TransferValue>;
declare function getTransferData(data: Array<DataOption>, keys: TdTransferProps['keys'], isTreeMode?: boolean): Array<TransferItemOption>;
declare function isTreeNodeValid(data: TransferItemOption, filterValues: Array<TransferValue>, needMatch: boolean): boolean;
declare function cloneTreeWithFilter(sourceTree: TransferItemOption[], targetTree: TransferItemOption[], filterValues: Array<TransferValue>, needMatch: boolean): void;
declare function filterTransferData(data: Array<TransferItemOption>, filterValues: Array<TransferValue>, needMatch?: boolean, isTreeMode?: boolean): TransferItemOption[];
declare function getLefCount(nodes: Array<TreeNode>): number;
export { findTopNode, getTransferListOption, getDataValues, getTransferData, cloneTreeWithFilter, filterTransferData, getLefCount, isTreeNodeValid, };
