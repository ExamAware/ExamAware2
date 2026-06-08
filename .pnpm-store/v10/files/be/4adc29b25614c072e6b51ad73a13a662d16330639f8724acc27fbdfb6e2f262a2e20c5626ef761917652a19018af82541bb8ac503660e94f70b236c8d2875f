/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');
var isString = require('./dep-a55e8a08.js');
var isFunction = require('./dep-48f60c78.js');

var ItemsType = /* @__PURE__ */function (ItemsType2) {
  ItemsType2["props"] = "props";
  ItemsType2["slots"] = "slots";
  return ItemsType2;
}(ItemsType || {});

function renderCustomNode(node) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (isString.isString(node)) {
    return node;
  }
  if (isFunction.isFunction(node)) {
    return node(Vue.h, params);
  }
  if (isFunction.isFunction(node === null || node === void 0 ? void 0 : node.render)) {
    return node.render(Vue.h, params);
  }
  return node;
}
function renderVNodeTNode(node, name1, name2) {
  var _node$props;
  var prop = (_node$props = node.props) === null || _node$props === void 0 ? void 0 : _node$props[name1];
  if (prop) return prop;
  var children = node.children;
  var slot = (children === null || children === void 0 ? void 0 : children[name1]) || (children === null || children === void 0 ? void 0 : children[name2]);
  if (slot) return slot === null || slot === void 0 ? void 0 : slot();
  return null;
}
function itemTypeIsProps(itemsType, item) {
  return itemsType === ItemsType.props;
}

exports.ItemsType = ItemsType;
exports.itemTypeIsProps = itemTypeIsProps;
exports.renderCustomNode = renderCustomNode;
exports.renderVNodeTNode = renderVNodeTNode;
//# sourceMappingURL=dep-8dd5720a.js.map
