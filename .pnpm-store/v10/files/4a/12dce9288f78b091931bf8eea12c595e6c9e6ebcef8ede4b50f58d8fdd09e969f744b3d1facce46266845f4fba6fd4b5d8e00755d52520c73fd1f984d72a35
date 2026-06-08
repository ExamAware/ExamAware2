/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, onMounted, onBeforeUnmount } from 'vue';
import { G as useVirtualScroll } from '../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
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

var usePanelVirtualScroll = function usePanelVirtualScroll(props) {
  var _props$scroll3, _props$scroll4, _props$scroll5, _props$scroll6, _props$scroll7;
  var isVirtual = computed(function () {
    var _props$scroll, _props$options$value, _props$scroll2;
    return ((_props$scroll = props.scroll) === null || _props$scroll === void 0 ? void 0 : _props$scroll.type) === "virtual" && ((_props$options$value = props.options.value) === null || _props$options$value === void 0 ? void 0 : _props$options$value.length) > (((_props$scroll2 = props.scroll) === null || _props$scroll2 === void 0 ? void 0 : _props$scroll2.threshold) || 100);
  });
  var _ref = ((_props$scroll3 = props.scroll) === null || _props$scroll3 === void 0 ? void 0 : _props$scroll3.type) === "virtual" ? useVirtualScroll({
      container: props.popupContentRef,
      data: props.options,
      fixedHeight: ((_props$scroll4 = props.scroll) === null || _props$scroll4 === void 0 ? void 0 : _props$scroll4.isFixedRowHeight) || false,
      lineHeight: ((_props$scroll5 = props.scroll) === null || _props$scroll5 === void 0 ? void 0 : _props$scroll5.rowHeight) || 28,
      bufferSize: ((_props$scroll6 = props.scroll) === null || _props$scroll6 === void 0 ? void 0 : _props$scroll6.bufferSize) || 20,
      threshold: ((_props$scroll7 = props.scroll) === null || _props$scroll7 === void 0 ? void 0 : _props$scroll7.threshold) || 100
    }) : {},
    _ref$trs = _ref.trs,
    trs = _ref$trs === void 0 ? null : _ref$trs,
    _ref$visibleData = _ref.visibleData,
    visibleData = _ref$visibleData === void 0 ? null : _ref$visibleData,
    _ref$handleScroll = _ref.handleScroll,
    handleVirtualScroll = _ref$handleScroll === void 0 ? null : _ref$handleScroll,
    _ref$scrollHeight = _ref.scrollHeight,
    scrollHeight = _ref$scrollHeight === void 0 ? null : _ref$scrollHeight,
    _ref$translateY = _ref.translateY,
    translateY = _ref$translateY === void 0 ? null : _ref$translateY,
    _ref$handleRowMounted = _ref.handleRowMounted,
    handleRowMounted = _ref$handleRowMounted === void 0 ? null : _ref$handleRowMounted;
  var lastScrollY = -1;
  var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
    if (!isVirtual.value) {
      return;
    }
    var target = e.target;
    var top = target.scrollTop;
    if (Math.abs(lastScrollY - top) > 5) {
      handleVirtualScroll();
      lastScrollY = top;
    } else {
      lastScrollY = -1;
    }
  };
  onMounted(function () {
    var _props$popupContentRe;
    (_props$popupContentRe = props.popupContentRef.value) === null || _props$popupContentRe === void 0 || _props$popupContentRe.addEventListener("scroll", onInnerVirtualScroll);
  });
  onBeforeUnmount(function () {
    var _props$popupContentRe2;
    (_props$popupContentRe2 = props.popupContentRef.value) === null || _props$popupContentRe2 === void 0 || _props$popupContentRe2.removeEventListener("scroll", onInnerVirtualScroll);
  });
  var cursorStyle = computed(function () {
    return {
      position: "absolute",
      width: "1px",
      height: "1px",
      transition: "transform 0.2s",
      transform: "translate(0, ".concat(scrollHeight.value, "px)"),
      "-ms-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-moz-transform": "translate(0, ".concat(scrollHeight.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(scrollHeight.value, "px)")
    };
  });
  var panelStyle = computed(function () {
    return {
      transform: "translate(0, ".concat(translateY.value, "px)"),
      "-ms-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-moz-transform": "translate(0, ".concat(translateY.value, "px)"),
      "-webkit-transform": "translate(0, ".concat(translateY.value, "px)")
    };
  });
  return {
    trs: trs,
    scrollHeight: scrollHeight,
    translateY: translateY,
    visibleData: visibleData,
    handleRowMounted: handleRowMounted,
    isVirtual: isVirtual,
    cursorStyle: cursorStyle,
    panelStyle: panelStyle
  };
};

export { usePanelVirtualScroll };
//# sourceMappingURL=usePanelVirtualScroll.mjs.map
