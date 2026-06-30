/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import dayjs from 'dayjs';
import { isFunction } from 'lodash-es';
import { useSingleValue } from './hooks/useSingleValue.js';
import { g as getDefaultFormat, f as formatDate, p as parseToDayjs } from '../_chunks/dep-4cdcccb6.js';
import { s as subtractMonth, a as addMonth, e as extractTimeObj } from '../_chunks/dep-67991c5a.js';
import datePickerPanelProps from './date-picker-panel-props.js';
import datePickerProps from './props.js';
import TSinglePanel from './components/panel/SinglePanel.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-51e5a827.js';
import '../_chunks/dep-bcf15bc2.js';
import '../_chunks/dep-8295e674.js';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '../_chunks/dep-bf4a6186.js';
import '../_chunks/dep-9e6d8a78.js';
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
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../input-number/props.js';
import '../_chunks/dep-4d7b9152.js';
import '../input-number/hooks/useInputNumber.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-number/_index.less';
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
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
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
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
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
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../select/utils/index.js';
import '../select/consts/index.js';
import '../select/option-group.js';
import '../select/option-group-props.js';
import '../select/props.js';
import '../select/hooks/usePanelVirtualScroll.js';
import '../select/hooks/useKeyboardControl.js';
import '../select/hooks/useSelectOptions.js';
import 'tdesign-vue-next/esm/common/style/web/components/select/_index.less';
import '../input-adornment/index.js';
import '../input-adornment/input-adornment.js';
import '../input-adornment/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-adornment/_index.less';
import '../pagination/props.js';
import '../pagination/hooks/useMoreAction.js';
import '../pagination/hooks/usePaginationClasses.js';
import '../pagination/pagination-mini.js';
import '../pagination/pagination-mini-props.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/pagination/_index.less';
import './components/base/Table.js';
import './components/base/Cell.js';
import '../time-picker/index.js';
import '../time-picker/time-picker.js';
import '../time-picker/panel/time-picker-panel.js';
import '../_chunks/dep-af8a928d.js';
import '../time-picker/props.js';
import '../_chunks/dep-86ee5d0c.js';
import '../time-picker/time-range-picker.js';
import '../range-input/index.js';
import '../range-input/range-input.js';
import '../range-input/props.js';
import '../range-input/range-input-popup.js';
import '../range-input/range-input-popup-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/range-input/_index.less';
import '../time-picker/time-range-picker-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/time-picker/_index.less';
import './utils/index.js';
import './components/panel/ExtraContent.js';
import './components/base/Footer.js';
import './hooks/useDisableDate.js';
import './hooks/useTableData.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DatePickerPanel = defineComponent({
  name: "TDatePickerPanel",
  props: _objectSpread({
    value: datePickerProps.value,
    defaultValue: datePickerProps.defaultValue,
    modelValue: datePickerProps.modelValue,
    disabled: datePickerProps.disabled,
    disableDate: datePickerProps.disableDate,
    enableTimePicker: datePickerProps.enableTimePicker,
    firstDayOfWeek: datePickerProps.firstDayOfWeek,
    format: datePickerProps.format,
    mode: datePickerProps.mode,
    presets: datePickerProps.presets,
    presetsPlacement: datePickerProps.presetsPlacement,
    timePickerProps: datePickerProps.timePickerProps
  }, datePickerPanelProps),
  setup: function setup(props) {
    var _useSingleValue = useSingleValue(props),
      cacheValue = _useSingleValue.cacheValue,
      value = _useSingleValue.value,
      year = _useSingleValue.year,
      month = _useSingleValue.month,
      time = _useSingleValue.time,
      onChange = _useSingleValue.onChange;
    var formatRef = computed(function () {
      return getDefaultFormat({
        mode: props.mode,
        format: props.format,
        enableTimePicker: props.enableTimePicker
      });
    });
    function onCellClick(date, _ref) {
      var _props$onCellClick;
      var e = _ref.e;
      (_props$onCellClick = props.onCellClick) === null || _props$onCellClick === void 0 || _props$onCellClick.call(props, {
        date: date,
        e: e
      });
      if (props.mode === "date") {
        year.value = date.getFullYear();
        month.value = date.getMonth();
      }
      if (props.enableTimePicker) {
        cacheValue.value = formatDate(date, {
          format: formatRef.value.format
        });
      } else {
        onChange === null || onChange === void 0 || onChange(formatDate(date, {
          format: formatRef.value.format,
          defaultTime: props.defaultTime
        }), {
          dayjsValue: parseToDayjs(date, formatRef.value.format, void 0, void 0, props.defaultTime),
          trigger: "pick"
        });
      }
    }
    function onJumperClick(_ref2) {
      var trigger = _ref2.trigger;
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
      var current = new Date(year.value, month.value);
      var next = null;
      if (trigger === "prev") {
        next = subtractMonth(current, monthCount);
      } else if (trigger === "current") {
        next = new Date();
      } else if (trigger === "next") {
        next = addMonth(current, monthCount);
      }
      var nextYear = next.getFullYear();
      var nextMonth = next.getMonth();
      if (year.value !== nextYear) {
        var _props$onYearChange;
        (_props$onYearChange = props.onYearChange) === null || _props$onYearChange === void 0 || _props$onYearChange.call(props, {
          year: nextYear,
          date: dayjs(value.value).toDate(),
          trigger: trigger === "current" ? "today" : "year-".concat(triggerMap[trigger])
        });
      }
      if (month.value !== nextMonth) {
        var _props$onMonthChange;
        (_props$onMonthChange = props.onMonthChange) === null || _props$onMonthChange === void 0 || _props$onMonthChange.call(props, {
          month: nextMonth,
          date: dayjs(value.value).toDate(),
          trigger: trigger === "current" ? "today" : "month-".concat(triggerMap[trigger])
        });
      }
      year.value = nextYear;
      month.value = nextMonth;
    }
    function onTimePickerChange(val) {
      var _props$onTimeChange;
      time.value = val;
      var _extractTimeObj = extractTimeObj(val),
        hours = _extractTimeObj.hours,
        minutes = _extractTimeObj.minutes,
        seconds = _extractTimeObj.seconds,
        milliseconds = _extractTimeObj.milliseconds,
        meridiem = _extractTimeObj.meridiem;
      var nextHours = hours;
      if (/am/i.test(meridiem) && nextHours === 12) nextHours -= 12;
      if (/pm/i.test(meridiem) && nextHours < 12) nextHours += 12;
      var currentDate = !dayjs(cacheValue.value, formatRef.value.format).isValid() ? dayjs() : dayjs(cacheValue.value, formatRef.value.format);
      var nextDate = currentDate.hour(nextHours).minute(minutes).second(seconds).millisecond(milliseconds).toDate();
      cacheValue.value = formatDate(nextDate, {
        format: formatRef.value.format
      });
      (_props$onTimeChange = props.onTimeChange) === null || _props$onTimeChange === void 0 || _props$onTimeChange.call(props, {
        time: val,
        date: dayjs(value.value).toDate(),
        trigger: "time-hour"
      });
    }
    function onConfirmClick(_ref3) {
      var _props$onConfirm;
      var e = _ref3.e;
      onChange === null || onChange === void 0 || onChange(formatDate(cacheValue.value, {
        format: formatRef.value.format,
        defaultTime: props.defaultTime
      }), {
        dayjsValue: parseToDayjs(cacheValue.value, formatRef.value.format, void 0, void 0, props.defaultTime),
        trigger: "confirm"
      });
      (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 || _props$onConfirm.call(props, {
        date: dayjs(cacheValue.value).toDate(),
        e: e
      });
    }
    function onPresetClick(preset, context) {
      var _props$onPresetClick;
      var presetVal = isFunction(preset) ? preset() : preset;
      onChange === null || onChange === void 0 || onChange(formatDate(presetVal, {
        format: formatRef.value.format,
        defaultTime: props.defaultTime
      }), {
        dayjsValue: parseToDayjs(presetVal, formatRef.value.format, void 0, void 0, props.defaultTime),
        trigger: "preset"
      });
      (_props$onPresetClick = props.onPresetClick) === null || _props$onPresetClick === void 0 || _props$onPresetClick.call(props, context);
    }
    function onYearChange(nextYear) {
      var _props$onYearChange2;
      year.value = nextYear;
      (_props$onYearChange2 = props.onYearChange) === null || _props$onYearChange2 === void 0 || _props$onYearChange2.call(props, {
        year: year.value,
        date: dayjs(value.value).toDate(),
        trigger: "year-select"
      });
    }
    function onMonthChange(nextMonth) {
      var _props$onMonthChange2;
      month.value = nextMonth;
      (_props$onMonthChange2 = props.onMonthChange) === null || _props$onMonthChange2 === void 0 || _props$onMonthChange2.call(props, {
        month: month.value,
        date: dayjs(value.value).toDate(),
        trigger: "month-select"
      });
    }
    var panelProps = computed(function () {
      return {
        value: cacheValue.value,
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
        popupVisible: true,
        panelClick: props.onPanelClick,
        onCellClick: onCellClick,
        onJumperClick: onJumperClick,
        onConfirmClick: onConfirmClick,
        onPresetClick: onPresetClick,
        onYearChange: onYearChange,
        onMonthChange: onMonthChange,
        onTimePickerChange: onTimePickerChange
      };
    });
    return function () {
      return createVNode(TSinglePanel, panelProps.value, null);
    };
  }
});

export { _DatePickerPanel as default };
//# sourceMappingURL=DatePickerPanel.js.map
