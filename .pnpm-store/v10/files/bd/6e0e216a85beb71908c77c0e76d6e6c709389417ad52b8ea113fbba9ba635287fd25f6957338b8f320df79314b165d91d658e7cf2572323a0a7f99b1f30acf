/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { Input } from '../../../input/index.mjs';
import '../../utils/index.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import { c as useCommonClassName, o as useEventForward } from '../../../_chunks/dep-7673347f.mjs';
import { g as getColorObject, C as Color } from '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../input/input.mjs';
import '../../../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../../../input/props.mjs';
import '../../../input/hooks/index.mjs';
import '../../../input/hooks/useInput.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../form/consts/index.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
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
import '../../../input/hooks/useLengthLimit.mjs';
import '../../../_chunks/dep-6d2705e1.mjs';
import '../../../_chunks/dep-0cde7579.mjs';
import '../../../input/hooks/useInputEventHandler.mjs';
import '../../../input/hooks/useInputWidth.mjs';
import '../../../input/input-group.mjs';
import '../../../input/input-group-props.mjs';
import './style/css.mjs';
import '../../../_chunks/dep-26597e10.mjs';
import '../../../_chunks/dep-b31d8258.mjs';

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
//# sourceMappingURL=index.mjs.map
