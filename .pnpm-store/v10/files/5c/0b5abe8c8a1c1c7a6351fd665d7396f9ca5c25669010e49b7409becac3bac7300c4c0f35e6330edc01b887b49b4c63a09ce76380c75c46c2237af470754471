/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { reactive, computed, ref, watch, onMounted, toRefs, nextTick, onBeforeUnmount } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useVirtualScroll(_ref) {
  var data = _ref.data,
    container = _ref.container,
    _ref$fixedHeight = _ref.fixedHeight,
    fixedHeight = _ref$fixedHeight === void 0 ? false : _ref$fixedHeight,
    _ref$lineHeight = _ref.lineHeight,
    lineHeight = _ref$lineHeight === void 0 ? 30 : _ref$lineHeight,
    _ref$bufferSize = _ref.bufferSize,
    bufferSize = _ref$bufferSize === void 0 ? 20 : _ref$bufferSize,
    _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 100 : _ref$threshold;
  var state = reactive({
    visibleData: [],
    cachedHeight: [],
    cachedScrollY: []
  });
  var isVirtual = computed(function () {
    return data.value.length > threshold;
  });
  var updateId = ref(0);
  var trs = /* @__PURE__ */new Map();
  var visibleCount = 0;
  var beforeScrollTop = 0;
  var index = 0;
  var offset = 0;
  var start = 0;
  var last = 0;
  var reset = function reset() {
    data.value.forEach(function (item, i) {
      item.$index = i;
      if (fixedHeight) {
        state.cachedScrollY[i] = i * lineHeight;
      }
    });
    if (!fixedHeight) {
      state.cachedScrollY[data.value.length - 1] = void 0;
    }
  };
  reset();
  var scrollHeight = computed(function () {
    var cachedHeight = state.cachedHeight;
    var length = cachedHeight.length;
    if (length) {
      var maxScrollY = cachedHeight.reduce(function (sum, v) {
        return sum + v || lineHeight;
      }, 0);
      if (cachedHeight.length === data.value.length) {
        return maxScrollY;
      }
      var average = maxScrollY / cachedHeight.length;
      return maxScrollY + (data.value.length - cachedHeight.length) * average;
    }
    return isVirtual.value ? data.value.length * lineHeight : 0;
  });
  var translateY = computed(function () {
    var visibleData = state.visibleData;
    var firstRow = visibleData[0];
    if (firstRow) {
      return visibleData.length === 1 ? 0 : state.cachedScrollY[firstRow.$index];
    }
    return 0;
  });
  var updateVisibleData = function updateVisibleData() {
    last = Math.min(start + visibleCount + bufferSize * 2, data.value.length);
    state.visibleData = data.value.slice(start, last);
  };
  var calculateScrollY = function calculateScrollY() {
    var _anchorDom$getBoundin;
    var anchorDom = trs.get(index);
    if (!anchorDom) {
      return;
    }
    var anchorDomHeight = anchorDom === null || anchorDom === void 0 || (_anchorDom$getBoundin = anchorDom.getBoundingClientRect()) === null || _anchorDom$getBoundin === void 0 ? void 0 : _anchorDom$getBoundin.height;
    state.cachedScrollY[index] = container.value.scrollTop - offset;
    state.cachedHeight[index] = anchorDomHeight;
    for (var i = index + 1; i <= ((_state$visibleData = state.visibleData[state.visibleData.length - 1]) === null || _state$visibleData === void 0 ? void 0 : _state$visibleData.$index); i++) {
      var _state$visibleData;
      var tr = trs.get(i);
      var _ref2 = (tr === null || tr === void 0 ? void 0 : tr.getBoundingClientRect()) || {},
        height = _ref2.height;
      state.cachedHeight[i] = height;
      var scrollY = state.cachedScrollY[i - 1] + state.cachedHeight[i - 1];
      state.cachedScrollY.splice(i, 1, scrollY);
    }
    for (var _i = index - 1; _i >= ((_state$visibleData$ = state.visibleData[0]) === null || _state$visibleData$ === void 0 ? void 0 : _state$visibleData$.$index); _i--) {
      var _state$visibleData$;
      var _tr = trs.get(_i);
      var _ref3 = (_tr === null || _tr === void 0 ? void 0 : _tr.getBoundingClientRect()) || {},
        _height = _ref3.height;
      state.cachedHeight[_i] = _height;
      var _scrollY = state.cachedScrollY[_i + 1] - state.cachedHeight[_i];
      state.cachedScrollY.splice(_i, 1, _scrollY);
    }
    if (state.cachedScrollY[0] > 0) {
      var distance = state.cachedScrollY[0];
      var length = Math.min(last, data.value.length);
      for (var _i2 = 0; _i2 < length; _i2++) {
        state.cachedScrollY.splice(_i2, 1, state.cachedScrollY[_i2] - distance);
      }
      var scrollTop = state.cachedScrollY[index - 1] ? state.cachedScrollY[index - 1] + offset : offset;
      container.value.scrollTop = scrollTop;
      beforeScrollTop = scrollTop;
    }
    if (state.cachedScrollY[start] < 0) {
      var s = state.cachedHeight.slice(0, Math.max(0, index)).reduce(function (sum, v) {
        return sum + v;
      }, 0) + offset;
      container.value.scrollTop = s;
      beforeScrollTop = s;
      if (s === 0) {
        index = 0;
        offset = 0;
      }
    }
    nextTick(function () {
      var _container$value = container.value,
        scrollTop = _container$value.scrollTop,
        scrollHeight2 = _container$value.scrollHeight,
        clientHeight = _container$value.clientHeight;
      if (scrollTop + clientHeight === scrollHeight2) {
        for (var _i3 = last - 1; _i3 >= start; _i3--) {
          if (_i3 === last - 1) {
            state.cachedScrollY.splice(_i3, 1, scrollHeight2.value - state.cachedHeight[_i3]);
          } else {
            state.cachedScrollY.splice(_i3, 1, state.cachedScrollY[_i3 + 1] - state.cachedHeight[_i3]);
          }
        }
      }
    });
  };
  var handleScroll = function handleScroll() {
    if (!isVirtual.value) return;
    var scrollTop = container.value.scrollTop;
    var distance = scrollTop - beforeScrollTop;
    beforeScrollTop = scrollTop;
    distance += offset;
    var lastIndex = index;
    if (!distance) return;
    if (distance >= 0) {
      while (lastIndex < data.value.length && distance > (state.cachedHeight[lastIndex] || lineHeight)) {
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance -= state.cachedHeight[lastIndex];
        lastIndex++;
      }
      if (lastIndex >= data.value.length) {
        index = data.value.length - 1;
        offset = 0;
      } else {
        index = lastIndex;
        offset = distance;
      }
      var _container$value2 = container.value,
        clientHeight = _container$value2.clientHeight,
        scrollHeight2 = _container$value2.scrollHeight;
      if (scrollTop + clientHeight === scrollHeight2) {
        index = data.value.length - visibleCount + 1;
      }
      if (start <= index - bufferSize) {
        start = Math.min(data.value.length - visibleCount, index - bufferSize);
        if (start < 0) {
          start = 0;
        }
      }
    } else {
      while (distance < 0) {
        lastIndex--;
        if (!state.cachedHeight[lastIndex]) {
          state.cachedHeight[lastIndex] = lineHeight;
        }
        distance += state.cachedHeight[lastIndex];
      }
      if (lastIndex < 0) {
        index = 0;
        offset = 0;
      } else {
        index = lastIndex;
        offset = distance;
      }
      calculateScrollY();
      if (start > index - bufferSize) {
        start = Math.max(0, index - bufferSize);
      }
    }
    updateVisibleData();
  };
  !fixedHeight && watch(updateId, calculateScrollY, {
    flush: "post"
  });
  var handleRowMounted = function handleRowMounted() {
    if (!isVirtual.value) return;
    updateId.value++;
  };
  watch(data, function () {
    reset();
    state.visibleData = [];
    state.cachedScrollY = [];
    state.cachedHeight = [];
    beforeScrollTop = 0;
    index = 0;
    offset = 0;
    start = 0;
    trs.clear();
    if (data.value.length <= threshold) {
      state.visibleData = data.value;
    } else {
      updateVisibleData();
    }
    container.value && (container.value.scrollTop = 0);
  });
  var mounted = false;
  var refreshContainer = function refreshContainer() {
    if (mounted) {
      visibleCount = Math.ceil(container.value.offsetHeight / lineHeight);
      updateVisibleData();
    }
  };
  onMounted(function () {
    if (!window || !window.IntersectionObserver) {
      return;
    }
    var ob = new window.IntersectionObserver(function (entries) {
      var entry = entries[0];
      if (entry.isIntersecting || entry.intersectionRatio) {
        mounted = true;
        isVirtual.value && refreshContainer();
        ob.unobserve(container.value);
      }
    });
    container.value && ob.observe(container.value);
  });
  return _objectSpread(_objectSpread({
    trs: trs,
    scrollHeight: scrollHeight
  }, toRefs(state)), {}, {
    translateY: translateY,
    handleScroll: handleScroll,
    handleRowMounted: handleRowMounted,
    refreshContainer: refreshContainer,
    fixedHeight: fixedHeight,
    calculateScrollY: calculateScrollY
  });
}

var usePanelVirtualScroll = function usePanelVirtualScroll(props) {
  var _props$scroll3, _props$scroll4, _props$scroll5, _props$scroll6, _props$scroll7;
  var isVirtual = computed(function () {
    var _props$scroll, _props$options$value, _props$scroll2;
    return ((_props$scroll = props.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type) === "virtual" && ((_props$options$value = props.options.value) === null || _props$options$value === void 0 ? void 0 : _props$options$value.length) > (((_props$scroll2 = props.scroll) === null || _props$scroll2 === void 0 ? void 0 : _props$scroll2.threshold) || 100);
  });
  var _ref = ((_props$scroll3 = props.scroll) === null || _props$scroll3 === void 0 ? void 0 : _props$scroll3.type) === "virtual" ? useVirtualScroll({
      container: props.popupContentRef,
      data: props.options,
      fixedHeight: ((_props$scroll4 = props.scroll) === null || _props$scroll4 === void 0 ? void 0 : _props$scroll4.isFixedRowHeight) || false,
      lineHeight: ((_props$scroll5 = props.scroll) === null || _props$scroll5 === void 0 ? void 0 : _props$scroll5.rowHeight) || 28,
      bufferSize: ((_props$scroll6 = props.scroll) === null || _props$scroll6 === void 0 ? void 0 : _props$scroll6.bufferSize) || 20,
      threshold: ((_props$scroll7 = props.scroll) === null || _props$scroll7 === void 0 ? void 0 : _props$scroll7.threshold) || 100
    }) : {},
    _ref$trs = _ref.trs,
    trs = _ref$trs === void 0 ? null : _ref$trs,
    _ref$visibleData = _ref.visibleData,
    visibleData = _ref$visibleData === void 0 ? null : _ref$visibleData,
    _ref$handleScroll = _ref.handleScroll,
    handleVirtualScroll = _ref$handleScroll === void 0 ? null : _ref$handleScroll,
    _ref$scrollHeight = _ref.scrollHeight,
    scrollHeight = _ref$scrollHeight === void 0 ? null : _ref$scrollHeight,
    _ref$translateY = _ref.translateY,
    translateY = _ref$translateY === void 0 ? null : _ref$translateY,
    _ref$handleRowMounted = _ref.handleRowMounted,
    handleRowMounted = _ref$handleRowMounted === void 0 ? null : _ref$handleRowMounted;
  var lastScrollY = -1;
  var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
    if (!isVirtual.value) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  };
  onMounted(function () {
    var _props$popupContentRe;
    (_props$popupContentRe = props.popupContentRef.value) === null || _props$popupContentRe === void 0 || _props$popupContentRe.addEventListener("scroll", onInnerVirtualScroll);
  });
  onBeforeUnmount(function () {
    var _props$popupContentRe2;
    (_props$popupContentRe2 = props.popupContentRef.value) === null || _props$popupContentRe2 === void 0 || _props$popupContentRe2.removeEventListener("scroll", onInnerVirtualScroll);
  });
  var cursorStyle = computed(function () {
    return {
      position: "absolute",
      width: "1px",
      height: "1px",
      transition: "transform 0.2s",
      transform: "translate(0, ".concat(scrollHeight.value, "px)"),
      "-ms-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-moz-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(scrollHeight.value, "px)")
    };
  });
  var panelStyle = computed(function () {
    return {
      transform: "translate(0, ".concat(translateY.value, "px)"),
      "-ms-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-moz-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(translateY.value, "px)")
    };
  });
  return {
    trs: trs,
    scrollHeight: scrollHeight,
    translateY: translateY,
    visibleData: visibleData,
    handleRowMounted: handleRowMounted,
    isVirtual: isVirtual,
    cursorStyle: cursorStyle,
    panelStyle: panelStyle
  };
};

export { usePanelVirtualScroll };
//# sourceMappingURL=usePanelVirtualScroll.js.map
