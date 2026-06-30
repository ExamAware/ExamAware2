/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { _ as _toConsumableArray } from '../../_chunks/dep-00b4e06a.mjs';
import { toRefs, ref, computed, watch } from 'vue';
import { get, intersection } from 'lodash-es';
import { k as useDefaultValue } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var childrenMap = /* @__PURE__ */new Map();
function getChildrenData(treeDataMap, data, keys, r) {
  if (childrenMap.get(data)) return childrenMap.get(data);
  var result = r || {
    allChildren: [],
    allChildrenKeys: [],
    leafNodeKeys: []
  };
  var children = get(data, keys.childrenKey);
  if (!children || !children.length) return result;
  var selectableChildren = children.filter(function (item) {
    var _treeDataMap$get;
    return !((_treeDataMap$get = treeDataMap.get(get(item, keys.rowKey))) !== null && _treeDataMap$get !== void 0 && _treeDataMap$get.disabled);
  });
  result.allChildren = _toConsumableArray(new Set(result.allChildren.concat(selectableChildren)));
  for (var i = 0, len = children.length; i < len; i++) {
    var tItem = children[i];
    var c = get(tItem, keys.childrenKey);
    if (c !== null && c !== void 0 && c.length) {
      var nextLevelData = getChildrenData(treeDataMap, tItem, keys, result);
      result.allChildren = _toConsumableArray(new Set(result.allChildren.concat(nextLevelData.allChildren)));
    }
  }
  for (var _i = 0, _len = result.allChildren.length; _i < _len; _i++) {
    var item = result.allChildren[_i];
    var children2 = get(item, keys.childrenKey);
    var rowValue = get(item, keys.rowKey);
    result.allChildrenKeys.push(rowValue);
    if (!children2 || !children2.length) {
      result.leafNodeKeys.push(rowValue);
    }
  }
  result.allChildrenKeys = _toConsumableArray(new Set(result.allChildrenKeys));
  result.leafNodeKeys = _toConsumableArray(new Set(result.leafNodeKeys));
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
  var _toRefs = toRefs(props),
    selectedRowKeys = _toRefs.selectedRowKeys,
    tree = _toRefs.tree,
    data = _toRefs.data,
    indeterminateSelectedRowKeys = _toRefs.indeterminateSelectedRowKeys;
  var tIndeterminateSelectedRowKeys = ref([]);
  var _useDefaultValue = useDefaultValue(selectedRowKeys, props.defaultSelectedRowKeys || [], props.onSelectChange, "selectedRowKeys"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tSelectedRowKeys = _useDefaultValue2[0],
    setTSelectedRowKeys = _useDefaultValue2[1];
  var rowDataKeys = computed(function () {
    var _props$tree;
    return {
      rowKey: props.rowKey || "id",
      childrenKey: ((_props$tree = props.tree) === null || _props$tree === void 0 ? void 0 : _props$tree.childrenKey) || "children"
    };
  });
  watch([tree, treeDataMap, data, tSelectedRowKeys], function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
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
      var children = get(state.row, rowDataKeys.value.childrenKey);
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
    var keys = _toConsumableArray(selectedKeys);
    var state = treeDataMap.value.get(currentRowKey);
    var parentTmp = state.parent;
    while (parentTmp) {
      var _getChildrenData2 = getChildrenData(treeDataMap.value, parentTmp.row, rowDataKeys.value),
        leafNodeKeys = _getChildrenData2.leafNodeKeys;
      var checkedChildrenKeys = intersection(leafNodeKeys, selectedKeys);
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
      var arr = _toConsumableArray(treeDataMap.value.values());
      for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        if (!item.disabled) {
          newRowData.push(item.row);
          newRowKeys.push(get(item.row, rowDataKeys.value.rowKey));
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
    var newRowKeys = _toConsumableArray(rowKeys);
    if (((_props$tree2 = props.tree) === null || _props$tree2 === void 0 ? void 0 : _props$tree2.checkStrictly) === false) {
      if ((extraData === null || extraData === void 0 ? void 0 : extraData.type) === "check") {
        var result = getChildrenData(treeDataMap.value, extraData.currentRowData, rowDataKeys.value);
        var allChildrenKeys = result.allChildrenKeys;
        childrenMap.set(extraData.currentRowData, result);
        newRowKeys = _toConsumableArray(new Set(newRowKeys.concat(allChildrenKeys)));
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

export { childrenMap, useTreeSelect as default, getChildrenData, getRowDataByKeys, removeChildrenKeys };
//# sourceMappingURL=useTreeSelect.mjs.map
