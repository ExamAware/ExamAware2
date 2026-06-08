/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { isNumber, cloneDeep, isFunction, isArray } from 'lodash-es';
import { getFullPathLabel, isEmptyValues, getTreeValue } from './helper.mjs';
import '../../_chunks/dep-9f459d8b.mjs';

function expandClickEffect(propsTrigger, trigger, node, cascaderContext) {
  var checkStrictly = cascaderContext.checkStrictly,
    multiple = cascaderContext.multiple,
    treeStore = cascaderContext.treeStore,
    setVisible = cascaderContext.setVisible,
    setValue = cascaderContext.setValue,
    setTreeNodes = cascaderContext.setTreeNodes,
    setExpand = cascaderContext.setExpand,
    value = cascaderContext.value,
    max = cascaderContext.max,
    valueType = cascaderContext.valueType;
  var isDisabled = node.disabled || multiple && value.length >= max && max !== 0;
  if (isDisabled) return;
  if (propsTrigger === trigger) {
    var expanded = node.setExpanded(true);
    if (!cascaderContext.inputVal) {
      treeStore.replaceExpanded(expanded);
      var nodes = treeStore.getNodes().filter(function (node2) {
        return node2.visible;
      });
      setTreeNodes(nodes);
    } else {
      treeStore.refreshNodes();
    }
    if (multiple && !cascaderContext.isParentFilterable) {
      setExpand(expanded);
    }
  }
  if (!multiple && (node.isLeaf() || checkStrictly) && trigger === "click") {
    treeStore.resetChecked();
    var checked = node.setChecked(!node.checked);
    var _checked = _slicedToArray(checked, 1),
      value2 = _checked[0];
    setValue(valueType === "single" ? value2 : node.getPath().map(function (item) {
      return item.value;
    }), "check", node.getModel());
    if (!checkStrictly || propsTrigger === "hover" || cascaderContext.inputVal) {
      setVisible(false, {});
    }
  }
}
function valueChangeEffect(node, cascaderContext) {
  var disabled = cascaderContext.disabled,
    max = cascaderContext.max,
    inputVal = cascaderContext.inputVal,
    setVisible = cascaderContext.setVisible,
    setValue = cascaderContext.setValue,
    treeNodes = cascaderContext.treeNodes,
    treeStore = cascaderContext.treeStore,
    valueType = cascaderContext.valueType,
    setInputVal = cascaderContext.setInputVal,
    reserveKeyword = cascaderContext.reserveKeyword;
  if (!node || disabled || node.disabled) {
    return;
  }
  var checked = node.setChecked(!node.isChecked());
  if (isNumber(max) && max < 0) {
    console.warn("TDesign Warn:", "max should > 0");
  }
  if (checked.length > max && isNumber(max) && max > 0) {
    return;
  }
  if (checked.length === 0) {
    var expanded = treeStore.getExpanded();
    setTimeout(function () {
      treeStore.replaceExpanded(expanded);
      treeStore.refreshNodes();
    }, 0);
  }
  var isSelectAll = treeNodes.every(function (item) {
    return checked.indexOf(item.value) > -1;
  });
  if (inputVal && isSelectAll) {
    setVisible(false, {});
  }
  var resValue = valueType === "single" ? checked : checked.map(function (val) {
    return treeStore.getNode(val).getPath().map(function (item) {
      return item.value;
    });
  });
  setValue(resValue, node.checked ? "uncheck" : "check", node.getModel());
  if (!reserveKeyword) setInputVal("");
}
function closeIconClickEffect(cascaderContext) {
  var setVisible = cascaderContext.setVisible,
    multiple = cascaderContext.multiple,
    setValue = cascaderContext.setValue;
  setVisible(false, {});
  setValue(multiple ? [] : "", "clear");
}
function handleRemoveTagEffect(cascaderContext, index, onRemove) {
  var disabled = cascaderContext.disabled,
    setValue = cascaderContext.setValue,
    value = cascaderContext.value,
    valueType = cascaderContext.valueType,
    treeStore = cascaderContext.treeStore;
  if (disabled) return;
  if (index !== void 0) {
    var newValue = cloneDeep(value);
    var res = newValue.splice(index, 1);
    var node = treeStore.getNodes(res[0])[0];
    var checked = node.setChecked(!node.isChecked());
    var resValue = valueType === "single" ? checked : checked.map(function (val) {
      return treeStore.getNode(val).getPath().map(function (item) {
        return item.value;
      });
    });
    setValue(resValue, "uncheck", node.getModel());
    if (isFunction(onRemove)) {
      onRemove({
        value: checked,
        node: node
      });
    }
  } else {
    if (isFunction(onRemove)) {
      onRemove({
        value: value,
        node: void 0
      });
    }
  }
}
var treeNodesEffect = function treeNodesEffect(inputVal, treeStore, setTreeNodes, filter, isParentFilterable) {
  if (!treeStore) return;
  var nodes = [];
  var filterMethods = function filterMethods(node) {
    if (!node.isLeaf() && !isParentFilterable) return false;
    if (isFunction(filter)) {
      return filter("".concat(inputVal), node);
    }
    var fullPathLabel = getFullPathLabel(node, "");
    return fullPathLabel.includes("".concat(inputVal));
  };
  if (inputVal) {
    nodes = treeStore.nodes.filter(filterMethods);
  } else {
    nodes = treeStore.getNodes().filter(function (node) {
      return node.visible;
    });
  }
  setTreeNodes(nodes);
};
var calculateExpand = function calculateExpand(treeStore, treeValue) {
  var expandedMap = /* @__PURE__ */new Map();
  var _treeValue = _slicedToArray(treeValue, 1),
    val = _treeValue[0];
  if (!isEmptyValues(val)) {
    expandedMap.set(val, true);
    var node = treeStore.getNode(val);
    if (!node) {
      treeStore.refreshNodes();
      return [];
    }
    node.getParents().forEach(function (tn) {
      expandedMap.set(tn.value, true);
    });
  }
  return Array.from(expandedMap.keys());
};
var treeStoreExpendEffect = function treeStoreExpendEffect(treeStore, value, expend) {
  var treeValue = getTreeValue(value);
  if (!treeStore) return;
  if (isArray(treeValue) && expend.length === 0) {
    var expandedArr = calculateExpand(treeStore, treeValue);
    if (expandedArr.length > 0) {
      treeStore.replaceExpanded(expandedArr);
    }
  }
  if (treeStore.getExpanded() && expend.length) {
    treeStore.replaceExpanded(expend);
  }
  treeStore.refreshNodes();
};

export { calculateExpand, closeIconClickEffect, expandClickEffect, handleRemoveTagEffect, treeNodesEffect, treeStoreExpendEffect, valueChangeEffect };
//# sourceMappingURL=effect.mjs.map
