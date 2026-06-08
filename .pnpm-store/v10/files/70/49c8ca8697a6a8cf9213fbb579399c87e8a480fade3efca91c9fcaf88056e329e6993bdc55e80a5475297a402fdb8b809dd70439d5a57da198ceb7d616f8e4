/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, createVNode, mergeProps, nextTick } from 'vue';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isObject, isNaN } from 'lodash-es';
import { PageFirstIcon, PageLastIcon, ChevronLeftIcon, ChevronRightIcon, ChevronLeftDoubleIcon, ChevronRightDoubleIcon, EllipsisIcon } from 'tdesign-icons-vue-next';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import { InputNumber } from '../input-number/index.js';
import { Select } from '../select/index.js';
import { InputAdornment } from '../input-adornment/index.js';
import props from './props.js';
import { useMoreAction } from './hooks/useMoreAction.js';
import { usePaginationClasses } from './hooks/usePaginationClasses.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
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
import '../_chunks/dep-8295e674.js';
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
import '../input-adornment/input-adornment.js';
import '../input-adornment/props.js';

var _excluded = ["pageCount"];
var min = 1;
var _Pagination = defineComponent({
  name: "TPagination",
  props: props,
  setup: function setup(props2) {
    var _toRefs = toRefs(props2),
      modelValue = _toRefs.modelValue,
      pageSize = _toRefs.pageSize,
      current = _toRefs.current;
    var renderTNodeJSX = useTNodeJSX();
    var _useVModel = useVModel(current, modelValue, props2.defaultCurrent, props2.onCurrentChange, "current"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerCurrent = _useVModel2[0],
      setInnerCurrent = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(pageSize, props2.defaultPageSize, props2.onPageSizeChange, "pageSize"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      innerPageSize = _useDefaultValue2[0],
      setInnerPageSize = _useDefaultValue2[1];
    var _useConfig = useConfig("pagination"),
      t = _useConfig.t,
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("pagination");
    var _useGlobalIcon = useGlobalIcon({
        PageFirstIcon: PageFirstIcon,
        PageLastIcon: PageLastIcon,
        ChevronLeftIcon: ChevronLeftIcon,
        ChevronRightIcon: ChevronRightIcon,
        ChevronLeftDoubleIcon: ChevronLeftDoubleIcon,
        ChevronRightDoubleIcon: ChevronRightDoubleIcon,
        EllipsisIcon: EllipsisIcon
      }),
      PageFirstIcon$1 = _useGlobalIcon.PageFirstIcon,
      PageLastIcon$1 = _useGlobalIcon.PageLastIcon,
      ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon,
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon,
      ChevronLeftDoubleIcon$1 = _useGlobalIcon.ChevronLeftDoubleIcon,
      ChevronRightDoubleIcon$1 = _useGlobalIcon.ChevronRightDoubleIcon,
      EllipsisIcon$1 = _useGlobalIcon.EllipsisIcon;
    var _usePaginationClasses = usePaginationClasses(props2, innerCurrent, innerPageSize, COMPONENT_NAME),
      pageCount = _usePaginationClasses.pageCount,
      CLASS_MAP = _objectWithoutProperties(_usePaginationClasses, _excluded);
    var _useMoreAction = useMoreAction(props2, pageCount, innerCurrent),
      prevMore = _useMoreAction.prevMore,
      isPrevMoreShow = _useMoreAction.isPrevMoreShow,
      curPageLeftCount = _useMoreAction.curPageLeftCount,
      nextMore = _useMoreAction.nextMore,
      isNextMoreShow = _useMoreAction.isNextMoreShow,
      curPageRightCount = _useMoreAction.curPageRightCount;
    var jumpIndex = ref(innerCurrent.value);
    var isFolded = computed(function () {
      return pageCount.value > props2.maxPageBtn;
    });
    var sizeOptions = computed(function () {
      var pageSizeOptions = props2.pageSizeOptions;
      var options = pageSizeOptions.map(function (option) {
        return isObject(option) ? option : {
          label: t(globalConfig.value.itemsPerPage, {
            size: option
          }),
          value: Number(option)
        };
      });
      return options.sort(function (a, b) {
        return a.value - b.value;
      });
    });
    var isMidEllipsis = computed(function () {
      return props2.pageEllipsisMode === "mid";
    });
    var pages = computed(function () {
      var array = [];
      var start;
      var end;
      if (isFolded.value) {
        if (isPrevMoreShow.value && isNextMoreShow.value) {
          start = innerCurrent.value - curPageLeftCount.value;
          end = innerCurrent.value + curPageRightCount.value;
        } else {
          var foldedStart = isMidEllipsis.value ? 2 : 1;
          var foldedEnd = isMidEllipsis.value ? pageCount.value - 1 : pageCount.value;
          if (isPrevMoreShow.value) {
            start = Math.min(innerCurrent.value - 1, pageCount.value - props2.foldedMaxPageBtn + 1);
          } else {
            start = foldedStart;
          }
          if (isNextMoreShow.value) {
            end = Math.max(innerCurrent.value + 1, props2.foldedMaxPageBtn);
          } else {
            end = foldedEnd;
          }
        }
      } else {
        start = 1;
        end = pageCount.value;
      }
      for (var i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
    });
    watch(function () {
      return innerCurrent.value;
    }, function (val) {
      return jumpIndex.value = val;
    });
    var toPage = function toPage(pageIndex, pageInfo) {
      var _props2$onChange;
      if (props2.disabled) {
        return;
      }
      var toPageCurrent = pageIndex;
      if (pageIndex < min) {
        toPageCurrent = min;
      } else if (pageIndex > pageCount.value) {
        toPageCurrent = pageCount.value;
      }
      pageInfo = pageInfo || {
        current: toPageCurrent,
        previous: innerCurrent.value,
        pageSize: innerPageSize.value
      };
      setInnerCurrent(toPageCurrent, pageInfo);
      (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 || _props2$onChange.call(props2, pageInfo);
    };
    var handlePageChange = function handlePageChange(type) {
      var pageChangeMap = {
        prevPage: function prevPage() {
          return toPage(innerCurrent.value - 1);
        },
        nextPage: function nextPage() {
          return toPage(innerCurrent.value + 1);
        },
        prevMorePage: function prevMorePage() {
          return toPage(Math.max(2, innerCurrent.value - props2.foldedMaxPageBtn));
        },
        nextMorePage: function nextMorePage() {
          return toPage(Math.min(innerCurrent.value + props2.foldedMaxPageBtn, pageCount.value - 1));
        }
      };
      pageChangeMap[type]();
    };
    var onSelectorChange = function onSelectorChange(val) {
      if (props2.disabled) return;
      var pageSize2 = Number(val);
      var newPageCount = pageSize2 > 0 ? Math.max(Math.ceil(props2.total / pageSize2), 1) : 1;
      var previousCurrent = innerCurrent.value;
      var indexExceeds = previousCurrent > newPageCount;
      setInnerPageSize(pageSize2, {
        current: indexExceeds ? newPageCount : previousCurrent,
        previous: previousCurrent,
        pageSize: pageSize2
      });
      nextTick(function () {
        var userChanged = innerCurrent.value !== previousCurrent;
        var targetCurrent = userChanged ? innerCurrent.value : indexExceeds ? newPageCount : innerCurrent.value;
        var pageInfo = {
          current: targetCurrent,
          previous: previousCurrent,
          pageSize: pageSize2
        };
        if (userChanged || !indexExceeds) {
          var _props2$onChange2;
          (_props2$onChange2 = props2.onChange) === null || _props2$onChange2 === void 0 || _props2$onChange2.call(props2, pageInfo);
        } else {
          toPage(targetCurrent, pageInfo);
        }
      });
    };
    var onJumperChange = function onJumperChange(val) {
      var currentIndex = Math.trunc(+val);
      if (isNaN(currentIndex)) return;
      jumpIndex.value = currentIndex;
      toPage(currentIndex);
    };
    return function () {
      var total = props2.total,
        pageSizeOptions = props2.pageSizeOptions,
        size = props2.size,
        disabled = props2.disabled,
        showPageSize = props2.showPageSize;
      if (pageCount.value < 1) return null;
      var Jumper = createVNode("div", {
        "class": CLASS_MAP.jumperClass.value
      }, [t(globalConfig.value.jumpTo), createVNode(InputAdornment, {
        "append": "/ ".concat(pageCount.value, " ").concat(t(globalConfig.value.page))
      }, {
        "default": function _default() {
          return [createVNode(InputNumber, {
            "class": CLASS_MAP.jumperInputClass.value,
            "modelValue": jumpIndex.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return jumpIndex.value = $event;
            },
            "onBlur": onJumperChange,
            "onEnter": onJumperChange,
            "max": pageCount.value,
            "min": min,
            "size": size,
            "disabled": disabled,
            "theme": "normal",
            "placeholder": ""
          }, null)];
        }
      })]);
      return createVNode("div", {
        "class": CLASS_MAP.paginationClass.value
      }, [renderTNodeJSX("totalContent", createVNode("div", {
        "class": CLASS_MAP.totalClass.value
      }, [t(globalConfig.value.total, total)])), showPageSize && pageSizeOptions.length > 0 && createVNode(Select, mergeProps({
        "size": size,
        "value": innerPageSize,
        "disabled": disabled,
        "class": CLASS_MAP.sizerClass.value,
        "autoWidth": true,
        "onChange": onSelectorChange,
        "options": sizeOptions.value
      }, props2.selectProps), null), props2.showFirstAndLastPageBtn ? createVNode("div", {
        "class": CLASS_MAP.preBtnClass.value,
        "onClick": function onClick() {
          return toPage(1);
        }
      }, [createVNode(PageFirstIcon$1, null, null)]) : null, props2.showPreviousAndNextBtn ? createVNode("div", {
        "class": CLASS_MAP.preBtnClass.value,
        "onClick": function onClick() {
          return handlePageChange("prevPage");
        }
      }, [createVNode(ChevronLeftIcon$1, null, null)]) : null, props2.showPageNumber && props2.theme === "default" ? createVNode("ul", {
        "class": CLASS_MAP.btnWrapClass.value
      }, [isFolded.value && isMidEllipsis.value && createVNode("li", {
        "class": CLASS_MAP.getButtonClass(1),
        "onClick": function onClick() {
          return toPage(min);
        }
      }, [min]), isFolded.value && isPrevMoreShow.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.btnMoreClass.value,
        "onClick": function onClick() {
          return handlePageChange("prevMorePage");
        },
        "onMouseover": function onMouseover() {
          return prevMore.value = true;
        },
        "onMouseout": function onMouseout() {
          return prevMore.value = false;
        }
      }, [prevMore.value ? createVNode(ChevronLeftDoubleIcon$1, null, null) : createVNode(EllipsisIcon$1, null, null)]) : null, pages.value.map(function (i) {
        return createVNode("li", {
          "class": CLASS_MAP.getButtonClass(i),
          "key": i,
          "onClick": function onClick() {
            return toPage(i);
          }
        }, [i]);
      }), isFolded.value && isNextMoreShow.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.btnMoreClass.value,
        "onClick": function onClick() {
          return handlePageChange("nextMorePage");
        },
        "onMouseover": function onMouseover() {
          return nextMore.value = true;
        },
        "onMouseout": function onMouseout() {
          return nextMore.value = false;
        }
      }, [nextMore.value ? createVNode(ChevronRightDoubleIcon$1, null, null) : createVNode(EllipsisIcon$1, null, null)]) : null, isFolded.value && isMidEllipsis.value ? createVNode("li", {
        "class": CLASS_MAP.getButtonClass(pageCount.value),
        "onClick": function onClick() {
          return toPage(pageCount.value);
        }
      }, [pageCount.value]) : null]) : null, props2.theme === "simple" && Jumper, props2.showPreviousAndNextBtn ? createVNode("div", {
        "class": CLASS_MAP.nextBtnClass.value,
        "onClick": function onClick() {
          return handlePageChange("nextPage");
        }
      }, [createVNode(ChevronRightIcon$1, null, null)]) : null, props2.showFirstAndLastPageBtn ? createVNode("div", {
        "class": CLASS_MAP.nextBtnClass.value,
        "onClick": function onClick() {
          return toPage(pageCount.value);
        }
      }, [createVNode(PageLastIcon$1, null, null)]) : null, props2.theme === "default" && props2.showJumper && Jumper]);
    };
  }
});

export { _Pagination as default };
//# sourceMappingURL=pagination.js.map
