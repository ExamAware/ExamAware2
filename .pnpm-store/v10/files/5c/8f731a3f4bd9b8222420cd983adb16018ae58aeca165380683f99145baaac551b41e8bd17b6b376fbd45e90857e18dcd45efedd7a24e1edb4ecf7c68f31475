import { IsEmailOptions } from 'validator/es/lib/isEmail';
import { IsURLOptions } from 'validator/es/lib/isURL';
import { FormResetEvent, FormSubmitEvent, TNode } from '../common';
export interface TdFormProps<FormData extends Data = Data> {
    colon?: boolean;
    data?: FormData;
    disabled?: boolean;
    errorMessage?: FormErrorMessage;
    id?: string;
    labelAlign?: 'left' | 'right' | 'top';
    labelWidth?: string | number;
    layout?: 'vertical' | 'inline';
    preventSubmitDefault?: boolean;
    readonly?: boolean;
    requiredMark?: boolean;
    requiredMarkPosition?: 'left' | 'right';
    resetType?: 'empty' | 'initial';
    rules?: FormRules<FormData>;
    scrollToFirstError?: '' | 'smooth' | 'auto';
    showErrorMessage?: boolean;
    statusIcon?: boolean | TNode<TdFormItemProps>;
    submitWithWarningMessage?: boolean;
    onReset?: (context: {
        e?: FormResetEvent;
    }) => void;
    onSubmit?: (context: SubmitContext<FormData>) => void;
    onValidate?: (result: ValidateResultContext<FormData>) => void;
}
export interface FormInstanceFunctions<FormData extends Data = Data> {
    clearValidate: (fields?: Array<keyof FormData>) => void;
    reset: (params?: FormResetParams<FormData>) => void;
    setValidateMessage: (message: FormValidateMessage<FormData>) => void;
    submit: (params?: {
        showErrorMessage?: boolean;
    }) => void;
    validate: (params?: FormValidateParams) => Promise<FormValidateResult<FormData>>;
    validateOnly: (params?: Pick<FormValidateParams, 'fields' | 'trigger'>) => Promise<FormValidateResult<FormData>>;
}
export interface TdFormItemProps {
    for?: string;
    help?: string | TNode;
    label?: string | TNode;
    labelAlign?: 'left' | 'right' | 'top';
    labelWidth?: string | number;
    name?: string;
    requiredMark?: boolean;
    rules?: Array<FormRule>;
    showErrorMessage?: boolean;
    status?: 'error' | 'warning' | 'success';
    statusIcon?: boolean | TNode;
    successBorder?: boolean;
    tips?: string | TNode;
}
export interface FormRule {
    boolean?: boolean;
    date?: boolean | IsDateOptions;
    email?: boolean | IsEmailOptions;
    enum?: Array<string>;
    idcard?: boolean;
    len?: number | boolean;
    max?: number | boolean;
    message?: string;
    min?: number | boolean;
    number?: boolean;
    pattern?: RegExp | string;
    required?: boolean;
    telnumber?: boolean;
    trigger?: ValidateTriggerType;
    type?: 'error' | 'warning';
    url?: boolean | IsURLOptions;
    validator?: CustomValidator;
    whitespace?: boolean;
}
export interface FormErrorMessage {
    boolean?: string;
    date?: string;
    enum?: string;
    idcard?: string;
    len?: string;
    max?: string;
    min?: string;
    number?: string;
    pattern?: string;
    required?: string;
    telnumber?: string;
    url?: string;
    validator?: string;
    whitespace?: string;
}
export type FormRules<T extends Data = any> = {
    [field in keyof T]?: Array<FormRule>;
};
export interface SubmitContext<T extends Data = Data> {
    e?: FormSubmitEvent;
    validateResult: FormValidateResult<T>;
    firstError?: string;
    fields?: any;
}
export type FormValidateResult<T> = boolean | ValidateResultObj<T>;
export type ValidateResultObj<T> = {
    [key in keyof T]: boolean | ValidateResultList;
};
export type ValidateResultList = Array<AllValidateResult>;
export type AllValidateResult = CustomValidateObj | ValidateResultType;
export interface ValidateResultType extends FormRule {
    result: boolean;
}
export type ValidateResult<T> = {
    [key in keyof T]: boolean | ErrorList;
};
export type ErrorList = Array<FormRule>;
export type ValidateResultContext<T extends Data> = Omit<SubmitContext<T>, 'e'>;
export interface FormResetParams<FormData> {
    type?: 'initial' | 'empty';
    fields?: Array<keyof FormData>;
}
export type FormValidateMessage<FormData> = {
    [field in keyof FormData]: FormItemValidateMessage[];
};
export interface FormItemValidateMessage {
    type: 'warning' | 'error' | 'success';
    message: string;
}
export interface FormValidateParams {
    fields?: Array<string>;
    showErrorMessage?: boolean;
    trigger?: ValidateTriggerType;
}
export type ValidateTriggerType = 'blur' | 'change' | 'submit' | 'all';
export type Data = {
    [key: string]: any;
};
export interface IsDateOptions {
    format: string;
    strictMode: boolean;
    delimiters: string[];
}
export type CustomValidator = (val: ValueType) => CustomValidateResolveType | Promise<CustomValidateResolveType>;
export type CustomValidateResolveType = boolean | CustomValidateObj;
export interface CustomValidateObj {
    result: boolean;
    message: string;
    type?: 'error' | 'warning' | 'success';
}
export type ValueType = any;
