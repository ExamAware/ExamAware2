/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, watch, createVNode, createTextVNode } from 'vue';
import { _ as _toConsumableArray } from '../../../_chunks/dep-00b4e06a.mjs';
import { PaginationMini } from '../../../pagination/index.mjs';
import { Select } from '../../../select/index.mjs';
import { u as usePrefixClass } from '../../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../../config-provider/hooks/useConfig.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../pagination/pagination.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import 'lodash-es';
import 'tdesign-icons-vue-next';
import '../../../input-number/index.mjs';
import '../../../input-number/input-number.mjs';
import '../../../_chunks/dep-1dacc319.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../loading/props.mjs';
import './style/css.mjs';
import '../../../button/props.mjs';
import '../../../input/index.mjs';
import '../../../input/input.mjs';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';
import '../../../input-adornment/index.mjs';
import '../../../input-adornment/input-adornment.mjs';
import '../../../input-adornment/props.mjs';
import '../../../pagination/props.mjs';
import '../../../pagination/hooks/index.mjs';
import '../../../pagination/hooks/useMoreAction.mjs';
import '../../../pagination/hooks/usePaginationClasses.mjs';
import '../../../select/select.mjs';
import '../../../_chunks/dep-88e5a7b0.mjs';
import '../../../common-components/fake-arrow.mjs';
import '../../../select-input/index.mjs';
import '../../../select-input/select-input.mjs';
import '../../../popup/index.mjs';
import '../../../popup/popup.mjs';
import '@popperjs/core';
import '../../../popup/container.mjs';
import '../../../popup/props.mjs';
import '../../../select-input/props.mjs';
import '../../../select-input/hooks/index.mjs';
import '../../../select-input/hooks/useMultiple.mjs';
import '../../../tag-input/index.mjs';
import '../../../tag-input/tag-input.mjs';
import '../../../tag-input/props.mjs';
import '../../../tag-input/hooks/index.mjs';
import '../../../tag-input/hooks/useDragSorter.mjs';
import '../../../tag-input/hooks/useHover.mjs';
import '../../../tag-input/hooks/useTagScroll.mjs';
import '../../../tag-input/hooks/useTagList.mjs';
import '../../../tag/index.mjs';
import '../../../tag/tag.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import '../../../tag/props.mjs';
import '../../../tag/check-tag.mjs';
import '../../../tag/check-tag-props.mjs';
import '../../../tag/check-tag-group.mjs';
import '../../../tag/check-tag-group-props.mjs';
import '../../../select-input/hooks/useOverlayInnerStyle.mjs';
import '../../../select-input/hooks/useSingle.mjs';
import '../../../select/components/select-panel.mjs';
import '../../../select/option.mjs';
import '../../../select/option-props.mjs';
import '../../../checkbox/index.mjs';
import '../../../checkbox/checkbox.mjs';
import '../../../checkbox/props.mjs';
import '../../../checkbox/consts/index.mjs';
import '../../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../../checkbox/group.mjs';
import '../../../checkbox/checkbox-group-props.mjs';
import '../../../select/utils/index.mjs';
import '../../../select/consts/index.mjs';
import '../../../select/option-group.mjs';
import '../../../select/option-group-props.mjs';
import '../../../select/props.mjs';
import '../../../select/hooks/index.mjs';
import '../../../select/hooks/useKeyboardControl.mjs';
import '../../../select/hooks/usePanelVirtualScroll.mjs';
import '../../../select/hooks/useSelectOptions.mjs';
import '../../../pagination/pagination-mini.mjs';
import '../../../pagination/pagination-mini-props.mjs';
import '../../../tooltip/index.mjs';
import '../../../tooltip/tooltip.mjs';
import '../../../tooltip/props.mjs';
import '../../../tooltip/utils/index.mjs';

var TDateHeader = defineComponent({
  name: "TDatePickerHeader",
  props: {
    mode: {
      type: String,
      "default": "date"
    },
    year: Number,
    month: Number,
    internalYear: Array,
    partial: String,
    onMonthChange: Function,
    onYearChange: Function,
    onJumperClick: Function
  },
  setup: function setup(props) {
    var _useConfig = useConfig("classPrefix"),
      classPrefix = _useConfig.classPrefix;
    var COMPONENT_NAME = usePrefixClass("date-picker__header");
    var _useConfig2 = useConfig("datePicker"),
      globalConfig = _useConfig2.globalConfig;
    var yearOptions = ref(initOptions(props.year));
    var showMonthPicker = computed(function () {
      return props.mode === "date" || props.mode === "week";
    });
    var nearestYear = computed(function () {
      var _yearOptions$value$fi;
      var extraYear = props.partial === "end" && props.mode === "year" && Number(props.internalYear[1]) - Number(props.internalYear[0]) <= 9 ? 9 : 0;
      return ((_yearOptions$value$fi = yearOptions.value.find(function (option) {
        return option.value - (props.year + extraYear) <= 9 && option.value - (props.year + extraYear) >= 0;
      })) === null || _yearOptions$value$fi === void 0 ? void 0 : _yearOptions$value$fi.value) || props.year;
    });
    var monthOptions = computed(function () {
      return globalConfig.value.months.map(function (item, index) {
        return {
          label: item,
          value: index
        };
      });
    });
    function initOptions(year) {
      var options = [];
      if (props.mode === "year") {
        var extraYear = year % 10;
        var minYear = year - extraYear - 100;
        var maxYear = year - extraYear + 100;
        for (var i = minYear; i <= maxYear; i += 10) {
          options.push({
            label: "".concat(i, " - ").concat(i + 9),
            value: i + 9
          });
        }
      } else {
        options.push({
          label: "".concat(year),
          value: year
        });
        for (var _i = 1; _i <= 10; _i++) {
          options.push({
            label: "".concat(year + _i),
            value: year + _i
          });
          options.unshift({
            label: "".concat(year - _i),
            value: year - _i
          });
        }
      }
      return options;
    }
    function loadMoreYear(year, type) {
      var options = [];
      if (props.mode === "year") {
        var extraYear = year % 10;
        if (type === "add") {
          for (var i = year - extraYear + 10; i <= year - extraYear + 50; i += 10) {
            options.push({
              label: "".concat(i, " - ").concat(i + 9),
              value: i
            });
          }
        } else {
          for (var _i2 = year - extraYear - 1; _i2 > year - extraYear - 50; _i2 -= 10) {
            options.unshift({
              label: "".concat(_i2 - 9, " - ").concat(_i2),
              value: _i2
            });
          }
        }
      } else if (type === "add") {
        for (var _i3 = year + 1; _i3 <= year + 10; _i3++) {
          options.push({
            label: "".concat(_i3),
            value: _i3
          });
        }
      } else {
        for (var _i4 = year - 1; _i4 > year - 10; _i4--) {
          options.unshift({
            label: "".concat(_i4),
            value: _i4
          });
        }
      }
      return options;
    }
    var labelMap = computed(function () {
      return {
        year: {
          prev: globalConfig.value.preDecade,
          current: globalConfig.value.now,
          next: globalConfig.value.nextDecade
        },
        month: {
          prev: globalConfig.value.preYear,
          current: globalConfig.value.now,
          next: globalConfig.value.nextYear
        },
        date: {
          prev: globalConfig.value.preMonth,
          current: globalConfig.value.now,
          next: globalConfig.value.nextMonth
        },
        quarter: {
          prev: globalConfig.value.preYear,
          current: globalConfig.value.now,
          next: globalConfig.value.nextYear
        },
        week: {
          prev: globalConfig.value.preMonth,
          current: globalConfig.value.now,
          next: globalConfig.value.nextMonth
        }
      };
    });
    function handleScroll(_ref) {
      var e = _ref.e;
      if (e.target.scrollTop === 0) {
        handlePanelTopClick(e);
      } else if (e.target.scrollTop === e.target.scrollHeight - e.target.clientHeight) {
        handlePanelBottomClick(e);
      }
    }
    function handlePanelTopClick(e) {
      var _e$stopPropagation;
      e === null || e === void 0 || (_e$stopPropagation = e.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e);
      var firstYear = yearOptions.value[0].value;
      var options = loadMoreYear(firstYear, "reduce");
      yearOptions.value = [].concat(_toConsumableArray(options), _toConsumableArray(yearOptions.value));
    }
    function handlePanelBottomClick(e) {
      var _e$stopPropagation2;
      e === null || e === void 0 || (_e$stopPropagation2 = e.stopPropagation) === null || _e$stopPropagation2 === void 0 || _e$stopPropagation2.call(e);
      var lastYear = yearOptions.value.slice(-1)[0].value;
      var options = loadMoreYear(lastYear, "add");
      yearOptions.value = [].concat(_toConsumableArray(yearOptions.value), _toConsumableArray(options));
    }
    watch(function () {
      return props.mode;
    }, function () {
      yearOptions.value = initOptions(props.year);
    });
    return function () {
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-controller")
      }, [showMonthPicker.value && createVNode(Select, {
        "class": "".concat(COMPONENT_NAME.value, "-controller-month"),
        "value": props.month,
        "options": monthOptions.value,
        "onChange": function onChange(val) {
          var _props$onMonthChange;
          return (_props$onMonthChange = props.onMonthChange) === null || _props$onMonthChange === void 0 ? void 0 : _props$onMonthChange.call(props, val);
        },
        "popupProps": {
          attach: function attach(triggerElement) {
            return triggerElement.parentNode;
          },
          overlayClassName: "".concat(COMPONENT_NAME.value, "-controller-month-popup")
        }
      }, null), createVNode(Select, {
        "class": "".concat(COMPONENT_NAME.value, "-controller-year"),
        "value": props.mode === "year" ? nearestYear.value : props.year,
        "options": yearOptions.value,
        "onChange": function onChange(val) {
          var _props$onYearChange;
          return (_props$onYearChange = props.onYearChange) === null || _props$onYearChange === void 0 ? void 0 : _props$onYearChange.call(props, val);
        },
        "popupProps": {
          onScroll: handleScroll,
          attach: function attach(triggerElement) {
            return triggerElement.parentNode;
          },
          overlayClassName: "".concat(COMPONENT_NAME.value, "-controller-year-popup")
        },
        "panelTopContent": function panelTopContent() {
          return createVNode("div", {
            "class": "".concat(classPrefix.value, "-select-option"),
            "onClick": handlePanelTopClick
          }, [createTextVNode("...")]);
        },
        "panelBottomContent": function panelBottomContent() {
          return createVNode("div", {
            "class": "".concat(classPrefix.value, "-select-option"),
            "onClick": handlePanelBottomClick
          }, [createTextVNode("...")]);
        }
      }, null)]), createVNode(PaginationMini, {
        "tips": labelMap.value[props.mode],
        "size": "small",
        "onChange": props.onJumperClick
      }, null)]);
    };
  }
});

export { TDateHeader as default };
//# sourceMappingURL=Header.mjs.map
