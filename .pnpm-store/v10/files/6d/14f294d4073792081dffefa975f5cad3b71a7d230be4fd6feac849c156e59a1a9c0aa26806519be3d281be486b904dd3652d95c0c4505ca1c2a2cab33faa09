import type { InputNumberDecimalPlaces } from './large-number';
export * from './large-number';
export type NumberType = number | string;
export declare function canAddNumber(num: NumberType, max: NumberType, largeNumber?: boolean): boolean;
export declare function canReduceNumber(num: NumberType, min: NumberType, largeNumber?: boolean): boolean;
export declare function putInRangeNumber(val: NumberType, params: {
    max?: NumberType;
    min?: NumberType;
    lastValue?: NumberType;
    largeNumber?: boolean;
}): NumberType;
export declare function positiveAdd(num1: number, num2: number): number;
export declare function positiveSubtract(num1: number, num2: number): number;
export declare function add(num1: number, num2: number): number;
export declare function subtract(num1: number, num2: number): number;
export declare function getStepValue(p: {
    op: 'add' | 'reduce';
    step: NumberType;
    max?: NumberType;
    min?: NumberType;
    lastValue?: NumberType;
    largeNumber?: boolean;
}): NumberType;
export type InputNumberErrorType = 'exceed-maximum' | 'below-minimum' | undefined;
export declare function getMaxOrMinValidateResult(p: {
    largeNumber: boolean;
    value: NumberType;
    max: NumberType;
    min: NumberType;
}): InputNumberErrorType;
export declare const specialCode: string[];
export declare function canInputNumber(number: string | undefined | null, largeNumber?: boolean): boolean;
export declare function canSetValue(number: string, lastNumber: number): boolean;
export declare function formatUnCompleteNumber(number: string, extra?: {
    decimalPlaces?: InputNumberDecimalPlaces;
    largeNumber?: boolean;
    isToFixed?: boolean;
}): number | string;
export declare function formatThousandths(number: string): string;
