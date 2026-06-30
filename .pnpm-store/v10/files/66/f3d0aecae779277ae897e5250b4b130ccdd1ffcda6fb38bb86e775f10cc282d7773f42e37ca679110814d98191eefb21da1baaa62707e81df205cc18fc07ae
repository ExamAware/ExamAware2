/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var dom = require('../../_chunks/dep-06276759.js');
var isBoolean = require('../../_chunks/dep-d45110a6.js');
var debounce = require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');

function useAffix(props) {
  var tableContentRef = Vue.ref();
  var affixHeaderRef = Vue.ref();
  var affixFooterRef = Vue.ref();
  var horizontalScrollbarRef = Vue.ref();
  var paginationRef = Vue.ref();
  var showAffixHeader = Vue.ref(true);
  var showAffixFooter = Vue.ref(true);
  var showAffixPagination = Vue.ref(true);
  var isMousedown = false;
  var isMouseInScrollableArea = false;
  var isVirtualScroll = Vue.computed(function () {
    return props.scroll && props.scroll.type === "virtual" && (props.scroll.threshold || 100) < props.data.length;
  });
  var isAffixed = Vue.computed(function () {
    return !!(props.headerAffixedTop || props.footerAffixedBottom || props.horizontalScrollAffixedBottom);
  });
  var lastScrollLeft = 0;
  var onHorizontalScroll = function onHorizontalScroll(scrollElement) {
    if (!isAffixed.value && !isVirtualScroll.value) return;
    var target = scrollElement;
    if (!target && tableContentRef.value) {
      lastScrollLeft = 0;
      target = tableContentRef.value;
    }
    if (!target) return;
    var left = target.scrollLeft;
    if (lastScrollLeft === left) return;
    lastScrollLeft = left;
    var toUpdateScrollElement = [tableContentRef.value, affixHeaderRef.value, affixFooterRef.value, horizontalScrollbarRef.value];
    for (var i = 0, len = toUpdateScrollElement.length; i < len; i++) {
      if (toUpdateScrollElement[i] && scrollElement !== toUpdateScrollElement[i]) {
        toUpdateScrollElement[i].scrollLeft = left;
      }
    }
  };
  var isAffixedBottomElementShow = function isAffixedBottomElementShow(elementRect, tableRect, headerHeight) {
    return tableRect.top + headerHeight < elementRect.top && elementRect.top > elementRect.height;
  };
  var getOffsetTop = function getOffsetTop(props2) {
    if (isBoolean.isBoolean(props2)) return 0;
    return props2.offsetTop || 0;
  };
  var updateAffixHeaderOrFooter = function updateAffixHeaderOrFooter() {
    var _tableContentRef$valu, _tableContentRef$valu2, _affixFooterRef$value;
    if (!isAffixed.value && !isVirtualScroll.value && !tableContentRef.value) return;
    var pos = (_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect();
    if (!pos) return;
    var headerRect = (_tableContentRef$valu2 = tableContentRef.value) === null || _tableContentRef$valu2 === void 0 || (_tableContentRef$valu2 = _tableContentRef$valu2.querySelector("thead")) === null || _tableContentRef$valu2 === void 0 ? void 0 : _tableContentRef$valu2.getBoundingClientRect();
    var headerHeight = (headerRect === null || headerRect === void 0 ? void 0 : headerRect.height) || 0;
    var footerRect = (_affixFooterRef$value = affixFooterRef.value) === null || _affixFooterRef$value === void 0 ? void 0 : _affixFooterRef$value.getBoundingClientRect();
    if ((props.headerAffixedTop || isVirtualScroll.value) && affixHeaderRef.value) {
      var offsetTop = getOffsetTop(props.headerAffixProps || props.headerAffixedTop);
      var footerHeight = (footerRect === null || footerRect === void 0 ? void 0 : footerRect.height) || 0;
      var r = Math.abs(pos.top) < pos.height - headerHeight - offsetTop - footerHeight;
      if (isVirtualScroll.value) {
        r = pos.top > -1 * headerRect.height;
      }
      showAffixHeader.value = r;
    }
    if (props.footerAffixedBottom && affixFooterRef !== null && affixFooterRef !== void 0 && affixFooterRef.value) {
      showAffixFooter.value = isAffixedBottomElementShow(footerRect, pos, headerHeight);
    } else if (props.horizontalScrollAffixedBottom && horizontalScrollbarRef !== null && horizontalScrollbarRef !== void 0 && horizontalScrollbarRef.value) {
      var horizontalScrollbarRect = horizontalScrollbarRef.value.getBoundingClientRect();
      showAffixFooter.value = isAffixedBottomElementShow(horizontalScrollbarRect, pos, headerHeight);
    }
    if (props.paginationAffixedBottom && paginationRef.value) {
      var pageRect = paginationRef.value.getBoundingClientRect();
      showAffixPagination.value = isAffixedBottomElementShow(pageRect, pos, headerHeight);
    }
  };
  var onDocumentScroll = function onDocumentScroll() {
    updateAffixHeaderOrFooter();
  };
  var onFootScroll = function onFootScroll() {
    onHorizontalScroll(affixFooterRef.value);
  };
  var onHeaderScroll = function onHeaderScroll() {
    onHorizontalScroll(affixHeaderRef.value);
  };
  var horizontalScrollbarScroll = function horizontalScrollbarScroll() {
    onHorizontalScroll(horizontalScrollbarRef.value);
  };
  var onTableContentScroll = function onTableContentScroll() {
    onHorizontalScroll(tableContentRef.value);
  };
  var onFootMouseEnter = function onFootMouseEnter() {
    dom.on(affixFooterRef.value, "scroll", onFootScroll);
  };
  var onFootMouseLeave = function onFootMouseLeave() {
    dom.off(affixFooterRef.value, "scroll", onFootScroll);
  };
  var onHeaderMouseEnter = function onHeaderMouseEnter() {
    dom.on(affixHeaderRef.value, "scroll", onHeaderScroll);
    onMouseEnterScrollableArea();
  };
  var onHeaderMouseLeave = function onHeaderMouseLeave() {
    if (!isMousedown) dom.off(affixHeaderRef.value, "scroll", onHeaderScroll);
    onMouseLeaveScrollableArea();
  };
  var onScrollbarMouseEnter = function onScrollbarMouseEnter() {
    dom.on(horizontalScrollbarRef.value, "scroll", horizontalScrollbarScroll);
  };
  var onScrollbarMouseLeave = function onScrollbarMouseLeave() {
    dom.off(horizontalScrollbarRef.value, "scroll", horizontalScrollbarScroll);
  };
  var onTableContentMouseEnter = function onTableContentMouseEnter() {
    dom.on(tableContentRef.value, "scroll", onTableContentScroll);
    onMouseEnterScrollableArea();
  };
  var onTableContentMouseLeave = function onTableContentMouseLeave() {
    if (!isMousedown) dom.off(tableContentRef.value, "scroll", onTableContentScroll);
    onMouseLeaveScrollableArea();
  };
  var onMousedown = function onMousedown() {
    isMousedown = true;
  };
  var onMouseup = function onMouseup() {
    isMousedown = false;
    if (!isMouseInScrollableArea) {
      dom.off(affixHeaderRef.value, "scroll", onHeaderScroll);
      dom.off(tableContentRef.value, "scroll", onTableContentScroll);
    }
  };
  var onMouseEnterScrollableArea = function onMouseEnterScrollableArea() {
    isMouseInScrollableArea = true;
  };
  var onMouseLeaveScrollableArea = function onMouseLeaveScrollableArea() {
    isMouseInScrollableArea = false;
  };
  var activatingTouchScrollListenerCleanups = [];
  var setupElementTouchScrollListener = function setupElementTouchScrollListener(element) {
    var debounceOffScrollListener = debounce.debounce(function (listener) {
      dom.off(element, "scroll", listener);
    }, 200);
    function onElementTouchScroll() {
      onHorizontalScroll(element);
      debounceOffScrollListener(onElementTouchScroll);
    }
    function onElementTouchStart(e) {
      if (e.composedPath().includes(element)) {
        activatingTouchScrollListenerCleanups.forEach(function (cleanup) {
          return cleanup();
        });
        activatingTouchScrollListenerCleanups.length = 0;
        dom.on(element, "scroll", onElementTouchScroll);
        debounceOffScrollListener(onElementTouchScroll);
        activatingTouchScrollListenerCleanups.push(function () {
          dom.off(element, "scroll", onElementTouchScroll);
        });
      }
    }
    dom.on(element, "touchstart", onElementTouchStart);
    function removeElementTouchScrollListener() {
      dom.off(element, "touchstart", onElementTouchStart);
    }
    return {
      removeElementTouchScrollListener: removeElementTouchScrollListener
    };
  };
  var elementTouchScrollCleanups = [];
  var cleanupElementTouchScroll = function cleanupElementTouchScroll() {
    elementTouchScrollCleanups.forEach(function (cleanup) {
      return cleanup();
    });
    elementTouchScrollCleanups.length = 0;
  };
  var removeHorizontalScrollListeners = function removeHorizontalScrollListeners() {
    dom.off(window, "mousedown", onMousedown);
    dom.off(window, "mouseup", onMouseup);
    cleanupElementTouchScroll();
    if (affixHeaderRef.value) {
      dom.off(affixHeaderRef.value, "mouseenter", onHeaderMouseEnter);
      dom.off(affixHeaderRef.value, "mouseleave", onHeaderMouseLeave);
    }
    if (affixFooterRef.value) {
      dom.off(affixFooterRef.value, "mouseenter", onFootMouseEnter);
      dom.off(affixFooterRef.value, "mouseleave", onFootMouseLeave);
    }
    if (tableContentRef.value) {
      dom.off(tableContentRef.value, "mouseenter", onTableContentMouseEnter);
      dom.off(tableContentRef.value, "mouseleave", onTableContentMouseLeave);
    }
    if (horizontalScrollbarRef.value) {
      dom.off(horizontalScrollbarRef.value, "mouseenter", onScrollbarMouseEnter);
      dom.off(horizontalScrollbarRef.value, "mouseleave", onScrollbarMouseLeave);
    }
  };
  var addHorizontalScrollListeners = function addHorizontalScrollListeners() {
    dom.on(window, "mousedown", onMousedown);
    dom.on(window, "mouseup", onMouseup);
    removeHorizontalScrollListeners();
    if (affixHeaderRef.value) {
      dom.on(affixHeaderRef.value, "mouseenter", onHeaderMouseEnter);
      dom.on(affixHeaderRef.value, "mouseleave", onHeaderMouseLeave);
      var _setupElementTouchScr = setupElementTouchScrollListener(affixHeaderRef.value),
        removeElementTouchScrollListener = _setupElementTouchScr.removeElementTouchScrollListener;
      elementTouchScrollCleanups.push(removeElementTouchScrollListener);
    }
    if (props.footerAffixedBottom && affixFooterRef.value) {
      dom.on(affixFooterRef.value, "mouseenter", onFootMouseEnter);
      dom.on(affixFooterRef.value, "mouseleave", onFootMouseLeave);
      var _setupElementTouchScr2 = setupElementTouchScrollListener(affixFooterRef.value),
        _removeElementTouchScrollListener = _setupElementTouchScr2.removeElementTouchScrollListener;
      elementTouchScrollCleanups.push(_removeElementTouchScrollListener);
    }
    if (props.horizontalScrollAffixedBottom && horizontalScrollbarRef.value) {
      dom.on(horizontalScrollbarRef.value, "mouseenter", onScrollbarMouseEnter);
      dom.on(horizontalScrollbarRef.value, "mouseleave", onScrollbarMouseLeave);
      var _setupElementTouchScr3 = setupElementTouchScrollListener(horizontalScrollbarRef.value),
        _removeElementTouchScrollListener2 = _setupElementTouchScr3.removeElementTouchScrollListener;
      elementTouchScrollCleanups.push(_removeElementTouchScrollListener2);
    }
    if ((isAffixed.value || isVirtualScroll.value) && tableContentRef.value) {
      dom.on(tableContentRef.value, "mouseenter", onTableContentMouseEnter);
      dom.on(tableContentRef.value, "mouseleave", onTableContentMouseLeave);
      var _setupElementTouchScr4 = setupElementTouchScrollListener(tableContentRef.value),
        _removeElementTouchScrollListener3 = _setupElementTouchScr4.removeElementTouchScrollListener;
      elementTouchScrollCleanups.push(_removeElementTouchScrollListener3);
    }
  };
  var addVerticalScrollListener = function addVerticalScrollListener() {
    if (!isAffixed.value && !props.paginationAffixedBottom) return;
    var timer = setTimeout(function () {
      if (isAffixed.value || props.paginationAffixedBottom) {
        dom.on(document, "scroll", onDocumentScroll);
      } else {
        dom.off(document, "scroll", onDocumentScroll);
      }
      clearTimeout(timer);
    });
  };
  Vue.watch([affixHeaderRef, affixFooterRef, horizontalScrollbarRef, tableContentRef], function () {
    addHorizontalScrollListeners();
    onHorizontalScroll();
    updateAffixHeaderOrFooter();
  });
  Vue.watch(isAffixed, addVerticalScrollListener);
  Vue.watch(function () {
    return [props.data, props.columns, props.headerAffixedTop, props.footerAffixedBottom, props.horizontalScrollAffixedBottom];
  }, function () {
    onHorizontalScroll();
  });
  Vue.onBeforeUnmount(function () {
    dom.off(document, "scroll", onDocumentScroll);
    removeHorizontalScrollListeners();
    affixHeaderRef.value = null;
    affixFooterRef.value = null;
    horizontalScrollbarRef.value = null;
    tableContentRef.value = null;
  });
  var setTableContentRef = function setTableContentRef(tableContent) {
    tableContentRef.value = tableContent;
    addVerticalScrollListener();
  };
  return {
    showAffixHeader: showAffixHeader,
    showAffixFooter: showAffixFooter,
    showAffixPagination: showAffixPagination,
    affixHeaderRef: affixHeaderRef,
    affixFooterRef: affixFooterRef,
    horizontalScrollbarRef: horizontalScrollbarRef,
    paginationRef: paginationRef,
    onHorizontalScroll: onHorizontalScroll,
    setTableContentRef: setTableContentRef,
    updateAffixHeaderOrFooter: updateAffixHeaderOrFooter
  };
}

exports["default"] = useAffix;
//# sourceMappingURL=useAffix.js.map
