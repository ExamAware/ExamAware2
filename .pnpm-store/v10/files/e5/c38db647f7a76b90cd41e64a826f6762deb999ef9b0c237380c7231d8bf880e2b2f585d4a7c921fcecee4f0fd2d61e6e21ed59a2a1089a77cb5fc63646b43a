/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { throttle } from 'lodash-es';
import '../utils/adapt.mjs';
import { reactive } from 'vue';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
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
import '../../_chunks/dep-1dacc319.mjs';
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

var DragPosition = /* @__PURE__ */function (DragPosition2) {
  DragPosition2[DragPosition2["Before"] = -1] = "Before";
  DragPosition2[DragPosition2["Inside"] = 0] = "Inside";
  DragPosition2[DragPosition2["After"] = 1] = "After";
  return DragPosition2;
}(DragPosition || {});
function useDraggable(state) {
  var treeItemRef = state.treeItemRef;
  var dragStates = reactive({
    isDragOver: false,
    isDragging: false,
    dropPosition: 0 /* Inside */
  });
  var updateDropPosition = function updateDropPosition(dragEvent) {
    var _rootNode$getBounding;
    var rootNode = treeItemRef.value;
    if (!rootNode) return;
    var rect = rootNode === null || rootNode === void 0 || (_rootNode$getBounding = rootNode.getBoundingClientRect) === null || _rootNode$getBounding === void 0 ? void 0 : _rootNode$getBounding.call(rootNode);
    var offsetY = window.scrollY + rect.top;
    var pageY = dragEvent.pageY;
    var gapHeight = rect.height / 4;
    var diff = pageY - offsetY;
    if (diff < gapHeight) {
      dragStates.dropPosition = -1 /* Before */;
    } else if (diff < rect.height - gapHeight) {
      dragStates.dropPosition = 0 /* Inside */;
    } else {
      dragStates.dropPosition = 1 /* After */;
    }
  };
  var setDragStatus = function setDragStatus(status, dragEvent) {
    var _drag$handleDragStart, _drag$handleDragEnd, _drag$handleDragOver, _drag$handleDragLeave, _drag$handleDrop;
    var node = state.node,
      treeScope = state.treeScope;
    var drag = treeScope.drag;
    if (!drag) return;
    switch (status) {
      case "dragStart":
        dragStates.isDragging = true;
        dragStates.dropPosition = 0 /* Inside */;
        (_drag$handleDragStart = drag.handleDragStart) === null || _drag$handleDragStart === void 0 || _drag$handleDragStart.call(drag, {
          node: node,
          dragEvent: dragEvent
        });
        break;
      case "dragEnd":
        dragStates.isDragging = false;
        dragStates.isDragOver = false;
        dragStates.dropPosition = 0 /* Inside */;
        throttleUpdateDropPosition.cancel();
        (_drag$handleDragEnd = drag.handleDragEnd) === null || _drag$handleDragEnd === void 0 || _drag$handleDragEnd.call(drag, {
          node: node,
          dragEvent: dragEvent
        });
        break;
      case "dragOver":
        dragStates.isDragOver = true;
        throttleUpdateDropPosition(dragEvent);
        (_drag$handleDragOver = drag.handleDragOver) === null || _drag$handleDragOver === void 0 || _drag$handleDragOver.call(drag, {
          node: node,
          dragEvent: dragEvent
        });
        break;
      case "dragLeave":
        dragStates.isDragOver = false;
        dragStates.dropPosition = 0 /* Inside */;
        throttleUpdateDropPosition.cancel();
        (_drag$handleDragLeave = drag.handleDragLeave) === null || _drag$handleDragLeave === void 0 || _drag$handleDragLeave.call(drag, {
          node: node,
          dragEvent: dragEvent
        });
        break;
      case "drop":
        (_drag$handleDrop = drag.handleDrop) === null || _drag$handleDrop === void 0 || _drag$handleDrop.call(drag, {
          node: node,
          dropPosition: dragStates.dropPosition,
          dragEvent: dragEvent
        });
        dragStates.isDragOver = false;
        throttleUpdateDropPosition.cancel();
        break;
      default:
        break;
    }
  };
  var handleDragStart = function handleDragStart(evt) {
    var node = state.node;
    if (!node.isDraggable()) return;
    evt.stopPropagation();
    setDragStatus("dragStart", evt);
    try {
      var _evt$dataTransfer;
      (_evt$dataTransfer = evt.dataTransfer) === null || _evt$dataTransfer === void 0 || _evt$dataTransfer.setData("text/plain", "");
    } catch (e) {}
  };
  var handleDragEnd = function handleDragEnd(evt) {
    var node = state.node;
    if (!node.isDraggable()) return;
    evt.stopPropagation();
    setDragStatus("dragEnd", evt);
  };
  var handleDragOver = function handleDragOver(evt) {
    var node = state.node;
    if (!node.isDraggable()) return;
    evt.stopPropagation();
    evt.preventDefault();
    setDragStatus("dragOver", evt);
  };
  var handleDragLeave = function handleDragLeave(evt) {
    var node = state.node;
    if (!node.isDraggable()) return;
    evt.stopPropagation();
    setDragStatus("dragLeave", evt);
  };
  var handleDrop = function handleDrop(evt) {
    var node = state.node;
    if (!node.isDraggable()) return;
    evt.stopPropagation();
    evt.preventDefault();
    setDragStatus("drop", evt);
  };
  var throttleUpdateDropPosition = throttle(function (dragEvent) {
    updateDropPosition(dragEvent);
  });
  return {
    dragStates: dragStates,
    handleDragStart: handleDragStart,
    handleDragEnd: handleDragEnd,
    handleDragOver: handleDragOver,
    handleDragLeave: handleDragLeave,
    handleDrop: handleDrop
  };
}

export { DragPosition, useDraggable as default };
//# sourceMappingURL=useDraggable.mjs.map
