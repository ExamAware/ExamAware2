/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, computed, ref, createVNode, mergeProps } from 'vue';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { BrowseIcon, DeleteIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon, TimeFilledIcon, FileExcelIcon, FilePdfIcon, FileWordIcon, FilePowerpointIcon, FileIcon, VideoIcon } from 'tdesign-icons-vue-next';
import { isFunction, isObject } from 'lodash-es';
import { a as useTNodeJSX, i as useGlobalIcon, o as useEventForward } from '../../_chunks/dep-7673347f.mjs';
import { ImageViewer } from '../../image-viewer/index.mjs';
import { commonProps } from '../consts/index.mjs';
import { Button } from '../../button/index.mjs';
import useDrag from '../hooks/useDrag.mjs';
import { a as abridgeName, F as FILE_PDF_REGEXP, c as FILE_EXCEL_REGEXP, d as FILE_WORD_REGEXP, e as FILE_PPT_REGEXP, V as VIDEO_REGEXP, I as IMAGE_REGEXP, r as returnFileSize } from '../../_chunks/dep-cdd448ec.mjs';
import { Loading } from '../../loading/index.mjs';
import { Link } from '../../link/index.mjs';
import { Image } from '../../image/index.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../image-viewer/image-viewer.mjs';
import '../../image-viewer/base/ImageItem.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../image-viewer/hooks/index.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../image-viewer/base/ImageModalIcon.mjs';
import '../../image-viewer/base/ImageViewerModal.mjs';
import '../../dialog/index.mjs';
import '../../dialog/dialog.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../dialog/props.mjs';
import '../../dialog/hooks/index.mjs';
import '../../dialog/hooks/useAction.mjs';
import '../../button/button.mjs';
import '../../button/props.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../dialog/hooks/useSameTarget.mjs';
import '../../_chunks/dep-03148507.mjs';
import '../../dialog/utils/index.mjs';
import '../../dialog/dialog-card.mjs';
import '../../dialog/dialog-card-props.mjs';
import '../../dialog/plugin.mjs';
import '../../image-viewer/props.mjs';
import '../../image-viewer/base/ImageViewerUtils.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../tooltip/utils/index.mjs';
import '../../image-viewer/consts/index.mjs';
import '../../image-viewer/utils/index.mjs';
import '../../image/image.mjs';
import '../../image/props.mjs';
import '../../space/index.mjs';
import '../../space/space.mjs';
import '../../space/props.mjs';
import '../../link/link.mjs';
import '../../link/props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var MultipleFlowList = defineComponent({
  name: "UploadMultipleFlowList",
  props: _objectSpread(_objectSpread({}, commonProps), {}, {
    showThumbnail: Boolean,
    uploadFiles: Function,
    cancelUpload: Function,
    dragEvents: Object,
    disabled: Boolean,
    isBatchUpload: Boolean,
    draggable: Boolean,
    showImageFileName: Boolean,
    uploadButton: Object,
    cancelUploadButton: Object,
    onPreview: Function
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props),
      uploading = _toRefs.uploading,
      disabled = _toRefs.disabled,
      displayFiles = _toRefs.displayFiles,
      classPrefix = _toRefs.classPrefix,
      accept = _toRefs.accept;
    var uploadPrefix = computed(function () {
      return "".concat(classPrefix.value, "-upload");
    });
    var locale = computed(function () {
      return props.locale;
    });
    var renderTNodeJSX = useTNodeJSX();
    var _useGlobalIcon = useGlobalIcon({
        BrowseIcon: BrowseIcon,
        DeleteIcon: DeleteIcon,
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon,
        TimeFilledIcon: TimeFilledIcon,
        FileExcelIcon: FileExcelIcon,
        FilePdfIcon: FilePdfIcon,
        FileWordIcon: FileWordIcon,
        FilePowerpointIcon: FilePowerpointIcon,
        FileIcon: FileIcon,
        VideoIcon: VideoIcon
      }),
      BrowseIcon$1 = _useGlobalIcon.BrowseIcon,
      DeleteIcon$1 = _useGlobalIcon.DeleteIcon,
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon,
      TimeFilledIcon$1 = _useGlobalIcon.TimeFilledIcon,
      FileExcelIcon$1 = _useGlobalIcon.FileExcelIcon,
      FilePdfIcon$1 = _useGlobalIcon.FilePdfIcon,
      FileWordIcon$1 = _useGlobalIcon.FileWordIcon,
      FilePowerpointIcon$1 = _useGlobalIcon.FilePowerpointIcon,
      FileIcon$1 = _useGlobalIcon.FileIcon,
      VideoIcon$1 = _useGlobalIcon.VideoIcon;
    var drag = useDrag(props.dragEvents, accept);
    var currentPreviewFile = ref([]);
    var previewIndex = ref(0);
    var uploadText = computed(function () {
      if (uploading.value) return "".concat(locale.value.progress.uploadingText);
      return locale.value.triggerUploadText.normal;
    });
    var innerDragEvents = computed(function () {
      var draggable = props.draggable === void 0 ? true : props.draggable;
      return draggable ? {
        onDrop: drag.handleDrop,
        onDragenter: drag.handleDragenter,
        onDragover: drag.handleDragover,
        onDragleave: drag.handleDragleave
      } : {};
    });
    var getStatusMap = function getStatusMap() {
      var iconMap = {
        success: createVNode(CheckCircleFilledIcon$1, null, null),
        fail: createVNode(ErrorCircleFilledIcon$1, null, null),
        progress: createVNode(Loading, null, null),
        waiting: createVNode(TimeFilledIcon$1, null, null)
      };
      var progress = locale.value.progress;
      var textMap = {
        success: progress === null || progress === void 0 ? void 0 : progress.successText,
        fail: progress === null || progress === void 0 ? void 0 : progress.failText,
        progress: progress === null || progress === void 0 ? void 0 : progress.uploadingText,
        waiting: progress === null || progress === void 0 ? void 0 : progress.waitingText
      };
      return {
        iconMap: iconMap,
        textMap: textMap
      };
    };
    var renderEmpty = function renderEmpty() {
      return createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__flow-empty")
      }, [drag.dragActive.value ? locale.value.dragger.dragDropText : locale.value.dragger.clickAndDragText]);
    };
    var renderImgItem = function renderImgItem(file, index) {
      var _file$response;
      var _getStatusMap = getStatusMap(),
        iconMap = _getStatusMap.iconMap,
        textMap = _getStatusMap.textMap;
      var fileName = props.abridgeName && file.name ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file.name;
      return createVNode("li", {
        "class": "".concat(uploadPrefix.value, "__card-item"),
        "key": file.name + index + file.percent + file.status || "0"
      }, [createVNode("div", {
        "class": ["".concat(uploadPrefix.value, "__card-content"), _defineProperty({}, "".concat(classPrefix.value, "-is-bordered"), file.status !== "waiting")]
      }, [file.status === "progress" && createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__card-status-wrap ").concat(uploadPrefix.value, "__").concat(props.theme, "-progress")
      }, [iconMap[file.status], createVNode("p", null, [textMap[file.status], props.showUploadProgress && " ".concat(file.percent, "%")])]), file.status === "fail" && createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__card-status-wrap ").concat(uploadPrefix.value, "__").concat(props.theme, "-fail")
      }, [iconMap[file.status], createVNode("p", null, [((_file$response = file.response) === null || _file$response === void 0 ? void 0 : _file$response.error) || textMap[file.status]])]), (["waiting", "success"].includes(file.status) || !file.status && file.url) && createVNode(Image, {
        "class": "".concat(uploadPrefix.value, "__card-image"),
        "src": file.url || file.raw,
        "error": "",
        "loading": "",
        "fit": "contain"
      }, null), createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__card-mask")
      }, [(file.url || file.raw) && !["progress", "fail"].includes(file.status) && createVNode("span", {
        "class": "".concat(uploadPrefix.value, "__card-mask-item")
      }, [createVNode(BrowseIcon$1, {
        "onClick": function onClick(_ref3) {
          var _props$onPreview;
          var e = _ref3.e;
          previewIndex.value = index;
          currentPreviewFile.value = displayFiles.value;
          (_props$onPreview = props.onPreview) === null || _props$onPreview === void 0 || _props$onPreview.call(props, {
            file: file,
            index: index,
            e: e
          });
        }
      }, null), createVNode("span", {
        "class": "".concat(uploadPrefix.value, "__card-mask-item-divider")
      }, null)]), !disabled.value && createVNode("span", {
        "class": "".concat(uploadPrefix.value, "__card-mask-item ").concat(uploadPrefix.value, "__delete"),
        "onClick": function onClick(e) {
          return props.onRemove({
            e: e,
            index: index,
            file: file
          });
        }
      }, [createVNode(DeleteIcon$1, null, null)])])]), props.showImageFileName && createVNode("p", {
        "class": ["".concat(uploadPrefix.value, "__card-name"), "".concat(uploadPrefix.value, "__flow-status")]
      }, [["success", "waiting"].includes(file.status) && iconMap[file.status], fileName])]);
    };
    var renderStatus = function renderStatus(file) {
      var _file$response2, _file$response3;
      var _getStatusMap2 = getStatusMap(),
        iconMap = _getStatusMap2.iconMap,
        textMap = _getStatusMap2.textMap;
      return createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__flow-status")
      }, [iconMap[file.status], createVNode("span", {
        "class": "".concat(uploadPrefix.value, "__").concat(props.theme, "-").concat(file.status)
      }, [(_file$response2 = file.response) !== null && _file$response2 !== void 0 && _file$response2.error ? ((_file$response3 = file.response) === null || _file$response3 === void 0 ? void 0 : _file$response3.error) || textMap[file.status] : textMap[file.status], props.showUploadProgress && file.status === "progress" ? " ".concat(file.percent || 0, "%") : ""])]);
    };
    var renderNormalActionCol = function renderNormalActionCol(file, index) {
      var _locale$value;
      return createVNode("td", null, [createVNode(Button, {
        "theme": "primary",
        "variant": "text",
        "content": (_locale$value = locale.value) === null || _locale$value === void 0 || (_locale$value = _locale$value.triggerUploadText) === null || _locale$value === void 0 ? void 0 : _locale$value["delete"],
        "class": "".concat(uploadPrefix.value, "__delete"),
        "onClick": function onClick(e) {
          return props.onRemove({
            e: e,
            index: index,
            file: file
          });
        }
      }, null)]);
    };
    var renderBatchActionCol = function renderBatchActionCol(index) {
      var _locale$value2;
      return index === 0 ? createVNode("td", {
        "rowspan": displayFiles.value.length,
        "class": "".concat(uploadPrefix.value, "__flow-table__batch-row")
      }, [createVNode(Button, {
        "theme": "primary",
        "variant": "text",
        "content": (_locale$value2 = locale.value) === null || _locale$value2 === void 0 || (_locale$value2 = _locale$value2.triggerUploadText) === null || _locale$value2 === void 0 ? void 0 : _locale$value2["delete"],
        "class": "".concat(uploadPrefix.value, "__delete"),
        "onClick": function onClick(e) {
          return props.onRemove({
            e: e,
            index: -1,
            file: void 0
          });
        }
      }, null)]) : null;
    };
    var getFileThumbnailIcon = function getFileThumbnailIcon(fileType) {
      if (FILE_PDF_REGEXP.test(fileType)) {
        return createVNode(FilePdfIcon$1, null, null);
      }
      if (FILE_EXCEL_REGEXP.test(fileType)) {
        return createVNode(FileExcelIcon$1, null, null);
      }
      if (FILE_WORD_REGEXP.test(fileType)) {
        return createVNode(FileWordIcon$1, null, null);
      }
      if (FILE_PPT_REGEXP.test(fileType)) {
        return createVNode(FilePowerpointIcon$1, null, null);
      }
      if (VIDEO_REGEXP.test(fileType)) {
        return createVNode(VideoIcon$1, null, null);
      }
      return createVNode(FileIcon$1, null, null);
    };
    var renderFileThumbnail = function renderFileThumbnail(file) {
      if (!file || !file.raw && file.url) return null;
      var fileType = file.raw.type;
      var className = "".concat(uploadPrefix.value, "__file-thumbnail");
      if (IMAGE_REGEXP.test(fileType)) {
        return createVNode(Image, {
          "class": className,
          "src": file.url || file.raw,
          "fit": "scale-down",
          "error": "",
          "loading": "",
          "onClick": function onClick(e) {
            var _props$onPreview2;
            e.preventDefault();
            currentPreviewFile.value = [file];
            previewIndex.value = 0;
            (_props$onPreview2 = props.onPreview) === null || _props$onPreview2 === void 0 || _props$onPreview2.call(props, {
              file: file,
              index: 0,
              e: e
            });
          }
        }, null);
      }
      return createVNode("div", {
        "class": className
      }, [getFileThumbnailIcon(fileType)]);
    };
    var renderFileList = function renderFileList() {
      var _locale$value$file, _locale$value$file2, _locale$value$file3, _locale$value$file4;
      var customList = renderTNodeJSX("fileListDisplay", {
        params: {
          cancelUpload: props.cancelUpload,
          uploadFiles: props.uploadFiles,
          onPreview: props.onPreview,
          onRemove: props.onRemove,
          toUploadFiles: props.toUploadFiles,
          sizeOverLimitMessage: props.sizeOverLimitMessage,
          locale: props.locale,
          files: props.displayFiles,
          dragEvents: innerDragEvents.value
        }
      });
      if (customList || props.fileListDisplay) return customList;
      return createVNode("table", mergeProps({
        "class": "".concat(uploadPrefix.value, "__flow-table")
      }, innerDragEvents.value), [createVNode("thead", null, [createVNode("tr", null, [createVNode("th", null, [(_locale$value$file = locale.value.file) === null || _locale$value$file === void 0 ? void 0 : _locale$value$file.fileNameText]), createVNode("th", {
        "style": {
          minWidth: "120px"
        }
      }, [(_locale$value$file2 = locale.value.file) === null || _locale$value$file2 === void 0 ? void 0 : _locale$value$file2.fileSizeText]), createVNode("th", {
        "style": {
          minWidth: "120px"
        }
      }, [(_locale$value$file3 = locale.value.file) === null || _locale$value$file3 === void 0 ? void 0 : _locale$value$file3.fileStatusText]), disabled.value ? null : createVNode("th", null, [(_locale$value$file4 = locale.value.file) === null || _locale$value$file4 === void 0 ? void 0 : _locale$value$file4.fileOperationText])])]), createVNode("tbody", null, [!displayFiles.value.length && createVNode("tr", null, [createVNode("td", {
        "colspan": 4
      }, [renderEmpty()])]), displayFiles.value.map(function (file, index) {
        var _props$abridgeName;
        var showBatchUploadAction = props.isBatchUpload;
        var deleteNode = showBatchUploadAction && displayFiles.value.every(function (item) {
          return item.status === "success" || !item.status;
        }) ? renderBatchActionCol(index) : renderNormalActionCol(file, index);
        var fileName = (_props$abridgeName = props.abridgeName) !== null && _props$abridgeName !== void 0 && _props$abridgeName.length ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file.name;
        var thumbnailNode = props.showThumbnail ? createVNode("div", {
          "class": "".concat(uploadPrefix.value, "__file-info")
        }, [renderFileThumbnail(file), fileName]) : fileName;
        var fileNameNode = file.url ? createVNode(Link, {
          "href": file.url,
          "target": "_blank",
          "hover": "color",
          "disabled": false
        }, _isSlot(thumbnailNode) ? thumbnailNode : {
          "default": function _default() {
            return [thumbnailNode];
          }
        }) : thumbnailNode;
        return createVNode("tr", {
          "key": file.name + index + file.size
        }, [createVNode("td", {
          "class": "".concat(uploadPrefix.value, "__file-name"),
          "key": file.name + file.url
        }, [fileNameNode]), createVNode("td", null, [returnFileSize(file.size)]), createVNode("td", null, [renderStatus(file)]), disabled.value ? null : deleteNode]);
      })])]);
    };
    var renderImageList = function renderImageList() {
      var customList = renderTNodeJSX("fileListDisplay", {
        params: {
          cancelUpload: props.cancelUpload,
          uploadFiles: props.uploadFiles,
          onRemove: props.onRemove,
          onPreview: props.onPreview,
          toUploadFiles: props.toUploadFiles,
          sizeOverLimitMessage: props.sizeOverLimitMessage,
          locale: props.locale,
          files: props.displayFiles,
          dragEvents: innerDragEvents.value
        }
      });
      if (customList || props.fileListDisplay) return customList;
      return createVNode("ul", {
        "class": "".concat(uploadPrefix.value, "__card clearfix")
      }, [props.displayFiles.map(function (file, index) {
        return renderImgItem(file, index);
      })]);
    };
    return function () {
      var _slots$default, _locale$value3, _locale$value4;
      var cardClassName = "".concat(uploadPrefix.value, "__flow-card-area");
      var cancelUploadDisabled = disabled.value || !uploading.value;
      var hasCancelUploadTNode = slots.uploadButton || isFunction(props.uploadButton);
      var uploadButtonDisabled = Boolean(disabled.value || uploading.value || !displayFiles.value.length);
      var hasUploadButtonTNode = slots.cancelUploadButton || isFunction(props.cancelUploadButton);
      var cancelButtonProps = useEventForward(props.cancelUploadButton, isObject(props.cancelUploadButton) ? {} : {
        onClick: function onClick(e) {
          var _props$cancelUpload;
          return (_props$cancelUpload = props.cancelUpload) === null || _props$cancelUpload === void 0 ? void 0 : _props$cancelUpload.call(props, {
            e: e
          });
        }
      });
      var uploadButtonProps = useEventForward(props.uploadButton, isObject(props.uploadButton) ? {} : {
        onClick: function onClick() {
          var _props$uploadFiles;
          return (_props$uploadFiles = props.uploadFiles) === null || _props$uploadFiles === void 0 ? void 0 : _props$uploadFiles.call(props);
        }
      });
      return createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__flow ").concat(uploadPrefix.value, "__flow-").concat(props.theme)
      }, [createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__flow-op")
      }, [(_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), props.placeholder && createVNode("small", {
        "class": "".concat(uploadPrefix.value, "__flow-placeholder ").concat(uploadPrefix.value, "__placeholder")
      }, [props.placeholder])]), props.theme === "image-flow" && createVNode("div", mergeProps({
        "class": cardClassName
      }, innerDragEvents.value), [displayFiles.value.length ? renderImageList() : renderEmpty()]), props.theme === "file-flow" && (displayFiles.value.length ? renderFileList() : createVNode("div", mergeProps({
        "class": cardClassName
      }, innerDragEvents.value), [renderEmpty()])), !props.autoUpload && (props.uploadButton !== null || props.cancelUploadButton !== null) && createVNode("div", {
        "class": "".concat(uploadPrefix.value, "__flow-bottom")
      }, [props.cancelUploadButton !== null && (hasCancelUploadTNode ? renderTNodeJSX("cancelUploadButton", {
        params: {
          disabled: cancelUploadDisabled,
          cancelUploadText: (_locale$value3 = locale.value) === null || _locale$value3 === void 0 ? void 0 : _locale$value3.cancelUploadText,
          cancelUpload: props.cancelUpload
        }
      }) : createVNode(Button, mergeProps({
        "theme": "default",
        "disabled": cancelUploadDisabled,
        "content": (_locale$value4 = locale.value) === null || _locale$value4 === void 0 ? void 0 : _locale$value4.cancelUploadText,
        "class": "".concat(uploadPrefix.value, "__cancel")
      }, cancelButtonProps.value), null)), props.uploadButton !== null && (hasUploadButtonTNode ? renderTNodeJSX("uploadButton", {
        params: {
          disabled: uploadButtonDisabled,
          uploading: uploading.value,
          uploadText: uploadText.value,
          uploadFiles: props.uploadFiles
        }
      }) : createVNode(Button, mergeProps({
        "disabled": uploadButtonDisabled,
        "theme": "primary",
        "loading": uploading.value,
        "class": "".concat(uploadPrefix.value, "__continue"),
        "content": uploadText.value
      }, uploadButtonProps.value), null))]), createVNode(ImageViewer, mergeProps({
        "images": currentPreviewFile.value.map(function (t) {
          return t.url || t.raw;
        }),
        "visible": !!currentPreviewFile.value.length,
        "onClose": function onClose() {
          currentPreviewFile.value = [];
        },
        "index": previewIndex.value,
        "onIndexChange": function onIndexChange(val) {
          return previewIndex.value = val;
        }
      }, props.imageViewerProps), null)]);
    };
  }
});

export { MultipleFlowList as default };
//# sourceMappingURL=multiple-flow-list.mjs.map
