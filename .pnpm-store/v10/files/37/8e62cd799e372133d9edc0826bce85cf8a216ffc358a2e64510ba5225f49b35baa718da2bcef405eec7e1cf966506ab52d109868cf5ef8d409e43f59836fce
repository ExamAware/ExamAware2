/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ref, onMounted, reactive } from 'vue';
import { isNumber } from 'lodash-es';
import { c as off, o as on } from '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_MIN_WIDTH = 80;
var DEFAULT_MAX_WIDTH = 600;
var distance = 8;
function useColumnResize(params) {
  var isWidthOverflow = params.isWidthOverflow,
    tableContentRef = params.tableContentRef,
    showColumnShadow = params.showColumnShadow,
    getThWidthList = params.getThWidthList,
    updateThWidthList = params.updateThWidthList,
    setTableElmWidth = params.setTableElmWidth,
    updateTableAfterColumnResize = params.updateTableAfterColumnResize,
    onColumnResizeChange = params.onColumnResizeChange;
  var resizeLineRef = ref();
  var effectColMap = ref({});
  var leafColumns = ref([]);
  var originalSelectStart;
  var originalDragStart;
  onMounted(function () {
    var hasDocument = typeof document !== "undefined";
    originalSelectStart = hasDocument ? document.onselectstart : null;
    originalDragStart = hasDocument ? document.ondragstart : null;
  });
  var getSiblingResizableCol = function getSiblingResizableCol(nodes, index, type) {
    var i = index;
    while (nodes[i] && nodes[i].resizable === false) {
      if (type === "next") {
        i += 1;
      } else {
        i -= 1;
      }
    }
    return nodes[i];
  };
  var _setEffectColMap = function setEffectColMap(nodes, parent) {
    if (!nodes) return;
    leafColumns.value = nodes;
    nodes.forEach(function (n, index) {
      var prevNode = getSiblingResizableCol(nodes, index - 1, "prev");
      var nextNode = getSiblingResizableCol(nodes, index + 1, "next");
      var parentPrevCol = parent ? effectColMap.value[parent.colKey].prev : nextNode;
      var parentNextCol = parent ? effectColMap.value[parent.colKey].next : prevNode;
      var prev = index === 0 ? parentPrevCol : prevNode;
      var next = index === nodes.length - 1 ? parentNextCol : nextNode;
      effectColMap.value[n.colKey] = {
        prev: prev,
        next: next,
        current: {
          prevSibling: getSiblingResizableCol(nodes, index - 1, "prev"),
          nextSibling: getSiblingResizableCol(nodes, index + 1, "next")
        }
      };
      _setEffectColMap(n.children, n);
    });
  };
  var resizeLineParams = {
    isDragging: false,
    draggingCol: null,
    draggingStart: 0,
    effectCol: "next"
  };
  var resizeLineStyle = reactive({
    display: "none",
    height: "10px",
    left: "10px",
    bottom: "0"
  });
  var isColRightFixActive = function isColRightFixActive(col) {
    return col.fixed === "right" && showColumnShadow.right;
  };
  var onColumnMouseover = function onColumnMouseover(e, col) {
    if (!resizeLineRef.value || resizeLineParams.isDragging || !e.target) return;
    var target = e.target.closest("th");
    var colKey = target.getAttribute("data-colkey");
    if (!leafColumns.value.find(function (t) {
      return t.colKey === colKey;
    })) return;
    var targetBoundRect = target.getBoundingClientRect();
    var thRightCursor = targetBoundRect.right - e.pageX <= distance;
    var thLeftCursor = e.pageX - targetBoundRect.left <= distance;
    var isFixedToRight = isColRightFixActive(col);
    if (thRightCursor || isFixedToRight) {
      var _col$resizable;
      var colResizable = (_col$resizable = col.resizable) !== null && _col$resizable !== void 0 ? _col$resizable : true;
      if (colResizable) {
        target.style.cursor = thRightCursor || isFixedToRight && thLeftCursor ? "col-resize" : "";
        var isCurrent = thRightCursor && !isFixedToRight || isFixedToRight && thLeftCursor;
        resizeLineParams.draggingCol = isCurrent ? target : target.nextElementSibling;
        resizeLineParams.effectCol = "next";
        return;
      }
    } else if (thLeftCursor) {
      var prevEl = target.previousElementSibling;
      if (prevEl) {
        var _effectColMap$value$c, _effectPrevCol$resiza;
        var effectPrevCol = (_effectColMap$value$c = effectColMap.value[col.colKey]) === null || _effectColMap$value$c === void 0 ? void 0 : _effectColMap$value$c.prev;
        var _colResizable = (_effectPrevCol$resiza = effectPrevCol === null || effectPrevCol === void 0 ? void 0 : effectPrevCol.resizable) !== null && _effectPrevCol$resiza !== void 0 ? _effectPrevCol$resiza : true;
        if (_colResizable) {
          target.style.cursor = "col-resize";
          resizeLineParams.draggingCol = prevEl;
          resizeLineParams.effectCol = "prev";
          return;
        }
      }
    }
    target.style.cursor = "";
    resizeLineParams.draggingCol = null;
    resizeLineParams.effectCol = null;
  };
  var getMinMaxColWidth = function getMinMaxColWidth(targetCol) {
    var _targetCol$resize, _targetCol$resize2;
    var propMinWidth = isNumber(targetCol.minWidth) ? targetCol.minWidth : parseInt(targetCol.minWidth || "0", 10);
    return {
      minColWidth: Math.max(((_targetCol$resize = targetCol.resize) === null || _targetCol$resize === void 0 ? void 0 : _targetCol$resize.minWidth) || DEFAULT_MIN_WIDTH, propMinWidth),
      maxColWidth: ((_targetCol$resize2 = targetCol.resize) === null || _targetCol$resize2 === void 0 ? void 0 : _targetCol$resize2.maxWidth) || DEFAULT_MAX_WIDTH
    };
  };
  var getNormalResizeInfo = function getNormalResizeInfo(col, effectPrevCol, targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.right - tableBoundRect.left;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    var targetCol = resizeLineParams.effectCol === "next" ? col : effectPrevCol;
    var _getMinMaxColWidth = getMinMaxColWidth(targetCol),
      minColWidth = _getMinMaxColWidth.minColWidth,
      maxColWidth = _getMinMaxColWidth.maxColWidth;
    return {
      resizeLinePos: resizeLinePos,
      minResizeLineLeft: colLeft + minColWidth,
      maxResizeLineLeft: colLeft + maxColWidth
    };
  };
  var getFixedToRightResizeInfo = function getFixedToRightResizeInfo(target, col, effectPrevCol, targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.left - tableBoundRect.left;
    var targetCol = target.dataset.colkey === col.colKey ? col : effectPrevCol;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    var _getMinMaxColWidth2 = getMinMaxColWidth(targetCol),
      minColWidth = _getMinMaxColWidth2.minColWidth,
      maxColWidth = _getMinMaxColWidth2.maxColWidth;
    return {
      resizeLinePos: resizeLinePos,
      minResizeLineLeft: colLeft + (targetBoundRect.width - maxColWidth),
      maxResizeLineLeft: colLeft + (targetBoundRect.width - minColWidth)
    };
  };
  var getFixedToLeftResizeInfo = function getFixedToLeftResizeInfo(targetBoundRect, tableBoundRect) {
    var resizeLinePos = targetBoundRect.left - tableBoundRect.left;
    var colLeft = targetBoundRect.left - tableBoundRect.left;
    return {
      resizeLinePos: resizeLinePos,
      minResizeLineLeft: colLeft,
      maxResizeLineLeft: colLeft
    };
  };
  var getTotalTableWidth = function getTotalTableWidth(thWidthList) {
    var tableWidth = 0;
    leafColumns.value.forEach(function (col) {
      tableWidth += thWidthList[col.colKey];
    });
    return tableWidth;
  };
  var getSiblingColCanResizable = function getSiblingColCanResizable(newThWidthList, effectNextCol, distance2, index) {
    var isWidthAbnormal = true;
    if (effectNextCol) {
      var _getMinMaxColWidth3 = getMinMaxColWidth(effectNextCol),
        minColWidth = _getMinMaxColWidth3.minColWidth,
        maxColWidth = _getMinMaxColWidth3.maxColWidth;
      var targetNextColWidth = newThWidthList[effectNextCol.colKey] + distance2;
      isWidthAbnormal = targetNextColWidth < minColWidth || targetNextColWidth > maxColWidth;
    }
    return !(isWidthAbnormal || isWidthOverflow.value || index === leafColumns.value.length - 1);
  };
  var getOtherResizeInfo = function getOtherResizeInfo(col, effectPrevCol, targetBoundRect, tableBoundRect) {
    return effectPrevCol ? getNormalResizeInfo(col, effectPrevCol, targetBoundRect, tableBoundRect) : getFixedToLeftResizeInfo(targetBoundRect, tableBoundRect);
  };
  var onColumnMousedown = function onColumnMousedown(e, col, index) {
    var _tableContentRef$valu, _effectColMap$value$c2, _effectColMap$value$c3;
    if (!resizeLineParams.draggingCol) return;
    var target = resizeLineParams.draggingCol;
    var targetBoundRect = target.getBoundingClientRect();
    var tableBoundRect = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    var effectNextCol = (_effectColMap$value$c2 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c2 === void 0 ? void 0 : _effectColMap$value$c2.next;
    var effectPrevCol = (_effectColMap$value$c3 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c3 === void 0 ? void 0 : _effectColMap$value$c3.prev;
    var _ref = isColRightFixActive(col) ? getFixedToRightResizeInfo(target, col, effectNextCol, targetBoundRect, tableBoundRect) : getOtherResizeInfo(col, effectNextCol, targetBoundRect, tableBoundRect),
      resizeLinePos = _ref.resizeLinePos,
      minResizeLineLeft = _ref.minResizeLineLeft,
      maxResizeLineLeft = _ref.maxResizeLineLeft;
    resizeLineParams.isDragging = true;
    resizeLineParams.draggingStart = e.x;
    if (resizeLineRef !== null && resizeLineRef !== void 0 && resizeLineRef.value) {
      resizeLineStyle.display = "block";
      resizeLineStyle.height = "".concat(tableBoundRect.bottom - targetBoundRect.top, "px");
      resizeLineStyle.left = "".concat(resizeLinePos, "px");
      var parent = tableContentRef.value.parentElement.getBoundingClientRect();
      resizeLineStyle.bottom = "".concat(parent.bottom - tableBoundRect.bottom, "px");
    }
    var _onDragEnd = function onDragEnd() {
      var _effectColMap$value$c4;
      if (!resizeLineParams.isDragging) return;
      var moveDistance = resizeLinePos - parseFloat(resizeLineStyle.left) || 0;
      var thWidthList = getThWidthList("calculate");
      var currentCol = (_effectColMap$value$c4 = effectColMap.value[col.colKey]) === null || _effectColMap$value$c4 === void 0 ? void 0 : _effectColMap$value$c4.current;
      if (!currentCol) return;
      var currentSibling = resizeLineParams.effectCol === "next" ? currentCol.nextSibling : currentCol.prevSibling;
      var newThWidthList = _objectSpread({}, thWidthList);
      var tmpCurrentCol = col.resizable !== false ? col : currentSibling;
      var rightCol = resizeLineParams.effectCol === "next" ? currentCol.nextSibling : col;
      var canResizeSiblingColWidth = getSiblingColCanResizable(newThWidthList, rightCol, moveDistance, index);
      if (resizeLineParams.effectCol === "next") {
        if (isColRightFixActive(col)) {
          if (target.dataset.colkey !== col.colKey) {
            newThWidthList[effectNextCol.colKey] += moveDistance;
          } else {
            newThWidthList[tmpCurrentCol.colKey] += moveDistance;
          }
        } else {
          newThWidthList[tmpCurrentCol.colKey] -= moveDistance;
          if (canResizeSiblingColWidth) {
            newThWidthList[effectNextCol.colKey] += moveDistance;
          }
        }
      } else if (resizeLineParams.effectCol === "prev") {
        if (canResizeSiblingColWidth) {
          newThWidthList[tmpCurrentCol.colKey] += moveDistance;
        }
        effectPrevCol && (newThWidthList[effectPrevCol.colKey] -= moveDistance);
      }
      updateThWidthList(newThWidthList);
      var tableWidth = getTotalTableWidth(newThWidthList);
      setTableElmWidth(Math.round(tableWidth));
      updateTableAfterColumnResize();
      resizeLineParams.isDragging = false;
      resizeLineParams.draggingCol = null;
      resizeLineParams.effectCol = null;
      target.style.cursor = "";
      resizeLineStyle.display = "none";
      resizeLineStyle.left = "0";
      off(document, "mouseup", _onDragEnd);
      off(document, "mousemove", onDragOver);
      document.onselectstart = originalSelectStart;
      document.ondragstart = originalDragStart;
      onColumnResizeChange === null || onColumnResizeChange === void 0 || onColumnResizeChange({
        columnsWidth: newThWidthList
      });
    };
    var onDragOver = function onDragOver(e2) {
      if (resizeLineParams.isDragging) {
        var left = resizeLinePos + e2.x - resizeLineParams.draggingStart;
        resizeLineStyle.left = "".concat(Math.min(Math.max(left, minResizeLineLeft), maxResizeLineLeft), "px");
      }
    };
    on(document, "mouseup", _onDragEnd);
    on(document, "mousemove", onDragOver);
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };
  };
  return {
    resizeLineRef: resizeLineRef,
    resizeLineStyle: resizeLineStyle,
    onColumnMouseover: onColumnMouseover,
    onColumnMousedown: onColumnMousedown,
    setEffectColMap: _setEffectColMap
  };
}

export { useColumnResize as default };
//# sourceMappingURL=useColumnResize.mjs.map
