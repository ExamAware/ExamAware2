/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import props from './check-tag-props.mjs';
import { u as usePrefixClass, c as useCommonClassName, b as useContent, j as useVModel } from '../_chunks/dep-7673347f.mjs';
import _Tag from './tag.mjs';
import { S as SPACE_REG, E as ENTER_REG } from '../_chunks/dep-d36c4a3f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
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
import 'tdesign-icons-vue-next';
import '../_chunks/dep-b31d8258.mjs';
import './props.mjs';

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
//# sourceMappingURL=check-tag.mjs.map
