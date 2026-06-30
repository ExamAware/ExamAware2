/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var utils = require('../_chunks/dep-ccada3ec.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-e8ff2c13.js');
var slider_consts_index = require('./consts/index.js');
var slider_hooks_useSliderInput = require('./hooks/useSliderInput.js');
var slider_hooks_useSliderMark = require('./hooks/useSliderMark.js');
var slider_props = require('./props.js');
var slider_sliderButton = require('./slider-button.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isNumber = require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../input-number/index.js');
require('../input-number/input-number.js');
require('tdesign-icons-vue-next');
require('../button/index.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-0b6215b5.js');
require('../input/index.js');
require('../input/input.js');
require('../input/props.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-bc848944.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../_chunks/dep-b6058ff9.js');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../input-number/props.js');
require('../_chunks/dep-bf113ca4.js');
require('../input-number/hooks/useInputNumber.js');
require('../_chunks/dep-2359c164.js');
require('../_chunks/dep-48e7c2a2.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');
require('./slider-mark.js');
require('../tooltip/index.js');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../popup/container.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../tooltip/utils/index.js');
require('./hooks/useSliderTooltip.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Slider = Vue.defineComponent({
  name: "TSlider",
  model: {
    prop: "value",
    event: "change"
  },
  props: slider_props["default"],
  setup: function setup(props2) {
    var disabled = index.useDisabled();
    var COMPONENT_NAME = index$1.usePrefixClass("slider");
    var _useCommonClassName = index$2.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$3.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      sliderValue = _useVModel2[0],
      setSliderValue = _useVModel2[1];
    var sliderContainerRef = Vue.ref();
    var sliderRef = Vue.ref();
    var firstButtonRef = Vue.ref();
    var secondButtonRef = Vue.ref();
    var firstValue = Vue.ref(utils.formatSliderValue(sliderValue.value, "first"));
    var secondValue = Vue.ref(utils.formatSliderValue(sliderValue.value, "second"));
    var dragging = Vue.ref(false);
    var sliderSize = Vue.ref(1);
    var vertical = Vue.computed(function () {
      return props2.layout === "vertical";
    });
    var containerClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__container"), {
        "is-vertical": vertical.value
      }];
    });
    var sliderClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({
        "is-vertical": vertical.value
      }, "".concat(COMPONENT_NAME.value, "--with-input"), props2.inputNumberProps), "".concat(COMPONENT_NAME.value, "--vertical"), vertical.value), STATUS.value.disabled, disabled.value)];
    });
    var sliderRailClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__rail"), {
        "show-input": props2.inputNumberProps,
        disabled: disabled.value
      }];
    });
    var runwayStyle = Vue.computed(function () {
      return vertical.value ? {
        height: "100%"
      } : {};
    });
    var barStyle = Vue.computed(function () {
      var barStart = props2.range ? "".concat(100 * (minValue.value - props2.min) / rangeDiff.value, "%") : "0%";
      var currentDiff = props2.range ? maxValue.value - minValue.value : firstValue.value - props2.min;
      var barSize = "".concat(100 * currentDiff / rangeDiff.value, "%");
      return vertical.value ? {
        height: barSize,
        bottom: barStart
      } : {
        width: barSize,
        left: barStart
      };
    });
    var rangeDiff = Vue.computed(function () {
      return props2.max - props2.min;
    });
    var minValue = Vue.computed(function () {
      return Math.min(firstValue.value, secondValue.value);
    });
    var maxValue = Vue.computed(function () {
      return Math.max(firstValue.value, secondValue.value);
    });
    var steps = Vue.computed(function () {
      if (!props2.showStep || props2.min > props2.max) return [];
      if (props2.step === 0) {
        console.warn("[Element Warn][Slider]step should not be 0.");
        return [];
      }
      var stepCount = rangeDiff.value / props2.step;
      var stepWidth = 100 * props2.step / rangeDiff.value;
      var result = [];
      for (var i = 1; i < stepCount; i++) {
        result.push(i * stepWidth);
      }
      if (props2.range) {
        var r = result.filter(function (step2) {
          return step2 < 100 * (minValue.value - props2.min) / rangeDiff.value || props2.step > 100 * (maxValue.value - props2.max) / rangeDiff.value;
        });
        return r;
      }
      return result.filter(function (step2) {
        return step2 > 100 * (firstValue.value - props2.min) / rangeDiff.value;
      });
    });
    var precision = Vue.computed(function () {
      var precisions = [props2.min, props2.max, props2.step].map(function (item) {
        var decimalArr = "".concat(item).split(".");
        return decimalArr[1] ? decimalArr[1].length : 0;
      });
      return Math.max.apply(null, precisions);
    });
    var setValues = function setValues(value2) {
      var _ref2 = [props2.min, props2.max],
        min2 = _ref2[0],
        max2 = _ref2[1];
      if (min2 > max2) {
        console.warn("[Slider] max should be greater than min.");
        return;
      }
      if (props2.range && isArray.isArray(value2)) {
        var _ref3 = [Math.min.apply(Math, _toConsumableArray__default["default"](value2)), Math.max.apply(Math, _toConsumableArray__default["default"](value2))],
          maxLimit = _ref3[0],
          minLimit = _ref3[1];
        if (maxLimit > max2) {
          maxLimit = firstValue.value;
        }
        if (maxLimit < min2) {
          maxLimit = min2;
        }
        if (minLimit < min2) {
          minLimit = secondValue.value;
        }
        if (minLimit > max2) {
          minLimit = max2;
        }
        var _ref4 = [maxLimit, minLimit];
        firstValue.value = _ref4[0];
        secondValue.value = _ref4[1];
        return [maxLimit, minLimit];
      }
      var preValue = value2;
      if (preValue < min2) {
        preValue = min2;
      }
      if (preValue > max2) {
        preValue = max2;
      }
      return preValue;
    };
    var emitChange = function emitChange(value2) {
      var changeValue2 = value2;
      if (changeValue2 === void 0) {
        if (props2.range) {
          changeValue2 = [firstValue.value, secondValue.value];
        } else {
          changeValue2 = firstValue.value;
        }
      }
      var fixValue = setValues(changeValue2);
      setSliderValue(fixValue);
    };
    var resetSize = function resetSize() {
      if (sliderRef.value) {
        sliderSize.value = sliderRef.value["client".concat(vertical.value ? "Height" : "Width")];
      }
    };
    var isAlreadyMount = Vue.ref(false);
    var init = function init() {
      var valuetext;
      if (props2.range) {
        if (isArray.isArray(sliderValue.value)) {
          firstValue.value = utils.formatPrecision(Math.max(props2.min || 0, sliderValue.value[0]), precision.value);
          secondValue.value = utils.formatPrecision(Math.min(props2.max || 100, sliderValue.value[1]), precision.value);
        } else {
          firstValue.value = utils.formatPrecision(props2.min || 0, precision.value);
          secondValue.value = utils.formatPrecision(props2.max || 100, precision.value);
        }
        valuetext = "".concat(firstValue.value, "-").concat(secondValue.value);
      } else {
        if (!isNumber.isNumber(sliderValue.value)) {
          firstValue.value = props2.min;
        } else {
          var value2 = Math.min(props2.max, Math.max(props2.min, sliderValue.value));
          firstValue.value = utils.formatPrecision(value2, precision.value);
        }
        valuetext = String(firstValue.value);
      }
      if (sliderContainerRef.value) {
        sliderContainerRef.value.setAttribute("aria-valuetext", valuetext);
      }
      resetSize();
      window.addEventListener("resize", resetSize);
    };
    var setPosition = function setPosition(percent) {
      var targetValue = percent * rangeDiff.value / 100;
      targetValue = props2.min + targetValue;
      if (!props2.range && firstButtonRef.value) {
        firstButtonRef.value.setPosition(percent);
        return;
      }
      var button;
      if (Math.abs(minValue.value - targetValue) < Math.abs(maxValue.value - targetValue)) {
        button = firstValue.value < secondValue.value ? "button1" : "button2";
      } else {
        button = firstValue.value > secondValue.value ? "button1" : "button2";
      }
      if (button === "button1" && firstButtonRef.value) {
        firstButtonRef.value.setPosition(percent);
      }
      if (button === "button2" && secondButtonRef.value) {
        secondButtonRef.value.setPosition(percent);
      }
    };
    var getFixValue = function getFixValue() {
      var changeValue2 = props2.range ? [firstValue.value, secondValue.value] : firstValue.value;
      return setValues(changeValue2);
    };
    var onSliderClick = function onSliderClick(event) {
      var _props2$onChangeEnd;
      if (disabled.value || dragging.value) {
        return;
      }
      if (!sliderRef.value) return;
      resetSize();
      var value2 = 0;
      if (vertical.value) {
        var sliderOffsetBottom = sliderRef.value.getBoundingClientRect().bottom;
        value2 = (sliderOffsetBottom - event.clientY) / sliderSize.value * 100;
        setPosition(value2);
      } else {
        var sliderOffsetLeft = sliderRef.value.getBoundingClientRect().left;
        value2 = (event.clientX - sliderOffsetLeft) / sliderSize.value * 100;
        setPosition(value2);
      }
      var fixValue = getFixValue();
      (_props2$onChangeEnd = props2.onChangeEnd) === null || _props2$onChangeEnd === void 0 || _props2$onChangeEnd.call(props2, fixValue);
    };
    var changeValue = function changeValue(point) {
      var _props2$onChangeEnd2;
      if (disabled.value || dragging.value) {
        return;
      }
      resetSize();
      var value2 = Number(point / rangeDiff.value * 100);
      setPosition(value2);
      emitChange(point);
      var fixValue = getFixValue();
      (_props2$onChangeEnd2 = props2.onChangeEnd) === null || _props2$onChangeEnd2 === void 0 || _props2$onChangeEnd2.call(props2, fixValue);
    };
    Vue.watch(function () {
      return sliderValue.value;
    }, function (newVal) {
      if (dragging.value === true) return;
      if (isArray.isArray(newVal) && props2.range) {
        var _newVal = _slicedToArray__default["default"](newVal, 2);
        firstValue.value = _newVal[0];
        secondValue.value = _newVal[1];
      } else {
        firstValue.value = newVal;
      }
    });
    Vue.watch([firstValue, secondValue, dragging], function (newStates, prevStates) {
      if (newStates[0] !== prevStates[0]) {
        if (props2.range) {
          emitChange([minValue.value, maxValue.value]);
        } else {
          emitChange(firstValue.value);
        }
      }
      if (newStates[1] !== prevStates[1]) {
        if (props2.range) {
          emitChange([minValue.value, maxValue.value]);
        }
      }
      if (newStates[2] !== prevStates[2] && newStates[2] === false) {
        init();
      }
    });
    Vue.onMounted(function () {
      init();
      isAlreadyMount.value = true;
    });
    Vue.onBeforeUnmount(function () {
      window.removeEventListener("resize", resetSize);
    });
    var markConfig = Vue.computed(function () {
      return {
        max: props2.max,
        min: props2.min,
        marks: props2.marks,
        vertical: vertical.value,
        prefixName: COMPONENT_NAME.value
      };
    });
    var renderMask = slider_hooks_useSliderMark.useSliderMark(markConfig);
    var inputConfig = Vue.computed(function () {
      return {
        max: props2.max,
        min: props2.min,
        inputNumberProps: props2.inputNumberProps,
        step: props2.step,
        prefixName: COMPONENT_NAME.value,
        vertical: vertical.value,
        disabled: disabled.value
      };
    });
    var renderInputNumber = slider_hooks_useSliderInput.useSliderInput(inputConfig);
    var renderInputButton = function renderInputButton() {
      var firstInputVal = setValues(firstValue.value);
      var firstInputOnChange = function firstInputOnChange(v) {
        firstValue.value = setValues(v);
      };
      var secondInputVal = setValues(secondValue.value);
      var secondInputOnChange = function secondInputOnChange(v) {
        secondValue.value = setValues(v);
      };
      return Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__input-container"), {
          "is-vertical": vertical.value
        }]
      }, [renderInputNumber(firstInputVal, firstInputOnChange), props2.range && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__center-line")
      }, null), props2.range && renderInputNumber(secondInputVal, secondInputOnChange)]);
    };
    var toggleDragging = function toggleDragging(toState) {
      dragging.value = toState;
    };
    var _toRefs2 = Vue.toRefs(props2),
      min = _toRefs2.min,
      max = _toRefs2.max,
      step = _toRefs2.step;
    Vue.provide(slider_consts_index.sliderPropsInjectKey, Vue.reactive({
      min: min,
      max: max,
      step: step,
      dragging: dragging,
      toggleDragging: toggleDragging,
      precision: precision,
      disabled: disabled,
      resetSize: resetSize,
      sliderSize: sliderSize
    }));
    return function () {
      return Vue.createVNode("div", {
        "class": containerClass.value,
        "ref": sliderContainerRef
      }, [Vue.createVNode("div", {
        "class": sliderClass.value,
        "role": "slider",
        "aria-valuemin": props2.min,
        "aria-valuemax": props2.max,
        "aria-orientation": props2.layout,
        "aria-disabled": disabled.value,
        "tooltip-props": props2.tooltipProps
      }, [Vue.createVNode("div", {
        "class": sliderRailClass.value,
        "style": runwayStyle.value,
        "onClick": onSliderClick,
        "ref": sliderRef
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__track"),
        "style": barStyle.value
      }, null), Vue.createVNode(slider_sliderButton["default"], {
        "vertical": vertical.value,
        "value": firstValue.value,
        "ref": firstButtonRef,
        "disabled": disabled.value,
        "range": props2.range,
        "position": "start",
        "tooltip-props": props2.tooltipProps,
        "label": props2.label,
        "onInput": function onInput(v) {
          firstValue.value = v;
        },
        "onMouseup": function onMouseup() {
          var _props2$onChangeEnd3;
          var fixValue = getFixValue();
          (_props2$onChangeEnd3 = props2.onChangeEnd) === null || _props2$onChangeEnd3 === void 0 || _props2$onChangeEnd3.call(props2, fixValue);
        }
      }, null), props2.range && Vue.createVNode(slider_sliderButton["default"], {
        "vertical": vertical.value,
        "value": secondValue.value,
        "ref": secondButtonRef,
        "disabled": disabled.value,
        "label": props2.label,
        "range": props2.range,
        "position": "end",
        "tooltip-props": props2.tooltipProps,
        "onInput": function onInput(v) {
          secondValue.value = v;
        },
        "onMouseup": function onMouseup() {
          var _props2$onChangeEnd4;
          var fixValue = getFixValue();
          (_props2$onChangeEnd4 = props2.onChangeEnd) === null || _props2$onChangeEnd4 === void 0 || _props2$onChangeEnd4.call(props2, fixValue);
        }
      }, null), props2.showStep && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__stops")
      }, [steps.value.map(function (item, key) {
        if (item.position === 0 || item.position === 100) return null;
        return Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__stop"),
          "key": key,
          "style": utils.getStopStyle(item, vertical.value)
        }, null);
      })]), renderMask(changeValue)])]), isAlreadyMount.value && props2.inputNumberProps && renderInputButton()]);
    };
  }
});

exports["default"] = _Slider;
//# sourceMappingURL=slider.js.map
