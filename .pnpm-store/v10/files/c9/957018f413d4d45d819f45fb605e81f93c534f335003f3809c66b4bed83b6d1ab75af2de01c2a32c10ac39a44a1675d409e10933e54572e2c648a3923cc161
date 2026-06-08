/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, Fragment } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { omit, isString } from 'lodash-es';
import { u as usePrefixClass, c as useCommonClassName, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { Loading } from '../loading/index.mjs';
import _ListItem from './list-item.mjs';
import props from './props.mjs';
import { LOADING, LOAD_MORE } from './consts/index.mjs';
import './hooks/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { useListItems } from './hooks/useListItems.mjs';
import { useListVirtualScroll } from './hooks/useListVirtualScroll.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import './list-item-props.mjs';
import '../_chunks/dep-6d2705e1.mjs';

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
//# sourceMappingURL=list.mjs.map
