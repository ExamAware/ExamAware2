/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, Fragment } from 'vue';
import { isObject, isString, isArray } from 'lodash-es';

function getDefaultNode(options) {
  var defaultNode;
  if (isObject(options) && "defaultNode" in options) {
    defaultNode = options.defaultNode;
  } else if (isVNode(options) || isString(options)) {
    defaultNode = options;
  }
  return defaultNode;
}
function getChildren(content) {
  var childList = [];
  var _innerGetChildren = function innerGetChildren(content2) {
    if (!isArray(content2)) return;
    content2.forEach(function (item) {
      if (item.children && isArray(item.children)) {
        if (item.type !== Fragment) return;
        _innerGetChildren(item.children);
      } else {
        childList.push(item);
      }
    });
    return childList;
  };
  return _innerGetChildren(content);
}
function getParams(options) {
  return isObject(options) && "params" in options ? options.params : {};
}
function getSlotFirst(options) {
  return isObject(options) && "slotFirst" in options ? options.slotFirst : false;
}

export { getParams as a, getDefaultNode as b, getSlotFirst as c, getChildren as g };
//# sourceMappingURL=dep-fb805f69.js.map
