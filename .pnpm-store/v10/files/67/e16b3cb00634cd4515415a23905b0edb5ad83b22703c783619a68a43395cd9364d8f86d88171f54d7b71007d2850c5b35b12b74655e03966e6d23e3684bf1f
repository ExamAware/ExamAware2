/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { toRefs, ref, reactive, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { xorWith, pick, debounce, get } from 'lodash-es';
import { l as log } from '../../_chunks/dep-8295e674.js';
import { a as getScrollbarWidthWithCSS } from '../../_chunks/dep-167f0981.js';
import { o as on, c as off } from '../../_chunks/dep-16bcfabc.js';
import { e as getIEVersion } from '../../_chunks/dep-80a99546.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/objectWithoutProperties';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function getColumnFixedStyles(col, index, rowAndColFixedPosition, tableColFixedClasses) {
  var fixedPos = rowAndColFixedPosition === null || rowAndColFixedPosition === void 0 ? void 0 : rowAndColFixedPosition.get(col.colKey || index);
  if (!fixedPos) return {};
  var thClasses = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tableColFixedClasses.left, col.fixed === "left"), tableColFixedClasses.right, col.fixed === "right"), tableColFixedClasses.lastLeft, col.fixed === "left" && fixedPos.lastLeftFixedCol), tableColFixedClasses.firstRight, col.fixed === "right" && fixedPos.firstRightFixedCol);
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
  var rowClasses = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tableRowFixedClasses.top, fixedTop), tableRowFixedClasses.bottom, fixedBottom), tableRowFixedClasses.firstBottom, rowIndex === firstFixedBottomRow), tableRowFixedClasses.withoutBorderBottom, rowIndex === firstFixedBottomRow - 1);
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
  var _toRefs = toRefs(props),
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
  var data = ref([]);
  var tableRef = ref();
  var tableContentRef = ref();
  var isFixedHeader = ref(false);
  var isWidthOverflow = ref(false);
  var tableElmRef = ref();
  var scrollbarWidth = ref(6);
  var rowAndColFixedPosition = ref(/* @__PURE__ */new Map());
  var showColumnShadow = reactive({
    left: false,
    right: false
  });
  var virtualScrollHeaderPos = ref({
    left: 0,
    top: 0
  });
  var tableWidth = ref(0);
  var tableElmWidth = ref(0);
  var thWidthList = ref({});
  var isFixedColumn = ref(false);
  var isFixedRightColumn = ref(false);
  var isFixedLeftColumn = ref(false);
  var columnResizable = computed(function () {
    var _ref, _allowResizeColumnWid;
    return (_ref = (_allowResizeColumnWid = allowResizeColumnWidth.value) !== null && _allowResizeColumnWid !== void 0 ? _allowResizeColumnWid : resizable.value) !== null && _ref !== void 0 ? _ref : false;
  });
  var notNeedThWidthList = computed(function () {
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
          log.warn("TDesign Table", "".concat(th.innerText, " missing colKey. colKey is required for fixed column feature."));
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
      _ref3 = _slicedToArray(_ref2, 2),
      fixedTopRows = _ref3[0],
      fixedBottomRows = _ref3[1];
    var data2 = props.data,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? "id" : _props$rowKey;
    for (var i = 0; i < fixedTopRows; i++) {
      var tr = trList[i];
      var rowId = get(data2[i], rowKey);
      var thisRowInfo = initialColumnMap.get(rowId) || {};
      var lastRowId = get(data2[i - 1], rowKey);
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
      var _rowId = get(data2[_i], rowKey);
      var _thisRowInfo = initialColumnMap.get(_rowId) || {};
      var _lastRowId = get(data2[_i + 1], rowKey);
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
        var _ref5 = _slicedToArray(_ref4, 2),
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
  watch([data, columns, bordered, tableLayout, tableContentWidth, isFixedHeader, isWidthOverflow, isFixedColumn, fixedRows, firstFullRow, lastFullRow], updateFixedStatus, {
    immediate: true
  });
  watch([isFixedColumn, columns], function () {
    var timer = setTimeout(function () {
      if (isFixedColumn.value) {
        updateColumnFixedShadow(tableContentRef.value);
      }
      clearTimeout(timer);
    }, 0);
  }, {
    immediate: true
  });
  watch([maxHeight, data, columns, bordered, tableContentRef], function () {
    if (tableContentRef.value) {
      updateFixedHeader();
    }
  }, {
    immediate: true
  });
  watch(finalColumns, function () {
    resetThWidthList();
  });
  watch([data, bordered, tableLayout, fixedRows, isFixedHeader, headerAffixedTop, footerAffixedBottom, tableContentWidth], function () {
    var timer = setTimeout(function () {
      updateThWidthListHandler();
      updateAffixPosition();
      clearTimeout(timer);
    }, 60);
  }, {
    immediate: true
  });
  watch([finalColumns], function (_ref6, _ref7) {
    var _ref8 = _slicedToArray(_ref6, 1),
      finalColumns2 = _ref8[0];
    var _ref9 = _slicedToArray(_ref7, 1),
      preFinalColumns = _ref9[0];
    var finalColKeys = finalColumns2.map(function (t) {
      return t.colKey;
    });
    var preColKeys = preFinalColumns.map(function (t) {
      return t.colKey;
    });
    if (finalColKeys.length < preColKeys.length) {
      var reduceKeys = xorWith(preColKeys, finalColKeys);
      var thWidthList2 = getThWidthList("calculate");
      var reduceWidth = 0;
      reduceKeys.forEach(function (key) {
        reduceWidth += thWidthList2[key];
      });
      var rootThWidthList = pick(thWidthList2, preColKeys);
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
  var onResize = debounce(function () {
    refreshTable();
  }, 30);
  var resizeObserver = null;
  function addTableResizeObserver(tableElement) {
    if (typeof window === "undefined") return;
    if (getIEVersion() < 11 || typeof window.ResizeObserver === "undefined") return;
    off(window, "resize", onResize);
    resizeObserver = new window.ResizeObserver(function () {
      var timer = setTimeout(function () {
        refreshTable();
        clearTimeout(timer);
      }, 200);
    });
    resizeObserver.observe(tableElement);
    tableRef.value = tableElement;
  }
  onMounted(function () {
    var scrollWidth = getScrollbarWidthWithCSS();
    scrollbarWidth.value = scrollWidth;
    updateThWidthListHandler();
    var isWatchResize = isFixedColumn.value || isFixedHeader.value || !notNeedThWidthList.value || !data.value.length;
    var hasWindow = typeof window !== "undefined";
    var hasResizeObserver = hasWindow && typeof window.ResizeObserver !== "undefined";
    if (isWatchResize && getIEVersion() < 11 || !hasResizeObserver) {
      on(window, "resize", onResize);
    }
  });
  onBeforeUnmount(function () {
    var _resizeObserver, _resizeObserver2;
    if (typeof window !== "undefined") {
      off(window, "resize", onResize);
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

export { useFixed as default, getColumnFixedStyles, getRowFixedStyles };
//# sourceMappingURL=useFixed.js.map
