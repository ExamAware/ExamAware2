/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
var throttle = require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
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
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');

var DragPosition = /* @__PURE__ */function (DragPosition2) {
  DragPosition2[DragPosition2["Before"] = -1] = "Before";
  DragPosition2[DragPosition2["Inside"] = 0] = "Inside";
  DragPosition2[DragPosition2["After"] = 1] = "After";
  return DragPosition2;
}(DragPosition || {});
function useDraggable(state) {
  var treeItemRef = state.treeItemRef;
  var dragStates = Vue.reactive({
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
  var throttleUpdateDropPosition = throttle.throttle(function (dragEvent) {
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

exports.DragPosition = DragPosition;
exports["default"] = useDraggable;
//# sourceMappingURL=useDraggable.js.map
