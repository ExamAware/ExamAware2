/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, watch, h, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isFunction, isString, isArray } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { Loading } from '../loading/index.js';
import props from './props.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-fb805f69.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';

var _Switch = defineComponent({
  name: "TSwitch",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var disabled = useDisabled();
    var COMPONENT_NAME = usePrefixClass("switch");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setSwitchVal = _useVModel2[1];
    var activeValue = computed(function () {
      if (props2.customValue && props2.customValue.length > 0) {
        return props2.customValue[0];
      }
      return true;
    });
    var inactiveValue = computed(function () {
      if (props2.customValue && props2.customValue.length > 1) {
        return props2.customValue[1];
      }
      return false;
    });
    function handleToggle(e) {
      var checked = innerValue.value === activeValue.value ? inactiveValue.value : activeValue.value;
      setSwitchVal(checked, {
        e: e
      });
    }
    function toggle(e) {
      if (disabled.value || props2.loading) {
        return;
      }
      if (!props2.beforeChange) {
        handleToggle(e);
        return;
      }
      Promise.resolve(props2.beforeChange()).then(function (v) {
        if (v) {
          handleToggle(e);
        }
      })["catch"](function (e2) {
        throw new Error("Switch: some error occurred: ".concat(e2));
      });
    }
    var classes = computed(function () {
      return ["".concat(COMPONENT_NAME.value), SIZE.value[props2.size], _defineProperty(_defineProperty(_defineProperty({}, STATUS.value.disabled, disabled.value), STATUS.value.loading, props2.loading), STATUS.value.checked, innerValue.value === activeValue.value || props2.modelValue === activeValue.value)];
    });
    var nodeClasses = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__handle"), _defineProperty(_defineProperty({}, STATUS.value.disabled, disabled.value), STATUS.value.loading, props2.loading)];
    });
    var contentClasses = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__content"), SIZE.value[props2.size], _defineProperty({}, STATUS.value.disabled, disabled.value)];
    });
    watch(innerValue, function (val) {
      if (props2.customValue && props2.customValue.length && !props2.customValue.includes(val)) {
        throw new Error("value is ".concat(val, " not in ").concat(JSON.stringify(props2.customValue)));
      }
    }, {
      immediate: true
    });
    var content = computed(function () {
      if (isFunction(props2.label)) {
        return props2.label(h, {
          value: innerValue.value
        });
      }
      if (isString(props2.label)) {
        return props2.label;
      }
      if (isArray(props2.label) && props2.label.length) {
        var label = innerValue.value === activeValue.value ? props2.label[0] : props2.label[1];
        if (!label) return;
        if (isString(label)) {
          return label;
        }
        if (isFunction(label)) {
          return label(h);
        }
      }
      if (slots.label) {
        return slots.label({
          value: innerValue.value
        });
      }
      return null;
    });
    return function () {
      var switchContent;
      var loadingContent;
      if (props2.loading) {
        loadingContent = createVNode(Loading, {
          "size": "small"
        }, null);
      } else if (content.value) {
        switchContent = content.value;
      }
      return createVNode("div", {
        "class": classes.value,
        "onClick": toggle
      }, [createVNode("span", {
        "class": nodeClasses.value
      }, [loadingContent]), createVNode("div", {
        "class": contentClasses.value
      }, [switchContent])]);
    };
  }
});

export { _Switch as default };
//# sourceMappingURL=switch.js.map
