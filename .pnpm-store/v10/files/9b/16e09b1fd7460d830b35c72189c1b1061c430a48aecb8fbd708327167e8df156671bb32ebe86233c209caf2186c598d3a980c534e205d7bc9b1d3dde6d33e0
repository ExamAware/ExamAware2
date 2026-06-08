/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _getTreePaths = function getTreePaths(node, val, ans) {
  if (!node) return;
  for (var i = 0; i < node.children.length; ++i) {
    var child = node.children[i];
    if (child.value === val) return [].concat(_toConsumableArray__default["default"](ans), [node.value]);
    var target = _getTreePaths(child, val, [].concat(_toConsumableArray__default["default"](ans), [node.value]));
    if (target) return target;
  }
};
var _getTreeSameParentNodes = function getTreeSameParentNodes(node, val) {
  if (!node) return [];
  for (var i = 0; i < node.children.length; ++i) {
    var child = node.children[i];
    if (child.value === val) return node.children;
    var target = _getTreeSameParentNodes(child, val);
    if (target) return target;
  }
};
var _DFS = function DFS(root, val) {
  if (root.value === val) return root;
  if (root.children.length > 0) {
    for (var i = 0, len = root.children.length; i < len; i++) {
      var res = _DFS(root.children[i], val);
      if (res) return res;
    }
  }
};
var VMenu = /*#__PURE__*/function () {
  function VMenu(options) {
    _classCallCheck__default["default"](this, VMenu);
    _defineProperty__default["default"](this, "data", null);
    _defineProperty__default["default"](this, "cache", /* @__PURE__ */new Set());
    _defineProperty__default["default"](this, "isMutex", Vue.ref(false));
    _defineProperty__default["default"](this, "expandValues", null);
    var root = {
      value: null,
      parent: null,
      children: []
    };
    this.data = root;
    this.isMutex = options === null || options === void 0 ? void 0 : options.isMutex;
    this.expandValues = new Set(options === null || options === void 0 ? void 0 : options.expandValues);
  }
  return _createClass__default["default"](VMenu, [{
    key: "add",
    value: function add(item) {
      var value = item.value,
        parent = item.parent,
        vnode = item.vnode;
      var node = _objectSpread({
        value: value,
        parent: parent,
        children: [],
        vnode: vnode
      }, item);
      this.cache.forEach(function (data, v2, set) {
        if (item.value === data.parent) {
          node.children.push(data);
          set["delete"](data);
        }
      });
      if (item.parent == null) {
        this.data.children.push(node);
        node.parent = this.data;
      } else if (this.data.children.length > 0) {
        var pNode = _DFS(this.data, parent);
        if (pNode && !pNode.children.some(function (child) {
          return child.value === node.value;
        })) {
          pNode.children.push(node);
        } else {
          this.cache.add(node);
        }
      } else {
        this.cache.add(node);
      }
    }
  }, {
    key: "select",
    value: function select(val) {
      var activeValues = _getTreePaths(this.data, val, []) || [];
      activeValues.push(val);
      return activeValues.filter(function (val2) {
        return val2 != null;
      });
    }
  }, {
    key: "expand",
    value: function expand(val) {
      var _this = this;
      if (this.expandValues.has(val)) {
        this.expandValues["delete"](val);
        return _toConsumableArray__default["default"](this.expandValues);
      }
      this.expandValues.add(val);
      if (!this.isMutex.value) {
        return _toConsumableArray__default["default"](this.expandValues);
      }
      var sameParentNodes = _getTreeSameParentNodes(this.data, val) || [];
      var sameLevelSubmenuValues = new Set(sameParentNodes.filter(function (node) {
        var _node$children;
        return ((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) > 0 && node.value !== val;
      }).map(function (child) {
        return child.value;
      }));
      this.expandValues.forEach(function (val2) {
        var isHit = sameLevelSubmenuValues.has(val2);
        if (isHit) {
          _this.expandValues["delete"](val2);
        }
      });
      return _toConsumableArray__default["default"](this.expandValues);
    }
  }, {
    key: "getChild",
    value: function getChild(value) {
      var target = _DFS(this.data, value);
      return target ? target.children : [];
    }
  }]);
}();

exports.VMenu = VMenu;
//# sourceMappingURL=v-menu.js.map
