import { InjectionKey } from 'vue';
import { FormItemValidateResult } from '../form-item';
import { AllValidateResult, Data, FormItemValidateMessage, FormRule, TdFormItemProps, TdFormProps, ValidateResultType, ValidateTriggerType } from '../type';
import { useTNodeJSX } from '@tdesign/shared-hooks';
export declare const FORM_CONTROL_COMPONENTS: string[];
export declare const useCLASSNAMES: () => import("vue").ComputedRef<{
    form: string;
    label: string;
    labelTop: string;
    inline: string;
    formItem: string;
    formItemWithHelp: string;
    formItemWithExtra: string;
    controls: string;
    controlsContent: string;
    status: string;
    extra: string;
    help: string;
    success: string;
    successBorder: string;
    error: string;
    warning: string;
}>;
export declare const enum ValidateStatus {
    TO_BE_VALIDATED = "not",
    SUCCESS = "success",
    FAIL = "fail"
}
export type ErrorListType = {
    result: false;
    message: string;
    type: 'error' | 'warning';
} | ValidateResultType;
export type SuccessListType = {
    result: true;
    message: string;
    type: 'success';
} | ValidateResultType;
export interface AnalysisValidateResult {
    successList?: SuccessListType[];
    errorList?: ErrorListType[];
    rules: FormRule[];
    resultList: AllValidateResult[];
    allowSetValue: boolean;
}
export interface FormItemContext {
    name: TdFormItemProps['name'];
    resetHandler: () => void;
    resetField: (resetType?: 'initial' | 'empty') => Promise<void>;
    validate: <T extends Data = Data>(trigger: ValidateTriggerType, showErrorMessage?: boolean) => Promise<FormItemValidateResult<T>>;
    validateOnly: <T = Data>(trigger: ValidateTriggerType) => Promise<FormItemValidateResult<T>>;
    setValidateMessage: (validateMessage: FormItemValidateMessage[]) => void;
}
export declare const FormInjectionKey: InjectionKey<{
    showErrorMessage: TdFormProps['showErrorMessage'];
    labelWidth: TdFormProps['labelWidth'];
    labelAlign: TdFormProps['labelAlign'];
    data: TdFormProps['data'];
    colon: TdFormProps['colon'];
    requiredMark: TdFormProps['requiredMark'];
    requiredMarkPosition: TdFormProps['requiredMarkPosition'];
    rules: TdFormProps['rules'];
    errorMessage: TdFormProps['errorMessage'];
    resetType: TdFormProps['resetType'];
    children: FormItemContext[];
    renderContent: ReturnType<typeof useTNodeJSX>;
}>;
export declare const FormItemInjectionKey: InjectionKey<{
    handleBlur: () => Promise<void>;
}>;
