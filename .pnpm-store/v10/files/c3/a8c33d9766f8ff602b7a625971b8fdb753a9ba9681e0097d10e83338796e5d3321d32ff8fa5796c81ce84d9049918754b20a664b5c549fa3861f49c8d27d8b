/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _typeof from '@babel/runtime/helpers/typeof';
import { getCurrentInstance, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { omit, isString, isObject } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, g as getPropertyValFromObj } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { Button } from '../../button/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-664b8b22.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useAction(action) {
  var instance = getCurrentInstance();
  var renderTNodeJSX = useTNodeJSX();
  var getDefaultConfirmBtnProps = function getDefaultConfirmBtnProps(options) {
    var globalConfirm = options.globalConfirm,
      theme = options.theme,
      globalConfirmBtnTheme = options.globalConfirmBtnTheme;
    var defaultTheme = getPropertyValFromObj(omit(globalConfirmBtnTheme, ["info"]), theme) || "primary";
    var props = {
      theme: defaultTheme,
      size: options.size,
      onClick: function onClick(e) {
        action.confirmBtnAction(e);
      }
    };
    if (isString(globalConfirm)) {
      props.content = globalConfirm;
    } else if (isObject(globalConfirm)) {
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
    if (isString(globalCancel)) {
      props.content = globalCancel;
    } else if (isObject(globalCancel)) {
      props = _objectSpread(_objectSpread({}, props), globalCancel);
    }
    return props;
  };
  var getButtonByProps = function getButtonByProps(button, params) {
    var defaultButtonProps = params.defaultButtonProps,
      className = params.className,
      confirmLoading = params.confirmLoading;
    var newOptions = defaultButtonProps;
    if (isString(button)) {
      newOptions.content = button;
    } else if (isObject(button)) {
      newOptions = _objectSpread(_objectSpread({}, newOptions), button);
    }
    if (confirmLoading !== void 0) {
      newOptions.loading = confirmLoading;
    }
    return createVNode(Button, mergeProps({
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
      return createVNode(Button, mergeProps({
        "class": className,
        "loading": confirmLoading
      }, defaultButtonProps), null);
    }
    if (confirmBtn && ["string", "object"].includes(_typeof(confirmBtn))) {
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
      return createVNode(Button, mergeProps({
        "class": className
      }, defaultButtonProps), null);
    }
    if (cancelBtn && ["string", "object"].includes(_typeof(cancelBtn))) {
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

export { useAction };
//# sourceMappingURL=useAction.js.map
