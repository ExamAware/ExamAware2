/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, inject, watch, computed, createVNode } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isString } from 'lodash-es';
import props from './props.mjs';
import { d as useRipple, c as useCommonClassName, j as useVModel, e as useDisabled, n as useReadonly, u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import { CheckboxGroupInjectionKey } from './consts/index.mjs';
import { useCheckboxLazyLoad } from './hooks/useCheckboxLazyLoad.mjs';
import { useKeyboardEvent } from './hooks/useKeyboardEvent.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
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
//# sourceMappingURL=checkbox.mjs.map
