/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
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

function useItemEvents(state) {
  var context = state.context;
  var classPrefix = usePrefixClass().value;
  var handleChange = function handleChange(_, ctx) {
    var node = state.node;
    var event = new Event("change");
    var evtContext = {
      event: event,
      node: node
    };
    context.emit("change", evtContext, ctx);
  };
  var clicked = false;
  var handleClick = function handleClick(evt) {
    var _srcTarget$className, _srcTarget$className$;
    var node = state.node,
      treeScope = state.treeScope;
    var _treeScope$treeProps = treeScope.treeProps,
      treeProps = _treeScope$treeProps === void 0 ? {} : _treeScope$treeProps;
    var expandOnClickNode = treeProps.expandOnClickNode;
    var srcTarget = evt.target;
    var isBranchTrigger = node.children && expandOnClickNode && (srcTarget.className === "".concat(classPrefix, "-checkbox__input") || srcTarget.tagName.toLowerCase() === "input");
    if (clicked || isBranchTrigger) return;
    clicked = true;
    setTimeout(function () {
      clicked = false;
    });
    if (expandOnClickNode && node.children && ((_srcTarget$className = srcTarget.className) === null || _srcTarget$className === void 0 || (_srcTarget$className$ = _srcTarget$className.indexOf) === null || _srcTarget$className$ === void 0 ? void 0 : _srcTarget$className$.call(_srcTarget$className, "".concat(classPrefix, "-tree__label"))) !== -1) evt.preventDefault();
    var evtContext = {
      mouseEvent: evt,
      event: evt,
      node: node,
      path: node.getPath()
    };
    context.emit("click", evtContext);
  };
  return {
    handleChange: handleChange,
    handleClick: handleClick
  };
}

export { useItemEvents as default };
//# sourceMappingURL=useItemEvents.js.map
