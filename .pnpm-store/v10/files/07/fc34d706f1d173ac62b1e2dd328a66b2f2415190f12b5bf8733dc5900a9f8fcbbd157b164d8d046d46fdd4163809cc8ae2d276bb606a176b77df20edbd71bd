/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
var index$2 = require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-cc66acf1.js');
var index$3 = require('../../_chunks/dep-bc848944.js');
var index$1 = require('../../_chunks/dep-e8ff2c13.js');
var number = require('../../_chunks/dep-2359c164.js');
var largeNumber = require('../../_chunks/dep-48e7c2a2.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
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
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-990979bb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useInputNumber(props) {
  var _useCommonClassName = index.useCommonClassName(),
    classPrefix = _useCommonClassName.classPrefix,
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var _toRefs = Vue.toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    max = _toRefs.max,
    min = _toRefs.min;
  var _useVModel = index$1.useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
    tValue = _useVModel2[0],
    setTValue = _useVModel2[1];
  var inputRef = Vue.ref();
  var userInput = Vue.ref("");
  var tDisabled = index$2.useDisabled();
  var isReadonly = index$3.useReadonly();
  var isError = Vue.ref();
  var disabledReduce = Vue.computed(function () {
    return tDisabled.value || !number.canReduceNumber(tValue.value, props.min, props.largeNumber);
  });
  var disabledAdd = Vue.computed(function () {
    return tDisabled.value || !number.canAddNumber(tValue.value, props.max, props.largeNumber);
  });
  var wrapClasses = Vue.computed(function () {
    return ["".concat(classPrefix.value, "-input-number"), SIZE.value[props.size], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, tDisabled.value), "".concat(classPrefix.value, "-is-controls-right"), props.theme === "column"), "".concat(classPrefix.value, "-input-number--").concat(props.theme), props.theme), "".concat(classPrefix.value, "-input-number--auto-width"), props.autoWidth)];
  });
  var reduceClasses = Vue.computed(function () {
    return ["".concat(classPrefix.value, "-input-number__decrease"), _defineProperty__default["default"]({}, STATUS.value.disabled, disabledReduce.value)];
  });
  var addClasses = Vue.computed(function () {
    return ["".concat(classPrefix.value, "-input-number__increase"), _defineProperty__default["default"]({}, STATUS.value.disabled, disabledAdd.value)];
  });
  var getUserInput = function getUserInput(value2) {
    var _inputRef$value;
    if (!value2 && value2 !== 0) return "";
    var inputStr = value2 || value2 === 0 ? String(value2) : "";
    if (!((_inputRef$value = inputRef.value) !== null && _inputRef$value !== void 0 && (_inputRef$value = _inputRef$value.inputRef) !== null && _inputRef$value !== void 0 && _inputRef$value.contains(document.activeElement))) {
      var num = number.formatUnCompleteNumber(inputStr, {
        decimalPlaces: props.decimalPlaces,
        largeNumber: props.largeNumber,
        isToFixed: true
      });
      inputStr = num || num === 0 ? String(num) : "";
      if (props.format) {
        inputStr = String(props.format(value2, {
          fixedNumber: inputStr
        }));
      }
    }
    return inputStr;
  };
  Vue.watch(tValue, function (val) {
    var largeNumber$1 = props.largeNumber,
      decimalPlaces = props.decimalPlaces;
    var inputValue = [void 0, null].includes(val) ? "" : String(val);
    if (!largeNumber$1 && !Number.isNaN(userInput.value)) {
      if (parseFloat(userInput.value) !== val) {
        userInput.value = getUserInput(inputValue);
      }
      var fixedNumber = Number(largeNumber.largeNumberToFixed(inputValue, decimalPlaces, largeNumber$1));
      if (decimalPlaces !== void 0 && ![void 0, null].includes(val) && Number(fixedNumber) !== Number(tValue.value)) {
        setTValue(fixedNumber, {
          type: "props",
          e: void 0
        });
      }
    }
    if (largeNumber$1) {
      userInput.value = getUserInput(inputValue);
      if (decimalPlaces !== void 0 && largeNumber.largeNumberToFixed(inputValue, decimalPlaces, largeNumber$1) !== val) {
        var _inputRef$value2;
        var completeValue = inputValue;
        if (!((_inputRef$value2 = inputRef.value) !== null && _inputRef$value2 !== void 0 && (_inputRef$value2 = _inputRef$value2.inputRef) !== null && _inputRef$value2 !== void 0 && _inputRef$value2.contains(document.activeElement))) {
          completeValue = number.formatUnCompleteNumber(completeValue, {
            decimalPlaces: props.decimalPlaces,
            largeNumber: props.largeNumber,
            isToFixed: true
          });
        }
        setTValue(completeValue, {
          type: "props",
          e: void 0
        });
      }
    }
  }, {
    immediate: true
  });
  Vue.watch([tValue, max, min], function () {
    var _props$onValidate;
    if ([void 0, "", null].includes(tValue.value)) return;
    var max2 = props.max,
      min2 = props.min,
      largeNumber = props.largeNumber;
    var error = number.getMaxOrMinValidateResult({
      value: tValue.value,
      largeNumber: largeNumber,
      max: max2,
      min: min2
    });
    isError.value = error;
    (_props$onValidate = props.onValidate) === null || _props$onValidate === void 0 || _props$onValidate.call(props, {
      error: error
    });
  }, {
    immediate: true
  });
  var handleStepValue = function handleStepValue(op) {
    var newValue = number.getStepValue({
      op: op,
      step: props.step,
      max: props.max,
      min: props.min,
      lastValue: tValue.value,
      largeNumber: props.largeNumber
    });
    var largeNumber = props.largeNumber,
      max2 = props.max,
      min2 = props.min;
    var overLimit = number.getMaxOrMinValidateResult({
      value: newValue,
      largeNumber: largeNumber,
      max: max2,
      min: min2
    });
    return {
      overLimit: overLimit,
      newValue: newValue
    };
  };
  var handleReduce = function handleReduce(e) {
    if (disabledReduce.value || isReadonly.value) return;
    var r = handleStepValue("reduce");
    if (r.overLimit && !props.allowInputOverLimit) return;
    setTValue(r.newValue, {
      type: "reduce",
      e: e
    });
  };
  var handleAdd = function handleAdd(e) {
    if (disabledAdd.value || isReadonly.value) return;
    var r = handleStepValue("add");
    if (r.overLimit && !props.allowInputOverLimit) return;
    setTValue(r.newValue, {
      type: "add",
      e: e
    });
  };
  var onInnerInputChange = function onInnerInputChange(inputValue, _ref4) {
    var e = _ref4.e;
    var val = number.formatThousandths(inputValue);
    if (!number.canInputNumber(val, props.largeNumber)) return;
    var processedVal = val;
    if (props.decimalPlaces !== void 0 && val !== "" && val.includes(".")) {
      var parts = val.split(".");
      var decimalLimit = typeof props.decimalPlaces === "number" ? props.decimalPlaces : props.decimalPlaces.places;
      if (parts[1] && parts[1].length > decimalLimit) {
        processedVal = "".concat(parts[0], ".").concat(parts[1].substring(0, decimalLimit));
      }
    }
    userInput.value = processedVal;
    if (props.largeNumber) {
      setTValue(processedVal, {
        type: "input",
        e: e
      });
      return;
    }
    var newNumber = processedVal === "" ? void 0 : Number(processedVal);
    if (number.canSetValue(processedVal, Number(tValue.value))) {
      setTValue(newNumber, {
        type: "input",
        e: e
      });
    }
  };
  var handleBlur = function handleBlur(value2, ctx) {
    var _props$onBlur4;
    var largeNumber = props.largeNumber,
      max2 = props.max,
      min2 = props.min,
      decimalPlaces = props.decimalPlaces;
    if (!props.allowInputOverLimit) {
      if ([void 0, null].includes(tValue.value) && min2 !== -Infinity) {
        var _props$onBlur;
        setTValue(min2, {
          type: "blur",
          e: ctx.e
        });
        (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, min2, ctx);
        return;
      }
      if (tValue.value !== void 0) {
        var r = number.getMaxOrMinValidateResult({
          value: tValue.value,
          largeNumber: largeNumber,
          max: max2,
          min: min2
        });
        if (r === "below-minimum") {
          var _props$onBlur2;
          setTValue(min2, {
            type: "blur",
            e: ctx.e
          });
          (_props$onBlur2 = props.onBlur) === null || _props$onBlur2 === void 0 || _props$onBlur2.call(props, min2, ctx);
          return;
        }
        if (r === "exceed-maximum") {
          var _props$onBlur3;
          setTValue(max2, {
            type: "blur",
            e: ctx.e
          });
          (_props$onBlur3 = props.onBlur) === null || _props$onBlur3 === void 0 || _props$onBlur3.call(props, max2, ctx);
          return;
        }
      }
    }
    var newValue = number.formatUnCompleteNumber(value2, {
      decimalPlaces: decimalPlaces,
      largeNumber: largeNumber
    });
    userInput.value = getUserInput(newValue);
    if (newValue !== tValue.value) {
      setTValue(newValue, {
        type: "blur",
        e: ctx.e
      });
    }
    (_props$onBlur4 = props.onBlur) === null || _props$onBlur4 === void 0 || _props$onBlur4.call(props, newValue, ctx);
  };
  var handleFocus = function handleFocus(value2, ctx) {
    var _props$onFocus;
    userInput.value = tValue.value || tValue.value === 0 ? String(tValue.value) : "";
    (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, value2, ctx);
  };
  var handleKeydown = function handleKeydown(value2, ctx) {
    var _props$onKeydown;
    if (tDisabled.value) return;
    var e = ctx.e;
    var keyEvent = {
      ArrowUp: handleAdd,
      ArrowDown: handleReduce
    };
    var code = e.code || e.key;
    if (keyEvent[code] !== void 0) {
      keyEvent[code](e);
    }
    (_props$onKeydown = props.onKeydown) === null || _props$onKeydown === void 0 || _props$onKeydown.call(props, value2, ctx);
  };
  var handleKeyup = function handleKeyup(value2, ctx) {
    var _props$onKeyup;
    (_props$onKeyup = props.onKeyup) === null || _props$onKeyup === void 0 || _props$onKeyup.call(props, value2, ctx);
  };
  var handleKeypress = function handleKeypress(value2, ctx) {
    var _props$onKeypress;
    (_props$onKeypress = props.onKeypress) === null || _props$onKeypress === void 0 || _props$onKeypress.call(props, value2, ctx);
  };
  var handleEnter = function handleEnter(value2, ctx) {
    var _props$onEnter;
    userInput.value = getUserInput(value2);
    var newValue = number.formatUnCompleteNumber(value2, {
      decimalPlaces: props.decimalPlaces,
      largeNumber: props.largeNumber
    });
    if (newValue !== value2 && String(newValue) !== value2) {
      setTValue(newValue, {
        type: "enter",
        e: ctx.e
      });
    }
    (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, ctx);
  };
  var focus = function focus() {
    if (tDisabled.value || isReadonly.value) return;
    inputRef.value.focus();
  };
  var blur = function blur() {
    inputRef.value.blur();
  };
  var listeners = {
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeydown: handleKeydown,
    onKeyup: handleKeyup,
    onKeypress: handleKeypress,
    onEnter: handleEnter,
    onClick: focus
  };
  return {
    classPrefix: classPrefix,
    wrapClasses: wrapClasses,
    reduceClasses: reduceClasses,
    addClasses: addClasses,
    tDisabled: tDisabled,
    isError: isError,
    listeners: listeners,
    userInput: userInput,
    tValue: tValue,
    inputRef: inputRef,
    focus: focus,
    blur: blur,
    handleReduce: handleReduce,
    handleAdd: handleAdd,
    onInnerInputChange: onInnerInputChange,
    isReadonly: isReadonly
  };
}

exports["default"] = useInputNumber;
//# sourceMappingURL=useInputNumber.js.map
