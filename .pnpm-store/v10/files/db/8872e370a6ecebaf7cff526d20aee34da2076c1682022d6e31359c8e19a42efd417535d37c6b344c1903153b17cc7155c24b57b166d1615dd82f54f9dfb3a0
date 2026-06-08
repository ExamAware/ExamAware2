/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ref, toRefs, computed, watch, createVNode, h } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _typeof from '@babel/runtime/helpers/typeof';
import useClassName from './useClassName.js';
import { Button } from '../../button/index.js';
import { isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-880d05b9.js';
import TableFilterController from '../components/filter-controller.js';
import { g as getColumnsResetValue } from '../../_chunks/dep-1c714f6d.js';
import { renderTitle } from './useTableHeader.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-664b8b22.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import 'tdesign-icons-vue-next';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../popup/props.js';
import '../../_chunks/dep-80a77612.js';
import '../../checkbox/index.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-47b13687.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../radio/index.js';
import '../../radio/radio.js';
import '../../radio/props.js';
import '../../radio/consts/index.js';
import '../../radio/group.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../radio/radio-group-props.js';
import '../../radio/radio-button.js';
import '../../radio/hooks/useKeyboard.js';
import '../../watermark/hooks/index.js';
import '../../input/index.js';
import '../../input/input.js';
import '../../input/props.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import './useMultiHeader.js';
import '../components/ellipsis.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../tooltip/utils/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function isFilterValueExist(value) {
  var isArrayTrue = value instanceof Array && value.length;
  var isObject = _typeof(value) === "object" && !(value instanceof Array);
  var isObjectTrue = value !== null && isObject && Object.keys(value).length;
  return isArrayTrue || isObjectTrue || !["null", "", "undefined"].includes(String(value));
}
function filterEmptyData(data) {
  var newFilterValue = {};
  Object.keys(data).forEach(function (key) {
    var item = data[key];
    if (isFilterValueExist(item)) {
      newFilterValue[key] = item;
    }
  });
  return newFilterValue;
}
function useFilter(props, context) {
  var primaryTableRef = ref(null);
  var _useConfig = useConfig("table", props.locale),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var renderTNode = useTNodeDefault();
  var _toRefs = toRefs(props),
    filterValue = _toRefs.filterValue,
    columns = _toRefs.columns;
  var _useClassName = useClassName(),
    tableFilterClasses = _useClassName.tableFilterClasses,
    isFocusClass = _useClassName.isFocusClass;
  var isTableOverflowHidden = ref();
  var _useDefaultValue = useDefaultValue(filterValue, props.defaultFilterValue, props.onFilterChange, "filterValue"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tFilterValue = _useDefaultValue2[0],
    setTFilterValue = _useDefaultValue2[1];
  var innerFilterValue = ref(tFilterValue.value);
  var hasEmptyCondition = computed(function () {
    var filterEmpty = filterEmptyData(tFilterValue.value || {});
    return !tFilterValue.value || !Object.keys(filterEmpty).length;
  });
  watch([tFilterValue], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      val = _ref2[0];
    innerFilterValue.value = val;
  });
  function renderFirstFilterRow() {
    var _props$pagination, _props$data;
    if (hasEmptyCondition.value) return null;
    var defaultNode = createVNode("div", {
      "class": tableFilterClasses.result
    }, [createVNode("span", null, [t(globalConfig.value.searchResultText, {
      result: getFilterResultContent(),
      count: ((_props$pagination = props.pagination) === null || _props$pagination === void 0 ? void 0 : _props$pagination.total) || ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.length)
    })]), createVNode(Button, {
      "theme": "primary",
      "variant": "text",
      "onClick": onResetAll
    }, {
      "default": function _default() {
        return [globalConfig.value.clearFilterResultButtonText];
      }
    })]);
    var filterContent = renderTNode("filterRow");
    if (props.filterRow && !filterContent || props.filterRow === null) return null;
    return createVNode("div", {
      "class": tableFilterClasses.inner
    }, [filterContent || defaultNode]);
  }
  function getFilterResultContent() {
    var arr = [];
    var columns2 = [];
    getAllColumns(props.columns, columns2);
    columns2.filter(function (col) {
      return col.filter;
    }).forEach(function (col, index) {
      var value = tFilterValue.value[col.colKey];
      if (col.filter.list && !["null"].includes(String(value))) {
        var formattedValue = value instanceof Array ? value : [value];
        var label = [];
        col.filter.list.forEach(function (option) {
          if (formattedValue.includes(option.value)) {
            label.push(option.label);
          }
        });
        value = label.join();
      }
      if (isFilterValueExist(value)) {
        var _col$filter, _col$filter2;
        var _label = isFunction((_col$filter = col.filter) === null || _col$filter === void 0 ? void 0 : _col$filter.label) ? col.filter.label(h) : (_col$filter2 = col.filter) === null || _col$filter2 === void 0 ? void 0 : _col$filter2.label;
        var title = renderTitle(context.slots, col, index);
        arr.push("".concat(_label || title, "\uFF1A").concat(value));
      }
    });
    return arr.join("\uFF1B");
  }
  function getAllColumns(col, columns2) {
    col.forEach(function (column) {
      if (column.children) {
        getAllColumns(column.children, columns2);
      }
      columns2.push(column);
    });
  }
  function onInnerFilterChange(val, column) {
    var filterValue2 = _objectSpread(_objectSpread({}, innerFilterValue.value), {}, _defineProperty({}, column.colKey, val));
    innerFilterValue.value = filterValue2;
    if (!column.filter.showConfirmAndReset) {
      emitFilterChange(filterValue2, "filter-change", column);
    }
  }
  function emitFilterChange(filterValue2, trigger, column) {
    var _props$onChange;
    setTFilterValue(filterValue2, {
      col: column,
      trigger: trigger
    });
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
      filter: filterValue2
    }, {
      trigger: "filter"
    });
  }
  function onReset(column) {
    var _ref3, _column$filter$resetV;
    var filterValue2 = _objectSpread(_objectSpread({}, tFilterValue.value), {}, _defineProperty({}, column.colKey, (_ref3 = (_column$filter$resetV = column.filter.resetValue) !== null && _column$filter$resetV !== void 0 ? _column$filter$resetV : {
      single: "",
      multiple: [],
      input: ""
    }[column.filter.type]) !== null && _ref3 !== void 0 ? _ref3 : ""));
    emitFilterChange(filterValue2, "reset", column);
  }
  function onResetAll() {
    var resetValue = getColumnsResetValue(columns.value);
    emitFilterChange(resetValue, "clear", void 0);
  }
  function onConfirm(column) {
    emitFilterChange(innerFilterValue.value, "confirm", column);
  }
  function renderFilterIcon(_ref4) {
    var _primaryTableRef$valu;
    var col = _ref4.col,
      colIndex = _ref4.colIndex;
    return createVNode(TableFilterController, {
      "column": col,
      "colIndex": colIndex,
      "filterIcon": props.filterIcon,
      "tFilterValue": tFilterValue.value,
      "innerFilterValue": innerFilterValue.value,
      "tableFilterClasses": tableFilterClasses,
      "isFocusClass": isFocusClass,
      "popupProps": col.filter.popupProps,
      "attach": props.attach,
      "locale": props.locale,
      "onReset": onReset,
      "onConfirm": onConfirm,
      "onInnerFilterChange": onInnerFilterChange,
      "primaryTableElement": (_primaryTableRef$valu = primaryTableRef.value) === null || _primaryTableRef$valu === void 0 ? void 0 : _primaryTableRef$valu.$el,
      "onVisibleChange": onPopupVisibleChange
    }, {
      filterIcon: context.slots.filterIcon
    });
  }
  function setFilterPrimaryTableRef(primaryTableElement) {
    primaryTableRef.value = primaryTableElement;
  }
  function onPopupVisibleChange(visible) {
    if (visible && !isTableOverflowHidden.value) {
      isTableOverflowHidden.value = !visible;
    }
  }
  return {
    hasEmptyCondition: hasEmptyCondition,
    isTableOverflowHidden: isTableOverflowHidden,
    renderFilterIcon: renderFilterIcon,
    renderFirstFilterRow: renderFirstFilterRow,
    setFilterPrimaryTableRef: setFilterPrimaryTableRef
  };
}

export { useFilter as default };
//# sourceMappingURL=useFilter.js.map
