/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
var log = require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-cc66acf1.js');
var index = require('../../_chunks/dep-e4d1d84d.js');
require('tdesign-icons-vue-next');
require('../../checkbox/index.js');
require('../../loading/index.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/regenerator');
var get = require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-9071ce5e.js');
require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-3a7785db.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
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
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-779f6290.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTreeScroll(state) {
  var treeState = state;
  var props = treeState.props,
    context = treeState.context,
    allNodes = treeState.allNodes,
    nodes = treeState.nodes,
    scope = treeState.scope,
    treeContentRef = treeState.treeContentRef,
    isScrolling = treeState.isScrolling;
  var scrollProps = Vue.computed(function () {
    return _objectSpread({
      rowHeight: 34
    }, props.scroll);
  });
  scope.scrollProps = scrollProps;
  var virtualScrollParams = Vue.computed(function () {
    var list = allNodes.value.filter(function (node) {
      return node.visible;
    });
    return {
      data: list,
      scroll: scrollProps.value,
      preventResizeRefresh: true
    };
  });
  var virtualConfig = index.useVirtualScrollNew(treeContentRef, virtualScrollParams);
  scope.virtualConfig = virtualConfig;
  treeState.virtualConfig = virtualConfig;
  Vue.onMounted(function () {
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
        log.log.error("Tree", "scrollToElement: one of `index` or `key` must exist.");
        return;
      }
      index = (_allNodes$value = allNodes.value) === null || _allNodes$value === void 0 ? void 0 : _allNodes$value.findIndex(function (item) {
        var _props$keys;
        return [get.get(item.data, "key"), get.get(item.data, ((_props$keys = props.keys) === null || _props$keys === void 0 ? void 0 : _props$keys["value"]) || "value")].includes(params.key);
      });
      if (index < 0) {
        log.log.error("Tree", "".concat(params.key, " does not exist in data, check `key` or `data` please."));
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

exports["default"] = useTreeScroll;
//# sourceMappingURL=useTreeScroll.js.map
