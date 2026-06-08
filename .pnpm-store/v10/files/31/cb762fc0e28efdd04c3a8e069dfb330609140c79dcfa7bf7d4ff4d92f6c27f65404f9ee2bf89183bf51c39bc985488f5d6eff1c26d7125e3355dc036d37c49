/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, getCurrentInstance, createVNode, mergeProps } from 'vue';
import { _ as _objectWithoutProperties } from '../_chunks/dep-0dcc778a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import baseTableProps from './base-table-props.mjs';
import primaryTableProps from './primary-table-props.mjs';
import enhancedTableProps from './enhanced-table-props.mjs';
import _PrimaryTable from './primary-table.mjs';
import useTreeData from './hooks/useTreeData.mjs';
import useTreeSelect from './hooks/useTreeSelect.mjs';
import { get } from 'lodash-es';
import '../_chunks/dep-6d2705e1.mjs';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import { l as log } from '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-257428bc.mjs';
import './base-table.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import './hooks/useTableHeader.mjs';
import './hooks/useMultiHeader.mjs';
import './hooks/useClassName.mjs';
import './components/ellipsis.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../tooltip/utils/index.mjs';
import './hooks/useColumnResize.mjs';
import './hooks/useFixed.mjs';
import '../_chunks/dep-03148507.mjs';
import '../_chunks/dep-0cde7579.mjs';
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
import './hooks/useAffix.mjs';
import './components/tbody.mjs';
import './components/tr.mjs';
import './utils/index.mjs';
import './hooks/useLazyLoad.mjs';
import './hooks/useRowspanAndColspan.mjs';
import './hooks/useStyle.mjs';
import '../affix/index.mjs';
import '../affix/affix.mjs';
import '../affix/props.mjs';
import './components/thead.mjs';
import './components/tfoot.mjs';
import './hooks/useRowHighlight.mjs';
import './hooks/useHoverKeyboardEvent.mjs';
import './hooks/useColumnController.mjs';
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
import './hooks/useRowExpand.mjs';
import './hooks/useRowSelect.mjs';
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
import './hooks/useSorter.mjs';
import './components/sorter-button.mjs';
import './hooks/useFilter.mjs';
import './components/filter-controller.mjs';
import './hooks/useDragSort.mjs';
import 'sortablejs';
import './hooks/useAsyncLoading.mjs';
import './components/editable-cell.mjs';
import '../_chunks/dep-4d44d5f2.mjs';
import '../form/utils/form-model.mjs';
import './hooks/useEditableRow.mjs';
import '../_chunks/dep-8d7b8b7d.mjs';

var _excluded = ["store", "dataSource", "formatTreeColumn", "swapData", "onExpandFoldIconClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _EnhancedTable = defineComponent({
  name: "TEnhancedTable",
  props: _objectSpread(_objectSpread(_objectSpread({}, baseTableProps), primaryTableProps), enhancedTableProps),
  setup: function setup(props, context) {
    var primaryTableRef = ref(null);
    var _useTreeData = useTreeData(props, context),
      store = _useTreeData.store,
      dataSource = _useTreeData.dataSource,
      formatTreeColumn = _useTreeData.formatTreeColumn,
      swapData = _useTreeData.swapData,
      onExpandFoldIconClick = _useTreeData.onExpandFoldIconClick,
      treeInstanceFunctions = _objectWithoutProperties(_useTreeData, _excluded);
    var classPrefix = usePrefixClass();
    var treeDataMap = ref(store.value.treeDataMap);
    var _useTreeSelect = useTreeSelect(props, treeDataMap),
      tIndeterminateSelectedRowKeys = _useTreeSelect.tIndeterminateSelectedRowKeys,
      onInnerSelectChange = _useTreeSelect.onInnerSelectChange;
    var _getColumns = function getColumns(columns) {
      var arr = [];
      for (var i = 0, len = columns.length; i < len; i++) {
        var _item$children, _item$children2;
        var item = _objectSpread({}, columns[i]);
        item = formatTreeColumn(item);
        if ((_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length) {
          item.children = _getColumns(item.children);
        }
        if (!item.children || (_item$children2 = item.children) !== null && _item$children2 !== void 0 && _item$children2.length) {
          arr.push(item);
        }
      }
      return arr;
    };
    var tColumns = computed(function () {
      var isTreeData = !props.tree || !Object.keys(props.tree).length;
      return isTreeData ? props.columns : _getColumns(props.columns);
    });
    var onDragSortChange = function onDragSortChange(params) {
      var _props$onDragSort;
      if (props.beforeDragSort && !props.beforeDragSort(params)) return;
      swapData({
        current: params.current,
        target: params.target,
        currentIndex: params.currentIndex,
        targetIndex: params.targetIndex
      });
      (_props$onDragSort = props.onDragSort) === null || _props$onDragSort === void 0 || _props$onDragSort.call(props, params);
    };
    var onEnhancedTableRowClick = function onEnhancedTableRowClick(p) {
      var _props$tree, _props$onRowClick;
      if ((_props$tree = props.tree) !== null && _props$tree !== void 0 && _props$tree.expandTreeNodeOnClick) {
        onExpandFoldIconClick({
          row: p.row,
          rowIndex: p.index
        }, "row-click");
      }
      (_props$onRowClick = props.onRowClick) === null || _props$onRowClick === void 0 || _props$onRowClick.call(props, p);
    };
    var _getScrollRowIndex = function getScrollRowIndex(rowStateData, key) {
      if (!rowStateData) return -1;
      if (rowStateData.rowIndex >= 0) return rowStateData.rowIndex;
      if (rowStateData.rowIndex < 0) {
        return _getScrollRowIndex(rowStateData.parent, key);
      }
    };
    var scrollToElement = function scrollToElement(params) {
      var index = params.index;
      if (!index && index !== 0) {
        if (!params.key) {
          log.error("Table", "scrollToElement: one of `index` or `key` must exist.");
          return;
        }
        var rowStateData = treeDataMap.value.get(params.key);
        index = _getScrollRowIndex(rowStateData, params.key);
        if (index < 0 || index === void 0) {
          log.error("Table", "".concat(params.key, " does not exist in data, check `rowKey` or `data` please."));
        }
      }
      primaryTableRef.value.scrollToElement(_objectSpread(_objectSpread({}, params), {}, {
        index: index
      }));
    };
    context.expose(_objectSpread(_objectSpread({
      store: store.value,
      dataSource: dataSource.value
    }, treeInstanceFunctions), {}, {
      primaryTableRef: primaryTableRef,
      validateRowData: function validateRowData(rowValue) {
        return primaryTableRef.value.validateRowData(rowValue);
      },
      validateTableData: function validateTableData() {
        return primaryTableRef.value.validateTableData();
      },
      clearValidateData: function clearValidateData() {
        primaryTableRef.value.clearValidateData();
      },
      refreshTable: function refreshTable() {
        primaryTableRef.value.refreshTable();
      },
      scrollToElement: scrollToElement
    }));
    return function () {
      var _props$tree2;
      var _getCurrentInstance = getCurrentInstance(),
        vnode = _getCurrentInstance.vnode;
      var enhancedProps = _objectSpread(_objectSpread({}, vnode.props), {}, {
        rowKey: props.rowKey || "id",
        data: dataSource.value,
        columns: tColumns.value,
        indeterminateSelectedRowKeys: tIndeterminateSelectedRowKeys.value,
        disableDataPage: Boolean(props.tree && Object.keys(props.tree).length) || props.disableDataPage,
        onSelectChange: onInnerSelectChange,
        onDragSort: onDragSortChange,
        rowClassName: function rowClassName(_ref) {
          var row = _ref.row;
          var rowValue = get(row, props.rowKey || "id");
          var rowState = treeDataMap.value.get(rowValue);
          if (!rowState) return [props.rowClassName];
          return ["".concat(classPrefix.value, "-table-tr--level-").concat(rowState.level), props.rowClassName];
        }
      });
      if ((_props$tree2 = props.tree) !== null && _props$tree2 !== void 0 && _props$tree2.expandTreeNodeOnClick) {
        enhancedProps.onRowClick = onEnhancedTableRowClick;
      }
      return createVNode(_PrimaryTable, mergeProps(enhancedProps, {
        "ref": primaryTableRef
      }), context.slots);
    };
  }
});

export { _EnhancedTable as default };
//# sourceMappingURL=enhanced-table.mjs.map
