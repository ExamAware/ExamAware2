/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, ref, computed, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _typeof } from '../../_chunks/dep-257428bc.mjs';
import { Pagination } from '../../pagination/index.mjs';
import { CheckboxGroup, Checkbox } from '../../checkbox/index.mjs';
import { getDataValues, getLefCount, TARGET } from '../utils/index.mjs';
import Search from './transfer-search.mjs';
import { u as usePrefixClass, q as useTNodeDefault } from '../../_chunks/dep-7673347f.mjs';
import { filter, cloneDeep, isString } from 'lodash-es';
import useDragSort from '../hooks/useDragSort.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../pagination/pagination.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import 'tdesign-icons-vue-next';
import '../../input-number/index.mjs';
import '../../input-number/input-number.mjs';
import '../../button/index.mjs';
import '../../button/button.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../loading/props.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import '../../input/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import '../../input-number/props.mjs';
import '../../input-number/hooks/useInputNumber.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../select/index.mjs';
import '../../select/select.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../common-components/fake-arrow.mjs';
import '../../select-input/index.mjs';
import '../../select-input/select-input.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../popup/props.mjs';
import '../../select-input/props.mjs';
import '../../select-input/hooks/index.mjs';
import '../../select-input/hooks/useMultiple.mjs';
import '../../tag-input/index.mjs';
import '../../tag-input/tag-input.mjs';
import '../../tag-input/props.mjs';
import '../../tag-input/hooks/index.mjs';
import '../../tag-input/hooks/useDragSorter.mjs';
import '../../tag-input/hooks/useHover.mjs';
import '../../tag-input/hooks/useTagScroll.mjs';
import '../../tag-input/hooks/useTagList.mjs';
import '../../tag/index.mjs';
import '../../tag/tag.mjs';
import '../../_chunks/dep-b31d8258.mjs';
import '../../tag/props.mjs';
import '../../tag/check-tag.mjs';
import '../../tag/check-tag-props.mjs';
import '../../tag/check-tag-group.mjs';
import '../../tag/check-tag-group-props.mjs';
import '../../select-input/hooks/useOverlayInnerStyle.mjs';
import '../../select-input/hooks/useSingle.mjs';
import '../../select/components/select-panel.mjs';
import '../../select/option.mjs';
import '../../select/option-props.mjs';
import '../../select/utils/index.mjs';
import '../../select/consts/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import '../../select/option-group.mjs';
import '../../select/option-group-props.mjs';
import '../../select/props.mjs';
import '../../select/hooks/index.mjs';
import '../../select/hooks/useKeyboardControl.mjs';
import '../../select/hooks/usePanelVirtualScroll.mjs';
import '../../select/hooks/useSelectOptions.mjs';
import '../../input-adornment/index.mjs';
import '../../input-adornment/input-adornment.mjs';
import '../../input-adornment/props.mjs';
import '../../pagination/props.mjs';
import '../../pagination/hooks/index.mjs';
import '../../pagination/hooks/useMoreAction.mjs';
import '../../pagination/hooks/usePaginationClasses.mjs';
import '../../pagination/pagination-mini.mjs';
import '../../pagination/pagination-mini-props.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../tooltip/utils/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var props = {
  checkboxProps: {
    type: Object,
    "default": function _default() {
      return {};
    }
  },
  dataSource: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  listType: {
    type: String,
    "default": "target"
  },
  title: {
    type: [String, Function]
  },
  checkedValue: {
    type: Array,
    "default": function _default() {
      return [];
    }
  },
  disabled: {
    type: Boolean,
    "default": false
  },
  search: {
    type: [Boolean, Object],
    "default": false
  },
  transferItem: Function,
  empty: {
    type: [Function, String]
  },
  pagination: [Boolean, Object],
  footer: [Function, String],
  checkAll: Boolean,
  isTreeMode: {
    type: Boolean,
    "default": false
  },
  onCheckedChange: Function,
  onPageChange: Function,
  onScroll: Function,
  onSearch: Function,
  onDataChange: Function,
  draggable: Boolean,
  currentValue: {
    type: Array
  }
};
var TransferList = defineComponent({
  name: "TTransferList",
  props: props,
  setup: function setup(props2) {
    var classPrefix = usePrefixClass();
    var _toRefs = toRefs(props2),
      currentValue = _toRefs.currentValue;
    var _useConfig = useConfig("transfer"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var filterValue = ref("");
    var defaultCurrent = ref(1);
    var defaultPageSize = ref(0);
    var currentPage = computed(function () {
      var pagination = props2.pagination;
      return (pagination === null || pagination === void 0 ? void 0 : pagination.current) || defaultCurrent.value || (pagination === null || pagination === void 0 ? void 0 : pagination.defaultCurrent);
    });
    var pageSize = computed(function () {
      var pagination = props2.pagination;
      return (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) || defaultPageSize.value || (pagination === null || pagination === void 0 ? void 0 : pagination.defaultPageSize);
    });
    var filteredData = computed(function () {
      var isTreeData = props2.dataSource.some(function (item) {
        return item.children && item.children.length;
      });
      if (!isTreeData) {
        return props2.dataSource.filter(function (item) {
          var label = item && item.label.toString();
          return label.toLowerCase().indexOf(filterValue.value.toLowerCase()) > -1;
        });
      } else {
        return _filteredTreeData(props2.dataSource, filterValue.value);
      }
    });
    var pageTotal = computed(function () {
      return filteredData.value && filteredData.value.length || 0;
    });
    var curPageData = computed(function () {
      var pageData = filteredData.value;
      if (!props2.pagination) return pageData;
      if (pageSize.value === 0) return pageData;
      var startIndex = (currentPage.value - 1) * pageSize.value;
      var endIndex = currentPage.value * pageSize.value;
      pageData = pageData.slice(startIndex, endIndex);
      return pageData;
    });
    var paginationProps = computed(function () {
      var defaultPaginationProps = {
        totalContent: false,
        pageSizeOptions: []
      };
      return _typeof(props2.pagination) === "object" ? _objectSpread(_objectSpread(_objectSpread({}, defaultPaginationProps), props2.pagination), {}, {
        size: "small",
        theme: "simple",
        current: currentPage.value,
        total: pageTotal.value,
        pageSize: pageSize.value
      }) : {};
    });
    var _useDragSort = useDragSort(currentValue, curPageData, props2.onDataChange),
      onDragStart = _useDragSort.onDragStart,
      onDragEnd = _useDragSort.onDragEnd,
      onDrop = _useDragSort.onDrop,
      onDragOver = _useDragSort.onDragOver,
      onDragLeave = _useDragSort.onDragLeave;
    var isAllChecked = computed(function () {
      var allValue = getDataValues(props2.dataSource, [], {
        isTreeMode: props2.isTreeMode,
        include: false
      });
      return props2.checkedValue.length > 0 && (props2.isTreeMode ? allValue.every(function (item) {
        return props2.checkedValue.includes(item);
      }) : (props2.search ? filteredData.value : props2.dataSource).every(function (item) {
        return item.disabled || props2.checkedValue.includes(item.value);
      }));
    });
    var indeterminate = computed(function () {
      return !isAllChecked.value && props2.checkedValue.length > 0;
    });
    var totalCount = computed(function () {
      return getLefCount(props2.dataSource);
    });
    watch(totalCount, function (val) {
      if (val <= (currentPage.value - 1) * pageSize.value) {
        var lastPage = Math.ceil(val / pageSize.value);
        defaultCurrent.value = lastPage;
      }
    });
    var _filteredTreeData = function filteredTreeData(list, keyword) {
      var res = filter(cloneDeep(list), function (node) {
        if (node.label.toLowerCase().includes(keyword.toLowerCase())) {
          return true;
        }
        if (node.children && node.children.length > 0) {
          node.children = _filteredTreeData(node.children, keyword);
          if (node.children.length > 0) {
            return true;
          }
        }
        return false;
      });
      return res;
    };
    var handlePaginationChange = function handlePaginationChange(pageInfo) {
      var _props2$onPageChange;
      (_props2$onPageChange = props2.onPageChange) === null || _props2$onPageChange === void 0 || _props2$onPageChange.call(props2, pageInfo);
      defaultCurrent.value = pageInfo.current;
      defaultPageSize.value = pageInfo.pageSize;
    };
    var handleCheckedChange = function handleCheckedChange(val) {
      var _props2$onCheckedChan;
      (_props2$onCheckedChan = props2.onCheckedChange) === null || _props2$onCheckedChan === void 0 || _props2$onCheckedChan.call(props2, val);
    };
    var handleCheckedAllChange = function handleCheckedAllChange(checked) {
      if (checked) {
        var allValue = getDataValues(props2.search ? filteredData.value : props2.dataSource, [], {
          isTreeMode: props2.isTreeMode,
          include: false
        });
        handleCheckedChange(allValue);
      } else {
        handleCheckedChange([]);
      }
    };
    var handleScroll = function handleScroll(e) {
      var _props2$onScroll;
      (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 || _props2$onScroll.call(props2, e);
    };
    var handleSearch = function handleSearch(e) {
      var _props2$onSearch;
      var event = {
        query: e.value,
        type: props2.listType,
        e: e.e,
        trigger: e.trigger
      };
      filterValue.value = e.value;
      (_props2$onSearch = props2.onSearch) === null || _props2$onSearch === void 0 || _props2$onSearch.call(props2, event);
    };
    var renderTNodeJSX = useTNodeDefault();
    var renderTitle = function renderTitle() {
      var defaultNode = props2.title && isString(props2.title) ? createVNode("template", null, [props2.title]) : null;
      var titleNode = renderTNodeJSX("title", {
        defaultNode: defaultNode,
        params: {
          type: props2.listType
        }
      });
      return createVNode("span", null, [titleNode]);
    };
    var renderContent = function renderContent() {
      var isDraggable = props2.draggable && props2.listType === TARGET;
      var defaultNode = null;
      if (!isDraggable) {
        var _slot2;
        defaultNode = createVNode(CheckboxGroup, {
          "value": props2.checkedValue,
          "onChange": handleCheckedChange
        }, _isSlot(_slot2 = curPageData.value.map(function (item, index) {
          var _slot;
          return createVNode(Checkbox, mergeProps({
            "disabled": props2.disabled || item.disabled,
            "value": item.value,
            "needRipple": true,
            "class": ["".concat(classPrefix.value, "-transfer__list-item"), props2.checkedValue.includes(item.value) ? "".concat(classPrefix.value, "-is-checked") : ""],
            "key": item.key
          }, props2.checkboxProps), _isSlot(_slot = renderTNodeJSX("transferItem", {
            defaultNode: createVNode("span", null, [item.label]),
            params: {
              data: item.data,
              index: index,
              type: props2.listType
            }
          })) ? _slot : {
            "default": function _default() {
              return [_slot];
            }
          });
        })) ? _slot2 : {
          "default": function _default() {
            return [_slot2];
          }
        });
      } else {
        var _slot4;
        defaultNode = createVNode(CheckboxGroup, {
          "value": props2.checkedValue,
          "onChange": handleCheckedChange
        }, _isSlot(_slot4 = curPageData.value.map(function (item, index) {
          var _slot3;
          return createVNode("div", {
            "draggable": isDraggable,
            "onDragend": onDragEnd,
            "onDragstart": onDragStart,
            "onDragover": onDragOver,
            "onDragleave": onDragLeave,
            "onDrop": onDrop,
            "data-index": index
          }, [createVNode(Checkbox, mergeProps({
            "disabled": props2.disabled || item.disabled,
            "value": item.value,
            "needRipple": true,
            "class": ["".concat(classPrefix.value, "-transfer__list-item"), props2.checkedValue.includes(item.value) ? "".concat(classPrefix.value, "-is-checked") : ""],
            "key": item.key
          }, props2.checkboxProps), _isSlot(_slot3 = renderTNodeJSX("transferItem", {
            defaultNode: createVNode("span", null, [item.label]),
            params: {
              data: item.data,
              index: index,
              type: props2.listType
            }
          })) ? _slot3 : {
            "default": function _default() {
              return [_slot3];
            }
          })]);
        })) ? _slot4 : {
          "default": function _default() {
            return [_slot4];
          }
        });
      }
      return createVNode("div", {
        "class": ["".concat(classPrefix.value, "-transfer__list-content"), "narrow-scrollbar"],
        "onScroll": handleScroll
      }, [renderTNodeJSX("tree", {
        defaultNode: defaultNode,
        params: {
          data: curPageData.value,
          value: props2.checkedValue,
          onChange: handleCheckedChange
        }
      })]);
    };
    var renderEmpty = function renderEmpty() {
      var empty = props2.empty || t(globalConfig.value.empty);
      var defaultNode = isString(empty) ? createVNode("span", null, [empty]) : null;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__empty")
      }, [renderTNodeJSX("empty", {
        defaultNode: defaultNode,
        params: {
          type: props2.listType
        }
      })]);
    };
    var renderFooter = function renderFooter() {
      var defaultNode = isString(props2.footer) ? createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__footer")
      }, [props2.footer]) : null;
      return renderTNodeJSX("footer", {
        defaultNode: defaultNode,
        params: {
          type: props2.listType
        }
      });
    };
    return function () {
      return createVNode("div", {
        "class": ["".concat(classPrefix.value, "-transfer__list"), "".concat(classPrefix.value, "-transfer__list-").concat(props2.listType)]
      }, [createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__list-header")
      }, [createVNode("div", null, [props2.checkAll && createVNode(Checkbox, {
        "disabled": props2.disabled || !props2.dataSource.length,
        "checked": isAllChecked.value,
        "indeterminate": indeterminate.value,
        "onChange": handleCheckedAllChange
      }, null), createVNode("span", null, [t(globalConfig.value.title, {
        checked: props2.checkedValue.length,
        total: totalCount.value
      })])]), renderTitle()]), createVNode("div", {
        "class": ["".concat(classPrefix.value, "-transfer__list-body"), props2.search ? "".concat(classPrefix.value, "-transfer__list--with-search") : ""]
      }, [props2.search && createVNode(Search, {
        "searchValue": filterValue.value,
        "placeholder": t(globalConfig.value.placeholder),
        "onChange": handleSearch,
        "disabled": props2.disabled,
        "search": props2.search
      }, null), curPageData.value.length > 0 ? renderContent() : renderEmpty()]), props2.pagination && pageSize.value > 0 && pageTotal.value > 0 && createVNode("div", {
        "class": "".concat(classPrefix.value, "-transfer__list-pagination")
      }, [createVNode(Pagination, mergeProps(paginationProps.value, {
        "onChange": handlePaginationChange
      }), null)]), renderFooter()]);
    };
  }
});

export { TransferList as default };
//# sourceMappingURL=transfer-list.mjs.map
