/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import props from './check-tag-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { S as SPACE_REG, E as ENTER_REG } from '../_chunks/dep-30c631d1.js';
import _Tag from './tag.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import 'tdesign-icons-vue-next';
import 'tinycolor2';
import './props.js';
import '../_chunks/dep-3a7a2ef1.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _CheckTag = defineComponent({
  name: "TCheckTag",
  props: props,
  setup: function setup(props2) {
    var componentName = usePrefixClass("tag");
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var renderContent = useContent();
    var _toRefs = toRefs(props2),
      checked = _toRefs.checked,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(checked, modelValue, props2.defaultChecked, props2.onChange, "checked"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerChecked = _useVModel2[0],
      setInnerChecked = _useVModel2[1];
    var tagClass = computed(function () {
      return ["".concat(componentName.value), "".concat(componentName.value, "--check"), SIZE.value[props2.size], _defineProperty(_defineProperty({}, "".concat(componentName.value, "--checked"), innerChecked.value), "".concat(componentName.value, "--disabled"), props2.disabled)];
    });
    var checkTagProps = computed(function () {
      var checkedProps = _objectSpread({
        theme: "primary"
      }, props2.checkedProps);
      var uncheckedProps = _objectSpread({}, props2.uncheckedProps);
      return innerChecked.value ? checkedProps : uncheckedProps;
    });
    var handleClick = function handleClick(_ref2) {
      var e = _ref2.e;
      if (!props2.disabled) {
        var _props2$onClick;
        (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
          e: e
        });
        setInnerChecked(!innerChecked.value, {
          e: e,
          value: props2.value
        });
      }
    };
    var keyboardEventListener = function keyboardEventListener(e) {
      var _e$key;
      var code = e.code || ((_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
      var isCheckedCode = SPACE_REG.test(code) || ENTER_REG.test(code);
      if (isCheckedCode) {
        e.preventDefault();
        setInnerChecked(!innerChecked.value, {
          e: e,
          value: props2.value
        });
      }
    };
    var onCheckboxFocus = function onCheckboxFocus(e) {
      e.currentTarget.addEventListener("keydown", keyboardEventListener);
    };
    var onCheckboxBlur = function onCheckboxBlur(e) {
      e.currentTarget.removeEventListener("keydown", keyboardEventListener);
    };
    return function () {
      var tagContent = renderContent("default", "content");
      return createVNode(_Tag, mergeProps({
        "class": tagClass.value,
        "disabled": props2.disabled,
        "tabindex": props2.disabled ? void 0 : "0",
        "onFocus": onCheckboxFocus,
        "onBlur": onCheckboxBlur
      }, checkTagProps.value, {
        "onClick": handleClick
      }), _isSlot(tagContent) ? tagContent : {
        "default": function _default() {
          return [tagContent];
        }
      });
    };
  }
});

export { _CheckTag as default };
//# sourceMappingURL=check-tag.js.map
