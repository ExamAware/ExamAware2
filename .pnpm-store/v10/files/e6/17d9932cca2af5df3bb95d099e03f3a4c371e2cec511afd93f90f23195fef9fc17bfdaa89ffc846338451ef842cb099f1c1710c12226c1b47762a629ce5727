export type UploadProgressType = 'real' | 'mock';
export type SizeUnit = 'B' | 'KB' | 'MB' | 'GB';
export interface UploadFile {
    lastModified?: number;
    name?: string;
    percent?: number;
    raw?: File;
    response?: {
        [key: string]: any;
    };
    size?: number;
    status?: 'success' | 'fail' | 'progress' | 'waiting';
    type?: string;
    uploadTime?: string;
    url?: string;
}
export interface RequestMethodResponse {
    status: 'success' | 'fail';
    error?: string;
    response: {
        url?: string;
        [key: string]: any;
    };
}
export interface ProgressContext {
    e?: ProgressEvent;
    file?: UploadFile;
    percent: number;
    type: UploadProgressType;
}
export interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}
export interface InnerProgressContext {
    event?: ProgressEvent;
    file?: UploadFile;
    files?: UploadFile[];
    percent: number;
    type: ProgressContext['type'];
    XMLHttpRequest?: XMLHttpRequest;
}
export interface ErrorContext {
    event?: ProgressEvent;
    file?: UploadFile;
    files?: UploadFile[];
    response?: any;
    XMLHttpRequest?: XMLHttpRequest;
}
export interface SuccessContext {
    event?: ProgressEvent;
    file?: UploadFile;
    files?: UploadFile[];
    XMLHttpRequest?: XMLHttpRequest;
    response?: RequestMethodResponse['response'];
}
export interface UploadRemoveOptions {
    e: MouseEvent;
    file?: UploadFile;
    files?: UploadFile[];
    index: number;
}
export interface FlowRemoveContext {
    e: MouseEvent;
    index: number;
    file?: UploadFile;
}
export interface XhrOptions {
    method?: string;
    action: string;
    withCredentials: boolean;
    headers: {
        [key: string]: string;
    };
    data: {
        [key: string]: any;
    } | Function;
    file?: UploadFile;
    files?: UploadFile[];
    useMockProgress?: boolean;
    mockProgressDuration?: number;
    name: string;
    formatRequest?: (requestData: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    onError: (context: ErrorContext) => void;
    onSuccess: (context: SuccessContext) => void;
    onProgress: (context: InnerProgressContext) => void;
}
export interface TdUploadFile extends UploadFile {
    uid?: string;
    xhr?: XMLHttpRequest;
}
export interface FormatResponseContext {
    file: UploadFile;
    currentFiles?: UploadFile[];
}
export interface SizeLimitObj {
    size: number;
    unit: SizeUnit;
    message?: string;
}
export interface FileChangeParams {
    files: File[];
    uploadValue: UploadFile[];
    allowUploadDuplicateFile?: boolean;
    capture?: string;
    max?: number;
    sizeLimit?: number | SizeLimitObj;
    isBatchUpload?: boolean;
    autoUpload?: boolean;
    format?: (file: File) => UploadFile;
    beforeUpload?: (file: UploadFile) => boolean | Promise<boolean>;
    beforeAllFilesUpload?: (file: UploadFile[]) => boolean | Promise<boolean>;
}
export interface FileChangeReturn {
    file?: UploadFile;
    files?: UploadFile[];
    fileValidateList?: FileChangeReturn[];
    lengthOverLimit?: boolean;
    hasSameNameFile?: boolean;
    validateResult?: {
        type: 'BEFORE_ALL_FILES_UPLOAD' | 'FILE_OVER_SIZE_LIMIT' | 'CUSTOM_BEFORE_UPLOAD' | 'FILTER_FILE_SAME_NAME';
        extra?: {
            [key: string]: any;
        };
    };
}
export interface OnResponseErrorContext {
    response: any;
    error?: string;
    event?: ProgressEvent<EventTarget>;
    files: UploadFile[];
}
export type ResponseType = {
    error?: string;
    url?: string;
    status?: 'fail' | 'success';
    files?: UploadFile[];
} & Record<string, any>;
export interface HandleUploadParams {
    uploadedFiles: UploadFile[];
    toUploadFiles: UploadFile[];
    data?: Record<string, any> | ((file: File) => Record<string, any>);
    isBatchUpload?: boolean;
    autoUpload?: boolean;
    uploadAllFilesInOneRequest?: boolean;
    action?: string;
    name?: string;
    useMockProgress?: boolean;
    mockProgressDuration?: number;
    multiple?: boolean;
    headers?: {
        [key: string]: string;
    };
    withCredentials?: boolean;
    method?: 'POST' | 'GET' | 'PUT' | 'OPTIONS' | 'PATCH' | 'post' | 'get' | 'put' | 'options' | 'patch';
    formatRequest?: (requestData: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    formatResponse?: (response: any, context: FormatResponseContext) => ResponseType;
    requestMethod?: (files: UploadFile | UploadFile[]) => Promise<RequestMethodResponse>;
    setXhrObject?: (context: {
        files: UploadFile[];
        xhrReq: XMLHttpRequest;
    }) => void;
    onResponseError?: (context: OnResponseErrorContext) => void;
    onResponseProgress?: (context: InnerProgressContext) => void;
    onResponseSuccess?: (context: SuccessContext) => void;
}
export type handleSuccessParams = SuccessContext & {
    formatResponse?: HandleUploadParams['formatResponse'];
};
export interface UploadTriggerUploadText {
    image?: string;
    normal?: string;
    fileInput?: string;
    reupload?: string;
    continueUpload: string;
    delete?: string;
    uploading?: string;
}
export interface UploadRemoveContext {
    index?: number;
    file?: UploadFile;
}
