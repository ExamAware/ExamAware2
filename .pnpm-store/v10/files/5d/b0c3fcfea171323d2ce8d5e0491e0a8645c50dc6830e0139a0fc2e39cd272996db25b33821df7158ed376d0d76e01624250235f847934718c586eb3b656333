/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { DragPosition } from './useDraggable.mjs';
import { emitEvent } from '../utils/index.mjs';
import 'lodash-es';
import '../utils/adapt.mjs';
import 'vue';
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
//# sourceMappingURL=useDragHandle.mjs.map
