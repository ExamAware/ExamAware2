/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var table_components_sorterButton = require('../components/sorter-button.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-cc66acf1.js');
var isArray = require('../../_chunks/dep-87589faa.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('tdesign-icons-vue-next');
require('./useClassName.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../tooltip/index.js');
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');
require('../../_chunks/dep-31c76dc6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useSorter(props, _ref) {
  var slots = _ref.slots;
  var _toRefs = Vue.toRefs(props),
    sort = _toRefs.sort,
    data = _toRefs.data;
  var originalData = Vue.ref();
  var _useDefaultValue = index.useDefaultValue(sort, props.defaultSort, props.onSortChange, "sort"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    tSortInfo = _useDefaultValue2[0],
    setTSortInfo = _useDefaultValue2[1];
  var _useDefaultValue3 = index.useDefaultValue(data, [], props.onDataChange, "data"),
    _useDefaultValue4 = _slicedToArray__default["default"](_useDefaultValue3, 2),
    tData = _useDefaultValue4[0],
    setTData = _useDefaultValue4[1];
  var sorterFuncMap = Vue.computed(function () {
    return getSorterFuncMap(props.columns);
  });
  var innerSort = Vue.ref();
  var sortArray = Vue.computed(function () {
    var sort2 = tSortInfo.value;
    if (!sort2) return [];
    return isArray.isArray(sort2) ? sort2 : [sort2];
  });
  var sortMap = Vue.computed(function () {
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
      if (isFunction.isFunction(col.sorter)) {
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
    var result = _toConsumableArray__default["default"](sort2);
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
    return Vue.createVNode(table_components_sorterButton["default"], Vue.mergeProps(sorterButtonsProps, {
      "onSortIconClick": function onSortIconClick(_, p) {
        return handleSortHeaderClick(col, p);
      }
    }), {
      sortIcon: slots.sortIcon
    });
  }
  var isSortInfoSame = function isSortInfoSame(a, b) {
    var tmpSortInfo = isArray.isArray(a) ? a : [a];
    var tmpInnerSortInfo = isArray.isArray(b) ? b : [b];
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
  Vue.watch(function () {
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

exports["default"] = useSorter;
//# sourceMappingURL=useSorter.js.map
