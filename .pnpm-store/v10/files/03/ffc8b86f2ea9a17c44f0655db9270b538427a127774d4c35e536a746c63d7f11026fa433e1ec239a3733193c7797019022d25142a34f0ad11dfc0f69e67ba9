/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, provide, reactive, ref, createVNode, mergeProps, computed } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isObject } from 'lodash-es';
import props from './props.mjs';
import stepItemProps from './step-item-props.mjs';
import _StepItem from './step-item.mjs';
import { u as usePrefixClass, j as useVModel, h as useChildComponentSlots } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'tdesign-icons-vue-next';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var _Steps = defineComponent({
  name: "TSteps",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("steps");
    var _toRefs = toRefs(props2),
      current = _toRefs.current,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(current, modelValue, props2.defaultCurrent, props2.onChange, "current"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerCurrent = _useVModel2[0],
      setInnerCurrent = _useVModel2[1];
    provide("StepsState", reactive({
      current: innerCurrent,
      setCurrent: setInnerCurrent
    }));
    provide("StepsProps", props2);
    var indexMap = ref({});
    var handleStatus = function handleStatus(itemProps, index) {
      if (itemProps.status && itemProps.status !== "default") return itemProps.status;
      if (innerCurrent.value === "FINISH") return "finish";
      if (itemProps.value === void 0 && index < Number(innerCurrent.value)) return "finish";
      if (itemProps.value !== void 0) {
        var matchIndex = Number(indexMap.value[innerCurrent.value]);
        if (matchIndex === void 0) {
          console.warn("TDesign Steps Warn: The current `value` is not exist.");
          return "default";
        }
        if (props2.sequence === "positive" && index < matchIndex) return "finish";
        if (props2.sequence === "reverse" && index > matchIndex) return "finish";
      }
      var key = itemProps.value === void 0 ? index : itemProps.value;
      if (key === innerCurrent.value) return "process";
      return "default";
    };
    var getChildComponentByName = useChildComponentSlots();
    var getOptionListBySlots = function getOptionListBySlots(nodes) {
      var arr = [];
      nodes === null || nodes === void 0 || nodes.forEach(function (node) {
        var option = (node === null || node === void 0 ? void 0 : node.props) || {};
        var children = node === null || node === void 0 ? void 0 : node.children;
        if (!option && !children) return;
        if (children && isObject(children)) {
          for (var key in children) {
            if (key in stepItemProps && !option[key]) {
              option[key] = children[key];
            }
          }
        }
        props2.sequence === "reverse" ? arr.unshift(option) : arr.push(option);
      });
      return arr;
    };
    var getOptions = function getOptions() {
      var _props2$options;
      var options;
      if ((_props2$options = props2.options) !== null && _props2$options !== void 0 && _props2$options.length) {
        options = props2.sequence === "reverse" ? props2.options.slice().reverse() : props2.options;
      } else {
        var nodes = getChildComponentByName("StepItem");
        options = getOptionListBySlots(nodes);
      }
      (options || []).forEach(function (item, index) {
        if (item.value !== void 0) indexMap.value[item.value] = index;
      });
      return options;
    };
    var renderContent = function renderContent() {
      var options = getOptions();
      return options.map(function (item, index) {
        var stepIndex = props2.sequence === "reverse" ? options.length - index - 1 : index;
        index = item.value !== void 0 ? index : stepIndex;
        return createVNode(_StepItem, mergeProps(item, {
          "index": stepIndex,
          "status": handleStatus(item, index),
          "key": item.value || index
        }), null);
      });
    };
    var handleTheme = function handleTheme() {
      var theme = props2.theme;
      var options = getOptions();
      options.forEach(function (item) {
        if ((item === null || item === void 0 ? void 0 : item.icon) !== void 0) {
          theme = "default";
        }
      });
      return theme;
    };
    var baseClass = computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.layout), "".concat(COMPONENT_NAME.value, "--").concat(handleTheme(), "-anchor"), "".concat(COMPONENT_NAME.value, "--").concat(props2.sequence), "".concat(COMPONENT_NAME.value, "--").concat(props2.separator, "-separator")];
    });
    return function () {
      return createVNode("div", {
        "class": baseClass.value
      }, [renderContent()]);
    };
  }
});

export { _Steps as default };
//# sourceMappingURL=steps.mjs.map
