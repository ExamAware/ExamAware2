/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, inject, watch, computed, createVNode } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isString } from 'lodash-es';
import props from './props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { CheckboxGroupInjectionKey } from './consts/index.js';
import { useCheckboxLazyLoad } from './hooks/useCheckboxLazyLoad.js';
import { useKeyboardEvent } from './hooks/useKeyboardEvent.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-6264b0a7.js';
import '../_chunks/dep-30c631d1.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Checkbox = defineComponent({
  name: "TCheckbox",
  props: _objectSpread(_objectSpread({}, props), {}, {
    needRipple: Boolean,
    stopLabelTrigger: Boolean,
    index: Number,
    data: Object
  }),
  setup: function setup(props2) {
    var labelRef = ref();
    if (props2.needRipple) {
      useRipple(labelRef);
    }
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue,
      lazyLoad = _toRefs.lazyLoad;
    var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var checkboxGroupData = inject(CheckboxGroupInjectionKey, void 0);
    var tName = ref();
    watch(function () {
      return [props2.name, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name].join("_");
    }, function () {
      var name = props2.name || (checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.name);
      if (name) {
        tName.value = name;
      }
    }, {
      immediate: true
    });
    var tChecked = ref(false);
    var getChecked = function getChecked() {
      var value = props2.value,
        checkAll = props2.checkAll;
      if (checkAll) return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll;
      return checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value ? checkboxGroupData.value.checkedValues.includes(value) : innerChecked.value;
    };
    watch(function () {
      var _checkboxGroupData$va;
      return [innerChecked.value, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.isCheckAll, checkboxGroupData === null || checkboxGroupData === void 0 || (_checkboxGroupData$va = checkboxGroupData.value.checkedValues) === null || _checkboxGroupData$va === void 0 ? void 0 : _checkboxGroupData$va.join(",")];
    }, function () {
      tChecked.value = getChecked();
    }, {
      immediate: true
    });
    var beforeDisabled = computed(function () {
      if (!props2.checkAll && !tChecked.value && checkboxGroupData !== null && checkboxGroupData !== void 0 && checkboxGroupData.value.maxExceeded) {
        return true;
      }
      return null;
    });
    var afterDisabled = computed(function () {
      return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.disabled;
    });
    var isDisabled = useDisabled({
      beforeDisabled: beforeDisabled,
      afterDisabled: afterDisabled
    });
    var afterReadonly = computed(function () {
      return checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.readonly;
    });
    var isReadonly = useReadonly({
      afterReadonly: afterReadonly
    });
    var tIndeterminate = ref(false);
    watch(function () {
      return [props2.checkAll, props2.indeterminate, checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate];
    }, function () {
      tIndeterminate.value = props2.checkAll ? checkboxGroupData === null || checkboxGroupData === void 0 ? void 0 : checkboxGroupData.value.indeterminate : props2.indeterminate;
    }, {
      immediate: true
    });
    var COMPONENT_NAME = usePrefixClass("checkbox");
    var labelClasses = ref({});
    watch([tChecked, isDisabled, tIndeterminate], function () {
      labelClasses.value = ["".concat(COMPONENT_NAME.value), _defineProperty(_defineProperty(_defineProperty({}, STATUS.value.checked, tChecked.value), STATUS.value.disabled, isDisabled.value), STATUS.value.indeterminate, tIndeterminate.value)];
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
    var renderContent = useContent();
    var handleLabelClick = function handleLabelClick(e) {
      if (props2.stopLabelTrigger) e.preventDefault();
    };
    var _useCheckboxLazyLoad = useCheckboxLazyLoad(labelRef, lazyLoad),
      showCheckbox = _useCheckboxLazyLoad.showCheckbox;
    var _useKeyboardEvent = useKeyboardEvent(handleChange),
      onCheckboxFocus = _useKeyboardEvent.onCheckboxFocus,
      onCheckboxBlur = _useKeyboardEvent.onCheckboxBlur;
    return function () {
      var titleAttr = isString(props2.title) && props2.title ? props2.title : null;
      return createVNode("label", {
        "ref": labelRef,
        "class": labelClasses.value,
        "tabindex": isDisabled.value ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur,
        "onClick": handleLabelClick,
        "title": titleAttr
      }, [!showCheckbox.value ? null : [createVNode("input", {
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
      }, null), createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__input"),
        "key": "input-span",
        "onClick": props2.stopLabelTrigger && handleChange
      }, null), createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__label"),
        "key": "label"
      }, [renderContent("default", "label")])]]);
    };
  }
});

export { _Checkbox as default };
//# sourceMappingURL=checkbox.js.map
