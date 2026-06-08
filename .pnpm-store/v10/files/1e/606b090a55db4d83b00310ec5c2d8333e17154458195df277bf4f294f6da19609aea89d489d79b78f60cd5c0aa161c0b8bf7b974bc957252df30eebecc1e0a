/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
var index = require('./dep-b6058ff9.js');
var throttle = require('./dep-9071ce5e.js');
var isArrayLikeObject = require('./dep-54e566d9.js');
var min = require('./dep-3a7785db.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
    index = -1,
    length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return array && array.length ? baseSum(array, isArrayLikeObject.identity) : 0;
}

function useVirtualScrollNew(container, params) {
  var _params$value$data, _params$value$scroll;
  var visibleData = Vue.ref([]);
  var translateY = Vue.ref((((_params$value$data = params.value.data) === null || _params$value$data === void 0 ? void 0 : _params$value$data.length) || 0) * (((_params$value$scroll = params.value.scroll) === null || _params$value$scroll === void 0 ? void 0 : _params$value$scroll.rowHeight) || 50));
  var scrollHeight = Vue.ref(0);
  var trHeightList = [];
  var containerHeight = Vue.ref(0);
  var containerWidth = Vue.ref(0);
  var startAndEndIndex = Vue.ref([0, 15]);
  var tScroll = Vue.computed(function () {
    var _scroll$isFixedRowHei, _scroll$fixedRows;
    var scroll = params.value.scroll;
    if (!scroll) return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: (_scroll$isFixedRowHei = scroll.isFixedRowHeight) !== null && _scroll$isFixedRowHei !== void 0 ? _scroll$isFixedRowHei : false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type,
      fixedRows: (_scroll$fixedRows = scroll.fixedRows) !== null && _scroll$fixedRows !== void 0 ? _scroll$fixedRows : [0, 0]
    };
  });
  var isVirtualScroll = Vue.computed(function () {
    var data = params.value.data;
    return tScroll.value.type === "virtual" && tScroll.value.threshold < data.length;
  });
  function getVisibleRangeConfig() {
    var _container$value$scro, _container$value;
    var scrollTop = (_container$value$scro = (_container$value = container.value) === null || _container$value === void 0 ? void 0 : _container$value.scrollTop) !== null && _container$value$scro !== void 0 ? _container$value$scro : 0;
    var fixedStart = tScroll.value.fixedRows[0];
    var prevBufferHeightList = [];
    var hiddenHeight = 0;
    var visibleStart = -1;
    var visibleEnd = -1;
    var totalHeight = 0;
    for (var i = 0, len = params.value.data.length; i < len; i++) {
      var _trHeightList$i;
      var rowHeight = (_trHeightList$i = trHeightList[i]) !== null && _trHeightList$i !== void 0 ? _trHeightList$i : tScroll.value.rowHeight;
      totalHeight = totalHeight + rowHeight;
      if (totalHeight > scrollTop && visibleStart === -1) {
        visibleStart = i;
        if (visibleStart - tScroll.value.bufferSize > 0) {
          hiddenHeight = totalHeight - rowHeight - sum(prevBufferHeightList);
        }
      }
      if (visibleStart === -1) {
        prevBufferHeightList.push(rowHeight);
        if (prevBufferHeightList.length > tScroll.value.bufferSize) {
          prevBufferHeightList.shift();
        }
      }
      if (visibleEnd === -1 && (totalHeight > containerHeight.value + scrollTop || i === params.value.data.length - 1)) {
        visibleEnd = i;
      }
      if (visibleStart !== -1 && visibleEnd !== -1) {
        break;
      }
    }
    var startIndex = min.max([visibleStart - tScroll.value.bufferSize, 0]);
    var endIndex = min.min([visibleEnd + tScroll.value.bufferSize, params.value.data.length]);
    var stickyHeight = sum(trHeightList.slice(0, Math.min(startIndex, fixedStart)));
    return {
      startIndex: startIndex,
      endIndex: endIndex,
      translateY: hiddenHeight - stickyHeight
    };
  }
  var updateVisibleData = throttle.throttle(function () {
    var _getVisibleRangeConfi = getVisibleRangeConfig(),
      startIndex = _getVisibleRangeConfi.startIndex,
      endIndex = _getVisibleRangeConfi.endIndex,
      translateYValue = _getVisibleRangeConfi.translateY;
    var fixedRows = tScroll.value.fixedRows;
    var _fixedRows = _slicedToArray__default["default"](fixedRows, 2),
      fixedStart = _fixedRows[0],
      fixedEnd = _fixedRows[1];
    var fixedStartData = fixedStart ? params.value.data.slice(0, fixedStart) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    var fixedEndData = fixedEnd ? params.value.data.slice(params.value.data.length - fixedEnd) : [];
    var bottomStartIndex = endIndex - params.value.data.length + 1 + (fixedEnd !== null && fixedEnd !== void 0 ? fixedEnd : 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    if (startAndEndIndex.value.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      translateY.value = translateYValue;
      visibleData.value = fixedStartData.concat(params.value.data.slice(startIndex, endIndex), fixedEndData);
      startAndEndIndex.value = [startIndex, endIndex];
    }
  }, 100);
  var handleRowMounted = function handleRowMounted(rowData) {
    var _rowData$ref$value;
    if (!isVirtualScroll.value || !rowData || tScroll.value.isFixedRowHeight || !container.value) return;
    var trHeight = ((_rowData$ref$value = rowData.ref.value) === null || _rowData$ref$value === void 0 ? void 0 : _rowData$ref$value.getBoundingClientRect().height) || tScroll.value.rowHeight;
    var rowIndex = rowData.data.VIRTUAL_SCROLL_INDEX;
    if (trHeightList[rowIndex] !== trHeight) {
      var diff = trHeight - trHeightList[rowIndex];
      trHeightList[rowIndex] = trHeight;
      scrollHeight.value = scrollHeight.value + diff;
    }
  };
  var handleScroll = function handleScroll() {
    if (!isVirtualScroll.value) return;
    updateVisibleData();
  };
  var refreshVirtualScroll = function refreshVirtualScroll(_ref) {
    var _ref2 = _slicedToArray__default["default"](_ref, 1),
      contentRect = _ref2[0].contentRect;
    if (params.value.preventResizeRefresh) return;
    var maxScrollbarWidth = 16;
    if (Math.abs(contentRect.width - containerWidth.value) > maxScrollbarWidth && !!container.value) {
      container.value.scrollTop = 0;
      translateY.value = 0;
    }
    containerWidth.value = contentRect.width;
    containerHeight.value = contentRect.height;
  };
  var addIndexToData = function addIndexToData(data) {
    data.forEach(function (item, index) {
      item["VIRTUAL_SCROLL_INDEX"] = index;
    });
  };
  var updateScrollTop = function updateScrollTop(_ref3) {
    var index = _ref3.index,
      _ref3$top = _ref3.top,
      top = _ref3$top === void 0 ? 0 : _ref3$top,
      behavior = _ref3.behavior;
    var scrollTop = sum(trHeightList.slice(0, index + 1)) - top;
    container.value.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  var scrollToElement = function scrollToElement(p) {
    updateScrollTop(p);
    if (!tScroll.value.isFixedRowHeight) {
      var _p$time;
      var duration = (_p$time = p.time) !== null && _p$time !== void 0 ? _p$time : 60;
      var timer = setTimeout(function () {
        updateScrollTop(p);
        clearTimeout(timer);
      }, duration);
    }
  };
  index.useResizeObserver(Vue.computed(function () {
    return isVirtualScroll.value ? container.value : void 0;
  }), refreshVirtualScroll);
  Vue.watch(function () {
    return [_toConsumableArray__default["default"](params.value.data), tScroll.value, isVirtualScroll.value, container.value];
  }, function () {
    if (!isVirtualScroll.value || !container.value) return;
    var data = params.value.data;
    addIndexToData(data);
    containerHeight.value = container.value.getBoundingClientRect().height;
    if (trHeightList.length !== params.value.data.length) {
      var initHeightList = Array.from(trHeightList);
      initHeightList.length = params.value.data.length;
      initHeightList.fill(tScroll.value.rowHeight || 47);
      trHeightList = initHeightList;
    }
    scrollHeight.value = sum(trHeightList);
    startAndEndIndex.value = [0, 0];
    updateVisibleData();
  }, {
    immediate: true
  });
  Vue.watch(function () {
    return containerHeight.value;
  }, function () {
    updateVisibleData();
  });
  return {
    visibleData: visibleData,
    translateY: translateY,
    scrollHeight: scrollHeight,
    isVirtualScroll: isVirtualScroll,
    handleScroll: handleScroll,
    handleRowMounted: handleRowMounted,
    scrollToElement: scrollToElement
  };
}

exports.useVirtualScrollNew = useVirtualScrollNew;
//# sourceMappingURL=dep-e4d1d84d.js.map
