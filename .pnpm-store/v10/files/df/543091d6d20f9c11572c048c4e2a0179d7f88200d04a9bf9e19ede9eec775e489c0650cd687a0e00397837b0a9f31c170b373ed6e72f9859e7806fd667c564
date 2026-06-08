/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { DragPosition } from './useDraggable.js';
import { emitEvent } from '../utils/index.js';
import 'lodash-es';
import 'vue';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/defineProperty';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
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
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';

function useDragHandle(state) {
  var props = state.props,
    context = state.context,
    scope = state.scope,
    store = state.store;
  var dragNode = null;
  var handleDragStart = function handleDragStart(state2) {
    var dragEvent = state2.dragEvent,
      node = state2.node;
    dragNode = node;
    var ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-start", ctx);
  };
  var handleDragEnd = function handleDragEnd(state2) {
    var dragEvent = state2.dragEvent,
      node = state2.node;
    dragNode = node;
    var ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-end", ctx);
  };
  var handleDragOver = function handleDragOver(state2) {
    var dragEvent = state2.dragEvent,
      node = state2.node;
    var ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-over", ctx);
  };
  var handleDragLeave = function handleDragLeave(state2) {
    var dragEvent = state2.dragEvent,
      node = state2.node;
    var ctx = {
      node: node.getModel(),
      e: dragEvent
    };
    emitEvent(props, context, "drag-leave", ctx);
  };
  var handleDrop = function handleDrop(state2) {
    var _props$allowDrop;
    var dragEvent = state2.dragEvent,
      node = state2.node,
      dropPosition = state2.dropPosition;
    if (node.value === dragNode.value || node.getParents().some(function (_node) {
      return _node.value === dragNode.value;
    })) return;
    var ctx = {
      dropNode: node.getModel(),
      dragNode: dragNode.getModel(),
      dropPosition: dropPosition,
      e: dragEvent
    };
    if (((_props$allowDrop = props.allowDrop) === null || _props$allowDrop === void 0 ? void 0 : _props$allowDrop.call(props, ctx)) === false) return;
    var nodes = store.getNodes();
    nodes.some(function (_node) {
      if (_node.value === node.value) {
        if (dropPosition === DragPosition.Inside) {
          dragNode.appendTo(store, _node);
        } else if (dropPosition === DragPosition.Before) {
          node.insertBefore(dragNode);
        } else {
          node.insertAfter(dragNode);
        }
        return true;
      }
      return false;
    });
    emitEvent(props, context, "drop", ctx);
  };
  var drag = {
    handleDragStart: handleDragStart,
    handleDragEnd: handleDragEnd,
    handleDragOver: handleDragOver,
    handleDragLeave: handleDragLeave,
    handleDrop: handleDrop
  };
  scope.drag = drag;
  return {
    drag: drag
  };
}

export { useDragHandle as default };
//# sourceMappingURL=useDragHandle.js.map
