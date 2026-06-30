/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, onMounted, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import dayjs from 'dayjs';
import { isFunction, isArray } from 'lodash-es';
import dateRangePickerPanelProps from './date-range-picker-panel-props.js';
import dateRangePickerProps from './date-range-picker-props.js';
import TRangePanel from './components/panel/RangePanel.js';
import { useRangeValue } from './hooks/useRangeValue.js';
import { g as getDefaultFormat, p as parseToDayjs, f as formatDate } from '../_chunks/dep-4cdcccb6.js';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-67991c5a.js';
import { dateCorrection } from './utils/index.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-9e6d8a78.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './components/panel/PanelContent.js';
import './components/base/Header.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
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
import './components/base/Table.js';
import './components/base/Cell.js';
import '../time-picker/index.js';
import '../time-picker/time-picker.js';
import '../_chunks/dep-bcf15bc2.js';
import '../time-picker/panel/time-picker-panel.js';
import '../_chunks/dep-af8a928d.js';
import '../time-picker/props.js';
import '../_chunks/dep-86ee5d0c.js';
import '../_chunks/dep-bf4a6186.js';
import '../time-picker/time-range-picker.js';
import '../range-input/index.js';
import '../range-input/range-input.js';
import '../range-input/props.js';
import '../range-input/range-input-popup.js';
import '../range-input/range-input-popup-props.js';
import '../time-picker/time-range-picker-props.js';
import './components/panel/ExtraContent.js';
import './components/base/Footer.js';
import './hooks/useDisableDate.js';
import './hooks/useTableData.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DateRangePickerPanel = defineComponent({
  name: "TDateRangePickerPanel",
  props: _objectSpread({
    value: dateRangePickerProps.value,
    defaultValue: dateRangePickerProps.defaultValue,
    modelValue: dateRangePickerProps.modelValue,
    disabled: dateRangePickerProps.disabled,
    disableDate: dateRangePickerProps.disableDate,
    enableTimePicker: dateRangePickerProps.enableTimePicker,
    firstDayOfWeek: dateRangePickerProps.firstDayOfWeek,
    format: dateRangePickerProps.format,
    mode: dateRangePickerProps.mode,
    presets: dateRangePickerProps.presets,
    presetsPlacement: dateRangePickerProps.presetsPlacement,
    timePickerProps: dateRangePickerProps.timePickerProps,
    panelPreselection: dateRangePickerProps.panelPreselection
  }, dateRangePickerPanelProps),
  setup: function setup(props) {
    var _useRangeValue = useRangeValue(props),
      value = _useRangeValue.value,
      year = _useRangeValue.year,
      month = _useRangeValue.month,
      time = _useRangeValue.time,
      cacheValue = _useRangeValue.cacheValue,
      isFirstValueSelected = _useRangeValue.isFirstValueSelected,
      onChange = _useRangeValue.onChange;
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props.mode,
        enableTimePicker: props.enableTimePicker,
        format: props.format
      });
    });
    var isSelected = ref(false);
    var isHoverCell = ref(false);
    var hoverValue = ref([]);
    var activeIndex = computed(function () {
      return isFirstValueSelected.value ? 1 : 0;
    });
    onMounted(function () {
      if (value.value.length === 2 && !props.enableTimePicker) {
        var nextMonth = value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.format).month();
        });
        year.value = value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.valueType).year();
        });
        if (year.value[0] === year.value[1] && nextMonth[0] === nextMonth[1]) {
          nextMonth[0] === 11 ? nextMonth[0] -= 1 : nextMonth[1] += 1;
        }
        month.value = nextMonth;
        if (["month", "quarter"].includes(props.mode) && year.value[0] === year.value[1]) {
          year.value = [year.value[0], year.value[0] + 1];
        }
      }
    });
    function onCellMouseEnter(date) {
      isHoverCell.value = true;
      var nextValue = _toConsumableArray(hoverValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      hoverValue.value = nextValue;
    }
    function onCellMouseLeave() {
      isHoverCell.value = false;
      hoverValue.value = cacheValue.value;
    }
    function onCellClick(date, _ref) {
      var _props$onCellClick;
      var e = _ref.e;
      isHoverCell.value = false;
      isSelected.value = true;
      var nextValue = _toConsumableArray(cacheValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      cacheValue.value = nextValue;
      (_props$onCellClick = props.onCellClick) === null || _props$onCellClick === void 0 || _props$onCellClick.call(props, {
        e: e,
        partial: activeIndex.value ? "end" : "start",
        date: nextValue.map(function (v) {
          return dayjs(v).toDate();
        })
      });
      if (props.enableTimePicker) return;
      if (nextValue.length === 2 && isFirstValueSelected.value) {
        onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: nextValue.map(function (v, i) {
            var _props$defaultTime;
            return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props$defaultTime = props.defaultTime) === null || _props$defaultTime === void 0 ? void 0 : _props$defaultTime[i]);
          }),
          trigger: "pick"
        });
        isFirstValueSelected.value = false;
      } else {
        isFirstValueSelected.value = true;
      }
    }
    function onJumperClick(_ref2) {
      var trigger = _ref2.trigger,
        partial = _ref2.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      var triggerMap = {
        prev: "arrow-previous",
        next: "arrow-next"
      };
      var monthCountMap = {
        date: 1,
        week: 1,
        month: 12,
        quarter: 12,
        year: 120
      };
      var monthCount = monthCountMap[props.mode] || 0;
      var current = new Date(year.value[partialIndex], month.value[partialIndex]);
      var next = null;
      if (trigger === "prev") {
        next = subtractMonth(current, monthCount);
      } else if (trigger === "current") {
        next = new Date();
      } else if (trigger === "next") {
        next = addMonth(current, monthCount);
      }
      var nextYear = _toConsumableArray(year.value);
      nextYear[partialIndex] = next.getFullYear();
      var nextMonth = _toConsumableArray(month.value);
      nextMonth[partialIndex] = next.getMonth();
      var onlyYearSelect = ["year", "quarter", "month"].includes(props.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      if (year.value.some(function (y) {
        return !nextYear.includes(y);
      })) {
        var _props$onYearChange;
        (_props$onYearChange = props.onYearChange) === null || _props$onYearChange === void 0 || _props$onYearChange.call(props, {
          partial: partial,
          year: nextYear[partialIndex],
          date: value.value.map(function (v) {
            return dayjs(v).toDate();
          }),
          trigger: trigger === "current" ? "today" : "year-".concat(triggerMap[trigger])
        });
      }
      if (month.value.some(function (m) {
        return !nextMonth.includes(m);
      })) {
        var _props$onMonthChange;
        (_props$onMonthChange = props.onMonthChange) === null || _props$onMonthChange === void 0 || _props$onMonthChange.call(props, {
          partial: partial,
          month: nextMonth[partialIndex],
          date: value.value.map(function (v) {
            return dayjs(v).toDate();
          }),
          trigger: trigger === "current" ? "today" : "month-".concat(triggerMap[trigger])
        });
      }
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _props$onTimeChange;
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextInputValue = _toConsumableArray(cacheValue.value);
      var changedInputValue = cacheValue.value[activeIndex.value];
      var currentDate = !dayjs(changedInputValue, formatRef.value.format).isValid() ? dayjs().year(year.value[activeIndex.value]).month(month.value[activeIndex.value]) : dayjs(changedInputValue, formatRef.value.format);
      var nextHours = hours;
      if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
      if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
      var nextDate = currentDate.hour(nextHours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
      nextInputValue[activeIndex.value] = nextDate;
      var nextTime = _toConsumableArray(time.value);
      nextTime[activeIndex.value] = val;
      time.value = nextTime;
      isSelected.value = true;
      cacheValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
      (_props$onTimeChange = props.onTimeChange) === null || _props$onTimeChange === void 0 || _props$onTimeChange.call(props, {
        time: val,
        date: value.value.map(function (v) {
          return parseToDayjs(v, formatRef.value.format).toDate();
        }),
        partial: activeIndex.value ? "end" : "start",
        trigger: "time-hour"
      });
    }
    function onConfirmClick(_ref3) {
      var _props$onConfirm;
      var e = _ref3.e;
      var nextValue = _toConsumableArray(cacheValue.value);
      if (nextValue.length === 2 && isFirstValueSelected.value) {
        onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: nextValue.map(function (v, i) {
            var _props$defaultTime2;
            return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props$defaultTime2 = props.defaultTime) === null || _props$defaultTime2 === void 0 ? void 0 : _props$defaultTime2[i]);
          }),
          trigger: "confirm"
        });
        year.value = nextValue.map(function (v) {
          return dayjs(v, formatRef.value.format).year();
        });
        month.value = nextValue.map(function (v) {
          return dayjs(v, formatRef.value.format).month();
        });
        isFirstValueSelected.value = false;
      } else {
        isFirstValueSelected.value = true;
      }
      (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 || _props$onConfirm.call(props, {
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        e: e
      });
    }
    function onPresetClick(preset, context) {
      var presetValue = preset;
      if (isFunction(preset)) {
        presetValue = preset();
      }
      if (!isArray(presetValue)) {
        console.error("preset: ".concat(preset, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
      } else {
        var _props$onPresetClick;
        onChange === null || onChange === void 0 || onChange(formatDate(presetValue, {
          format: formatRef.value.format,
          autoSwap: true,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: presetValue.map(function (p, i) {
            var _props$defaultTime3;
            return parseToDayjs(p, formatRef.value.format, void 0, void 0, (_props$defaultTime3 = props.defaultTime) === null || _props$defaultTime3 === void 0 ? void 0 : _props$defaultTime3[i]);
          }),
          trigger: "preset"
        });
        (_props$onPresetClick = props.onPresetClick) === null || _props$onPresetClick === void 0 || _props$onPresetClick.call(props, context);
      }
    }
    function onYearChange(nextVal, _ref4) {
      var _props$onYearChange2;
      var partial = _ref4.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props.enableTimePicker) partialIndex = activeIndex.value;
      var nextYear = _toConsumableArray(year.value);
      nextYear[partialIndex] = nextVal;
      var nextMonth = _toConsumableArray(month.value);
      var onlyYearSelect = ["year", "quarter", "month"].includes(props.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      if (!onlyYearSelect) month.value = nextMonth;
      (_props$onYearChange2 = props.onYearChange) === null || _props$onYearChange2 === void 0 || _props$onYearChange2.call(props, {
        partial: partial,
        year: nextYear[partialIndex],
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        trigger: "year-select"
      });
    }
    function onMonthChange(nextVal, _ref5) {
      var _props$onMonthChange2;
      var partial = _ref5.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props.enableTimePicker) partialIndex = activeIndex.value;
      var nextMonth = _toConsumableArray(month.value);
      nextMonth[partialIndex] = nextVal;
      if (year.value[0] === year.value[1]) {
        if (partialIndex === 0) {
          if (nextMonth[1] <= nextMonth[0]) {
            nextMonth[1] = nextMonth[0] + 1;
            if (nextMonth[1] === 12) {
              var _year$value, _year$value2;
              nextMonth[1] = 0;
              year.value = [(_year$value = year.value) === null || _year$value === void 0 ? void 0 : _year$value[0], ((_year$value2 = year.value) === null || _year$value2 === void 0 ? void 0 : _year$value2[1]) + 1];
            }
          }
        }
        if (partialIndex === 1) {
          nextMonth[0] = Math.min(nextMonth[0], nextMonth[1]);
          if (nextMonth[0] >= nextMonth[1]) {
            nextMonth[0] -= 1;
            if (nextMonth[0] === -1) {
              var _year$value3, _year$value4;
              nextMonth[0] = 11;
              year.value = [((_year$value3 = year.value) === null || _year$value3 === void 0 ? void 0 : _year$value3[0]) - 1, (_year$value4 = year.value) === null || _year$value4 === void 0 ? void 0 : _year$value4[1]];
            }
          }
        }
      }
      month.value = nextMonth;
      (_props$onMonthChange2 = props.onMonthChange) === null || _props$onMonthChange2 === void 0 || _props$onMonthChange2.call(props, {
        partial: partial,
        month: nextMonth[partialIndex],
        date: value.value.map(function (v) {
          return dayjs(v).toDate();
        }),
        trigger: "month-select"
      });
    }
    var panelProps = computed(function () {
      return {
        hoverValue: isHoverCell.value ? hoverValue.value : [],
        value: isSelected.value ? cacheValue.value : value.value,
        activeIndex: activeIndex.value,
        year: year.value,
        month: month.value,
        mode: props.mode,
        format: formatRef.value.format,
        presets: props.presets,
        time: time.value,
        disableDate: props.disableDate,
        firstDayOfWeek: props.firstDayOfWeek,
        timePickerProps: props.timePickerProps,
        enableTimePicker: props.enableTimePicker,
        presetsPlacement: props.presetsPlacement,
        panelPreselection: props.panelPreselection,
        popupVisible: true,
        panelClick: props.onPanelClick,
        onCellClick: onCellClick,
        onCellMouseEnter: onCellMouseEnter,
        onCellMouseLeave: onCellMouseLeave,
        onJumperClick: onJumperClick,
        onConfirmClick: onConfirmClick,
        onPresetClick: onPresetClick,
        onYearChange: onYearChange,
        onMonthChange: onMonthChange,
        onTimePickerChange: onTimePickerChange
      };
    });
    return function () {
      return createVNode(TRangePanel, panelProps.value, null);
    };
  }
});

export { _DateRangePickerPanel as default };
//# sourceMappingURL=DateRangePickerPanel.js.map
