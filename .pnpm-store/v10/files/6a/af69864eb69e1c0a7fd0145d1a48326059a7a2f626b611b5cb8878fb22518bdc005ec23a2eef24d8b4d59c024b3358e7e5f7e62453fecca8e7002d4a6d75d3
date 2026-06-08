/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var Vue = require('vue');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
var index = require('../../_chunks/dep-f20044b8.js');
require('../../_chunks/dep-cc66acf1.js');
var get = require('../../_chunks/dep-cd8cfdc0.js');
var intersection = require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
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
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var childrenMap = /* @__PURE__ */new Map();
function getChildrenData(treeDataMap, data, keys, r) {
  if (childrenMap.get(data)) return childrenMap.get(data);
  var result = r || {
    allChildren: [],
    allChildrenKeys: [],
    leafNodeKeys: []
  };
  var children = get.get(data, keys.childrenKey);
  if (!children || !children.length) return result;
  var selectableChildren = children.filter(function (item) {
    var _treeDataMap$get;
    return !((_treeDataMap$get = treeDataMap.get(get.get(item, keys.rowKey))) !== null && _treeDataMap$get !== void 0 && _treeDataMap$get.disabled);
  });
  result.allChildren = _toConsumableArray__default["default"](new Set(result.allChildren.concat(selectableChildren)));
  for (var i = 0, len = children.length; i < len; i++) {
    var tItem = children[i];
    var c = get.get(tItem, keys.childrenKey);
    if (c !== null && c !== void 0 && c.length) {
      var nextLevelData = getChildrenData(treeDataMap, tItem, keys, result);
      result.allChildren = _toConsumableArray__default["default"](new Set(result.allChildren.concat(nextLevelData.allChildren)));
    }
  }
  for (var _i = 0, _len = result.allChildren.length; _i < _len; _i++) {
    var item = result.allChildren[_i];
    var children2 = get.get(item, keys.childrenKey);
    var rowValue = get.get(item, keys.rowKey);
    result.allChildrenKeys.push(rowValue);
    if (!children2 || !children2.length) {
      result.leafNodeKeys.push(rowValue);
    }
  }
  result.allChildrenKeys = _toConsumableArray__default["default"](new Set(result.allChildrenKeys));
  result.leafNodeKeys = _toConsumableArray__default["default"](new Set(result.leafNodeKeys));
  return result;
}
function removeChildrenKeys(p, r) {
  var selectedRowKeys = p.selectedRowKeys,
    removeKeys = p.removeKeys;
  var result = r || {
    data: [],
    keys: []
  };
  for (var i = 0, len = selectedRowKeys.length; i < len; i++) {
    var key = selectedRowKeys[i];
    if (!removeKeys.includes(key)) {
      result.keys.push(key);
    }
  }
  return result;
}
function getRowDataByKeys(p) {
  var treeDataMap = p.treeDataMap,
    selectedRowKeys = p.selectedRowKeys;
  var result = [];
  for (var i = 0, len = selectedRowKeys.length; i < len; i++) {
    var key = selectedRowKeys[i];
    result.push(treeDataMap.get(key));
  }
  return result;
}
function useTreeSelect(props, treeDataMap) {
  var _toRefs = Vue.toRefs(props),
    selectedRowKeys = _toRefs.selectedRowKeys,
    tree = _toRefs.tree,
    data = _toRefs.data,
    indeterminateSelectedRowKeys = _toRefs.indeterminateSelectedRowKeys;
  var tIndeterminateSelectedRowKeys = Vue.ref([]);
  var _useDefaultValue = index.useDefaultValue(selectedRowKeys, props.defaultSelectedRowKeys || [], props.onSelectChange, "selectedRowKeys"),
    _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
    tSelectedRowKeys = _useDefaultValue2[0],
    setTSelectedRowKeys = _useDefaultValue2[1];
  var rowDataKeys = Vue.computed(function () {
    var _props$tree;
    return {
      rowKey: props.rowKey || "id",
      childrenKey: ((_props$tree = props.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  Vue.watch([tree, treeDataMap, data, tSelectedRowKeys], function (_ref) {
    var _ref2 = _slicedToArray__default["default"](_ref, 2),
      tree2 = _ref2[0],
      treeDataMap2 = _ref2[1];
    if (!tree2 || !treeDataMap2.size || tree2.checkStrictly) return;
    updateIndeterminateState();
  });
  function updateIndeterminateState() {
    if (!tree.value || tree.value.checkStrictly) return;
    if (!tSelectedRowKeys.value.length) {
      tIndeterminateSelectedRowKeys.value = [];
      return;
    }
    var keys = [];
    var parentMap = {};
    for (var i = 0, len = tSelectedRowKeys.value.length; i < len; i++) {
      var rowValue = tSelectedRowKeys.value[i];
      var state = treeDataMap.value.get(rowValue);
      if (!state) continue;
      var children = get.get(state.row, rowDataKeys.value.childrenKey);
      if (!children || !children.length) {
        var parentTmp = state.parent;
        while (parentTmp) {
          if (!parentMap[parentTmp.id]) {
            parentMap[parentTmp.id] = [];
          }
          parentMap[parentTmp.id].push(state.row);
          var checkedLength = parentMap[parentTmp.id].length;
          var _getChildrenData = getChildrenData(treeDataMap.value, parentTmp.row, rowDataKeys.value),
            allChildrenKeys = _getChildrenData.allChildrenKeys;
          var parentTmpIndex = keys.indexOf(parentTmp.id);
          var selectedIndex = tSelectedRowKeys.value.indexOf(parentTmp.id);
          if (checkedLength > 0 && checkedLength < allChildrenKeys.length && selectedIndex === -1) {
            parentTmpIndex === -1 && keys.push(parentTmp.id);
          } else {
            parentTmpIndex !== -1 && keys.splice(parentTmpIndex, 1);
          }
          parentTmp = parentTmp.parent;
        }
      }
    }
    tIndeterminateSelectedRowKeys.value = keys;
  }
  function updateParentCheckedState(selectedKeys, currentRowKey, type) {
    if (!tree.value || tree.value.checkStrictly) return;
    var keys = _toConsumableArray__default["default"](selectedKeys);
    var state = treeDataMap.value.get(currentRowKey);
    var parentTmp = state.parent;
    while (parentTmp) {
      var _getChildrenData2 = getChildrenData(treeDataMap.value, parentTmp.row, rowDataKeys.value),
        leafNodeKeys = _getChildrenData2.leafNodeKeys;
      var checkedChildrenKeys = intersection.intersection(leafNodeKeys, selectedKeys);
      var selectedIndex = keys.indexOf(parentTmp.id);
      if (type === "uncheck") {
        selectedIndex !== -1 && keys.splice(selectedIndex, 1);
      } else if (checkedChildrenKeys.length === leafNodeKeys.length) {
        selectedIndex === -1 && keys.push(parentTmp.id);
      }
      parentTmp = parentTmp.parent;
    }
    return keys;
  }
  function onInnerSelectChange(rowKeys, extraData) {
    if (!tree.value || tree.value.checkStrictly) {
      setTSelectedRowKeys(rowKeys, extraData);
      return;
    }
    if (extraData.currentRowKey === "CHECK_ALL_BOX") {
      handleSelectAll(extraData);
    } else {
      handleSelect(rowKeys, extraData);
    }
  }
  function handleSelectAll(extraData) {
    var newRowKeys = [];
    var newRowData = [];
    if (extraData.type === "check") {
      var arr = _toConsumableArray__default["default"](treeDataMap.value.values());
      for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        if (!item.disabled) {
          newRowData.push(item.row);
          newRowKeys.push(get.get(item.row, rowDataKeys.value.rowKey));
        }
      }
    }
    var newExtraData = _objectSpread(_objectSpread({}, extraData), {}, {
      selectedRowData: newRowData || []
    });
    setTSelectedRowKeys(newRowKeys, newExtraData);
  }
  function handleSelect(rowKeys, extraData) {
    var _props$tree2;
    var newRowKeys = _toConsumableArray__default["default"](rowKeys);
    if (((_props$tree2 = props.tree) === null || _props$tree2 === void 0 ? void 0 : _props$tree2.checkStrictly) === false) {
      if ((extraData === null || extraData === void 0 ? void 0 : extraData.type) === "check") {
        var result = getChildrenData(treeDataMap.value, extraData.currentRowData, rowDataKeys.value);
        var allChildrenKeys = result.allChildrenKeys;
        childrenMap.set(extraData.currentRowData, result);
        newRowKeys = _toConsumableArray__default["default"](new Set(newRowKeys.concat(allChildrenKeys)));
      } else if ((extraData === null || extraData === void 0 ? void 0 : extraData.type) === "uncheck") {
        var children = getChildrenData(treeDataMap.value, extraData.currentRowData, rowDataKeys.value);
        var _result = removeChildrenKeys({
          selectedRowKeys: rowKeys,
          removeKeys: children.allChildrenKeys
        });
        newRowKeys = _result.keys;
      }
    }
    newRowKeys = updateParentCheckedState(newRowKeys, extraData.currentRowKey, extraData.type);
    var newRowData = getRowDataByKeys({
      treeDataMap: treeDataMap.value,
      selectedRowKeys: newRowKeys
    });
    var newExtraData = _objectSpread(_objectSpread({}, extraData), {}, {
      selectedRowData: newRowData
    });
    setTSelectedRowKeys(newRowKeys, newExtraData);
  }
  return {
    tIndeterminateSelectedRowKeys: indeterminateSelectedRowKeys.value ? indeterminateSelectedRowKeys : tIndeterminateSelectedRowKeys,
    onInnerSelectChange: onInnerSelectChange
  };
}

exports.childrenMap = childrenMap;
exports["default"] = useTreeSelect;
exports.getChildrenData = getChildrenData;
exports.getRowDataByKeys = getRowDataByKeys;
exports.removeChildrenKeys = removeChildrenKeys;
//# sourceMappingURL=useTreeSelect.js.map
