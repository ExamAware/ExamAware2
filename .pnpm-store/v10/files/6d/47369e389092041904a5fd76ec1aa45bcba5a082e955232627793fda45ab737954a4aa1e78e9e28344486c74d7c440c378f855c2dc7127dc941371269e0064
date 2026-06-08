/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, isVNode, mergeProps, Fragment } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { AddIcon, BrowseIcon, DeleteIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Loading } from '../../loading/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import { a as abridgeName } from '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-880d05b9.js';
import { ImageViewer } from '../../image-viewer/index.js';
import { commonProps } from '../consts/index.js';
import { Link } from '../../link/index.js';
import { Image } from '../../image/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../_chunks/dep-8295e674.js';
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
import '../../button/index.js';
import '../../button/button.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../../dialog/hooks/useSameTarget.js';
import '../../_chunks/dep-167f0981.js';
import '../../dialog/utils/index.js';
import '../../dialog/dialog-card.js';
import '../../dialog/dialog-card-props.js';
import '../../dialog/hooks/useAction.js';
import 'tdesign-vue-next/esm/common/style/web/components/dialog/_index.less';
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
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import '../../image-viewer/consts/index.js';
import '../../image-viewer/utils/index.js';
import '../../image/image.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../image/props.js';
import '../../space/index.js';
import '../../space/space.js';
import '../../space/props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/space/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/image/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/image-viewer/_index.less';
import '../../link/link.js';
import '../../link/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/link/_index.less';

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
//# sourceMappingURL=image-card.js.map
