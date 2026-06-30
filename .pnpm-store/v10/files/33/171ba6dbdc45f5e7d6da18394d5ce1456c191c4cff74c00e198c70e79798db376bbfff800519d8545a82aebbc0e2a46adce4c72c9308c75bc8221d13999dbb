import { InjectionKey, ComputedRef } from 'vue';
import defaultZhLocale from 'tdesign-vue-next/cjs/common/js/global-config/locale/zh_CN';
import { GlobalConfigProvider } from '../type';
export declare enum EAnimationType {
    ripple = "ripple",
    expand = "expand",
    fade = "fade"
}
export declare const defaultGlobalConfig: {
    readonly classPrefix: "t";
    readonly animation: Record<"include" | "exclude", Array<import("tdesign-vue-next/cjs/common/js/global-config/default-config").AnimationType>>;
    readonly attach: any;
    readonly calendar: {
        readonly firstDayOfWeek: 1;
        readonly fillWithZero: true;
        readonly controllerConfig: any;
    };
    readonly icon: {};
    readonly input: {
        readonly autocomplete: "";
    };
    readonly dialog: {
        readonly closeOnEscKeydown: true;
        readonly closeOnOverlayClick: true;
        readonly confirmBtnTheme: {
            readonly default: "primary";
            readonly info: "primary";
            readonly warning: "primary";
            readonly danger: "primary";
            readonly success: "primary";
        };
    };
    readonly message: {};
    readonly popconfirm: {
        readonly confirmBtnTheme: {
            readonly default: "primary";
            readonly warning: "primary";
            readonly danger: "primary";
        };
    };
    readonly table: {
        readonly expandIcon: any;
        readonly sortIcon: any;
        readonly filterIcon: any;
        readonly treeExpandAndFoldIcon: any;
        readonly hideSortTips: false;
        readonly size: "medium";
    };
    readonly select: {
        readonly clearIcon: any;
        readonly filterable: false;
    };
    readonly drawer: {
        readonly closeOnEscKeydown: true;
        readonly closeOnOverlayClick: true;
        readonly size: "small";
    };
    readonly tree: {
        readonly folderIcon: any;
    };
    readonly datePicker: {
        readonly firstDayOfWeek: 1;
    };
    readonly steps: {
        readonly checkIcon: any;
        readonly errorIcon: any;
    };
    readonly tag: {
        readonly closeIcon: any;
    };
    readonly form: {
        readonly requiredMark: any;
    };
    readonly empty: {
        readonly titleText: {
            readonly maintenance: any;
            readonly success: any;
            readonly fail: any;
            readonly empty: any;
            readonly networkError: any;
        };
        readonly image: {
            readonly maintenance: any;
            readonly success: any;
            readonly fail: any;
            readonly empty: any;
            readonly networkError: any;
        };
    };
} & {
    readonly autoComplete: {
        readonly empty: "暂无数据";
    };
    readonly pagination: {
        readonly itemsPerPage: "{size} 条/页";
        readonly jumpTo: "跳至";
        readonly page: "页";
        readonly total: "共 {count} 条数据";
    };
    readonly cascader: {
        readonly empty: "暂无数据";
        readonly loadingText: "加载中";
        readonly placeholder: "请选择";
    };
    readonly calendar: {
        readonly yearSelection: "{year} 年";
        readonly monthSelection: "{month} 月";
        readonly yearRadio: "年";
        readonly monthRadio: "月";
        readonly hideWeekend: "隐藏周末";
        readonly showWeekend: "显示周末";
        readonly today: "今天";
        readonly thisMonth: "本月";
        readonly week: "一,二,三,四,五,六,日";
        readonly cellMonth: "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月";
    };
    readonly transfer: {
        readonly title: "{checked} / {total} 项";
        readonly empty: "暂无数据";
        readonly placeholder: "请输入关键词搜索";
    };
    readonly timePicker: {
        readonly dayjsLocale: "zh-cn";
        readonly now: "此刻";
        readonly confirm: "确定";
        readonly anteMeridiem: "上午";
        readonly postMeridiem: "下午";
        readonly placeholder: "选择时间";
    };
    readonly dialog: {
        readonly confirm: "确认";
        readonly cancel: "取消";
    };
    readonly drawer: {
        readonly confirm: "确认";
        readonly cancel: "取消";
    };
    readonly popconfirm: {
        readonly confirm: {
            readonly content: "确定";
        };
        readonly cancel: {
            readonly content: "取消";
        };
    };
    readonly table: {
        readonly empty: "暂无数据";
        readonly loadingText: "正在加载中，请稍后";
        readonly loadingMoreText: "点击加载更多";
        readonly filterInputPlaceholder: "请输入内容（无默认值）";
        readonly sortAscendingOperationText: "点击升序";
        readonly sortCancelOperationText: "点击取消排序";
        readonly sortDescendingOperationText: "点击降序";
        readonly clearFilterResultButtonText: "清空筛选";
        readonly columnConfigButtonText: "列配置";
        readonly columnConfigTitleText: "表格列配置";
        readonly columnConfigDescriptionText: "请选择需要在表格中显示的数据列";
        readonly confirmText: "确认";
        readonly cancelText: "取消";
        readonly resetText: "重置";
        readonly selectAllText: "全选";
        readonly searchResultText: "搜索“{result}”，找到 {count} 条结果";
    };
    readonly select: {
        readonly empty: "暂无数据";
        readonly loadingText: "加载中";
        readonly placeholder: "请选择";
    };
    readonly tree: {
        readonly empty: "暂无数据";
    };
    readonly treeSelect: {
        readonly empty: "暂无数据";
        readonly loadingText: "加载中";
        readonly placeholder: "请选择";
    };
    readonly datePicker: {
        readonly dayjsLocale: "zh-cn";
        readonly placeholder: {
            readonly date: "请选择日期";
            readonly month: "请选择月份";
            readonly year: "请选择年份";
            readonly quarter: "请选择季度";
            readonly week: "请选择周";
        };
        readonly weekdays: readonly ["一", "二", "三", "四", "五", "六", "日"];
        readonly months: readonly ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"];
        readonly quarters: readonly ["一季度", "二季度", "三季度", "四季度"];
        readonly rangeSeparator: " - ";
        readonly direction: "ltr";
        readonly format: "YYYY-MM-DD";
        readonly dayAriaLabel: "日";
        readonly weekAbbreviation: "周";
        readonly yearAriaLabel: "年";
        readonly monthAriaLabel: "月";
        readonly confirm: "确定";
        readonly selectTime: "选择时间";
        readonly selectDate: "选择日期";
        readonly nextYear: "下一年";
        readonly preYear: "上一年";
        readonly nextMonth: "下个月";
        readonly preMonth: "上个月";
        readonly preDecade: "上个十年";
        readonly nextDecade: "下个十年";
        readonly now: "当前";
    };
    readonly upload: {
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
    };
    readonly form: {
        readonly errorMessage: {
            readonly date: "请输入正确的${name}";
            readonly url: "请输入正确的${name}";
            readonly required: "${name}必填";
            readonly whitespace: "${name}不能为空";
            readonly max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符";
            readonly min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符";
            readonly len: "${name}字符长度必须是 ${validate}";
            readonly enum: "${name}只能是${validate}等";
            readonly idcard: "请输入正确的${name}";
            readonly telnumber: "请输入正确的${name}";
            readonly pattern: "请输入正确的${name}";
            readonly validator: "${name}不符合要求";
            readonly boolean: "${name}数据类型必须是布尔类型";
            readonly number: "${name}必须是数字";
        };
        readonly colonText: "：";
    };
    readonly input: {
        readonly placeholder: "请输入";
    };
    readonly list: {
        readonly loadingText: "正在加载中，请稍等";
        readonly loadingMoreText: "点击加载更多";
    };
    readonly alert: {
        readonly expandText: "展开更多";
        readonly collapseText: "收起";
    };
    readonly anchor: {
        readonly copySuccessText: "链接复制成功";
        readonly copyText: "复制链接";
    };
    readonly colorPicker: {
        readonly swatchColorTitle: "系统预设颜色";
        readonly recentColorTitle: "最近使用颜色";
        readonly clearConfirmText: "确定清空最近使用的颜色吗？";
        readonly singleColor: "单色";
        readonly gradientColor: "渐变";
    };
    readonly guide: {
        readonly finishButtonProps: {
            readonly content: "完成";
            readonly theme: "primary";
        };
        readonly nextButtonProps: {
            readonly content: "下一步";
            readonly theme: "primary";
        };
        readonly skipButtonProps: {
            readonly content: "跳过";
            readonly theme: "default";
        };
        readonly prevButtonProps: {
            readonly content: "上一步";
            readonly theme: "default";
        };
    };
    readonly image: {
        readonly errorText: "图片无法显示";
        readonly loadingText: "图片加载中";
    };
    readonly imageViewer: {
        readonly errorText: "图片加载失败，可尝试重新加载";
        readonly mirrorTipText: "镜像";
        readonly rotateTipText: "旋转";
        readonly originalSizeTipText: "原始大小";
        readonly previewText: "预览";
    };
    readonly typography: {
        readonly expandText: "展开";
        readonly collapseText: "收起";
        readonly copiedText: "复制成功";
    };
    readonly rate: {
        readonly rateText: readonly ["极差", "失望", "一般", "满意", "惊喜"];
    };
    readonly empty: {
        readonly titleText: {
            readonly maintenance: "建设中";
            readonly success: "成功";
            readonly fail: "失败";
            readonly empty: "暂无数据";
            readonly networkError: "网络错误";
        };
    };
    readonly descriptions: {
        readonly colonText: "：";
    };
    readonly chat: {
        readonly placeholder: "请输入消息...";
        readonly stopBtnText: "中止";
        readonly refreshTipText: "重新生成";
        readonly copyTipText: "复制";
        readonly likeTipText: "点赞";
        readonly dislikeTipText: "点踩";
        readonly copyCodeBtnText: "复制代码";
        readonly copyCodeSuccessText: "已复制";
        readonly clearHistoryBtnText: "清空历史记录";
        readonly copyTextSuccess: "已成功复制到剪贴板";
        readonly copyTextFail: "复制到剪贴板失败";
        readonly confirmClearHistory: "确定要清空所有的消息吗？";
        readonly loadingText: "思考中...";
        readonly loadingEndText: "已深度思考";
        readonly uploadImageText: "上传图片";
        readonly uploadAttachmentText: "上传附件";
        readonly shareTipText: "分享";
    };
    readonly qrcode: {
        readonly expiredText: "二维码过期";
        readonly refreshText: "点击刷新";
        readonly scannedText: "已扫描";
    };
};
export type Locale = typeof defaultZhLocale;
export declare const configProviderInjectKey: InjectionKey<ComputedRef<GlobalConfigProvider>>;
export declare const mergeWith: (defaultGlobalConfig: GlobalConfigProvider, injectConfig: GlobalConfigProvider) => GlobalConfigProvider;
