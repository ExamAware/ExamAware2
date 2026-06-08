/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import '../utils/adapt.mjs';
import { get } from 'lodash-es';
import '../../_chunks/dep-6d2705e1.mjs';
import { x as useVirtualScrollNew } from '../../_chunks/dep-7673347f.mjs';
import { computed, onMounted } from 'vue';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeScroll(state) {
  var treeState = state;
  var props = treeState.props,
    context = treeState.context,
    allNodes = treeState.allNodes,
    nodes = treeState.nodes,
    scope = treeState.scope,
    treeContentRef = treeState.treeContentRef,
    isScrolling = treeState.isScrolling;
  var scrollProps = computed(function () {
    return _objectSpread({
      rowHeight: 34
    }, props.scroll);
  });
  scope.scrollProps = scrollProps;
  var virtualScrollParams = computed(function () {
    var list = allNodes.value.filter(function (node) {
      return node.visible;
    });
    return {
      data: list,
      scroll: scrollProps.value,
      preventResizeRefresh: true
    };
  });
  var virtualConfig = useVirtualScrollNew(treeContentRef, virtualScrollParams);
  scope.virtualConfig = virtualConfig;
  treeState.virtualConfig = virtualConfig;
  onMounted(function () {
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    if (isVirtual) {
      virtualConfig.handleScroll();
    }
  });
  var emitScrollEvent = function emitScrollEvent(e) {
    var _props$onScroll;
    (_props$onScroll = props.onScroll) === null || _props$onScroll === void 0 || _props$onScroll.call(props, {
      e: e
    });
    context.emit("scroll", {
      e: e
    });
  };
  var scrollStopTimer = null;
  var setScrolling = function setScrolling() {
    isScrolling.value = true;
    if (scrollStopTimer) {
      clearTimeout(scrollStopTimer);
      scrollStopTimer = null;
    }
    scrollStopTimer = setTimeout(function () {
      scrollStopTimer = null;
      isScrolling.value = false;
    }, 100);
  };
  var lastScrollY = 0;
  var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
    setScrolling();
    var isVirtual = virtualConfig === null || virtualConfig === void 0 ? void 0 : virtualConfig.isVirtualScroll.value;
    var target = e.target || e.srcElement;
    var top = target.scrollTop;
    if (lastScrollY !== top) {
      if (isVirtual) {
        virtualConfig.handleScroll();
        nodes.value = virtualConfig.visibleData.value;
      }
    } else {
      lastScrollY = 0;
    }
    lastScrollY = top;
    emitScrollEvent(e);
  };
  var handleScrollTo = function handleScrollTo(params) {
    var index = params.index;
    if (!index && index !== 0) {
      var _allNodes$value;
      if (!params.key) {
        log.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
        return;
      }
      index = (_allNodes$value = allNodes.value) === null || _allNodes$value === void 0 ? void 0 : _allNodes$value.findIndex(function (item) {
        var _props$keys;
        return [get(item.data, "key"), get(item.data, ((_props$keys = props.keys) === null || _props$keys === void 0 ? void 0 : _props$keys["value"]) || "value")].includes(params.key);
      });
      if (index < 0) {
        log.error("Tree", "".concat(params.key, " does not exist in data, check `key` or `data` please."));
        return;
      }
    }
    virtualConfig.scrollToElement(_objectSpread(_objectSpread({}, params), {}, {
      index: index - 1
    }));
  };
  return {
    treeContentRef: treeContentRef,
    onInnerVirtualScroll: onInnerVirtualScroll,
    virtualConfig: virtualConfig,
    scrollToElement: handleScrollTo
  };
}

export { useTreeScroll as default };
//# sourceMappingURL=useTreeScroll.mjs.map
