/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index$2 = require('../../_chunks/dep-47c460dd.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index$3 = require('../../_chunks/dep-bc848944.js');
var format = require('../../_chunks/dep-9beee08e.js');
var datePicker_hooks_useRangeValue = require('./useRangeValue.js');
var omit = require('../../_chunks/dep-ace0b57c.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PARTIAL_MAP = {
  first: "start",
  second: "end"
};
function useRange(props) {
  var COMPONENT_NAME = index.usePrefixClass("date-range-picker");
  var _useConfig = configProvider_hooks_useConfig.useConfig("datePicker"),
    globalConfig = _useConfig.globalConfig;
  var _useGlobalIcon = index$1.useGlobalIcon({
      CalendarIcon: tdesignIconsVueNext.CalendarIcon
    }),
    CalendarIcon = _useGlobalIcon.CalendarIcon;
  var renderTNodeJSX = index$2.useTNodeJSX();
  var isMountedRef = Vue.ref(false);
  var inputRef = Vue.ref();
  var _useRangeValue = datePicker_hooks_useRangeValue.useRangeValue(props),
    value = _useRangeValue.value,
    onChange = _useRangeValue.onChange,
    time = _useRangeValue.time,
    month = _useRangeValue.month,
    year = _useRangeValue.year,
    cacheValue = _useRangeValue.cacheValue,
    isFirstValueSelected = _useRangeValue.isFirstValueSelected;
  var formatRef = Vue.computed(function () {
    return format.getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.enableTimePicker
    });
  });
  var popupVisible = Vue.ref(false);
  var isHoverCell = Vue.ref(false);
  var activeIndex = Vue.ref(0);
  var inputValue = Vue.ref(format.formatDate(props.value, {
    format: formatRef.value.format
  }));
  var isReadOnly = index$3.useReadonly();
  var rangeInputProps = Vue.computed(function () {
    return _objectSpread(_objectSpread({}, props.rangeInputProps), {}, {
      size: props.size,
      ref: inputRef,
      borderless: props.borderless,
      clearable: props.clearable && !isReadOnly.value,
      prefixIcon: function prefixIcon() {
        return renderTNodeJSX("prefixIcon");
      },
      readonly: isReadOnly.value || !props.allowInput,
      separator: props.separator || globalConfig.value.rangeSeparator,
      placeholder: props.placeholder || globalConfig.value.placeholder[props.mode],
      activeIndex: popupVisible.value ? activeIndex.value : void 0,
      suffixIcon: function suffixIcon() {
        return renderTNodeJSX("suffixIcon") || Vue.createVNode(CalendarIcon, null, null);
      },
      "class": _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__input--placeholder"), isHoverCell.value),
      onClick: function onClick(_ref) {
        var position = _ref.position;
        activeIndex.value = position === "first" ? 0 : 1;
      },
      onClear: function onClear(context) {
        if (context instanceof MouseEvent) context.stopPropagation();else context.e.stopPropagation();
        popupVisible.value = false;
        onChange === null || onChange === void 0 || onChange([], {
          dayjsValue: [],
          trigger: "clear"
        });
      },
      onBlur: function onBlur(newVal, _ref2) {
        var _props$onBlur;
        var e = _ref2.e,
          position = _ref2.position;
        (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, {
          value: newVal,
          partial: PARTIAL_MAP[position],
          e: e
        });
      },
      onFocus: function onFocus(newVal, _ref3) {
        var _props$onFocus;
        var e = _ref3.e,
          position = _ref3.position;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, {
          value: newVal,
          partial: PARTIAL_MAP[position],
          e: e
        });
        activeIndex.value = position === "first" ? 0 : 1;
      },
      onChange: function onChange(newVal, _ref4) {
        _ref4.e;
          _ref4.position;
        inputValue.value = newVal;
        if (!format.isValidDate(newVal, formatRef.value.format)) return;
        cacheValue.value = newVal;
        var newYear = [];
        var newMonth = [];
        var newTime = [];
        newVal.forEach(function (v) {
          newYear.push(format.parseToDayjs(v, formatRef.value.format).year());
          newMonth.push(format.parseToDayjs(v, formatRef.value.format).month());
          newTime.push(format.parseToDayjs(v, formatRef.value.format).format(formatRef.value.timeFormat));
        });
        year.value = newYear;
        month.value = newMonth;
        time.value = newTime;
      },
      onEnter: function onEnter(newVal) {
        if (!format.isValidDate(newVal, formatRef.value.format) && !format.isValidDate(value.value, formatRef.value.format)) return;
        popupVisible.value = false;
        if (format.isValidDate(newVal, formatRef.value.format)) {
          onChange === null || onChange === void 0 || onChange(format.formatDate(newVal, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType,
            autoSwap: true
          }), {
            dayjsValue: newVal.map(function (v) {
              return format.parseToDayjs(v, formatRef.value.format);
            }),
            trigger: "enter"
          });
        } else if (format.isValidDate(value.value, formatRef.value.format)) {
          inputValue.value = format.formatDate(value.value, {
            format: formatRef.value.format
          });
        } else {
          inputValue.value = [];
        }
      }
    });
  });
  var popupProps = Vue.computed(function () {
    var _props$popupProps$ove, _props$popupProps, _props$popupProps2;
    return _objectSpread(_objectSpread({
      expandAnimation: true
    }, omit.omit(props.popupProps, "on-visible-change")), {}, {
      overlayInnerStyle: (_props$popupProps$ove = (_props$popupProps = props.popupProps) === null || _props$popupProps === void 0 ? void 0 : _props$popupProps.overlayInnerStyle) !== null && _props$popupProps$ove !== void 0 ? _props$popupProps$ove : {
        width: "auto"
      },
      overlayClassName: [(_props$popupProps2 = props.popupProps) === null || _props$popupProps2 === void 0 ? void 0 : _props$popupProps2.overlayClassName, "".concat(COMPONENT_NAME.value, "__panel-container")],
      onVisibleChange: function onVisibleChange(visible, context) {
        var _props$popupProps3, _props$popupProps3$on, _props$popupProps4, _props$popupProps4$on;
        if (isReadOnly.value) return;
        (_props$popupProps3 = props.popupProps) === null || _props$popupProps3 === void 0 || (_props$popupProps3$on = _props$popupProps3.onVisibleChange) === null || _props$popupProps3$on === void 0 || _props$popupProps3$on.call(_props$popupProps3, visible, context);
        (_props$popupProps4 = props.popupProps) === null || _props$popupProps4 === void 0 || (_props$popupProps4$on = _props$popupProps4["on-visible-change"]) === null || _props$popupProps4$on === void 0 || _props$popupProps4$on.call(_props$popupProps4, visible, context);
        if (context.trigger === "trigger-element-click") {
          var indexMap = {
            0: "first",
            1: "second"
          };
          inputRef.value.focus({
            position: indexMap[activeIndex.value]
          });
          popupVisible.value = true;
          return;
        }
        popupVisible.value = visible;
      }
    });
  });
  Vue.watch(value, function (value2) {
    if (!value2) {
      inputValue.value = [];
      return;
    }
    if (!format.isValidDate(value2, formatRef.value.format)) return;
    inputValue.value = format.formatDate(value2, {
      format: formatRef.value.valueType,
      targetFormat: formatRef.value.format
    });
  }, {
    immediate: true
  });
  Vue.watch(activeIndex, function (index) {
    var _inputRef$value, _inputRef$value$focus;
    if (!isMountedRef.value) {
      isMountedRef.value = true;
      return;
    }
    if (!popupVisible.value) return;
    var indexMap = {
      0: "first",
      1: "second"
    };
    (_inputRef$value = inputRef.value) === null || _inputRef$value === void 0 || (_inputRef$value$focus = _inputRef$value.focus) === null || _inputRef$value$focus === void 0 || _inputRef$value$focus.call(_inputRef$value, {
      position: indexMap[index]
    });
  }, {
    immediate: true
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    inputValue: inputValue,
    popupVisible: popupVisible,
    rangeInputProps: rangeInputProps,
    popupProps: popupProps,
    isHoverCell: isHoverCell,
    activeIndex: activeIndex,
    isFirstValueSelected: isFirstValueSelected,
    cacheValue: cacheValue,
    onChange: onChange
  };
}

exports.PARTIAL_MAP = PARTIAL_MAP;
exports.useRange = useRange;
//# sourceMappingURL=useRange.js.map
