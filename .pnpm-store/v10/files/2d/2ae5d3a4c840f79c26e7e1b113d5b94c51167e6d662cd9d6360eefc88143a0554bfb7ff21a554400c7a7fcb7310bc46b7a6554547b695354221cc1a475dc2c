/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { reactive, onMounted, onUpdated, createVNode } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import '../utils/adapt.mjs';
import useItemEvents from './useItemEvents.mjs';
import useRenderIcon from './useRenderIcon.mjs';
import useRenderLabel from './useRenderLabel.mjs';
import useRenderLine from './useRenderLine.mjs';
import useRenderOperations from './useRenderOperations.mjs';
import useDraggable from './useDraggable.mjs';
import { u as usePrefixClass, y as useLazyLoad } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
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
import '../utils/index.mjs';

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
//# sourceMappingURL=useTreeItem.mjs.map
