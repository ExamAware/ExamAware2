/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { toRefs, ref, computed, watch, h } from 'vue';
import Sortable from 'sortablejs';
import { isFunction } from 'lodash-es';
import useClassName from './useClassName.js';
import { l as log } from '../../_chunks/dep-8295e674.js';
import { m as hasClass } from '../../_chunks/dep-16bcfabc.js';
import { a as getColumnDataByKey, b as getColumnIndexByKey } from '../../_chunks/dep-1c714f6d.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function swapDragArrayElement(data, currentIndex, targetIndex) {
  var newData = _toConsumableArray(data);
  if (targetIndex - currentIndex > 0) {
    newData.splice(targetIndex + 1, 0, newData[currentIndex]);
    newData.splice(currentIndex, 1);
  } else {
    newData.splice(targetIndex, 0, newData[currentIndex]);
    newData.splice(currentIndex + 1, 1);
  }
  return newData;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}
function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}
function useDragSort(props, context, params) {
  var _toRefs = toRefs(props),
    sortOnRowDraggable = _toRefs.sortOnRowDraggable,
    dragSort = _toRefs.dragSort,
    data = _toRefs.data;
  var innerPagination = ref(props.pagination);
  var _useClassName = useClassName(),
    tableDraggableClasses = _useClassName.tableDraggableClasses,
    tableBaseClass = _useClassName.tableBaseClass,
    tableFullRowClasses = _useClassName.tableFullRowClasses,
    tableExpandClasses = _useClassName.tableExpandClasses;
  var columns = ref(props.columns || []);
  var primaryTableRef = ref(null);
  var dragCol = computed(function () {
    return columns.value.find(function (item) {
      return item.colKey === "drag";
    });
  });
  var isRowDraggable = computed(function () {
    return sortOnRowDraggable.value || ["row", "row-handler-col"].includes(dragSort.value);
  });
  var isRowHandlerDraggable = computed(function () {
    return ["row-handler", "row-handler-col"].includes(dragSort.value) && !!dragCol.value;
  });
  var isColDraggable = computed(function () {
    return ["col", "row-handler-col"].includes(dragSort.value);
  });
  if (props.sortOnRowDraggable) {
    log.error("Table", "`sortOnRowDraggable` is going to be deprecated, use dragSort='row' instead.");
  }
  function getDataPageIndex(index, pagination) {
    var _pagination$current, _pagination$pageSize;
    var current = (_pagination$current = pagination.current) !== null && _pagination$current !== void 0 ? _pagination$current : pagination.defaultCurrent;
    var pageSize = (_pagination$pageSize = pagination.pageSize) !== null && _pagination$pageSize !== void 0 ? _pagination$pageSize : pagination.defaultPageSize;
    if (!props.disableDataPage && pagination && data.value.length > pageSize) {
      return pageSize * (current - 1) + index;
    }
    return index;
  }
  var registerRowDragEvent = function registerRowDragEvent(element) {
    var _element$children;
    if ((element === null || element === void 0 || (_element$children = element.children) === null || _element$children === void 0 ? void 0 : _element$children.length) === 0 || !isRowHandlerDraggable.value && !isRowDraggable.value) return;
    var dragContainer = element === null || element === void 0 ? void 0 : element.querySelector("tbody");
    if (!dragContainer) {
      console.error("tbody does not exist.");
      return null;
    }
    var baseOptions = _objectSpread({
      animation: 150,
      ghostClass: tableDraggableClasses.ghost,
      chosenClass: tableDraggableClasses.chosen,
      dragClass: tableDraggableClasses.dragging,
      filter: ".".concat(tableFullRowClasses.base, ",.").concat(tableExpandClasses.row),
      onMove: function onMove(evt) {
        return !hasClass(evt.related, tableFullRowClasses.base);
      },
      onEnd: function onEnd(evt) {
        var _props$onDragSort;
        if (evt.newIndex === evt.oldIndex) return;
        removeNode(evt.item);
        insertNodeAt(evt.from, evt.item, evt.oldIndex);
        var currentIndex = evt.oldIndex,
          targetIndex = evt.newIndex;
        if (isFunction(props.firstFullRow) && props.firstFullRow(h) || context.slots.firstFullRow || context.slots["first-full-row"]) {
          currentIndex -= 1;
          targetIndex -= 1;
        }
        if (innerPagination.value) {
          currentIndex = getDataPageIndex(currentIndex, innerPagination.value);
          targetIndex = getDataPageIndex(targetIndex, innerPagination.value);
        }
        var params2 = {
          data: data.value,
          currentIndex: currentIndex,
          current: data.value[currentIndex],
          targetIndex: targetIndex,
          target: data.value[targetIndex],
          newData: swapDragArrayElement(_toConsumableArray(props.data), currentIndex, targetIndex),
          e: evt,
          sort: "row"
        };
        params2.currentData = params2.newData;
        (_props$onDragSort = props.onDragSort) === null || _props$onDragSort === void 0 || _props$onDragSort.call(props, params2);
      }
    }, props.dragSortOptions);
    if (!dragContainer) return;
    if (isRowDraggable.value) {
      new Sortable(dragContainer, _objectSpread({}, baseOptions));
    } else {
      new Sortable(dragContainer, _objectSpread(_objectSpread({}, baseOptions), {}, {
        handle: ".".concat(tableDraggableClasses.handle)
      }));
    }
  };
  var registerOneLevelColDragEvent = function registerOneLevelColDragEvent(container, recover) {
    var options = _objectSpread({
      animation: 150,
      dataIdAttr: "data-colkey",
      direction: "vertical",
      ghostClass: tableDraggableClasses.ghost,
      chosenClass: tableDraggableClasses.chosen,
      dragClass: tableDraggableClasses.dragging,
      handle: ".".concat(tableBaseClass.thCellInner),
      onEnd: function onEnd(evt) {
        var _props$onDragSort2;
        if (evt.newIndex === evt.oldIndex) return;
        if (recover) {
          removeNode(evt.item);
          insertNodeAt(evt.from, evt.item, evt.oldIndex);
        }
        var oldIndex = evt.oldIndex,
          newIndex = evt.newIndex,
          targetElement = evt.target;
        var currentIndex = recover ? oldIndex : newIndex;
        var targetIndex = recover ? newIndex : oldIndex;
        var oldElement = targetElement.children[currentIndex];
        var newElement = targetElement.children[targetIndex];
        var current = getColumnDataByKey(columns.value, oldElement.dataset.colkey);
        var target = getColumnDataByKey(columns.value, newElement.dataset.colkey);
        if (!current || !current.colKey) {
          log.error("Table", "colKey is missing in ".concat(JSON.stringify(current)));
        }
        if (!target || !target.colKey) {
          log.error("Table", "colKey is missing in ".concat(JSON.stringify(target)));
        }
        currentIndex = getColumnIndexByKey(props.columns, current.colKey);
        targetIndex = getColumnIndexByKey(props.columns, target.colKey);
        var params2 = {
          data: columns.value,
          currentIndex: currentIndex,
          current: current,
          targetIndex: targetIndex,
          target: target,
          newData: swapDragArrayElement(_toConsumableArray(props.columns), currentIndex, targetIndex),
          e: evt,
          sort: "col"
        };
        params2.currentData = params2.newData;
        (_props$onDragSort2 = props.onDragSort) === null || _props$onDragSort2 === void 0 || _props$onDragSort2.call(props, params2);
      }
    }, props.dragSortOptions);
    if (!container) return;
    new Sortable(container, options);
  };
  var registerColDragEvent = function registerColDragEvent(tableElement) {
    if (!isColDraggable.value || !tableElement) return;
    var trList = tableElement.querySelectorAll("thead > tr");
    if (trList.length <= 1) {
      var _trList = _slicedToArray(trList, 1),
        container = _trList[0];
      registerOneLevelColDragEvent(container, true);
    } else {
      trList === null || trList === void 0 || trList.forEach(function (container) {
        registerOneLevelColDragEvent(container, false);
      });
    }
  };
  function setDragSortPrimaryTableRef(primaryTableElement) {
    primaryTableRef.value = primaryTableElement;
  }
  function setDragSortColumns(val) {
    columns.value = val;
  }
  watch([primaryTableRef, columns, dragSort, params], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 4),
      val = _ref2[0];
      _ref2[1];
      _ref2[2];
      var params2 = _ref2[3];
    register(val, params2);
  });
  function register(val, params2) {
    var primaryTableCmp = val;
    if (!val || !primaryTableCmp.$el || !params2.showElement) return;
    var timerA = setTimeout(function () {
      registerRowDragEvent(primaryTableCmp.$el);
      registerColDragEvent(primaryTableCmp.$el);
      var timer = setTimeout(function () {
        if (primaryTableCmp.$refs.affixHeaderRef) {
          registerColDragEvent(primaryTableCmp.$refs.affixHeaderRef);
        }
        clearTimeout(timer);
      });
      clearTimeout(timerA);
    }, 60);
  }
  return {
    innerPagination: innerPagination,
    isRowDraggable: isRowDraggable,
    isRowHandlerDraggable: isRowHandlerDraggable,
    isColDraggable: isColDraggable,
    setDragSortPrimaryTableRef: setDragSortPrimaryTableRef,
    setDragSortColumns: setDragSortColumns
  };
}

export { useDragSort as default };
//# sourceMappingURL=useDragSort.js.map
