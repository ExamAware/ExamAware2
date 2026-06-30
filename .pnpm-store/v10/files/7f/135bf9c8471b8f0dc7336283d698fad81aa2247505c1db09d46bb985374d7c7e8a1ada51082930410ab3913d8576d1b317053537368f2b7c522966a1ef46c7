/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var checkbox_checkbox = require('./checkbox.js');
var checkbox_checkboxGroupProps = require('./checkbox-group-props.js');
var checkbox_consts_index = require('./consts/index.js');
var index$3 = require('../_chunks/dep-3565d523.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
var intersection = require('../_chunks/dep-a58d79da.js');
var isUndefined = require('../_chunks/dep-fd5a369e.js');
var isObject = require('../_chunks/dep-0813861e.js');
require('./props.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-bc848944.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-c3dee00a.js');
require('./hooks/useCheckboxLazyLoad.js');
require('../_chunks/dep-fb83a452.js');
require('./hooks/useKeyboardEvent.js');
require('../_chunks/dep-6280a7f6.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-445924d5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Group = Vue.defineComponent({
  name: "TCheckboxGroup",
  props: checkbox_checkboxGroupProps["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("checkbox-group");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var isArray = Array.isArray;
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$2.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var optionList = Vue.ref([]);
    var intersectionLen = Vue.computed(function () {
      if (!isArray(innerValue.value)) return 0;
      var values = optionList.value.map(function (item) {
        return item.value;
      });
      var n = intersection.intersection(innerValue.value, values);
      return n.length;
    });
    var isCheckAll = Vue.computed(function () {
      var optionItems = optionList.value.filter(function (item) {
        return !item.disabled && !item.readonly && !item.checkAll;
      }).map(function (t) {
        return t.value;
      });
      var intersectionValues = intersection.intersection(optionItems, innerValue.value);
      return intersectionValues.length === optionItems.length;
    });
    var indeterminate = Vue.computed(function () {
      return !isCheckAll.value && intersectionLen.value < optionList.value.length && intersectionLen.value !== 0;
    });
    var maxExceeded = Vue.computed(function () {
      return !isUndefined.isUndefined(props2.max) && innerValue.value.length === props2.max;
    });
    Vue.watchEffect(function () {
      if (!props2.options) return [];
      optionList.value = props2.options.map(function (item) {
        return isObject.isObject(item) ? item : {
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
        checkAllVal: _toConsumableArray__default["default"](checkAllVal),
        uncheckAllVal: _toConsumableArray__default["default"](uncheckAllVal)
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
        console.warn("TDesign CheckboxGroup Warn: `value` must be an array, instead of ".concat(_typeof__default["default"](innerValue.value)));
        return;
      }
      var val = _toConsumableArray__default["default"](innerValue.value);
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
    var getChildComponentSlots = index$3.useChildComponentSlots();
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
    Vue.provide(checkbox_consts_index.CheckboxGroupInjectionKey, Vue.computed(function () {
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
          return Vue.createVNode(checkbox_checkbox["default"], Vue.mergeProps({
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
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value,
        "role": "group",
        "aria-label": "checkbox-group"
      }, [children]);
    };
  }
});

exports["default"] = _Group;
//# sourceMappingURL=group.js.map
