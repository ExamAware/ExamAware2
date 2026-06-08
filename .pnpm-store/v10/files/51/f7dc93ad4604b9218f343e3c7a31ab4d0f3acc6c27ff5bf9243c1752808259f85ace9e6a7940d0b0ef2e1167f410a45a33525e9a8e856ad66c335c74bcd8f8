/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _typeof = require('@babel/runtime/helpers/typeof');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-874d2900.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index$1 = require('../../_chunks/dep-bc848944.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MAX_POPUP_WIDTH = 1e3;
var RESERVE_WIDTH = 0;
function useOverlayInnerStyle(props) {
  var _toRefs = Vue.toRefs(props),
    popupProps = _toRefs.popupProps,
    autoWidth = _toRefs.autoWidth;
  var innerPopupVisible = Vue.ref(false);
  var disable = index.useDisabled();
  var isReadonly = index$1.useReadonly();
  var matchWidthFunc = function matchWidthFunc(triggerElement, popupElement) {
    var SCROLLBAR_WIDTH = popupElement.scrollHeight > popupElement.offsetHeight ? RESERVE_WIDTH : 0;
    var width = popupElement.offsetWidth + SCROLLBAR_WIDTH >= triggerElement.offsetWidth ? popupElement.offsetWidth : triggerElement.offsetWidth;
    var otherOverlayInnerStyle = {};
    if (popupProps.value && _typeof__default["default"](popupProps.value.overlayInnerStyle) === "object" && !popupProps.value.overlayInnerStyle.width) {
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
  var tOverlayInnerStyle = Vue.computed(function () {
    var _popupProps$value2;
    var result = {};
    var overlayInnerStyle = ((_popupProps$value2 = popupProps.value) === null || _popupProps$value2 === void 0 ? void 0 : _popupProps$value2.overlayInnerStyle) || {};
    if (isFunction.isFunction(overlayInnerStyle) || isObject.isObject(overlayInnerStyle) && overlayInnerStyle.width) {
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

exports.useOverlayInnerStyle = useOverlayInnerStyle;
//# sourceMappingURL=useOverlayInnerStyle.js.map
