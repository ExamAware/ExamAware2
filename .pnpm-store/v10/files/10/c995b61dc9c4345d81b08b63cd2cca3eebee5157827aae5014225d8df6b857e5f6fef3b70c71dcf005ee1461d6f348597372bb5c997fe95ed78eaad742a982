/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index$1 = require('../../_chunks/dep-f75abe2a.js');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
var tree_hooks_useItemEvents = require('./useItemEvents.js');
var tree_hooks_useRenderIcon = require('./useRenderIcon.js');
var tree_hooks_useRenderLabel = require('./useRenderLabel.js');
var tree_hooks_useRenderLine = require('./useRenderLine.js');
var tree_hooks_useRenderOperations = require('./useRenderOperations.js');
var tree_hooks_useDraggable = require('./useDraggable.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
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
require('../../_chunks/dep-fb83a452.js');
require('../../_chunks/dep-06276759.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
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
require('../../_chunks/dep-31c76dc6.js');
require('../utils/index.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeItem(state) {
  var treeScope = state.treeScope,
    treeItemRef = state.treeItemRef;
  var virtualConfig = treeScope.virtualConfig,
    treeContentRef = treeScope.treeContentRef,
    scrollProps = treeScope.scrollProps;
  var classPrefix = index.usePrefixClass().value;
  var componentName = index.usePrefixClass("tree").value;
  var _useItemEvents = tree_hooks_useItemEvents["default"](state),
    handleClick = _useItemEvents.handleClick;
  var _useRenderIcon = tree_hooks_useRenderIcon["default"](state),
    renderIcon = _useRenderIcon.renderIcon;
  var _useRenderLabel = tree_hooks_useRenderLabel["default"](state),
    renderLabel = _useRenderLabel.renderLabel;
  var _useRenderLine = tree_hooks_useRenderLine["default"](state),
    renderLine = _useRenderLine.renderLine;
  var _useRenderOperations = tree_hooks_useRenderOperations["default"](state),
    renderOperations = _useRenderOperations.renderOperations;
  var _useDraggable = tree_hooks_useDraggable["default"](state),
    dragStates = _useDraggable.dragStates,
    handleDragStart = _useDraggable.handleDragStart,
    handleDragEnd = _useDraggable.handleDragEnd,
    handleDragOver = _useDraggable.handleDragOver,
    handleDragLeave = _useDraggable.handleDragLeave,
    handleDrop = _useDraggable.handleDrop;
  var _useLazyLoad = index$1.useLazyLoad(treeContentRef, treeItemRef, Vue.reactive(_objectSpread({}, scrollProps === null || scrollProps === void 0 ? void 0 : scrollProps.value))),
    hasLazyLoadHolder = _useLazyLoad.hasLazyLoadHolder,
    tRowHeight = _useLazyLoad.tRowHeight;
  function tryNotifyVirtualScrollRowUpdate() {
    var node = state.node;
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    if (isVirtual) {
      var timer = setTimeout(function () {
        virtualConfig.handleRowMounted({
          ref: treeItemRef,
          data: node
        });
        clearTimeout(timer);
      }, 100);
    }
  }
  Vue.onMounted(function () {
    tryNotifyVirtualScrollRowUpdate();
  });
  Vue.onUpdated(function () {
    tryNotifyVirtualScrollRowUpdate();
  });
  var getItemStyles = function getItemStyles() {
    var node = state.node;
    var level = node.level;
    var levelStyle = "--level: ".concat(level, ";");
    var strStyle = "".concat(levelStyle);
    return strStyle;
  };
  var getItemClassList = function getItemClassList() {
    var node = state.node;
    var isDragOver = dragStates.isDragOver,
      isDragging = dragStates.isDragging,
      dropPosition = dragStates.dropPosition;
    var list = [];
    list.push("".concat(componentName, "__item"));
    list.push(_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName, "__item--open"), node.expanded), "".concat(classPrefix, "-is-active"), node.isActivable() ? node.actived : false), "".concat(classPrefix, "-is-disabled"), node.isDisabled()));
    list.push(_defineProperty__default["default"]({}, "".concat(componentName, "__item--draggable"), !node.isDisabled() && node.isDraggable()));
    if (node.visible) {
      list.push("".concat(componentName, "__item--visible"));
    } else {
      list.push("".concat(componentName, "__item--hidden"));
    }
    if (node.vmIsLocked) {
      list.push("".concat(componentName, "__item--locked"));
    }
    if (node.vmIsRest) {
      list.push("".concat(componentName, "__item--matched"));
    }
    list.push(_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(componentName, "__item--dragging"), isDragging), "".concat(componentName, "__item--tip-top"), isDragOver && dropPosition < 0), "".concat(componentName, "__item--tip-bottom"), isDragOver && dropPosition > 0), "".concat(componentName, "__item--tip-highlight"), !isDragging && isDragOver && dropPosition === 0));
    return list;
  };
  var renderItem = function renderItem(h) {
    var itemNodes = [];
    var iconNode = renderIcon(h);
    var lineNode = renderLine(h);
    if (lineNode) {
      itemNodes.push(lineNode);
    }
    if (iconNode) {
      itemNodes.push(iconNode);
    }
    var labelNode = renderLabel(h);
    if (labelNode) {
      itemNodes.push(labelNode);
    }
    var opNode = renderOperations(h);
    if (opNode) {
      itemNodes.push(opNode);
    }
    return itemNodes;
  };
  var renderItemNode = function renderItemNode(h) {
    var node = state.node,
      props = state.props;
    if (!node) return null;
    var level = node.level,
      value = node.value;
    var styles = getItemStyles();
    var classList = getItemClassList();
    var treeState = state;
    treeState.stateId = props.stateId;
    var itemNode = Vue.createVNode("div", {
      "ref": "treeItemRef",
      "class": classList,
      "data-value": value,
      "data-level": level,
      "style": styles,
      "onClick": function onClick(evt) {
        return handleClick(evt);
      },
      "draggable": !node.isDisabled() && node.isDraggable(),
      "onDragstart": function onDragstart(evt) {
        return handleDragStart(evt);
      },
      "onDragend": function onDragend(evt) {
        return handleDragEnd(evt);
      },
      "onDragover": function onDragover(evt) {
        return handleDragOver(evt);
      },
      "onDragleave": function onDragleave(evt) {
        return handleDragLeave(evt);
      },
      "onDrop": function onDrop(evt) {
        return handleDrop(evt);
      }
    }, [hasLazyLoadHolder.value ? [Vue.createVNode("div", null, null)] : renderItem(h)]);
    return itemNode;
  };
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight,
    renderItemNode: renderItemNode
  };
}

exports["default"] = useTreeItem;
//# sourceMappingURL=useTreeItem.js.map
