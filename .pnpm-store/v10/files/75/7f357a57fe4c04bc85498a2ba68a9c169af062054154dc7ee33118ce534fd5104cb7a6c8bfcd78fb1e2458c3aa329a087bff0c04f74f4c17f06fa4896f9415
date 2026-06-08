/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { defineComponent, toRefs, computed, ref, createVNode, h, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CheckCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { a as abridgeName, b as getFileSizeText } from '../../_chunks/dep-7d14e543.js';
import { Button } from '../../button/index.js';
import { commonProps } from '../consts/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { Loading } from '../../loading/index.js';
import useDrag from '../hooks/useDrag.js';
import { ImageViewer } from '../../image-viewer/index.js';
import { Image } from '../../image/index.js';
import '../../_chunks/dep-8295e674.js';
import '../../button/button.js';
import '../../button/props.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-16bcfabc.js';
import '../../loading/props.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-664b8b22.js';
import '../../image-viewer/image-viewer.js';
import '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-51e5a827.js';
import '../../image-viewer/base/ImageItem.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-d9f4e50e.js';
import '../../image-viewer/hooks/index.js';
import '../../_chunks/dep-1a63d163.js';
import '../../_chunks/dep-05f15b4e.js';
import '../../image-viewer/base/ImageModalIcon.js';
import '../../image-viewer/base/ImageViewerModal.js';
import '../../dialog/index.js';
import '../../dialog/dialog.js';
import '../../dialog/props.js';
import '../../_chunks/dep-7f74a978.js';
import '../../dialog/hooks/useSameTarget.js';
import '../../_chunks/dep-167f0981.js';
import '../../dialog/utils/index.js';
import '../../dialog/dialog-card.js';
import '../../dialog/dialog-card-props.js';
import '../../dialog/hooks/useAction.js';
import '../../dialog/plugin.js';
import '../../image-viewer/props.js';
import '../../image-viewer/base/ImageViewerUtils.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../tooltip/utils/index.js';
import '../../image-viewer/consts/index.js';
import '../../image-viewer/utils/index.js';
import '../../image/image.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../image/props.js';
import '../../space/index.js';
import '../../space/space.js';
import '../../space/props.js';
import '../../_chunks/dep-e3ce8c8f.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DraggerFile = defineComponent({
  name: "UploadDraggerFile",
  props: _objectSpread(_objectSpread({}, commonProps), {}, {
    trigger: Function,
    triggerUpload: Function,
    uploadFiles: Function,
    cancelUpload: Function,
    dragEvents: Object
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props),
      displayFiles = _toRefs.displayFiles,
      disabled = _toRefs.disabled,
      accept = _toRefs.accept;
    var locale = computed(function () {
      return props.locale;
    });
    var renderTNodeJSX = useTNodeJSX();
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var uploadPrefix = "".concat(props.classPrefix, "-upload");
    var drag = useDrag(props.dragEvents, accept);
    var dragActive = drag.dragActive;
    var draggerFileRef = ref();
    var classes = computed(function () {
      var _displayFiles$value$;
      return ["".concat(uploadPrefix, "__dragger"), _defineProperty({}, "".concat(uploadPrefix, "__dragger-center"), !displayFiles.value[0]), _defineProperty({}, "".concat(uploadPrefix, "__dragger-error"), ((_displayFiles$value$ = displayFiles.value[0]) === null || _displayFiles$value$ === void 0 ? void 0 : _displayFiles$value$.status) === "fail")];
    });
    var _useGlobalIcon = useGlobalIcon({
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon
      }),
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var renderImage = function renderImage() {
      var _file$response;
      if (!props.displayFiles.length) return;
      var file = displayFiles.value[0];
      if (!file) return null;
      var url = (file === null || file === void 0 ? void 0 : file.url) || (file === null || file === void 0 || (_file$response = file.response) === null || _file$response === void 0 ? void 0 : _file$response.url);
      return createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-img-wrap")
      }, [createVNode(ImageViewer, mergeProps({
        "images": [url],
        "trigger": function trigger(h2, _ref4) {
          var open = _ref4.open;
          return createVNode(Image, {
            "src": url || file.raw,
            "onClick": open,
            "error": "",
            "loading": ""
          }, null);
        }
      }, props.imageViewerProps), null)]);
    };
    var renderUploading = function renderUploading() {
      if (!props.displayFiles.length) return;
      var file = displayFiles.value[0];
      if (!file) return null;
      if ((file === null || file === void 0 ? void 0 : file.status) === "progress") {
        return createVNode("div", {
          "class": "".concat(uploadPrefix, "__single-progress")
        }, [createVNode(Loading, null, null), props.showUploadProgress && createVNode("span", {
          "class": "".concat(uploadPrefix, "__single-percent")
        }, [file.percent, "%"])]);
      }
    };
    var renderMainPreview = function renderMainPreview() {
      var _locale$value;
      var file = displayFiles.value[0];
      var fileName = props.abridgeName ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file.name;
      var fileInfo = [createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-text"),
        "key": "info"
      }, [createVNode("span", {
        "class": "".concat(uploadPrefix, "__single-name")
      }, [fileName]), file.status === "progress" && renderUploading(), file.status === "success" && createVNode(CheckCircleFilledIcon$1, null, null), file.status === "fail" && createVNode(ErrorCircleFilledIcon$1, null, null)]), createVNode("small", {
        "class": "".concat(SIZE.value.small),
        "key": "size"
      }, [locale.value.file.fileSizeText, "\uFF1A", getFileSizeText(file.size)]), createVNode("small", {
        "class": "".concat(SIZE.value.small),
        "key": "time"
      }, [locale.value.file.fileOperationDateText, "\uFF1A", file.uploadTime || "-"])];
      return createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-progress")
      }, [props.theme === "image" && renderImage(), createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-progress-info")
      }, [renderTNodeJSX("fileListDisplay", {
        params: {
          files: props.displayFiles
        }
      }) || fileInfo, createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-btns")
      }, [["progress", "waiting"].includes(file.status) && !disabled.value && createVNode(Button, {
        "theme": "primary",
        "variant": "text",
        "class": "".concat(uploadPrefix, "__dragger-progress-cancel"),
        "onClick": function onClick(e) {
          var _props$cancelUpload;
          return (_props$cancelUpload = props.cancelUpload) === null || _props$cancelUpload === void 0 ? void 0 : _props$cancelUpload.call(props, {
            e: e,
            file: props.toUploadFiles[0] || props.files[0]
          });
        }
      }, {
        "default": function _default() {
          return [(_locale$value = locale.value) === null || _locale$value === void 0 ? void 0 : _locale$value.cancelUploadText];
        }
      }), !props.autoUpload && file.status === "waiting" && createVNode(Button, {
        "theme": "primary",
        "variant": "text",
        "disabled": disabled.value,
        "onClick": function onClick() {
          var _props$uploadFiles;
          return (_props$uploadFiles = props.uploadFiles) === null || _props$uploadFiles === void 0 ? void 0 : _props$uploadFiles.call(props);
        },
        "class": "".concat(uploadPrefix, "__dragger-upload-btn")
      }, {
        "default": function _default() {
          return [locale.value.triggerUploadText.normal];
        }
      })]), ["fail", "success"].includes(file === null || file === void 0 ? void 0 : file.status) && !disabled.value && createVNode("div", {
        "class": "".concat(uploadPrefix, "__dragger-btns")
      }, [createVNode(Button, {
        "theme": "primary",
        "variant": "text",
        "disabled": disabled.value,
        "class": "".concat(uploadPrefix, "__dragger-progress-cancel"),
        "onClick": props.triggerUpload
      }, {
        "default": function _default() {
          return [locale.value.triggerUploadText.reupload];
        }
      }), createVNode(Button, {
        "theme": "danger",
        "variant": "text",
        "disabled": disabled.value,
        "class": "".concat(uploadPrefix, "__dragger-delete-btn"),
        "onClick": function onClick(e) {
          return props.onRemove({
            e: e,
            index: 0,
            file: file
          });
        }
      }, {
        "default": function _default() {
          return [locale.value.triggerUploadText["delete"]];
        }
      })])])]);
    };
    var renderDefaultDragElement = function renderDefaultDragElement() {
      var _locale$value$trigger;
      var unActiveElement = createVNode("div", null, [createVNode("span", {
        "class": "".concat(uploadPrefix, "--highlight")
      }, [(_locale$value$trigger = locale.value.triggerUploadText) === null || _locale$value$trigger === void 0 ? void 0 : _locale$value$trigger.normal]), createVNode("span", null, ["\xA0\xA0/\xA0\xA0", locale.value.dragger.draggingText])]);
      var activeElement = createVNode("div", null, [locale.value.dragger.dragDropText]);
      return dragActive.value ? activeElement : unActiveElement;
    };
    var getContent = function getContent() {
      var _slots$default;
      var file = displayFiles.value[0];
      if (file && (["progress", "success", "fail", "waiting"].includes(file.status) || !file.status)) {
        return renderMainPreview();
      }
      return createVNode("div", {
        "class": "".concat(uploadPrefix, "__trigger"),
        "onClick": props.triggerUpload
      }, [((_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)) || renderDefaultDragElement()]);
    };
    return function () {
      var _props$trigger;
      return createVNode("div", {
        "ref": draggerFileRef,
        "class": classes.value,
        "onDrop": drag.handleDrop,
        "onDragenter": drag.handleDragenter,
        "onDragover": drag.handleDragover,
        "onDragleave": drag.handleDragleave
      }, [((_props$trigger = props.trigger) === null || _props$trigger === void 0 ? void 0 : _props$trigger.call(props, h, {
        files: displayFiles.value,
        dragActive: dragActive.value
      })) || getContent()]);
    };
  }
});

export { DraggerFile as default };
//# sourceMappingURL=dragger-file.js.map
