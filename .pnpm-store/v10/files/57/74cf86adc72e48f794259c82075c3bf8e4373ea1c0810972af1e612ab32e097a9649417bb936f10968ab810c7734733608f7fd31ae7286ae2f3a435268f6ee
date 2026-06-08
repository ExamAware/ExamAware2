/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _typeof = require('@babel/runtime/helpers/typeof');
var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var button_index = require('../../button/index.js');
var omit = require('../../_chunks/dep-ace0b57c.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
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
require('../../button/button.js');
require('../../loading/index.js');
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
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-8382953f.js');
require('../../loading/props.js');
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
require('../../button/props.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useAction(action) {
  var instance = Vue.getCurrentInstance();
  var renderTNodeJSX = index.useTNodeJSX();
  var getDefaultConfirmBtnProps = function getDefaultConfirmBtnProps(options) {
    var globalConfirm = options.globalConfirm,
      theme = options.theme,
      globalConfirmBtnTheme = options.globalConfirmBtnTheme;
    var defaultTheme = index.getPropertyValFromObj(omit.omit(globalConfirmBtnTheme, ["info"]), theme) || "primary";
    var props = {
      theme: defaultTheme,
      size: options.size,
      onClick: function onClick(e) {
        action.confirmBtnAction(e);
      }
    };
    if (isString.isString(globalConfirm)) {
      props.content = globalConfirm;
    } else if (isObject.isObject(globalConfirm)) {
      props = _objectSpread(_objectSpread({}, props), globalConfirm);
    }
    return props;
  };
  var getDefaultCancelBtnProps = function getDefaultCancelBtnProps(options) {
    var globalCancel = options.globalCancel;
    var props = {
      theme: "default",
      size: options.size,
      onClick: function onClick(e) {
        action.cancelBtnAction(e);
      }
    };
    if (isString.isString(globalCancel)) {
      props.content = globalCancel;
    } else if (isObject.isObject(globalCancel)) {
      props = _objectSpread(_objectSpread({}, props), globalCancel);
    }
    return props;
  };
  var getButtonByProps = function getButtonByProps(button, params) {
    var defaultButtonProps = params.defaultButtonProps,
      className = params.className,
      confirmLoading = params.confirmLoading;
    var newOptions = defaultButtonProps;
    if (isString.isString(button)) {
      newOptions.content = button;
    } else if (isObject.isObject(button)) {
      newOptions = _objectSpread(_objectSpread({}, newOptions), button);
    }
    if (confirmLoading !== void 0) {
      newOptions.loading = confirmLoading;
    }
    return Vue.createVNode(button_index.Button, Vue.mergeProps({
      "class": className
    }, newOptions), null);
  };
  var getConfirmBtn = function getConfirmBtn(options) {
    var confirmBtn = options.confirmBtn,
      className = options.className,
      confirmLoading = options.confirmLoading;
    if (confirmBtn === null) return null;
    if (confirmBtn && instance.slots.confirmBtn) {
      console.warn("Both $props.confirmBtn and $scopedSlots.confirmBtn exist, $props.confirmBtn is preferred.");
    }
    var defaultButtonProps = getDefaultConfirmBtnProps(options);
    if (!confirmBtn && !instance.slots.confirmBtn) {
      return Vue.createVNode(button_index.Button, Vue.mergeProps({
        "class": className,
        "loading": confirmLoading
      }, defaultButtonProps), null);
    }
    if (confirmBtn && ["string", "object"].includes(_typeof__default["default"](confirmBtn))) {
      return getButtonByProps(confirmBtn, {
        defaultButtonProps: defaultButtonProps,
        className: className,
        confirmLoading: confirmLoading
      });
    }
    return renderTNodeJSX("confirmBtn");
  };
  var getCancelBtn = function getCancelBtn(options) {
    var cancelBtn = options.cancelBtn,
      className = options.className;
    if (cancelBtn === null) return null;
    if (cancelBtn && instance.slots.cancelBtn) {
      console.warn("Both $props.cancelBtn and $scopedSlots.cancelBtn exist, $props.cancelBtn is preferred.");
    }
    var defaultButtonProps = getDefaultCancelBtnProps(options);
    if (!cancelBtn && !instance.slots.cancelBtn) {
      return Vue.createVNode(button_index.Button, Vue.mergeProps({
        "class": className
      }, defaultButtonProps), null);
    }
    if (cancelBtn && ["string", "object"].includes(_typeof__default["default"](cancelBtn))) {
      return getButtonByProps(cancelBtn, {
        defaultButtonProps: defaultButtonProps,
        className: className
      });
    }
    return renderTNodeJSX("cancelBtn");
  };
  return {
    getConfirmBtn: getConfirmBtn,
    getCancelBtn: getCancelBtn
  };
}

exports.useAction = useAction;
//# sourceMappingURL=useAction.js.map
