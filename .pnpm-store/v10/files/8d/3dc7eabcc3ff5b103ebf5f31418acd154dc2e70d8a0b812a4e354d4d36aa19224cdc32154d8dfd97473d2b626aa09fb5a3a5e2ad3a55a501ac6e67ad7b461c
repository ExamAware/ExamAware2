/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var inputNumber_index = require('../../input-number/index.js');
var isBoolean = require('../../_chunks/dep-d45110a6.js');
var omit = require('../../_chunks/dep-ace0b57c.js');
require('../../input-number/input-number.js');
require('tdesign-icons-vue-next');
require('../../button/index.js');
require('../../button/button.js');
require('@babel/runtime/helpers/toConsumableArray');
require('../../loading/index.js');
require('../../_chunks/dep-95261778.js');
require('../../loading/plugin.js');
require('../../_chunks/dep-237ed01f.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../loading/icon/gradient.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../config-provider/hooks/useConfig.js');
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
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../loading/props.js');
require('../../_chunks/dep-9cc695aa.js');
require('../../_chunks/dep-48de95ee.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-912c9727.js');
require('../../_chunks/dep-0b8a4740.js');
require('../../_chunks/dep-cd8cfdc0.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-9ce6873a.js');
require('../../_chunks/dep-779f6290.js');
require('../../_chunks/dep-d62a674d.js');
require('../../button/props.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../input/index.js');
require('../../input/input.js');
require('../../input/props.js');
require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-bc848944.js');
require('../../input/hooks/useInput.js');
require('../../form/consts/index.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../input/hooks/useLengthLimit.js');
require('../../_chunks/dep-733b2b51.js');
require('../../input/hooks/useInputEventHandler.js');
require('../../input/hooks/useInputWidth.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../input/input-group.js');
require('../../input/input-group-props.js');
require('../../input-number/props.js');
require('../../_chunks/dep-bf113ca4.js');
require('../../input-number/hooks/useInputNumber.js');
require('../../_chunks/dep-2359c164.js');
require('../../_chunks/dep-48e7c2a2.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useSliderInput = function useSliderInput(config) {
  var name = config.value.prefixName;
  var sliderInputState = Vue.computed(function () {
    var _config$value$step$to;
    var initialState = {
      format: void 0,
      placeholder: "",
      theme: "column",
      decimalPlaces: ((_config$value$step$to = config.value.step.toString().split(".")[1]) === null || _config$value$step$to === void 0 ? void 0 : _config$value$step$to.length) || 0
    };
    var inputProps = config.value;
    if (!isBoolean.isBoolean(inputProps.inputNumberProps)) {
      var _inputProps$inputNumb;
      var inputTheme = (_inputProps$inputNumb = inputProps.inputNumberProps) === null || _inputProps$inputNumb === void 0 ? void 0 : _inputProps$inputNumb.theme;
      initialState = _objectSpread(_objectSpread({}, initialState), omit.omit(inputProps.inputNumberProps, "onChange"));
      if (["column", "row", "normal"].includes(inputTheme)) {
        initialState.theme = inputTheme;
      }
    }
    return initialState;
  });
  var sliderNumberClass = Vue.computed(function () {
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
    return Vue.createVNode(inputNumber_index.InputNumber, Vue.mergeProps(sliderInputState.value, {
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

exports.useSliderInput = useSliderInput;
//# sourceMappingURL=useSliderInput.js.map
