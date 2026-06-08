/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ref, toRefs, computed, watch, createVNode, h } from 'vue';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import useClassName from './useClassName.mjs';
import { Button } from '../../button/index.mjs';
import { q as useTNodeDefault, k as useDefaultValue } from '../../_chunks/dep-7673347f.mjs';
import TableFilterController from '../components/filter-controller.mjs';
import { isFunction } from 'lodash-es';
import { g as getColumnsResetValue } from '../../_chunks/dep-ec9bd76e.mjs';
import { renderTitle } from './useTableHeader.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../button/button.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import 'tdesign-icons-vue-next';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../popup/props.mjs';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import '../../radio/index.mjs';
import '../../radio/radio.mjs';
import '../../radio/props.mjs';
import '../../radio/consts/index.mjs';
import '../../radio/group.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../radio/radio-group-props.mjs';
import '../../radio/radio-button.mjs';
import '../../radio/hooks/index.mjs';
import '../../radio/hooks/useKeyboard.mjs';
import '../../watermark/hooks/index.mjs';
import '../../input/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import './useMultiHeader.mjs';
import '../components/ellipsis.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../tooltip/utils/index.mjs';

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
//# sourceMappingURL=useFilter.mjs.map
