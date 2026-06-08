/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import '../utils/adapt.mjs';
import { getNode, pathMatchClass } from '../utils/index.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'vue';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';
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

function useTreeAction(state) {
  var treeState = state;
  var store = treeState.store;
  var componentName = usePrefixClass("tree").value;
  var _state$vmValue = _slicedToArray(state.vmValue, 2),
    tValue = _state$vmValue[0],
    setTValue = _state$vmValue[1];
  var _state$vmActived = _slicedToArray(state.vmActived, 2),
    tActived = _state$vmActived[0],
    setTActived = _state$vmActived[1];
  var _state$vmExpanded = _slicedToArray(state.vmExpanded, 2),
    tExpanded = _state$vmExpanded[0],
    setTExpanded = _state$vmExpanded[1];
  var setExpanded = function setExpanded(item, isExpanded) {
    var node = getNode(store, item);
    var mouseEvent = treeState.mouseEvent;
    var evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
      var target = mouseEvent.target;
      var currentTarget = mouseEvent.currentTarget;
      if (pathMatchClass("".concat(componentName, "__icon"), target, currentTarget)) {
        evtCtx.trigger = "icon-click";
      }
    }
    var expanded = node.setExpanded(isExpanded, {
      directly: true
    });
    setTExpanded(expanded, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceExpanded(tExpanded.value || []);
    }
    return expanded;
  };
  var toggleExpanded = function toggleExpanded(item) {
    var node = getNode(store, item);
    if (!node.children) return;
    return setExpanded(node, !node.isExpanded());
  };
  var setActived = function setActived(item, isActived) {
    var node = getNode(store, item);
    var mouseEvent = treeState.mouseEvent;
    var evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
    }
    var actived = node.setActived(isActived, {
      isAction: evtCtx.trigger === "node-click",
      directly: true
    });
    setTActived(actived, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceActived(tActived.value || []);
    }
    return actived;
  };
  var toggleActived = function toggleActived(item) {
    var node = getNode(store, item);
    return setActived(node, !node.isActived());
  };
  var setChecked = function setChecked(item, isChecked, ctx) {
    var node = getNode(store, item);
    var mouseEvent = ctx === null || ctx === void 0 ? void 0 : ctx.e;
    var evtCtx = {
      node: node.getModel(),
      e: mouseEvent,
      trigger: "setItem"
    };
    if (mouseEvent) {
      evtCtx.trigger = "node-click";
    }
    var checked = node.setChecked(isChecked, {
      isAction: evtCtx.trigger === "node-click",
      directly: true
    });
    setTValue(checked, evtCtx);
    if (evtCtx.trigger !== "setItem") {
      store.replaceChecked(tValue.value || []);
    }
    return checked;
  };
  var toggleChecked = function toggleChecked(item, ctx) {
    var node = getNode(store, item);
    if (node.isIndeterminate()) {
      var expectState = node.hasEnableUnCheckedChild();
      return setChecked(node, expectState, ctx);
    }
    return setChecked(node, !node.isChecked(), ctx);
  };
  return {
    setExpanded: setExpanded,
    toggleExpanded: toggleExpanded,
    setActived: setActived,
    toggleActived: toggleActived,
    setChecked: setChecked,
    toggleChecked: toggleChecked
  };
}

export { useTreeAction as default };
//# sourceMappingURL=useTreeAction.mjs.map
