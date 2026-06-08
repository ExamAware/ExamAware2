/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, inject, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { j as useVModel, e as useDisabled, n as useReadonly, c as useCommonClassName, u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import { omit, isString } from 'lodash-es';
import props from './props.mjs';
import { RadioGroupInjectionKey, RadioButtonInjectionKey } from './consts/index.mjs';
import { a as getValidAttrs } from '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
import '../_chunks/dep-0dcc778a.mjs';

var _Radio = defineComponent({
  name: "TRadio",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var inputRef = ref();
    var _toRefs = toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var radioChecked = computed(function () {
      return radioGroup ? props2.value === radioGroup.value : innerChecked.value;
    });
    var radioGroup = inject(RadioGroupInjectionKey, void 0);
    var allowUncheck = computed(function () {
      return Boolean(props2.allowUncheck || (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowUncheck));
    });
    var handleClick = function handleClick(e) {
      e.stopPropagation();
    };
    var onLabelClick = function onLabelClick(e) {
      var _props2$onClick;
      if (isDisabled.value || isReadonly.value) return;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
        e: e
      });
      if (radioChecked.value && !allowUncheck.value) return;
      if (radioGroup) {
        var value = radioChecked.value && allowUncheck.value ? void 0 : props2.value;
        radioGroup.setValue(value, {
          e: e,
          name: radioGroup.name
        });
      } else {
        var _value = allowUncheck.value ? !radioChecked.value : true;
        setInnerChecked(_value, {
          e: e
        });
      }
    };
    var inputEvents = computed(function () {
      return getValidAttrs({
        focus: attrs.onFocus,
        blur: attrs.onBlur,
        keydown: attrs.onKeydown,
        keyup: attrs.onKeyup,
        keypresss: attrs.onKeypresss
      });
    });
    var wrapperAttrs = computed(function () {
      var events = [].concat(_toConsumableArray(Object.keys(inputEvents.value)), ["input", "change"]).map(function (str) {
        return "on".concat(str[0].toUpperCase()).concat(str.slice(1));
      });
      return omit(attrs, events);
    });
    var groupDisabled = computed(function () {
      return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.disabled;
    });
    var groupReadonly = computed(function () {
      return radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.readonly;
    });
    var isDisabled = useDisabled({
      afterDisabled: groupDisabled
    });
    var isReadonly = useReadonly({
      afterReadonly: groupReadonly
    });
    var inputProps = computed(function () {
      return {
        name: radioGroup ? radioGroup.name : props2.name,
        checked: radioChecked.value,
        disabled: isDisabled.value,
        readonly: isReadonly.value,
        value: props2.value
      };
    });
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var radioButton = inject(RadioButtonInjectionKey, void 0);
    var radioBtnName = usePrefixClass("radio-button");
    var COMPONENT_NAME = usePrefixClass("radio");
    var prefixCls = computed(function () {
      return radioButton ? radioBtnName.value : COMPONENT_NAME.value;
    });
    var inputClass = computed(function () {
      return ["".concat(prefixCls.value), _defineProperty(_defineProperty({}, STATUS.value.checked, inputProps.value.checked), STATUS.value.disabled, inputProps.value.disabled)];
    });
    var renderContent = useContent();
    return function () {
      return createVNode("label", mergeProps({
        "ref": inputRef,
        "class": inputClass.value
      }, wrapperAttrs.value, {
        "tabindex": isDisabled.value ? void 0 : "0",
        "onClick": onLabelClick
      }), [createVNode("input", mergeProps({
        "type": "radio",
        "class": "".concat(prefixCls.value, "__former")
      }, inputEvents.value, inputProps.value, {
        "onClick": handleClick,
        "tabindex": "-1",
        "data-value": isString(props2.value) ? "'".concat(props2.value, "'") : props2.value,
        "data-allow-uncheck": allowUncheck.value || void 0
      }), null), createVNode("span", {
        "class": "".concat(prefixCls.value, "__input")
      }, null), createVNode("span", {
        "class": "".concat(prefixCls.value, "__label")
      }, [renderContent("default", "label")])]);
    };
  }
});

export { _Radio as default };
//# sourceMappingURL=radio.mjs.map
