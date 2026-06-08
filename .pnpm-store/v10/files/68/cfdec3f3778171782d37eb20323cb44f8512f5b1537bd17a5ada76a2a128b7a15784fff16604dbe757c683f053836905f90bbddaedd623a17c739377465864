import { ImageViewerProps } from '../image-viewer';
import { UploadConfig } from '../config-provider/type';
import { ButtonProps } from '../button';
import { PlainObject, TNode, UploadDisplayDragEvents } from '../common';
export interface TdUploadProps<T extends UploadFile = UploadFile> {
    abridgeName?: Array<number>;
    accept?: string;
    action?: string;
    allowUploadDuplicateFile?: boolean;
    autoUpload?: boolean;
    beforeAllFilesUpload?: (file: UploadFile[]) => boolean | Promise<boolean>;
    beforeUpload?: (file: UploadFile) => boolean | Promise<boolean>;
    cancelUploadButton?: null | ButtonProps | TNode<{
        disabled: boolean;
        cancelUploadText: string;
        cancelUpload: (ctx: {
            e: MouseEvent;
        }) => void;
    }>;
    data?: Record<string, any> | ((files: UploadFile[]) => Record<string, any>);
    default?: string | TNode;
    disabled?: boolean;
    dragContent?: TNode | TNode<TriggerContext>;
    draggable?: boolean;
    fileListDisplay?: TNode<{
        files: UploadFile[];
        dragEvents?: UploadDisplayDragEvents;
    }>;
    files?: Array<T>;
    defaultFiles?: Array<T>;
    format?: (file: File) => UploadFile;
    formatRequest?: (requestData: {
        [key: string]: any;
    }) => {
        [key: string]: any;
    };
    formatResponse?: (response: any, context: FormatResponseContext) => ResponseType;
    headers?: {
        [key: string]: string;
    };
    imageViewerProps?: ImageViewerProps;
    inputAttributes?: object;
    isBatchUpload?: boolean;
    locale?: UploadConfig;
    max?: number;
    method?: 'POST' | 'GET' | 'PUT' | 'OPTIONS' | 'PATCH' | 'post' | 'get' | 'put' | 'options' | 'patch';
    mockProgressDuration?: number;
    multiple?: boolean;
    name?: string;
    placeholder?: string;
    requestMethod?: (files: UploadFile | UploadFile[]) => Promise<RequestMethodResponse>;
    showImageFileName?: boolean;
    showThumbnail?: boolean;
    showUploadProgress?: boolean;
    sizeLimit?: number | SizeLimitObj;
    status?: 'default' | 'success' | 'warning' | 'error';
    theme?: 'custom' | 'file' | 'file-input' | 'file-flow' | 'image' | 'image-flow';
    tips?: string | TNode;
    trigger?: TNode<TriggerContext>;
    triggerButtonProps?: ButtonProps;
    uploadAllFilesInOneRequest?: boolean;
    uploadButton?: null | ButtonProps | TNode<{
        disabled: boolean;
        uploading: boolean;
        uploadFiles: () => void;
        uploadText: string;
    }>;
    uploadPastedFiles?: boolean;
    useMockProgress?: boolean;
    value?: Array<T>;
    defaultValue?: Array<T>;
    modelValue?: Array<T>;
    withCredentials?: boolean;
    onCancelUpload?: () => void;
    onChange?: (value: Array<T>, context: UploadChangeContext) => void;
    onDragenter?: (context: {
        e: DragEvent;
    }) => void;
    onDragleave?: (context: {
        e: DragEvent;
    }) => void;
    onDrop?: (context: {
        e: DragEvent;
    }) => void;
    onFail?: (options: UploadFailContext) => void;
    onOneFileFail?: (options: UploadFailContext) => void;
    onOneFileSuccess?: (context: Pick<SuccessContext, 'e' | 'file' | 'response' | 'XMLHttpRequest'>) => void;
    onPreview?: (options: {
        file: UploadFile;
        index: number;
        e: MouseEvent;
    }) => void;
    onProgress?: (options: ProgressContext) => void;
    onRemove?: (context: UploadRemoveContext) => void;
    onSelectChange?: (files: File[], context: UploadSelectChangeContext) => void;
    onSuccess?: (context: SuccessContext) => void;
    onValidate?: (context: {
        type: UploadValidateType;
        files: UploadFile[];
    }) => void;
    onWaitingUploadFilesChange?: (context: {
        files: Array<UploadFile>;
        trigger: 'validate' | 'remove' | 'uploaded';
    }) => void;
}
export interface UploadInstanceFunctions<T extends UploadFile = UploadFile> {
    triggerUpload: () => void;
    uploadFilePercent: (params: {
        file: UploadFile;
        percent: number;
    }) => void;
    uploadFiles: (files?: UploadFile[]) => void;
}
export interface UploadFile extends PlainObject {
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
export type ResponseType = {
    error?: string;
    url?: string;
    status?: 'fail' | 'success';
    files?: UploadFile[];
} & Record<string, any>;
export interface FormatResponseContext {
    file: UploadFile;
    currentFiles?: UploadFile[];
}
export interface RequestMethodResponse {
    status: 'success' | 'fail';
    error?: string;
    response: {
        url?: string;
        files?: UploadFile[];
        [key: string]: any;
    };
}
export interface SizeLimitObj {
    size: number;
    unit: SizeUnit;
    message?: string;
}
export type SizeUnitArray = ['B', 'KB', 'MB', 'GB'];
export type SizeUnit = SizeUnitArray[number];
export interface TriggerContext {
    dragActive?: boolean;
    files: UploadFile[];
    triggerUpload?: (e: MouseEvent) => void;
}
export interface UploadChangeContext {
    e?: MouseEvent | ProgressEvent;
    response?: any;
    trigger: UploadChangeTrigger;
    index?: number;
    file?: UploadFile;
    files?: UploadFile[];
}
export type UploadChangeTrigger = 'add' | 'remove' | 'abort' | 'progress-success' | 'progress' | 'progress-fail';
export interface UploadFailContext {
    e?: ProgressEvent;
    failedFiles: UploadFile[];
    currentFiles: UploadFile[];
    response?: any;
    file: UploadFile;
    XMLHttpRequest?: XMLHttpRequest;
}
export interface ProgressContext {
    e?: ProgressEvent;
    file?: UploadFile;
    currentFiles: UploadFile[];
    percent: number;
    type: UploadProgressType;
    XMLHttpRequest?: XMLHttpRequest;
}
export type UploadProgressType = 'real' | 'mock';
export interface UploadRemoveContext {
    index?: number;
    file?: UploadFile;
    e: MouseEvent;
}
export interface UploadSelectChangeContext {
    currentSelectedFiles: UploadFile[];
}
export interface SuccessContext {
    e?: ProgressEvent;
    file?: UploadFile;
    fileList?: UploadFile[];
    currentFiles?: UploadFile[];
    response?: any;
    results?: SuccessContext[];
    XMLHttpRequest?: XMLHttpRequest;
}
export type UploadValidateType = 'FILE_OVER_SIZE_LIMIT' | 'FILES_OVER_LENGTH_LIMIT' | 'FILTER_FILE_SAME_NAME' | 'BEFORE_ALL_FILES_UPLOAD' | 'CUSTOM_BEFORE_UPLOAD';
