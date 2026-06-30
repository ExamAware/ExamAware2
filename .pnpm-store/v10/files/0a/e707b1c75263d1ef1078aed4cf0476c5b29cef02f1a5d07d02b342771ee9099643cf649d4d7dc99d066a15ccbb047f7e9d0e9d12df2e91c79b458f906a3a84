/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { toRefs, ref, computed, watch, createVNode, mergeProps } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { intersection, get, isFunction } from 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import { l as log } from '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-880d05b9.js';
import { i as isRowSelectedDisabled } from '../../_chunks/dep-1c714f6d.js';
import { Checkbox } from '../../checkbox/index.js';
import { Radio } from '../../radio/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../../radio/radio.js';
import '../../radio/props.js';
import '../../radio/consts/index.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../radio/group.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../radio/radio-group-props.js';
import '../../radio/radio-button.js';
import '../../_chunks/dep-80a77612.js';
import '../../radio/hooks/useKeyboard.js';
import '../../watermark/hooks/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/radio/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useRowSelect(props, tableSelectedClasses) {
  var _toRefs = toRefs(props),
    selectedRowKeys = _toRefs.selectedRowKeys,
    columns = _toRefs.columns,
    rowKey = _toRefs.rowKey,
    data = _toRefs.data,
    reserveSelectedRowOnPaginate = _toRefs.reserveSelectedRowOnPaginate,
    pagination = _toRefs.pagination;
  var currentPaginateData = ref(pagination.value ? data.value.slice((pagination.value.current - 1) * pagination.value.pageSize, pagination.value.current * pagination.value.pageSize) : data.value);
  var selectedRowClassNames = ref();
  var _useDefaultValue = useDefaultValue(selectedRowKeys, props.defaultSelectedRowKeys || [], props.onSelectChange, "selectedRowKeys"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tSelectedRowKeys = _useDefaultValue2[0],
    setTSelectedRowKeys = _useDefaultValue2[1];
  var selectedRowDataMap = ref(/* @__PURE__ */new Map());
  var selectColumn = computed(function () {
    return props.columns.find(function (_ref) {
      var type = _ref.type;
      return ["multiple", "single"].includes(type);
    });
  });
  var selectionType = computed(function () {
    var _selectColumn$value;
    return props.rowSelectionType || ((_selectColumn$value = selectColumn.value) === null || _selectColumn$value === void 0 ? void 0 : _selectColumn$value.type) || "single";
  });
  var canSelectedRows = computed(function () {
    var currentData = reserveSelectedRowOnPaginate.value ? data.value : currentPaginateData.value;
    return currentData.filter(function (row, rowIndex) {
      return !isDisabled(row, rowIndex);
    });
  });
  var intersectionKeys = computed(function () {
    return intersection(tSelectedRowKeys.value, canSelectedRows.value.map(function (t) {
      return get(t, props.rowKey || "id");
    }));
  });
  var allowUncheck = computed(function () {
    var _selectColumn$value2, _selectColumn$value3;
    if (props.rowSelectionAllowUncheck) return true;
    var singleSelectCol = selectionType.value === "single";
    if (!singleSelectCol || !((_selectColumn$value2 = selectColumn.value) !== null && _selectColumn$value2 !== void 0 && _selectColumn$value2.checkProps) || !("allowUncheck" in ((_selectColumn$value3 = selectColumn.value) === null || _selectColumn$value3 === void 0 ? void 0 : _selectColumn$value3.checkProps))) return false;
    return selectColumn.value.checkProps.allowUncheck;
  });
  watch([data, columns, tSelectedRowKeys, selectColumn, rowKey], function () {
    var _selectColumn$value4;
    var disabledRowFunc = function disabledRowFunc(p) {
      return selectColumn.value.disabled(p) ? tableSelectedClasses.disabled : "";
    };
    var disabledRowClass = (_selectColumn$value4 = selectColumn.value) !== null && _selectColumn$value4 !== void 0 && _selectColumn$value4.disabled ? disabledRowFunc : void 0;
    var selected = new Set(tSelectedRowKeys.value);
    var selectedRowClassFunc = function selectedRowClassFunc(_ref2) {
      var row = _ref2.row;
      var rowId = get(row, props.rowKey || "id");
      return selected.has(rowId) ? tableSelectedClasses.selected : "";
    };
    var selectedRowClass = selected.size ? selectedRowClassFunc : void 0;
    selectedRowClassNames.value = [disabledRowClass, selectedRowClass];
  }, {
    immediate: true
  });
  watch(data, function () {
    currentPaginateData.value = data.value;
  });
  function isDisabled(row, rowIndex) {
    return isRowSelectedDisabled(selectColumn.value, row, rowIndex);
  }
  function getSelectedHeader() {
    return function () {
      var isIndeterminate = intersectionKeys.value.length > 0 && intersectionKeys.value.length < canSelectedRows.value.length;
      var isChecked = intersectionKeys.value.length !== 0 && canSelectedRows.value.length !== 0 && intersectionKeys.value.length === canSelectedRows.value.length;
      return createVNode(Checkbox, {
        "checked": isChecked,
        "indeterminate": isIndeterminate,
        "disabled": !canSelectedRows.value.length,
        "onChange": handleSelectAll
      }, null);
    };
  }
  function getRowSelectDisabledData(p) {
    var col = p.col,
      row = p.row,
      rowIndex = p.rowIndex;
    var disabled = isFunction(col.disabled) ? col.disabled({
      row: row,
      rowIndex: rowIndex
    }) : col.disabled;
    var checkProps = isFunction(col.checkProps) ? col.checkProps({
      row: row,
      rowIndex: rowIndex
    }) : col.checkProps;
    return {
      disabled: disabled || (checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled),
      checkProps: checkProps
    };
  }
  function renderSelectCell(p) {
    var column = p.col,
      _p$row = p.row,
      row = _p$row === void 0 ? {} : _p$row;
    var checked = tSelectedRowKeys.value.includes(get(row, props.rowKey || "id"));
    var _getRowSelectDisabled = getRowSelectDisabledData(p),
      disabled = _getRowSelectDisabled.disabled,
      checkProps = _getRowSelectDisabled.checkProps;
    var selectBoxProps = _objectSpread(_objectSpread({
      checked: checked,
      disabled: disabled
    }, checkProps), {}, {
      onClick: function onClick(e) {
        if (_typeof(e) === "object" && "e" in e) {
          var _e$e;
          (_e$e = e.e) === null || _e$e === void 0 || _e$e.stopPropagation();
        } else {
          e === null || e === void 0 || e.stopPropagation();
        }
      },
      onChange: function onChange() {
        return handleSelectChange(row);
      }
    });
    if (column.type === "single") return createVNode(Radio, selectBoxProps, null);
    if (column.type === "multiple") {
      var _props$indeterminateS;
      var isIndeterminate = (_props$indeterminateS = props.indeterminateSelectedRowKeys) !== null && _props$indeterminateS !== void 0 && _props$indeterminateS.length ? props.indeterminateSelectedRowKeys.includes(get(row, props.rowKey)) : false;
      return createVNode(Checkbox, mergeProps({
        "indeterminate": isIndeterminate
      }, selectBoxProps), null);
    }
    return null;
  }
  function handleSelectChange() {
    var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var selectedRowKeys2 = _toConsumableArray(tSelectedRowKeys.value);
    var reRowKey = props.rowKey || "id";
    var id = get(row, reRowKey);
    var selectedRowIndex = selectedRowKeys2.indexOf(id);
    var isExisted = selectedRowIndex !== -1;
    if (selectionType.value === "multiple") {
      isExisted ? selectedRowKeys2.splice(selectedRowIndex, 1) : selectedRowKeys2.push(id);
    } else if (selectionType.value === "single") {
      selectedRowKeys2 = isExisted && allowUncheck.value ? [] : [id];
    } else {
      log.warn("Table", "`column.type` must be one of `multiple` and `single`");
      return;
    }
    setTSelectedRowKeys(selectedRowKeys2, {
      selectedRowData: selectedRowKeys2.map(function (t) {
        return selectedRowDataMap.value.get(t);
      }),
      currentRowKey: id,
      currentRowData: row,
      type: isExisted ? "uncheck" : "check"
    });
  }
  function handleSelectAll(checked) {
    var _selectedRowKeys$valu;
    var reRowKey = props.rowKey || "id";
    var canSelectedRowKeys = canSelectedRows.value.map(function (record) {
      return get(record, reRowKey);
    });
    var disabledSelectedRowKeys = ((_selectedRowKeys$valu = selectedRowKeys.value) === null || _selectedRowKeys$valu === void 0 ? void 0 : _selectedRowKeys$valu.filter(function (id) {
      return !canSelectedRowKeys.includes(id);
    })) || [];
    var allIds = checked ? [].concat(_toConsumableArray(disabledSelectedRowKeys), _toConsumableArray(canSelectedRowKeys)) : _toConsumableArray(disabledSelectedRowKeys);
    setTSelectedRowKeys(allIds, {
      selectedRowData: checked ? allIds.map(function (t) {
        return selectedRowDataMap.value.get(t);
      }) : [],
      type: checked ? "check" : "uncheck",
      currentRowKey: "CHECK_ALL_BOX"
    });
  }
  function formatToRowSelectColumn(col) {
    var isSelection = ["multiple", "single"].includes(col.type);
    if (!isSelection) return col;
    return _objectSpread(_objectSpread({}, col), {}, {
      width: col.width || 64,
      className: [tableSelectedClasses.checkCell, col.className],
      cell: function cell(_, p) {
        return renderSelectCell(p);
      },
      title: col.type === "multiple" ? getSelectedHeader() : col.title
    });
  }
  var onInnerSelectRowClick = function onInnerSelectRowClick(_ref3) {
    var row = _ref3.row,
      index = _ref3.index;
    var selectedColIndex = props.columns.findIndex(function (item) {
      return item.colKey === "row-select";
    });
    var disabled = false;
    if (selectedColIndex !== -1) {
      var _getRowSelectDisabled2;
      disabled = (_getRowSelectDisabled2 = getRowSelectDisabledData({
        row: row,
        rowIndex: index,
        col: props.columns[selectedColIndex],
        colIndex: selectedColIndex
      })) === null || _getRowSelectDisabled2 === void 0 ? void 0 : _getRowSelectDisabled2.disabled;
    }
    if (disabled) return;
    handleSelectChange(row);
  };
  watch([data, rowKey], function () {
    for (var i = 0, len = data.value.length; i < len; i++) {
      selectedRowDataMap.value.set(get(data.value[i], rowKey.value || "id"), data.value[i]);
    }
  }, {
    immediate: true
  });
  var showRowSelect = computed(function () {
    return Boolean(selectColumn.value || props.selectOnRowClick || props.selectedRowKeys);
  });
  var clearAllSelectedRowKeys = function clearAllSelectedRowKeys() {
    setTSelectedRowKeys([], {
      selectedRowData: [],
      currentRowKey: void 0,
      currentRowData: void 0,
      type: "uncheck"
    });
  };
  var handleRowSelectWithAreaSelection = function handleRowSelectWithAreaSelection(_ref4) {
    var activeRowList = _ref4.activeRowList,
      action = _ref4.action;
    if (!showRowSelect.value) return;
    if (action === "clear") {
      clearAllSelectedRowKeys();
      return;
    }
    if (action === "select-all") {
      handleSelectAll(true);
      return;
    }
    if (selectionType.value === "single") {
      if (action === "space-one-selection") {
        handleSelectChange(activeRowList[0].row);
      }
      return;
    }
    var validAreaSelection = activeRowList.filter(function (_ref5) {
      var row = _ref5.row,
        rowIndex = _ref5.rowIndex;
      return !getRowSelectDisabledData({
        row: row,
        rowIndex: rowIndex,
        col: selectColumn.value,
        colIndex: void 0
      }).disabled;
    });
    if (!validAreaSelection.length) return;
    var areaSelectionKeys = validAreaSelection.map(function (_ref6) {
      var row = _ref6.row;
      return get(row, props.rowKey);
    });
    var intersectionKeys2 = intersection(tSelectedRowKeys.value, areaSelectionKeys);
    var toCheck = intersectionKeys2.length !== areaSelectionKeys.length;
    var clearedKeys = tSelectedRowKeys.value.filter(function (key) {
      return !areaSelectionKeys.includes(key);
    });
    var newSelectedRowKeys = toCheck ? _toConsumableArray(new Set(tSelectedRowKeys.value.concat(areaSelectionKeys))) : clearedKeys;
    var currentRowData = action === "space-one-selection" ? activeRowList[0].row : void 0;
    setTSelectedRowKeys(newSelectedRowKeys, {
      selectedRowData: activeRowList,
      currentRowKey: get(currentRowData, props.rowKey),
      currentRowData: currentRowData,
      type: toCheck ? "check" : "uncheck"
    });
  };
  return {
    selectColumn: selectColumn,
    showRowSelect: showRowSelect,
    selectedRowClassNames: selectedRowClassNames,
    currentPaginateData: currentPaginateData,
    setTSelectedRowKeys: setTSelectedRowKeys,
    formatToRowSelectColumn: formatToRowSelectColumn,
    onInnerSelectRowClick: onInnerSelectRowClick,
    handleRowSelectWithAreaSelection: handleRowSelectWithAreaSelection
  };
}

export { useRowSelect as default };
//# sourceMappingURL=useRowSelect.js.map
