import { ComputedRef } from 'vue';
import { TdInputProps } from './../type';
export interface UseLengthLimitParams {
    value: string;
    maxlength: number;
    maxcharacter: number;
    allowInputOverMax: boolean;
    status: TdInputProps['status'];
    onValidate: TdInputProps['onValidate'];
}
export declare function useLengthLimit(params: ComputedRef<UseLengthLimitParams>): {
    tStatus: ComputedRef<"error" | "" | "default" | "success" | "warning">;
    limitNumber: ComputedRef<string>;
    getValueByLimitNumber: (inputValue: string) => string;
};
