/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, computed, h, createVNode } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { u as usePrefixClass, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import props from './check-tag-group-props.mjs';
import _CheckTag from './check-tag.mjs';
import { isFunction } from 'lodash-es';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
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
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './check-tag-props.mjs';
import './tag.mjs';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-b31d8258.mjs';
import './props.mjs';

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
//# sourceMappingURL=check-tag-group.mjs.map
