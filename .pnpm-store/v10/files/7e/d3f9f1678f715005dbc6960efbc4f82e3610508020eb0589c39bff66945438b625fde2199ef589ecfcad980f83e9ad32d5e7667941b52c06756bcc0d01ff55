/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
var camelCase = require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function emitEvent(props, context, evtName) {
  var apiName = camelCase.camelCase("on-".concat(evtName));
  evtName.replace(/^on/, "").toLowerCase();
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }
  if (typeof props[apiName] === "function") {
    props[apiName].apply(props, args);
  }
}
function getParentsToRoot(element, root) {
  var list = [];
  var el = element;
  while (el && el.parentNode) {
    list.push(el);
    if (el === root) {
      break;
    }
    el = el.parentNode;
  }
  return list;
}
function getParentMarks(name, element, root) {
  var list = getParentsToRoot(element, root);
  return list.map(function (el) {
    var mark = {
      name: name,
      value: (el === null || el === void 0 ? void 0 : el.getAttribute(name)) || "",
      el: el
    };
    return mark;
  }).filter(function (mark) {
    return mark.value;
  });
}
function getMark(name, element, root) {
  var list = getParentMarks(name, element, root);
  var info = list.pop() || null;
  return info;
}
function pathMatchClass(name, element, root) {
  var list = getParentsToRoot(element, root);
  var rs = list.some(function (el) {
    return el.classList.contains(name);
  });
  return rs;
}
function getTNode(prop, options) {
  var tnode = null;
  var item = null;
  var conf = _objectSpread({}, options);
  if (typeof prop === "function") {
    var _conf$node;
    item = prop(conf.createElement, (_conf$node = conf.node) === null || _conf$node === void 0 ? void 0 : _conf$node.getModel());
  } else if (typeof prop === "string") {
    item = prop;
  }
  if (typeof item === "string") {
    tnode = item;
  } else if (item) {
    tnode = item;
  }
  return tnode;
}
function getLineModel(nodes, node, index) {
  var lineModel = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };
  var nodeChildren = [];
  if (Array.isArray(node.children)) {
    nodeChildren = node.children;
  }
  var childNode = nodes[index - 1] || null;
  var nodeItemIndex = childNode ? childNode.getIndex() : 0;
  if (index === 0) {
    lineModel.left = !!node.parent;
    lineModel.bottom = node.children && node.expanded;
    lineModel.right = node.parent && !node.children;
  } else if (index === 1) {
    lineModel.top = true;
    lineModel.right = true;
    lineModel.bottom = nodeItemIndex < nodeChildren.length - 1;
  } else if (nodeItemIndex < nodeChildren.length - 1) {
    lineModel.top = true;
    lineModel.bottom = true;
  }
  return lineModel;
}
function isTreeNodeValue(item) {
  return typeof item === "string" || typeof item === "number";
}
function getNode(store, item) {
  var node = null;
  var val = null;
  if (typeof item === "string" || typeof item === "number") {
    val = item;
  } else if (item && isTreeNodeValue(item.value)) {
    val = item.value;
  }
  node = store.getNode(val);
  return node;
}

exports.emitEvent = emitEvent;
exports.getLineModel = getLineModel;
exports.getMark = getMark;
exports.getNode = getNode;
exports.getParentMarks = getParentMarks;
exports.getParentsToRoot = getParentsToRoot;
exports.getTNode = getTNode;
exports.isTreeNodeValue = isTreeNodeValue;
exports.pathMatchClass = pathMatchClass;
//# sourceMappingURL=index.js.map
