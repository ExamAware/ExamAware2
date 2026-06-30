/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, watch, createVNode, mergeProps } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isArray, isFunction } from 'lodash-es';
import SorterButton from '../components/sorter-button.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-880d05b9.js';
import 'tdesign-icons-vue-next';
import './useClassName.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import '../../_chunks/dep-3a7a2ef1.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useSorter(props, _ref) {
  var slots = _ref.slots;
  var _toRefs = toRefs(props),
    sort = _toRefs.sort,
    data = _toRefs.data;
  var originalData = ref();
  var _useDefaultValue = useDefaultValue(sort, props.defaultSort, props.onSortChange, "sort"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tSortInfo = _useDefaultValue2[0],
    setTSortInfo = _useDefaultValue2[1];
  var _useDefaultValue3 = useDefaultValue(data, [], props.onDataChange, "data"),
    _useDefaultValue4 = _slicedToArray(_useDefaultValue3, 2),
    tData = _useDefaultValue4[0],
    setTData = _useDefaultValue4[1];
  var sorterFuncMap = computed(function () {
    return getSorterFuncMap(props.columns);
  });
  var innerSort = ref();
  var sortArray = computed(function () {
    var sort2 = tSortInfo.value;
    if (!sort2) return [];
    return isArray(sort2) ? sort2 : [sort2];
  });
  var sortMap = computed(function () {
    var sortMap2 = {};
    sortArray.value.forEach(function (info, index) {
      var sortBy = info.sortBy;
      sortMap2[sortBy] = _objectSpread({
        index: index
      }, info);
    });
    return sortMap2;
  });
  function getSorterFuncMap(columns) {
    var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    for (var i = 0, len = columns.length; i < len; i++) {
      var _col$children;
      var col = columns[i];
      if (isFunction(col.sorter)) {
        map[col.colKey] = col.sorter;
      }
      if ((_col$children = col.children) !== null && _col$children !== void 0 && _col$children.length) {
        getSorterFuncMap(col.children, map);
      }
    }
    return map;
  }
  function handleDataSort(sortInfo) {
    var sort2 = sortInfo;
    if (!Object.keys(sorterFuncMap.value).length) return;
    if (!originalData.value) {
      originalData.value = tData.value;
    }
    var isEmptyArraySort = !sort2 || sort2 instanceof Array && !sort2.length;
    var isEmptyObjectSort = !(sort2 instanceof Array) && !(sort2 !== null && sort2 !== void 0 && sort2.sortBy);
    if (isEmptyArraySort || isEmptyObjectSort) {
      setTData(originalData.value, {
        trigger: "sort"
      });
      return originalData.value;
    }
    var formatedSort = sort2 instanceof Array ? sort2 : [sort2];
    var newData = tData.value.slice().sort(function (a, b) {
      var sortResult = 0;
      for (var i = 0, len = formatedSort.length; i < len; i++) {
        var item = formatedSort[i];
        var sortFunc = sorterFuncMap.value[item.sortBy];
        if (sortResult === 0 && sortFunc) {
          sortResult = item.descending ? sortFunc(b, a) : sortFunc(a, b);
        } else {
          break;
        }
      }
      return sortResult;
    });
    if (JSON.stringify(newData) === JSON.stringify(tData.value)) return;
    setTData(newData, {
      trigger: "sort"
    });
    return newData;
  }
  function handleSortHeaderClick(col, p) {
    var _props$onChange;
    var sortInfo;
    if (props.multipleSort) {
      sortInfo = getMultipleNextSort(col, p);
    } else {
      var sort2 = tSortInfo.value instanceof Array ? tSortInfo.value[0] : tSortInfo.value;
      sortInfo = getSingleNextSort(col, sort2, p);
    }
    var newData = handleDataSort(sortInfo);
    var currentData = newData || tData.value;
    var currentDataSource = currentData;
    setTSortInfo(sortInfo, {
      currentDataSource: currentDataSource,
      col: col
    });
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, {
      sorter: sortInfo
    }, {
      currentData: currentData,
      trigger: "sorter"
    });
    innerSort.value = sortInfo;
  }
  function getSortOrder(descending) {
    if (descending === void 0) return;
    return descending ? "desc" : "asc";
  }
  function getSingleNextSort(col, sortInfo, p) {
    if (sortInfo && sortInfo.sortBy === col.colKey && sortInfo.descending === p.descending) {
      return void 0;
    }
    return {
      sortBy: col.colKey,
      descending: p.descending
    };
  }
  function getMultipleNextSort(col, p) {
    if (!Array.isArray(tSortInfo.value)) {
      tSortInfo.value = tSortInfo.value ? [tSortInfo.value] : [];
    }
    var sort2 = tSortInfo.value;
    var colKey = col.colKey;
    var result = _toConsumableArray(sort2);
    for (var i = 0, len = sort2.length; i < len; i++) {
      if (sort2[i].sortBy === colKey) {
        var next = getSingleNextSort(col, sort2[i], p);
        next ? result[i] = next : result.splice(i, 1);
        return result;
      }
    }
    result.push({
      sortBy: colKey,
      descending: p.descending
    });
    return result;
  }
  function renderSortIcon(_ref2) {
    var _sortMap$value$col$co;
    var col = _ref2.col;
    if (!col.sorter) return null;
    var sorterButtonsProps = {
      sortType: col.sortType,
      sortOrder: getSortOrder((_sortMap$value$col$co = sortMap.value[col.colKey]) === null || _sortMap$value$col$co === void 0 ? void 0 : _sortMap$value$col$co.descending),
      sortIcon: props.sortIcon,
      hideSortTips: props.hideSortTips,
      locale: props.locale
    };
    return createVNode(SorterButton, mergeProps(sorterButtonsProps, {
      "onSortIconClick": function onSortIconClick(_, p) {
        return handleSortHeaderClick(col, p);
      }
    }), {
      sortIcon: slots.sortIcon
    });
  }
  var isSortInfoSame = function isSortInfoSame(a, b) {
    var tmpSortInfo = isArray(a) ? a : [a];
    var tmpInnerSortInfo = isArray(b) ? b : [b];
    if (tmpSortInfo.length && !b) return false;
    var _loop = function _loop() {
        var item = tmpSortInfo[i];
        var result = tmpInnerSortInfo.find(function (t) {
          return t.sortBy === item.sortBy;
        });
        if (!result) return {
          v: false
        };
        return {
          v: item.descending === result.descending
        };
      },
      _ret;
    for (var i = 0, len = tmpSortInfo.length; i < len; i++) {
      _ret = _loop();
      if (_ret) return _ret.v;
    }
  };
  watch(function () {
    return [tSortInfo, props.data];
  }, function () {
    if (!tSortInfo.value || !Object.keys(tSortInfo.value).length || !tData.value.length) return;
    if (!isSortInfoSame(tSortInfo.value, innerSort.value)) {
      handleDataSort(tSortInfo.value);
    }
  }, {
    immediate: true
  });
  return {
    renderSortIcon: renderSortIcon
  };
}

export { useSorter as default };
//# sourceMappingURL=useSorter.js.map
