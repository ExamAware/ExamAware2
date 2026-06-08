/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var input_index = require('../../../input/index.js');
var color = require('../../../_chunks/dep-8ec26d87.js');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/toConsumableArray');
var colorPicker_hooks_index = require('../../hooks/index.js');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-953a77eb.js');
var index = require('../../../_chunks/dep-8382953f.js');
require('../../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../../_chunks/dep-cc66acf1.js');
var index$1 = require('../../../_chunks/dep-bf113ca4.js');
require('../../../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('tdesign-icons-vue-next');
require('../../../input/props.js');
require('../../../_chunks/dep-47c460dd.js');
require('../../../_chunks/dep-06276759.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-b3b464e8.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-87589faa.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-4fa46641.js');
require('../../../_chunks/dep-422dd97f.js');
require('../../../_chunks/dep-71fa6bfc.js');
require('../../../_chunks/dep-80a478d7.js');
require('../../../_chunks/dep-427dabac.js');
require('../../../_chunks/dep-72c4cc44.js');
require('../../../_chunks/dep-ee355a9a.js');
require('../../../_chunks/dep-23f77e26.js');
require('../../../_chunks/dep-ecaaae91.js');
require('../../../_chunks/dep-874d2900.js');
require('../../../_chunks/dep-d45110a6.js');
require('../../../_chunks/dep-31c76dc6.js');
require('../../../_chunks/dep-bc848944.js');
require('../../../input/hooks/useInput.js');
require('../../../form/consts/index.js');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');
require('../../../_chunks/dep-e8ff2c13.js');
require('../../../input/hooks/useLengthLimit.js');
require('../../../_chunks/dep-733b2b51.js');
require('../../../_chunks/dep-55c70201.js');
require('../../../_chunks/dep-fd5a369e.js');
require('../../../_chunks/dep-4ccaead1.js');
require('../../../_chunks/dep-990979bb.js');
require('../../../input/hooks/useInputEventHandler.js');
require('../../../input/hooks/useInputWidth.js');
require('../../../_chunks/dep-b6058ff9.js');
require('../../../input/input-group.js');
require('../../../input/input-group-props.js');
require('../../../_chunks/dep-d62a674d.js');
require('tinycolor2');
require('../../../_chunks/dep-4291c54c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var DefaultTrigger = Vue.defineComponent({
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
    var baseClassName = colorPicker_hooks_index.useBaseClassName();
    var value = Vue.ref(props.color);
    var _useCommonClassName = index.useCommonClassName(),
      sizeClassNames = _useCommonClassName.SIZE;
    Vue.watch(function () {
      return [props.color];
    }, function () {
      return value.value = props.color;
    });
    var handleChange = function handleChange(input) {
      if (input !== props.color) {
        props.onTriggerChange(value.value, {
          color: color.getColorObject(new color.Color(input)),
          trigger: "input"
        });
      }
    };
    var handleClear = function handleClear(context) {
      var _props$onTriggerClear;
      return (_props$onTriggerClear = props.onTriggerClear) === null || _props$onTriggerClear === void 0 ? void 0 : _props$onTriggerClear.call(props, context);
    };
    var inputEvents = index$1.useEventForward(props.inputProps, {
      onBlur: handleChange,
      onChange: handleChange,
      onClear: handleClear
    });
    return function () {
      var inputSlots = {
        label: function label() {
          return Vue.createVNode("div", {
            "class": ["".concat(baseClassName.value, "__trigger--default__color"), "".concat(baseClassName.value, "--bg-alpha")]
          }, [Vue.createVNode("span", {
            "class": ["color-inner", _defineProperty__default["default"]({}, sizeClassNames.value[props.size], props.size !== "medium")],
            "style": {
              background: value.value
            }
          }, null)]);
        }
      };
      return Vue.createVNode(input_index.Input, Vue.mergeProps({
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

exports["default"] = DefaultTrigger;
//# sourceMappingURL=index.js.map
