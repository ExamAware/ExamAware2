/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var input_index = require('../input/index.js');
var rangeInput_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$3 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-8382953f.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index$4 = require('../_chunks/dep-874d2900.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-cc66acf1.js');
var index$5 = require('../_chunks/dep-bc848944.js');
var index$6 = require('../_chunks/dep-e8ff2c13.js');
var index$7 = require('../_chunks/dep-bf113ca4.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../input/props.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
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
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
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
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function calcArrayValue(value) {
  if (isArray.isArray(value)) {
    return value;
  }
  return [value, value];
}
var _RangeInput = Vue.defineComponent({
  name: "TRangeInput",
  inheritAttrs: false,
  props: rangeInput_props["default"],
  setup: function setup(props2, _ref) {
    var expose = _ref.expose,
      attrs = _ref.attrs;
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useCommonClassName = index.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var classPrefix = index$1.usePrefixClass();
    var COMPONENT_NAME = index$1.usePrefixClass("range-input");
    var _useGlobalIcon = index$2.useGlobalIcon({
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon
      }),
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon;
    var renderTNodeJSX = index$3.useTNodeJSX();
    var isDisabled = index$4.useDisabled();
    var isReadonly = index$5.useReadonly();
    var focused = Vue.ref(false);
    var isHover = Vue.ref(false);
    var format = Vue.computed(function () {
      return calcArrayValue(props2.format);
    });
    var inputProps = Vue.computed(function () {
      return calcArrayValue(props2.inputProps);
    });
    var placeholder = Vue.computed(function () {
      return calcArrayValue(props2.placeholder);
    });
    var _useVModel = index$6.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var inputValue = Vue.computed(function () {
      var _ref2, _innerValue$value, _innerValue$value2;
      return String((_ref2 = ((_innerValue$value = innerValue.value) === null || _innerValue$value === void 0 ? void 0 : _innerValue$value[0]) || ((_innerValue$value2 = innerValue.value) === null || _innerValue$value2 === void 0 ? void 0 : _innerValue$value2[1])) !== null && _ref2 !== void 0 ? _ref2 : "");
    });
    var isShowClearIcon = Vue.computed(function () {
      var _inputValue$value;
      return (props2.clearable && ((_inputValue$value = inputValue.value) === null || _inputValue$value === void 0 ? void 0 : _inputValue$value.length) && !isDisabled.value || props2.showClearIconOnEmpty) && isHover.value;
    });
    var inputRefs = {
      firstInputRef: Vue.ref(),
      secondInputRef: Vue.ref()
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
      var firstInputEvents = index$7.useEventForward(inputProps.value[0], {
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
      var secondInputEvents = index$7.useEventForward(inputProps.value[1], {
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
      var RangeInputContent = Vue.createVNode("div", Vue.mergeProps(attrs, {
        "class": [COMPONENT_NAME.value, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, isDisabled.value), STATUS.value.focused, focused.value), STATUS.value.success, props2.status === "success"), STATUS.value.warning, props2.status === "warning"), STATUS.value.error, props2.status === "error"), "".concat(COMPONENT_NAME.value, "--prefix"), prefixIconContent || labelContent), "".concat(COMPONENT_NAME.value, "--suffix"), suffixContent || suffixIconContent), "".concat(COMPONENT_NAME.value, "--borderless"), props2.borderless)],
        "onMouseenter": handleMouseEnter,
        "onMouseleave": handleMouseLeave
      }), [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [prefixIconContent && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [prefixIconContent]), labelContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [labelContent]) : null, Vue.createVNode(input_index.Input, Vue.mergeProps({
        "ref": inputRefs.firstInputRef,
        "class": "".concat(COMPONENT_NAME.value, "__inner-left"),
        "inputClass": _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-focused"), props2.activeIndex === 0),
        "placeholder": placeholder.value[0],
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "format": format.value[0],
        "value": (_innerValue$value1 = innerValue.value) === null || _innerValue$value1 === void 0 ? void 0 : _innerValue$value1[0]
      }, firstInputEvents.value), null), Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner-separator")
      }, [separator]), Vue.createVNode(input_index.Input, Vue.mergeProps({
        "ref": inputRefs.secondInputRef,
        "class": "".concat(COMPONENT_NAME.value, "__inner-right"),
        "inputClass": _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-focused"), props2.activeIndex === 1),
        "placeholder": placeholder.value[1],
        "disabled": isDisabled.value,
        "readonly": isReadonly.value,
        "format": format.value[1],
        "value": (_innerValue$value10 = innerValue.value) === null || _innerValue$value10 === void 0 ? void 0 : _innerValue$value10[1]
      }, secondInputEvents.value), null), suffixContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [suffixContent]) : null, (suffixIconContent || isShowClearIcon.value) && Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix ").concat(COMPONENT_NAME.value, "__suffix-icon")
      }, [isShowClearIcon.value ? Vue.createVNode(CloseCircleFilledIcon, {
        "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
        "onClick": handleClear
      }, null) : suffixIconContent])])]);
      var tipsClasses = ["".concat(COMPONENT_NAME.value, "__tips"), "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(props2.status)];
      return Vue.createVNode(Vue.Fragment, null, [RangeInputContent, tips && Vue.createVNode("div", {
        "class": tipsClasses
      }, [tips])]);
    };
  }
});

exports["default"] = _RangeInput;
//# sourceMappingURL=range-input.js.map
