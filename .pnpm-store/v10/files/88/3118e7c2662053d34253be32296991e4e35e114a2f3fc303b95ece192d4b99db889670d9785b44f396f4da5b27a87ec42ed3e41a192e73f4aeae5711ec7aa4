/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, createVNode, mergeProps, Fragment } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { CloseCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Input } from '../input/index.mjs';
import props from './props.mjs';
import { c as useCommonClassName, u as usePrefixClass, i as useGlobalIcon, a as useTNodeJSX, e as useDisabled, n as useReadonly, j as useVModel, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import { isArray } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../input/input.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import './style/css.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function calcArrayValue(value) {
  if (isArray(value)) {
    return value;
  }
  return [value, value];
}
var _RangeInput = defineComponent({
  name: "TRangeInput",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var classPrefix = usePrefixClass();
    var COMPONENT_NAME = usePrefixClass("range-input");
    var _useGlobalIcon = useGlobalIcon({
        CloseCircleFilledIcon: CloseCircleFilledIcon
      }),
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var renderTNodeJSX = useTNodeJSX();
    var isDisabled = useDisabled();
    var isReadonly = useReadonly();
    var focused = ref(false);
    var isHover = ref(false);
    var format = computed(function () {
      return calcArrayValue(props2.format);
    });
    var inputProps = computed(function () {
      return calcArrayValue(props2.inputProps);
    });
    var placeholder = computed(function () {
      return calcArrayValue(props2.placeholder);
    });
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var inputValue = computed(function () {
      var _ref2, _innerValue$value, _innerValue$value2;
      return String((_ref2 = ((_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value[0]) || ((_innerValue$value2 = innerValue.value) === null || _innerValue$value2 === void 0 ? void 0 : _innerValue$value2[1])) !== null && _ref2 !== void 0 ? _ref2 : "");
    });
    var isShowClearIcon = computed(function () {
      var _inputValue$value;
      return (props2.clearable && ((_inputValue$value = inputValue.value) === null || _inputValue$value === void 0 ? void 0 : _inputValue$value.length) && !isDisabled.value || props2.showClearIconOnEmpty) && isHover.value;
    });
    var inputRefs = {
      firstInputRef: ref(),
      secondInputRef: ref()
    };
    function handleClear(context) {
      var _props2$onClear;
      (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 || _props2$onClear.call(props2, context);
      setInnerValue(["", ""], _objectSpread(_objectSpread({}, context), {}, {
        trigger: "clear",
        position: "all"
      }));
    }
    function handleEnter(rangeValue, context) {
      var _props2$onEnter;
      (_props2$onEnter = props2.onEnter) === null || _props2$onEnter === void 0 || _props2$onEnter.call(props2, rangeValue, context);
    }
    function handleFocus(rangeValue, context) {
      var _props2$onFocus;
      focused.value = true;
      (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, rangeValue, context);
    }
    function handleBlur(rangeValue, context) {
      var _props2$onBlur;
      focused.value = false;
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, rangeValue, context);
    }
    function handleMouseEnter(e) {
      var _props2$onMouseenter;
      isHover.value = true;
      props2 === null || props2 === void 0 || (_props2$onMouseenter = props2.onMouseenter) === null || _props2$onMouseenter === void 0 || _props2$onMouseenter.call(props2, {
        e: e
      });
    }
    function handleMouseLeave(e) {
      var _props2$onMouseleave;
      isHover.value = false;
      props2 === null || props2 === void 0 || (_props2$onMouseleave = props2.onMouseleave) === null || _props2$onMouseleave === void 0 || _props2$onMouseleave.call(props2, {
        e: e
      });
    }
    expose({
      firstInputElement: inputRefs.firstInputRef.value,
      secondInputElement: inputRefs.secondInputRef.value,
      focus: function focus(options) {
        var _inputRefs$value;
        var _ref3 = options || {},
          _ref3$position = _ref3.position,
          position = _ref3$position === void 0 ? "first" : _ref3$position;
        (_inputRefs$value = inputRefs["".concat(position, "InputRef")].value) === null || _inputRefs$value === void 0 || _inputRefs$value.focus();
      },
      blur: function blur(options) {
        var _inputRefs$value2;
        var _ref4 = options || {},
          _ref4$position = _ref4.position,
          position = _ref4$position === void 0 ? "first" : _ref4$position;
        (_inputRefs$value2 = inputRefs["".concat(position, "InputRef")].value) === null || _inputRefs$value2 === void 0 || _inputRefs$value2.blur();
      },
      select: function select(options) {
        var _inputRefs$value3;
        var _ref5 = options || {},
          _ref5$position = _ref5.position,
          position = _ref5$position === void 0 ? "first" : _ref5$position;
        (_inputRefs$value3 = inputRefs["".concat(position, "InputRef")].value) === null || _inputRefs$value3 === void 0 || _inputRefs$value3.select();
      }
    });
    return function () {
      var _innerValue$value1, _innerValue$value10;
      var labelContent = renderTNodeJSX("label");
      var prefixIconContent = renderTNodeJSX("prefixIcon");
      var suffixContent = renderTNodeJSX("suffix");
      var suffixIconContent = renderTNodeJSX("suffixIcon");
      var tips = renderTNodeJSX("tips");
      var separator = renderTNodeJSX("separator");
      var firstInputEvents = useEventForward(inputProps.value[0], {
        onClick: function onClick(_ref6) {
          var _props2$onClick;
          var e = _ref6.e;
          (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
            e: e,
            position: "first"
          });
        },
        onClear: function onClear() {
          return setInnerValue([], {
            position: "first",
            trigger: "input"
          });
        },
        onEnter: function onEnter(val, _ref7) {
          var _innerValue$value3;
          var e = _ref7.e;
          handleEnter([val, (_innerValue$value3 = innerValue.value) === null || _innerValue$value3 === void 0 ? void 0 : _innerValue$value3[1]], {
            e: e,
            position: "first"
          });
        },
        onFocus: function onFocus(val, _ref8) {
          var _innerValue$value4;
          var e = _ref8.e;
          handleFocus([val, (_innerValue$value4 = innerValue.value) === null || _innerValue$value4 === void 0 ? void 0 : _innerValue$value4[1]], {
            e: e,
            position: "first"
          });
        },
        onBlur: function onBlur(val, _ref9) {
          var _innerValue$value5;
          var e = _ref9.e;
          handleBlur([val, (_innerValue$value5 = innerValue.value) === null || _innerValue$value5 === void 0 ? void 0 : _innerValue$value5[1]], {
            e: e,
            position: "first"
          });
        },
        onChange: function onChange(val, _ref0) {
          var _innerValue$value6;
          var e = _ref0.e;
          setInnerValue([val, (_innerValue$value6 = innerValue.value) === null || _innerValue$value6 === void 0 ? void 0 : _innerValue$value6[1]], {
            e: e,
            position: "first",
            trigger: "input"
          });
        }
      });
      var secondInputEvents = useEventForward(inputProps.value[1], {
        onClick: function onClick(_ref1) {
          var _props2$onClick2;
          var e = _ref1.e;
          (_props2$onClick2 = props2.onClick) === null || _props2$onClick2 === void 0 || _props2$onClick2.call(props2, {
            e: e,
            position: "second"
          });
        },
        onClear: function onClear() {
          setInnerValue([], {
            position: "second",
            trigger: "input"
          });
        },
        onEnter: function onEnter(val, _ref10) {
          var _innerValue$value7;
          var e = _ref10.e;
          handleEnter([(_innerValue$value7 = innerValue.value) === null || _innerValue$value7 === void 0 ? void 0 : _innerValue$value7[0], val], {
            e: e,
            position: "second"
          });
        },
        onFocus: function onFocus(val, _ref11) {
          var _innerValue$value8;
          var e = _ref11.e;
          handleFocus([(_innerValue$value8 = innerValue.value) === null || _innerValue$value8 === void 0 ? void 0 : _innerValue$value8[0], val], {
            e: e,
            position: "second"
          });
        },
        onBlur: function onBlur(val, _ref12) {
          var _innerValue$value9;
          var e = _ref12.e;
          handleBlur([(_innerValue$value9 = innerValue.value) === null || _innerValue$value9 === void 0 ? void 0 : _innerValue$value9[0], val], {
            e: e,
            position: "second"
          });
        },
        onChange: function onChange(val, _ref13) {
          var _innerValue$value0;
          var e = _ref13.e;
          setInnerValue([(_innerValue$value0 = innerValue.value) === null || _innerValue$value0 === void 0 ? void 0 : _innerValue$value0[0], val], {
            e: e,
            position: "second",
            trigger: "input"
          });
        }
      });
      var RangeInputContent = createVNode("div", mergeProps(attrs, {
        "class": [COMPONENT_NAME.value, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), STATUS.value.focused, focused.value), STATUS.value.success, props2.status === "success"), STATUS.value.warning, props2.status === "warning"), STATUS.value.error, props2.status === "error"), "".concat(COMPONENT_NAME.value, "--prefix"), prefixIconContent || labelContent), "".concat(COMPONENT_NAME.value, "--suffix"), suffixContent || suffixIconContent), "".concat(COMPONENT_NAME.value, "--borderless"), props2.borderless)],
        "onMouseenter": handleMouseEnter,
        "onMouseleave": handleMouseLeave
      }), [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [prefixIconContent && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [prefixIconContent]), labelContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [labelContent]) : null, createVNode(Input, mergeProps({
        "ref": inputRefs.firstInputRef,
        "class": "".concat(COMPONENT_NAME.value, "__inner-left"),
        "inputClass": _defineProperty({}, "".concat(classPrefix.value, "-is-focused"), props2.activeIndex === 0),
        "placeholder": placeholder.value[0],
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "format": format.value[0],
        "value": (_innerValue$value1 = innerValue.value) === null || _innerValue$value1 === void 0 ? void 0 : _innerValue$value1[0]
      }, firstInputEvents.value), null), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner-separator")
      }, [separator]), createVNode(Input, mergeProps({
        "ref": inputRefs.secondInputRef,
        "class": "".concat(COMPONENT_NAME.value, "__inner-right"),
        "inputClass": _defineProperty({}, "".concat(classPrefix.value, "-is-focused"), props2.activeIndex === 1),
        "placeholder": placeholder.value[1],
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "format": format.value[1],
        "value": (_innerValue$value10 = innerValue.value) === null || _innerValue$value10 === void 0 ? void 0 : _innerValue$value10[1]
      }, secondInputEvents.value), null), suffixContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [suffixContent]) : null, (suffixIconContent || isShowClearIcon.value) && createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix ").concat(COMPONENT_NAME.value, "__suffix-icon")
      }, [isShowClearIcon.value ? createVNode(CloseCircleFilledIcon$1, {
        "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
        "onClick": handleClear
      }, null) : suffixIconContent])])]);
      var tipsClasses = ["".concat(COMPONENT_NAME.value, "__tips"), "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(props2.status)];
      return createVNode(Fragment, null, [RangeInputContent, tips && createVNode("div", {
        "class": tipsClasses
      }, [tips])]);
    };
  }
});

export { _RangeInput as default };
//# sourceMappingURL=range-input.mjs.map
