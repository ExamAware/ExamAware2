/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, nextTick, createVNode, mergeProps } from 'vue';
import { _ as _objectWithoutProperties } from '../_chunks/dep-0dcc778a.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isObject, isNaN } from 'lodash-es';
import { PageFirstIcon, PageLastIcon, ChevronLeftIcon, ChevronRightIcon, ChevronLeftDoubleIcon, ChevronRightDoubleIcon, EllipsisIcon } from 'tdesign-icons-vue-next';
import { a as useTNodeJSX, j as useVModel, k as useDefaultValue, u as usePrefixClass, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import { InputNumber } from '../input-number/index.mjs';
import { Select } from '../select/index.mjs';
import { InputAdornment } from '../input-adornment/index.mjs';
import props from './props.mjs';
import './hooks/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { usePaginationClasses } from './hooks/usePaginationClasses.mjs';
import { useMoreAction } from './hooks/useMoreAction.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
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
import '../input-adornment/input-adornment.mjs';
import '../input-adornment/props.mjs';

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
//# sourceMappingURL=pagination.mjs.map
