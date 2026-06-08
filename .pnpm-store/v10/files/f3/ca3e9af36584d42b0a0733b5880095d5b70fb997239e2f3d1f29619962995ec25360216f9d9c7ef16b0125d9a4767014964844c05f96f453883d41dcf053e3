/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import '../utils/adapt.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import 'vue';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
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
//# sourceMappingURL=useItemEvents.mjs.map
