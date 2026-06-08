/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var log = require('../../_chunks/dep-733b2b51.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index = require('../../_chunks/dep-e4d1d84d.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-3a7785db.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useListVirtualScroll = function useListVirtualScroll(scroll, listRef, listItems) {
  var virtualScrollParams = Vue.computed(function () {
    return {
      data: listItems.value,
      scroll: scroll
    };
  });
  var virtualConfig = index.useVirtualScrollNew(listRef, virtualScrollParams);
  var isVirtualScroll = Vue.computed(function () {
    return virtualConfig.isVirtualScroll.value;
  });
  var lastScrollY = -1;
  var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
    var target = e.target || e.srcElement;
    var top = target.scrollTop;
    if (lastScrollY !== top) {
      virtualConfig.isVirtualScroll.value && virtualConfig.handleScroll();
    } else {
      lastScrollY = -1;
    }
    lastScrollY = top;
  };
  var cursorStyle = Vue.computed(function () {
    return {
      position: "absolute",
      width: "1px",
      height: "1px",
      transition: "transform 0.2s",
      transform: "translate(0, ".concat(virtualConfig.scrollHeight.value, "px)"),
      "-ms-transform": "translate(0, ".concat(virtualConfig.scrollHeight.value, "px)"),
      "-moz-transform": "translate(0, ".concat(virtualConfig.scrollHeight.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(virtualConfig.scrollHeight.value, "px)")
    };
  });
  var listStyle = Vue.computed(function () {
    return {
      transform: "translate(0, ".concat(virtualConfig.translateY.value, "px)"),
      "-ms-transform": "translate(0, ".concat(virtualConfig.translateY.value, "px)"),
      "-moz-transform": "translate(0, ".concat(virtualConfig.translateY.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(virtualConfig.translateY.value, "px)")
    };
  });
  var handleScrollTo = function handleScrollTo(params) {
    var index = params.index,
      key = params.key;
    var targetIndex = index === 0 ? index : index !== null && index !== void 0 ? index : Number(key);
    if (!targetIndex && targetIndex !== 0) {
      log.log.error("List", "scrollTo: `index` or `key` must exist.");
      return;
    }
    if (targetIndex < 0 || targetIndex >= listItems.value.length) {
      log.log.error("List", "".concat(targetIndex, " does not exist in data, check `index` or `key` please."));
      return;
    }
    virtualConfig.scrollToElement(_objectSpread(_objectSpread({}, params), {}, {
      index: targetIndex - 1
    }));
  };
  return {
    virtualConfig: virtualConfig,
    cursorStyle: cursorStyle,
    listStyle: listStyle,
    isVirtualScroll: isVirtualScroll,
    onInnerVirtualScroll: onInnerVirtualScroll,
    scrollToElement: handleScrollTo
  };
};

exports.useListVirtualScroll = useListVirtualScroll;
//# sourceMappingURL=useListVirtualScroll.js.map
