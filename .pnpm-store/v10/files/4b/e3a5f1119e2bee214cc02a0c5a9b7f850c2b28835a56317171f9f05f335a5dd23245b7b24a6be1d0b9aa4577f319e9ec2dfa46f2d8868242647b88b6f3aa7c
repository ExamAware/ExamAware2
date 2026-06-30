/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, computed, createVNode, mergeProps, Fragment } from 'vue';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { AddIcon, BrowseIcon, DeleteIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Loading } from '../../loading/index.mjs';
import { i as useGlobalIcon, a as useTNodeJSX } from '../../_chunks/dep-7673347f.mjs';
import { ImageViewer } from '../../image-viewer/index.mjs';
import { commonProps } from '../consts/index.mjs';
import { a as abridgeName } from '../../_chunks/dep-cdd448ec.mjs';
import { Link } from '../../link/index.mjs';
import { Image } from '../../image/index.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
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
import '../../_chunks/dep-97ecacde.mjs';
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
import '../../button/index.mjs';
import '../../button/button.mjs';
import '../../button/props.mjs';
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
var ImageCard = defineComponent({
  name: "UploadImageCard",
  props: _objectSpread(_objectSpread({}, commonProps), {}, {
    multiple: Boolean,
    max: Number,
    disabled: Boolean,
    showUploadProgress: Boolean,
    triggerUpload: Function,
    uploadFiles: Function,
    cancelUpload: Function,
    onPreview: Function,
    showImageFileName: Boolean
  }),
  setup: function setup(props) {
    var _toRefs = toRefs(props),
      displayFiles = _toRefs.displayFiles,
      classPrefix = _toRefs.classPrefix,
      multiple = _toRefs.multiple,
      max = _toRefs.max;
    var locale = computed(function () {
      return props.locale;
    });
    var _useGlobalIcon = useGlobalIcon({
        AddIcon: AddIcon,
        BrowseIcon: BrowseIcon,
        DeleteIcon: DeleteIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon
      }),
      BrowseIcon$1 = _useGlobalIcon.BrowseIcon,
      DeleteIcon$1 = _useGlobalIcon.DeleteIcon,
      AddIcon$1 = _useGlobalIcon.AddIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var renderTNodeJSX = useTNodeJSX();
    var showTrigger = computed(function () {
      var _displayFiles$value;
      if (multiple.value) {
        return !max.value || displayFiles.value.length < max.value;
      }
      return !((_displayFiles$value = displayFiles.value) !== null && _displayFiles$value !== void 0 && _displayFiles$value[0]);
    });
    var renderMainContent = function renderMainContent(file, index) {
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__card-content ").concat(classPrefix.value, "-upload__card-box")
      }, [createVNode(Image, {
        "class": "".concat(classPrefix.value, "-upload__card-image"),
        "src": file.url || file.raw,
        "error": "",
        "fit": "contain"
      }, null), createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__card-mask")
      }, [createVNode("span", {
        "class": "".concat(classPrefix.value, "-upload__card-mask-item"),
        "onClick": function onClick(e) {
          return e.stopPropagation();
        }
      }, [createVNode(ImageViewer, mergeProps({
        "images": displayFiles.value.map(function (t) {
          return t.url || t.raw;
        }),
        "defaultIndex": index,
        "trigger": function trigger(h, _ref) {
          var open = _ref.open;
          return createVNode(BrowseIcon$1, {
            "onClick": function onClick(_ref2) {
              var _props$onPreview;
              var e = _ref2.e;
              (_props$onPreview = props.onPreview) === null || _props$onPreview === void 0 || _props$onPreview.call(props, {
                file: file,
                index: index,
                e: e
              });
              open();
            }
          }, null);
        }
      }, props.imageViewerProps), null)]), !props.disabled && createVNode(Fragment, null, [createVNode("span", {
        "class": "".concat(classPrefix.value, "-upload__card-mask-item-divider")
      }, null), createVNode("span", {
        "class": "".concat(classPrefix.value, "-upload__card-mask-item"),
        "onClick": function onClick(e) {
          return e.stopPropagation();
        }
      }, [createVNode(DeleteIcon$1, {
        "onClick": function onClick(_ref3) {
          var _props$onRemove;
          var e = _ref3.e;
          return props === null || props === void 0 || (_props$onRemove = props.onRemove) === null || _props$onRemove === void 0 ? void 0 : _props$onRemove.call(props, {
            e: e,
            file: file,
            index: index
          });
        }
      }, null)])])])]);
    };
    var renderProgressFile = function renderProgressFile(file, loadCard) {
      var _locale$value;
      return createVNode("div", {
        "class": [loadCard, "".concat(classPrefix.value, "-upload__").concat(props.theme, "-").concat(file.status)]
      }, [createVNode(Loading, {
        "loading": true,
        "size": "medium"
      }, null), createVNode("p", null, [(_locale$value = locale.value) === null || _locale$value === void 0 || (_locale$value = _locale$value.progress) === null || _locale$value === void 0 ? void 0 : _locale$value.uploadingText, props.showUploadProgress ? " ".concat(file.percent, "%") : ""])]);
    };
    var renderFailFile = function renderFailFile(file, index, loadCard) {
      var _file$response, _locale$value2;
      return createVNode("div", {
        "class": loadCard
      }, [createVNode(ErrorCircleFilledIcon$1, null, null), createVNode("p", null, [((_file$response = file.response) === null || _file$response === void 0 ? void 0 : _file$response.error) || ((_locale$value2 = locale.value) === null || _locale$value2 === void 0 || (_locale$value2 = _locale$value2.progress) === null || _locale$value2 === void 0 ? void 0 : _locale$value2.failText)]), createVNode("div", {
        "class": "".concat(classPrefix.value, "-upload__card-mask")
      }, [createVNode("span", {
        "class": "".concat(classPrefix.value, "-upload__card-mask-item"),
        "onClick": function onClick(e) {
          return e.stopPropagation();
        }
      }, [createVNode(DeleteIcon$1, {
        "onClick": function onClick(_ref4) {
          var _props$onRemove2;
          var e = _ref4.e;
          return props === null || props === void 0 || (_props$onRemove2 = props.onRemove) === null || _props$onRemove2 === void 0 ? void 0 : _props$onRemove2.call(props, {
            e: e,
            file: file,
            index: index
          });
        }
      }, null)])])]);
    };
    return function () {
      var _displayFiles$value2;
      var customList = renderTNodeJSX("fileListDisplay", {
        params: {
          triggerUpload: props.triggerUpload,
          uploadFiles: props.uploadFiles,
          cancelUpload: props.cancelUpload,
          onPreview: props.onPreview,
          onRemove: props.onRemove,
          toUploadFiles: props.toUploadFiles,
          sizeOverLimitMessage: props.sizeOverLimitMessage,
          locale: props.locale,
          files: displayFiles.value
        }
      });
      if (customList) return customList;
      var cardItemClasses = "".concat(classPrefix.value, "-upload__card-item ").concat(classPrefix.value, "-is-background");
      var renderTrigger = function renderTrigger() {
        var _locale$value3;
        return renderTNodeJSX("trigger", {
          params: {
            triggerUpload: props.triggerUpload
          }
        }) || createVNode("li", {
          "class": cardItemClasses,
          "onClick": props.triggerUpload
        }, [createVNode("div", {
          "class": ["".concat(classPrefix.value, "-upload__image-add"), "".concat(classPrefix.value, "-upload__card-container"), "".concat(classPrefix.value, "-upload__card-box"), _defineProperty({}, "".concat(classPrefix.value, "-is-disabled"), props.disabled)]
        }, [createVNode(AddIcon$1, null, null), createVNode("p", {
          "class": ["".concat(classPrefix.value, "-size-s"), "".concat(classPrefix.value, "-upload__add-text")]
        }, [(_locale$value3 = locale.value) === null || _locale$value3 === void 0 || (_locale$value3 = _locale$value3.triggerUploadText) === null || _locale$value3 === void 0 ? void 0 : _locale$value3.image])])]);
      };
      return createVNode("div", null, [createVNode("ul", {
        "class": "".concat(classPrefix.value, "-upload__card")
      }, [(_displayFiles$value2 = displayFiles.value) === null || _displayFiles$value2 === void 0 ? void 0 : _displayFiles$value2.map(function (file, index) {
        var fileNameClassName = "".concat(classPrefix.value, "-upload__card-name");
        var loadCard = "".concat(classPrefix.value, "-upload__card-container ").concat(classPrefix.value, "-upload__card-box");
        var fileName = props.abridgeName ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file.name;
        return createVNode("li", {
          "class": cardItemClasses,
          "key": index
        }, [file.status === "progress" && renderProgressFile(file, loadCard), file.status === "fail" && renderFailFile(file, index, loadCard), !["progress", "fail"].includes(file.status) && renderMainContent(file, index), Boolean(fileName && props.showImageFileName) && (file.url ? createVNode(Link, {
          "href": file.url,
          "class": fileNameClassName,
          "target": "_blank",
          "hover": "color",
          "size": "small",
          "disabled": false
        }, _isSlot(fileName) ? fileName : {
          "default": function _default() {
            return [fileName];
          }
        }) : createVNode("span", {
          "class": fileNameClassName
        }, [fileName]))]);
      }), showTrigger.value && renderTrigger()])]);
    };
  }
});

export { ImageCard as default };
//# sourceMappingURL=image-card.mjs.map
