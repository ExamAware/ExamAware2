/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import { isBoolean, omit, get, isUndefined, isNumber, isFunction, isNull, uniqueId, isNil } from 'lodash-es';
import { l as log } from './dep-8295e674.js';

var nodeKey = "__tdesign_tree-node__";
var TreeNodeModel = /*#__PURE__*/function () {
  function TreeNodeModel(node) {
    _classCallCheck(this, TreeNodeModel);
    _defineProperty(this, nodeKey, void 0);
    this[nodeKey] = node;
  }
  return _createClass(TreeNodeModel, [{
    key: "value",
    get: function get() {
      var node = this[nodeKey];
      return node.value;
    }
  }, {
    key: "label",
    get: function get() {
      var node = this[nodeKey];
      return node.label;
    }
  }, {
    key: "data",
    get: function get() {
      var node = this[nodeKey];
      return node.data;
    }
  }, {
    key: "actived",
    get: function get() {
      var node = this[nodeKey];
      return node.actived;
    }
  }, {
    key: "expanded",
    get: function get() {
      var node = this[nodeKey];
      return node.expanded;
    }
  }, {
    key: "checked",
    get: function get() {
      var node = this[nodeKey];
      return node.checked;
    }
  }, {
    key: "indeterminate",
    get: function get() {
      var node = this[nodeKey];
      return node.indeterminate;
    }
  }, {
    key: "loading",
    get: function get() {
      var node = this[nodeKey];
      return node.loading;
    }
  }, {
    key: "disabled",
    get: function get() {
      var node = this[nodeKey];
      return node.isDisabled();
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      var node = this[nodeKey];
      return node.getLevel();
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      var node = this[nodeKey];
      return node.getIndex();
    }
  }, {
    key: "isFirst",
    value: function isFirst() {
      var node = this[nodeKey];
      return node.isFirst();
    }
  }, {
    key: "isLast",
    value: function isLast() {
      var node = this[nodeKey];
      return node.isLast();
    }
  }, {
    key: "isLeaf",
    value: function isLeaf() {
      var node = this[nodeKey];
      return node.isLeaf();
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newData) {
      var node = this[nodeKey];
      return node.insertBefore(newData);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(newData) {
      var node = this[nodeKey];
      return node.insertAfter(newData);
    }
  }, {
    key: "appendData",
    value: function appendData(data) {
      var node = this[nodeKey];
      return node.append(data);
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var node = this[nodeKey];
      var nodes = node.getPath();
      return nodes.map(function (item) {
        return item.getModel();
      });
    }
  }, {
    key: "getParent",
    value: function getParent() {
      var _node$parent;
      var node = this[nodeKey];
      return (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.getModel();
    }
  }, {
    key: "getParents",
    value: function getParents() {
      var node = this[nodeKey];
      var nodes = node.getParents();
      return nodes.map(function (item) {
        return item.getModel();
      });
    }
  }, {
    key: "getRoot",
    value: function getRoot() {
      var node = this[nodeKey];
      var root = node.getRoot();
      return root === null || root === void 0 ? void 0 : root.getModel();
    }
  }, {
    key: "getSiblings",
    value: function getSiblings() {
      var node = this[nodeKey];
      var nodes = node.getSiblings();
      return nodes.map(function (item) {
        return item.getModel();
      });
    }
  }, {
    key: "getChildren",
    value: function getChildren(deep) {
      var node = this[nodeKey];
      var childrenModel = false;
      var children = node.children;
      if (Array.isArray(children)) {
        if (children.length > 0) {
          if (deep) {
            var nodes = node.walk();
            nodes.shift();
            childrenModel = nodes.map(function (item) {
              return item.getModel();
            });
          } else {
            childrenModel = children.map(function (item) {
              return item.getModel();
            });
          }
        } else {
          childrenModel = false;
        }
      } else if (isBoolean(children)) {
        childrenModel = children;
      }
      return childrenModel;
    }
  }, {
    key: "remove",
    value: function remove(value) {
      var node = this[nodeKey];
      if (!value) {
        node.remove();
        return;
      }
      var tree = node.tree;
      var targetNode = tree.getNode(value);
      if (!targetNode) {
        log.warnOnce("Tree", "`".concat(value, "` is not exist"));
        return;
      }
      var parents = targetNode.getParents();
      var parentValues = parents.map(function (pnode) {
        return pnode.value;
      });
      if (parentValues.indexOf(node.value) < 0) {
        log.warnOnce("Tree", "`".concat(value, "` is not a childNode of current node"));
        return;
      }
      targetNode.remove();
    }
  }, {
    key: "setData",
    value: function setData(data) {
      var node = this[nodeKey];
      var syncAttrs = ["value", "label", "disabled"];
      var cleanData = omit(data, ["children"].concat(syncAttrs));
      var keys = node.tree.config.keys;
      syncAttrs.forEach(function (attr) {
        var dataAttrValue = get(data, (keys === null || keys === void 0 ? void 0 : keys[attr]) || attr);
        if (!isUndefined(dataAttrValue)) cleanData[attr] = dataAttrValue;
      });
      Object.assign(node.data, cleanData);
      Object.assign(node, cleanData);
      node.update();
    }
  }]);
}();
function createNodeModel(node) {
  var model = new TreeNodeModel(node);
  return model;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var hasOwnProperty = Object.prototype.hasOwnProperty;
var settableStatus = {
  expandMutex: null,
  activable: null,
  checkable: null,
  draggable: null,
  loading: false
};
var settableProps = Object.keys(settableStatus);
var syncableProps = [].concat(settableProps, ["actived", "expanded", "checked"]);
var privateKey = "__tdesign_id__";
var TreeNode = /*#__PURE__*/function () {
  function TreeNode(tree, data, parent) {
    var _this = this;
    _classCallCheck(this, TreeNode);
    _defineProperty(this, "tree", void 0);
    _defineProperty(this, privateKey, void 0);
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "label", void 0);
    _defineProperty(this, "data", void 0);
    _defineProperty(this, "parent", void 0);
    _defineProperty(this, "children", void 0);
    _defineProperty(this, "model", void 0);
    _defineProperty(this, "vmIsLeaf", void 0);
    _defineProperty(this, "vmIsFirst", void 0);
    _defineProperty(this, "vmIsLast", void 0);
    _defineProperty(this, "vmIsRest", void 0);
    _defineProperty(this, "vmIsLocked", void 0);
    _defineProperty(this, "expanded", void 0);
    _defineProperty(this, "expandMutex", void 0);
    _defineProperty(this, "actived", void 0);
    _defineProperty(this, "activable", void 0);
    _defineProperty(this, "checkable", void 0);
    _defineProperty(this, "vmCheckable", void 0);
    _defineProperty(this, "checked", void 0);
    _defineProperty(this, "indeterminate", void 0);
    _defineProperty(this, "disabled", void 0);
    _defineProperty(this, "disableManually", void 0);
    _defineProperty(this, "draggable", void 0);
    _defineProperty(this, "visible", void 0);
    _defineProperty(this, "level", void 0);
    _defineProperty(this, "loading", void 0);
    this.data = data;
    this.tree = tree;
    var config = tree.config || {};
    var prefix = config.prefix || "t";
    var keys = config.keys || {};
    var propChildren = keys.children || "children";
    var propLabel = keys.label || "label";
    var propValue = keys.value || "value";
    this.model = null;
    this.children = null;
    this.level = 0;
    this.vmCheckable = false;
    this.vmIsLeaf = false;
    this.vmIsFirst = false;
    this.vmIsLast = false;
    this.vmIsRest = false;
    this.vmIsLocked = false;
    this.visible = false;
    this.actived = false;
    this.checked = false;
    this.indeterminate = false;
    this.loading = false;
    this.expanded = config.expandAll;
    this.activable = null;
    this.checkable = null;
    this.expandMutex = null;
    this.draggable = null;
    this.disableManually = null;
    this[privateKey] = uniqueId(prefix);
    this.value = isNil(get(data, propValue)) ? this[privateKey] : get(data, propValue);
    var nodeMap = tree.nodeMap,
      privateMap = tree.privateMap;
    if (nodeMap.get(this.value)) {
      log.warn("Tree", "Dulplicate value: ".concat(this.value));
    }
    nodeMap.set(this.value, this);
    privateMap.set(this[privateKey], this);
    this.label = get(data, propLabel) || "";
    var children = data[propChildren];
    if (children === true) {
      this.children = children;
    }
    if (parent && parent instanceof TreeNode) {
      this.parent = parent;
    } else {
      this.parent = null;
    }
    syncableProps.forEach(function (prop) {
      if (typeof data[prop] !== "undefined") {
        _this[prop] = data[prop];
      }
    });
    this.initActived();
    this.initExpanded();
    if (Array.isArray(children)) {
      this.append(children);
    } else if (children === true && !config.lazy) {
      this.loadChildren();
    }
    if (this.isLeaf()) {
      this.expanded = false;
      this.tree.expandedMap["delete"](this.value);
    }
    this.initChecked();
    this.updateChecked();
    this.update();
    tree.reflow(this);
  }
  return _createClass(TreeNode, [{
    key: "initChecked",
    value: function initChecked() {
      var tree = this.tree,
        value = this.value,
        parent = this.parent;
      var checkedMap = tree.checkedMap;
      var checkStrictly = tree.config.checkStrictly;
      if (this.checked) {
        checkedMap.set(value, true);
      }
      if (!checkStrictly && parent !== null && parent !== void 0 && parent.checked) {
        checkedMap.set(value, true);
      }
    }
  }, {
    key: "initExpanded",
    value: function initExpanded() {
      var tree = this.tree;
      var expanded = this.expanded;
      var config = tree.config;
      if (isNumber(config.expandLevel) && this.getLevel() < config.expandLevel) {
        tree.expandedMap.set(this.value, true);
        expanded = true;
      }
      if (this.children === true && config.lazy) {
        expanded = false;
      }
      if (expanded) {
        tree.expandedMap.set(this.value, true);
      } else {
        tree.expandedMap["delete"](this.value);
      }
      this.expanded = expanded;
    }
  }, {
    key: "initActived",
    value: function initActived() {
      var tree = this.tree,
        actived = this.actived;
      if (actived && this.isActivable()) {
        tree.activedMap.set(this.value, true);
      }
    }
  }, {
    key: "append",
    value: function append(data) {
      var _this2 = this;
      var list = [];
      if (!Array.isArray(data)) {
        list.push(data);
      } else {
        list.push.apply(list, _toConsumableArray(data));
      }
      if (list.length <= 0) {
        return;
      }
      var wasLeaf = this.isLeaf();
      if (!Array.isArray(this.children)) {
        this.children = [];
      }
      var children = this.children,
        tree = this.tree;
      list.forEach(function (item) {
        var node = null;
        if (item instanceof TreeNode) {
          node = item;
          node.appendTo(_this2.tree, _this2);
        } else {
          node = new TreeNode(_this2.tree, item, _this2);
          children.push(node);
        }
      });
      if (wasLeaf && tree.config.expandAll && !this.isLeaf()) {
        tree.expandedMap.set(this.value, true);
        this.expanded = true;
      }
      tree.reflow(this);
      this.updateRelated();
    }
  }, {
    key: "appendTo",
    value: function appendTo(tree, parent, index) {
      var _this3 = this;
      var parentNode = parent;
      var targetIndex = -1;
      if (isNumber(index)) {
        targetIndex = index;
      }
      var targetParents = (parentNode === null || parentNode === void 0 ? void 0 : parentNode.getParents()) || [];
      var includeCurrent = targetParents.some(function (pnode) {
        return pnode === _this3;
      });
      if (includeCurrent) {
        throw new Error("\u65E0\u6CD5\u5C06\u7236\u8282\u70B9\u63D2\u5165\u5230\u5B50\u8282\u70B9");
      }
      if (parentNode === this) {
        throw new Error("\u65E0\u6CD5\u5C06\u8282\u70B9\u63D2\u5165\u5230\u672C\u8282\u70B9");
      }
      if (Array.isArray(parentNode === null || parentNode === void 0 ? void 0 : parentNode.children)) {
        var targetPosNode = parentNode === null || parentNode === void 0 ? void 0 : parentNode.children[targetIndex];
        if (targetPosNode && targetPosNode === this) {
          return;
        }
      }
      var siblings = null;
      if (parentNode instanceof TreeNode) {
        if (!Array.isArray(parentNode === null || parentNode === void 0 ? void 0 : parentNode.children)) {
          parentNode.children = [];
        }
        siblings = parent.children;
      } else {
        siblings = tree.children;
      }
      if (!Array.isArray(siblings)) {
        throw new Error("\u65E0\u6CD5\u63D2\u5165\u5230\u76EE\u6807\u4F4D\u7F6E\uFF0C\u53EF\u63D2\u5165\u7684\u8282\u70B9\u5217\u8868\u4E0D\u5B58\u5728");
      }
      var prevLength = siblings.length;
      var prevIndex = this.getIndex();
      this.remove();
      if (isNumber(index)) {
        var targetIndex2 = index;
        if (parentNode === this.parent) {
          var curLength = siblings.length;
          if (curLength < prevLength && prevIndex <= targetIndex2) {
            targetIndex2 -= 1;
          }
        }
        siblings.splice(targetIndex2, 0, this);
      } else {
        siblings.push(this);
      }
      this.parent = parentNode;
      var nodes = this.walk();
      nodes.forEach(function (item) {
        var node = item;
        node.tree = tree;
        tree.nodeMap.set(node.value, node);
        tree.privateMap.set(node[privateKey], node);
        if (node.expanded) {
          tree.expandedMap.set(node.value, true);
        }
      });
      var updateNodes = (parentNode === null || parentNode === void 0 ? void 0 : parentNode.walk()) || tree.children.map(function (item) {
        return item.walk();
      }).flat();
      updateNodes.forEach(function (node) {
        node.update();
        node.updateChecked();
      });
      tree.reflow();
    }
  }, {
    key: "insert",
    value: function insert(item, index) {
      var tree = this.tree,
        parent = this.parent;
      var siblings = this.getSiblings();
      var node = null;
      if (item instanceof TreeNode) {
        node = item;
        node.appendTo(tree, parent, index);
      } else if (item) {
        node = new TreeNode(tree, item, parent);
        if (isNumber(index)) {
          siblings.splice(index, 0, node);
        }
        siblings.forEach(function (sibling) {
          sibling.update();
        });
      }
      tree.reflow();
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newData) {
      var index = this.getIndex();
      this.insert(newData, index);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(newData) {
      var index = this.getIndex();
      this.insert(newData, index + 1);
    }
  }, {
    key: "remove",
    value: function remove() {
      var tree = this.tree;
      var nodes = this.walk();
      var siblings = this.getSiblings();
      var index = this.getIndex();
      if (Array.isArray(siblings)) {
        siblings.splice(index, 1);
      }
      nodes.forEach(function (node) {
        node.clean();
      });
      siblings.forEach(function (node) {
        node.update();
      });
      this.updateParents();
      tree.reflow();
    }
  }, {
    key: "clean",
    value: function clean() {
      var tree = this.tree,
        value = this.value;
      tree.activedMap["delete"](value);
      tree.checkedMap["delete"](value);
      tree.expandedMap["delete"](value);
      tree.nodeMap["delete"](value);
      tree.filterMap["delete"](value);
      tree.privateMap["delete"](this[privateKey]);
    }
  }, {
    key: "loadChildren",
    value: function () {
      var _loadChildren = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var config, list;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              config = get(this, "tree.config") || {};
              if (!(this.children === true && !this.loading)) {
                _context.next = 2;
                break;
              }
              if (!isFunction(config.load)) {
                _context.next = 2;
                break;
              }
              this.loading = true;
              this.update();
              list = [];
              _context.next = 1;
              return config.load(this);
            case 1:
              list = _context.sent;
              this.tree.emit("load", {
                node: this,
                data: list
              });
              this.loading = false;
              if (Array.isArray(list) && list.length > 0) {
                this.append(list);
              } else {
                this.children = false;
              }
              this.update();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadChildren() {
        return _loadChildren.apply(this, arguments);
      }
      return loadChildren;
    }()
  }, {
    key: "set",
    value: function set(item) {
      var _this4 = this;
      var tree = this.tree;
      var keys = Object.keys(item);
      keys.forEach(function (key) {
        if (hasOwnProperty.call(settableStatus, key) || key === "label") {
          _this4[key] = item[key];
        }
        if (key === "disabled") {
          _this4.setDisabled(item[key]);
        }
      });
      tree.updated(this);
    }
  }, {
    key: "getParent",
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: "getParents",
    value: function getParents() {
      var parents = [];
      var node = this.parent;
      while (node) {
        parents.push(node);
        node = node.parent;
      }
      return parents;
    }
  }, {
    key: "getSiblings",
    value: function getSiblings() {
      var parent = this.parent,
        tree = this.tree;
      var list = [];
      if (parent) {
        if (Array.isArray(parent.children)) {
          list = parent.children;
        }
      } else if (tree) {
        list = tree.children;
      }
      return list;
    }
  }, {
    key: "getChildren",
    value: function getChildren(deep) {
      var childrenModel = false;
      var children = this.children;
      if (Array.isArray(children)) {
        if (children.length > 0) {
          if (deep) {
            var nodes = this.walk();
            nodes.shift();
            childrenModel = nodes.map(function (item) {
              return item.getModel();
            });
          } else {
            childrenModel = children.map(function (item) {
              return item.getModel();
            });
          }
        } else {
          childrenModel = false;
        }
      } else if (isBoolean(children)) {
        childrenModel = children;
      }
      return childrenModel;
    }
  }, {
    key: "getRoot",
    value: function getRoot() {
      var parents = this.getParents();
      return parents[parents.length - 1] || null;
    }
  }, {
    key: "getIndex",
    value: function getIndex() {
      var list = this.getSiblings();
      return list.indexOf(this);
    }
  }, {
    key: "getPath",
    value: function getPath() {
      var nodes = this.getParents();
      nodes.unshift(this);
      return nodes.reverse();
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      var parents = this.getParents();
      return parents.length;
    }
  }, {
    key: "isRest",
    value: function isRest() {
      var _this$tree = this.tree,
        config = _this$tree.config,
        filterMap = _this$tree.filterMap,
        hasFilter = _this$tree.hasFilter;
      var rest = false;
      if (hasFilter) {
        var nodeModel = this.getModel();
        rest = config.filter(nodeModel);
      }
      if (rest) {
        filterMap.set(this.value, true);
      } else if (filterMap.get(this.value)) {
        filterMap["delete"](this.value);
      }
      return rest;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      var _this$tree2 = this.tree,
        nodeMap = _this$tree2.nodeMap,
        hasFilter = _this$tree2.hasFilter,
        config = _this$tree2.config;
      var allowFoldNodeOnFilter = config.allowFoldNodeOnFilter;
      var visible = true;
      if (!nodeMap.get(this.value)) {
        return false;
      }
      if (hasFilter && !allowFoldNodeOnFilter) {
        visible = this.vmIsLocked || this.vmIsRest;
        return visible;
      }
      var expandVisible = true;
      var parents = this.getParents();
      if (parents.length > 0) {
        expandVisible = parents.every(function (node) {
          return node.expanded;
        });
      }
      if (hasFilter) {
        visible = expandVisible && (this.vmIsRest || this.vmIsLocked);
      } else {
        visible = expandVisible;
      }
      return visible;
    }
  }, {
    key: "isDisabledState",
    value: function isDisabledState() {
      var tree = this.tree,
        parent = this.parent;
      var config = tree.config;
      var checkStrictly = config.checkStrictly,
        disabled = config.disabled,
        disableCheck = config.disableCheck,
        _config$keys = config.keys,
        keys = _config$keys === void 0 ? {} : _config$keys;
      if (disabled) return true;
      if (!checkStrictly && parent !== null && parent !== void 0 && parent.isDisabled() && !this.vmIsRest) return true;
      if (typeof this.disableManually === "boolean") return this.disableManually;
      var propDisabled = keys.disabled || "disabled";
      var state = get(this.data, propDisabled);
      if (typeof state === "boolean") return state;
      if (disableCheck === true) return true;
      if (typeof disableCheck === "function") {
        var stateCheck = disableCheck(this.getModel());
        if (typeof stateCheck === "boolean") {
          return stateCheck;
        }
      }
      return false;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var tree = this.tree;
      var hasFilter = tree.hasFilter,
        config = tree.config;
      var allowFoldNodeOnFilter = config.allowFoldNodeOnFilter;
      if (hasFilter && !allowFoldNodeOnFilter && this.vmIsLocked && !this.vmIsRest) {
        return true;
      }
      return this.isDisabledState();
    }
  }, {
    key: "isDraggable",
    value: function isDraggable() {
      var state = !!get(this, "tree.config.draggable");
      if (typeof this.draggable === "boolean") {
        state = this.draggable;
      }
      return state;
    }
  }, {
    key: "isExpandMutex",
    value: function isExpandMutex() {
      var state = !!get(this, "tree.config.expandMutex");
      if (typeof this.expandMutex === "boolean") {
        state = this.expandMutex;
      }
      return state;
    }
  }, {
    key: "isActivable",
    value: function isActivable() {
      var state = !!get(this, "tree.config.activable");
      if (typeof this.activable === "boolean") {
        state = this.activable;
      }
      return state;
    }
  }, {
    key: "isCheckable",
    value: function isCheckable() {
      var state = !!get(this, "tree.config.checkable");
      if (typeof this.checkable === "boolean") {
        state = this.checkable;
      }
      return state;
    }
  }, {
    key: "isActived",
    value: function isActived(map) {
      var tree = this.tree,
        value = this.value;
      var activedMap = map || tree.activedMap;
      return !!(tree.nodeMap.get(value) && activedMap.get(value));
    }
  }, {
    key: "isExpanded",
    value: function isExpanded(map) {
      var tree = this.tree,
        value = this.value,
        vmIsLocked = this.vmIsLocked;
      var hasFilter = tree.hasFilter,
        config = tree.config;
      var allowFoldNodeOnFilter = config.allowFoldNodeOnFilter;
      if (hasFilter && !allowFoldNodeOnFilter && vmIsLocked) return true;
      var expandedMap = map || tree.expandedMap;
      return !!(tree.nodeMap.get(value) && expandedMap.get(value));
    }
  }, {
    key: "isChecked",
    value: function isChecked(map) {
      var children = this.children,
        tree = this.tree,
        value = this.value;
      var _tree$config = tree.config,
        checkStrictly = _tree$config.checkStrictly,
        valueMode = _tree$config.valueMode;
      if (!tree.nodeMap.get(value)) return false;
      if (!this.isCheckable()) return false;
      var checkedMap = map || tree.checkedMap;
      if (checkStrictly) {
        return !!checkedMap.get(value);
      }
      var checked = false;
      if (checkedMap.get(value) && (valueMode !== "onlyLeaf" || this.isLeaf())) {
        return true;
      }
      if (Array.isArray(children) && children.length > 0) {
        checked = children.every(function (node) {
          var childIsChecked = node.isChecked(checkedMap);
          return childIsChecked;
        });
      } else {
        var parents = this.getParents();
        checked = parents.some(function (node) {
          return checkedMap.get(node.value);
        });
      }
      return checked;
    }
  }, {
    key: "isIndeterminate",
    value: function isIndeterminate() {
      var children = this.children,
        tree = this.tree,
        value = this.value;
      var checkStrictly = tree.config.checkStrictly;
      if (!tree.nodeMap.get(value)) return false;
      if (!this.isCheckable()) return false;
      if (checkStrictly) return false;
      if (!Array.isArray(children)) return false;
      var childChecked = null;
      var indeterminate = children.some(function (node) {
        if (node.isIndeterminate()) {
          return true;
        }
        if (isNull(childChecked)) {
          childChecked = node.isChecked();
        }
        if (childChecked !== node.isChecked()) {
          return true;
        }
        return false;
      });
      return indeterminate;
    }
  }, {
    key: "isFirst",
    value: function isFirst() {
      var siblings = this.getSiblings();
      return siblings[0] === this;
    }
  }, {
    key: "isLast",
    value: function isLast() {
      var siblings = this.getSiblings();
      return siblings[siblings.length - 1] === this;
    }
  }, {
    key: "isLeaf",
    value: function isLeaf() {
      var isLeaf = false;
      if (Array.isArray(this.children)) {
        isLeaf = this.children.length <= 0;
      } else {
        isLeaf = !this.children;
      }
      return isLeaf;
    }
  }, {
    key: "lock",
    value: function lock(lockState) {
      this.vmIsLocked = lockState;
      this.expanded = this.isExpanded();
      this.visible = this.isVisible();
    }
  }, {
    key: "afterExpanded",
    value: function afterExpanded() {
      this.update();
      if (this.expanded && this.children === true) {
        this.loadChildren();
      }
      this.updateChildren();
    }
  }, {
    key: "toggleExpanded",
    value: function toggleExpanded(opts) {
      return this.setExpanded(!this.isExpanded(), opts);
    }
  }, {
    key: "setExpanded",
    value: function setExpanded(expanded, opts) {
      var tree = this.tree;
      var config = tree.config;
      var options = _objectSpread({
        directly: false
      }, opts);
      var map = tree.expandedMap;
      if (!options.directly) {
        map = new Map(tree.expandedMap);
      }
      if (expanded) {
        var shouldExpandNodes = [];
        shouldExpandNodes.push(this);
        if (config.expandParent) {
          this.getParents().forEach(function (node) {
            shouldExpandNodes.push(node);
          });
        }
        shouldExpandNodes.forEach(function (node) {
          var isExpandMutex = false;
          if (node.parent) {
            isExpandMutex = node.parent.isExpandMutex();
          } else {
            var _tree$config2;
            isExpandMutex = tree === null || tree === void 0 || (_tree$config2 = tree.config) === null || _tree$config2 === void 0 ? void 0 : _tree$config2.expandMutex;
          }
          if (isExpandMutex) {
            var siblings = node.getSiblings();
            siblings.forEach(function (snode) {
              map["delete"](snode.value);
              snode.update();
              snode.updateChildren();
            });
          }
          map.set(node.value, true);
          node.update();
          node.updateChildren();
        });
      } else {
        map["delete"](this.value);
      }
      if (options.directly) {
        this.afterExpanded();
      }
      return tree.getExpanded(map);
    }
  }, {
    key: "toggleActived",
    value: function toggleActived(opts) {
      return this.setActived(!this.isActived(), opts);
    }
  }, {
    key: "setActived",
    value: function setActived(actived, opts) {
      var tree = this.tree;
      var options = _objectSpread({
        isAction: true,
        directly: false
      }, opts);
      var config = tree.config || {};
      var map = tree.activedMap;
      if (!options.directly) {
        map = new Map(tree.activedMap);
      }
      if (options.isAction && this.isDisabledState()) {
        return tree.getActived(map);
      }
      if (this.isActivable()) {
        if (actived) {
          var prevKeys = Array.from(map.keys());
          if (!config.activeMultiple) {
            map.clear();
          }
          prevKeys.forEach(function (value) {
            var node = tree.getNode(value);
            node === null || node === void 0 || node.update();
          });
          map.set(this.value, true);
        } else {
          map["delete"](this.value);
        }
      }
      this.update();
      return tree.getActived(map);
    }
  }, {
    key: "hasEnableUnCheckedChild",
    value: function hasEnableUnCheckedChild() {
      var children = this.children;
      if (!Array.isArray(children) || children.length <= 0) {
        return false;
      }
      var state = false;
      children.some(function (child) {
        if (child.isDisabledState()) return false;
        if (child.isChecked()) return false;
        if (child.isIndeterminate()) {
          if (child.hasEnableUnCheckedChild()) {
            state = true;
            return true;
          }
          return false;
        }
        state = true;
        return true;
      });
      return state;
    }
  }, {
    key: "toggleChecked",
    value: function toggleChecked(opts) {
      if (this.isIndeterminate()) {
        var expectState = this.hasEnableUnCheckedChild();
        return this.setChecked(expectState, opts);
      }
      return this.setChecked(!this.isChecked(), opts);
    }
  }, {
    key: "setChecked",
    value: function setChecked(checked, opts) {
      var tree = this.tree;
      var config = tree.config || {};
      var options = _objectSpread({
        isAction: true,
        directly: false
      }, opts);
      var map = tree.checkedMap;
      if (!options.directly) {
        map = new Map(tree.checkedMap);
      }
      if (!this.isCheckable()) {
        return tree.getChecked(map);
      }
      if (options.isAction && this.isDisabledState()) {
        return tree.getChecked(map);
      }
      if (checked === this.isChecked()) {
        var shouldSet = this.isIndeterminate() && !this.hasEnableUnCheckedChild();
        if (!shouldSet) {
          return tree.getChecked(map);
        }
      }
      if (checked) {
        map.set(this.value, true);
      } else {
        map["delete"](this.value);
      }
      if (config.checkStrictly) {
        if (options.directly) {
          this.updateChecked();
        }
      } else {
        this.spreadChildrenChecked(checked, map, options);
        this.spreadParentChecked(checked, map, options);
        if (options.directly) {
          var relatedNodes = tree.getRelatedNodes([this.value], {
            reverse: true
          });
          relatedNodes.forEach(function (node) {
            node.updateChecked();
          });
        }
      }
      return tree.getChecked(map);
    }
  }, {
    key: "spreadParentChecked",
    value: function spreadParentChecked(checked, map, opts) {
      var options = _objectSpread({
        isAction: true,
        directly: false
      }, opts);
      if (!this.isCheckable()) return;
      var children = this.children;
      if (Array.isArray(children) && children.length > 0) {
        map["delete"](this.value);
      }
      var parent = this.parent;
      if (!parent) return;
      parent.spreadParentChecked(checked, map, options);
    }
  }, {
    key: "spreadChildrenChecked",
    value: function spreadChildrenChecked(checked, map, opts) {
      var options = _objectSpread({
        isAction: true,
        directly: false
      }, opts);
      if (!this.isCheckable()) return;
      if (options.isAction && this.isDisabledState()) return;
      var children = this.children;
      if (!Array.isArray(children)) return;
      if (children.length <= 0) return;
      map["delete"](this.value);
      children.forEach(function (node) {
        if (options.isAction && node.isDisabledState()) return;
        if (checked) {
          map.set(node.value, true);
        } else {
          map["delete"](node.value);
        }
        node.spreadChildrenChecked(checked, map, options);
      });
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(disabled) {
      var _this$parent;
      if (!this.tree.config.checkStrictly && (_this$parent = this.parent) !== null && _this$parent !== void 0 && _this$parent.isDisabled()) return;
      this.disableManually = disabled;
      this.update();
      this.updateChildren();
    }
  }, {
    key: "update",
    value: function update() {
      this.level = this.getLevel();
      this.vmIsFirst = this.isFirst();
      this.vmIsLast = this.isLast();
      this.vmIsLeaf = this.isLeaf();
      this.vmCheckable = this.isCheckable();
      this.vmIsRest = this.isRest();
      this.actived = this.isActived();
      this.expanded = this.isExpanded();
      this.visible = this.isVisible();
      this.disabled = this.isDisabled();
      this.tree.updated(this);
    }
  }, {
    key: "updateChecked",
    value: function updateChecked() {
      var tree = this.tree,
        value = this.value;
      var checkedMap = tree.checkedMap;
      this.checked = this.isChecked();
      this.indeterminate = this.isIndeterminate();
      if (this.checked) {
        checkedMap.set(value, true);
      }
      tree.updated(this);
    }
  }, {
    key: "updateChildren",
    value: function updateChildren() {
      var _this5 = this;
      this.spreadChildren(function (node) {
        if (node === _this5) return;
        node.update();
        node.updateChecked();
      });
    }
  }, {
    key: "updateParents",
    value: function updateParents() {
      var _this6 = this;
      this.spreadParents(function (node) {
        if (node === _this6) return;
        node.update();
        node.updateChecked();
      });
    }
  }, {
    key: "updateRelated",
    value: function updateRelated() {
      var tree = this.tree;
      var relatedNodes = tree.getRelatedNodes([this.value]);
      relatedNodes.forEach(function (node) {
        node.update();
        node.updateChecked();
      });
    }
  }, {
    key: "walk",
    value: function walk() {
      var list = [];
      this.spreadChildren(function (node) {
        list.push(node);
      });
      return list;
    }
  }, {
    key: "spreadChildren",
    value: function spreadChildren(fn) {
      fn(this);
      var children = this.children;
      if (Array.isArray(children) && children.length > 0) {
        children.forEach(function (node) {
          node === null || node === void 0 || node.spreadChildren(fn);
        });
      }
    }
  }, {
    key: "spreadParents",
    value: function spreadParents(fn) {
      fn(this);
      var parent = this.parent;
      if (!parent) return;
      parent === null || parent === void 0 || parent.spreadParents(fn);
    }
  }, {
    key: "getModel",
    value: function getModel() {
      var model = this.model;
      if (!model) {
        model = createNodeModel(this);
        this.model = model;
      }
      return model;
    }
  }]);
}();

export { TreeNode as T, privateKey as p };
//# sourceMappingURL=dep-423bbe8d.js.map
