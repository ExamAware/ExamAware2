/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, isVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CloseIcon, TimeFilledIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Loading } from '../../loading/index.js';
import { Link } from '../../link/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import { a as abridgeName } from '../../_chunks/dep-7d14e543.js';
import '../../_chunks/dep-880d05b9.js';
import { commonProps } from '../consts/index.js';
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
import '../../link/link.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../link/props.js';
import '../../_chunks/dep-8295e674.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var NormalFile = defineComponent({
  name: "UploadNormalFile",
  props: _objectSpread({
    multiple: Boolean
  }, commonProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props),
      theme = _toRefs.theme,
      disabled = _toRefs.disabled,
      classPrefix = _toRefs.classPrefix;
    var locale = computed(function () {
      return props.locale;
    });
    var _useGlobalIcon = useGlobalIcon({
        CloseIcon: CloseIcon,
        TimeFilledIcon: TimeFilledIcon,
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon,
        CloseCircleFilledIcon: CloseCircleFilledIcon
      }),
      CloseIcon$1 = _useGlobalIcon.CloseIcon,
      TimeFilledIcon$1 = _useGlobalIcon.TimeFilledIcon,
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon,
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var renderTNodeJSX = useTNodeJSX();
    var uploadPrefix = "".concat(classPrefix.value, "-upload");
    var renderProgress = function renderProgress(percent) {
      return createVNode("div", {
        "class": "".concat(uploadPrefix, "__single-progress")
      }, [createVNode(Loading, null, null), props.showUploadProgress && createVNode("span", {
        "class": "".concat(uploadPrefix, "__single-percent")
      }, [percent || 0, "%"])]);
    };
    var renderFilePreviewAsText = function renderFilePreviewAsText(files) {
      var _files$;
      if (theme.value !== "file") return null;
      if (!props.multiple && ((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.status) === "fail" && props.autoUpload) {
        return null;
      }
      return files.map(function (file, index) {
        var fileName = props.abridgeName && file.name ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file.name;
        return createVNode("div", {
          "class": "".concat(uploadPrefix, "__single-display-text ").concat(uploadPrefix, "__display-text--margin"),
          "key": file.name + index + file.percent + file.status
        }, [file.url ? createVNode(Link, {
          "href": file.url,
          "target": "_blank",
          "hover": "color",
          "size": "small",
          "class": "".concat(uploadPrefix, "__single-name"),
          "disabled": false
        }, _isSlot(fileName) ? fileName : {
          "default": function _default() {
            return [fileName];
          }
        }) : createVNode("span", {
          "class": "".concat(uploadPrefix, "__single-name")
        }, [fileName]), file.status === "fail" && createVNode("div", {
          "class": "".concat(uploadPrefix, "__flow-status ").concat(uploadPrefix, "__file-fail")
        }, [createVNode(ErrorCircleFilledIcon$1, null, null)]), file.status === "waiting" && createVNode("div", {
          "class": "".concat(uploadPrefix, "__flow-status ").concat(uploadPrefix, "__file-waiting")
        }, [createVNode(TimeFilledIcon$1, null, null)]), file.status === "progress" && renderProgress(file.percent), !disabled.value && file.status !== "progress" && createVNode(CloseIcon$1, {
          "class": "".concat(uploadPrefix, "__icon-delete"),
          "onClick": function onClick(_ref2) {
            var e = _ref2.e;
            return props.onRemove({
              e: e,
              file: file,
              index: index
            });
          }
        }, null)]);
      });
    };
    var renderFilePreviewAsInput = function renderFilePreviewAsInput() {
      var _props$abridgeName;
      if (theme.value !== "file-input") return;
      var file = props.displayFiles[0] || [];
      var inputTextClass = ["".concat(classPrefix.value, "-input__inner"), _defineProperty({}, "".concat(uploadPrefix, "__placeholder"), !props.displayFiles[0])];
      var disabledClass = disabled.value ? "".concat(classPrefix.value, "-is-disabled") : "";
      var fileName = (_props$abridgeName = props.abridgeName) !== null && _props$abridgeName !== void 0 && _props$abridgeName.length && file !== null && file !== void 0 && file.name ? abridgeName.apply(void 0, [file.name].concat(_toConsumableArray(props.abridgeName))) : file === null || file === void 0 ? void 0 : file.name;
      return createVNode("div", {
        "class": "".concat(uploadPrefix, "__single-input-preview ").concat(classPrefix.value, "-input ").concat(disabledClass)
      }, [createVNode("div", {
        "class": inputTextClass
      }, [createVNode("span", {
        "class": ["".concat(uploadPrefix, "__single-input-text"), _defineProperty({}, props.placeholderClass, props.placeholder && !(file !== null && file !== void 0 && file.name))]
      }, [file !== null && file !== void 0 && file.name ? fileName : props.placeholder]), (file === null || file === void 0 ? void 0 : file.status) === "progress" && renderProgress(file.percent), (file === null || file === void 0 ? void 0 : file.status) === "waiting" && createVNode(TimeFilledIcon$1, {
        "class": "".concat(uploadPrefix, "__status-icon ").concat(uploadPrefix, "__file-waiting")
      }, null), file.status === "success" && createVNode(CheckCircleFilledIcon$1, {
        "class": "".concat(uploadPrefix, "__status-icon")
      }, null), (file === null || file === void 0 ? void 0 : file.name) && file.status === "fail" && createVNode(ErrorCircleFilledIcon$1, {
        "class": "".concat(uploadPrefix, "__status-icon ").concat(uploadPrefix, "__file-fail")
      }, null), Boolean(!disabled.value && file.name) && createVNode(CloseCircleFilledIcon$1, {
        "class": "".concat(uploadPrefix, "__single-input-clear"),
        "onClick": function onClick(_ref5) {
          var e = _ref5.e;
          return props.onRemove({
            e: e,
            file: file,
            index: 0
          });
        }
      }, null)])]);
    };
    return function () {
      var _slots$default, _displayFiles$, _displayFiles$0$respo;
      var classes = ["".concat(uploadPrefix, "__single"), "".concat(uploadPrefix, "__single-").concat(theme.value)];
      var fileListDisplay = renderTNodeJSX("fileListDisplay", {
        params: {
          onRemove: props.onRemove,
          toUploadFiles: props.toUploadFiles,
          sizeOverLimitMessage: props.sizeOverLimitMessage,
          locale: props.locale,
          files: props.displayFiles
        }
      });
      if (props.fileListDisplay === null || fileListDisplay === null) {
        fileListDisplay = null;
      }
      var displayFiles = props.displayFiles;
      return createVNode("div", {
        "class": classes
      }, [theme.value === "file-input" && renderFilePreviewAsInput(), (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), theme.value === "file" && props.placeholder && !displayFiles[0] && createVNode("small", {
        "class": [props.tipsClasses, props.placeholderClass]
      }, [props.placeholder]), fileListDisplay === null ? null : fileListDisplay || renderFilePreviewAsText(displayFiles), !props.multiple && ((_displayFiles$ = displayFiles[0]) === null || _displayFiles$ === void 0 ? void 0 : _displayFiles$.status) === "fail" && theme.value === "file" ? createVNode("small", {
        "class": [props.errorClasses, props.placeholderClass]
      }, [((_displayFiles$0$respo = displayFiles[0].response) === null || _displayFiles$0$respo === void 0 ? void 0 : _displayFiles$0$respo.error) || locale.value.progress.failText]) : null]);
    };
  }
});

export { NormalFile as default };
//# sourceMappingURL=normal-file.js.map
