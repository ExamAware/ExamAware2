/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, watch, createVNode, createTextVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { PaginationMini } from '../../../pagination/index.js';
import { Select } from '../../../select/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { useConfig } from '../../../config-provider/hooks/useConfig.js';
import '../../../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-aa34a263.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-51e5a827.js';
import '../../../input-number/index.js';
import '../../../input-number/input-number.js';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../_chunks/dep-80a99546.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../loading/props.js';
import '../../../_chunks/dep-664b8b22.js';
import '../../../button/props.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-d2a6e7a4.js';
import '../../../input/index.js';
import '../../../input/input.js';
import '../../../input/props.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../input/hooks/useLengthLimit.js';
import '../../../_chunks/dep-8295e674.js';
import '../../../input/hooks/useInputEventHandler.js';
import '../../../input/hooks/useInputWidth.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../input/input-group.js';
import '../../../input/input-group-props.js';
import '../../../input-number/props.js';
import '../../../_chunks/dep-4d7b9152.js';
import '../../../input-number/hooks/useInputNumber.js';
import '../../../_chunks/dep-1a63d163.js';
import '../../../_chunks/dep-05f15b4e.js';
import '../../../input-adornment/index.js';
import '../../../input-adornment/input-adornment.js';
import '../../../input-adornment/props.js';
import '../../../pagination/props.js';
import '../../../pagination/hooks/useMoreAction.js';
import '../../../pagination/hooks/usePaginationClasses.js';
import '../../../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../../../common-components/fake-arrow.js';
import '../../../select-input/index.js';
import '../../../select-input/select-input.js';
import '../../../popup/index.js';
import '../../../popup/popup.js';
import '@popperjs/core';
import '../../../popup/container.js';
import '../../../popup/props.js';
import '../../../select-input/props.js';
import '../../../select-input/hooks/useMultiple.js';
import '../../../tag-input/index.js';
import '../../../tag-input/tag-input.js';
import '../../../tag-input/props.js';
import '../../../tag-input/hooks/useDragSorter.js';
import '../../../tag-input/hooks/useHover.js';
import '../../../tag-input/hooks/useTagScroll.js';
import '../../../tag-input/hooks/useTagList.js';
import '../../../tag/index.js';
import '../../../tag/tag.js';
import 'tinycolor2';
import '../../../tag/props.js';
import '../../../tag/check-tag.js';
import '../../../tag/check-tag-props.js';
import '../../../_chunks/dep-30c631d1.js';
import '../../../tag/check-tag-group.js';
import '../../../tag/check-tag-group-props.js';
import '../../../select-input/hooks/useOverlayInnerStyle.js';
import '../../../select-input/hooks/useSingle.js';
import '../../../select/components/select-panel.js';
import '../../../select/option.js';
import '../../../select/option-props.js';
import '../../../checkbox/index.js';
import '../../../checkbox/checkbox.js';
import '../../../checkbox/props.js';
import '../../../checkbox/consts/index.js';
import '../../../checkbox/hooks/useCheckboxLazyLoad.js';
import '../../../_chunks/dep-6264b0a7.js';
import '../../../checkbox/hooks/useKeyboardEvent.js';
import '../../../checkbox/group.js';
import '../../../checkbox/checkbox-group-props.js';
import '../../../_chunks/dep-e3ce8c8f.js';
import '../../../select/utils/index.js';
import '../../../select/consts/index.js';
import '../../../select/option-group.js';
import '../../../select/option-group-props.js';
import '../../../select/props.js';
import '../../../select/hooks/usePanelVirtualScroll.js';
import '../../../select/hooks/useKeyboardControl.js';
import '../../../select/hooks/useSelectOptions.js';
import '../../../pagination/pagination-mini.js';
import '../../../pagination/pagination-mini-props.js';
import '../../../tooltip/index.js';
import '../../../tooltip/tooltip.js';
import '../../../tooltip/props.js';
import '../../../tooltip/utils/index.js';

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
//# sourceMappingURL=Header.js.map
