/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed, onMounted } from 'vue';
import { get } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import { l as log } from '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useVirtualScrollNew } from '../../_chunks/dep-90df3fa4.js';
import 'tdesign-icons-vue-next';
import '../../checkbox/index.js';
import '../../loading/index.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/regenerator';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-80a77612.js';
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
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../loading/props.js';

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
//# sourceMappingURL=useTreeScroll.js.map
