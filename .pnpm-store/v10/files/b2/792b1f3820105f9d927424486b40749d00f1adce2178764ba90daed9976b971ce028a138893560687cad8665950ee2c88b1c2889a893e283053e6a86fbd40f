/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var log = require('../../_chunks/dep-733b2b51.js');
var getScrollbarWidth = require('../../_chunks/dep-7067edce.js');
var dom = require('../../_chunks/dep-06276759.js');
var helper = require('../../_chunks/dep-55c70201.js');
var _arrayFilter = require('../../_chunks/dep-6b1f0ef8.js');
var isArrayLikeObject = require('../../_chunks/dep-54e566d9.js');
var _baseDifference = require('../../_chunks/dep-01738d56.js');
var _flatRest = require('../../_chunks/dep-dcb859c6.js');
var _baseUniq = require('../../_chunks/dep-0e08f598.js');
var last = require('../../_chunks/dep-11b67e11.js');
var pick = require('../../_chunks/dep-b5e1f81f.js');
var debounce = require('../../_chunks/dep-441a3b7b.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-04599720.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-e86abdd2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? _baseUniq.baseUniq(arrays[0]) : [];
  }
  var index = -1,
    result = Array(length);
  while (++index < length) {
    var array = arrays[index],
      othIndex = -1;
    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = _baseDifference.baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return _baseUniq.baseUniq(_flatRest.baseFlatten(result, 1), iteratee, comparator);
}

/**
 * This method is like `_.xor` except that it accepts `comparator` which is
 * invoked to compare elements of `arrays`. The order of result values is
 * determined by the order they occur in the arrays. The comparator is invoked
 * with two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.xorWith(objects, others, _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
var xorWith = isArrayLikeObject.baseRest(function (arrays) {
  var comparator = last.last(arrays);
  comparator = typeof comparator == 'function' ? comparator : undefined;
  return baseXor(_arrayFilter.arrayFilter(arrays, isArrayLikeObject.isArrayLikeObject), undefined, comparator);
});
var xorWith$1 = xorWith;

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getColumnFixedStyles(col, index, rowAndColFixedPosition, tableColFixedClasses) {
  var fixedPos = rowAndColFixedPosition === null || rowAndColFixedPosition === void 0 ? void 0 : rowAndColFixedPosition.get(col.colKey || index);
  if (!fixedPos) return {};
  var thClasses = _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, tableColFixedClasses.left, col.fixed === "left"), tableColFixedClasses.right, col.fixed === "right"), tableColFixedClasses.lastLeft, col.fixed === "left" && fixedPos.lastLeftFixedCol), tableColFixedClasses.firstRight, col.fixed === "right" && fixedPos.firstRightFixedCol);
  var thStyles = {
    left: col.fixed === "left" ? "".concat(fixedPos.left, "px") : void 0,
    right: col.fixed === "right" ? "".concat(fixedPos.right, "px") : void 0
  };
  return {
    style: thStyles,
    classes: thClasses
  };
}
function getRowFixedStyles(rowId, rowIndex, rowLength, fixedRows, rowAndColFixedPosition, tableRowFixedClasses) {
  var virtualTranslateY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  if (!fixedRows || !fixedRows.length) return {
    style: void 0,
    classes: void 0
  };
  var fixedTop = rowIndex < fixedRows[0];
  var fixedBottom = rowIndex > rowLength - 1 - fixedRows[1];
  var firstFixedBottomRow = rowLength - fixedRows[1];
  var fixedPos = (rowAndColFixedPosition === null || rowAndColFixedPosition === void 0 ? void 0 : rowAndColFixedPosition.get(rowId)) || {};
  var rowClasses = _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, tableRowFixedClasses.top, fixedTop), tableRowFixedClasses.bottom, fixedBottom), tableRowFixedClasses.firstBottom, rowIndex === firstFixedBottomRow), tableRowFixedClasses.withoutBorderBottom, rowIndex === firstFixedBottomRow - 1);
  var rowStyles = {
    top: fixedTop ? "".concat(fixedPos.top - virtualTranslateY, "px") : void 0,
    bottom: fixedBottom ? "".concat(fixedPos.bottom + virtualTranslateY, "px") : void 0
  };
  return {
    style: rowStyles,
    classes: rowClasses
  };
}
function useFixed(props, context, finalColumns, affixRef) {
  var _toRefs = Vue.toRefs(props),
    columns = _toRefs.columns,
    tableLayout = _toRefs.tableLayout,
    tableContentWidth = _toRefs.tableContentWidth,
    fixedRows = _toRefs.fixedRows,
    firstFullRow = _toRefs.firstFullRow,
    lastFullRow = _toRefs.lastFullRow,
    maxHeight = _toRefs.maxHeight,
    headerAffixedTop = _toRefs.headerAffixedTop,
    footerAffixedBottom = _toRefs.footerAffixedBottom,
    bordered = _toRefs.bordered,
    resizable = _toRefs.resizable,
    allowResizeColumnWidth = _toRefs.allowResizeColumnWidth;
  var data = Vue.ref([]);
  var tableRef = Vue.ref();
  var tableContentRef = Vue.ref();
  var isFixedHeader = Vue.ref(false);
  var isWidthOverflow = Vue.ref(false);
  var tableElmRef = Vue.ref();
  var scrollbarWidth = Vue.ref(6);
  var rowAndColFixedPosition = Vue.ref(/* @__PURE__ */new Map());
  var showColumnShadow = Vue.reactive({
    left: false,
    right: false
  });
  var virtualScrollHeaderPos = Vue.ref({
    left: 0,
    top: 0
  });
  var tableWidth = Vue.ref(0);
  var tableElmWidth = Vue.ref(0);
  var thWidthList = Vue.ref({});
  var isFixedColumn = Vue.ref(false);
  var isFixedRightColumn = Vue.ref(false);
  var isFixedLeftColumn = Vue.ref(false);
  var columnResizable = Vue.computed(function () {
    var _ref, _allowResizeColumnWid;
    return (_ref = (_allowResizeColumnWid = allowResizeColumnWidth.value) !== null && _allowResizeColumnWid !== void 0 ? _allowResizeColumnWid : resizable.value) !== null && _ref !== void 0 ? _ref : false;
  });
  var notNeedThWidthList = Vue.computed(function () {
    var _props$scroll;
    return !(props.headerAffixedTop || props.footerAffixedBottom || props.horizontalScrollAffixedBottom || ((_props$scroll = props.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type) === "virtual");
  });
  function setUseFixedTableElmRef(val) {
    tableElmRef.value = val;
  }
  function getColumnMap(columns2) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /* @__PURE__ */new Map();
    var levelNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var parent = arguments.length > 4 ? arguments[4] : undefined;
    for (var i = 0, len = columns2.length; i < len; i++) {
      var _col$children;
      var col = columns2[i];
      if (["left", "right"].includes(col.fixed)) {
        isFixedColumn.value = true;
      }
      if (col.fixed === "right") {
        isFixedRightColumn.value = true;
      }
      if (col.fixed === "left") {
        isFixedLeftColumn.value = true;
      }
      var key = col.colKey || i;
      var columnInfo = {
        col: col,
        parent: parent,
        index: i
      };
      map.set(key, columnInfo);
      if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
        getColumnMap(col.children, map, levelNodes, level + 1, columnInfo);
      }
      if (levelNodes[level]) {
        levelNodes[level].push(columnInfo);
      } else {
        levelNodes[level] = [columnInfo];
      }
    }
    return {
      newColumnsMap: map,
      levelNodes: levelNodes
    };
  }
  var _setFixedLeftPos = function setFixedLeftPos(columns2, initialColumnMap) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    for (var i = 0, len = columns2.length; i < len; i++) {
      var _col$children2;
      var col = columns2[i];
      if (col.fixed === "right") return;
      var colInfo = initialColumnMap.get(col.colKey || i);
      var lastColIndex = i - 1;
      while (lastColIndex >= 0 && columns2[lastColIndex].fixed !== "left") {
        lastColIndex -= 1;
      }
      var lastCol = columns2[lastColIndex];
      var defaultWidth = i === 0 ? (parent === null || parent === void 0 ? void 0 : parent.left) || 0 : 0;
      var lastColInfo = initialColumnMap.get((lastCol === null || lastCol === void 0 ? void 0 : lastCol.colKey) || i - 1);
      if (colInfo) {
        colInfo.left = ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.left) || defaultWidth) + ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.width) || 0);
      }
      if ((_col$children2 = col.children) !== null && _col$children2 !== void 0 && _col$children2.length) {
        _setFixedLeftPos(col.children, initialColumnMap, colInfo);
      }
    }
  };
  var _setFixedRightPos = function setFixedRightPos(columns2, initialColumnMap) {
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    for (var i = columns2.length - 1; i >= 0; i--) {
      var _col$children3;
      var col = columns2[i];
      if (col.fixed === "left") return;
      var colInfo = initialColumnMap.get(col.colKey || i);
      var lastColIndex = i + 1;
      while (lastColIndex < columns2.length && columns2[lastColIndex].fixed !== "right") {
        lastColIndex += 1;
      }
      var lastCol = columns2[lastColIndex];
      var defaultWidth = i === columns2.length - 1 ? (parent === null || parent === void 0 ? void 0 : parent.right) || 0 : 0;
      var lastColInfo = initialColumnMap.get((lastCol === null || lastCol === void 0 ? void 0 : lastCol.colKey) || i + 1);
      if (colInfo) {
        colInfo.right = ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.right) || defaultWidth) + ((lastColInfo === null || lastColInfo === void 0 ? void 0 : lastColInfo.width) || 0);
      }
      if ((_col$children3 = col.children) !== null && _col$children3 !== void 0 && _col$children3.length) {
        _setFixedRightPos(col.children, initialColumnMap, colInfo);
      }
    }
  };
  var setFixedColPosition = function setFixedColPosition(trList, initialColumnMap) {
    if (!trList) return;
    for (var i = 0, len = trList.length; i < len; i++) {
      var thList = trList[i].children;
      for (var j = 0, thLen = thList.length; j < thLen; j++) {
        var _obj$col;
        var th = thList[j];
        var colKey = th.dataset.colkey;
        if (!colKey) {
          log.log.warn("TDesign Table", "".concat(th.innerText, " missing colKey. colKey is required for fixed column feature."));
        }
        var obj = initialColumnMap.get(colKey || j);
        if (obj !== null && obj !== void 0 && (_obj$col = obj.col) !== null && _obj$col !== void 0 && _obj$col.fixed) {
          initialColumnMap.set(colKey, _objectSpread(_objectSpread({}, obj), {}, {
            width: th.getBoundingClientRect().width
          }));
        }
      }
    }
    _setFixedLeftPos(columns.value, initialColumnMap);
    _setFixedRightPos(columns.value, initialColumnMap);
  };
  var setFixedRowPosition = function setFixedRowPosition(trList, initialColumnMap, thead, tfoot) {
    var _ref2 = fixedRows.value || [],
      _ref3 = _slicedToArray__default["default"](_ref2, 2),
      fixedTopRows = _ref3[0],
      fixedBottomRows = _ref3[1];
    var data2 = props.data,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey;
    for (var i = 0; i < fixedTopRows; i++) {
      var tr = trList[i];
      var rowId = get.get(data2[i], rowKey);
      var thisRowInfo = initialColumnMap.get(rowId) || {};
      var lastRowId = get.get(data2[i - 1], rowKey);
      var lastRowInfo = initialColumnMap.get(lastRowId) || {};
      var defaultBottom = 0;
      if (i === 0) {
        defaultBottom = (thead === null || thead === void 0 ? void 0 : thead.getBoundingClientRect().height) || 0;
      }
      thisRowInfo.top = (lastRowInfo.top || defaultBottom) + (lastRowInfo.height || 0);
      initialColumnMap.set(rowId, _objectSpread(_objectSpread({}, thisRowInfo), {}, {
        height: (tr === null || tr === void 0 ? void 0 : tr.getBoundingClientRect().height) || 0
      }));
    }
    for (var _i = data2.length - 1; _i >= data2.length - fixedBottomRows; _i--) {
      var _tr = trList[trList.length - (data2.length - _i)];
      var _rowId = get.get(data2[_i], rowKey);
      var _thisRowInfo = initialColumnMap.get(_rowId) || {};
      var _lastRowId = get.get(data2[_i + 1], rowKey);
      var _lastRowInfo = initialColumnMap.get(_lastRowId) || {};
      var _defaultBottom = 0;
      if (_i === data2.length - 1) {
        _defaultBottom = (tfoot === null || tfoot === void 0 ? void 0 : tfoot.getBoundingClientRect().height) || 0;
      }
      _thisRowInfo.bottom = (_lastRowInfo.bottom || _defaultBottom) + (_lastRowInfo.height || 0);
      initialColumnMap.set(_rowId, _objectSpread(_objectSpread({}, _thisRowInfo), {}, {
        height: (_tr === null || _tr === void 0 ? void 0 : _tr.getBoundingClientRect().height) || 0
      }));
    }
  };
  var updateRowAndColFixedPosition = function updateRowAndColFixedPosition(tableContentElm, initialColumnMap) {
    rowAndColFixedPosition.value.clear();
    if (!tableContentElm) return;
    var thead = tableContentElm.querySelector("thead");
    thead && setFixedColPosition(thead.children, initialColumnMap);
    var tbody = tableContentElm.querySelector("tbody");
    var tfoot = tableContentElm.querySelector("tfoot");
    tbody && setFixedRowPosition(tbody.children, initialColumnMap, thead, tfoot);
    rowAndColFixedPosition.value = initialColumnMap;
  };
  var shadowLastScrollLeft;
  var updateColumnFixedShadow = function updateColumnFixedShadow(target, extra) {
    if (!isFixedColumn.value || !target) return;
    var scrollLeft = target.scrollLeft;
    if (shadowLastScrollLeft === scrollLeft && (!extra || !extra.skipScrollLimit)) return;
    shadowLastScrollLeft = scrollLeft;
    var isShowRight = target.clientWidth + scrollLeft < target.scrollWidth;
    var isShowLeft = scrollLeft > 0;
    if (showColumnShadow.left === isShowLeft && showColumnShadow.right === isShowRight) return;
    showColumnShadow.left = isShowLeft && isFixedLeftColumn.value;
    showColumnShadow.right = isShowRight && isFixedRightColumn.value;
  };
  var setIsLastOrFirstFixedCol = function setIsLastOrFirstFixedCol(levelNodes) {
    for (var t = 0; t < levelNodes.length; t++) {
      var nodes = levelNodes[t];
      for (var i = 0, len = nodes.length; i < len; i++) {
        var colMapInfo = nodes[i];
        var nextColMapInfo = nodes[i + 1];
        var parent = colMapInfo.parent;
        var isParentLastLeftFixedCol = !parent || (parent === null || parent === void 0 ? void 0 : parent.lastLeftFixedCol);
        if (isParentLastLeftFixedCol && colMapInfo.col.fixed === "left" && (nextColMapInfo === null || nextColMapInfo === void 0 ? void 0 : nextColMapInfo.col.fixed) !== "left") {
          colMapInfo.lastLeftFixedCol = true;
        }
        var lastColMapInfo = nodes[i - 1];
        var isParentFirstRightFixedCol = !parent || (parent === null || parent === void 0 ? void 0 : parent.firstRightFixedCol);
        if (isParentFirstRightFixedCol && colMapInfo.col.fixed === "right" && (lastColMapInfo === null || lastColMapInfo === void 0 ? void 0 : lastColMapInfo.col.fixed) !== "right") {
          colMapInfo.firstRightFixedCol = true;
        }
      }
    }
  };
  var updateFixedStatus = function updateFixedStatus() {
    var _getColumnMap = getColumnMap(columns.value),
      newColumnsMap = _getColumnMap.newColumnsMap,
      levelNodes = _getColumnMap.levelNodes;
    setIsLastOrFirstFixedCol(levelNodes);
    var timer = setTimeout(function () {
      var _fixedRows$value;
      if (isFixedColumn.value || (_fixedRows$value = fixedRows.value) !== null && _fixedRows$value !== void 0 && _fixedRows$value.length) {
        updateRowAndColFixedPosition(tableContentRef.value, newColumnsMap);
      }
      clearTimeout(timer);
    }, 0);
    return function () {
      clearTimeout(timer);
    };
  };
  var updateFixedHeader = function updateFixedHeader() {
    var timer = setTimeout(function () {
      if (!tableContentRef.value) return;
      isFixedHeader.value = tableContentRef.value.scrollHeight > tableContentRef.value.clientHeight;
      isWidthOverflow.value = tableContentRef.value.scrollWidth > tableContentRef.value.clientWidth;
      var pos = tableContentRef.value.getBoundingClientRect();
      virtualScrollHeaderPos.value = {
        top: pos.top,
        left: pos.left
      };
      clearTimeout(timer);
    }, 0);
  };
  var setTableElmWidth = function setTableElmWidth(width) {
    if (tableElmWidth.value === width) return;
    tableElmWidth.value = width;
  };
  var updateTableWidth = function updateTableWidth() {
    var _tableContentRef$valu, _tableElmRef$value;
    var rect = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    if (!rect) return;
    var reduceWidth = isFixedHeader.value ? scrollbarWidth.value : 0;
    tableWidth.value = rect.width - reduceWidth - (props.bordered ? 1 : 0);
    var elmRect = tableElmRef === null || tableElmRef === void 0 || (_tableElmRef$value = tableElmRef.value) === null || _tableElmRef$value === void 0 ? void 0 : _tableElmRef$value.getBoundingClientRect();
    (elmRect === null || elmRect === void 0 ? void 0 : elmRect.width) && setTableElmWidth(elmRect.width);
  };
  var updateAffixPosition = function updateAffixPosition() {
    var _affixRef$paginationA, _affixRef$paginationA2, _affixRef$horizontalS, _affixRef$horizontalS2, _affixRef$headerTopAf, _affixRef$headerTopAf2, _affixRef$footerBotto, _affixRef$footerBotto2;
    (_affixRef$paginationA = affixRef.paginationAffixRef.value) === null || _affixRef$paginationA === void 0 || (_affixRef$paginationA2 = _affixRef$paginationA.handleScroll) === null || _affixRef$paginationA2 === void 0 || _affixRef$paginationA2.call(_affixRef$paginationA);
    (_affixRef$horizontalS = affixRef.horizontalScrollAffixRef.value) === null || _affixRef$horizontalS === void 0 || (_affixRef$horizontalS2 = _affixRef$horizontalS.handleScroll) === null || _affixRef$horizontalS2 === void 0 || _affixRef$horizontalS2.call(_affixRef$horizontalS);
    (_affixRef$headerTopAf = affixRef.headerTopAffixRef.value) === null || _affixRef$headerTopAf === void 0 || (_affixRef$headerTopAf2 = _affixRef$headerTopAf.handleScroll) === null || _affixRef$headerTopAf2 === void 0 || _affixRef$headerTopAf2.call(_affixRef$headerTopAf);
    (_affixRef$footerBotto = affixRef.footerBottomAffixRef.value) === null || _affixRef$footerBotto === void 0 || (_affixRef$footerBotto2 = _affixRef$footerBotto.handleScroll) === null || _affixRef$footerBotto2 === void 0 || _affixRef$footerBotto2.call(_affixRef$footerBotto);
  };
  var calculateThWidthList = function calculateThWidthList(trList) {
    var widthMap = {};
    for (var i = 0, len = trList.length; i < len; i++) {
      var thList = trList[i].children;
      for (var j = 0, thLen = thList.length; j < thLen; j++) {
        var th = thList[j];
        var colKey = th.dataset.colkey;
        widthMap[colKey] = th.getBoundingClientRect().width;
      }
    }
    return widthMap;
  };
  var updateThWidthList = function updateThWidthList(trList) {
    if (trList instanceof HTMLCollection) {
      if (columnResizable.value) return;
      thWidthList.value = calculateThWidthList(trList);
    } else {
      thWidthList.value = thWidthList.value || {};
      Object.entries(trList).forEach(function (_ref4) {
        var _ref5 = _slicedToArray__default["default"](_ref4, 2),
          colKey = _ref5[0],
          width = _ref5[1];
        thWidthList.value[colKey] = width;
      });
    }
    return thWidthList.value;
  };
  var updateThWidthListHandler = function updateThWidthListHandler() {
    var timer = setTimeout(function () {
      var _tableContentRef$valu2;
      updateTableWidth();
      if (notNeedThWidthList.value) return;
      var thead = (_tableContentRef$valu2 = tableContentRef.value) === null || _tableContentRef$valu2 === void 0 ? void 0 : _tableContentRef$valu2.querySelector("thead");
      if (!thead) return;
      updateThWidthList(thead.children);
      clearTimeout(timer);
    }, 0);
  };
  var resetThWidthList = function resetThWidthList() {
    thWidthList.value = {};
  };
  var emitScrollEvent = function emitScrollEvent(e) {
    var _props$onScrollX, _props$onScrollY, _props$onScroll;
    (_props$onScrollX = props.onScrollX) === null || _props$onScrollX === void 0 || _props$onScrollX.call(props, {
      e: e
    });
    (_props$onScrollY = props.onScrollY) === null || _props$onScrollY === void 0 || _props$onScrollY.call(props, {
      e: e
    });
    (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 || _props$onScroll.call(props, {
      e: e
    });
  };
  var getThWidthList = function getThWidthList(type) {
    if (type === "calculate") {
      var _tableContentRef$valu3;
      var trList = (_tableContentRef$valu3 = tableContentRef.value) === null || _tableContentRef$valu3 === void 0 || (_tableContentRef$valu3 = _tableContentRef$valu3.querySelector("thead")) === null || _tableContentRef$valu3 === void 0 ? void 0 : _tableContentRef$valu3.children;
      if (!trList) {
        return {};
      }
      return calculateThWidthList(trList);
    }
    return thWidthList.value || {};
  };
  Vue.watch([data, columns, bordered, tableLayout, tableContentWidth, isFixedHeader, isWidthOverflow, isFixedColumn, fixedRows, firstFullRow, lastFullRow], updateFixedStatus, {
    immediate: true
  });
  Vue.watch([isFixedColumn, columns], function () {
    var timer = setTimeout(function () {
      if (isFixedColumn.value) {
        updateColumnFixedShadow(tableContentRef.value);
      }
      clearTimeout(timer);
    }, 0);
  }, {
    immediate: true
  });
  Vue.watch([maxHeight, data, columns, bordered, tableContentRef], function () {
    if (tableContentRef.value) {
      updateFixedHeader();
    }
  }, {
    immediate: true
  });
  Vue.watch(finalColumns, function () {
    resetThWidthList();
  });
  Vue.watch([data, bordered, tableLayout, fixedRows, isFixedHeader, headerAffixedTop, footerAffixedBottom, tableContentWidth], function () {
    var timer = setTimeout(function () {
      updateThWidthListHandler();
      updateAffixPosition();
      clearTimeout(timer);
    }, 60);
  }, {
    immediate: true
  });
  Vue.watch([finalColumns], function (_ref6, _ref7) {
    var _ref8 = _slicedToArray__default["default"](_ref6, 1),
      finalColumns2 = _ref8[0];
    var _ref9 = _slicedToArray__default["default"](_ref7, 1),
      preFinalColumns = _ref9[0];
    var finalColKeys = finalColumns2.map(function (t) {
      return t.colKey;
    });
    var preColKeys = preFinalColumns.map(function (t) {
      return t.colKey;
    });
    if (finalColKeys.length < preColKeys.length) {
      var reduceKeys = xorWith$1(preColKeys, finalColKeys);
      var thWidthList2 = getThWidthList("calculate");
      var reduceWidth = 0;
      reduceKeys.forEach(function (key) {
        reduceWidth += thWidthList2[key];
      });
      var rootThWidthList = pick.pick(thWidthList2, preColKeys);
      var oldTotalWidth = Object.values(rootThWidthList).reduce(function () {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var n = arguments.length > 1 ? arguments[1] : undefined;
        return r + n;
      }, 0);
      var contentWidth = tableContentRef.value.clientWidth;
      var widthToReserve = oldTotalWidth - reduceWidth;
      setTableElmWidth(Math.max(contentWidth, widthToReserve));
    }
  });
  var refreshTable = function refreshTable() {
    updateThWidthListHandler();
    updateFixedHeader();
    updateAffixPosition();
    if (isFixedColumn.value || isFixedHeader.value) {
      updateFixedStatus();
      updateColumnFixedShadow(tableContentRef.value, {
        skipScrollLimit: true
      });
    }
    if (tableLayout.value === "auto") {
      updateThWidthList(getThWidthList("calculate"));
    }
  };
  var onResize = debounce.debounce(function () {
    refreshTable();
  }, 30);
  var resizeObserver = null;
  function addTableResizeObserver(tableElement) {
    if (typeof window === "undefined") return;
    if (helper.getIEVersion() < 11 || typeof window.ResizeObserver === "undefined") return;
    dom.off(window, "resize", onResize);
    resizeObserver = new window.ResizeObserver(function () {
      var timer = setTimeout(function () {
        refreshTable();
        clearTimeout(timer);
      }, 200);
    });
    resizeObserver.observe(tableElement);
    tableRef.value = tableElement;
  }
  Vue.onMounted(function () {
    var scrollWidth = getScrollbarWidth.getScrollbarWidthWithCSS();
    scrollbarWidth.value = scrollWidth;
    updateThWidthListHandler();
    var isWatchResize = isFixedColumn.value || isFixedHeader.value || !notNeedThWidthList.value || !data.value.length;
    var hasWindow = typeof window !== "undefined";
    var hasResizeObserver = hasWindow && typeof window.ResizeObserver !== "undefined";
    if (isWatchResize && helper.getIEVersion() < 11 || !hasResizeObserver) {
      dom.on(window, "resize", onResize);
    }
  });
  Vue.onBeforeUnmount(function () {
    var _resizeObserver, _resizeObserver2;
    if (typeof window !== "undefined") {
      dom.off(window, "resize", onResize);
    }
    (_resizeObserver = resizeObserver) === null || _resizeObserver === void 0 || _resizeObserver.unobserve(tableRef.value);
    (_resizeObserver2 = resizeObserver) === null || _resizeObserver2 === void 0 || _resizeObserver2.disconnect();
  });
  var setData = function setData(dataSource) {
    data.value = dataSource;
  };
  var updateTableAfterColumnResize = function updateTableAfterColumnResize() {
    updateFixedStatus();
    updateFixedHeader();
  };
  return {
    tableWidth: tableWidth,
    tableElmWidth: tableElmWidth,
    thWidthList: thWidthList,
    isFixedHeader: isFixedHeader,
    isWidthOverflow: isWidthOverflow,
    tableContentRef: tableContentRef,
    isFixedColumn: isFixedColumn,
    showColumnShadow: showColumnShadow,
    rowAndColFixedPosition: rowAndColFixedPosition,
    virtualScrollHeaderPos: virtualScrollHeaderPos,
    scrollbarWidth: scrollbarWidth,
    setData: setData,
    refreshTable: refreshTable,
    setTableElmWidth: setTableElmWidth,
    emitScrollEvent: emitScrollEvent,
    updateThWidthListHandler: updateThWidthListHandler,
    updateColumnFixedShadow: updateColumnFixedShadow,
    setUseFixedTableElmRef: setUseFixedTableElmRef,
    getThWidthList: getThWidthList,
    updateThWidthList: updateThWidthList,
    addTableResizeObserver: addTableResizeObserver,
    updateTableAfterColumnResize: updateTableAfterColumnResize
  };
}

exports["default"] = useFixed;
exports.getColumnFixedStyles = getColumnFixedStyles;
exports.getRowFixedStyles = getRowFixedStyles;
//# sourceMappingURL=useFixed.js.map
