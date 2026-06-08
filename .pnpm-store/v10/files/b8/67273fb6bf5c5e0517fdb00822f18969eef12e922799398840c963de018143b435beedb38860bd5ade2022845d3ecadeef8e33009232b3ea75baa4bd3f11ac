import { GlobalIconConfig } from 'tdesign-icons-vue-next';
import { CalendarController } from '../calendar';
import { ButtonProps } from '../button';
import { FormErrorMessage } from '../form';
import { ImageProps } from '../image';
import { MessageOptions } from '../message';
import { TNode, SizeEnum } from '../common';
export interface TdConfigProviderProps {
    globalConfig?: GlobalConfigProvider;
}
export interface GlobalConfigProvider {
    alert?: AlertConfig;
    anchor?: AnchorConfig;
    animation?: Partial<Record<'include' | 'exclude', Array<AnimationType>>>;
    autoComplete?: AutoCompleteConfig;
    calendar?: CalendarConfig;
    cascader?: CascaderConfig;
    chat?: ChatConfig;
    classPrefix?: string;
    colorPicker?: ColorPickerConfig;
    datePicker?: DatePickerConfig;
    descriptions?: DescriptionsConfig;
    dialog?: DialogConfig;
    drawer?: DrawerConfig;
    empty?: EmptyConfig;
    form?: FormConfig;
    guide?: GuideConfig;
    icon?: IconConfig;
    image?: ImageConfig;
    imageViewer?: ImageViewerConfig;
    input?: InputConfig;
    list?: ListConfig;
    message?: MessageConfig;
    pagination?: PaginationConfig;
    popconfirm?: PopconfirmConfig;
    qrcode?: QRCodeConfig;
    rate?: RateConfig;
    select?: SelectConfig;
    steps?: StepsConfig;
    table?: TableConfig;
    tag?: TagConfig;
    timePicker?: TimePickerConfig;
    transfer?: TransferConfig;
    tree?: TreeConfig;
    treeSelect?: TreeSelectConfig;
    typography?: TypographyConfig;
    upload?: UploadConfig;
}
export interface AlertConfig {
    collapseText?: string;
    expandText?: string;
}
export interface AnchorConfig {
    copySuccessText?: string;
    copyText?: string;
}
export interface AutoCompleteConfig {
    empty?: string;
}
export interface CalendarConfig {
    cellMonth?: string;
    controllerConfig?: CalendarController;
    fillWithZero?: boolean;
    firstDayOfWeek?: number;
    hideWeekend?: string;
    monthRadio?: string;
    monthSelection?: string;
    showWeekend?: string;
    thisMonth?: string;
    today?: string;
    week?: string;
    yearRadio?: string;
    yearSelection?: string;
}
export interface CascaderConfig {
    empty?: string;
    loadingText?: string;
    placeholder?: string;
}
export interface ChatConfig {
    placeholder?: string;
    stopBtnText?: string;
    refreshTipText?: string;
    copyTipText?: string;
    likeTipText?: string;
    dislikeTipText?: string;
    copyCodeBtnText?: string;
    copyCodeSuccessText?: string;
    clearHistoryBtnText?: string;
    copyTextSuccess?: string;
    copyTextFail?: string;
    confirmClearHistory?: string;
    loadingText?: string;
    loadingEndText?: string;
    uploadImageText?: string;
    uploadAttachmentText?: string;
}
export interface ColorPickerConfig {
    clearConfirmText?: string;
    recentColorTitle?: string;
    swatchColorTitle?: string;
}
export interface DatePickerConfig {
    confirm?: string;
    dayAriaLabel?: string;
    dayjsLocale?: string;
    direction?: string;
    firstDayOfWeek?: number;
    format?: string;
    monthAriaLabel?: string;
    months?: string[];
    nextDecade?: string;
    nextMonth?: string;
    nextYear?: string;
    now?: string;
    placeholder?: {
        date?: string;
        month?: string;
        year?: string;
    };
    preDecade?: string;
    preMonth?: string;
    preYear?: string;
    presets?: ConfigPresetDate;
    quarters?: string[];
    rangeSeparator?: string;
    selectDate?: string;
    selectTime?: string;
    weekAbbreviation?: string;
    weekdays?: string[];
    yearAriaLabel?: string;
}
export interface DescriptionsConfig {
    colonText?: string;
}
export interface DialogConfig {
    cancel?: string | ButtonProps;
    closeOnEscKeydown?: boolean;
    closeOnOverlayClick?: boolean;
    confirm?: string | ButtonProps;
    confirmBtnTheme?: {
        default: string;
        info: string;
        warning: string;
        danger: string;
        success: string;
    };
}
export interface DrawerConfig {
    cancel?: string | ButtonProps;
    closeOnEscKeydown?: boolean;
    closeOnOverlayClick?: boolean;
    confirm?: string | ButtonProps;
    size?: string;
}
export interface EmptyConfig {
    image?: {
        maintenance: TNode;
        success: TNode;
        fail: TNode;
        empty: TNode;
        networkError: TNode;
    };
    titleText?: {
        maintenance: string;
        success: string;
        fail: string;
        empty: string;
        networkError: string;
    };
}
export interface FormConfig {
    colonText?: string;
    errorMessage?: FormErrorMessage;
    requiredMark?: boolean;
    requiredMarkPosition?: 'left' | 'right';
}
export interface GuideConfig {
    finishButtonProps?: ButtonProps;
    nextButtonProps?: ButtonProps;
    prevButtonProps?: ButtonProps;
    skipButtonProps?: ButtonProps;
}
export interface ImageConfig {
    errorText?: string;
    loadingText?: string;
    replaceImageSrc?: (params: ImageProps) => string;
}
export interface ImageViewerConfig {
    errorText?: string;
    mirrorTipText?: string;
    originalSizeTipText?: string;
    rotateTipText?: string;
    previewText?: string;
}
export interface InputConfig {
    autocomplete?: string;
    placeholder?: string;
}
export interface ListConfig {
    loadingMoreText?: string;
    loadingText?: string;
}
export interface MessageConfig extends MessageOptions {
}
export interface PaginationConfig {
    itemsPerPage?: string;
    jumpTo?: string;
    page?: string;
    total?: string;
}
export interface PopconfirmConfig {
    cancel?: string | ButtonProps;
    confirm?: string | ButtonProps;
    confirmBtnTheme?: {
        default: string;
        warning: string;
        danger: string;
    };
}
export interface QRCodeConfig {
    expiredText?: string;
    refreshText?: string;
    scannedText?: string;
}
export interface RateConfig {
    rateText?: string[];
}
export interface SelectConfig {
    clearIcon?: TNode;
    empty?: string;
    filterable?: boolean;
    loadingText?: string;
    placeholder?: string;
}
export interface StepsConfig {
    checkIcon?: TNode;
    errorIcon?: TNode;
}
export interface TableConfig {
    cancelText?: string;
    clearFilterResultButtonText?: string;
    columnConfigButtonText?: string;
    columnConfigDescriptionText?: string;
    columnConfigTitleText?: string;
    confirmText?: string;
    empty?: string | TNode;
    expandIcon?: TNode;
    filterIcon?: TNode;
    hideSortTips?: boolean;
    loadingMoreText?: string;
    loadingText?: string;
    resetText?: string;
    searchResultText?: string;
    selectAllText?: string;
    size?: SizeEnum;
    sortAscendingOperationText?: string;
    sortCancelOperationText?: string;
    sortDescendingOperationText?: string;
    sortIcon?: TNode;
    treeExpandAndFoldIcon?: TNode<{
        type: 'expand' | 'fold';
    }>;
}
export interface TagConfig {
    closeIcon?: TNode;
}
export interface TimePickerConfig {
    anteMeridiem?: string;
    confirm?: string;
    now?: string;
    placeholder?: string;
    postMeridiem?: string;
}
export interface TransferConfig {
    empty?: string;
    placeholder?: string;
    title?: string;
}
export interface TreeConfig {
    empty?: string;
    folderIcon?: TNode;
}
export interface TreeSelectConfig {
    empty?: string;
    loadingText?: string;
    placeholder?: string;
}
export interface TypographyConfig {
    collapseText?: string;
    copiedText?: string;
    expandText?: string;
}
export interface UploadConfig {
    cancelUploadText?: string;
    dragger?: UploadConfigDragger;
    file?: UploadConfigFileList;
    progress?: UploadConfigProgress;
    sizeLimitMessage?: string;
    triggerUploadText?: UploadTriggerUploadText;
}
export interface UploadConfigDragger {
    clickAndDragText?: string;
    dragDropText?: string;
    draggingText?: string;
}
export interface UploadConfigFileList {
    fileNameText?: string;
    fileOperationDateText?: string;
    fileOperationText?: string;
    fileSizeText?: string;
    fileStatusText?: string;
}
export interface UploadConfigProgress {
    failText?: string;
    successText?: string;
    uploadingText?: string;
    waitingText?: string;
}
export type AnimationType = 'ripple' | 'expand' | 'fade';
export type IconConfig = GlobalIconConfig;
export interface ConfigPresetDate {
    [name: string]: DateConfigValue | (() => DateConfigValue);
}
export type DateConfigValue = string | Date | Array<DateConfigValue>;
export interface UploadTriggerUploadText {
    image?: string;
    normal?: string;
    fileInput?: string;
    reupload?: string;
    continueUpload?: string;
    delete?: string;
}
