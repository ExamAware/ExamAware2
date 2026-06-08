/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { throttle } from 'lodash-es';
import { reactive } from 'vue';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-47b13687.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../_chunks/dep-30c631d1.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-664b8b22.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

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
//# sourceMappingURL=useDraggable.js.map
