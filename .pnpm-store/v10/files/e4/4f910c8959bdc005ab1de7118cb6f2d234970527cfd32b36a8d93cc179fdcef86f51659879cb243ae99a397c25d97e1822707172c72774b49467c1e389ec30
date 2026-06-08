/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isBoolean, omit } from 'lodash-es';
import { InputNumber } from '../../input-number/index.js';
import '../../input-number/input-number.js';
import 'tdesign-icons-vue-next';
import '../../button/index.js';
import '../../button/button.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../../loading/index.js';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../loading/icon/gradient.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../loading/props.js';
import '../../_chunks/dep-664b8b22.js';
import '../../button/props.js';
import '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-d2a6e7a4.js';
import '../../input/index.js';
import '../../input/input.js';
import '../../input/props.js';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../_chunks/dep-47b13687.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '../../_chunks/dep-51e5a827.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../_chunks/dep-80a77612.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../input-number/props.js';
import '../../_chunks/dep-4d7b9152.js';
import '../../input-number/hooks/useInputNumber.js';
import '../../_chunks/dep-1a63d163.js';
import '../../_chunks/dep-05f15b4e.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useSliderInput = function useSliderInput(config) {
  var name = config.value.prefixName;
  var sliderInputState = computed(function () {
    var _config$value$step$to;
    var initialState = {
      format: void 0,
      placeholder: "",
      theme: "column",
      decimalPlaces: ((_config$value$step$to = config.value.step.toString().split(".")[1]) === null || _config$value$step$to === void 0 ? void 0 : _config$value$step$to.length) || 0
    };
    var inputProps = config.value;
    if (!isBoolean(inputProps.inputNumberProps)) {
      var _inputProps$inputNumb;
      var inputTheme = (_inputProps$inputNumb = inputProps.inputNumberProps) === null || _inputProps$inputNumb === void 0 ? void 0 : _inputProps$inputNumb.theme;
      initialState = _objectSpread(_objectSpread({}, initialState), omit(inputProps.inputNumberProps, "onChange"));
      if (["column", "row", "normal"].includes(inputTheme)) {
        initialState.theme = inputTheme;
      }
    }
    return initialState;
  });
  var sliderNumberClass = computed(function () {
    return ["".concat(name, "__input"), {
      "is-vertical": config.value.vertical
    }];
  });
  var renderInputNumber = function renderInputNumber(val, changeFn) {
    var normalizeChangeFn = function normalizeChangeFn(num, context) {
      var _config$value, _config$value$onChang;
      if (num !== void 0 && !isNaN(num)) {
        changeFn(num);
      }
      (_config$value = config.value) === null || _config$value === void 0 || (_config$value = _config$value.inputNumberProps) === null || _config$value === void 0 || (_config$value$onChang = _config$value.onChange) === null || _config$value$onChang === void 0 || _config$value$onChang.call(_config$value, num, context);
    };
    return createVNode(InputNumber, mergeProps(sliderInputState.value, {
      "class": sliderNumberClass.value,
      "value": val,
      "step": config.value.step,
      "onChange": normalizeChangeFn,
      "disabled": config.value.disabled,
      "min": config.value.min,
      "max": config.value.max
    }), null);
  };
  return renderInputNumber;
};

export { useSliderInput };
//# sourceMappingURL=useSliderInput.js.map
