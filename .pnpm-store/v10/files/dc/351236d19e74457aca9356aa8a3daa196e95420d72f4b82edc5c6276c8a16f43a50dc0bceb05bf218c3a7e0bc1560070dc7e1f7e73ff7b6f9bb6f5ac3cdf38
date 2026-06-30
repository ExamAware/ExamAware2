/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, watch, h, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { e as useDisabled, u as usePrefixClass, c as useCommonClassName, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import { Loading } from '../loading/index.mjs';
import props from './props.mjs';
import { isFunction, isString, isArray } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
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
import '../_chunks/dep-d36c4a3f.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=switch.mjs.map
