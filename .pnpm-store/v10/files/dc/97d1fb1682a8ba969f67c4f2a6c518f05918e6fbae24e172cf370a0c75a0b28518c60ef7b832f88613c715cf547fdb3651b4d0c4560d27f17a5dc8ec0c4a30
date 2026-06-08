/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { toRefs, computed, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { ChevronRightCircleIcon } from 'tdesign-icons-vue-next';
import { get } from 'lodash-es';
import useClassName from './useClassName.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import { u as useGlobalIcon } from '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-880d05b9.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';

function useRowExpand(props, context) {
  var _toRefs = toRefs(props),
    expandedRowKeys = _toRefs.expandedRowKeys;
  var renderTNode = useTNodeJSX();
  var _useConfig = useConfig("table", props.locale),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = useGlobalIcon({
      ChevronRightCircleIcon: ChevronRightCircleIcon
    }),
    ChevronRightCircleIcon$1 = _useGlobalIcon.ChevronRightCircleIcon;
  var _useClassName = useClassName(),
    tableExpandClasses = _useClassName.tableExpandClasses,
    positiveRotate90 = _useClassName.positiveRotate90,
    tableFullRowClasses = _useClassName.tableFullRowClasses;
  var _useDefaultValue = useDefaultValue(expandedRowKeys, props.defaultExpandedRowKeys || [], props.onExpandChange, "expandedRowKeys"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tExpandedRowKeys = _useDefaultValue2[0],
    setTExpandedRowKeys = _useDefaultValue2[1];
  var showExpandedRow = computed(function () {
    return Boolean(props.expandedRow || context.slots.expandedRow || context.slots["expanded-row"]);
  });
  var showExpandIconColumn = computed(function () {
    return props.expandIcon !== false && showExpandedRow.value;
  });
  var isFirstColumnFixed = computed(function () {
    var _props$columns;
    return ((_props$columns = props.columns) === null || _props$columns === void 0 || (_props$columns = _props$columns[0]) === null || _props$columns === void 0 ? void 0 : _props$columns.fixed) === "left";
  });
  var getExpandedRowClass = function getExpandedRowClass(params) {
    var _tExpandedRowKeys$val;
    if (!showExpandedRow.value) return null;
    var row = params.row,
      rowKey = params.rowKey;
    var currentRowKey = get(row, rowKey || "id");
    return tableExpandClasses[(_tExpandedRowKeys$val = tExpandedRowKeys.value) !== null && _tExpandedRowKeys$val !== void 0 && _tExpandedRowKeys$val.includes(currentRowKey) ? "rowExpanded" : "rowFolded"];
  };
  var onToggleExpand = function onToggleExpand(e, row) {
    props.expandOnRowClick && e.stopPropagation();
    var currentId = get(row, props.rowKey || "id");
    var index = tExpandedRowKeys.value.indexOf(currentId);
    var newKeys = _toConsumableArray(tExpandedRowKeys.value);
    index !== -1 ? newKeys.splice(index, 1) : newKeys.push(currentId);
    setTExpandedRowKeys(newKeys, {
      expandedRowData: props.data.filter(function (t2) {
        return newKeys.includes(get(t2, props.rowKey || "id"));
      }),
      currentRowData: row
    });
  };
  var renderExpandIcon = function renderExpandIcon(_, p) {
    var row = p.row,
      rowIndex = p.rowIndex;
    var currentId = get(row, props.rowKey || "id");
    var expanded = tExpandedRowKeys.value.includes(currentId);
    var icon = renderTNode("expandIcon", {
      defaultNode: t(globalConfig.value.expandIcon) || createVNode(ChevronRightCircleIcon$1, null, null),
      params: {
        row: row,
        index: rowIndex
      }
    });
    if (!icon) return null;
    var classes = [tableExpandClasses.iconBox, tableExpandClasses[expanded ? "expanded" : "collapsed"], _defineProperty({}, positiveRotate90, expanded)];
    return createVNode("span", {
      "class": classes,
      "onClick": function onClick(e) {
        return onToggleExpand(e, row);
      }
    }, [icon]);
  };
  var getExpandColumn = function getExpandColumn() {
    var expandCol = {
      colKey: "__EXPAND_ROW_ICON_COLUMN__",
      width: 46,
      className: tableExpandClasses.iconCell,
      fixed: isFirstColumnFixed.value ? "left" : void 0,
      cell: renderExpandIcon,
      stopPropagation: true
    };
    return expandCol;
  };
  var renderExpandedRow = function renderExpandedRow(p) {
    var rowId = get(p.row, props.rowKey || "id");
    if (!tExpandedRowKeys.value || !tExpandedRowKeys.value.includes(rowId)) return null;
    var isFixedLeft = p.isWidthOverflow && props.columns.find(function (item) {
      return item.fixed === "left";
    });
    return createVNode("tr", {
      "key": "expand_".concat(rowId),
      "class": [tableExpandClasses.row, _defineProperty({}, tableFullRowClasses.base, isFixedLeft)]
    }, [createVNode("td", {
      "colspan": p.columns.length
    }, [createVNode("div", {
      "class": [tableExpandClasses.rowInner, _defineProperty({}, tableFullRowClasses.innerFullRow, isFixedLeft)],
      "style": isFixedLeft ? {
        width: "".concat(p.tableWidth, "px")
      } : {}
    }, [createVNode("div", {
      "class": tableFullRowClasses.innerFullElement
    }, [renderTNode("expandedRow", {
      params: p
    })])])])]);
  };
  var onInnerExpandRowClick = function onInnerExpandRowClick(p) {
    onToggleExpand(p.e, p.row);
  };
  return {
    showExpandedRow: showExpandedRow,
    showExpandIconColumn: showExpandIconColumn,
    getExpandColumn: getExpandColumn,
    renderExpandedRow: renderExpandedRow,
    onInnerExpandRowClick: onInnerExpandRowClick,
    getExpandedRowClass: getExpandedRowClass
  };
}

export { useRowExpand as default };
//# sourceMappingURL=useRowExpand.js.map
