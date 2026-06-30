/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isBoolean, omit } from 'lodash-es';
import { InputNumber } from '../../input-number/index.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../input-number/input-number.mjs';
import 'tdesign-icons-vue-next';
import '../../button/index.mjs';
import '../../button/button.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import '../../input/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import '../../input-number/props.mjs';
import '../../input-number/hooks/useInputNumber.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';

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
//# sourceMappingURL=useSliderInput.mjs.map
