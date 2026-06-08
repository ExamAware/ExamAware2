/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, withDirectives, mergeProps, vShow } from 'vue';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { BrowseIcon, BrowseOffIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue-next';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { useInput } from './hooks/useInput.js';
import { useInputEventHandler } from './hooks/useInputEventHandler.js';
import { useInputWidth } from './hooks/useInputWidth.js';
import { a as getValidAttrs } from '../_chunks/dep-80a99546.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../form/consts/index.js';
import '../_chunks/dep-51e5a827.js';
import './hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a77612.js';

var _excluded = ["isHover", "tStatus", "inputRef", "renderType", "showClear", "focused", "inputValue", "isComposition", "compositionValue", "innerValue", "limitNumber"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Input = defineComponent({
  name: "TInput",
  props: _objectSpread(_objectSpread({}, props), {}, {
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
    var _useConfig = useConfig("input"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        BrowseIcon: BrowseIcon,
        BrowseOffIcon: BrowseOffIcon,
        CloseCircleFilledIcon: CloseCircleFilledIcon
      }),
      BrowseIcon$1 = _useGlobalIcon.BrowseIcon,
      BrowseOffIcon$1 = _useGlobalIcon.BrowseOffIcon,
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var readonly = useReadonly();
    var disabled = useDisabled();
    var COMPONENT_NAME = usePrefixClass("input");
    var INPUT_WRAP_CLASS = usePrefixClass("input__wrap");
    var INPUT_TIPS_CLASS = usePrefixClass("input__tips");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS,
      SIZE = _useCommonClassName.SIZE;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var _useInput = useInput(props2, expose),
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
      inputHandle = _objectWithoutProperties(_useInput, _excluded);
    var _useInputWidth = useInputWidth(props2, inputRef, innerValue),
      inputPreRef = _useInputWidth.inputPreRef;
    var inputEventHandler = useInputEventHandler(props2, isHover, isComposition);
    var tPlaceholder = computed(function () {
      var _props2$placeholder;
      return (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : globalConfig.value.placeholder;
    });
    var inputAttrs = computed(function () {
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
      return getValidAttrs(value);
    });
    var wrapClasses = computed(function () {
      return [INPUT_WRAP_CLASS.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--auto-width"), props2.autoWidth && !props2.keepWrapperWidth)];
    });
    var inputEvents = getValidAttrs({
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
      var limitNode = limitNumber.value && props2.showLimitNumber ? createVNode("div", {
        "class": ["".concat(classPrefix.value, "-input__limit-number"), _defineProperty({}, "".concat(classPrefix.value, "-is-disabled"), disabled.value)]
      }, [limitNumber.value]) : null;
      var labelContent = label ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__prefix")
      }, [label]) : null;
      var suffixContent = suffix || limitNode ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__suffix")
      }, [suffix, limitNode]) : null;
      if (props2.type === "password") {
        var passwordClass = [_defineProperty({}, "".concat(COMPONENT_NAME.value, "__suffix-clear"), !disabled.value)];
        if (renderType.value === "password") {
          suffixIcon = createVNode(BrowseOffIcon$1, {
            "class": passwordClass,
            "onClick": inputHandle.emitPassword
          }, null);
        } else if (renderType.value === "text") {
          suffixIcon = createVNode(BrowseIcon$1, {
            "class": passwordClass,
            "onClick": inputHandle.emitPassword
          }, null);
        }
      }
      if (showClear.value) {
        if (props2.type === "password") {
          passwordIcon = createVNode(CloseCircleFilledIcon$1, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        } else {
          suffixIcon = createVNode(CloseCircleFilledIcon$1, {
            "ref": inputHandle.clearIconRef,
            "class": "".concat(COMPONENT_NAME.value, "__suffix-clear"),
            "onClick": inputHandle.emitClear,
            "onMousedown": inputHandle.onClearIconMousedown
          }, null);
        }
      }
      var classes = [COMPONENT_NAME.value, props2.inputClass, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, SIZE.value[props2.size], props2.size !== "medium"), STATUS.value.disabled, disabled.value), STATUS.value.focused, disabled.value ? false : focused.value), "".concat(classPrefix.value, "-is-").concat(tStatus.value), tStatus.value && tStatus.value !== "default"), "".concat(classPrefix.value, "-align-").concat(props2.align), props2.align !== "left"), "".concat(classPrefix.value, "-is-readonly"), readonly.value), "".concat(COMPONENT_NAME.value, "--prefix"), prefixIcon || labelContent), "".concat(COMPONENT_NAME.value, "--suffix"), suffixIcon || suffixContent), "".concat(COMPONENT_NAME.value, "--borderless"), props2.borderless), "".concat(COMPONENT_NAME.value, "--focused"), focused.value)];
      var tips = renderTNodeJSX("tips");
      var tipsClasses = [INPUT_TIPS_CLASS.value, "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(tStatus.value || "default")];
      return withDirectives(createVNode("div", {
        "class": wrapClasses.value
      }, [createVNode("div", {
        "class": classes,
        "onClick": inputHandle.onRootClick,
        "onMouseenter": inputEventHandler.onInputMouseenter,
        "onMouseleave": inputEventHandler.onInputMouseleave,
        "onWheel": inputEventHandler.onHandleMousewheel
      }, [prefixIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__prefix"), "".concat(COMPONENT_NAME.value, "__prefix-icon")]
      }, [prefixIcon]) : null, labelContent, createVNode("input", mergeProps({
        "class": ["".concat(COMPONENT_NAME.value, "__inner"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "--soft-hidden"), !props2.showInput)]
      }, inputAttrs.value, inputEvents, {
        "ref": inputRef,
        "value": isComposition.value ? (_compositionValue$val = compositionValue.value) !== null && _compositionValue$val !== void 0 ? _compositionValue$val : "" : (_inputValue$value = inputValue.value) !== null && _inputValue$value !== void 0 ? _inputValue$value : "",
        "onInput": function onInput(e) {
          return inputHandle.handleInput(e);
        }
      }), null), props2.autoWidth && createVNode("span", {
        "ref": inputPreRef,
        "class": "".concat(classPrefix.value, "-input__input-pre")
      }, [isComposition.value ? (_compositionValue$val2 = compositionValue.value) !== null && _compositionValue$val2 !== void 0 ? _compositionValue$val2 : "" : innerValue.value || tPlaceholder.value]), suffixContent, passwordIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), "".concat(COMPONENT_NAME.value, "__clear")]
      }, [passwordIcon]) : null, suffixIcon ? createVNode("span", {
        "class": ["".concat(COMPONENT_NAME.value, "__suffix"), "".concat(COMPONENT_NAME.value, "__suffix-icon"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "__clear"), showClear.value)]
      }, [suffixIcon]) : null]), tips && createVNode("div", {
        "class": tipsClasses
      }, [tips])]), [[vShow, props2.type !== "hidden"]]);
    };
  }
});

export { _Input as default };
//# sourceMappingURL=input.js.map
