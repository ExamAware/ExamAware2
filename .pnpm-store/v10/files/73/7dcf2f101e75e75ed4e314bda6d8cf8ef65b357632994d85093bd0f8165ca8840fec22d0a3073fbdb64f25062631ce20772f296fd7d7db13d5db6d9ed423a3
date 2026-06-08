/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, createVNode, mergeProps, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import { Pagination } from '../../pagination/index.js';
import { Checkbox, CheckboxGroup } from '../../checkbox/index.js';
import { getDataValues, getLefCount, TARGET } from '../utils/index.js';
import Search from './transfer-search.js';
import { filter, cloneDeep, isString } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../../_chunks/dep-fe23be6e.js';
import { b as useTNodeDefault } from '../../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import useDragSort from '../hooks/useDragSort.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '../../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../../_chunks/dep-aa34a263.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-51e5a827.js';
import '../../input-number/index.js';
import '../../input-number/input-number.js';
import '../../button/index.js';
import '../../button/button.js';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-664b8b22.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../input/index.js';
import '../../input/input.js';
import '../../input/props.js';
import '../../_chunks/dep-47b13687.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../_chunks/dep-80a77612.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../input-number/props.js';
import '../../_chunks/dep-4d7b9152.js';
import '../../input-number/hooks/useInputNumber.js';
import '../../_chunks/dep-1a63d163.js';
import '../../_chunks/dep-05f15b4e.js';
import '../../select/index.js';
import '../../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../common-components/fake-arrow.js';
import '../../select-input/index.js';
import '../../select-input/select-input.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../popup/container.js';
import '../../popup/props.js';
import '../../select-input/props.js';
import '../../select-input/hooks/useMultiple.js';
import '../../tag-input/index.js';
import '../../tag-input/tag-input.js';
import '../../tag-input/props.js';
import '../../tag-input/hooks/useDragSorter.js';
import '../../tag-input/hooks/useHover.js';
import '../../tag-input/hooks/useTagScroll.js';
import '../../tag-input/hooks/useTagList.js';
import '../../tag/index.js';
import '../../tag/tag.js';
import 'tinycolor2';
import '../../tag/props.js';
import '../../tag/check-tag.js';
import '../../tag/check-tag-props.js';
import '../../_chunks/dep-30c631d1.js';
import '../../tag/check-tag-group.js';
import '../../tag/check-tag-group-props.js';
import '../../select-input/hooks/useOverlayInnerStyle.js';
import '../../select-input/hooks/useSingle.js';
import '../../select/components/select-panel.js';
import '../../select/option.js';
import '../../select/option-props.js';
import '../../select/utils/index.js';
import '../../select/consts/index.js';
import '../../checkbox/checkbox.js';
import '../../checkbox/props.js';
import '../../checkbox/consts/index.js';
import '../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../_chunks/dep-6264b0a7.js';
import '../../checkbox/hooks/useKeyboardEvent.js';
import '../../checkbox/group.js';
import '../../checkbox/checkbox-group-props.js';
import '../../_chunks/dep-e3ce8c8f.js';
import '../../select/option-group.js';
import '../../select/option-group-props.js';
import '../../select/props.js';
import '../../select/hooks/usePanelVirtualScroll.js';
import '../../select/hooks/useKeyboardControl.js';
import '../../select/hooks/useSelectOptions.js';
import '../../input-adornment/index.js';
import '../../input-adornment/input-adornment.js';
import '../../input-adornment/props.js';
import '../../pagination/props.js';
import '../../pagination/hooks/useMoreAction.js';
import '../../pagination/hooks/usePaginationClasses.js';
import '../../pagination/pagination-mini.js';
import '../../pagination/pagination-mini-props.js';
import '../../tooltip/index.js';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../tooltip/utils/index.js';

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
//# sourceMappingURL=transfer-list.js.map
