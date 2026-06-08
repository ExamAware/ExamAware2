/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed } from 'vue';
import { l as log } from '../../_chunks/dep-8295e674.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { u as useVirtualScrollNew } from '../../_chunks/dep-90df3fa4.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-80a77612.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useListVirtualScroll = function useListVirtualScroll(scroll, listRef, listItems) {
  var virtualScrollParams = computed(function () {
    return {
      data: listItems.value,
      scroll: scroll
    };
  });
  var virtualConfig = useVirtualScrollNew(listRef, virtualScrollParams);
  var isVirtualScroll = computed(function () {
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
  var cursorStyle = computed(function () {
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
  var listStyle = computed(function () {
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
      log.error("List", "scrollTo: `index` or `key` must exist.");
      return;
    }
    if (targetIndex < 0 || targetIndex >= listItems.value.length) {
      log.error("List", "".concat(targetIndex, " does not exist in data, check `index` or `key` please."));
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

export { useListVirtualScroll };
//# sourceMappingURL=useListVirtualScroll.js.map
