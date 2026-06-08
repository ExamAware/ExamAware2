/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var input_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$5 = require('../_chunks/dep-47c460dd.js');
var index$4 = require('../_chunks/dep-8382953f.js');
var index$3 = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-874d2900.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-bc848944.js');
var input_hooks_useInput = require('./hooks/useInput.js');
var input_hooks_useInputEventHandler = require('./hooks/useInputEventHandler.js');
var input_hooks_useInputWidth = require('./hooks/useInputWidth.js');
var helper = require('../_chunks/dep-55c70201.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-d45110a6.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../form/consts/index.js');
require('../_chunks/dep-e8ff2c13.js');
require('./hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _excluded = ["isHover", "tStatus", "inputRef", "renderType", "showClear", "focused", "inputValue", "isComposition", "compositionValue", "innerValue", "limitNumber"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Input = Vue.defineComponent({
  name: "TInput",
  props: _objectSpread(_objectSpread({}, input_props["default"]), {}, {
    showInput: {
      type: Boolean,
      "default": true
    },
    keepWrapperWidth: {
      type: Boolean,
      "default": false
    }
  }),
  setup: function setup(props2, _ref) {
    var expose = _ref.expose;
    var _useConfig = configProvider_hooks_useConfig.useConfig("input"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = index.useGlobalIcon({
        BrowseIcon: tdesignIconsVueNext.BrowseIcon,
        BrowseOffIcon: tdesignIconsVueNext.BrowseOffIcon,
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon
      }),
      BrowseIcon = _useGlobalIcon.BrowseIcon,
      BrowseOffIcon = _useGlobalIcon.BrowseOffIcon,
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon;
    var readonly = index$1.useReadonly();
    var disabled = index$2.useDisabled();
    var COMPONENT_NAME = index$3.usePrefixClass("input");
    var INPUT_WRAP_CLASS = index$3.usePrefixClass("input__wrap");
    var INPUT_TIPS_CLASS = index$3.usePrefixClass("input__tips");
    var _useCommonClassName = index$4.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var classPrefix = index$3.usePrefixClass();
    var renderTNodeJSX = index$5.useTNodeJSX();
    var _useInput = input_hooks_useInput.useInput(props2, expose),
      isHover = _useInput.isHover,
      tStatus = _useInput.tStatus,
      inputRef = _useInput.inputRef,
      renderType = _useInput.renderType,
      showClear = _useInput.showClear,
      focused = _useInput.focused,
      inputValue = _useInput.inputValue,
      isComposition = _useInput.isComposition,
      compositionValue = _useInput.compositionValue,
      innerValue = _useInput.innerValue,
      limitNumber = _useInput.limitNumber,
      inputHandle = _objectWithoutProperties__default["default"](_useInput, _excluded);
    var _useInputWidth = input_hooks_useInputWidth.useInputWidth(props2, inputRef, innerValue),
      inputPreRef = _useInputWidth.inputPreRef;
    var inputEventHandler = input_hooks_useInputEventHandler.useInputEventHandler(props2, isHover, isComposition);
    var tPlaceholder = Vue.computed(function () {
      var _props2$placeholder;
      return (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : globalConfig.value.placeholder;
    });
    var inputAttrs = Vue.computed(function () {
      var _props2$autocomplete;
      var value = {
        autofocus: props2.autofocus,
        disabled: disabled.value,
        readonly: readonly.value,
        placeholder: tPlaceholder.value,
        name: props2.name || void 0,
        type: renderType.value,
        autocomplete: (_props2$autocomplete = props2.autocomplete) !== null && _props2$autocomplete !== void 0 ? _props2$autocomplete : globalConfig.value.autocomplete || void 0,
        unselectable: readonly.value ? "on" : "off",
        spellcheck: props2.spellCheck
      };
      return helper.getValidAttrs(value);
    });
    var wrapClasses = Vue.computed(function () {
      return [INPUT_WRAP_CLASS.value, _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--auto-width"), props2.autoWidth && !props2.keepWrapperWidth)];
    });
    var inputEvents = helper.getValidAttrs({
      onFocus: inputHandle.emitFocus,
      onBlur: inputHandle.formatAndEmitBlur,
      onKeydown: inputEventHandler.handleKeydown,
      onKeyup: inputEventHandler.handleKeyUp,
      onKeypress: inputEventHandler.handleKeypress,
      onPaste: inputEventHandler.onHandlePaste,
      onCompositionend: inputHandle.onHandleCompositionend,
      onCompositionstart: inputHandle.onHandleCompositionstart
    });
    return function () {
      var _compositionValue$val, _inputValue$value, _compositionValue$val2;
      var prefixIcon = renderTNodeJSX("prefixIcon");
      var suffixIcon = renderTNodeJSX("suffixIcon");
      var passwordIcon = renderTNodeJSX("passwordIcon");
      var label = renderTNodeJSX("label", {
        silent: true
      });
      var suffix = renderTNodeJSX("suffix");
      var limitNode = limitNumber.value && props2.showLimitNumber ? Vue.createVNode("div", {
        "class": ["".concat(classPrefix.value, "-input__limit-number"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-disabled"), disabled.value)]
      }, [limitNumber.value]) : null;
      var labelContent = label ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [label]) : null;
      var suffixContent = suffix || limitNode ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [suffix, limitNode]) : null;
      if (props2.type === "password") {
        var passwordClass = [_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__suffix-clear"), !disabled.value)];
        if (renderType.value === "password") {
          suffixIcon = Vue.createVNode(BrowseOffIcon, {
            "class": passwordClass,
            "onClick": inputHandle.emitPassword
          }, null);
        } else if (renderType.value === "text") {
          suffixIcon = Vue.createVNode(BrowseIcon, {
            "class": passwordClass,
            "onClick": inputHandle.emitPassword
          }, null);
        }
      }
      if (showClear.value) {
        if (props2.type === "password") {
          passwordIcon = Vue.createVNode(CloseCircleFilledIcon, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        } else {
          suffixIcon = Vue.createVNode(CloseCircleFilledIcon, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        }
      }
      var classes = [COMPONENT_NAME.value, props2.inputClass, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, disabled.value), STATUS.value.focused, disabled.value ? false : focused.value), "".concat(classPrefix.value, "-is-").concat(tStatus.value), tStatus.value && tStatus.value !== "default"), "".concat(classPrefix.value, "-align-").concat(props2.align), props2.align !== "left"), "".concat(classPrefix.value, "-is-readonly"), readonly.value), "".concat(COMPONENT_NAME.value, "--prefix"), prefixIcon || labelContent), "".concat(COMPONENT_NAME.value, "--suffix"), suffixIcon || suffixContent), "".concat(COMPONENT_NAME.value, "--borderless"), props2.borderless), "".concat(COMPONENT_NAME.value, "--focused"), focused.value)];
      var tips = renderTNodeJSX("tips");
      var tipsClasses = [INPUT_TIPS_CLASS.value, "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(tStatus.value || "default")];
      return Vue.withDirectives(Vue.createVNode("div", {
        "class": wrapClasses.value
      }, [Vue.createVNode("div", {
        "class": classes,
        "onClick": inputHandle.onRootClick,
        "onMouseenter": inputEventHandler.onInputMouseenter,
        "onMouseleave": inputEventHandler.onInputMouseleave,
        "onWheel": inputEventHandler.onHandleMousewheel
      }, [prefixIcon ? Vue.createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__prefix"), "".concat(COMPONENT_NAME.value, "__prefix-icon")]
      }, [prefixIcon]) : null, labelContent, Vue.createVNode("input", Vue.mergeProps({
        "class": ["".concat(COMPONENT_NAME.value, "__inner"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--soft-hidden"), !props2.showInput)]
      }, inputAttrs.value, inputEvents, {
        "ref": inputRef,
        "value": isComposition.value ? (_compositionValue$val = compositionValue.value) !== null && _compositionValue$val !== void 0 ? _compositionValue$val : "" : (_inputValue$value = inputValue.value) !== null && _inputValue$value !== void 0 ? _inputValue$value : "",
        "onInput": function onInput(e) {
          return inputHandle.handleInput(e);
        }
      }), null), props2.autoWidth && Vue.createVNode("span", {
        "ref": inputPreRef,
        "class": "".concat(classPrefix.value, "-input__input-pre")
      }, [isComposition.value ? (_compositionValue$val2 = compositionValue.value) !== null && _compositionValue$val2 !== void 0 ? _compositionValue$val2 : "" : innerValue.value || tPlaceholder.value]), suffixContent, passwordIcon ? Vue.createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), "".concat(COMPONENT_NAME.value, "__clear")]
      }, [passwordIcon]) : null, suffixIcon ? Vue.createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__clear"), showClear.value)]
      }, [suffixIcon]) : null]), tips && Vue.createVNode("div", {
        "class": tipsClasses
      }, [tips])]), [[Vue.vShow, props2.type !== "hidden"]]);
    };
  }
});

exports["default"] = _Input;
//# sourceMappingURL=input.js.map
