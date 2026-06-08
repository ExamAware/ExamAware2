/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, onMounted, getCurrentInstance, createVNode, mergeProps, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { omit, get } from 'lodash-es';
import baseTableProps from './base-table-props.js';
import primaryTableProps from './primary-table-props.js';
import _BaseTable from './base-table.js';
export { BASE_TABLE_ALL_EVENTS } from './base-table.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import useColumnController from './hooks/useColumnController.js';
import useRowExpand from './hooks/useRowExpand.js';
import useTableHeader, { renderTitle } from './hooks/useTableHeader.js';
import useRowSelect from './hooks/useRowSelect.js';
import useSorter from './hooks/useSorter.js';
import useFilter from './hooks/useFilter.js';
import useDragSort from './hooks/useDragSort.js';
import useAsyncLoading from './hooks/useAsyncLoading.js';
import EditableCell from './components/editable-cell.js';
import useClassName from './hooks/useClassName.js';
import useRowEdit from './hooks/useEditableRow.js';
import useStyle from './hooks/useStyle.js';
import './hooks/useColumnResize.js';
import '../_chunks/dep-16bcfabc.js';
import './hooks/useFixed.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-167f0981.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import './hooks/usePagination.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-51e5a827.js';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../input-number/props.js';
import '../_chunks/dep-4d7b9152.js';
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
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';
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
import '../_chunks/dep-6264b0a7.js';
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
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../tooltip/utils/index.js';
import '../_chunks/dep-90df3fa4.js';
import './hooks/useAffix.js';
import './components/tbody.js';
import './components/tr.js';
import './utils/index.js';
import './components/ellipsis.js';
import './hooks/useLazyLoad.js';
import './hooks/useRowspanAndColspan.js';
import '../affix/index.js';
import '../affix/affix.js';
import '../affix/props.js';
import './components/thead.js';
import './components/tfoot.js';
import './hooks/useRowHighlight.js';
import './hooks/useHoverKeyboardEvent.js';
import './hooks/useMultiHeader.js';
import '../dialog/plugin.js';
import '../dialog/dialog.js';
import '../dialog/props.js';
import '../_chunks/dep-7f74a978.js';
import '../dialog/hooks/useSameTarget.js';
import '../dialog/utils/index.js';
import '../dialog/dialog-card.js';
import '../dialog/dialog-card-props.js';
import '../dialog/hooks/useAction.js';
import './components/column-checkbox-group.js';
import '../_chunks/dep-1c714f6d.js';
import '../radio/index.js';
import '../radio/radio.js';
import '../radio/props.js';
import '../radio/consts/index.js';
import '../radio/group.js';
import '../radio/radio-group-props.js';
import '../radio/radio-button.js';
import '../radio/hooks/useKeyboard.js';
import '../watermark/hooks/index.js';
import './components/sorter-button.js';
import './components/filter-controller.js';
import 'sortablejs';
import '@babel/runtime/helpers/toArray';
import '../form/utils/form-model.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OMIT_PROPS = ["hideSortTips", "dragSort", "defaultExpandedRowKeys", "defaultSelectedRowKeys", "columnController", "filterRow", "sortOnRowDraggable", "expandOnRowClick", "expand-on-row-click", "expanded-row", "editable-row-keys", "editable-cell-state", "filter-value", "multipleSort", "expandIcon", "expand-icon", "reserveSelectedRowOnPaginate", "expandedRowKeys", "expandedRow", "reserve-selected-row-on-paginate", "reserveSelectedRowOnPaginate", "selected-row-keys", "selectedRowKeys", "selectOnRowClick", "column-controller", "columnController", "dragSort", "drag-sort", "hideSortTips", "showSortColumnBgColor", "filter-row", "filterRow", "multiple-sort", "multipleSort", "async-loading", "onChange", "onAsyncLoadingClick", "onColumnChange", "onColumnControllerVisibleChange", "onDataChange", "onDisplayColumnsChange", "onDragSort", "onExpandChange", "onFilterChange", "onSelectChange", "onSortChange"];
var _PrimaryTable = defineComponent({
  name: "TPrimaryTable",
  props: _objectSpread(_objectSpread({}, baseTableProps), primaryTableProps),
  setup: function setup(props, context) {
    var renderTNode = useTNodeJSX();
    var _toRefs = toRefs(props),
      columns = _toRefs.columns,
      columnController = _toRefs.columnController;
    var primaryTableRef = ref(null);
    var showElement = ref(false);
    var _useClassName = useClassName(),
      classPrefix = _useClassName.classPrefix,
      tableDraggableClasses = _useClassName.tableDraggableClasses,
      tableBaseClass = _useClassName.tableBaseClass,
      tableSelectedClasses = _useClassName.tableSelectedClasses,
      tableSortClasses = _useClassName.tableSortClasses;
    var _useConfig = useConfig("table", props.locale),
      globalConfig = _useConfig.globalConfig;
    var _useStyle = useStyle(props),
      sizeClassNames = _useStyle.sizeClassNames;
    var tableSize = computed(function () {
      var _props$size;
      return (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : globalConfig.value.size;
    });
    var _useColumnController = useColumnController(props, context),
      tDisplayColumns = _useColumnController.tDisplayColumns,
      renderColumnController = _useColumnController.renderColumnController;
    var _useRowExpand = useRowExpand(props, context),
      showExpandedRow = _useRowExpand.showExpandedRow,
      showExpandIconColumn = _useRowExpand.showExpandIconColumn,
      getExpandColumn = _useRowExpand.getExpandColumn,
      renderExpandedRow = _useRowExpand.renderExpandedRow,
      onInnerExpandRowClick = _useRowExpand.onInnerExpandRowClick,
      getExpandedRowClass = _useRowExpand.getExpandedRowClass;
    var _useSorter = useSorter(props, context),
      renderSortIcon = _useSorter.renderSortIcon;
    var _useRowSelect = useRowSelect(props, tableSelectedClasses),
      selectColumn = _useRowSelect.selectColumn,
      showRowSelect = _useRowSelect.showRowSelect,
      selectedRowClassNames = _useRowSelect.selectedRowClassNames,
      currentPaginateData = _useRowSelect.currentPaginateData,
      formatToRowSelectColumn = _useRowSelect.formatToRowSelectColumn,
      setTSelectedRowKeys = _useRowSelect.setTSelectedRowKeys,
      onInnerSelectRowClick = _useRowSelect.onInnerSelectRowClick,
      handleRowSelectWithAreaSelection = _useRowSelect.handleRowSelectWithAreaSelection;
    var _useFilter = useFilter(props, context),
      hasEmptyCondition = _useFilter.hasEmptyCondition,
      isTableOverflowHidden = _useFilter.isTableOverflowHidden,
      renderFilterIcon = _useFilter.renderFilterIcon,
      renderFirstFilterRow = _useFilter.renderFirstFilterRow,
      setFilterPrimaryTableRef = _useFilter.setFilterPrimaryTableRef;
    var dragSortParams = computed(function () {
      return {
        showElement: showElement.value
      };
    });
    var _useDragSort = useDragSort(props, context, dragSortParams),
      isRowHandlerDraggable = _useDragSort.isRowHandlerDraggable,
      isRowDraggable = _useDragSort.isRowDraggable,
      isColDraggable = _useDragSort.isColDraggable,
      innerPagination = _useDragSort.innerPagination,
      setDragSortPrimaryTableRef = _useDragSort.setDragSortPrimaryTableRef,
      setDragSortColumns = _useDragSort.setDragSortColumns;
    var _useTableHeader = useTableHeader(props),
      renderTitleWidthIcon = _useTableHeader.renderTitleWidthIcon;
    var _useAsyncLoading = useAsyncLoading(props),
      renderAsyncLoading = _useAsyncLoading.renderAsyncLoading;
    var _useEditableRow = useRowEdit(props),
      errorListMap = _useEditableRow.errorListMap,
      editableKeysMap = _useEditableRow.editableKeysMap,
      validateRowData = _useEditableRow.validateRowData,
      validateTableData = _useEditableRow.validateTableData,
      validateTableCellData = _useEditableRow.validateTableCellData,
      onRuleChange = _useEditableRow.onRuleChange,
      clearValidateData = _useEditableRow.clearValidateData,
      onUpdateEditedCell = _useEditableRow.onUpdateEditedCell,
      getEditRowData = _useEditableRow.getEditRowData,
      onPrimaryTableCellEditChange = _useEditableRow.onPrimaryTableCellEditChange;
    var innerKeyboardRowHover = computed(function () {
      return Boolean(showExpandedRow.value || showRowSelect.value);
    });
    var innerDisableSpaceInactiveRow = computed(function () {
      return Boolean(showExpandedRow.value || showRowSelect.value);
    });
    var primaryTableClasses = computed(function () {
      var _selectColumn$value;
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, tableDraggableClasses.colDraggable, isColDraggable.value), tableDraggableClasses.rowHandlerDraggable, isRowHandlerDraggable.value), tableDraggableClasses.rowDraggable, isRowDraggable.value), tableBaseClass.overflowVisible, isTableOverflowHidden.value === false), tableBaseClass.tableRowEdit, props.editableRowKeys), "".concat(classPrefix, "-table--select-").concat((_selectColumn$value = selectColumn.value) === null || _selectColumn$value === void 0 ? void 0 : _selectColumn$value.type), selectColumn.value), "".concat(classPrefix, "-table--row-select"), showRowSelect.value), "".concat(classPrefix, "-table--row-expandable"), showExpandedRow.value);
    });
    var tRowClassNames = computed(function () {
      var tClassNames = [props.rowClassName, selectedRowClassNames.value, getExpandedRowClass];
      return tClassNames.filter(function (v) {
        return v;
      });
    });
    var tRowAttributes = computed(function () {
      var tAttributes = [props.rowAttributes];
      if (isRowHandlerDraggable.value || isRowDraggable.value) {
        tAttributes.push(function (_ref2) {
          var row = _ref2.row;
          return {
            "data-id": get(row, props.rowKey || "id")
          };
        });
      }
      return tAttributes.filter(function (v) {
        return v;
      });
    });
    onMounted(function () {
      setFilterPrimaryTableRef(primaryTableRef.value);
      setDragSortPrimaryTableRef(primaryTableRef.value);
    });
    context.expose({
      validateRowData: validateRowData,
      validateTableData: validateTableData,
      validateTableCellData: validateTableCellData,
      clearValidateData: clearValidateData,
      refreshTable: function refreshTable() {
        primaryTableRef.value.refreshTable();
      },
      scrollToElement: function scrollToElement(data) {
        primaryTableRef.value.scrollToElement(data);
      },
      scrollColumnIntoView: function scrollColumnIntoView(colKey) {
        primaryTableRef.value.scrollColumnIntoView(colKey);
      },
      baseTableRef: primaryTableRef
    });
    var onEditableCellChange = function onEditableCellChange(params) {
      var _props$onRowEdit;
      (_props$onRowEdit = props.onRowEdit) === null || _props$onRowEdit === void 0 || _props$onRowEdit.call(props, params);
      var rowValue = get(params.editedRow, props.rowKey || "id");
      onUpdateEditedCell(rowValue, params.row, _defineProperty({}, params.col.colKey, params.value));
    };
    var _getColumns = function getColumns(columns2) {
      var parentDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var arr = [];
      var _loop = function _loop() {
        var _item$children, _tDisplayColumns$valu, _item$edit, _item$children2, _item$children3;
        var item = _objectSpread({}, columns2[i]);
        var isDisplayColumn = ((_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length) || ((_tDisplayColumns$valu = tDisplayColumns.value) === null || _tDisplayColumns$valu === void 0 ? void 0 : _tDisplayColumns$valu.includes(item.colKey));
        if (!isDisplayColumn && (props.columnController || props.displayColumns || props.defaultDisplayColumns) && !parentDisplay) return 1; // continue
        item = formatToRowSelectColumn(item);
        var sort = props.sort;
        if (item.sorter && props.showSortColumnBgColor) {
          var sorts = sort instanceof Array ? sort : [sort];
          var sortedColumn = sorts.find(function (sort2) {
            return sort2 && sort2.sortBy === item.colKey && sort2.descending !== void 0;
          });
          if (sortedColumn) {
            item.className = item.className instanceof Array ? item.className.concat(tableSortClasses.sortColumn) : [item.className, tableSortClasses.sortColumn];
          }
        }
        if (item.sorter || item.filter) {
          var titleContent = renderTitle(context.slots, item, i);
          var _item = item,
            ellipsisTitle = _item.ellipsisTitle;
          item.title = function (h2, p) {
            var _primaryTableRef$valu;
            var sortIcon = item.sorter ? renderSortIcon(p) : null;
            var filterIcon = item.filter ? renderFilterIcon(p) : null;
            var attach = (_primaryTableRef$valu = primaryTableRef.value) === null || _primaryTableRef$valu === void 0 ? void 0 : _primaryTableRef$valu.tableContentRef;
            return renderTitleWidthIcon([titleContent, sortIcon, filterIcon], p.col, p.colIndex, ellipsisTitle, attach, {
              classPrefix: classPrefix,
              ellipsisOverlayClassName: tableSize.value !== "medium" ? sizeClassNames[tableSize.value] : ""
            });
          };
          item.ellipsisTitle = false;
        }
        if ((_item$edit = item.edit) !== null && _item$edit !== void 0 && _item$edit.component) {
          var oldCell = item.cell;
          item.cell = function (h2, p) {
            var cellProps = _objectSpread(_objectSpread({}, p), {}, {
              row: getEditRowData(p),
              oldCell: oldCell,
              rowKey: props.rowKey || "id",
              tableBaseClass: tableBaseClass,
              cellEmptyContent: props.cellEmptyContent,
              onChange: onEditableCellChange,
              onValidate: props.onRowValidate,
              onRuleChange: onRuleChange,
              onEditableChange: onPrimaryTableCellEditChange
            });
            if (props.editableRowKeys) {
              var _errorListMap$value;
              var rowValue = get(p.row, props.rowKey || "id");
              cellProps.editable = editableKeysMap.value[rowValue] || false;
              var key = [rowValue, p.col.colKey].join("__");
              var errorList = (_errorListMap$value = errorListMap.value) === null || _errorListMap$value === void 0 ? void 0 : _errorListMap$value[key];
              errorList && (cellProps.errors = errorList);
            }
            if (props.editableCellState) {
              cellProps.readonly = !props.editableCellState(p);
            }
            return createVNode(EditableCell, mergeProps(cellProps, {
              "onUpdateEditedCell": onUpdateEditedCell
            }), context.slots);
          };
        }
        if ((_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length) {
          var _tDisplayColumns$valu2;
          item.children = _getColumns(item.children, parentDisplay || ((_tDisplayColumns$valu2 = tDisplayColumns.value) === null || _tDisplayColumns$valu2 === void 0 ? void 0 : _tDisplayColumns$valu2.includes(item.colKey)));
        }
        if (!item.children || (_item$children3 = item.children) !== null && _item$children3 !== void 0 && _item$children3.length) {
          arr.push(item);
        }
      };
      for (var i = 0, len = columns2.length; i < len; i++) {
        if (_loop()) continue;
      }
      return arr;
    };
    var tColumns = computed(function () {
      var cols = _getColumns(columns.value);
      if (showExpandIconColumn.value) {
        cols.unshift(getExpandColumn());
      }
      return cols;
    });
    var onInnerPageChange = function onInnerPageChange(pageInfo, newData) {
      var _props$onPageChange, _props$onChange;
      innerPagination.value = _objectSpread(_objectSpread({}, innerPagination.value), pageInfo);
      currentPaginateData.value = newData;
      (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, pageInfo, newData);
      var changeParams = [{
        pagination: pageInfo
      }, {
        trigger: "pagination",
        currentData: newData
      }];
      (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call.apply(_props$onChange, [props].concat(changeParams));
      if (!props.reserveSelectedRowOnPaginate) {
        setTSelectedRowKeys([], {
          selectedRowData: [],
          type: "uncheck",
          currentRowKey: "CLEAR_ON_PAGINATE"
        });
      }
    };
    var onInnerActiveRowAction = function onInnerActiveRowAction(params) {
      var _props$onActiveRowAct;
      (_props$onActiveRowAct = props.onActiveRowAction) === null || _props$onActiveRowAct === void 0 || _props$onActiveRowAct.call(props, params);
      handleRowSelectWithAreaSelection(params);
    };
    var onSingleRowClick = function onSingleRowClick(params) {
      if (props.expandOnRowClick) {
        onInnerExpandRowClick(params);
      }
      if (props.selectOnRowClick) {
        onInnerSelectRowClick(params);
      }
    };
    var timer;
    var DURATION = 250;
    var onInnerRowClick = function onInnerRowClick(params) {
      if (!props.onRowDblclick) {
        onSingleRowClick(params);
        return;
      }
      if (timer) {
        clearTimeout(timer);
        timer = void 0;
      } else {
        timer = setTimeout(function () {
          onSingleRowClick(params);
          timer = void 0;
        }, DURATION);
      }
    };
    var onShowElementChange = function onShowElementChange(val) {
      showElement.value = val;
    };
    var formatNode = function formatNode(api, renderInnerNode, condition, extra) {
      if (!condition) return props[api];
      var innerNode = renderInnerNode(h);
      var propsNode = renderTNode(api);
      if (innerNode && !propsNode) return function () {
        return innerNode;
      };
      if (propsNode && !innerNode) return function () {
        return propsNode;
      };
      if (innerNode && propsNode) {
        return function () {
          return extra !== null && extra !== void 0 && extra.reverse ? createVNode("div", null, [innerNode, propsNode]) : createVNode("div", null, [propsNode, innerNode]);
        };
      }
      return null;
    };
    return function () {
      var _props$keyboardRowHov, _props$disableSpaceIn;
      var isColumnController = !!(columnController.value && Object.keys(columnController.value).length);
      var placement = isColumnController ? columnController.value.placement || "top-right" : "";
      var isBottomController = isColumnController && (placement === null || placement === void 0 ? void 0 : placement.indexOf("bottom")) !== -1;
      var topContent = formatNode("topContent", renderColumnController, isColumnController && !isBottomController);
      var bottomContent = formatNode("bottomContent", renderColumnController, isBottomController, {
        reverse: true
      });
      var firstFullRow = formatNode("firstFullRow", renderFirstFilterRow, !hasEmptyCondition.value);
      var lastFullRow = formatNode("lastFullRow", renderAsyncLoading, !!props.asyncLoading);
      var _getCurrentInstance = getCurrentInstance(),
        vnode = _getCurrentInstance.vnode;
      var baseTableProps2 = _objectSpread(_objectSpread({}, omit(vnode.props, OMIT_PROPS)), {}, {
        rowKey: props.rowKey,
        rowClassName: tRowClassNames.value,
        rowAttributes: tRowAttributes.value,
        columns: tColumns.value,
        keyboardRowHover: (_props$keyboardRowHov = props.keyboardRowHover) !== null && _props$keyboardRowHov !== void 0 ? _props$keyboardRowHov : innerKeyboardRowHover.value,
        disableSpaceInactiveRow: (_props$disableSpaceIn = props.disableSpaceInactiveRow) !== null && _props$disableSpaceIn !== void 0 ? _props$disableSpaceIn : innerDisableSpaceInactiveRow.value,
        topContent: topContent,
        bottomContent: bottomContent,
        firstFullRow: firstFullRow,
        lastFullRow: lastFullRow,
        thDraggable: ["col", "row-handler-col"].includes(props.dragSort),
        onShowElementChange: onShowElementChange,
        onPageChange: onInnerPageChange,
        renderExpandedRow: showExpandedRow.value ? renderExpandedRow : void 0,
        onActiveRowAction: onInnerActiveRowAction
      });
      if (props.expandOnRowClick || props.selectOnRowClick) {
        baseTableProps2.onRowClick = onInnerRowClick;
      }
      return createVNode(_BaseTable, mergeProps(baseTableProps2, {
        "ref": primaryTableRef,
        "class": primaryTableClasses.value,
        "onLeafColumnsChange": setDragSortColumns
      }), context.slots);
    };
  }
});

export { _PrimaryTable as default };
//# sourceMappingURL=primary-table.js.map
