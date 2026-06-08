/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _typeof = require('@babel/runtime/helpers/typeof');
var checkbox_index = require('../../checkbox/index.js');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var intersection = require('../../_chunks/dep-a58d79da.js');
require('../../checkbox/checkbox.js');
require('../../checkbox/props.js');
require('../../_chunks/dep-47c460dd.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-d45110a6.js');
require('../../_chunks/dep-bc848944.js');
require('../../_chunks/dep-0b6215b5.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../checkbox/consts/index.js');
require('../../checkbox/hooks/useCheckboxLazyLoad.js');
require('../../_chunks/dep-fb83a452.js');
require('../../checkbox/hooks/useKeyboardEvent.js');
require('../../_chunks/dep-6280a7f6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../checkbox/group.js');
require('../../checkbox/checkbox-group-props.js');
require('../../_chunks/dep-3565d523.js');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-8b33876c.js');
require('../../_chunks/dep-445924d5.js');
require('../../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColumnCheckboxGroup = Vue.defineComponent({
  name: "ColumnCheckboxGroup",
  props: {
    checkboxProps: Object,
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    label: String,
    uniqueKey: String,
    value: Array,
    onChange: Function
  },
  setup: function setup(props) {
    var _toRefs = Vue.toRefs(props),
      checkboxProps = _toRefs.checkboxProps,
      value = _toRefs.value,
      options = _toRefs.options;
    var classPrefix = index.usePrefixClass();
    var allCheckedColumnKeys = Vue.computed(function () {
      var allCheckedKeys = [];
      options.value.forEach(function (option) {
        if (_typeof__default["default"](option) === "object") {
          if (option.disabled) return;
          if (option.value) {
            allCheckedKeys.push(option.value);
          } else if (typeof option.label === "string") {
            allCheckedKeys.push(option.label);
          }
        } else {
          allCheckedKeys.push(option);
        }
      });
      return allCheckedKeys;
    });
    var intersectionKeys = Vue.computed(function () {
      return intersection.intersection(allCheckedColumnKeys.value, value.value);
    });
    var isCheckedAll = Vue.computed(function () {
      var len = intersectionKeys.value.length;
      return Boolean(len && allCheckedColumnKeys.value.length === len);
    });
    var isIndeterminate = Vue.computed(function () {
      var len = intersectionKeys.value.length;
      return Boolean(len < allCheckedColumnKeys.value.length && len);
    });
    var onCheckAllColumnsChange = function onCheckAllColumnsChange(checkAll, ctx) {
      var changeParams = {
        e: ctx.e,
        type: "check",
        current: void 0,
        option: void 0
      };
      if (checkAll) {
        var _props$onChange;
        var newKeys = _toConsumableArray__default["default"](new Set(value.value.concat(allCheckedColumnKeys.value)));
        (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, newKeys, changeParams);
      } else {
        var _props$onChange2;
        var _newKeys = value.value.filter(function (val) {
          return !allCheckedColumnKeys.value.includes(val);
        });
        (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, _newKeys, _objectSpread(_objectSpread({}, changeParams), {}, {
          type: "uncheck"
        }));
      }
    };
    var handleCheckChange = function handleCheckChange(val, ctx) {
      var _props$onChange3;
      (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 || _props$onChange3.call(props, val, ctx);
    };
    var classes = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-table__column-controller-item"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-table__").concat(props.uniqueKey), props.uniqueKey)];
    });
    return function () {
      return Vue.createVNode("div", {
        "class": classes.value
      }, [Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-table__column-controller-block")
      }, [Vue.createVNode(checkbox_index.Checkbox, {
        "indeterminate": isIndeterminate.value,
        "checked": isCheckedAll.value,
        "onChange": onCheckAllColumnsChange,
        "disabled": !allCheckedColumnKeys.value.length
      }, {
        "default": function _default() {
          return [props.label];
        }
      })]), Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-table__column-controller-block")
      }, [Vue.createVNode(checkbox_index.CheckboxGroup, Vue.mergeProps({
        "options": options.value
      }, checkboxProps.value, {
        "modelValue": value.value,
        "onChange": handleCheckChange
      }), null)])]);
    };
  }
});

exports["default"] = ColumnCheckboxGroup;
//# sourceMappingURL=column-checkbox-group.js.map
