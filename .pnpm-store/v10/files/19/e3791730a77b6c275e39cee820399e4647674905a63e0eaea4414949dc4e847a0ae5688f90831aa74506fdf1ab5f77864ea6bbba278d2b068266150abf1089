/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { camelCase } from 'lodash-es';
import 'vue';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function emitEvent(props, context, evtName) {
  var apiName = camelCase("on-".concat(evtName));
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

export { emitEvent, getLineModel, getMark, getNode, getParentMarks, getParentsToRoot, getTNode, isTreeNodeValue, pathMatchClass };
//# sourceMappingURL=index.js.map
