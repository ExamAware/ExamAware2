/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, onMounted, createVNode, mergeProps, h, getCurrentInstance } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { get, omit } from 'lodash-es';
import baseTableProps from './base-table-props.mjs';
import primaryTableProps from './primary-table-props.mjs';
import _BaseTable from './base-table.mjs';
export { BASE_TABLE_ALL_EVENTS } from './base-table.mjs';
import { a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import useColumnController from './hooks/useColumnController.mjs';
import useRowExpand from './hooks/useRowExpand.mjs';
import useTableHeader, { renderTitle } from './hooks/useTableHeader.mjs';
import useRowSelect from './hooks/useRowSelect.mjs';
import useSorter from './hooks/useSorter.mjs';
import useFilter from './hooks/useFilter.mjs';
import useDragSort from './hooks/useDragSort.mjs';
import useAsyncLoading from './hooks/useAsyncLoading.mjs';
import EditableCell from './components/editable-cell.mjs';
import useClassName from './hooks/useClassName.mjs';
import useRowEdit from './hooks/useEditableRow.mjs';
import useStyle from './hooks/useStyle.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import './hooks/useColumnResize.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import './hooks/useFixed.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-03148507.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import './hooks/usePagination.mjs';
import '../pagination/index.mjs';
import '../pagination/pagination.mjs';
import 'tdesign-icons-vue-next';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../select/index.mjs';
import '../select/select.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
import '../select-input/index.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
import '../tag/index.mjs';
import '../tag/tag.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../tag/props.mjs';
import '../tag/check-tag.mjs';
import '../tag/check-tag-props.mjs';
import '../tag/check-tag-group.mjs';
import '../tag/check-tag-group-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';
import '../select/components/select-panel.mjs';
import '../select/option.mjs';
import '../select/option-props.mjs';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../checkbox/group.mjs';
import '../checkbox/checkbox-group-props.mjs';
import '../select/utils/index.mjs';
import '../select/consts/index.mjs';
import '../select/option-group.mjs';
import '../select/option-group-props.mjs';
import '../select/props.mjs';
import '../select/hooks/index.mjs';
import '../select/hooks/useKeyboardControl.mjs';
import '../select/hooks/usePanelVirtualScroll.mjs';
import '../select/hooks/useSelectOptions.mjs';
import '../input-adornment/index.mjs';
import '../input-adornment/input-adornment.mjs';
import '../input-adornment/props.mjs';
import '../pagination/props.mjs';
import '../pagination/hooks/index.mjs';
import '../pagination/hooks/useMoreAction.mjs';
import '../pagination/hooks/usePaginationClasses.mjs';
import '../pagination/pagination-mini.mjs';
import '../pagination/pagination-mini-props.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../tooltip/utils/index.mjs';
import './hooks/useAffix.mjs';
import './components/tbody.mjs';
import './components/tr.mjs';
import './utils/index.mjs';
import './components/ellipsis.mjs';
import './hooks/useLazyLoad.mjs';
import './hooks/useRowspanAndColspan.mjs';
import '../affix/index.mjs';
import '../affix/affix.mjs';
import '../affix/props.mjs';
import './components/thead.mjs';
import './components/tfoot.mjs';
import './hooks/useRowHighlight.mjs';
import './hooks/useHoverKeyboardEvent.mjs';
import './hooks/useMultiHeader.mjs';
import '../dialog/plugin.mjs';
import '../dialog/dialog.mjs';
import '../dialog/props.mjs';
import '../dialog/hooks/index.mjs';
import '../dialog/hooks/useAction.mjs';
import '../dialog/hooks/useSameTarget.mjs';
import '../dialog/utils/index.mjs';
import '../dialog/dialog-card.mjs';
import '../dialog/dialog-card-props.mjs';
import './components/column-checkbox-group.mjs';
import '../_chunks/dep-ec9bd76e.mjs';
import '../radio/index.mjs';
import '../radio/radio.mjs';
import '../radio/props.mjs';
import '../radio/consts/index.mjs';
import '../radio/group.mjs';
import '../radio/radio-group-props.mjs';
import '../radio/radio-button.mjs';
import '../radio/hooks/index.mjs';
import '../radio/hooks/useKeyboard.mjs';
import '../watermark/hooks/index.mjs';
import './components/sorter-button.mjs';
import './components/filter-controller.mjs';
import 'sortablejs';
import '../_chunks/dep-4d44d5f2.mjs';
import '../form/utils/form-model.mjs';

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
//# sourceMappingURL=primary-table.mjs.map
