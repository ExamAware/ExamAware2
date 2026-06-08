/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, watchEffect, provide, createVNode, mergeProps } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { intersection, isUndefined, isObject } from 'lodash-es';
import _Checkbox from './checkbox.js';
import props from './checkbox-group-props.js';
import { CheckboxGroupInjectionKey } from './consts/index.js';
import { b as useChildComponentSlots } from '../_chunks/dep-e3ce8c8f.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-fe23be6e.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import './props.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-47b13687.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import './hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import './hooks/useKeyboardEvent.js';
import '../_chunks/dep-30c631d1.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Group = defineComponent({
  name: "TCheckboxGroup",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("checkbox-group");
    var renderTNodeJSX = useTNodeJSX();
    var isArray = Array.isArray;
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var optionList = ref([]);
    var intersectionLen = computed(function () {
      if (!isArray(innerValue.value)) return 0;
      var values = optionList.value.map(function (item) {
        return item.value;
      });
      var n = intersection(innerValue.value, values);
      return n.length;
    });
    var isCheckAll = computed(function () {
      var optionItems = optionList.value.filter(function (item) {
        return !item.disabled && !item.readonly && !item.checkAll;
      }).map(function (t) {
        return t.value;
      });
      var intersectionValues = intersection(optionItems, innerValue.value);
      return intersectionValues.length === optionItems.length;
    });
    var indeterminate = computed(function () {
      return !isCheckAll.value && intersectionLen.value < optionList.value.length && intersectionLen.value !== 0;
    });
    var maxExceeded = computed(function () {
      return !isUndefined(props2.max) && innerValue.value.length === props2.max;
    });
    watchEffect(function () {
      if (!props2.options) return [];
      optionList.value = props2.options.map(function (item) {
        return isObject(item) ? item : {
          label: String(item),
          value: item
        };
      });
    });
    var getAllCheckboxValue = function getAllCheckboxValue() {
      var checkAllVal = /* @__PURE__ */new Set();
      var uncheckAllVal = /* @__PURE__ */new Set();
      for (var i = 0, len = optionList.value.length; i < len; i++) {
        var item = optionList.value[i];
        if (item.checkAll) continue;
        if (item.disabled) {
          if (!innerValue.value.includes(item.value)) continue;else uncheckAllVal.add(item.value);
        }
        if (item.readonly) {
          if (!innerValue.value.includes(item.value)) continue;else uncheckAllVal.add(item.value);
        }
        checkAllVal.add(item.value);
        if (maxExceeded.value) break;
      }
      return {
        checkAllVal: _toConsumableArray(checkAllVal),
        uncheckAllVal: _toConsumableArray(uncheckAllVal)
      };
    };
    var onCheckAllChange = function onCheckAllChange(checked, context) {
      var _getAllCheckboxValue = getAllCheckboxValue(),
        checkAllVal = _getAllCheckboxValue.checkAllVal,
        uncheckAllVal = _getAllCheckboxValue.uncheckAllVal;
      var value2 = checked ? checkAllVal : uncheckAllVal;
      setInnerValue(value2, {
        e: context.e,
        type: checked ? "check" : "uncheck",
        current: void 0,
        option: void 0
      });
    };
    var handleCheckboxChange = function handleCheckboxChange(data) {
      var currentValue = data.option.value;
      if (!isArray(innerValue.value)) {
        console.warn("TDesign CheckboxGroup Warn: `value` must be an array, instead of ".concat(_typeof(innerValue.value)));
        return;
      }
      var val = _toConsumableArray(innerValue.value);
      if (data.checked) {
        val.push(currentValue);
      } else {
        var i = val.indexOf(currentValue);
        val.splice(i, 1);
      }
      setInnerValue(val, {
        e: data.e,
        current: data.option.value,
        option: data.option,
        type: data.checked ? "check" : "uncheck"
      });
    };
    var onCheckedChange = function onCheckedChange(p) {
      var checked = p.checked,
        checkAll = p.checkAll,
        e = p.e;
      if (checkAll) {
        onCheckAllChange(checked, {
          e: e
        });
      } else {
        handleCheckboxChange(p);
      }
    };
    var getChildComponentSlots = useChildComponentSlots();
    var getOptionListBySlots = function getOptionListBySlots() {
      var nodes = getChildComponentSlots("Checkbox");
      var arr = [];
      nodes === null || nodes === void 0 || nodes.forEach(function (node) {
        var option = node.props;
        if (!option) return;
        if (option["check-all"] === "" || option["check-all"] === true) {
          option.checkAll = true;
        }
        arr.push(option);
      });
      return arr;
    };
    provide(CheckboxGroupInjectionKey, computed(function () {
      return {
        name: props2.name,
        isCheckAll: isCheckAll.value,
        checkedValues: innerValue.value || [],
        maxExceeded: maxExceeded.value,
        disabled: props2.disabled,
        readonly: props2.readonly,
        indeterminate: indeterminate.value,
        handleCheckboxChange: handleCheckboxChange,
        onCheckedChange: onCheckedChange
      };
    }));
    return function () {
      var _props2$options;
      var children = null;
      if ((_props2$options = props2.options) !== null && _props2$options !== void 0 && _props2$options.length) {
        var _optionList$value;
        children = (_optionList$value = optionList.value) === null || _optionList$value === void 0 ? void 0 : _optionList$value.map(function (option, index) {
          var _innerValue$value;
          return createVNode(_Checkbox, mergeProps({
            "key": "".concat(option.value || "").concat(index),
            "lazyLoad": props2.lazyLoad
          }, option, {
            "index": index,
            "checked": (_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value.includes(option.value),
            "data": option
          }), null);
        });
      } else {
        var nodes = renderTNodeJSX("default");
        optionList.value = getOptionListBySlots();
        children = nodes;
      }
      return createVNode("div", {
        "class": COMPONENT_NAME.value,
        "role": "group",
        "aria-label": "checkbox-group"
      }, [children]);
    };
  }
});

export { _Group as default };
//# sourceMappingURL=group.js.map
