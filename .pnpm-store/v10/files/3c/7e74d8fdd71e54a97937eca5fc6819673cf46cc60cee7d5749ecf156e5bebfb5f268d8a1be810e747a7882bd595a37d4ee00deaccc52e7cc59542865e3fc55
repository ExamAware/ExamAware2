/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getCurrentInstance, h } from 'vue';
import { camelCase, kebabCase, isFunction } from 'lodash-es';
import { l as isCommentVNode } from './dep-16bcfabc.js';
import { a as getParams, b as getDefaultNode, c as getSlotFirst } from './dep-fb805f69.js';

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var getPropertyValFromObj = function getPropertyValFromObj(val, key) {
  return hasOwn(val, key) ? val[key] : void 0;
};

function handleSlots(instance, name, params) {
  var _instance$slots$camel, _instance$slots, _instance$slots$kebab, _instance$slots2;
  var node = (_instance$slots$camel = (_instance$slots = instance.slots)[camelCase(name)]) === null || _instance$slots$camel === void 0 ? void 0 : _instance$slots$camel.call(_instance$slots, params);
  if (node && node.filter(function (t) {
    return !isCommentVNode(t);
  }).length) return node;
  node = (_instance$slots$kebab = (_instance$slots2 = instance.slots)[kebabCase(name)]) === null || _instance$slots$kebab === void 0 ? void 0 : _instance$slots$kebab.call(_instance$slots2, params);
  if (node && node.filter(function (t) {
    return !isCommentVNode(t);
  }).length) return node;
  return null;
}
function isEmptyNode(node) {
  if ([void 0, null, ""].includes(node)) return true;
  var innerNodes = node instanceof Array ? node : [node];
  var r = innerNodes.filter(function (node2) {
    var _node2$type;
    return (node2 === null || node2 === void 0 || (_node2$type = node2.type) === null || _node2$type === void 0 ? void 0 : _node2$type.toString()) !== "Symbol(Comment)";
  });
  return !r.length;
}
function isPropExplicitlySet(instance, propName) {
  var vProps = (instance === null || instance === void 0 ? void 0 : instance.vnode.props) || {};
  return hasOwn(vProps, camelCase(propName)) || hasOwn(vProps, kebabCase(propName));
}
var useTNodeJSX = function useTNodeJSX() {
  var instance = getCurrentInstance();
  return function (name, options) {
    var renderParams = getParams(options);
    var defaultNode = getDefaultNode(options);
    var isSlotFirst = getSlotFirst(options);
    var renderSlot = instance.slots[camelCase(name)] || instance.slots[kebabCase(name)];
    if (isSlotFirst && renderSlot) {
      return handleSlots(instance, name, renderParams);
    } else {
      if (isPropExplicitlySet(instance, name)) {
        var _instance$type$props$;
        var propsNode2 = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
        var types = (_instance$type$props$ = instance.type.props[name]) === null || _instance$type$props$ === void 0 ? void 0 : _instance$type$props$.type;
        if ((types === null || types === void 0 ? void 0 : types.length) > 1) {
          if (types.includes(Boolean) && types.includes(Function)) {
            if (propsNode2 === "" && !renderSlot) return defaultNode;
          }
        }
        if (propsNode2 === false || propsNode2 === null) return;
        if (propsNode2 === true) {
          return handleSlots(instance, name, renderParams) || defaultNode;
        }
        if (isFunction(propsNode2)) return propsNode2(h, renderParams);
        var isPropsEmpty = [void 0, ""].includes(propsNode2);
        if (isPropsEmpty && renderSlot) {
          return handleSlots(instance, name, renderParams);
        }
        return propsNode2;
      }
      if (renderSlot) {
        return handleSlots(instance, name, renderParams);
      }
      var propsNode = instance.props[camelCase(name)] || instance.props[kebabCase(name)];
      if (propsNode === false || propsNode === null) return;
      if (propsNode === true) {
        return defaultNode;
      }
      if (isFunction(propsNode)) return propsNode(h, renderParams);
      return propsNode;
    }
  };
};
var useTNodeDefault = function useTNodeDefault() {
  var renderTNodeJSX = useTNodeJSX();
  return function (name, options) {
    var defaultNode = getDefaultNode(options);
    return renderTNodeJSX(name, options) || defaultNode;
  };
};
var useContent = function useContent() {
  var renderTNodeJSX = useTNodeJSX();
  return function (name1, name2, options) {
    var params = getParams(options);
    var defaultNode = getDefaultNode(options);
    var toParams = params ? {
      params: params
    } : void 0;
    var node1 = renderTNodeJSX(name1, toParams);
    var node2 = renderTNodeJSX(name2, toParams);
    var res = isEmptyNode(node1) ? node2 : node1;
    return isEmptyNode(res) ? defaultNode : res;
  };
};
var filterCommentNode = function filterCommentNode(nodes) {
  return nodes.filter(function (node) {
    return !isCommentVNode(node);
  });
};

export { useContent as a, useTNodeDefault as b, filterCommentNode as f, getPropertyValFromObj as g, useTNodeJSX as u };
//# sourceMappingURL=dep-2accc95a.js.map
