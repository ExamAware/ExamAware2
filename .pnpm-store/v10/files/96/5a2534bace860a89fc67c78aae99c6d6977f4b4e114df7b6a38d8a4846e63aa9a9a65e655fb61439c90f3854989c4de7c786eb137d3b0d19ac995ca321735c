/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _typeof from '@babel/runtime/helpers/typeof';
import { getCurrentInstance, Comment, Fragment, isVNode, Teleport } from 'vue';
import { isArray } from 'lodash-es';
import './dep-fe23be6e.js';
import { g as getChildren } from './dep-fb805f69.js';

function useChildComponentSlots() {
  var instance = getCurrentInstance();
  return function (childComponentName, slots) {
    var _slots, _slots$default;
    if (!slots) {
      slots = instance.slots;
    }
    var content = ((_slots = slots) === null || _slots === void 0 || (_slots$default = _slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(_slots)) || [];
    return getChildren(content).filter(function (item) {
      var _item$type$name;
      return (_item$type$name = item.type.name) === null || _item$type$name === void 0 ? void 0 : _item$type$name.endsWith(childComponentName);
    });
  };
}
function useChildSlots() {
  var instance = getCurrentInstance();
  return function () {
    var _slots$default2;
    var slots = instance.slots;
    var content = (slots === null || slots === void 0 || (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) || [];
    return content.filter(function (item) {
      if (_typeof(item.type) === "symbol" && !item.children) {
        return false;
      }
      return item.type !== Comment;
    }).map(function (item) {
      if (item.children && isArray(item.children) && item.type === Fragment) return item.children;
      return item;
    }).flat();
  };
}
function useFlatChildrenSlots() {
  function getFlatChildren(children) {
    var result = [];
    children.forEach(function (child) {
      if (isVNode(child) && child.type === Fragment && Array.isArray(child.children)) {
        result.push.apply(result, _toConsumableArray(getFlatChildren(child.children)));
      } else if (isVNode(child) && [Teleport, Comment].some(function (vNode) {
        return vNode === child.type;
      })) ; else {
        result.push(child);
      }
    });
    return result;
  }
  return getFlatChildren;
}

export { useFlatChildrenSlots as a, useChildComponentSlots as b, useChildSlots as u };
//# sourceMappingURL=dep-e3ce8c8f.js.map
