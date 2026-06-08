/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var dialog_dialogCardProps = require('./dialog-card-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var dialog_hooks_useAction = require('./hooks/useAction.js');
var dialog_props = require('./props.js');
var dialog_utils_index = require('./utils/index.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../button/index.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DialogCard = Vue.defineComponent({
  name: "TDialogCard",
  directives: {
    draggable: function draggable(el, binding) {
      if (el && binding && binding.value) {
        dialog_utils_index.initDragEvent(el);
      }
    }
  },
  props: _objectSpread(_objectSpread({}, dialog_props["default"]), dialog_dialogCardProps["default"]),
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var rootRef = Vue.ref(null);
    var COMPONENT_NAME = index.usePrefixClass("dialog");
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var _useConfig = configProvider_hooks_useConfig.useConfig("dialog"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index$2.useGlobalIcon({
        CloseIcon: tdesignIconsVueNext.CloseIcon,
        InfoCircleFilledIcon: tdesignIconsVueNext.InfoCircleFilledIcon,
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon
      }),
      CloseIcon = _useGlobalIcon.CloseIcon,
      InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon,
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon;
    var _toRefs = Vue.toRefs(props),
      cancelBtn = _toRefs.cancelBtn,
      confirmBtn = _toRefs.confirmBtn,
      confirmLoading = _toRefs.confirmLoading;
    var confirmBtnAction = function confirmBtnAction(e) {
      var _props$onConfirm;
      return (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 ? void 0 : _props$onConfirm.call(props, {
        e: e
      });
    };
    var cancelBtnAction = function cancelBtnAction(e) {
      var _props$onCancel;
      return (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, {
        e: e
      });
    };
    var _useAction = dialog_hooks_useAction.useAction({
        confirmBtnAction: confirmBtnAction,
        cancelBtnAction: cancelBtnAction
      }),
      getConfirmBtn = _useAction.getConfirmBtn,
      getCancelBtn = _useAction.getCancelBtn;
    var isModeLess = Vue.computed(function () {
      return props.mode === "modeless";
    });
    var isFullScreen = Vue.computed(function () {
      return props.mode === "full-screen";
    });
    var closeBtnAction = function closeBtnAction(e) {
      var _props$onCloseBtnClic;
      return props === null || props === void 0 || (_props$onCloseBtnClic = props.onCloseBtnClick) === null || _props$onCloseBtnClic === void 0 ? void 0 : _props$onCloseBtnClic.call(props, {
        e: e
      });
    };
    var onStopDown = function onStopDown(e) {
      if (isModeLess.value && props !== null && props !== void 0 && props.draggable) e.stopPropagation();
    };
    var resetPosition = function resetPosition() {
      if (!rootRef.value && isModeLess.value && props.draggable) return;
      rootRef.value.style.position = "relative";
      rootRef.value.style.left = "unset";
      rootRef.value.style.top = "unset";
    };
    expose({
      $el: rootRef,
      resetPosition: resetPosition
    });
    var dialogClass = Vue.computed(function () {
      var dialogClass2 = ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "__modal-").concat(props.theme), isModeLess.value && props.draggable && "".concat(COMPONENT_NAME.value, "--draggable"), props.dialogClassName];
      if (isFullScreen.value) {
        dialogClass2.push("".concat(COMPONENT_NAME.value, "__fullscreen"));
      } else {
        dialogClass2.push.apply(dialogClass2, ["".concat(COMPONENT_NAME.value, "--default"), "".concat(COMPONENT_NAME.value, "--").concat(props.placement)]);
      }
      return dialogClass2;
    });
    var dialogStyle = Vue.computed(function () {
      return !isFullScreen.value ? _objectSpread({
        width: dialog_utils_index.getCSSValue(props.width)
      }, props.dialogStyle) : _objectSpread({}, props.dialogStyle);
    });
    var renderCard = function renderCard() {
      var confirmBtnLoading = Vue.computed(function () {
        var _confirmBtn$value;
        return ((_confirmBtn$value = confirmBtn.value) === null || _confirmBtn$value === void 0 ? void 0 : _confirmBtn$value.loading) || confirmLoading.value;
      });
      var defaultFooter = Vue.createVNode("div", null, [getCancelBtn({
        cancelBtn: cancelBtn.value,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel")
      }), getConfirmBtn({
        theme: props === null || props === void 0 ? void 0 : props.theme,
        confirmBtn: confirmBtn.value,
        globalConfirm: globalConfig.value.confirm,
        globalConfirmBtnTheme: globalConfig.value.confirmBtnTheme,
        className: "".concat(COMPONENT_NAME.value, "__confirm"),
        confirmLoading: confirmBtnLoading.value
      })]);
      var footerContent = renderTNodeJSX("footer", defaultFooter);
      var renderHeader = function renderHeader() {
        var _renderTNodeJSX;
        var header = (_renderTNodeJSX = renderTNodeJSX("header", Vue.createVNode("h5", {
          "class": "title"
        }, null))) !== null && _renderTNodeJSX !== void 0 ? _renderTNodeJSX : false;
        var headerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__header"), "".concat(COMPONENT_NAME.value, "__header--fullscreen")] : "".concat(COMPONENT_NAME.value, "__header");
        var closeClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__close"), "".concat(COMPONENT_NAME.value, "__close--fullscreen")] : "".concat(COMPONENT_NAME.value, "__close");
        var getIcon = function getIcon() {
          var icon = {
            info: Vue.createVNode(InfoCircleFilledIcon, {
              "class": "".concat(classPrefix.value, "-is-info")
            }, null),
            warning: Vue.createVNode(ErrorCircleFilledIcon, {
              "class": "".concat(classPrefix.value, "-is-warning")
            }, null),
            danger: Vue.createVNode(ErrorCircleFilledIcon, {
              "class": "".concat(classPrefix.value, "-is-error")
            }, null),
            success: Vue.createVNode(CheckCircleFilledIcon, {
              "class": "".concat(classPrefix.value, "-is-success")
            }, null)
          };
          return icon[props === null || props === void 0 ? void 0 : props.theme];
        };
        return (header || (props === null || props === void 0 ? void 0 : props.closeBtn)) && Vue.createVNode("div", {
          "class": headerClassName,
          "onMousedown": onStopDown
        }, [Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__header-content")
        }, [getIcon(), header]), props !== null && props !== void 0 && props.closeBtn ? Vue.createVNode("span", {
          "class": closeClassName,
          "onClick": closeBtnAction
        }, [renderTNodeJSX("closeBtn", Vue.createVNode(CloseIcon, null, null))]) : null]);
      };
      var renderBody = function renderBody() {
        var body = renderContent("default", "body");
        var bodyClassName = (props === null || props === void 0 ? void 0 : props.theme) === "default" ? ["".concat(COMPONENT_NAME.value, "__body")] : ["".concat(COMPONENT_NAME.value, "__body__icon")];
        if (isFullScreen.value && footerContent) {
          bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen"));
        } else if (isFullScreen.value) {
          bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen--without-footer"));
        }
        return Vue.createVNode("div", {
          "class": bodyClassName,
          "onMousedown": onStopDown
        }, [body]);
      };
      var renderFooter = function renderFooter() {
        var footerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--fullscreen")] : "".concat(COMPONENT_NAME.value, "__footer");
        return footerContent && Vue.createVNode("div", {
          "class": footerClassName,
          "onMousedown": onStopDown
        }, [footerContent]);
      };
      return Vue.createVNode(Vue.Fragment, null, [renderHeader(), renderBody(), !!props.footer && renderFooter()]);
    };
    return function () {
      return Vue.withDirectives(Vue.createVNode("div", {
        "key": "dialog",
        "ref": rootRef,
        "class": dialogClass.value,
        "style": dialogStyle.value
      }, [renderCard()]), [[Vue.resolveDirective("draggable"), isModeLess.value && props.draggable]]);
    };
  }
});

exports["default"] = _DialogCard;
//# sourceMappingURL=dialog-card.js.map
