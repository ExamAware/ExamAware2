/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var cascader_utils_helper = require('./helper.js');
var isNumber = require('../../_chunks/dep-990979bb.js');
var cloneDeep = require('../../_chunks/dep-8adeee89.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var isArray = require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-06a7e589.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

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
    var _checked = _slicedToArray__default["default"](checked, 1),
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
  if (isNumber.isNumber(max) && max < 0) {
    console.warn("TDesign Warn:", "max should > 0");
  }
  if (checked.length > max && isNumber.isNumber(max) && max > 0) {
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
    var newValue = cloneDeep.cloneDeep(value);
    var res = newValue.splice(index, 1);
    var node = treeStore.getNodes(res[0])[0];
    var checked = node.setChecked(!node.isChecked());
    var resValue = valueType === "single" ? checked : checked.map(function (val) {
      return treeStore.getNode(val).getPath().map(function (item) {
        return item.value;
      });
    });
    setValue(resValue, "uncheck", node.getModel());
    if (isFunction.isFunction(onRemove)) {
      onRemove({
        value: checked,
        node: node
      });
    }
  } else {
    if (isFunction.isFunction(onRemove)) {
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
    if (isFunction.isFunction(filter)) {
      return filter("".concat(inputVal), node);
    }
    var fullPathLabel = cascader_utils_helper.getFullPathLabel(node, "");
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
  var _treeValue = _slicedToArray__default["default"](treeValue, 1),
    val = _treeValue[0];
  if (!cascader_utils_helper.isEmptyValues(val)) {
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
  var treeValue = cascader_utils_helper.getTreeValue(value);
  if (!treeStore) return;
  if (isArray.isArray(treeValue) && expend.length === 0) {
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

exports.calculateExpand = calculateExpand;
exports.closeIconClickEffect = closeIconClickEffect;
exports.expandClickEffect = expandClickEffect;
exports.handleRemoveTagEffect = handleRemoveTagEffect;
exports.treeNodesEffect = treeNodesEffect;
exports.treeStoreExpendEffect = treeStoreExpendEffect;
exports.valueChangeEffect = valueChangeEffect;
//# sourceMappingURL=effect.js.map
