/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getMark, emitEvent } from '../utils/index.mjs';
import useTreeAction from './useTreeAction.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../utils/adapt.mjs';
import 'vue';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
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

function useTreeEvents(state) {
  var treeState = state;
  var props = treeState.props,
    context = treeState.context;
  var _useTreeAction = useTreeAction(state),
    toggleExpanded = _useTreeAction.toggleExpanded,
    toggleActived = _useTreeAction.toggleActived,
    toggleChecked = _useTreeAction.toggleChecked;
  var handleClick = function handleClick(evtState) {
    var mouseEvent = evtState.mouseEvent,
      event = evtState.event,
      node = evtState.node;
    if (!node || !mouseEvent) return;
    treeState.mouseEvent = mouseEvent;
    var shouldExpand = props.expandOnClickNode;
    var shouldActive = !props.disabled && !node.disabled && node.isActivable();
    var isRightClick = false;
    ["trigger", "ignore"].forEach(function (markName) {
      var mark = getMark(markName, event.target, event.currentTarget);
      var markValue = (mark === null || mark === void 0 ? void 0 : mark.value) || "";
      if (markValue.indexOf("expand") >= 0) {
        if (markName === "trigger") {
          shouldExpand = true;
          isRightClick = true;
        } else if (markName === "ignore") {
          shouldExpand = false;
        }
      }
      if (markValue.indexOf("active") >= 0) {
        if (markName === "ignore") {
          shouldActive = false;
        }
      }
    });
    if (shouldExpand) {
      toggleExpanded(node);
      if (isRightClick) return;
    }
    if (shouldActive) {
      toggleActived(node);
    }
    var evtCtx = {
      node: node.getModel(),
      e: mouseEvent
    };
    emitEvent(props, context, "click", evtCtx);
    treeState.mouseEvent = null;
  };
  var handleChange = function handleChange(evtState, ctx) {
    var disabled = props.disabled;
    var node = evtState.node;
    if (!node || disabled || node.disabled || !node.isCheckable()) {
      return;
    }
    toggleChecked(node, ctx);
  };
  return {
    handleChange: handleChange,
    handleClick: handleClick
  };
}

export { useTreeEvents as default };
//# sourceMappingURL=useTreeEvents.mjs.map
