/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var isObject = require('./dep-0813861e.js');
var isString = require('./dep-a55e8a08.js');
var isArray = require('./dep-87589faa.js');

function getDefaultNode(options) {
  var defaultNode;
  if (isObject.isObject(options) && "defaultNode" in options) {
    defaultNode = options.defaultNode;
  } else if (Vue.isVNode(options) || isString.isString(options)) {
    defaultNode = options;
  }
  return defaultNode;
}
function getChildren(content) {
  var childList = [];
  var _innerGetChildren = function innerGetChildren(content2) {
    if (!isArray.isArray(content2)) return;
    content2.forEach(function (item) {
      if (item.children && isArray.isArray(item.children)) {
        if (item.type !== Vue.Fragment) return;
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
  return isObject.isObject(options) && "params" in options ? options.params : {};
}
function getSlotFirst(options) {
  return isObject.isObject(options) && "slotFirst" in options ? options.slotFirst : false;
}

exports.getChildren = getChildren;
exports.getDefaultNode = getDefaultNode;
exports.getParams = getParams;
exports.getSlotFirst = getSlotFirst;
//# sourceMappingURL=dep-4fa46641.js.map
