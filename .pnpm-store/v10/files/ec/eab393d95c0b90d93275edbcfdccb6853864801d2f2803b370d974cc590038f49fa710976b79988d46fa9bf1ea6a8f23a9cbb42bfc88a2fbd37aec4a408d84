/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { computed } from 'vue';
import '../../_chunks/dep-6d2705e1.mjs';
import { x as useVirtualScrollNew } from '../../_chunks/dep-7673347f.mjs';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
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
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useListVirtualScroll.mjs.map
