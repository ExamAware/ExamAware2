/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, computed, createVNode, mergeProps } from 'vue';
import { UploadIcon } from 'tdesign-icons-vue-next';
import props from './props.js';
import NormalFile from './components/normal-file.js';
import DraggerFile from './components/dragger-file.js';
import ImageCard from './components/image-card.js';
import MultipleFlowList from './components/multiple-flow-list.js';
import { Button } from '../button/index.js';
import CustomFile from './components/custom-file.js';
import useUpload from './hooks/useUpload.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import '../config-provider/hooks/useConfig.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import '../link/index.js';
import '../link/link.js';
import '../link/props.js';
import '../_chunks/dep-7d14e543.js';
import '../_chunks/dep-8295e674.js';
import './consts/index.js';
import './hooks/useDrag.js';
import '../image-viewer/index.js';
import '../image-viewer/image-viewer.js';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-51e5a827.js';
import '../image/index.js';
import '../image/image.js';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-d9f4e50e.js';
import '../image/props.js';
import '../space/index.js';
import '../space/space.js';
import '../space/props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../image-viewer/base/ImageItem.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../image-viewer/hooks/index.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import '../image-viewer/base/ImageModalIcon.js';
import '../image-viewer/base/ImageViewerModal.js';
import '../dialog/index.js';
import '../dialog/dialog.js';
import '../dialog/props.js';
import '../_chunks/dep-7f74a978.js';
import '../dialog/hooks/useSameTarget.js';
import '../_chunks/dep-167f0981.js';
import '../dialog/utils/index.js';
import '../dialog/dialog-card.js';
import '../dialog/dialog-card-props.js';
import '../dialog/hooks/useAction.js';
import '../button/button.js';
import '../button/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../dialog/plugin.js';
import '../image-viewer/props.js';
import '../image-viewer/base/ImageViewerUtils.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../tooltip/utils/index.js';
import '../image-viewer/consts/index.js';
import '../image-viewer/utils/index.js';
import '../_chunks/dep-4d7b9152.js';
import '@babel/runtime/helpers/toArray';

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
//# sourceMappingURL=upload.js.map
