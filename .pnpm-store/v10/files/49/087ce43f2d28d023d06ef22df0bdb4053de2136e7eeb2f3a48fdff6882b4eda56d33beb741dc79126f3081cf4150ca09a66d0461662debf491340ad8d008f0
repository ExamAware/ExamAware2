/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { defineComponent, toRefs, computed, ref, createVNode, mergeProps, h } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { CheckCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { a as abridgeName, b as getFileSizeText } from '../../_chunks/dep-cdd448ec.mjs';
import { Button } from '../../button/index.mjs';
import { commonProps } from '../consts/index.mjs';
import { a as useTNodeJSX, c as useCommonClassName, i as useGlobalIcon } from '../../_chunks/dep-7673347f.mjs';
import { Loading } from '../../loading/index.mjs';
import useDrag from '../hooks/useDrag.mjs';
import { ImageViewer } from '../../image-viewer/index.mjs';
import { Image } from '../../image/index.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../button/button.mjs';
import '../../button/props.mjs';
import '../../loading/directive.mjs';
import 'lodash-es';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../image-viewer/image-viewer.mjs';
import '../../image-viewer/base/ImageItem.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../image-viewer/hooks/index.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../image-viewer/base/ImageModalIcon.mjs';
import '../../image-viewer/base/ImageViewerModal.mjs';
import '../../dialog/index.mjs';
import '../../dialog/dialog.mjs';
import '../../dialog/props.mjs';
import '../../dialog/hooks/index.mjs';
import '../../dialog/hooks/useAction.mjs';
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
//# sourceMappingURL=dragger-file.mjs.map
