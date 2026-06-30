/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { camelCase } from 'lodash-es';
import { isVueNext } from './adapt.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'vue';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import '../../_chunks/dep-07809d3f.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../_chunks/dep-6d2705e1.mjs';

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
  if (!isVueNext) {
    context.emit.apply(context, [evtName].concat(args));
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
//# sourceMappingURL=index.mjs.map
