/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import ColorSlider from './slider.js';
import { useBaseClassName } from '../../hooks/index.js';
import '@babel/runtime/helpers/defineProperty';
import '../../../_chunks/dep-8d136a55.js';
import '../../../_chunks/dep-110706c1.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import 'tinycolor2';
import 'lodash-es';
import '../../../_chunks/dep-ddf323ca.js';
import '@babel/runtime/helpers/toConsumableArray';
import './base-props.js';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../../_chunks/dep-880d05b9.js';

var AlphaSlider = defineComponent({
  name: "AlphaSlider",
  inheritAttrs: false,
  props: {
    color: {
      type: Object
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    onChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  },
  setup: function setup(props) {
    var baseClassName = useBaseClassName();
    var handleChange = function handleChange(v, isDragEnd) {
      props.onChange(v / 100, isDragEnd);
    };
    var railStyle = computed(function () {
      return {
        background: "linear-gradient(to right, rgba(0, 0, 0, 0), ".concat(props.color.rgb, ")")
      };
    });
    return function () {
      return createVNode(ColorSlider, {
        "class": ["".concat(baseClassName.value, "__alpha"), "".concat(baseClassName.value, "--bg-alpha")],
        "color": props.color,
        "value": props.color.alpha * 100,
        "onChange": handleChange,
        "rail-style": railStyle.value,
        "max-value": 100,
        "disabled": props.disabled,
        "type": "alpha"
      }, null);
    };
  }
});

export { AlphaSlider as default };
//# sourceMappingURL=alpha.js.map
