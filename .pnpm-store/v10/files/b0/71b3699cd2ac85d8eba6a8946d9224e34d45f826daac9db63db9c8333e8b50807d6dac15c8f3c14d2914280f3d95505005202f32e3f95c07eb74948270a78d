/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, inject, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { omit, isString } from 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import props from './props.js';
import { RadioGroupInjectionKey, RadioButtonInjectionKey } from './consts/index.js';
import { a as getValidAttrs } from '../_chunks/dep-80a99546.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/objectWithoutProperties';

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
//# sourceMappingURL=radio.js.map
