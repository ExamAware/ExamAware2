/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isString, omit } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { Loading } from '../loading/index.js';
import _ListItem from './list-item.js';
import props from './props.js';
import { LOADING, LOAD_MORE } from './consts/index.js';
import { useListItems } from './hooks/useListItems.js';
import { useListVirtualScroll } from './hooks/useListVirtualScroll.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import './list-item-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-90df3fa4.js';
import '../_chunks/dep-80a77612.js';

var _List = defineComponent({
  name: "TList",
  props: props,
  setup: function setup(props2, _ref) {
    var expose = _ref.expose;
    var listRef = ref();
    var _useConfig = useConfig("list"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("list");
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderTNodeJSX = useTNodeJSX();
    var _useListItems = useListItems(),
      listItems = _useListItems.listItems;
    var _useListVirtualScroll = useListVirtualScroll(props2.scroll, listRef, listItems),
      virtualConfig = _useListVirtualScroll.virtualConfig,
      cursorStyle = _useListVirtualScroll.cursorStyle,
      listStyle = _useListVirtualScroll.listStyle,
      isVirtualScroll = _useListVirtualScroll.isVirtualScroll,
      onInnerVirtualScroll = _useListVirtualScroll.onInnerVirtualScroll,
      scrollToElement = _useListVirtualScroll.scrollToElement;
    var listClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), SIZE.value[props2.size], _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--split"), props2.split), "".concat(COMPONENT_NAME.value, "--stripe"), props2.stripe), "".concat(COMPONENT_NAME.value, "--vertical-action"), props2.layout === "vertical")];
    });
    var renderContent = function renderContent() {
      var propsHeaderContent = renderTNodeJSX("header");
      var propsFooterContent = renderTNodeJSX("footer");
      var isVirtualScroll2 = virtualConfig.isVirtualScroll.value;
      return createVNode(Fragment, null, [propsHeaderContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [propsHeaderContent]) : null, isVirtualScroll2 ? createVNode(Fragment, null, [createVNode("div", {
        "style": cursorStyle.value
      }, null), createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": listStyle.value
      }, [virtualConfig.visibleData.value.map(function (item) {
        return createVNode(Fragment, null, [createVNode(_ListItem, omit(item, "slots"), item.slots)]);
      })])]) : createVNode("ul", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [renderTNodeJSX("default")]), propsFooterContent ? createVNode("div", {
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
    var loadingClass = computed(function () {
      return isString(props2.asyncLoading) && ["loading", "load-more"].includes(props2.asyncLoading) ? "".concat(COMPONENT_NAME.value, "__load ").concat(COMPONENT_NAME.value, "__load--").concat(props2.asyncLoading) : "".concat(COMPONENT_NAME.value, "__load");
    });
    var renderLoading = function renderLoading() {
      if (props2.asyncLoading && isString(props2.asyncLoading)) {
        if (props2.asyncLoading === LOADING) {
          return createVNode("div", null, [createVNode(Loading, null, null), createVNode("span", null, [globalConfig.value.loadingText])]);
        }
        if (props2.asyncLoading === LOAD_MORE) {
          return createVNode("span", null, [globalConfig.value.loadingMoreText]);
        }
      }
      return renderTNodeJSX("asyncLoading");
    };
    var handleLoadMore = function handleLoadMore(e) {
      var _props2$onLoadMore;
      if (isString(props2.asyncLoading) && props2.asyncLoading !== LOAD_MORE) return;
      (_props2$onLoadMore = props2.onLoadMore) === null || _props2$onLoadMore === void 0 || _props2$onLoadMore.call(props2, {
        e: e
      });
    };
    expose({
      scrollTo: scrollToElement
    });
    return function () {
      var listContent = [renderContent(), createVNode("div", {
        "class": loadingClass.value,
        "onClick": handleLoadMore
      }, [renderLoading()])];
      return createVNode("div", {
        "class": listClass.value,
        "onScroll": handleScroll,
        "ref": listRef,
        "style": isVirtualScroll.value ? "position:relative" : void 0
      }, [listContent]);
    };
  }
});

export { _List as default };
//# sourceMappingURL=list.js.map
