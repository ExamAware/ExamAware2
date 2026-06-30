/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('../../_chunks/dep-87589faa.js');
var isObject = require('../../_chunks/dep-0813861e.js');
var isNumber = require('../../_chunks/dep-990979bb.js');
var isEmpty = require('../../_chunks/dep-06a7e589.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-929933ce.js');

function getSingleContent(cascaderContext) {
  var value = cascaderContext.value,
    multiple = cascaderContext.multiple,
    treeStore = cascaderContext.treeStore,
    showAllLevels = cascaderContext.showAllLevels;
  if (multiple || value !== 0 && !value) return "";
  if (isArray.isArray(value)) return "";
  var node = treeStore && treeStore.getNodes(value);
  if (!(node && node.length)) {
    return value;
  }
  var path = node && node[0].getPath();
  if (path && path.length) {
    return showAllLevels ? path.map(function (node2) {
      return node2.label;
    }).join(" / ") : path.at(-1).label;
  }
  return value;
}
function getMultipleContent(cascaderContext) {
  var value = cascaderContext.value,
    multiple = cascaderContext.multiple,
    treeStore = cascaderContext.treeStore,
    showAllLevels = cascaderContext.showAllLevels;
  if (!multiple) return [];
  if (multiple && !isArray.isArray(value)) return [];
  var node = treeStore && treeStore.getNodes(value);
  if (!node) return [];
  return value.map(function (item) {
    var _node2$;
    var node2 = treeStore.getNodes(item);
    return showAllLevels ? getFullPathLabel(node2[0]) : (_node2$ = node2[0]) === null || _node2$ === void 0 ? void 0 : _node2$.label;
  }).filter(function (item) {
    return !!item;
  });
}
function getPanels(treeNodes) {
  var panels = [];
  treeNodes.forEach(function (node) {
    if (panels[node.level]) {
      panels[node.level].push(node);
    } else {
      panels[node.level] = [node];
    }
  });
  return panels;
}
function getFullPathLabel(node) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  return node === null || node === void 0 ? void 0 : node.getPath().map(function (node2) {
    return node2.label;
  }).join(separator);
}
var getTreeValue = function getTreeValue(value) {
  var treeValue = [];
  if (isArray.isArray(value)) {
    if (value.length > 0 && isObject.isObject(value[0])) {
      treeValue = value.map(function (val) {
        return val.value;
      });
    } else if (value.length) {
      treeValue = value;
    }
  } else if (!isEmptyValues(value)) {
    if (isObject.isObject(value)) {
      treeValue = [value.value];
    } else {
      treeValue = [value];
    }
  }
  return treeValue;
};
var getCascaderValue = function getCascaderValue(value, valueType, multiple) {
  if (valueType === "single") {
    return value;
  }
  var val = value;
  if (multiple) {
    return val.map(function (item) {
      return item.at(-1);
    });
  }
  return val.at(-1);
};
function isEmptyValues(value) {
  if (isNumber.isNumber(value) && !isNaN(value)) return false;
  return isEmpty.isEmpty(value);
}
function isValueInvalid(value, cascaderContext) {
  var multiple = cascaderContext.multiple,
    showAllLevels = cascaderContext.showAllLevels,
    valueType = cascaderContext.valueType;
  return multiple && !isArray.isArray(value) || !multiple && isArray.isArray(value) && valueType === "single" && !showAllLevels;
}

exports.getCascaderValue = getCascaderValue;
exports.getFullPathLabel = getFullPathLabel;
exports.getMultipleContent = getMultipleContent;
exports.getPanels = getPanels;
exports.getSingleContent = getSingleContent;
exports.getTreeValue = getTreeValue;
exports.isEmptyValues = isEmptyValues;
exports.isValueInvalid = isValueInvalid;
//# sourceMappingURL=helper.js.map
