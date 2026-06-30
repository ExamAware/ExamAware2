/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var steps_props = require('./props.js');
var steps_stepItemProps = require('./step-item-props.js');
var steps_stepItem = require('./step-item.js');
var index$2 = require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
var isObject = require('../_chunks/dep-0813861e.js');
require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-31c76dc6.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Steps = Vue.defineComponent({
  name: "TSteps",
  props: steps_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("steps");
    var _toRefs = Vue.toRefs(props2),
      current = _toRefs.current,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$1.useVModel(current, modelValue, props2.defaultCurrent, props2.onChange, "current"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerCurrent = _useVModel2[0],
      setInnerCurrent = _useVModel2[1];
    Vue.provide("StepsState", Vue.reactive({
      current: innerCurrent,
      setCurrent: setInnerCurrent
    }));
    Vue.provide("StepsProps", props2);
    var indexMap = Vue.ref({});
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
    var getChildComponentByName = index$2.useChildComponentSlots();
    var getOptionListBySlots = function getOptionListBySlots(nodes) {
      var arr = [];
      nodes === null || nodes === void 0 || nodes.forEach(function (node) {
        var option = (node === null || node === void 0 ? void 0 : node.props) || {};
        var children = node === null || node === void 0 ? void 0 : node.children;
        if (!option && !children) return;
        if (children && isObject.isObject(children)) {
          for (var key in children) {
            if (key in steps_stepItemProps["default"] && !option[key]) {
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
        return Vue.createVNode(steps_stepItem["default"], Vue.mergeProps(item, {
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
    var baseClass = Vue.computed(function () {
      return [COMPONENT_NAME.value, "".concat(COMPONENT_NAME.value, "--").concat(props2.layout), "".concat(COMPONENT_NAME.value, "--").concat(handleTheme(), "-anchor"), "".concat(COMPONENT_NAME.value, "--").concat(props2.sequence), "".concat(COMPONENT_NAME.value, "--").concat(props2.separator, "-separator")];
    });
    return function () {
      return Vue.createVNode("div", {
        "class": baseClass.value
      }, [renderContent()]);
    };
  }
});

exports["default"] = _Steps;
//# sourceMappingURL=steps.js.map
