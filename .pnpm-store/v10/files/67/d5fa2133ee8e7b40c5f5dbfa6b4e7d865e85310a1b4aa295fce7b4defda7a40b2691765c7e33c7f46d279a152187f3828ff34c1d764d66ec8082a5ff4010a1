/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import { getNode, pathMatchClass } from '../utils/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
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
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
//# sourceMappingURL=useTreeAction.js.map
