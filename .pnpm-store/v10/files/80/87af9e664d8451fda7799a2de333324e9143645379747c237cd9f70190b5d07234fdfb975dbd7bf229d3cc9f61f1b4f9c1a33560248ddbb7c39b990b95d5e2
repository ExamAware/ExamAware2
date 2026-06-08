/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var loading_index = require('../../loading/index.js');
var link_index = require('../../link/index.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$1 = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
var utils = require('../../_chunks/dep-e7678f7a.js');
require('../../_chunks/dep-cc66acf1.js');
var upload_consts_index = require('../consts/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-8382953f.js');
require('../../loading/props.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-d62a674d.js');
require('../../link/link.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../link/props.js');
require('../../_chunks/dep-733b2b51.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var NormalFile = Vue.defineComponent({
  name: "UploadNormalFile",
  props: _objectSpread({
    multiple: Boolean
  }, upload_consts_index.commonProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var _toRefs = Vue.toRefs(props),
      theme = _toRefs.theme,
      disabled = _toRefs.disabled,
      classPrefix = _toRefs.classPrefix;
    var locale = Vue.computed(function () {
      return props.locale;
    });
    var _useGlobalIcon = index.useGlobalIcon({
        CloseIcon: tdesignIconsVueNext.CloseIcon,
        TimeFilledIcon: tdesignIconsVueNext.TimeFilledIcon,
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon,
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon
      }),
      CloseIcon = _useGlobalIcon.CloseIcon,
      TimeFilledIcon = _useGlobalIcon.TimeFilledIcon,
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon,
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon;
    var renderTNodeJSX = index$1.useTNodeJSX();
    var uploadPrefix = "".concat(classPrefix.value, "-upload");
    var renderProgress = function renderProgress(percent) {
      return Vue.createVNode("div", {
        "class": "".concat(uploadPrefix, "__single-progress")
      }, [Vue.createVNode(loading_index.Loading, null, null), props.showUploadProgress && Vue.createVNode("span", {
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
        var fileName = props.abridgeName && file.name ? utils.abridgeName.apply(void 0, [file.name].concat(_toConsumableArray__default["default"](props.abridgeName))) : file.name;
        return Vue.createVNode("div", {
          "class": "".concat(uploadPrefix, "__single-display-text ").concat(uploadPrefix, "__display-text--margin"),
          "key": file.name + index + file.percent + file.status
        }, [file.url ? Vue.createVNode(link_index.Link, {
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
        }) : Vue.createVNode("span", {
          "class": "".concat(uploadPrefix, "__single-name")
        }, [fileName]), file.status === "fail" && Vue.createVNode("div", {
          "class": "".concat(uploadPrefix, "__flow-status ").concat(uploadPrefix, "__file-fail")
        }, [Vue.createVNode(ErrorCircleFilledIcon, null, null)]), file.status === "waiting" && Vue.createVNode("div", {
          "class": "".concat(uploadPrefix, "__flow-status ").concat(uploadPrefix, "__file-waiting")
        }, [Vue.createVNode(TimeFilledIcon, null, null)]), file.status === "progress" && renderProgress(file.percent), !disabled.value && file.status !== "progress" && Vue.createVNode(CloseIcon, {
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
      var inputTextClass = ["".concat(classPrefix.value, "-input__inner"), _defineProperty__default["default"]({}, "".concat(uploadPrefix, "__placeholder"), !props.displayFiles[0])];
      var disabledClass = disabled.value ? "".concat(classPrefix.value, "-is-disabled") : "";
      var fileName = (_props$abridgeName = props.abridgeName) !== null && _props$abridgeName !== void 0 && _props$abridgeName.length && file !== null && file !== void 0 && file.name ? utils.abridgeName.apply(void 0, [file.name].concat(_toConsumableArray__default["default"](props.abridgeName))) : file === null || file === void 0 ? void 0 : file.name;
      return Vue.createVNode("div", {
        "class": "".concat(uploadPrefix, "__single-input-preview ").concat(classPrefix.value, "-input ").concat(disabledClass)
      }, [Vue.createVNode("div", {
        "class": inputTextClass
      }, [Vue.createVNode("span", {
        "class": ["".concat(uploadPrefix, "__single-input-text"), _defineProperty__default["default"]({}, props.placeholderClass, props.placeholder && !(file !== null && file !== void 0 && file.name))]
      }, [file !== null && file !== void 0 && file.name ? fileName : props.placeholder]), (file === null || file === void 0 ? void 0 : file.status) === "progress" && renderProgress(file.percent), (file === null || file === void 0 ? void 0 : file.status) === "waiting" && Vue.createVNode(TimeFilledIcon, {
        "class": "".concat(uploadPrefix, "__status-icon ").concat(uploadPrefix, "__file-waiting")
      }, null), file.status === "success" && Vue.createVNode(CheckCircleFilledIcon, {
        "class": "".concat(uploadPrefix, "__status-icon")
      }, null), (file === null || file === void 0 ? void 0 : file.name) && file.status === "fail" && Vue.createVNode(ErrorCircleFilledIcon, {
        "class": "".concat(uploadPrefix, "__status-icon ").concat(uploadPrefix, "__file-fail")
      }, null), Boolean(!disabled.value && file.name) && Vue.createVNode(CloseCircleFilledIcon, {
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
      return Vue.createVNode("div", {
        "class": classes
      }, [theme.value === "file-input" && renderFilePreviewAsInput(), (_slots$default = slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), theme.value === "file" && props.placeholder && !displayFiles[0] && Vue.createVNode("small", {
        "class": [props.tipsClasses, props.placeholderClass]
      }, [props.placeholder]), fileListDisplay === null ? null : fileListDisplay || renderFilePreviewAsText(displayFiles), !props.multiple && ((_displayFiles$ = displayFiles[0]) === null || _displayFiles$ === void 0 ? void 0 : _displayFiles$.status) === "fail" && theme.value === "file" ? Vue.createVNode("small", {
        "class": [props.errorClasses, props.placeholderClass]
      }, [((_displayFiles$0$respo = displayFiles[0].response) === null || _displayFiles$0$respo === void 0 ? void 0 : _displayFiles$0$respo.error) || locale.value.progress.failText]) : null]);
    };
  }
});

exports["default"] = NormalFile;
//# sourceMappingURL=normal-file.js.map
