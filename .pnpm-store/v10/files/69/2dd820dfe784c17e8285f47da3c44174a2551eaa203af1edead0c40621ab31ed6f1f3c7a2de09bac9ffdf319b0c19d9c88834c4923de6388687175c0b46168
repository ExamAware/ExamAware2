/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, createVNode, TransitionGroup } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { upperFirst, isFunction } from 'lodash-es';
import { getCreateElement, getScopedSlots } from './utils/adapt.mjs';
import useDragHandle from './hooks/useDragHandle.mjs';
import useTreeAction from './hooks/useTreeAction.mjs';
import useTreeNodes from './hooks/useTreeNodes.mjs';
import useTreeScroll from './hooks/useTreeScroll.mjs';
import useTreeState from './hooks/useTreeState.mjs';
import useTreeStore from './hooks/useTreeStore.mjs';
import useTreeStyles from './hooks/useTreeStyles.mjs';
import props from './props.mjs';
import { getNode } from './utils/index.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import 'tdesign-icons-vue-next';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../checkbox/group.mjs';
import '../checkbox/checkbox-group-props.mjs';
import './style/css.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import '../_chunks/dep-07809d3f.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import './hooks/useDraggable.mjs';
import './tree-item.mjs';
import './hooks/useItemState.mjs';
import './hooks/useTreeItem.mjs';
import './hooks/useItemEvents.mjs';
import './hooks/useRenderIcon.mjs';
import './hooks/useRenderLabel.mjs';
import './hooks/useRenderLine.mjs';
import './hooks/useRenderOperations.mjs';
import './hooks/useTreeEvents.mjs';
import '../_chunks/dep-225a059b.mjs';
import 'mitt';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _TdTree = defineComponent({
  name: "TTree",
  model: {
    prop: "value",
    event: "change"
  },
  props: props,
  setup: function setup(props2, context) {
    var _useConfig = useConfig("tree"),
      t = _useConfig.t,
      global = _useConfig.global;
    var classPrefix = usePrefixClass();
    var componentName = usePrefixClass("tree");
    var renderTNodeJSX = useTNodeJSX();
    var _useTreeState = useTreeState(props2, context),
      state = _useTreeState.state;
    var treeContentRef = state.treeContentRef,
      isScrolling = state.isScrolling;
    var _useTreeStore = useTreeStore(state),
      store = _useTreeStore.store,
      updateStoreConfig = _useTreeStore.updateStoreConfig,
      rebuild = _useTreeStore.rebuild;
    useDragHandle(state);
    var _useTreeAction = useTreeAction(state),
      setActived = _useTreeAction.setActived,
      setExpanded = _useTreeAction.setExpanded,
      setChecked = _useTreeAction.setChecked;
    var _useTreeScroll = useTreeScroll(state),
      onInnerVirtualScroll = _useTreeScroll.onInnerVirtualScroll,
      virtualConfig = _useTreeScroll.virtualConfig,
      scrollToElement = _useTreeScroll.scrollToElement;
    var _useTreeNodes = useTreeNodes(state),
      renderTreeNodes = _useTreeNodes.renderTreeNodes,
      nodesEmpty = _useTreeNodes.nodesEmpty;
    var _useTreeStyles = useTreeStyles(state),
      treeClasses = _useTreeStyles.treeClasses,
      treeContentStyles = _useTreeStyles.treeContentStyles,
      scrollStyles = _useTreeStyles.scrollStyles,
      cursorStyles = _useTreeStyles.cursorStyles;
    return {
      t: t,
      global: global,
      classPrefix: classPrefix,
      componentName: componentName,
      state: state,
      store: store,
      treeClasses: treeClasses,
      treeContentRef: treeContentRef,
      renderTNodeJSX: renderTNodeJSX,
      rebuild: rebuild,
      updateStoreConfig: updateStoreConfig,
      setActived: setActived,
      setExpanded: setExpanded,
      setChecked: setChecked,
      renderTreeNodes: renderTreeNodes,
      nodesEmpty: nodesEmpty,
      isScrolling: isScrolling,
      onInnerVirtualScroll: onInnerVirtualScroll,
      treeContentStyles: treeContentStyles,
      scrollStyles: scrollStyles,
      cursorStyles: cursorStyles,
      virtualConfig: virtualConfig,
      scrollToElement: scrollToElement,
      scrollTo: scrollToElement
    };
  },
  watch: {
    data: function data(list) {
      this.rebuild(list);
    }
  },
  methods: {
    refresh: function refresh() {
      this.store.refreshState();
    },
    setItem: function setItem(value, options) {
      var _this = this;
      var node = this.store.getNode(value);
      var spec = options;
      var keys = Object.keys(spec);
      if (node && spec) {
        ["expanded", "actived", "checked"].forEach(function (name) {
          if (keys.includes(name)) {
            var val = spec[name];
            delete spec[name];
            var methodName = "set".concat(upperFirst(name));
            var setupMethod = _this[methodName];
            if (isFunction(setupMethod)) {
              setupMethod.call(_this, node, val);
            }
          }
        });
        node.set(spec);
      }
    },
    getItem: function getItem(value) {
      var node = this.store.getNode(value);
      return node === null || node === void 0 ? void 0 : node.getModel();
    },
    getItems: function getItems(value) {
      var nodes = this.store.getNodes(value);
      return nodes.map(function (node) {
        return node.getModel();
      });
    },
    appendTo: function appendTo(para, item) {
      var store = this.store;
      var list = [];
      if (Array.isArray(item)) {
        list = item;
      } else {
        list = [item];
      }
      list.forEach(function (item2) {
        var val = (item2 === null || item2 === void 0 ? void 0 : item2.value) || "";
        var node = getNode(store, val);
        if (node) {
          store.appendNodes(para, node);
        } else {
          store.appendNodes(para, item2);
        }
      });
    },
    insertBefore: function insertBefore(value, item) {
      var store = this.store;
      var val = (item === null || item === void 0 ? void 0 : item.value) || "";
      var node = getNode(store, val);
      if (node) {
        store.insertBefore(value, node);
      } else {
        store.insertBefore(value, item);
      }
    },
    insertAfter: function insertAfter(value, item) {
      var store = this.store;
      var val = (item === null || item === void 0 ? void 0 : item.value) || "";
      var node = getNode(store, val);
      if (node) {
        store.insertAfter(value, node);
      } else {
        store.insertAfter(value, item);
      }
    },
    remove: function remove(value) {
      return this.store.remove(value);
    },
    getIndex: function getIndex(value) {
      return this.store.getNodeIndex(value);
    },
    getParent: function getParent(value) {
      var node = this.store.getParent(value);
      return node === null || node === void 0 ? void 0 : node.getModel();
    },
    getParents: function getParents(value) {
      var nodes = this.store.getParents(value);
      return nodes.map(function (node) {
        return node.getModel();
      });
    },
    getPath: function getPath(value) {
      var node = this.store.getNode(value);
      var pathNodes = [];
      if (node) {
        pathNodes = node.getPath().map(function (node2) {
          return node2.getModel();
        });
      }
      return pathNodes;
    },
    getTreeData: function getTreeData(value) {
      var list = [];
      if (value) {
        var node = this.store.getNode(value);
        if (!node) return [];
        list = this.store.getNodes(value);
      } else {
        list = this.store.getNodes();
      }
      var nodeMap = {};
      var treeNodes = [];
      list.forEach(function (item) {
        var value2 = item.value;
        var itemData = _objectSpread(_objectSpread({}, item.data), {}, {
          value: value2
        });
        if (itemData.children !== true) {
          delete itemData.children;
        }
        nodeMap[value2] = itemData;
        var parent = item.getParent();
        if (!parent) {
          treeNodes.push(itemData);
        } else {
          var parentData = nodeMap[parent.value];
          if (!parentData) {
            treeNodes.push(itemData);
          } else {
            if (!Array.isArray(parentData.children)) {
              parentData.children = [];
            }
            parentData.children.push(itemData);
          }
        }
      });
      return treeNodes;
    }
  },
  render: function render(h) {
    var _allNodes$value$filte, _allNodes$value, _refProps$scroll$valu, _refProps$scroll$valu2;
    var state = this.state,
      treeClasses = this.treeClasses,
      updateStoreConfig = this.updateStoreConfig,
      renderTreeNodes = this.renderTreeNodes,
      nodesEmpty = this.nodesEmpty,
      isScrolling = this.isScrolling,
      virtualConfig = this.virtualConfig,
      treeContentStyles = this.treeContentStyles,
      scrollStyles = this.scrollStyles,
      cursorStyles = this.cursorStyles;
    var createElement = getCreateElement(h);
    var scope = state.scope,
      allNodes = state.allNodes,
      refProps = state.refProps;
    scope.scopedSlots = getScopedSlots(this);
    updateStoreConfig();
    var treeNodeViews = renderTreeNodes(createElement);
    var cname = this.componentName;
    var isVirtual = virtualConfig.isVirtualScroll.value;
    var emptyNode = null;
    if (nodesEmpty) {
      var useLocale = !this.empty && !this.$slots.empty;
      var emptyContent = useLocale ? this.t(this.global.empty) : this.renderTNodeJSX("empty");
      emptyNode = createVNode("div", {
        "class": "".concat(cname, "__empty")
      }, [emptyContent]);
    } else if (treeNodeViews.length <= 0) {
      emptyNode = createVNode("div", null, null);
    }
    var $props = this.$props;
    var transition = $props.transition;
    var treeNodeList = null;
    if (!transition || isVirtual && isScrolling) {
      treeNodeList = createVNode("div", {
        "class": "".concat(cname, "__list"),
        "style": scrollStyles
      }, [treeNodeViews]);
    } else {
      treeNodeList = createVNode(TransitionGroup, {
        "tag": "div",
        "class": "".concat(cname, "__list"),
        "enter-active-class": "".concat(cname, "__item--enter-active"),
        "leave-active-class": "".concat(cname, "__item--leave-active"),
        "style": scrollStyles
      }, _isSlot(treeNodeViews) ? treeNodeViews : {
        "default": function _default() {
          return [treeNodeViews];
        }
      });
    }
    var topValue = ((_allNodes$value$filte = (_allNodes$value = allNodes.value) === null || _allNodes$value === void 0 ? void 0 : _allNodes$value.filter(function (node) {
      return node.visible;
    }).length) !== null && _allNodes$value$filte !== void 0 ? _allNodes$value$filte : 0) * ((_refProps$scroll$valu = (_refProps$scroll$valu2 = refProps.scroll.value) === null || _refProps$scroll$valu2 === void 0 ? void 0 : _refProps$scroll$valu2.rowHeight) !== null && _refProps$scroll$valu !== void 0 ? _refProps$scroll$valu : 34);
    var placeholderStyles = {
      width: "1px",
      height: "1px",
      opacity: 0,
      pointerEvents: "none",
      position: "absolute",
      left: 0,
      top: "".concat(topValue, "px")
    };
    var placeholderEl = createVNode("div", {
      "style": placeholderStyles
    }, null);
    var treeNode = createVNode("div", {
      "class": treeClasses,
      "ref": "treeContentRef",
      "onScroll": this.onInnerVirtualScroll,
      "style": treeContentStyles
    }, [isVirtual && createVNode("div", {
      "class": "".concat(cname, "__vscroll-cursor"),
      "style": cursorStyles
    }, null), emptyNode || treeNodeList, isVirtual && placeholderEl]);
    return treeNode;
  }
});

export { _TdTree as default };
//# sourceMappingURL=tree.mjs.map
