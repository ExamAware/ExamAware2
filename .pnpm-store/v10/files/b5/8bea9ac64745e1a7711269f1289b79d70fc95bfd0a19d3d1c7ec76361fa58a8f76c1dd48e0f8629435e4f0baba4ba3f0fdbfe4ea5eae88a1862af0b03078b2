/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, ref, watch, createVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import dayjs from 'dayjs';
import { isFunction, isArray } from 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import '@babel/runtime/helpers/defineProperty';
import dateRangePickerProps from './date-range-picker-props.js';
import { RangeInputPopup } from '../range-input/index.js';
import TRangePanel from './components/panel/RangePanel.js';
import { useRange } from './hooks/useRange.js';
import { g as getDefaultFormat, f as formatDate, a as formatTime, i as initYearMonthTime, p as parseToDayjs, b as isValidDate } from '../_chunks/dep-4cdcccb6.js';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-67991c5a.js';
import { dateCorrection } from './utils/index.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../range-input/range-input.js';
import 'tdesign-icons-vue-next';
import '../input/index.js';
import '../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../input/props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../_chunks/dep-51e5a827.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../_chunks/dep-664b8b22.js';
import '../range-input/props.js';
import '../_chunks/dep-4d7b9152.js';
import '../range-input/range-input-popup.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import '../range-input/range-input-popup-props.js';
import '../select-input/hooks/useOverlayInnerStyle.js';
import './components/panel/PanelContent.js';
import './components/base/Header.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import '../_chunks/dep-aa34a263.js';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import '../button/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../input-number/props.js';
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
import '../time-picker/time-range-picker-props.js';
import './components/panel/ExtraContent.js';
import './components/base/Footer.js';
import './hooks/useDisableDate.js';
import './hooks/useTableData.js';
import './hooks/useRangeValue.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';

var _DateRangePicker = defineComponent({
  name: "TDateRangePicker",
  props: dateRangePickerProps,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("date-range-picker");
    var _useRange = useRange(props2),
      inputValue = _useRange.inputValue,
      popupVisible = _useRange.popupVisible,
      rangeInputProps = _useRange.rangeInputProps,
      popupProps = _useRange.popupProps,
      value = _useRange.value,
      year = _useRange.year,
      month = _useRange.month,
      time = _useRange.time,
      cacheValue = _useRange.cacheValue,
      activeIndex = _useRange.activeIndex,
      isHoverCell = _useRange.isHoverCell,
      isFirstValueSelected = _useRange.isFirstValueSelected,
      onChange = _useRange.onChange;
    var disabled = useDisabled();
    var isReadOnly = useReadonly();
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props2.mode,
        enableTimePicker: props2.enableTimePicker,
        format: props2.format,
        valueType: props2.valueType
      });
    });
    var isSelected = ref(false);
    watch(popupVisible, function (visible) {
      if (visible) {
        isSelected.value = false;
        cacheValue.value = formatDate(value.value || [], {
          format: formatRef.value.valueType,
          targetFormat: formatRef.value.format
        });
        time.value = formatTime(value.value || [dayjs().format(formatRef.value.timeFormat), dayjs().format(formatRef.value.timeFormat)], formatRef.value.format, formatRef.value.timeFormat, props2.defaultTime);
        if (!value.value.length) {
          var _initYearMonthTime = initYearMonthTime({
              value: value.value,
              mode: props2.mode,
              format: formatRef.value.format,
              enableTimePicker: props2.enableTimePicker
            }),
            defaultYear = _initYearMonthTime.year,
            defaultMonth = _initYearMonthTime.month;
          year.value = defaultYear;
          month.value = defaultMonth;
        } else if (value.value.length === 2 && !props2.enableTimePicker) {
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
          if ((props2.mode === "month" || props2.mode === "quarter") && year.value[0] === year.value[1]) {
            year.value = [year.value[0], year.value[0] + 1];
          }
        } else {
          year.value = value.value.map(function (v) {
            return parseToDayjs(v, formatRef.value.format).year();
          });
          if (year.value.length === 1) year.value = [year.value[0], year.value[0]];
          month.value = value.value.map(function (v) {
            return parseToDayjs(v, formatRef.value.format).month();
          });
          if (month.value.length === 1) month.value = [month.value[0], Math.min(month.value[0] + 1, 11)];
        }
      } else {
        activeIndex.value = 0;
        isHoverCell.value = false;
        isFirstValueSelected.value = false;
        if (props2.needConfirm) {
          inputValue.value = formatDate(value.value, {
            format: formatRef.value.valueType,
            targetFormat: formatRef.value.format
          });
        } else {
          confirmValueChange();
        }
      }
    });
    function onCellMouseEnter(date) {
      isHoverCell.value = true;
      var nextValue = _toConsumableArray(inputValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      inputValue.value = nextValue;
    }
    function onCellMouseLeave() {
      isHoverCell.value = false;
      inputValue.value = cacheValue.value;
    }
    function onCellClick(date, _ref2) {
      var _props2$onPick;
      var e = _ref2.e;
      (_props2$onPick = props2.onPick) === null || _props2$onPick === void 0 || _props2$onPick.call(props2, date, {
        e: e,
        partial: activeIndex.value ? "end" : "start"
      });
      isHoverCell.value = false;
      isSelected.value = true;
      var nextValue = _toConsumableArray(inputValue.value);
      nextValue[activeIndex.value] = formatDate(date, {
        format: formatRef.value.format
      });
      cacheValue.value = nextValue;
      inputValue.value = nextValue;
      if (props2.enableTimePicker) return;
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (notValidIndex === -1 && nextValue.length === 2) {
        if (!isFirstValueSelected.value && parseToDayjs(nextValue[0], formatRef.value.format).isAfter(parseToDayjs(nextValue[1], formatRef.value.format))) {
          nextValue[activeIndex.value ? 0 : 1] = "";
          cacheValue.value = nextValue;
          inputValue.value = nextValue;
        } else {
          onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true,
            defaultTime: props2.defaultTime
          }), {
            dayjsValue: nextValue.map(function (v, i) {
              var _props2$defaultTime;
              return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props2$defaultTime = props2.defaultTime) === null || _props2$defaultTime === void 0 ? void 0 : _props2$defaultTime[i]);
            }),
            trigger: "pick"
          });
        }
      }
      if (!isFirstValueSelected.value) {
        var nextIndex = notValidIndex;
        if (nextIndex === -1) nextIndex = activeIndex.value ? 0 : 1;
        activeIndex.value = nextIndex;
        isFirstValueSelected.value = nextValue.some(function (v) {
          return !!v;
        });
      } else {
        popupVisible.value = false;
      }
    }
    function onJumperClick(_ref3) {
      var trigger = _ref3.trigger,
        partial = _ref3.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      var monthCountMap = {
        date: 1,
        week: 1,
        month: 12,
        quarter: 12,
        year: 120
      };
      var monthCount = monthCountMap[props2.mode] || 0;
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
      var onlyYearSelect = ["year", "quarter", "month"].includes(props2.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextInputValue = _toConsumableArray(inputValue.value);
      var changedInputValue = nextInputValue[activeIndex.value];
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
      inputValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
      cacheValue.value = formatDate(nextInputValue, {
        format: formatRef.value.format
      });
    }
    var confirmValueChange = function confirmValueChange(e) {
      var nextValue = _toConsumableArray(inputValue.value);
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (notValidIndex === -1 && nextValue.length === 2) {
        if (!isFirstValueSelected.value && parseToDayjs(nextValue[0], formatRef.value.format).isAfter(parseToDayjs(nextValue[1], formatRef.value.format))) {
          nextValue[activeIndex.value ? 0 : 1] = "";
          cacheValue.value = nextValue;
          inputValue.value = nextValue;
        } else {
          var _props2$onConfirm;
          props2 === null || props2 === void 0 || (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
            date: nextValue.map(function (v) {
              return dayjs(v).toDate();
            }),
            e: e || null,
            partial: activeIndex.value ? "end" : "start"
          });
          onChange === null || onChange === void 0 || onChange(formatDate(nextValue, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true,
            defaultTime: props2.defaultTime
          }), {
            dayjsValue: nextValue.map(function (v, i) {
              var _props2$defaultTime2;
              return parseToDayjs(v, formatRef.value.format, void 0, void 0, (_props2$defaultTime2 = props2.defaultTime) === null || _props2$defaultTime2 === void 0 ? void 0 : _props2$defaultTime2[i]);
            }),
            trigger: "confirm"
          });
        }
      }
    };
    function onConfirmClick(_ref4) {
      var e = _ref4.e;
      confirmValueChange(e);
      var nextValue = _toConsumableArray(inputValue.value);
      var notValidIndex = nextValue.findIndex(function (v) {
        return !v || !isValidDate(v, formatRef.value.format);
      });
      if (!isFirstValueSelected.value) {
        var nextIndex = notValidIndex;
        if (nextIndex === -1) nextIndex = activeIndex.value ? 0 : 1;
        activeIndex.value = nextIndex;
        isFirstValueSelected.value = nextValue.some(function (v) {
          return !!v;
        });
      } else if (nextValue.length === 2) {
        popupVisible.value = false;
      }
    }
    function onPresetClick(preset, context) {
      var presetValue = preset;
      if (isFunction(preset)) {
        presetValue = preset();
      }
      if (!isArray(presetValue)) {
        console.error("preset: ".concat(preset, " \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"));
      } else {
        var _props2$onPresetClick;
        onChange === null || onChange === void 0 || onChange(formatDate(presetValue, {
          format: formatRef.value.format,
          targetFormat: formatRef.value.valueType,
          autoSwap: true,
          defaultTime: props2.defaultTime
        }), {
          dayjsValue: presetValue.map(function (p, i) {
            var _props2$defaultTime3;
            return parseToDayjs(p, formatRef.value.format, void 0, void 0, (_props2$defaultTime3 = props2.defaultTime) === null || _props2$defaultTime3 === void 0 ? void 0 : _props2$defaultTime3[i]);
          }),
          trigger: "preset"
        });
        popupVisible.value = false;
        (_props2$onPresetClick = props2.onPresetClick) === null || _props2$onPresetClick === void 0 || _props2$onPresetClick.call(props2, context);
      }
    }
    function onYearChange(nextVal, _ref5) {
      var partial = _ref5.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props2.enableTimePicker) partialIndex = activeIndex.value;
      var nextYear = _toConsumableArray(year.value);
      var nextMonth = _toConsumableArray(month.value);
      nextYear[partialIndex] = nextVal;
      var onlyYearSelect = ["year", "quarter", "month"].includes(props2.mode);
      var correctedDate = dateCorrection(partialIndex, nextYear, nextMonth, onlyYearSelect);
      nextYear = correctedDate.nextYear;
      nextMonth = correctedDate.nextMonth;
      year.value = nextYear;
      if (!onlyYearSelect) month.value = nextMonth;
    }
    function onMonthChange(nextVal, _ref6) {
      var partial = _ref6.partial;
      var partialIndex = partial === "start" ? 0 : 1;
      if (props2.enableTimePicker) partialIndex = activeIndex.value;
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
    }
    var panelProps = computed(function () {
      return {
        hoverValue: isHoverCell.value ? inputValue.value : [],
        value: isSelected.value ? cacheValue.value : value.value,
        isFirstValueSelected: isFirstValueSelected.value,
        activeIndex: activeIndex.value,
        year: year.value,
        month: month.value,
        format: formatRef.value.format,
        mode: props2.mode,
        presets: props2.presets,
        time: time.value,
        disableDate: props2.disableDate,
        disableTime: props2.disableTime,
        firstDayOfWeek: props2.firstDayOfWeek,
        timePickerProps: props2.timePickerProps,
        enableTimePicker: props2.enableTimePicker,
        presetsPlacement: props2.presetsPlacement,
        popupVisible: popupVisible.value,
        panelPreselection: props2.panelPreselection,
        cancelRangeSelectLimit: props2.cancelRangeSelectLimit,
        needConfirm: props2.needConfirm,
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
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [createVNode(RangeInputPopup, {
        "readonly": isReadOnly.value,
        "disabled": disabled.value,
        "label": props2.label,
        "status": props2.status,
        "tips": props2.tips || slots.tips,
        "inputValue": inputValue.value,
        "popupProps": popupProps.value,
        "rangeInputProps": rangeInputProps.value,
        "popupVisible": popupVisible.value,
        "panel": function panel() {
          return createVNode(TRangePanel, panelProps.value, null);
        }
      }, null)]);
    };
  }
});

export { _DateRangePicker as default };
//# sourceMappingURL=DateRangePicker.js.map
