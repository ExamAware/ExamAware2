/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var loading_index = require('../loading/index.js');
var list_listItem = require('./list-item.js');
var list_props = require('./props.js');
var list_consts_index = require('./consts/index.js');
var list_hooks_useListItems = require('./hooks/useListItems.js');
var list_hooks_useListVirtualScroll = require('./hooks/useListVirtualScroll.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var omit = require('../_chunks/dep-ace0b57c.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../loading/props.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('./list-item-props.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-e4d1d84d.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-9071ce5e.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _List = Vue.defineComponent({
  name: "TList",
  props: list_props["default"],
  setup: function setup(props2, _ref) {
    var expose = _ref.expose;
    var listRef = Vue.ref();
    var _useConfig = configProvider_hooks_useConfig.useConfig("list"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = index.usePrefixClass("list");
    var _useCommonClassName = index$1.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = index$2.useTNodeJSX();
    var _useListItems = list_hooks_useListItems.useListItems(),
      listItems = _useListItems.listItems;
    var _useListVirtualScroll = list_hooks_useListVirtualScroll.useListVirtualScroll(props2.scroll, listRef, listItems),
      virtualConfig = _useListVirtualScroll.virtualConfig,
      cursorStyle = _useListVirtualScroll.cursorStyle,
      listStyle = _useListVirtualScroll.listStyle,
      isVirtualScroll = _useListVirtualScroll.isVirtualScroll,
      onInnerVirtualScroll = _useListVirtualScroll.onInnerVirtualScroll,
      scrollToElement = _useListVirtualScroll.scrollToElement;
    var listClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), SIZE.value[props2.size], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--split"), props2.split), "".concat(COMPONENT_NAME.value, "--stripe"), props2.stripe), "".concat(COMPONENT_NAME.value, "--vertical-action"), props2.layout === "vertical")];
    });
    var renderContent = function renderContent() {
      var propsHeaderContent = renderTNodeJSX("header");
      var propsFooterContent = renderTNodeJSX("footer");
      var isVirtualScroll2 = virtualConfig.isVirtualScroll.value;
      return Vue.createVNode(Vue.Fragment, null, [propsHeaderContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [propsHeaderContent]) : null, isVirtualScroll2 ? Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
        "style": cursorStyle.value
      }, null), Vue.createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": listStyle.value
      }, [virtualConfig.visibleData.value.map(function (item) {
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(list_listItem["default"], omit.omit(item, "slots"), item.slots)]);
      })])]) : Vue.createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [renderTNodeJSX("default")]), propsFooterContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__footer")
      }, [propsFooterContent]) : null]);
    };
    var handleScroll = function handleScroll(e) {
      var _props2$onScroll;
      var listElement = e.target;
      var scrollTop = listElement.scrollTop,
        scrollHeight = listElement.scrollHeight,
        clientHeight = listElement.clientHeight;
      if (isVirtualScroll.value) onInnerVirtualScroll(e);
      (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 || _props2$onScroll.call(props2, {
        e: e,
        scrollTop: scrollTop,
        scrollBottom: scrollHeight - clientHeight - scrollTop
      });
    };
    var loadingClass = Vue.computed(function () {
      return isString.isString(props2.asyncLoading) && ["loading", "load-more"].includes(props2.asyncLoading) ? "".concat(COMPONENT_NAME.value, "__load ").concat(COMPONENT_NAME.value, "__load--").concat(props2.asyncLoading) : "".concat(COMPONENT_NAME.value, "__load");
    });
    var renderLoading = function renderLoading() {
      if (props2.asyncLoading && isString.isString(props2.asyncLoading)) {
        if (props2.asyncLoading === list_consts_index.LOADING) {
          return Vue.createVNode("div", null, [Vue.createVNode(loading_index.Loading, null, null), Vue.createVNode("span", null, [globalConfig.value.loadingText])]);
        }
        if (props2.asyncLoading === list_consts_index.LOAD_MORE) {
          return Vue.createVNode("span", null, [globalConfig.value.loadingMoreText]);
        }
      }
      return renderTNodeJSX("asyncLoading");
    };
    var handleLoadMore = function handleLoadMore(e) {
      var _props2$onLoadMore;
      if (isString.isString(props2.asyncLoading) && props2.asyncLoading !== list_consts_index.LOAD_MORE) return;
      (_props2$onLoadMore = props2.onLoadMore) === null || _props2$onLoadMore === void 0 || _props2$onLoadMore.call(props2, {
        e: e
      });
    };
    expose({
      scrollTo: scrollToElement
    });
    return function () {
      var listContent = [renderContent(), Vue.createVNode("div", {
        "class": loadingClass.value,
        "onClick": handleLoadMore
      }, [renderLoading()])];
      return Vue.createVNode("div", {
        "class": listClass.value,
        "onScroll": handleScroll,
        "ref": listRef,
        "style": isVirtualScroll.value ? "position:relative" : void 0
      }, [listContent]);
    };
  }
});

exports["default"] = _List;
//# sourceMappingURL=list.js.map
