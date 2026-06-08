/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, reactive, watch, onMounted, onBeforeUnmount, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { cloneDeep } from 'lodash-es';
import { G as GRADIENT_SLIDER_DEFAULT_WIDTH } from '../../../_chunks/dep-26597e10.mjs';
import '../../utils/index.mjs';
import { InputNumber } from '../../../input-number/index.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import { c as useCommonClassName } from '../../../_chunks/dep-7673347f.mjs';
import baseProps from './base-props.mjs';
import { b as genGradientPoint, c as gradientColors2string } from '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../input-number/input-number.mjs';
import 'tdesign-icons-vue-next';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../loading/props.mjs';
import './style/css.mjs';
import '../../../button/props.mjs';
import '../../../input/index.mjs';
import '../../../input/input.mjs';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';
import '../../../_chunks/dep-b31d8258.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DELETE_KEYS = ["delete", "backspace"];
var LinearGradient = defineComponent({
  name: "LinearGradient",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, baseProps), {}, {
    enableMultipleGradient: {
      type: Boolean,
      "default": true
    }
  }),
  setup: function setup(props) {
    var baseClassName = useBaseClassName();
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var statusClassNames = STATUS.value;
    var refSlider = ref(null);
    var sliderRect = reactive({
      left: 0,
      width: GRADIENT_SLIDER_DEFAULT_WIDTH
    });
    var isDragging = ref(false);
    var isMoved = ref(false);
    var degree = ref(props.color.gradientDegree);
    var selectedId = ref(props.color.gradientSelectedId);
    var colors = ref(cloneDeep(props.color.gradientColors));
    watch(function () {
      return props.color.gradientDegree;
    }, function (value) {
      return degree.value = value;
    });
    watch(function () {
      return props.color.gradientSelectedId;
    }, function (value) {
      return selectedId.value = value;
    });
    watch(function () {
      return props.color.gradientColors;
    }, function (value) {
      colors.value = cloneDeep(value);
    }, {
      deep: true
    });
    var handleChange = function handleChange(key, payload, addUsedColor) {
      if (props.disabled) {
        return;
      }
      props.onChange({
        key: key,
        payload: payload,
        addUsedColor: addUsedColor
      });
    };
    var handleDegreeChange = function handleDegreeChange(value) {
      if (props.disabled || value === props.color.gradientDegree) {
        return;
      }
      degree.value = value;
      handleChange("degree", value, true);
    };
    var handleSelectedIdChange = function handleSelectedIdChange(value) {
      if (props.disabled) {
        return;
      }
      selectedId.value = value;
      handleChange("selectedId", value);
    };
    var handleColorsChange = function handleColorsChange(value, isEnded) {
      if (props.disabled) {
        return;
      }
      colors.value = value;
      handleChange("colors", value, isEnded);
    };
    var updateActiveThumbLeft = function updateActiveThumbLeft(left) {
      var index = colors.value.findIndex(function (c) {
        return c.id === selectedId.value;
      });
      if (index === -1) {
        return;
      }
      var point = colors.value[index];
      left = Math.max(0, Math.min(sliderRect.width, left));
      var percentLeft = left / sliderRect.width * 100;
      colors.value.splice(index, 1, {
        color: point.color,
        left: percentLeft,
        id: point.id
      });
      handleColorsChange(colors.value);
    };
    var handleStart = function handleStart(id) {
      var rect = refSlider.value.getBoundingClientRect();
      sliderRect.left = rect.left;
      sliderRect.width = rect.width || GRADIENT_SLIDER_DEFAULT_WIDTH;
      if (isDragging.value || props.disabled) {
        return;
      }
      isMoved.value = false;
      isDragging.value = true;
      handleSelectedIdChange(id);
      refSlider.value.focus();
      window.addEventListener("mousemove", handleMove, false);
      window.addEventListener("mouseup", _handleEnd, false);
      window.addEventListener("contextmenu", _handleEnd, false);
    };
    var handleMove = function handleMove(e) {
      if (!isDragging.value || props.disabled) {
        return;
      }
      var left = e.clientX - sliderRect.left;
      isMoved.value = true;
      updateActiveThumbLeft(left);
    };
    var _handleEnd = function handleEnd() {
      if (!isDragging.value) {
        return;
      }
      setTimeout(function () {
        isDragging.value = false;
      }, 0);
      if (isMoved.value) {
        handleColorsChange(colors.value, true);
        isMoved.value = false;
      }
      window.removeEventListener("mousemove", handleMove, false);
      window.removeEventListener("mouseup", _handleEnd, false);
      window.removeEventListener("contextmenu", _handleEnd, false);
    };
    var handleKeyup = function handleKeyup(e) {
      if (props.disabled) {
        return;
      }
      var points = colors.value;
      var pos = points.findIndex(function (c) {
        return c.id === selectedId.value;
      });
      var length = points.length;
      if (DELETE_KEYS.includes(e.key.toLocaleLowerCase()) && length > 2 && pos >= 0 && pos <= length - 1) {
        points.splice(pos, 1);
        if (!points[pos]) {
          pos = points[pos + 1] ? pos + 1 : points[pos - 1] ? pos - 1 : 0;
        }
        var current = points[pos];
        handleColorsChange(points, true);
        handleSelectedIdChange(current === null || current === void 0 ? void 0 : current.id);
      }
    };
    var handleThumbBarClick = function handleThumbBarClick(e) {
      if (props.disabled || !props.enableMultipleGradient) {
        return;
      }
      var left = e.offsetX;
      var percentLeft = left / sliderRect.width * 100;
      var newPoint = genGradientPoint(percentLeft, props.color.rgba);
      colors.value.push(newPoint);
      handleColorsChange(colors.value, true);
      handleSelectedIdChange(newPoint.id);
    };
    onMounted(function () {
      var rect = refSlider.value.getBoundingClientRect();
      sliderRect.left = rect.left;
      sliderRect.width = rect.width || GRADIENT_SLIDER_DEFAULT_WIDTH;
    });
    onBeforeUnmount(function () {
      window.removeEventListener("mousemove", handleMove, false);
      window.removeEventListener("mouseup", _handleEnd, false);
      window.removeEventListener("contextmenu", _handleEnd, false);
    });
    return function () {
      var _props$color = props.color,
        linearGradient = _props$color.linearGradient,
        gradientColors = _props$color.gradientColors;
      var thumbBackground = gradientColors2string({
        points: gradientColors,
        degree: 90
      });
      return createVNode("div", {
        "class": "".concat(baseClassName.value, "__gradient")
      }, [createVNode("div", {
        "class": "".concat(baseClassName.value, "__gradient-slider")
      }, [createVNode("div", {
        "class": ["".concat(baseClassName.value, "__slider"), "".concat(baseClassName.value, "--bg-alpha")],
        "onKeyup": handleKeyup,
        "tabindex": 0,
        "ref": refSlider
      }, [createVNode("ul", {
        "class": "gradient-thumbs",
        "onClick": handleThumbBarClick,
        "style": {
          background: thumbBackground
        }
      }, [colors.value.map(function (t) {
        var left = "".concat(Math.round(t.left * 100) / 100, "%");
        return createVNode("li", {
          "class": ["".concat(baseClassName.value, "__thumb"), "gradient-thumbs__item", selectedId.value === t.id ? statusClassNames.active : ""],
          "key": t.id,
          "title": "".concat(t.color, " ").concat(left),
          "style": {
            color: t.color,
            left: left
          },
          "onClick": function onClick(e) {
            return e.stopPropagation();
          },
          "onMousedown": function onMousedown() {
            return handleStart(t.id);
          }
        }, [createVNode("span", {
          "class": ["gradient-thumbs__item-inner", "".concat(baseClassName.value, "--bg-alpha")]
        }, null)]);
      })])])]), createVNode("div", {
        "class": "".concat(baseClassName.value, "__gradient-degree"),
        "title": "".concat(degree.value, "deg")
      }, [createVNode(InputNumber, {
        "size": "small",
        "theme": "normal",
        "min": 0,
        "max": 360,
        "step": 1,
        "format": function format(value) {
          return "".concat(value, "\xB0");
        },
        "modelValue": degree.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return degree.value = $event;
        },
        "onBlur": handleDegreeChange,
        "onEnter": handleDegreeChange,
        "disabled": props.disabled
      }, null)]), createVNode("div", {
        "class": ["".concat(baseClassName.value, "__gradient-preview"), "".concat(baseClassName.value, "--bg-alpha")]
      }, [createVNode("span", {
        "class": "preview-inner",
        "style": {
          background: linearGradient
        }
      }, null)])]);
    };
  }
});

export { LinearGradient as default };
//# sourceMappingURL=linear-gradient.mjs.map
