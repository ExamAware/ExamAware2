/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var mitt = require('mitt');
var treeNode = require('./dep-08a97e23.js');
var isFunction = require('./dep-48f60c78.js');
var isString = require('./dep-a55e8a08.js');
var isNumber = require('./dep-990979bb.js');
var configProvider_utils_context = require('./dep-5d7e2375.js');
var isArray = require('./dep-87589faa.js');
var _baseDifference = require('./dep-01738d56.js');
var _flatRest = require('./dep-dcb859c6.js');
var isArrayLikeObject = require('./dep-54e566d9.js');
var camelCase = require('./dep-422dd97f.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var mitt__default = /*#__PURE__*/_interopDefaultLegacy(mitt);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = isArrayLikeObject.baseRest(function (array, values) {
  return isArrayLikeObject.isArrayLikeObject(array) ? _baseDifference.baseDifference(array, _flatRest.baseFlatten(values, 1, isArrayLikeObject.isArrayLikeObject, true)) : [];
});
var difference$1 = difference;

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function nextTick(fn) {
  var pm = Promise.resolve();
  pm.then(fn);
  return pm;
}
var TreeStore = /*#__PURE__*/function () {
  function TreeStore(options) {
    _classCallCheck__default["default"](this, TreeStore);
    _defineProperty__default["default"](this, "children", void 0);
    _defineProperty__default["default"](this, "nodes", void 0);
    _defineProperty__default["default"](this, "nodeMap", void 0);
    _defineProperty__default["default"](this, "privateMap", void 0);
    _defineProperty__default["default"](this, "config", void 0);
    _defineProperty__default["default"](this, "activedMap", void 0);
    _defineProperty__default["default"](this, "updatedMap", void 0);
    _defineProperty__default["default"](this, "checkedMap", void 0);
    _defineProperty__default["default"](this, "expandedMap", void 0);
    _defineProperty__default["default"](this, "filterMap", void 0);
    _defineProperty__default["default"](this, "hasFilter", void 0);
    _defineProperty__default["default"](this, "emitter", void 0);
    _defineProperty__default["default"](this, "updateTick", void 0);
    _defineProperty__default["default"](this, "shouldReflow", void 0);
    _defineProperty__default["default"](this, "prevFilter", void 0);
    var config = _objectSpread({
      prefix: "t",
      keys: {},
      expandAll: false,
      expandLevel: 0,
      expandMutex: false,
      expandParent: false,
      activable: false,
      activeMultiple: false,
      checkable: false,
      checkStrictly: false,
      disabled: false,
      disableCheck: false,
      draggable: false,
      load: null,
      lazy: false,
      valueMode: "onlyLeaf",
      filter: null,
      allowFoldNodeOnFilter: false,
      onLoad: null,
      onReflow: null,
      onUpdate: null
    }, options);
    this.config = config;
    this.nodes = [];
    this.children = [];
    this.nodeMap = /* @__PURE__ */new Map();
    this.privateMap = /* @__PURE__ */new Map();
    this.activedMap = /* @__PURE__ */new Map();
    this.expandedMap = /* @__PURE__ */new Map();
    this.checkedMap = /* @__PURE__ */new Map();
    this.updatedMap = /* @__PURE__ */new Map();
    this.filterMap = /* @__PURE__ */new Map();
    this.prevFilter = null;
    this.updateTick = null;
    this.shouldReflow = false;
    this.hasFilter = isFunction.isFunction(config.filter);
    this.emitter = mitt__default["default"]();
  }
  return _createClass__default["default"](TreeStore, [{
    key: "setConfig",
    value: function setConfig(options) {
      var config = this.config;
      var hasChanged = false;
      Object.keys(options).forEach(function (key) {
        var val = options[key];
        if (val !== config[key]) {
          hasChanged = true;
          config[key] = val;
        }
      });
      this.hasFilter = isFunction.isFunction(config.filter);
      if (hasChanged) {
        this.refreshState();
      }
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: "getNode",
    value: function getNode(item) {
      var node = null;
      if (isString.isString(item) || isNumber.isNumber(item)) {
        node = this.nodeMap.get(item);
      } else if (item instanceof treeNode.TreeNode) {
        node = this.nodeMap.get(item.value);
      }
      if (!node) node = null;
      return node;
    }
  }, {
    key: "getIndex",
    value: function getIndex(node) {
      return this.nodes.indexOf(node);
    }
  }, {
    key: "getParent",
    value: function getParent(value) {
      var parent = null;
      var node = this.getNode(value);
      if (node) {
        parent = node.getParent();
      }
      return parent;
    }
  }, {
    key: "getParents",
    value: function getParents(value) {
      var node = this.getNode(value);
      var parents = [];
      if (node) {
        parents = node.getParents();
      }
      return parents;
    }
  }, {
    key: "getNodeIndex",
    value: function getNodeIndex(value) {
      var node = this.getNode(value);
      var index = -1;
      if (node) {
        index = node.getIndex();
      }
      return index;
    }
  }, {
    key: "getNodes",
    value: function getNodes(item, options) {
      var nodes = [];
      var val = "";
      if (isString.isString(item) || isNumber.isNumber(item)) {
        val = item;
      } else if (item instanceof treeNode.TreeNode) {
        val = item.value;
      }
      if (!val && val !== 0) {
        nodes = this.nodes.slice(0);
      } else {
        var node = this.getNode(val);
        if (node) {
          nodes = node.walk();
        }
      }
      if (options) {
        var conf = _objectSpread({
          filter: null,
          level: Infinity
        }, options);
        if (isNumber.isNumber(conf.level) && conf.level !== Infinity) {
          nodes = nodes.filter(function (node) {
            return node.level <= conf.level;
          });
        }
        if (isFunction.isFunction(conf.filter)) {
          nodes = nodes.filter(function (node) {
            var nodeModel = node.getModel();
            return conf.filter(nodeModel);
          });
        }
        if (configProvider_utils_context.isPlainObject(conf.props)) {
          nodes = nodes.filter(function (node) {
            var result = Object.keys(conf.props).every(function (key) {
              var propEqual = node[key] === conf.props[key];
              return propEqual;
            });
            return result;
          });
        }
      }
      return nodes;
    }
  }, {
    key: "append",
    value: function append(list) {
      var _this = this;
      list.forEach(function (item) {
        var node = new treeNode.TreeNode(_this, item);
        _this.children.push(node);
      });
      this.reflow();
    }
  }, {
    key: "reload",
    value: function reload(list) {
      this.removeAll();
      this.append(list);
    }
  }, {
    key: "parseNodeData",
    value: function parseNodeData(para, item) {
      var value = "";
      var node = null;
      var data = null;
      if (isString.isString(para) || isNumber.isNumber(para)) {
        value = para;
        node = this.getNode(value);
        data = item;
      } else if (para instanceof treeNode.TreeNode) {
        if (item) {
          node = para;
          data = item;
        } else {
          data = para;
        }
      } else {
        data = para;
      }
      var spec = {
        node: node,
        data: data
      };
      return spec;
    }
  }, {
    key: "appendNodes",
    value: function appendNodes(para, item) {
      var spec = this.parseNodeData(para, item);
      if (spec.data) {
        if (!spec.node) {
          if (spec.data instanceof treeNode.TreeNode) {
            spec.data.appendTo(this);
          } else if (Array.isArray(spec.data)) {
            this.append(spec.data);
          } else {
            this.append([spec.data]);
          }
        } else {
          if (spec.data instanceof treeNode.TreeNode) {
            spec.data.appendTo(this, spec.node);
          } else if (isArray.isArray(spec.data)) {
            spec.node.append(spec.data);
          } else {
            spec.node.append([spec.data]);
          }
          spec.node.updateRelated();
        }
      }
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(value, item) {
      var node = this.getNode(value);
      if (node) {
        node.insertBefore(item);
      }
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(value, item) {
      var node = this.getNode(value);
      if (node) {
        node.insertAfter(item);
      }
    }
  }, {
    key: "refreshNodes",
    value: function refreshNodes() {
      var children = this.children,
        nodes = this.nodes;
      nodes.length = 0;
      children.forEach(function (node) {
        var list = node.walk();
        Array.prototype.push.apply(nodes, list);
      });
    }
  }, {
    key: "reflow",
    value: function reflow(node) {
      this.shouldReflow = true;
      this.updated(node);
    }
  }, {
    key: "updated",
    value: function updated(node) {
      var _this2 = this;
      var updatedMap = this.updatedMap;
      if (node) {
        updatedMap.set(node[treeNode.privateKey], "changed");
      } else {
        this.getNodes().forEach(function (itemNode) {
          updatedMap.set(itemNode[treeNode.privateKey], "changed");
        });
      }
      if (this.updateTick) return;
      this.updateTick = nextTick(function () {
        _this2.updateTick = null;
        if (_this2.shouldReflow) {
          _this2.refreshNodes();
          _this2.emit("reflow");
        }
        _this2.lockFilterPathNodes();
        var stateId = "t".concat(new Date().getTime());
        var updatedList = Array.from(updatedMap.keys());
        var updatedNodes = updatedList.map(function (nodePrivateKey) {
          updatedMap.set(nodePrivateKey, stateId);
          return _this2.privateMap.get(nodePrivateKey);
        });
        _this2.emit("update", {
          nodes: updatedNodes,
          map: updatedMap
        });
        _this2.shouldReflow = false;
        updatedMap.clear();
      });
    }
  }, {
    key: "getActived",
    value: function getActived(map) {
      var activedMap = map || this.activedMap;
      return Array.from(activedMap.keys());
    }
  }, {
    key: "getActivedNodes",
    value: function getActivedNodes(item) {
      var nodes = this.getNodes(item);
      nodes = nodes.filter(function (node) {
        return node.isActived();
      });
      return nodes;
    }
  }, {
    key: "replaceActived",
    value: function replaceActived(list) {
      this.resetActived();
      this.setActived(list);
    }
  }, {
    key: "setActived",
    value: function setActived(actived) {
      var _this3 = this;
      var activeMultiple = this.config.activeMultiple;
      var list = actived.slice(0);
      if (!activeMultiple) {
        list.length = 1;
      }
      list.forEach(function (val) {
        _this3.activedMap.set(val, true);
        var node = _this3.getNode(val);
        if (node) {
          node.update();
        }
      });
    }
  }, {
    key: "resetActived",
    value: function resetActived() {
      var actived = this.getActived();
      this.activedMap.clear();
      var relatedNodes = this.getRelatedNodes(actived);
      relatedNodes.forEach(function (node) {
        node.update();
      });
    }
  }, {
    key: "getExpanded",
    value: function getExpanded(map) {
      var expandedMap = map || this.expandedMap;
      return Array.from(expandedMap.keys());
    }
  }, {
    key: "replaceExpanded",
    value: function replaceExpanded(list) {
      var expanded = this.getExpanded();
      var added = difference$1(list, expanded);
      var removed = difference$1(expanded, list);
      this.setExpandedDirectly(removed, false);
      this.updateExpanded(removed);
      this.setExpanded(added);
    }
  }, {
    key: "setExpanded",
    value: function setExpanded(list) {
      this.setExpandedDirectly(list);
      this.updateExpanded(list);
    }
  }, {
    key: "setExpandedDirectly",
    value: function setExpandedDirectly(list) {
      var _this4 = this;
      var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      list.forEach(function (val) {
        var node = _this4.getNode(val);
        if (!(node !== null && node !== void 0 && node.isLeaf()) && expanded) {
          _this4.expandedMap.set(val, true);
        } else {
          _this4.expandedMap["delete"](val);
        }
        node === null || node === void 0 || node.afterExpanded();
      });
    }
  }, {
    key: "resetExpanded",
    value: function resetExpanded() {
      var expanded = this.getExpanded();
      this.expandedMap.clear();
      this.updateExpanded(expanded);
    }
  }, {
    key: "updateExpanded",
    value: function updateExpanded(list) {
      var relatedNodes = this.getRelatedNodes(list, {
        withParents: false
      });
      relatedNodes.forEach(function (node) {
        node.update();
      });
    }
  }, {
    key: "getChecked",
    value: function getChecked(map) {
      var nodeMap = this.nodeMap,
        config = this.config;
      var valueMode = config.valueMode,
        checkStrictly = config.checkStrictly;
      var list = [];
      var checkedMap = map || this.checkedMap;
      nodeMap.forEach(function (node) {
        if (!node.isChecked(checkedMap)) return;
        if (valueMode === "parentFirst" && !checkStrictly) {
          if (!node.parent || !node.parent.isChecked(checkedMap)) {
            list.push(node.value);
          }
        } else if (valueMode === "onlyLeaf" && !checkStrictly) {
          if (node.isLeaf()) {
            list.push(node.value);
          }
        } else {
          list.push(node.value);
        }
      });
      return list;
    }
  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes(item) {
      var nodes = this.getNodes(item);
      nodes = nodes.filter(function (node) {
        return node.isChecked();
      });
      return nodes;
    }
  }, {
    key: "replaceChecked",
    value: function replaceChecked(list) {
      this.resetChecked();
      this.setChecked(list);
    }
  }, {
    key: "setChecked",
    value: function setChecked(list) {
      var _this5 = this;
      var _this$config = this.config,
        checkStrictly = _this$config.checkStrictly,
        checkable = _this$config.checkable;
      if (!checkable) return;
      list.forEach(function (val) {
        var node = _this5.getNode(val);
        if (!node) return;
        if (checkStrictly) {
          _this5.checkedMap.set(val, true);
          node.updateChecked();
        } else {
          var childrenNodes = node.walk();
          childrenNodes.forEach(function (childNode) {
            _this5.checkedMap.set(childNode.value, true);
          });
        }
      });
      if (!checkStrictly) {
        var checkedValues = this.getChecked();
        var relatedNodes = this.getRelatedNodes(checkedValues);
        relatedNodes.forEach(function (node) {
          node.updateChecked();
        });
      }
    }
  }, {
    key: "resetChecked",
    value: function resetChecked() {
      var checked = this.getChecked();
      var relatedNodes = this.getRelatedNodes(checked);
      this.checkedMap.clear();
      relatedNodes.forEach(function (node) {
        node.updateChecked();
      });
    }
  }, {
    key: "refreshState",
    value: function refreshState() {
      var nodeMap = this.nodeMap;
      nodeMap.forEach(function (node) {
        node.update();
      });
    }
  }, {
    key: "updateAll",
    value: function updateAll() {
      var nodeMap = this.nodeMap;
      nodeMap.forEach(function (node) {
        node.update();
        node.updateChecked();
      });
    }
  }, {
    key: "remove",
    value: function remove(value) {
      var node = this.getNode(value);
      if (node) {
        node.remove();
      }
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.expandedMap.clear();
      this.checkedMap.clear();
      this.activedMap.clear();
      this.filterMap.clear();
      this.nodeMap.clear();
      this.privateMap.clear();
      this.updatedMap.clear();
      this.nodes = [];
      this.children = [];
      this.reflow();
    }
  }, {
    key: "getRelatedNodes",
    value: function getRelatedNodes(list, options) {
      var _this6 = this;
      var conf = _objectSpread({
        reverse: false,
        withParents: true
      }, options);
      var map = /* @__PURE__ */new Map();
      list.forEach(function (value) {
        if (map.get(value)) return;
        var node = _this6.getNode(value);
        if (node) {
          var parents = node.getParents().reverse();
          var children = node.walk();
          var related = [];
          if (conf.withParents) {
            related = parents.concat(children);
          } else {
            related = children;
          }
          related.forEach(function (relatedNode) {
            map.set(relatedNode.value, relatedNode);
          });
        }
      });
      var relatedNodes = Array.from(map.values());
      if (conf.reverse) {
        relatedNodes = relatedNodes.reverse();
      }
      return relatedNodes;
    }
  }, {
    key: "emit",
    value: function emit(name, state) {
      var config = this.config,
        emitter = this.emitter;
      var methodName = camelCase.camelCase("on-".concat(name));
      var method = config[methodName];
      if (isFunction.isFunction(method)) {
        method(state);
      }
      emitter.emit(name, state);
    }
  }, {
    key: "lockFilterPathNodes",
    value: function lockFilterPathNodes() {
      var config = this.config;
      var allNodes = this.getNodes();
      if (this.prevFilter) {
        allNodes.forEach(function (node) {
          if (node.vmIsLocked) {
            node.lock(false);
          }
        });
      }
      var currentFilter = config.filter;
      if (!currentFilter || !isFunction.isFunction(currentFilter)) return;
      this.prevFilter = config.filter;
      allNodes.reverse().forEach(function (node) {
        var parent = node.getParent();
        if (!parent) return;
        if (node.vmIsRest || node.vmIsLocked) {
          if (!parent.vmIsLocked) {
            parent.lock(true);
          }
        }
      });
    }
  }]);
}();

exports.TreeStore = TreeStore;
//# sourceMappingURL=dep-ba34f9a7.js.map
