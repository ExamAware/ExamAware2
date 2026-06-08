/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isArray, isUndefined, cloneDeep } from 'lodash-es';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TRANSFER_NAME = "TTransfer";
var SOURCE = "source";
var TARGET = "target";
function findTopNode(vm) {
  if (vm.$options.name === "t-transfer") {
    return vm;
  }
  if (vm.$parent) {
    return findTopNode(vm.$parent);
  }
  return vm;
}
function getTransferListOption(prop) {
  if (isArray(prop)) {
    return {
      source: prop[0],
      target: prop[1]
    };
  }
  return {
    source: prop,
    target: prop
  };
}
function getDataValues(data, filterValues) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$isTreeMode = _ref.isTreeMode,
    isTreeMode = _ref$isTreeMode === void 0 ? false : _ref$isTreeMode,
    _ref$include = _ref.include,
    include = _ref$include === void 0 ? true : _ref$include,
    _ref$remainValue = _ref.remainValue,
    remainValue = _ref$remainValue === void 0 ? [] : _ref$remainValue;
  if (isTreeMode) {
    var result = [];
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var isInclude = filterValues.includes(item.value) && !item.disabled;
        if (!include && isInclude) {
          continue;
        }
        if (item.children && item.children.length > 0) {
          var childResult = getDataValues(item.children, filterValues, {
            isTreeMode: isTreeMode,
            include: include
          });
          result = result.concat(childResult);
        } else if (include && isInclude || !include && !isInclude) {
          result.push(item.value);
        }
      }
    }
    return result;
  }
  return data.filter(function (item) {
    if (!item) return false;
    var isInclude = filterValues.includes(item.value);
    return (include && isInclude || !include && !isInclude) && (!item.disabled || remainValue.includes(item.value));
  }).map(function (item) {
    return item.value;
  });
}
function getTransferData(data, keys) {
  var isTreeMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var list = data.map(function (transferDataItem, index) {
    var _transferDataItem$dis;
    var labelKey = (keys === null || keys === void 0 ? void 0 : keys.label) || "label";
    var valueKey = (keys === null || keys === void 0 ? void 0 : keys.value) || "value";
    var disabledKey = (keys === null || keys === void 0 ? void 0 : keys.disabled) || "disabled";
    if (isUndefined(transferDataItem[labelKey])) {
      throw new Error("".concat(labelKey, " is not in DataOption ").concat(JSON.stringify(transferDataItem)));
    }
    if (isUndefined(transferDataItem[valueKey])) {
      throw new Error("".concat(valueKey, " is not in DataOption ").concat(JSON.stringify(transferDataItem)));
    }
    var result = {
      label: transferDataItem[labelKey],
      value: transferDataItem[valueKey],
      key: "key__value_".concat(transferDataItem[valueKey], "_index_").concat(index),
      disabled: (_transferDataItem$dis = transferDataItem[disabledKey]) !== null && _transferDataItem$dis !== void 0 ? _transferDataItem$dis : false,
      data: transferDataItem
    };
    if (isTreeMode && transferDataItem.children) {
      result.children = getTransferData(transferDataItem.children, keys, true);
    }
    return result;
  });
  return list;
}
function isAllNodeValid(data, filterValues, needMatch) {
  if (filterValues.includes(data.value)) {
    return needMatch;
  }
  return false;
}
function isTreeNodeValid(data, filterValues, needMatch) {
  var _data$children;
  if (!data) return !needMatch;
  if (filterValues.includes(data.value)) {
    return needMatch;
  }
  if ((_data$children = data.children) !== null && _data$children !== void 0 && _data$children.length) {
    return data.children.some(function (item) {
      return isTreeNodeValid(item, filterValues, needMatch);
    });
  }
  return !needMatch;
}
function cloneTreeWithFilter(sourceTree, targetTree, filterValues, needMatch) {
  sourceTree.forEach(function (item) {
    var newNode;
    if (isAllNodeValid(item, filterValues, needMatch)) {
      newNode = cloneDeep(item);
      targetTree.push(newNode);
    } else if (isTreeNodeValid(item, filterValues, needMatch)) {
      newNode = _objectSpread({}, item);
      delete newNode.children;
      targetTree.push(newNode);
      if (item.children) {
        newNode.children = [];
        cloneTreeWithFilter(item.children, newNode.children, filterValues, needMatch);
        if (newNode.children.length === 0) {
          delete newNode.children;
        }
      }
    }
  });
}
function filterTransferData(data, filterValues) {
  var needMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isTreeMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (!isTreeMode) {
    if (needMatch) {
      return filterValues === null || filterValues === void 0 ? void 0 : filterValues.map(function (value) {
        return data.find(function (item) {
          return item.value === value;
        });
      }).filter(function (item) {
        return !!item;
      });
    }
    return data.filter(function (item) {
      var isMatch = filterValues.includes(item.value);
      return !isMatch;
    });
  }
  var result = [];
  cloneTreeWithFilter(data, result, filterValues, needMatch);
  return result;
}
function getLefCount(nodes) {
  var total = 0;
  nodes.forEach(function (child) {
    if (child.children && child.children.length > 0) {
      total += getLefCount(child.children);
    } else {
      total += 1;
    }
  });
  return total;
}

export { SOURCE, TARGET, TRANSFER_NAME, cloneTreeWithFilter, filterTransferData, findTopNode, getDataValues, getLefCount, getTransferData, getTransferListOption, isTreeNodeValid };
//# sourceMappingURL=index.js.map
