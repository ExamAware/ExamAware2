/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var dayjs = require('dayjs');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
var index$1 = require('../../_chunks/dep-874d2900.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var index$2 = require('../../_chunks/dep-bc848944.js');
var format = require('../../_chunks/dep-9beee08e.js');
var datePicker_hooks_useSingleValue = require('./useSingleValue.js');
var omit = require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useSingle(props) {
  var COMPONENT_NAME = index.usePrefixClass("date-picker");
  var disabled = index$1.useDisabled();
  var inputRef = Vue.ref();
  var isReadOnly = index$2.useReadonly();
  var _useSingleValue = datePicker_hooks_useSingleValue.useSingleValue(props),
    value = _useSingleValue.value,
    onChange = _useSingleValue.onChange,
    time = _useSingleValue.time,
    month = _useSingleValue.month,
    year = _useSingleValue.year,
    cacheValue = _useSingleValue.cacheValue;
  var formatRef = Vue.computed(function () {
    return format.getDefaultFormat({
      mode: props.mode,
      format: props.format,
      valueType: props.valueType,
      enableTimePicker: props.multiple ? false : props.enableTimePicker
    });
  });
  var popupVisible = Vue.ref(false);
  var isHoverCell = Vue.ref(false);
  var inputValue = Vue.ref(props.multiple ? format.formatDate(value.value, {
    format: formatRef.value.format
  }) || [] : format.formatDate(value.value, {
    format: formatRef.value.format
  }));
  var inputProps = Vue.computed(function () {
    var defaultInputProps = _objectSpread(_objectSpread({}, props.inputProps), {}, {
      size: props.size,
      ref: inputRef,
      readonly: isReadOnly.value || !props.allowInput,
      "class": [_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__input--placeholder"), isHoverCell.value)],
      onClear: function onClear(context) {
        var _context$e;
        context === null || context === void 0 || (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
        popupVisible.value = false;
        onChange === null || onChange === void 0 || onChange("", {
          dayjsValue: dayjs__default["default"](),
          trigger: "clear"
        });
      }
    });
    return props.multiple ? defaultInputProps : _objectSpread(_objectSpread({}, defaultInputProps), {}, {
      onBlur: function onBlur(val, context) {
        var _props$onBlur;
        (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, {
          value: val,
          e: context.e
        });
      },
      onFocus: function onFocus(_, _ref2) {
        var _props$onFocus;
        var e = _ref2.e;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, {
          value: value.value,
          e: e
        });
      },
      onChange: function onChange(val) {
        inputValue.value = val;
        if (!format.isValidDate(val, formatRef.value.format)) return;
        cacheValue.value = val;
        var newMonth = format.parseToDayjs(val, formatRef.value.format).month();
        var newYear = format.parseToDayjs(val, formatRef.value.format).year();
        var newTime = format.formatTime(val, formatRef.value.format, formatRef.value.timeFormat, props.defaultTime);
        !Number.isNaN(newYear) && (year.value = newYear);
        !Number.isNaN(newMonth) && (month.value = newMonth);
        !Number.isNaN(newTime) && (time.value = newTime);
      },
      onEnter: function onEnter(val) {
        if (!val) {
          onChange("", {
            dayjsValue: dayjs__default["default"](),
            trigger: "enter"
          });
          popupVisible.value = false;
          return;
        }
        if (!format.isValidDate(val, formatRef.value.format) && !format.isValidDate(value.value, formatRef.value.format)) return;
        popupVisible.value = false;
        if (format.isValidDate(val, formatRef.value.format)) {
          onChange === null || onChange === void 0 || onChange(format.formatDate(val, {
            format: formatRef.value.format,
            targetFormat: formatRef.value.valueType
          }), {
            dayjsValue: format.parseToDayjs(val, formatRef.value.format),
            trigger: "enter"
          });
        } else if (format.isValidDate(value.value, formatRef.value.format)) {
          inputValue.value = format.formatDate(value.value, {
            format: formatRef.value.format
          });
        } else {
          inputValue.value = "";
        }
      }
    });
  });
  var popupProps = Vue.computed(function () {
    var _props$popupProps$ove, _props$popupProps, _props$popupProps2;
    return _objectSpread(_objectSpread({
      expandAnimation: true
    }, omit.omit(props.popupProps, "on-visible-change")), {}, {
      disabled: disabled.value,
      overlayInnerStyle: (_props$popupProps$ove = (_props$popupProps = props.popupProps) === null || _props$popupProps === void 0 ? void 0 : _props$popupProps.overlayInnerStyle) !== null && _props$popupProps$ove !== void 0 ? _props$popupProps$ove : {
        width: "auto"
      },
      overlayClassName: [(_props$popupProps2 = props.popupProps) === null || _props$popupProps2 === void 0 ? void 0 : _props$popupProps2.overlayClassName, "".concat(COMPONENT_NAME.value, "__panel-container")],
      onVisibleChange: function onVisibleChange(visible, context) {
        var _props$popupProps3, _props$popupProps3$on, _props$popupProps4, _props$popupProps4$on;
        if (disabled.value) return;
        (_props$popupProps3 = props.popupProps) === null || _props$popupProps3 === void 0 || (_props$popupProps3$on = _props$popupProps3.onVisibleChange) === null || _props$popupProps3$on === void 0 || _props$popupProps3$on.call(_props$popupProps3, visible, context);
        (_props$popupProps4 = props.popupProps) === null || _props$popupProps4 === void 0 || (_props$popupProps4$on = _props$popupProps4["on-visible-change"]) === null || _props$popupProps4$on === void 0 || _props$popupProps4$on.call(_props$popupProps4, visible, context);
        if (context.trigger === "trigger-element-click") {
          popupVisible.value = true;
          return;
        }
        popupVisible.value = visible;
      }
    });
  });
  Vue.watch(value, function (value2) {
    if (!value2) {
      inputValue.value = "";
      return;
    }
    if (!format.isValidDate(value2, formatRef.value.format)) return;
    inputValue.value = format.formatDate(value2, {
      format: formatRef.value.format
    });
  });
  return {
    year: year,
    month: month,
    value: value,
    time: time,
    inputValue: inputValue,
    popupVisible: popupVisible,
    inputProps: inputProps,
    popupProps: popupProps,
    inputRef: inputRef,
    cacheValue: cacheValue,
    isHoverCell: isHoverCell,
    onChange: onChange
  };
}

exports.useSingle = useSingle;
//# sourceMappingURL=useSingle.js.map
