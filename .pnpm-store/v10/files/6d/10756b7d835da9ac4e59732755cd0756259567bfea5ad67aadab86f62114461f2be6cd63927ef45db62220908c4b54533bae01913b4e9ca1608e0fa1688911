/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { reactive, onMounted, onUpdated, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { u as useLazyLoad } from '../../_chunks/dep-1da4c51c.js';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import useItemEvents from './useItemEvents.js';
import useRenderIcon from './useRenderIcon.js';
import useRenderLabel from './useRenderLabel.js';
import useRenderLine from './useRenderLine.js';
import useRenderOperations from './useRenderOperations.js';
import useDraggable from './useDraggable.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-6264b0a7.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../_chunks/dep-3a7a2ef1.js';
import '../utils/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeItem(state) {
  var treeScope = state.treeScope,
    treeItemRef = state.treeItemRef;
  var virtualConfig = treeScope.virtualConfig,
    treeContentRef = treeScope.treeContentRef,
    scrollProps = treeScope.scrollProps;
  var classPrefix = usePrefixClass().value;
  var componentName = usePrefixClass("tree").value;
  var _useItemEvents = useItemEvents(state),
    handleClick = _useItemEvents.handleClick;
  var _useRenderIcon = useRenderIcon(state),
    renderIcon = _useRenderIcon.renderIcon;
  var _useRenderLabel = useRenderLabel(state),
    renderLabel = _useRenderLabel.renderLabel;
  var _useRenderLine = useRenderLine(state),
    renderLine = _useRenderLine.renderLine;
  var _useRenderOperations = useRenderOperations(state),
    renderOperations = _useRenderOperations.renderOperations;
  var _useDraggable = useDraggable(state),
    dragStates = _useDraggable.dragStates,
    handleDragStart = _useDraggable.handleDragStart,
    handleDragEnd = _useDraggable.handleDragEnd,
    handleDragOver = _useDraggable.handleDragOver,
    handleDragLeave = _useDraggable.handleDragLeave,
    handleDrop = _useDraggable.handleDrop;
  var _useLazyLoad = useLazyLoad(treeContentRef, treeItemRef, reactive(_objectSpread({}, scrollProps === null || scrollProps === void 0 ? void 0 : scrollProps.value))),
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
  onMounted(function () {
    tryNotifyVirtualScrollRowUpdate();
  });
  onUpdated(function () {
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
    list.push(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentName, "__item--open"), node.expanded), "".concat(classPrefix, "-is-active"), node.isActivable() ? node.actived : false), "".concat(classPrefix, "-is-disabled"), node.isDisabled()));
    list.push(_defineProperty({}, "".concat(componentName, "__item--draggable"), !node.isDisabled() && node.isDraggable()));
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
    list.push(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentName, "__item--dragging"), isDragging), "".concat(componentName, "__item--tip-top"), isDragOver && dropPosition < 0), "".concat(componentName, "__item--tip-bottom"), isDragOver && dropPosition > 0), "".concat(componentName, "__item--tip-highlight"), !isDragging && isDragOver && dropPosition === 0));
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
    var itemNode = createVNode("div", {
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
    }, [hasLazyLoadHolder.value ? [createVNode("div", null, null)] : renderItem(h)]);
    return itemNode;
  };
  return {
    hasLazyLoadHolder: hasLazyLoadHolder,
    tRowHeight: tRowHeight,
    renderItemNode: renderItemNode
  };
}

export { useTreeItem as default };
//# sourceMappingURL=useTreeItem.js.map
