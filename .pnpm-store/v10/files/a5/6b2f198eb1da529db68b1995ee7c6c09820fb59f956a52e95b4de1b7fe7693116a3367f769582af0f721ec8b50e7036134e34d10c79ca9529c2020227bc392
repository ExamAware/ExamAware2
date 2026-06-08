/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var checkbox_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$6 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index$5 = require('../_chunks/dep-ecaaae91.js');
var index$3 = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$4 = require('../_chunks/dep-bc848944.js');
var index = require('../_chunks/dep-0b6215b5.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
var checkbox_consts_index = require('./consts/index.js');
var checkbox_hooks_useCheckboxLazyLoad = require('./hooks/useCheckboxLazyLoad.js');
var checkbox_hooks_useKeyboardEvent = require('./hooks/useKeyboardEvent.js');
var isString = require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
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
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-fb83a452.js');
require('../_chunks/dep-6280a7f6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Checkbox = Vue.defineComponent({
  name: "TCheckbox",
  props: _objectSpread(_objectSpread({}, checkbox_props["default"]), {}, {
    needRipple: Boolean,
    stopLabelTrigger: Boolean,
    index: Number,
    data: Object
  }),
  setup: function setup(props2) {
    var labelRef = Vue.ref();
    if (props2.needRipple) {
      index.useRipple(labelRef);
    }
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = Vue.toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue,
      lazyLoad = _toRefs.lazyLoad;
    var _useVModel = index$2.useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var checkboxGroupData = Vue.inject(checkbox_consts_index.CheckboxGroupInjectionKey, void 0);
    var tName = Vue.ref();
    Vue.watch(function () {
      return [props2.name, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name].join("_");
    }, function () {
      var name = props2.name || (checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name);
      if (name) {
        tName.value = name;
      }
    }, {
      immediate: true
    });
    var tChecked = Vue.ref(false);
    var getChecked = function getChecked() {
      var value = props2.value,
        checkAll = props2.checkAll;
      if (checkAll) return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll;
      return checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value ? checkboxGroupData.value.checkedValues.includes(value) : innerChecked.value;
    };
    Vue.watch(function () {
      var _checkboxGroupData$va;
      return [innerChecked.value, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll, checkboxGroupData === null || checkboxGroupData === void 0 || (_checkboxGroupData$va = checkboxGroupData.value.checkedValues) === null || _checkboxGroupData$va === void 0 ? void 0 : _checkboxGroupData$va.join(",")];
    }, function () {
      tChecked.value = getChecked();
    }, {
      immediate: true
    });
    var beforeDisabled = Vue.computed(function () {
      if (!props2.checkAll && !tChecked.value && checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.maxExceeded) {
        return true;
      }
      return null;
    });
    var afterDisabled = Vue.computed(function () {
      return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.disabled;
    });
    var isDisabled = index$3.useDisabled({
      beforeDisabled: beforeDisabled,
      afterDisabled: afterDisabled
    });
    var afterReadonly = Vue.computed(function () {
      return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.readonly;
    });
    var isReadonly = index$4.useReadonly({
      afterReadonly: afterReadonly
    });
    var tIndeterminate = Vue.ref(false);
    Vue.watch(function () {
      return [props2.checkAll, props2.indeterminate, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate];
    }, function () {
      tIndeterminate.value = props2.checkAll ? checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate : props2.indeterminate;
    }, {
      immediate: true
    });
    var COMPONENT_NAME = index$5.usePrefixClass("checkbox");
    var labelClasses = Vue.ref({});
    Vue.watch([tChecked, isDisabled, tIndeterminate], function () {
      labelClasses.value = ["".concat(COMPONENT_NAME.value), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.checked, tChecked.value), STATUS.value.disabled, isDisabled.value), STATUS.value.indeterminate, tIndeterminate.value)];
    }, {
      immediate: true
    });
    var handleChange = function handleChange(e) {
      if (isReadonly.value) return;
      var checked2 = !tChecked.value;
      setInnerChecked(checked2, {
        e: e
      });
      if (checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.handleCheckboxChange) {
        checkboxGroupData.value.onCheckedChange({
          checked: checked2,
          checkAll: props2.checkAll,
          e: e,
          option: props2
        });
      }
    };
    var renderContent = index$6.useContent();
    var handleLabelClick = function handleLabelClick(e) {
      if (props2.stopLabelTrigger) e.preventDefault();
    };
    var _useCheckboxLazyLoad = checkbox_hooks_useCheckboxLazyLoad.useCheckboxLazyLoad(labelRef, lazyLoad),
      showCheckbox = _useCheckboxLazyLoad.showCheckbox;
    var _useKeyboardEvent = checkbox_hooks_useKeyboardEvent.useKeyboardEvent(handleChange),
      onCheckboxFocus = _useKeyboardEvent.onCheckboxFocus,
      onCheckboxBlur = _useKeyboardEvent.onCheckboxBlur;
    return function () {
      var titleAttr = isString.isString(props2.title) && props2.title ? props2.title : null;
      return Vue.createVNode("label", {
        "ref": labelRef,
        "class": labelClasses.value,
        "tabindex": isDisabled.value ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur,
        "onClick": handleLabelClick,
        "title": titleAttr
      }, [!showCheckbox.value ? null : [Vue.createVNode("input", {
        "type": "checkbox",
        "tabindex": "-1",
        "class": "".concat(COMPONENT_NAME.value, "__former"),
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "indeterminate": tIndeterminate.value,
        "name": tName.value,
        "value": props2.value ? props2.value : void 0,
        "checked": tChecked.value,
        "onChange": handleChange,
        "onClick": function onClick(e) {
          return e.stopPropagation();
        },
        "key": "input"
      }, null), Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__input"),
        "key": "input-span",
        "onClick": props2.stopLabelTrigger && handleChange
      }, null), Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__label"),
        "key": "label"
      }, [renderContent("default", "label")])]]);
    };
  }
});

exports["default"] = _Checkbox;
//# sourceMappingURL=checkbox.js.map
