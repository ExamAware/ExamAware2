/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, watch, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { throttle } from 'lodash-es';
import { C as Color } from '../../../_chunks/dep-110706c1.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import { a as getColorFormatInputs, b as getColorFormatMap } from '../../../_chunks/dep-deedcdfd.js';
import props from '../../props.js';
import { Input } from '../../../input/index.js';
import { InputNumber } from '../../../input-number/index.js';
import '@babel/runtime/helpers/slicedToArray';
import 'tinycolor2';
import '../../../_chunks/dep-8d136a55.js';
import '@babel/runtime/helpers/toConsumableArray';
import '../../../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../../../input/props.js';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-4f8b6591.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-880d05b9.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../_chunks/dep-51e5a827.js';
import '../../../input/hooks/useLengthLimit.js';
import '../../../_chunks/dep-8295e674.js';
import '../../../_chunks/dep-80a99546.js';
import '../../../input/hooks/useInputEventHandler.js';
import '../../../input/hooks/useInputWidth.js';
import '../../../_chunks/dep-80a77612.js';
import '../../../input/input-group.js';
import '../../../input/input-group-props.js';
import '../../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../../../input-number/input-number.js';
import '../../../button/index.js';
import '../../../button/button.js';
import '../../../loading/index.js';
import '../../../loading/directive.js';
import '../../../loading/plugin.js';
import '../../../_chunks/dep-ee693784.js';
import '../../../loading/icon/gradient.js';
import '../../../_chunks/dep-2ea19dca.js';
import '../../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../../../button/props.js';
import '../../../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../../../input-number/props.js';
import '../../../_chunks/dep-4d7b9152.js';
import '../../../input-number/hooks/useInputNumber.js';
import '../../../_chunks/dep-1a63d163.js';
import '../../../_chunks/dep-05f15b4e.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-number/_index.less';

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
//# sourceMappingURL=inputs.js.map
