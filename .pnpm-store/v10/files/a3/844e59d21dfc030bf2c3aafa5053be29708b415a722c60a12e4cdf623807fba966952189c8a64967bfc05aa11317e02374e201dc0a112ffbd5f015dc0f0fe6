/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watch, onMounted, onBeforeUnmount, createVNode, provide, reactive } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isArray, isNumber } from 'lodash-es';
import { f as formatSliderValue, a as formatPrecision, g as getStopStyle } from '../_chunks/dep-4e271ede.mjs';
import { e as useDisabled, u as usePrefixClass, c as useCommonClassName, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import { sliderPropsInjectKey } from './consts/index.mjs';
import { useSliderInput } from './hooks/useSliderInput.mjs';
import { useSliderMark } from './hooks/useSliderMark.mjs';
import props from './props.mjs';
import _SliderButton from './slider-button.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import 'tdesign-icons-vue-next';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import './slider-mark.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../tooltip/utils/index.mjs';
import './hooks/useSliderTooltip.mjs';

var _Slider = defineComponent({
  name: "TSlider",
  model: {
    prop: "value",
    event: "change"
  },
  props: props,
  setup: function setup(props2) {
    var disabled = useDisabled();
    var COMPONENT_NAME = usePrefixClass("slider");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      sliderValue = _useVModel2[0],
      setSliderValue = _useVModel2[1];
    var sliderContainerRef = ref();
    var sliderRef = ref();
    var firstButtonRef = ref();
    var secondButtonRef = ref();
    var firstValue = ref(formatSliderValue(sliderValue.value, "first"));
    var secondValue = ref(formatSliderValue(sliderValue.value, "second"));
    var dragging = ref(false);
    var sliderSize = ref(1);
    var vertical = computed(function () {
      return props2.layout === "vertical";
    });
    var containerClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__container"), {
        "is-vertical": vertical.value
      }];
    });
    var sliderClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), _defineProperty(_defineProperty(_defineProperty({
        "is-vertical": vertical.value
      }, "".concat(COMPONENT_NAME.value, "--with-input"), props2.inputNumberProps), "".concat(COMPONENT_NAME.value, "--vertical"), vertical.value), STATUS.value.disabled, disabled.value)];
    });
    var sliderRailClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__rail"), {
        "show-input": props2.inputNumberProps,
        disabled: disabled.value
      }];
    });
    var runwayStyle = computed(function () {
      return vertical.value ? {
        height: "100%"
      } : {};
    });
    var barStyle = computed(function () {
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
    var rangeDiff = computed(function () {
      return props2.max - props2.min;
    });
    var minValue = computed(function () {
      return Math.min(firstValue.value, secondValue.value);
    });
    var maxValue = computed(function () {
      return Math.max(firstValue.value, secondValue.value);
    });
    var steps = computed(function () {
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
    var precision = computed(function () {
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
      if (props2.range && isArray(value2)) {
        var _ref3 = [Math.min.apply(Math, _toConsumableArray(value2)), Math.max.apply(Math, _toConsumableArray(value2))],
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
    var isAlreadyMount = ref(false);
    var init = function init() {
      var valuetext;
      if (props2.range) {
        if (isArray(sliderValue.value)) {
          firstValue.value = formatPrecision(Math.max(props2.min || 0, sliderValue.value[0]), precision.value);
          secondValue.value = formatPrecision(Math.min(props2.max || 100, sliderValue.value[1]), precision.value);
        } else {
          firstValue.value = formatPrecision(props2.min || 0, precision.value);
          secondValue.value = formatPrecision(props2.max || 100, precision.value);
        }
        valuetext = "".concat(firstValue.value, "-").concat(secondValue.value);
      } else {
        if (!isNumber(sliderValue.value)) {
          firstValue.value = props2.min;
        } else {
          var value2 = Math.min(props2.max, Math.max(props2.min, sliderValue.value));
          firstValue.value = formatPrecision(value2, precision.value);
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
    watch(function () {
      return sliderValue.value;
    }, function (newVal) {
      if (dragging.value === true) return;
      if (isArray(newVal) && props2.range) {
        var _newVal = _slicedToArray(newVal, 2);
        firstValue.value = _newVal[0];
        secondValue.value = _newVal[1];
      } else {
        firstValue.value = newVal;
      }
    });
    watch([firstValue, secondValue, dragging], function (newStates, prevStates) {
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
    onMounted(function () {
      init();
      isAlreadyMount.value = true;
    });
    onBeforeUnmount(function () {
      window.removeEventListener("resize", resetSize);
    });
    var markConfig = computed(function () {
      return {
        max: props2.max,
        min: props2.min,
        marks: props2.marks,
        vertical: vertical.value,
        prefixName: COMPONENT_NAME.value
      };
    });
    var renderMask = useSliderMark(markConfig);
    var inputConfig = computed(function () {
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
    var renderInputNumber = useSliderInput(inputConfig);
    var renderInputButton = function renderInputButton() {
      var firstInputVal = setValues(firstValue.value);
      var firstInputOnChange = function firstInputOnChange(v) {
        firstValue.value = setValues(v);
      };
      var secondInputVal = setValues(secondValue.value);
      var secondInputOnChange = function secondInputOnChange(v) {
        secondValue.value = setValues(v);
      };
      return createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__input-container"), {
          "is-vertical": vertical.value
        }]
      }, [renderInputNumber(firstInputVal, firstInputOnChange), props2.range && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__center-line")
      }, null), props2.range && renderInputNumber(secondInputVal, secondInputOnChange)]);
    };
    var toggleDragging = function toggleDragging(toState) {
      dragging.value = toState;
    };
    var _toRefs2 = toRefs(props2),
      min = _toRefs2.min,
      max = _toRefs2.max,
      step = _toRefs2.step;
    provide(sliderPropsInjectKey, reactive({
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
      return createVNode("div", {
        "class": containerClass.value,
        "ref": sliderContainerRef
      }, [createVNode("div", {
        "class": sliderClass.value,
        "role": "slider",
        "aria-valuemin": props2.min,
        "aria-valuemax": props2.max,
        "aria-orientation": props2.layout,
        "aria-disabled": disabled.value,
        "tooltip-props": props2.tooltipProps
      }, [createVNode("div", {
        "class": sliderRailClass.value,
        "style": runwayStyle.value,
        "onClick": onSliderClick,
        "ref": sliderRef
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__track"),
        "style": barStyle.value
      }, null), createVNode(_SliderButton, {
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
      }, null), props2.range && createVNode(_SliderButton, {
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
      }, null), props2.showStep && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__stops")
      }, [steps.value.map(function (item, key) {
        if (item.position === 0 || item.position === 100) return null;
        return createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__stop"),
          "key": key,
          "style": getStopStyle(item, vertical.value)
        }, null);
      })]), renderMask(changeValue)])]), isAlreadyMount.value && props2.inputNumberProps && renderInputButton()]);
    };
  }
});

export { _Slider as default };
//# sourceMappingURL=slider.mjs.map
