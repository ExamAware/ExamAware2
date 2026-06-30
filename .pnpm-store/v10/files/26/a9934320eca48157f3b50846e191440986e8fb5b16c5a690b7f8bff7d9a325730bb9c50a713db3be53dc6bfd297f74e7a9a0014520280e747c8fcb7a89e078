/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-a58d79da.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('../../loading/icon/gradient.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');

function formatCSSUnit(unit) {
  if (!unit) return unit;
  return isNaN(Number(unit)) ? unit : "".concat(unit, "px");
}
function useTreeStyles(state) {
  var props = state.props;
  var componentName = index.usePrefixClass("tree").value;
  var classPrefix = index.usePrefixClass().value;
  var virtualConfig = state.virtualConfig,
    isScrolling = state.isScrolling,
    refProps = state.refProps;
  var height = refProps.height,
    maxHeight = refProps.maxHeight;
  var treeClasses = Vue.computed(function () {
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
  var treeContentStyles = Vue.computed(function () {
    return {
      height: formatCSSUnit(height.value),
      maxHeight: formatCSSUnit(maxHeight.value),
      overflowY: formatCSSUnit(height.value) || formatCSSUnit(maxHeight.value) ? "auto" : void 0
    };
  });
  var scrollStyles = Vue.computed(function () {
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
  var cursorStyles = Vue.computed(function () {
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

exports["default"] = useTreeStyles;
exports.formatCSSUnit = formatCSSUnit;
//# sourceMappingURL=useTreeStyles.js.map
