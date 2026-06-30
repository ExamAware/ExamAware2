/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { getCurrentInstance, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { omit, isString, isObject } from 'lodash-es';
import { a as useTNodeJSX, D as getPropertyValFromObj } from '../../_chunks/dep-7673347f.mjs';
import { Button } from '../../button/index.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../button/button.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../button/props.mjs';

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
//# sourceMappingURL=useAction.mjs.map
