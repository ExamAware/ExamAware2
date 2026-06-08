/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var Sortable = require('sortablejs');
var table_hooks_useClassName = require('./useClassName.js');
var log = require('../../_chunks/dep-733b2b51.js');
var dom = require('../../_chunks/dep-06276759.js');
var utils = require('../../_chunks/dep-7f185af2.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
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
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-71fa6bfc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var Sortable__default = /*#__PURE__*/_interopDefaultLegacy(Sortable);

function swapDragArrayElement(data, currentIndex, targetIndex) {
  var newData = _toConsumableArray__default["default"](data);
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
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var _toRefs = Vue.toRefs(props),
    sortOnRowDraggable = _toRefs.sortOnRowDraggable,
    dragSort = _toRefs.dragSort,
    data = _toRefs.data;
  var innerPagination = Vue.ref(props.pagination);
  var _useClassName = table_hooks_useClassName["default"](),
    tableDraggableClasses = _useClassName.tableDraggableClasses,
    tableBaseClass = _useClassName.tableBaseClass,
    tableFullRowClasses = _useClassName.tableFullRowClasses,
    tableExpandClasses = _useClassName.tableExpandClasses;
  var columns = Vue.ref(props.columns || []);
  var primaryTableRef = Vue.ref(null);
  var dragCol = Vue.computed(function () {
    return columns.value.find(function (item) {
      return item.colKey === "drag";
    });
  });
  var isRowDraggable = Vue.computed(function () {
    return sortOnRowDraggable.value || ["row", "row-handler-col"].includes(dragSort.value);
  });
  var isRowHandlerDraggable = Vue.computed(function () {
    return ["row-handler", "row-handler-col"].includes(dragSort.value) && !!dragCol.value;
  });
  var isColDraggable = Vue.computed(function () {
    return ["col", "row-handler-col"].includes(dragSort.value);
  });
  if (props.sortOnRowDraggable) {
    log.log.error("Table", "`sortOnRowDraggable` is going to be deprecated, use dragSort='row' instead.");
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
        return !dom.hasClass(evt.related, tableFullRowClasses.base);
      },
      onEnd: function onEnd(evt) {
        var _props$onDragSort;
        if (evt.newIndex === evt.oldIndex) return;
        removeNode(evt.item);
        insertNodeAt(evt.from, evt.item, evt.oldIndex);
        var currentIndex = evt.oldIndex,
          targetIndex = evt.newIndex;
        if (isFunction.isFunction(props.firstFullRow) && props.firstFullRow(Vue.h) || context.slots.firstFullRow || context.slots["first-full-row"]) {
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
          newData: swapDragArrayElement(_toConsumableArray__default["default"](props.data), currentIndex, targetIndex),
          e: evt,
          sort: "row"
        };
        params2.currentData = params2.newData;
        (_props$onDragSort = props.onDragSort) === null || _props$onDragSort === void 0 || _props$onDragSort.call(props, params2);
      }
    }, props.dragSortOptions);
    if (!dragContainer) return;
    if (isRowDraggable.value) {
      new Sortable__default["default"](dragContainer, _objectSpread({}, baseOptions));
    } else {
      new Sortable__default["default"](dragContainer, _objectSpread(_objectSpread({}, baseOptions), {}, {
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
        var current = utils.getColumnDataByKey(columns.value, oldElement.dataset.colkey);
        var target = utils.getColumnDataByKey(columns.value, newElement.dataset.colkey);
        if (!current || !current.colKey) {
          log.log.error("Table", "colKey is missing in ".concat(JSON.stringify(current)));
        }
        if (!target || !target.colKey) {
          log.log.error("Table", "colKey is missing in ".concat(JSON.stringify(target)));
        }
        currentIndex = utils.getColumnIndexByKey(props.columns, current.colKey);
        targetIndex = utils.getColumnIndexByKey(props.columns, target.colKey);
        var params2 = {
          data: columns.value,
          currentIndex: currentIndex,
          current: current,
          targetIndex: targetIndex,
          target: target,
          newData: swapDragArrayElement(_toConsumableArray__default["default"](props.columns), currentIndex, targetIndex),
          e: evt,
          sort: "col"
        };
        params2.currentData = params2.newData;
        (_props$onDragSort2 = props.onDragSort) === null || _props$onDragSort2 === void 0 || _props$onDragSort2.call(props, params2);
      }
    }, props.dragSortOptions);
    if (!container) return;
    new Sortable__default["default"](container, options);
  };
  var registerColDragEvent = function registerColDragEvent(tableElement) {
    if (!isColDraggable.value || !tableElement) return;
    var trList = tableElement.querySelectorAll("thead > tr");
    if (trList.length <= 1) {
      var _trList = _slicedToArray__default["default"](trList, 1),
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
  Vue.watch([primaryTableRef, columns, dragSort, params], function (_ref) {
    var _ref2 = _slicedToArray__default["default"](_ref, 4),
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

exports["default"] = useDragSort;
//# sourceMappingURL=useDragSort.js.map
