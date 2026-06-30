import { TdUploadProps, UploadFile, UploadRemoveContext } from '../type';
export type ValidateParams = Parameters<TdUploadProps['onValidate']>[0];
export default function useUpload(props: TdUploadProps): {
    t: <T>(pattern: T, ...args: any[]) => any;
    locale: import("vue").ComputedRef<({} & import("../..").UploadConfig) | ({} & {
        readonly sizeLimitMessage: "文件大小不能超过 {sizeLimit}";
        readonly cancelUploadText: "取消上传";
        readonly triggerUploadText: {
            readonly fileInput: "选择文件";
            readonly image: "点击上传图片";
            readonly normal: "点击上传";
            readonly reupload: "重新选择";
            readonly continueUpload: "继续选择";
            readonly delete: "删除";
            readonly uploading: "上传中";
        };
        readonly dragger: {
            readonly dragDropText: "释放鼠标";
            readonly draggingText: "拖拽到此区域";
            readonly clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域";
        };
        readonly file: {
            readonly fileNameText: "文件名";
            readonly fileSizeText: "文件大小";
            readonly fileStatusText: "状态";
            readonly fileOperationText: "操作";
            readonly fileOperationDateText: "上传日期";
        };
        readonly progress: {
            readonly uploadingText: "上传中";
            readonly waitingText: "待上传";
            readonly failText: "上传失败";
            readonly successText: "上传成功";
        };
    } & import("../..").UploadConfig)>;
    classPrefix: import("vue").ComputedRef<string>;
    triggerUploadText: import("vue").ComputedRef<string>;
    toUploadFiles: import("vue").Ref<{
        [x: string]: any;
        lastModified?: number;
        name?: string;
        percent?: number;
        raw?: {
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            bytes: () => Promise<Uint8Array>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<Uint8Array>;
            text: () => Promise<string>;
        };
        response?: {
            [key: string]: any;
        };
        size?: number;
        status?: "success" | "fail" | "progress" | "waiting";
        type?: string;
        uploadTime?: string;
        url?: string;
    }[]>;
    uploadValue: import("vue").Ref<UploadFile[]>;
    displayFiles: import("vue").ComputedRef<import("tdesign-vue-next/esm/common/js/upload/types").UploadFile[]>;
    sizeOverLimitMessage: import("vue").Ref<string>;
    uploading: import("vue").Ref<boolean>;
    tipsClasses: string;
    errorClasses: string[];
    placeholderClass: string;
    inputRef: import("vue").Ref<HTMLInputElement>;
    disabled: import("vue").Ref<boolean>;
    xhrReq: import("vue").Ref<{
        files: {
            [x: string]: any;
            lastModified?: number;
            name?: string;
            percent?: number;
            raw?: {
                readonly lastModified: number;
                readonly name: string;
                readonly webkitRelativePath: string;
                readonly size: number;
                readonly type: string;
                arrayBuffer: () => Promise<ArrayBuffer>;
                bytes: () => Promise<Uint8Array>;
                slice: (start?: number, end?: number, contentType?: string) => Blob;
                stream: () => ReadableStream<Uint8Array>;
                text: () => Promise<string>;
            };
            response?: {
                [key: string]: any;
            };
            size?: number;
            status?: "success" | "fail" | "progress" | "waiting";
            type?: string;
            uploadTime?: string;
            url?: string;
        }[];
        xhrReq: {
            onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
            readonly readyState: number;
            readonly response: any;
            readonly responseText: string;
            responseType: XMLHttpRequestResponseType;
            readonly responseURL: string;
            readonly responseXML: Document | null;
            readonly status: number;
            readonly statusText: string;
            timeout: number;
            readonly upload: {
                addEventListener: {
                    <K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
                    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
                };
                removeEventListener: {
                    <K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
                    (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
                };
                onabort: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                onerror: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                onload: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                onloadstart: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any;
                dispatchEvent: (event: Event) => boolean;
            };
            withCredentials: boolean;
            abort: () => void;
            getAllResponseHeaders: () => string;
            getResponseHeader: (name: string) => string | null;
            open: {
                (method: string, url: string | URL): void;
                (method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
            };
            overrideMimeType: (mime: string) => void;
            send: (body?: Document | XMLHttpRequestBodyInit | null) => void;
            setRequestHeader: (name: string, value: string) => void;
            readonly UNSENT: 0;
            readonly OPENED: 1;
            readonly HEADERS_RECEIVED: 2;
            readonly LOADING: 3;
            readonly DONE: 4;
            addEventListener: {
                <K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
                (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
            };
            removeEventListener: {
                <K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
                (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
            };
            onabort: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            onerror: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            onload: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            onloadend: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            onloadstart: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            onprogress: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            ontimeout: (this: XMLHttpRequest, ev: ProgressEvent) => any;
            dispatchEvent: (event: Event) => boolean;
        };
    }[]>;
    uploadFilePercent: (params: {
        file: UploadFile;
        percent: number;
    }) => void;
    uploadFiles: (toFiles?: UploadFile[]) => void;
    onFileChange: (files: File[]) => void;
    onNormalFileChange: (e: InputEvent) => void;
    onDragFileChange: (files: File[]) => void;
    onPasteFileChange: (e: ClipboardEvent) => void;
    onInnerRemove: (p: UploadRemoveContext) => void;
    triggerUpload: (e?: MouseEvent) => void;
    cancelUpload: (context?: {
        file?: UploadFile;
        e?: MouseEvent;
    }) => void;
};
