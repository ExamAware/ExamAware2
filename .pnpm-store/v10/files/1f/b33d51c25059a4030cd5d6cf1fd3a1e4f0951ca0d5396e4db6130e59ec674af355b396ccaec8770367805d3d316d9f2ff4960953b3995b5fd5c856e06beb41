/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, onMounted, watch, onBeforeUnmount, defineComponent, toRefs, computed, createVNode, mergeProps, isVNode, nextTick } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { throttle, pick, isFunction, get } from 'lodash-es';
import baseTableProps from './base-table-props.js';
import useTableHeader from './hooks/useTableHeader.js';
import useColumnResize from './hooks/useColumnResize.js';
import useFixed from './hooks/useFixed.js';
import usePagination from './hooks/usePagination.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import { o as observe } from '../_chunks/dep-6264b0a7.js';
import { l as log } from '../_chunks/dep-8295e674.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVirtualScrollNew } from '../_chunks/dep-90df3fa4.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import useAffix from './hooks/useAffix.js';
import { Loading } from '../loading/index.js';
import TBody, { extendTableProps } from './components/tbody.js';
import useStyle, { formatCSSUnit } from './hooks/useStyle.js';
import useClassName from './hooks/useClassName.js';
import { Affix } from '../affix/index.js';
import { ROW_LISTENERS } from './components/tr.js';
import THead from './components/thead.js';
import TFoot from './components/tfoot.js';
import { getAffixProps } from './utils/index.js';
import { e as getIEVersion } from '../_chunks/dep-80a99546.js';
import { useRowHighlight } from './hooks/useRowHighlight.js';
import { useHoverKeyboardEvent } from './hooks/useHoverKeyboardEvent.js';
import './hooks/useMultiHeader.js';
import './components/ellipsis.js';
import '../_chunks/dep-16bcfabc.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../tooltip/utils/index.js';
import '../_chunks/dep-167f0981.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../input-number/props.js';
import '../input-number/hooks/useInputNumber.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import '../select/index.js';
import '../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common-components/fake-arrow.js';
import '../select-input/index.js';
import '../select-input/select-input.js';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../tag-input/props.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import '../select/components/select-panel.js';
import '../select/option.js';
import '../select/option-props.js';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../select/utils/index.js';
import '../select/consts/index.js';
import '../select/option-group.js';
import '../select/option-group-props.js';
import '../select/props.js';
import '../select/hooks/usePanelVirtualScroll.js';
import '../select/hooks/useKeyboardControl.js';
import '../select/hooks/useSelectOptions.js';
import '../input-adornment/index.js';
import '../input-adornment/input-adornment.js';
import '../input-adornment/props.js';
import '../pagination/props.js';
import '../pagination/hooks/useMoreAction.js';
import '../pagination/hooks/usePaginationClasses.js';
import '../pagination/pagination-mini.js';
import '../pagination/pagination-mini-props.js';
import './hooks/useRowspanAndColspan.js';
import '../affix/affix.js';
import '../affix/props.js';
import './hooks/useLazyLoad.js';

function useElementLazyRender(labelRef, lazyLoad) {
  var ioObserver = ref();
  var showElement = ref(true);
  var handleLazyLoad = function handleLazyLoad() {
    if (!lazyLoad.value || !labelRef.value || ioObserver.value) return;
    showElement.value = false;
    var io = observe(labelRef.value, null, function () {
      showElement.value = true;
    }, 10);
    ioObserver.value = io;
  };
  onMounted(handleLazyLoad);
  lazyLoad.value && watch([lazyLoad, labelRef], handleLazyLoad);
  onBeforeUnmount(function () {
    var _ioObserver$value, _ioObserver$value$uno;
    if (!lazyLoad.value) return;
    (_ioObserver$value = ioObserver.value) === null || _ioObserver$value === void 0 || (_ioObserver$value$uno = _ioObserver$value.unobserve) === null || _ioObserver$value$uno === void 0 || _ioObserver$value$uno.call(_ioObserver$value, labelRef.value);
  });
  return {
    showElement: showElement
  };
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var BASE_TABLE_EVENTS = ["page-change", "cell-click", "scroll", "scrollX", "scrollY"];
var BASE_TABLE_ALL_EVENTS = ROW_LISTENERS.map(function (t) {
  return "row-".concat(t);
}).concat(BASE_TABLE_EVENTS);
var _BaseTable = defineComponent({
  name: "TBaseTable",
  props: _objectSpread(_objectSpread({}, baseTableProps), {}, {
    renderExpandedRow: Function,
    onLeafColumnsChange: Function,
    thDraggable: Boolean
  }),
  emits: ["show-element-change", "update:activeRowKeys"],
  setup: function setup(props2, context) {
    var _toRefs = toRefs(props2),
      lazyLoad = _toRefs.lazyLoad;
    var renderTNode = useTNodeJSX();
    var tableRef = ref();
    var tableElmRef = ref();
    var tableBodyRef = ref();
    var bottomContentRef = ref();
    var tableFootHeight = ref(0);
    var _useClassName = useClassName(),
      classPrefix = _useClassName.classPrefix,
      virtualScrollClasses = _useClassName.virtualScrollClasses,
      tableLayoutClasses = _useClassName.tableLayoutClasses,
      tableBaseClass = _useClassName.tableBaseClass,
      tableColFixedClasses = _useClassName.tableColFixedClasses;
    var _useStyle = useStyle(props2),
      tableClasses = _useStyle.tableClasses,
      sizeClassNames = _useStyle.sizeClassNames,
      tableContentStyles = _useStyle.tableContentStyles,
      tableElementStyles = _useStyle.tableElementStyles;
    var _useConfig = useConfig("table", props2.locale),
      globalConfig = _useConfig.globalConfig;
    var _useTableHeader = useTableHeader(props2),
      isMultipleHeader = _useTableHeader.isMultipleHeader,
      spansAndLeafNodes = _useTableHeader.spansAndLeafNodes,
      thList = _useTableHeader.thList;
    var finalColumns = computed(function () {
      var _spansAndLeafNodes$va;
      return ((_spansAndLeafNodes$va = spansAndLeafNodes.value) === null || _spansAndLeafNodes$va === void 0 ? void 0 : _spansAndLeafNodes$va.leafColumns) || props2.columns;
    });
    var tableSize = computed(function () {
      var _props2$size;
      return (_props2$size = props2.size) !== null && _props2$size !== void 0 ? _props2$size : globalConfig.value.size;
    });
    var _useElementLazyRender = useElementLazyRender(tableRef, lazyLoad),
      showElement = _useElementLazyRender.showElement;
    var paginationAffixRef = ref();
    var horizontalScrollAffixRef = ref();
    var headerTopAffixRef = ref();
    var footerBottomAffixRef = ref();
    var _useFixed = useFixed(props2, context, finalColumns, {
        paginationAffixRef: paginationAffixRef,
        horizontalScrollAffixRef: horizontalScrollAffixRef,
        headerTopAffixRef: headerTopAffixRef,
        footerBottomAffixRef: footerBottomAffixRef
      }),
      scrollbarWidth = _useFixed.scrollbarWidth,
      tableWidth = _useFixed.tableWidth,
      tableElmWidth = _useFixed.tableElmWidth,
      tableContentRef = _useFixed.tableContentRef,
      isFixedHeader = _useFixed.isFixedHeader,
      isWidthOverflow = _useFixed.isWidthOverflow,
      isFixedColumn = _useFixed.isFixedColumn,
      thWidthList = _useFixed.thWidthList,
      showColumnShadow = _useFixed.showColumnShadow,
      rowAndColFixedPosition = _useFixed.rowAndColFixedPosition,
      setData = _useFixed.setData,
      refreshTable = _useFixed.refreshTable,
      setTableElmWidth = _useFixed.setTableElmWidth,
      emitScrollEvent = _useFixed.emitScrollEvent,
      setUseFixedTableElmRef = _useFixed.setUseFixedTableElmRef,
      updateColumnFixedShadow = _useFixed.updateColumnFixedShadow,
      getThWidthList = _useFixed.getThWidthList,
      updateThWidthList = _useFixed.updateThWidthList,
      addTableResizeObserver = _useFixed.addTableResizeObserver,
      updateTableAfterColumnResize = _useFixed.updateTableAfterColumnResize;
    var _useAffix = useAffix(props2),
      affixHeaderRef = _useAffix.affixHeaderRef,
      affixFooterRef = _useAffix.affixFooterRef,
      horizontalScrollbarRef = _useAffix.horizontalScrollbarRef,
      paginationRef = _useAffix.paginationRef,
      showAffixHeader = _useAffix.showAffixHeader,
      showAffixFooter = _useAffix.showAffixFooter,
      showAffixPagination = _useAffix.showAffixPagination,
      onHorizontalScroll = _useAffix.onHorizontalScroll,
      setTableContentRef = _useAffix.setTableContentRef,
      updateAffixHeaderOrFooter = _useAffix.updateAffixHeaderOrFooter;
    var _usePagination = usePagination(props2, context, tableContentRef),
      dataSource = _usePagination.dataSource,
      innerPagination = _usePagination.innerPagination,
      isPaginateData = _usePagination.isPaginateData,
      renderPagination = _usePagination.renderPagination;
    var columnResizeParams = useColumnResize({
      isWidthOverflow: isWidthOverflow,
      tableContentRef: tableContentRef,
      showColumnShadow: showColumnShadow,
      getThWidthList: getThWidthList,
      updateThWidthList: updateThWidthList,
      setTableElmWidth: setTableElmWidth,
      updateTableAfterColumnResize: updateTableAfterColumnResize,
      onColumnResizeChange: props2.onColumnResizeChange
    });
    var resizeLineRef = columnResizeParams.resizeLineRef,
      resizeLineStyle = columnResizeParams.resizeLineStyle,
      setEffectColMap = columnResizeParams.setEffectColMap;
    var dynamicBaseTableClasses = computed(function () {
      return [tableClasses.value, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tableBaseClass.headerFixed, isFixedHeader.value), tableBaseClass.columnFixed, isFixedColumn.value), tableBaseClass.widthOverflow, isWidthOverflow.value), tableBaseClass.multipleHeader, isMultipleHeader.value), tableColFixedClasses.leftShadow, showColumnShadow.left), tableColFixedClasses.rightShadow, showColumnShadow.right), tableBaseClass.columnResizableTable, props2.resizable), "".concat(classPrefix, "-table__row--active-").concat(props2.activeRowType), props2.activeRowType)];
    });
    var tableElmClasses = computed(function () {
      return [[tableLayoutClasses[props2.tableLayout]]];
    });
    var showRightDivider = computed(function () {
      return props2.bordered && isFixedHeader.value && (isMultipleHeader.value && isWidthOverflow.value || !isMultipleHeader.value);
    });
    var dividerBottom = computed(function () {
      var _bottomContentRef$val, _paginationRef$value;
      if (!props2.bordered) return 0;
      var bottomRect = (_bottomContentRef$val = bottomContentRef.value) === null || _bottomContentRef$val === void 0 ? void 0 : _bottomContentRef$val.getBoundingClientRect();
      var paginationRect = (_paginationRef$value = paginationRef.value) === null || _paginationRef$value === void 0 ? void 0 : _paginationRef$value.getBoundingClientRect();
      return ((bottomRect === null || bottomRect === void 0 ? void 0 : bottomRect.height) || 0) + ((paginationRect === null || paginationRect === void 0 ? void 0 : paginationRect.height) || 0);
    });
    var _useRowHighlight = useRowHighlight(props2, tableRef),
      tActiveRow = _useRowHighlight.tActiveRow,
      onHighlightRow = _useRowHighlight.onHighlightRow,
      addHighlightKeyboardListener = _useRowHighlight.addHighlightKeyboardListener,
      removeHighlightKeyboardListener = _useRowHighlight.removeHighlightKeyboardListener;
    var _useHoverKeyboardEven = useHoverKeyboardEvent(props2, tableRef),
      hoverRow = _useHoverKeyboardEven.hoverRow,
      needKeyboardRowHover = _useHoverKeyboardEven.needKeyboardRowHover,
      clearHoverRow = _useHoverKeyboardEven.clearHoverRow,
      addRowHoverKeyboardListener = _useHoverKeyboardEven.addRowHoverKeyboardListener,
      removeRowHoverKeyboardListener = _useHoverKeyboardEven.removeRowHoverKeyboardListener,
      tableRefTabIndex = _useHoverKeyboardEven.tableRefTabIndex;
    watch(tableElmRef, function () {
      setUseFixedTableElmRef(tableElmRef.value);
    });
    watch(function () {
      return [props2.data, dataSource];
    }, function () {
      setData(isPaginateData.value ? dataSource.value : props2.data);
    });
    watch(spansAndLeafNodes, function () {
      var _props2$onLeafColumns;
      (_props2$onLeafColumns = props2.onLeafColumnsChange) === null || _props2$onLeafColumns === void 0 || _props2$onLeafColumns.call(props2, spansAndLeafNodes.value.leafColumns);
      setEffectColMap(spansAndLeafNodes.value.leafColumns, null);
    }, {
      immediate: true
    });
    var onFixedChange = function onFixedChange() {
      nextTick(function () {
        onHorizontalScroll();
        updateAffixHeaderOrFooter();
      });
    };
    var syncThWidthList = throttle(function () {
      updateThWidthList(getThWidthList("calculate"));
    });
    var virtualScrollParams = computed(function () {
      return {
        data: props2.data,
        scroll: _objectSpread(_objectSpread({}, props2.scroll), {}, {
          fixedRows: props2.fixedRows
        })
      };
    });
    var virtualConfig = useVirtualScrollNew(tableContentRef, virtualScrollParams);
    var lastScrollY = -1;
    var onInnerVirtualScroll = function onInnerVirtualScroll(e) {
      var target = e.target || e.srcElement;
      var top = target.scrollTop;
      if (lastScrollY !== top) {
        virtualConfig.isVirtualScroll.value && virtualConfig.handleScroll();
      } else {
        lastScrollY = -1;
        updateColumnFixedShadow(target);
      }
      lastScrollY = top;
      emitScrollEvent(e);
      if (props2.tableLayout === "auto") {
        syncThWidthList();
      }
    };
    var getTFootHeight = function getTFootHeight() {
      var _tableElmRef$value$qu;
      if (!tableElmRef.value) return;
      tableFootHeight.value = (_tableElmRef$value$qu = tableElmRef.value.querySelector("tfoot")) === null || _tableElmRef$value$qu === void 0 ? void 0 : _tableElmRef$value$qu.getBoundingClientRect().height;
    };
    var scrollColumnIntoView = function scrollColumnIntoView(colKey) {
      if (!tableContentRef.value) return;
      var thDom = tableContentRef.value.querySelector("th[data-colkey=\"".concat(colKey, "\"]"));
      var fixedThDom = tableContentRef.value.querySelectorAll("th.t-table__cell--fixed-left");
      var totalWidth = 0;
      for (var i = 0, len = fixedThDom.length; i < len; i++) {
        totalWidth += fixedThDom[i].getBoundingClientRect().width;
      }
      var domRect = thDom.getBoundingClientRect();
      var contentRect = tableContentRef.value.getBoundingClientRect();
      var distance = domRect.left - contentRect.left - totalWidth;
      if (tableContentRef.value.scrollTo) {
        tableContentRef.value.scrollTo({
          left: distance,
          behavior: "smooth"
        });
      } else {
        tableContentRef.value.scrollLeft = distance;
      }
    };
    watch(tableContentRef, function () {
      setTableContentRef(tableContentRef.value);
      if (props2.tableLayout === "auto") {
        syncThWidthList();
      }
    });
    watch(function () {
      return [tableElmRef.value, props2.footData, props2.footerSummary, props2.columns];
    }, function () {
      var timer = setTimeout(function () {
        getTFootHeight();
        clearTimeout(timer);
      }, 0);
    });
    watch(tableRef, function (tableRef2) {
      addTableResizeObserver(tableRef2);
    });
    onMounted(function () {
      getTFootHeight();
      setTableContentRef(tableContentRef.value);
      addTableResizeObserver(tableRef.value);
    });
    var onTableFocus = function onTableFocus() {
      props2.activeRowType && addHighlightKeyboardListener();
      needKeyboardRowHover.value && addRowHoverKeyboardListener();
    };
    var onTableBlur = function onTableBlur() {
      props2.activeRowType && removeHighlightKeyboardListener();
      needKeyboardRowHover.value && removeRowHoverKeyboardListener();
    };
    var onInnerRowClick = function onInnerRowClick(ctx) {
      var _props2$onRowClick;
      (_props2$onRowClick = props2.onRowClick) === null || _props2$onRowClick === void 0 || _props2$onRowClick.call(props2, ctx);
      props2.activeRowType && onHighlightRow(ctx);
      needKeyboardRowHover.value && clearHoverRow();
    };
    watch([showElement], function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        showElement2 = _ref3[0];
      context.emit("show-element-change", showElement2);
    }, {
      immediate: true
    });
    var tableData = computed(function () {
      return isPaginateData.value ? dataSource.value : props2.data;
    });
    var scrollToElement = function scrollToElement(params) {
      var index = params.index;
      if (!index && index !== 0) {
        var _tableData$value;
        if (!params.key) {
          log.error("Table", "scrollToElement: one of `index` or `key` must exist.");
          return;
        }
        index = (_tableData$value = tableData.value) === null || _tableData$value === void 0 ? void 0 : _tableData$value.findIndex(function (item) {
          return get(item, props2.rowKey) === params.key;
        });
        if (index < 0) {
          log.error("Table", "".concat(params.key, " does not exist in data, check `rowKey` or `data` please."));
        }
      }
      if (virtualConfig.isVirtualScroll.value) {
        virtualConfig.scrollToElement(_objectSpread(_objectSpread({}, params), {}, {
          index: index + 1
        }));
      } else {
        var _tableBodyRef$value, _el$children;
        var el = (_tableBodyRef$value = tableBodyRef.value) === null || _tableBodyRef$value === void 0 ? void 0 : _tableBodyRef$value.$el;
        var row = el === null || el === void 0 || (_el$children = el.children) === null || _el$children === void 0 ? void 0 : _el$children[index];
        if (row) {
          var _params$top, _params$behavior;
          var offsetTop = row.offsetTop;
          var scrollTop = tableContentRef.value.scrollTop;
          var scrollHeight = offsetTop - scrollTop - ((_params$top = params.top) !== null && _params$top !== void 0 ? _params$top : 0);
          tableContentRef.value.scrollBy({
            top: scrollHeight,
            behavior: (_params$behavior = params.behavior) !== null && _params$behavior !== void 0 ? _params$behavior : "auto"
          });
        }
      }
    };
    context.expose({
      refreshTable: refreshTable,
      scrollColumnIntoView: scrollColumnIntoView,
      scrollToElement: scrollToElement
    });
    return function () {
      var _props2$allowResizeCo, _affixHeaderRef$value, _props2$footData, _tableFootHeight$valu, _tableFootHeight$valu2, _affixHeaderHeight$va, _tableContentRef$valu;
      if (!showElement.value) {
        return createVNode("div", {
          "ref": tableRef
        }, null);
      }
      var data = isPaginateData.value ? dataSource.value : props2.data;
      var columns = (spansAndLeafNodes === null || spansAndLeafNodes === void 0 ? void 0 : spansAndLeafNodes.value.leafColumns) || props2.columns;
      var columnResizable = (_props2$allowResizeCo = props2.allowResizeColumnWidth) !== null && _props2$allowResizeCo !== void 0 ? _props2$allowResizeCo : props2.resizable;
      if (columnResizable && props2.tableLayout === "auto") {
        log.warn("Table", "table-layout can not be `auto`, cause you are using column resizable, set `table-layout: fixed` please.");
      }
      var defaultColWidth = props2.tableLayout === "fixed" && isWidthOverflow.value ? "100px" : void 0;
      var renderColGroup = function renderColGroup() {
        var isAffixHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return createVNode("colgroup", null, [columns.map(function (col) {
          var style = {
            width: formatCSSUnit((isAffixHeader || columnResizable ? thWidthList.value[col.colKey] : void 0) || col.width) || defaultColWidth
          };
          if (col.minWidth) {
            style.minWidth = formatCSSUnit(col.minWidth);
          }
          if (!style.width && !col.minWidth && props2.tableLayout === "fixed") {
            style.minWidth = "80px";
          }
          return createVNode("col", {
            "key": col.colKey,
            "style": style
          }, null);
        })]);
      };
      var renderAffixedHeader = function renderAffixedHeader() {
        if (props2.showHeader === false) return null;
        var affixHeaderEvents = useEventForward(getAffixProps(props2.headerAffixedTop), {
          onFixedChange: onFixedChange
        });
        return !!(virtualConfig.isVirtualScroll.value || props2.headerAffixedTop) && (props2.headerAffixedTop ? createVNode(Affix, mergeProps({
          "ref": headerTopAffixRef,
          "offsetTop": 0
        }, affixHeaderEvents.value), _isSlot(affixHeaderWithWrap) ? affixHeaderWithWrap : {
          "default": function _default() {
            return [affixHeaderWithWrap];
          }
        }) : isFixedHeader.value && affixHeaderWithWrap);
      };
      var renderAffixedHorizontalScrollbar = function renderAffixedHorizontalScrollbar() {
        return createVNode(Affix, mergeProps({
          "offsetBottom": 0
        }, getAffixProps(props2.horizontalScrollAffixedBottom), {
          "style": {
            marginTop: "-".concat(scrollbarWidth.value * 2, "px")
          },
          "horizontalScrollAffixedBottom": true,
          "ref": horizontalScrollAffixRef
        }), {
          "default": function _default() {
            return [createVNode("div", {
              "ref": horizontalScrollbarRef,
              "class": ["scrollbar", tableBaseClass.obviousScrollbar],
              "style": {
                width: "".concat(tableWidth.value, "px"),
                overflow: "auto",
                opacity: Number(showAffixFooter.value)
              }
            }, [createVNode("div", {
              "style": {
                width: "".concat(tableElmWidth.value, "px"),
                height: "5px"
              }
            }, null)])];
          }
        });
      };
      var headProps = {
        isFixedHeader: isFixedHeader.value,
        rowAndColFixedPosition: rowAndColFixedPosition.value,
        isMultipleHeader: isMultipleHeader.value,
        bordered: props2.bordered,
        maxHeight: props2.maxHeight,
        height: props2.height,
        spansAndLeafNodes: spansAndLeafNodes.value,
        thList: thList.value,
        thWidthList: thWidthList.value,
        resizable: props2.resizable,
        columnResizeParams: columnResizeParams,
        classPrefix: classPrefix,
        ellipsisOverlayClassName: tableSize.value !== "medium" ? sizeClassNames[tableSize.value] : "",
        attach: props2.attach,
        showColumnShadow: showColumnShadow,
        thDraggable: props2.thDraggable
      };
      var IEHeaderWrap = getIEVersion() <= 11 ? 4 : 0;
      var barWidth = isWidthOverflow.value ? scrollbarWidth.value : 0;
      var affixHeaderHeight = ref((((_affixHeaderRef$value = affixHeaderRef.value) === null || _affixHeaderRef$value === void 0 ? void 0 : _affixHeaderRef$value.getBoundingClientRect().height) || 0) - IEHeaderWrap);
      var timer = setTimeout(function () {
        var _affixHeaderRef$value2;
        affixHeaderHeight.value = (((_affixHeaderRef$value2 = affixHeaderRef.value) === null || _affixHeaderRef$value2 === void 0 ? void 0 : _affixHeaderRef$value2.getBoundingClientRect().height) || 0) - IEHeaderWrap;
        clearTimeout(timer);
      }, 0);
      var affixHeaderWrapHeight = computed(function () {
        return affixHeaderHeight.value - barWidth;
      });
      var headerOpacity = props2.headerAffixedTop ? Number(showAffixHeader.value) : 1;
      var affixHeaderWrapHeightStyle = computed(function () {
        return {
          width: "".concat(tableWidth.value, "px"),
          height: "".concat(affixHeaderWrapHeight.value, "px"),
          opacity: headerOpacity
        };
      });
      var affixedLeftBorder = props2.bordered ? 1 : 0;
      var affixedHeader = Boolean((props2.headerAffixedTop || virtualConfig.isVirtualScroll.value) && tableWidth.value) && createVNode("div", {
        "ref": affixHeaderRef,
        "style": {
          width: "".concat(tableWidth.value - affixedLeftBorder, "px"),
          opacity: Number(showAffixHeader.value)
        },
        "class": ["scrollbar", _defineProperty({}, tableBaseClass.affixedHeaderElm, props2.headerAffixedTop || virtualConfig.isVirtualScroll.value)]
      }, [createVNode("table", {
        "class": tableElmClasses.value,
        "style": _objectSpread(_objectSpread({}, tableElementStyles.value), {}, {
          width: "".concat(tableElmWidth.value, "px")
        })
      }, [renderColGroup(true), createVNode(THead, headProps, context.slots)])]);
      var affixHeaderWithWrap = createVNode("div", {
        "class": tableBaseClass.affixedHeaderWrap,
        "style": affixHeaderWrapHeightStyle.value
      }, [affixedHeader]);
      var marginScrollbarWidth = isWidthOverflow.value ? scrollbarWidth.value : 0;
      if (props2.bordered) {
        marginScrollbarWidth += 1;
      }
      var showFooter = Boolean(virtualConfig.isVirtualScroll.value || props2.footerAffixedBottom);
      var hasFooter = ((_props2$footData = props2.footData) === null || _props2$footData === void 0 ? void 0 : _props2$footData.length) || props2.footerSummary || context.slots["footerSummary"];
      var affixFooterEvents = useEventForward(getAffixProps(props2.footerAffixedBottom), {
        onFixedChange: onFixedChange
      });
      var affixedFooter = Boolean(showFooter && hasFooter && tableWidth.value) && createVNode(Affix, mergeProps({
        "ref": footerBottomAffixRef,
        "class": tableBaseClass.affixedFooterWrap,
        "offsetBottom": marginScrollbarWidth || 0,
        "style": {
          marginTop: "".concat(-1 * (((_tableFootHeight$valu = tableFootHeight.value) !== null && _tableFootHeight$valu !== void 0 ? _tableFootHeight$valu : 0) + marginScrollbarWidth), "px")
        }
      }, affixFooterEvents.value), {
        "default": function _default() {
          return [createVNode("div", {
            "ref": affixFooterRef,
            "style": {
              width: "".concat(tableWidth.value - affixedLeftBorder, "px"),
              opacity: Number(showAffixFooter.value)
            },
            "class": ["scrollbar", _defineProperty({}, tableBaseClass.affixedFooterElm, props2.footerAffixedBottom || virtualConfig.isVirtualScroll.value)]
          }, [createVNode("table", {
            "class": tableElmClasses.value,
            "style": _objectSpread(_objectSpread({}, tableElementStyles.value), {}, {
              width: "".concat(tableElmWidth.value, "px")
            })
          }, [renderColGroup(true), createVNode(TFoot, {
            "rowKey": props2.rowKey,
            "isFixedHeader": isFixedHeader.value,
            "rowAndColFixedPosition": rowAndColFixedPosition.value,
            "footData": props2.footData,
            "columns": spansAndLeafNodes.value.leafColumns,
            "rowAttributes": props2.rowAttributes,
            "rowClassName": props2.rowClassName,
            "thWidthList": thWidthList.value,
            "footerSummary": props2.footerSummary,
            "rowspanAndColspanInFooter": props2.rowspanAndColspanInFooter
          }, context.slots)])])];
        }
      });
      var translate = "translate(0, ".concat(virtualConfig.scrollHeight.value + ((_tableFootHeight$valu2 = tableFootHeight.value) !== null && _tableFootHeight$valu2 !== void 0 ? _tableFootHeight$valu2 : 0) + ((_affixHeaderHeight$va = affixHeaderHeight.value) !== null && _affixHeaderHeight$va !== void 0 ? _affixHeaderHeight$va : 0), "px)");
      var virtualStyle = {
        transform: translate,
        "-ms-transform": translate,
        "-moz-transform": translate,
        "-webkit-transform": translate
      };
      var tableBodyProps = _objectSpread(_objectSpread({
        classPrefix: classPrefix,
        ellipsisOverlayClassName: tableSize.value !== "medium" ? sizeClassNames[tableSize.value] : "",
        rowAndColFixedPosition: rowAndColFixedPosition.value,
        showColumnShadow: showColumnShadow,
        data: data,
        virtualConfig: virtualConfig,
        columns: spansAndLeafNodes.value.leafColumns,
        tableElm: tableRef.value,
        tableWidth: tableWidth.value,
        isWidthOverflow: isWidthOverflow.value,
        scroll: props2.scroll,
        cellEmptyContent: props2.cellEmptyContent,
        tableContentElm: tableContentRef.value,
        handleRowMounted: virtualConfig.handleRowMounted,
        renderExpandedRow: props2.renderExpandedRow
      }, pick(props2, extendTableProps)), {}, {
        pagination: innerPagination.value,
        attach: props2.attach,
        hoverRow: hoverRow.value,
        activeRow: tActiveRow.value,
        onRowClick: onInnerRowClick
      });
      var tableContent = createVNode("div", {
        "ref": tableContentRef,
        "class": tableBaseClass.content,
        "style": _objectSpread(_objectSpread({}, tableContentStyles.value), {}, {
          overflowAnchor: "none"
        }),
        "onScroll": onInnerVirtualScroll
      }, [virtualConfig.isVirtualScroll.value && createVNode("div", {
        "class": virtualScrollClasses.cursor,
        "style": virtualStyle
      }, null), createVNode("table", {
        "ref": tableElmRef,
        "class": tableElmClasses.value,
        "style": _objectSpread(_objectSpread({}, tableElementStyles.value), {}, {
          width: props2.resizable && isWidthOverflow.value && tableElmWidth.value ? "".concat(tableElmWidth.value, "px") : tableElementStyles.value.width
        })
      }, [renderColGroup(false), props2.showHeader && createVNode(THead, _objectSpread(_objectSpread({}, headProps), {}, {
        thWidthList: columnResizable ? thWidthList.value : {}
      }), context.slots), createVNode(TBody, mergeProps({
        "ref": tableBodyRef
      }, tableBodyProps), context.slots), createVNode(TFoot, {
        "rowKey": props2.rowKey,
        "isFixedHeader": isFixedHeader.value,
        "rowAndColFixedPosition": rowAndColFixedPosition.value,
        "footData": props2.footData,
        "columns": spansAndLeafNodes.value.leafColumns,
        "rowAttributes": props2.rowAttributes,
        "rowClassName": props2.rowClassName,
        "footerSummary": props2.footerSummary,
        "rowspanAndColspanInFooter": props2.rowspanAndColspanInFooter,
        "virtualScroll": virtualConfig.isVirtualScroll.value
      }, context.slots)])]);
      var getCustomLoadingText = isFunction(props2.loading) ? props2.loading : context.slots.loading;
      var loadingContent = props2.loading !== void 0 && createVNode(Loading, mergeProps({
        "loading": !!props2.loading,
        "text": getCustomLoadingText,
        "attach": tableRef.value ? function () {
          return tableRef.value;
        } : void 0,
        "showOverlay": true,
        "size": "small"
      }, props2.loadingProps), null);
      var topContent = renderTNode("topContent");
      var bottomContent = renderTNode("bottomContent");
      var pagination = createVNode("div", {
        "ref": paginationRef,
        "class": tableBaseClass.paginationWrap,
        "style": {
          opacity: Number(showAffixPagination.value)
        }
      }, [renderPagination()]);
      var bottom = !!bottomContent && createVNode("div", {
        "ref": bottomContentRef,
        "class": tableBaseClass.bottomContent
      }, [bottomContent]);
      return createVNode("div", {
        "ref": tableRef,
        "tabindex": tableRefTabIndex.value,
        "class": dynamicBaseTableClasses.value,
        "onFocus": onTableFocus,
        "onBlur": onTableBlur
      }, [!!topContent && createVNode("div", {
        "class": tableBaseClass.topContent
      }, [topContent]), renderAffixedHeader(), tableContent, affixedFooter, loadingContent, bottom, showRightDivider.value && createVNode("div", {
        "class": tableBaseClass.scrollbarDivider,
        "style": {
          right: "".concat(scrollbarWidth.value, "px"),
          bottom: dividerBottom.value ? "".concat(dividerBottom.value, "px") : void 0,
          height: "".concat((_tableContentRef$valu = tableContentRef.value) === null || _tableContentRef$valu === void 0 ? void 0 : _tableContentRef$valu.getBoundingClientRect().height, "px")
        }
      }, null), props2.horizontalScrollAffixedBottom && renderAffixedHorizontalScrollbar(), props2.paginationAffixedBottom ? createVNode(Affix, mergeProps({
        "offsetBottom": 0
      }, getAffixProps(props2.paginationAffixedBottom), {
        "ref": paginationAffixRef
      }), _isSlot(pagination) ? pagination : {
        "default": function _default() {
          return [pagination];
        }
      }) : pagination, createVNode("div", {
        "ref": resizeLineRef,
        "class": tableBaseClass.resizeLine,
        "style": resizeLineStyle
      }, null)]);
    };
  }
});

export { BASE_TABLE_ALL_EVENTS, BASE_TABLE_EVENTS, _BaseTable as default };
//# sourceMappingURL=base-table.js.map
