/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import { toRefs, ref, computed } from 'vue';
import { isFunction, isObject } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useDisabled } from '../../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MAX_POPUP_WIDTH = 1e3;
var RESERVE_WIDTH = 0;
function useOverlayInnerStyle(props) {
  var _toRefs = toRefs(props),
    popupProps = _toRefs.popupProps,
    autoWidth = _toRefs.autoWidth;
  var innerPopupVisible = ref(false);
  var disable = useDisabled();
  var isReadonly = useReadonly();
  var matchWidthFunc = function matchWidthFunc(triggerElement, popupElement) {
    var SCROLLBAR_WIDTH = popupElement.scrollHeight > popupElement.offsetHeight ? RESERVE_WIDTH : 0;
    var width = popupElement.offsetWidth + SCROLLBAR_WIDTH >= triggerElement.offsetWidth ? popupElement.offsetWidth : triggerElement.offsetWidth;
    var otherOverlayInnerStyle = {};
    if (popupProps.value && _typeof(popupProps.value.overlayInnerStyle) === "object" && !popupProps.value.overlayInnerStyle.width) {
      otherOverlayInnerStyle = popupProps.value.overlayInnerStyle;
    }
    return _objectSpread({
      width: "".concat(Math.min(width, MAX_POPUP_WIDTH), "px")
    }, otherOverlayInnerStyle);
  };
  var onInnerPopupVisibleChange = function onInnerPopupVisibleChange(visible, ctx) {
    if (disable.value || isReadonly.value) return;
    var newVisible = ctx.trigger === "trigger-element-click" && props.allowInput ? true : visible;
    if (props.popupVisible !== newVisible) {
      var _props$onPopupVisible;
      innerPopupVisible.value = newVisible;
      (_props$onPopupVisible = props.onPopupVisibleChange) === null || _props$onPopupVisible === void 0 || _props$onPopupVisible.call(props, newVisible, ctx);
    }
  };
  var getAutoWidthPopupStyleWidth = function getAutoWidthPopupStyleWidth(triggerElement, popupElement) {
    var _popupProps$value;
    return _objectSpread({
      width: "".concat(Math.max(triggerElement.offsetWidth, popupElement.offsetWidth), "px")
    }, (_popupProps$value = popupProps.value) === null || _popupProps$value === void 0 ? void 0 : _popupProps$value.overlayInnerStyle);
  };
  var tOverlayInnerStyle = computed(function () {
    var _popupProps$value2;
    var result = {};
    var overlayInnerStyle = ((_popupProps$value2 = popupProps.value) === null || _popupProps$value2 === void 0 ? void 0 : _popupProps$value2.overlayInnerStyle) || {};
    if (isFunction(overlayInnerStyle) || isObject(overlayInnerStyle) && overlayInnerStyle.width) {
      result = overlayInnerStyle;
    } else {
      if (autoWidth.value) {
        result = getAutoWidthPopupStyleWidth;
      } else {
        result = matchWidthFunc;
      }
    }
    return result;
  });
  return {
    tOverlayInnerStyle: tOverlayInnerStyle,
    innerPopupVisible: innerPopupVisible,
    onInnerPopupVisibleChange: onInnerPopupVisibleChange
  };
}

export { useOverlayInnerStyle };
//# sourceMappingURL=useOverlayInnerStyle.js.map
