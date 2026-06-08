/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { throttle } from 'lodash-es';
import { j as getColorFormatMap, C as Color, k as getColorFormatInputs } from '../../../_chunks/dep-149cfe2d.mjs';
import props from '../../props.mjs';
import { Input } from '../../../input/index.mjs';
import { InputNumber } from '../../../input-number/index.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import '../../../_chunks/dep-26597e10.mjs';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../input/input.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../../../input/props.mjs';
import '../../../_chunks/dep-7673347f.mjs';
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
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../form/consts/index.mjs';
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import './style/css.mjs';
import '../../../input-number/input-number.mjs';
import '../../../button/index.mjs';
import '../../../button/button.mjs';
import '../../../loading/index.mjs';
import '../../../loading/directive.mjs';
import '../../../loading/plugin.mjs';
import '../../../loading/loading.mjs';
import '../../../loading/icon/gradient.mjs';
import '../../../loading/props.mjs';
import '../../../button/props.mjs';
import '../../../input-number/props.mjs';
import '../../../input-number/hooks/useInputNumber.mjs';
import '../../../_chunks/dep-29754cb4.mjs';
import '../../../_chunks/dep-db81c302.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormatInputs = defineComponent({
  name: "FormatInputs",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, props), {}, {
    color: {
      type: Object
    },
    onInputChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  }),
  setup: function setup(props2) {
    var modelValue = reactive({});
    var lastModelValue = reactive({});
    var updateModelValue = function updateModelValue() {
      var format = props2.format,
        color = props2.color;
      if (!color) return;
      var values = getColorFormatMap(color, "encode")[format];
      values.a = Math.round(color.alpha * 100);
      Object.keys(values).forEach(function (key) {
        modelValue[key] = values[key];
        lastModelValue[key] = values[key];
      });
    };
    updateModelValue();
    var throttleUpdate = throttle(updateModelValue, 100);
    watch(function () {
      var _props2$color = props2.color,
        saturation = _props2$color.saturation,
        hue = _props2$color.hue,
        value = _props2$color.value,
        alpha = _props2$color.alpha;
      return [saturation, hue, value, alpha, props2.format];
    }, throttleUpdate);
    var handleChange = function handleChange(key, v) {
      if (v === lastModelValue[key]) return;
      if (key === "a") {
        props2.color.alpha = v / 100;
      } else if (key === "hex" || key === "css") {
        props2.color.update(v);
      } else {
        props2.color.update(Color.object2color(modelValue, props2.format));
      }
      var value = getColorFormatMap(props2.color, "decode")[props2.format];
      props2.onInputChange(value, props2.color.alpha, key, v);
    };
    return function () {
      var inputProps = _objectSpread({}, props2.inputProps || {});
      return createVNode("div", {
        "class": "input-group"
      }, [getColorFormatInputs(props2.format, props2.enableAlpha).map(function (config) {
        return createVNode("div", {
          "class": "input-group__item",
          "key": config.key,
          "style": {
            flex: config.flex || 1
          }
        }, [config.type === "input" ? createVNode(Input, mergeProps(inputProps, {
          "align": "center",
          "size": "small",
          "disabled": props2.disabled,
          "modelValue": modelValue[config.key],
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return modelValue[config.key] = $event;
          },
          "maxlength": props2.format === "HEX" ? 9 : void 0,
          "title": modelValue[config.key],
          "onBlur": function onBlur(v) {
            return handleChange(config.key, v);
          },
          "onEnter": function onEnter(v) {
            return handleChange(config.key, v);
          }
        }), null) : createVNode(InputNumber, mergeProps(inputProps, {
          "align": "center",
          "size": "small",
          "disabled": props2.disabled,
          "modelValue": modelValue[config.key],
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return modelValue[config.key] = $event;
          },
          "title": modelValue[config.key],
          "min": config.min,
          "max": config.max,
          "step": 1,
          "format": config.format,
          "theme": "normal",
          "onBlur": function onBlur(v) {
            return handleChange(config.key, v);
          },
          "onEnter": function onEnter(v) {
            return handleChange(config.key, v);
          }
        }), null)]);
      })]);
    };
  }
});

export { FormatInputs as default };
//# sourceMappingURL=inputs.mjs.map
