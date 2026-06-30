/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { UploadIcon } from 'tdesign-icons-vue-next';
import props from './props.mjs';
import NormalFile from './components/normal-file.mjs';
import DraggerFile from './components/dragger-file.mjs';
import ImageCard from './components/image-card.mjs';
import MultipleFlowList from './components/multiple-flow-list.mjs';
import { Button } from '../button/index.mjs';
import CustomFile from './components/custom-file.mjs';
import useUpload from './hooks/useUpload.mjs';
import { b as useContent, a as useTNodeJSX, e as useDisabled, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import 'lodash-es';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../loading/props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../link/index.mjs';
import '../link/link.mjs';
import '../link/props.mjs';
import './consts/index.mjs';
import './hooks/useDrag.mjs';
import '../image-viewer/index.mjs';
import '../image-viewer/image-viewer.mjs';
import '../image/index.mjs';
import '../image/image.mjs';
import '../image/props.mjs';
import '../space/index.mjs';
import '../space/space.mjs';
import '../space/props.mjs';
import '../image-viewer/base/ImageItem.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../image-viewer/hooks/index.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../image-viewer/base/ImageModalIcon.mjs';
import '../image-viewer/base/ImageViewerModal.mjs';
import '../dialog/index.mjs';
import '../dialog/dialog.mjs';
import '../dialog/props.mjs';
import '../dialog/hooks/index.mjs';
import '../dialog/hooks/useAction.mjs';
import '../dialog/hooks/useSameTarget.mjs';
import '../_chunks/dep-03148507.mjs';
import '../dialog/utils/index.mjs';
import '../dialog/dialog-card.mjs';
import '../dialog/dialog-card-props.mjs';
import '../button/button.mjs';
import '../button/props.mjs';
import '../dialog/plugin.mjs';
import '../image-viewer/props.mjs';
import '../image-viewer/base/ImageViewerUtils.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../tooltip/utils/index.mjs';
import '../image-viewer/consts/index.mjs';
import '../image-viewer/utils/index.mjs';
import '../_chunks/dep-4d44d5f2.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Upload = defineComponent({
  name: "TUpload",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots,
      expose = _ref.expose;
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var _useUpload = useUpload(props2),
      locale = _useUpload.locale,
      classPrefix = _useUpload.classPrefix,
      triggerUploadText = _useUpload.triggerUploadText,
      toUploadFiles = _useUpload.toUploadFiles,
      displayFiles = _useUpload.displayFiles,
      uploadValue = _useUpload.uploadValue,
      sizeOverLimitMessage = _useUpload.sizeOverLimitMessage,
      uploading = _useUpload.uploading,
      tipsClasses = _useUpload.tipsClasses,
      errorClasses = _useUpload.errorClasses,
      placeholderClass = _useUpload.placeholderClass,
      inputRef = _useUpload.inputRef,
      onInnerRemove = _useUpload.onInnerRemove,
      uploadFiles = _useUpload.uploadFiles,
      onNormalFileChange = _useUpload.onNormalFileChange,
      onDragFileChange = _useUpload.onDragFileChange,
      onPasteFileChange = _useUpload.onPasteFileChange,
      triggerUpload = _useUpload.triggerUpload,
      cancelUpload = _useUpload.cancelUpload,
      uploadFilePercent = _useUpload.uploadFilePercent;
    var disabled = useDisabled();
    var _useGlobalIcon = useGlobalIcon({
        UploadIcon: UploadIcon
      }),
      UploadIcon$1 = _useGlobalIcon.UploadIcon;
    var triggerUploadButtonText = computed(function () {
      var _props2$triggerButton, _props2$triggerButton2;
      return ((_props2$triggerButton = props2.triggerButtonProps) === null || _props2$triggerButton === void 0 ? void 0 : _props2$triggerButton["default"]) || ((_props2$triggerButton2 = props2.triggerButtonProps) === null || _props2$triggerButton2 === void 0 ? void 0 : _props2$triggerButton2.content) || triggerUploadText.value;
    });
    expose({
      upload: inputRef.value,
      uploading: uploading,
      triggerUpload: triggerUpload,
      uploadFiles: uploadFiles,
      cancelUpload: cancelUpload,
      uploadFilePercent: uploadFilePercent
    });
    var renderTrigger = function renderTrigger() {
      var getDefaultTrigger = function getDefaultTrigger() {
        if (props2.theme === "file-input") {
          return createVNode(Button, mergeProps({
            "disabled": disabled.value,
            "variant": "outline"
          }, props2.triggerButtonProps), {
            "default": function _default() {
              return [triggerUploadButtonText.value];
            }
          });
        }
        return createVNode(Button, mergeProps({
          "disabled": disabled.value,
          "variant": "outline",
          "icon": function icon() {
            return createVNode(UploadIcon$1, null, null);
          }
        }, props2.triggerButtonProps), {
          "default": function _default() {
            return [triggerUploadButtonText.value];
          }
        });
      };
      return renderContent("default", "trigger", {
        params: {
          dragActive: false,
          files: uploadValue.value
        }
      }) || getDefaultTrigger();
    };
    var commonDisplayFileProps = computed(function () {
      return {
        accept: props2.accept,
        files: uploadValue.value,
        toUploadFiles: toUploadFiles.value,
        displayFiles: displayFiles.value,
        theme: props2.theme,
        placeholder: props2.placeholder,
        disabled: disabled.value,
        tips: props2.tips,
        status: props2.status,
        sizeOverLimitMessage: sizeOverLimitMessage.value,
        uploading: uploading.value,
        classPrefix: classPrefix.value,
        tipsClasses: tipsClasses,
        errorClasses: errorClasses,
        placeholderClass: placeholderClass,
        locale: locale.value,
        autoUpload: props2.autoUpload,
        abridgeName: props2.abridgeName,
        showUploadProgress: props2.showUploadProgress,
        fileListDisplay: props2.fileListDisplay,
        onRemove: onInnerRemove,
        uploadPastedFiles: props2.uploadPastedFiles,
        onPasteFileChange: onPasteFileChange,
        imageViewerProps: props2.imageViewerProps
      };
    });
    var dragProps = {
      onDragFileChange: onDragFileChange,
      onDragenter: props2.onDragenter,
      onDragleave: props2.onDragleave,
      onDrop: props2.onDrop
    };
    var uploadClasses = computed(function () {
      return ["".concat(classPrefix.value, "-upload"), _defineProperty({}, "".concat(classPrefix.value, "-upload--theme-").concat(props2.theme), props2.theme === "file-input")];
    });
    var getNormalFileNode = function getNormalFileNode() {
      return createVNode(NormalFile, mergeProps(commonDisplayFileProps.value, {
        "multiple": props2.multiple
      }), {
        "default": function _default() {
          return [createVNode("div", {
            "class": "".concat(classPrefix.value, "-upload__trigger"),
            "onClick": triggerUpload
          }, [renderTrigger()])];
        },
        fileListDisplay: slots.fileListDisplay,
        "file-list-display": slots["file-list-display"]
      });
    };
    var getSingleFileDraggerUploadNode = function getSingleFileDraggerUploadNode() {
      return createVNode(DraggerFile, mergeProps(commonDisplayFileProps.value, {
        "dragEvents": dragProps,
        "trigger": props2.trigger,
        "cancelUpload": cancelUpload,
        "triggerUpload": triggerUpload,
        "uploadFiles": uploadFiles,
        "onCancelUpload": props2.onCancelUpload
      }), {
        fileListDisplay: slots.fileListDisplay,
        "file-list-display": slots["file-list-display"]
      });
    };
    var getImageCardUploadNode = function getImageCardUploadNode() {
      return createVNode(ImageCard, mergeProps(commonDisplayFileProps.value, {
        "multiple": props2.multiple,
        "max": props2.max,
        "showUploadProgress": props2.showUploadProgress,
        "triggerUpload": triggerUpload,
        "uploadFiles": uploadFiles,
        "cancelUpload": cancelUpload,
        "onPreview": props2.onPreview,
        "showImageFileName": props2.showImageFileName
      }), {
        fileListDisplay: slots.fileListDisplay,
        "file-list-display": slots["file-list-display"],
        trigger: slots.trigger
      });
    };
    var getFlowListNode = function getFlowListNode() {
      return createVNode(MultipleFlowList, mergeProps(commonDisplayFileProps.value, {
        "isBatchUpload": props2.isBatchUpload,
        "draggable": props2.draggable,
        "dragEvents": dragProps,
        "uploadFiles": uploadFiles,
        "cancelUpload": cancelUpload,
        "onPreview": props2.onPreview,
        "showImageFileName": props2.showImageFileName,
        "showThumbnail": props2.showThumbnail,
        "uploadButton": props2.uploadButton,
        "cancelUploadButton": props2.cancelUploadButton
      }), {
        "default": function _default() {
          return [createVNode("div", {
            "class": "".concat(classPrefix.value, "-upload__trigger"),
            "onClick": triggerUpload
          }, [!props2.draggable && renderTrigger()])];
        },
        fileListDisplay: slots.fileListDisplay,
        "file-list-display": slots["file-list-display"],
        uploadButton: slots.uploadButton,
        "upload-button": slots["upload-button"],
        cancelUploadButton: slots.cancelUploadButton,
        "cancel-upload-button": slots["cancel-upload-button"]
      });
    };
    var getCustomFile = function getCustomFile() {
      return createVNode(CustomFile, mergeProps(commonDisplayFileProps.value, {
        "draggable": props2.draggable,
        "dragContent": props2.dragContent,
        "dragEvents": dragProps,
        "triggerUpload": triggerUpload,
        "trigger": props2.trigger,
        "childrenNode": slots["default"]
      }), {
        "default": function _default() {
          return [renderTrigger()];
        },
        dragContent: slots.dragContent,
        "drag-content": slots["drag-content"],
        trigger: slots.trigger
      });
    };
    return function () {
      return createVNode("div", {
        "class": uploadClasses.value,
        "onPaste": props2.uploadPastedFiles ? onPasteFileChange : void 0
      }, [createVNode("input", mergeProps({
        "ref": inputRef,
        "type": "file",
        "disabled": disabled.value,
        "onChange": onNormalFileChange,
        "multiple": props2.multiple,
        "accept": props2.accept,
        "hidden": true
      }, props2.inputAttributes ? _objectSpread({}, props2.inputAttributes) : {}), null), ["file", "file-input"].includes(props2.theme) && !props2.draggable && getNormalFileNode(), ["file", "image"].includes(props2.theme) && props2.draggable && getSingleFileDraggerUploadNode(), props2.theme === "image" && !props2.draggable && getImageCardUploadNode(), ["image-flow", "file-flow"].includes(props2.theme) && getFlowListNode(), props2.theme === "custom" && getCustomFile(), Boolean(props2.tips || slots.tips) && createVNode("small", {
        "class": [tipsClasses, _defineProperty({}, "".concat(classPrefix.value, "-upload__tips-").concat(props2.status), props2.status)]
      }, [renderTNodeJSX("tips")]), sizeOverLimitMessage.value && createVNode("small", {
        "class": errorClasses
      }, [sizeOverLimitMessage.value])]);
    };
  }
});

export { _Upload as default };
//# sourceMappingURL=upload.mjs.map
