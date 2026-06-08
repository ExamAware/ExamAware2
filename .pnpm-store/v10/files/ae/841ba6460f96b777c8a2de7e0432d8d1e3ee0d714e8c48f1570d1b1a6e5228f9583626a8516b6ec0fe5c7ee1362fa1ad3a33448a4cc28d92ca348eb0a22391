/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _typeof = require('@babel/runtime/helpers/typeof');
var Vue = require('vue');
require('./dep-953a77eb.js');
var renderTnode = require('./dep-4fa46641.js');
var isArray = require('./dep-87589faa.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function useChildComponentSlots() {
  var instance = Vue.getCurrentInstance();
  return function (childComponentName, slots) {
    var _slots, _slots$default;
    if (!slots) {
      slots = instance.slots;
    }
    var content = ((_slots = slots) === null || _slots === void 0 || (_slots$default = _slots["default"]) === null || _slots$default === void 0 ? void 0 : _slots$default.call(_slots)) || [];
    return renderTnode.getChildren(content).filter(function (item) {
      var _item$type$name;
      return (_item$type$name = item.type.name) === null || _item$type$name === void 0 ? void 0 : _item$type$name.endsWith(childComponentName);
    });
  };
}
function useChildSlots() {
  var instance = Vue.getCurrentInstance();
  return function () {
    var _slots$default2;
    var slots = instance.slots;
    var content = (slots === null || slots === void 0 || (_slots$default2 = slots["default"]) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots)) || [];
    return content.filter(function (item) {
      if (_typeof__default["default"](item.type) === "symbol" && !item.children) {
        return false;
      }
      return item.type !== Vue.Comment;
    }).map(function (item) {
      if (item.children && isArray.isArray(item.children) && item.type === Vue.Fragment) return item.children;
      return item;
    }).flat();
  };
}
function useFlatChildrenSlots() {
  function getFlatChildren(children) {
    var result = [];
    children.forEach(function (child) {
      if (Vue.isVNode(child) && child.type === Vue.Fragment && Array.isArray(child.children)) {
        result.push.apply(result, _toConsumableArray__default["default"](getFlatChildren(child.children)));
      } else if (Vue.isVNode(child) && [Vue.Teleport, Vue.Comment].some(function (vNode) {
        return vNode === child.type;
      })) ; else {
        result.push(child);
      }
    });
    return result;
  }
  return getFlatChildren;
}

exports.useChildComponentSlots = useChildComponentSlots;
exports.useChildSlots = useChildSlots;
exports.useFlatChildrenSlots = useFlatChildrenSlots;
//# sourceMappingURL=dep-3565d523.js.map
