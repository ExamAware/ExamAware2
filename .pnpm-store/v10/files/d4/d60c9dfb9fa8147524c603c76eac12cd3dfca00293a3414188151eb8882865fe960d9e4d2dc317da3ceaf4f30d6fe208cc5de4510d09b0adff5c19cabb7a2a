import { UploadFile, SizeLimitObj, FileChangeParams, FileChangeReturn, RequestMethodResponse, HandleUploadParams, SuccessContext, handleSuccessParams, UploadTriggerUploadText, ErrorContext } from './types';
export interface BeforeUploadExtra {
    sizeLimit?: number | SizeLimitObj;
    beforeUpload?: (file: UploadFile) => boolean | Promise<boolean>;
}
export type BeforeUploadPromiseList = [Promise<SizeLimitObj>, undefined | Promise<boolean>];
export declare function handleBeforeUpload(file: UploadFile, params: BeforeUploadExtra): Promise<[SizeLimitObj, boolean]>;
export interface OnErrorParams extends ErrorContext {
    formatResponse?: HandleUploadParams['formatResponse'];
}
export declare function handleError(options: OnErrorParams): {
    response: any;
    event: ProgressEvent<EventTarget>;
    files: UploadFile[];
    XMLHttpRequest: XMLHttpRequest;
};
export declare function handleSuccess(params: handleSuccessParams): {
    response: {
        [key: string]: any;
        url?: string;
    };
    event: ProgressEvent<EventTarget>;
    files: UploadFile[];
    XMLHttpRequest: XMLHttpRequest;
};
export type UploadRequestReturn = {
    status?: 'fail' | 'success';
    failedFiles?: UploadFile[];
    data?: SuccessContext;
    list?: UploadRequestReturn[];
};
export declare function handleRequestMethodResponse(res: RequestMethodResponse): boolean;
export declare function uploadOneRequest(params: HandleUploadParams): Promise<UploadRequestReturn>;
export declare function upload(params: HandleUploadParams): Promise<UploadRequestReturn>;
export declare function formatToUploadFile(files: File[], format: FileChangeParams['format'], status?: UploadFile['status'], percent?: number): UploadFile[];
export declare function validateFile(params: FileChangeParams): Promise<FileChangeReturn>;
export declare function getFilesAndErrors(fileValidateList: FileChangeReturn[], getError: (p: {
    [key: string]: any;
}) => string): {
    sizeLimitErrors: FileChangeReturn[];
    beforeUploadErrorFiles: UploadFile[];
    toFiles: UploadFile[];
};
export declare function getTriggerTextField(p: {
    status: 'success' | 'fail' | 'progress' | 'waiting';
    multiple: boolean;
    autoUpload: boolean;
    isBatchUpload: boolean;
}): keyof UploadTriggerUploadText;
export interface GetDisplayFilesParams {
    multiple: boolean;
    autoUpload: boolean;
    isBatchUpload: boolean;
    uploadValue: UploadFile[];
    toUploadFiles: UploadFile[];
}
export declare function getDisplayFiles(params: GetDisplayFilesParams): UploadFile[];
