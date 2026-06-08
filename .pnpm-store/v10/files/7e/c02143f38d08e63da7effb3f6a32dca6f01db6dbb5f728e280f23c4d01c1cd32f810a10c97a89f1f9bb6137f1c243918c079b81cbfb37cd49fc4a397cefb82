/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import '../utils/adapt.mjs';
import { u as usePrefixClass } from '../../_chunks/dep-7673347f.mjs';
import { computed } from 'vue';
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
//# sourceMappingURL=useTreeStyles.mjs.map
