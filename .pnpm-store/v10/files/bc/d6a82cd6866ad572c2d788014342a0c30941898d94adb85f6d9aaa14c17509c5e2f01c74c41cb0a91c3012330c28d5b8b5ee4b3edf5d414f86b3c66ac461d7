/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed } from 'vue';
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
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

function formatCSSUnit(unit) {
  if (!unit) return unit;
  return isNaN(Number(unit)) ? unit : "".concat(unit, "px");
}
function useTreeStyles(state) {
  var props = state.props;
  var componentName = usePrefixClass("tree").value;
  var classPrefix = usePrefixClass().value;
  var virtualConfig = state.virtualConfig,
    isScrolling = state.isScrolling,
    refProps = state.refProps;
  var height = refProps.height,
    maxHeight = refProps.maxHeight;
  var treeClasses = computed(function () {
    var list = [componentName];
    var disabled = props.disabled,
      hover = props.hover,
      transition = props.transition,
      checkable = props.checkable,
      draggable = props.draggable,
      expandOnClickNode = props.expandOnClickNode,
      scroll = props.scroll;
    if (disabled) {
      list.push("".concat(classPrefix, "-is-disabled"));
    }
    if (hover) {
      list.push("".concat(componentName, "--hoverable"));
    }
    if (checkable) {
      list.push("".concat(componentName, "--checkable"));
    }
    if (draggable) {
      list.push("".concat(componentName, "--draggable"));
    }
    if (transition) {
      list.push("".concat(componentName, "--transition"));
    }
    if (expandOnClickNode) {
      list.push("".concat(componentName, "--block-node"));
    }
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    if (isVirtual) {
      list.push("".concat(componentName, "__vscroll"));
      if (isScrolling.value) {
        list.push("".concat(componentName, "--scrolling"));
      }
    } else if (scroll && scroll.type === "lazy") {
      list.push("".concat(componentName, "__lazyload"));
    }
    return list;
  });
  var treeContentStyles = computed(function () {
    return {
      height: formatCSSUnit(height.value),
      maxHeight: formatCSSUnit(maxHeight.value),
      overflowY: formatCSSUnit(height.value) || formatCSSUnit(maxHeight.value) ? "auto" : void 0
    };
  });
  var scrollStyles = computed(function () {
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    var translateY = isVirtual ? virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.translateY.value : 0;
    var transform = "translateY(".concat(translateY, "px)");
    var posStyle = {
      transform: transform,
      "-ms-transform": transform,
      "-moz-transform": transform,
      "-webkit-transform": transform
    };
    return posStyle;
  });
  var cursorStyles = computed(function () {
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    var translateY = isVirtual ? virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.translateY.value : 0;
    var translate = "translate(0, ".concat(translateY, "px)");
    return {
      transform: translate,
      "-ms-transform": translate,
      "-moz-transform": translate,
      "-webkit-transform": translate
    };
  });
  return {
    treeClasses: treeClasses,
    treeContentStyles: treeContentStyles,
    scrollStyles: scrollStyles,
    cursorStyles: cursorStyles
  };
}

export { useTreeStyles as default, formatCSSUnit };
//# sourceMappingURL=useTreeStyles.js.map
