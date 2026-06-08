/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { getMark, emitEvent } from '../utils/index.js';
import useTreeAction from './useTreeAction.js';
import '@babel/runtime/helpers/defineProperty';
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
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';

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
//# sourceMappingURL=useTreeEvents.js.map
