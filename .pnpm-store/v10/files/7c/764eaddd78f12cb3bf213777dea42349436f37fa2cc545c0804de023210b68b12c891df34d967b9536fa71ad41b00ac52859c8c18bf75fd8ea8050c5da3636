/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, isVNode, h } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import props from './check-tag-group-props.js';
import _CheckTag from './check-tag.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './check-tag-props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-30c631d1.js';
import './tag.js';
import 'tdesign-icons-vue-next';
import 'tinycolor2';
import './props.js';
import '../_chunks/dep-3a7a2ef1.js';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _CheckTagGroup = defineComponent({
  name: "TCheckTagGroup",
  props: props,
  setup: function setup(props2, context) {
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      options = _toRefs.options;
    var componentName = usePrefixClass("check-tag-group");
    var checkTagGroupClasses = computed(function () {
      return [componentName.value];
    });
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var onCheckTagChange = function onCheckTagChange(checked, ctx) {
      var value2 = ctx.value;
      if (checked) {
        if (props2.multiple) {
          setInnerValue(innerValue.value.concat(value2), {
            e: ctx.e,
            type: "check",
            value: value2
          });
        } else {
          setInnerValue([value2], {
            e: ctx.e,
            type: "check",
            value: value2
          });
        }
      } else {
        var newValue = [];
        if (props2.multiple) {
          newValue = innerValue.value.filter(function (t) {
            return t !== value2;
          });
        }
        setInnerValue(newValue, {
          e: ctx.e,
          type: "uncheck",
          value: value2
        });
      }
    };
    var getTagContent = function getTagContent(option) {
      if (context.slots.option) return context.slots.option(option);
      if (context.slots.label) return context.slots.label(option);
      if (option.label) {
        return isFunction(option.label) ? option.label(h) : option.label;
      }
      if (option.content && isFunction(option.content)) return option.content(h);
      if (option["default"] && isFunction(option["default"])) return option["default"](h);
      return option.value;
    };
    return function () {
      return createVNode("div", {
        "class": checkTagGroupClasses.value
      }, [(options.value || []).map(function (option) {
        var _slot;
        return createVNode(_CheckTag, {
          "key": option.value,
          "value": option.value,
          "checkedProps": props2.checkedProps,
          "uncheckedProps": props2.uncheckedProps,
          "checked": innerValue.value.includes(option.value),
          "onChange": onCheckTagChange,
          "disabled": option.disabled,
          "size": option.size,
          "data-value": option.value
        }, _isSlot(_slot = getTagContent(option)) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      })]);
    };
  }
});

export { _CheckTagGroup as default };
//# sourceMappingURL=check-tag-group.js.map
