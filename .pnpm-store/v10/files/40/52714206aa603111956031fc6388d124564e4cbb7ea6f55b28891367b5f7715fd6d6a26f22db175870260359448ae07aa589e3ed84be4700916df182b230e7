/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { toRefs, ref, computed, watch } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import { u as useDisabled } from '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../../_chunks/dep-47b13687.js';
import { u as useVModel } from '../../_chunks/dep-51e5a827.js';
import { c as canReduceNumber, a as canAddNumber, f as formatUnCompleteNumber, g as getMaxOrMinValidateResult, b as formatThousandths, d as canInputNumber, e as canSetValue, h as getStepValue } from '../../_chunks/dep-1a63d163.js';
import { l as largeNumberToFixed } from '../../_chunks/dep-05f15b4e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-8295e674.js';

function useInputNumber(props) {
  var _useCommonClassName = useCommonClassName(),
    classPrefix = _useCommonClassName.classPrefix,
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var _toRefs = toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    max = _toRefs.max,
    min = _toRefs.min;
  var _useVModel = useVModel(value, modelValue, props.defaultValue, props.onChange),
    _useVModel2 = _slicedToArray(_useVModel, 2),
    tValue = _useVModel2[0],
    setTValue = _useVModel2[1];
  var inputRef = ref();
  var userInput = ref("");
  var tDisabled = useDisabled();
  var isReadonly = useReadonly();
  var isError = ref();
  var disabledReduce = computed(function () {
    return tDisabled.value || !canReduceNumber(tValue.value, props.min, props.largeNumber);
  });
  var disabledAdd = computed(function () {
    return tDisabled.value || !canAddNumber(tValue.value, props.max, props.largeNumber);
  });
  var wrapClasses = computed(function () {
    return ["".concat(classPrefix.value, "-input-number"), SIZE.value[props.size], _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, STATUS.value.disabled, tDisabled.value), "".concat(classPrefix.value, "-is-controls-right"), props.theme === "column"), "".concat(classPrefix.value, "-input-number--").concat(props.theme), props.theme), "".concat(classPrefix.value, "-input-number--auto-width"), props.autoWidth)];
  });
  var reduceClasses = computed(function () {
    return ["".concat(classPrefix.value, "-input-number__decrease"), _defineProperty({}, STATUS.value.disabled, disabledReduce.value)];
  });
  var addClasses = computed(function () {
    return ["".concat(classPrefix.value, "-input-number__increase"), _defineProperty({}, STATUS.value.disabled, disabledAdd.value)];
  });
  var getUserInput = function getUserInput(value2) {
    var _inputRef$value;
    if (!value2 && value2 !== 0) return "";
    var inputStr = value2 || value2 === 0 ? String(value2) : "";
    if (!((_inputRef$value = inputRef.value) !== null && _inputRef$value !== void 0 && (_inputRef$value = _inputRef$value.inputRef) !== null && _inputRef$value !== void 0 && _inputRef$value.contains(document.activeElement))) {
      var num = formatUnCompleteNumber(inputStr, {
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
  watch(tValue, function (val) {
    var largeNumber = props.largeNumber,
      decimalPlaces = props.decimalPlaces;
    var inputValue = [void 0, null].includes(val) ? "" : String(val);
    if (!largeNumber && !Number.isNaN(userInput.value)) {
      if (parseFloat(userInput.value) !== val) {
        userInput.value = getUserInput(inputValue);
      }
      var fixedNumber = Number(largeNumberToFixed(inputValue, decimalPlaces, largeNumber));
      if (decimalPlaces !== void 0 && ![void 0, null].includes(val) && Number(fixedNumber) !== Number(tValue.value)) {
        setTValue(fixedNumber, {
          type: "props",
          e: void 0
        });
      }
    }
    if (largeNumber) {
      userInput.value = getUserInput(inputValue);
      if (decimalPlaces !== void 0 && largeNumberToFixed(inputValue, decimalPlaces, largeNumber) !== val) {
        var _inputRef$value2;
        var completeValue = inputValue;
        if (!((_inputRef$value2 = inputRef.value) !== null && _inputRef$value2 !== void 0 && (_inputRef$value2 = _inputRef$value2.inputRef) !== null && _inputRef$value2 !== void 0 && _inputRef$value2.contains(document.activeElement))) {
          completeValue = formatUnCompleteNumber(completeValue, {
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
  watch([tValue, max, min], function () {
    var _props$onValidate;
    if ([void 0, "", null].includes(tValue.value)) return;
    var max2 = props.max,
      min2 = props.min,
      largeNumber = props.largeNumber;
    var error = getMaxOrMinValidateResult({
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
    var newValue = getStepValue({
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
    var overLimit = getMaxOrMinValidateResult({
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
    var val = formatThousandths(inputValue);
    if (!canInputNumber(val, props.largeNumber)) return;
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
    if (canSetValue(processedVal, Number(tValue.value))) {
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
        var r = getMaxOrMinValidateResult({
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
    var newValue = formatUnCompleteNumber(value2, {
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
    var newValue = formatUnCompleteNumber(value2, {
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

export { useInputNumber as default };
//# sourceMappingURL=useInputNumber.js.map
