/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Input } from '../../../input/index.js';
import { g as getColorObject, C as Color } from '../../../_chunks/dep-110706c1.js';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/toConsumableArray';
import { useBaseClassName } from '../../hooks/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../../_chunks/dep-4f8b6591.js';
import '../../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../../_chunks/dep-880d05b9.js';
import { u as useEventForward } from '../../../_chunks/dep-4d7b9152.js';
import '../../../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../../../input/props.js';
import '../../../_chunks/dep-2accc95a.js';
import '../../../_chunks/dep-16bcfabc.js';
import '../../../_chunks/dep-fb805f69.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../_chunks/dep-f7dd3c12.js';
import '../../../_chunks/dep-3a7a2ef1.js';
import '../../../_chunks/dep-47b13687.js';
import '../../../input/hooks/useInput.js';
import '../../../form/consts/index.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
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
import 'tinycolor2';
import '../../../_chunks/dep-8d136a55.js';

var DefaultTrigger = defineComponent({
  name: "DefaultTrigger",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      "default": ""
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    borderless: {
      type: Boolean,
      "default": false
    },
    clearable: {
      type: Boolean,
      "default": false
    },
    inputProps: {
      type: Object,
      "default": function _default() {
        return {
          autoWidth: true
        };
      }
    },
    onTriggerChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    },
    onTriggerClear: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    },
    size: {
      type: String,
      "default": "medium"
    }
  },
  setup: function setup(props) {
    var baseClassName = useBaseClassName();
    var value = ref(props.color);
    var _useCommonClassName = useCommonClassName(),
      sizeClassNames = _useCommonClassName.SIZE;
    watch(function () {
      return [props.color];
    }, function () {
      return value.value = props.color;
    });
    var handleChange = function handleChange(input) {
      if (input !== props.color) {
        props.onTriggerChange(value.value, {
          color: getColorObject(new Color(input)),
          trigger: "input"
        });
      }
    };
    var handleClear = function handleClear(context) {
      var _props$onTriggerClear;
      return (_props$onTriggerClear = props.onTriggerClear) === null || _props$onTriggerClear === void 0 ? void 0 : _props$onTriggerClear.call(props, context);
    };
    var inputEvents = useEventForward(props.inputProps, {
      onBlur: handleChange,
      onChange: handleChange,
      onClear: handleClear
    });
    return function () {
      var inputSlots = {
        label: function label() {
          return createVNode("div", {
            "class": ["".concat(baseClassName.value, "__trigger--default__color"), "".concat(baseClassName.value, "--bg-alpha")]
          }, [createVNode("span", {
            "class": ["color-inner", _defineProperty({}, sizeClassNames.value[props.size], props.size !== "medium")],
            "style": {
              background: value.value
            }
          }, null)]);
        }
      };
      return createVNode(Input, mergeProps({
        "borderless": props.borderless,
        "clearable": props.clearable,
        "size": props.size,
        "modelValue": value.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return value.value = $event;
        },
        "disabled": props.disabled
      }, inputEvents.value), inputSlots);
    };
  }
});

export { DefaultTrigger as default };
//# sourceMappingURL=index.js.map
