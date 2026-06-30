/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import ColorSlider from './slider.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import '../../../_chunks/dep-1dacc319.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-26597e10.mjs';
import '../../utils/index.mjs';
import '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import './base-props.mjs';
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
//# sourceMappingURL=alpha.mjs.map
