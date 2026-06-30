/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-e8ff2c13.js');
var loading_index = require('../loading/index.js');
var switch_props = require('./props.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
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
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Switch = Vue.defineComponent({
  name: "TSwitch",
  props: switch_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var disabled = index.useDisabled();
    var COMPONENT_NAME = index$1.usePrefixClass("switch");
    var _useCommonClassName = index$2.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$3.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setSwitchVal = _useVModel2[1];
    var activeValue = Vue.computed(function () {
      if (props2.customValue && props2.customValue.length > 0) {
        return props2.customValue[0];
      }
      return true;
    });
    var inactiveValue = Vue.computed(function () {
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
    var classes = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value), SIZE.value[props2.size], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, disabled.value), STATUS.value.loading, props2.loading), STATUS.value.checked, innerValue.value === activeValue.value || props2.modelValue === activeValue.value)];
    });
    var nodeClasses = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__handle"), _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, disabled.value), STATUS.value.loading, props2.loading)];
    });
    var contentClasses = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__content"), SIZE.value[props2.size], _defineProperty__default["default"]({}, STATUS.value.disabled, disabled.value)];
    });
    Vue.watch(innerValue, function (val) {
      if (props2.customValue && props2.customValue.length && !props2.customValue.includes(val)) {
        throw new Error("value is ".concat(val, " not in ").concat(JSON.stringify(props2.customValue)));
      }
    }, {
      immediate: true
    });
    var content = Vue.computed(function () {
      if (isFunction.isFunction(props2.label)) {
        return props2.label(Vue.h, {
          value: innerValue.value
        });
      }
      if (isString.isString(props2.label)) {
        return props2.label;
      }
      if (isArray.isArray(props2.label) && props2.label.length) {
        var label = innerValue.value === activeValue.value ? props2.label[0] : props2.label[1];
        if (!label) return;
        if (isString.isString(label)) {
          return label;
        }
        if (isFunction.isFunction(label)) {
          return label(Vue.h);
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
        loadingContent = Vue.createVNode(loading_index.Loading, {
          "size": "small"
        }, null);
      } else if (content.value) {
        switchContent = content.value;
      }
      return Vue.createVNode("div", {
        "class": classes.value,
        "onClick": toggle
      }, [Vue.createVNode("span", {
        "class": nodeClasses.value
      }, [loadingContent]), Vue.createVNode("div", {
        "class": contentClasses.value
      }, [switchContent])]);
    };
  }
});

exports["default"] = _Switch;
//# sourceMappingURL=switch.js.map
