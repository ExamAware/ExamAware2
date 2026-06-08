/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, toRefs, ref, nextTick, inject, watch, onMounted, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _typeof } from '../_chunks/dep-257428bc.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isNull, isObject, merge, omit } from 'lodash-es';
import { FormItemInjectionKey } from '../form/consts/index.mjs';
import { u as usePrefixClass, j as useVModel, e as useDisabled, n as useReadonly, s as setStyle, a as useTNodeJSX, c as useCommonClassName } from '../_chunks/dep-7673347f.mjs';
import { c as calculateNodeSize, b as getCharacterLength, a as getValidAttrs } from '../_chunks/dep-0cde7579.mjs';
import { useLengthLimit } from '../input/hooks/useLengthLimit.mjs';
import props from './props.mjs';
import '../_chunks/dep-9f459d8b.mjs';
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
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-6d2705e1.mjs';

var TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var hiddenTextarea;
function calcTextareaHeight(targetElement) {
  var _hiddenTextarea;
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  var _calculateNodeSize = calculateNodeSize(targetElement),
    paddingSize = _calculateNodeSize.paddingSize,
    borderSize = _calculateNodeSize.borderSize,
    boxSizing = _calculateNodeSize.boxSizing,
    sizingStyle = _calculateNodeSize.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(TEXTAREA_STYLE));
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  var height = hiddenTextarea.scrollHeight;
  var result = {};
  var isBorderbox = boxSizing === "border-box";
  var isContentbox = boxSizing === "content-box";
  if (isBorderbox) {
    height += borderSize;
  } else if (isContentbox) {
    height -= paddingSize;
  }
  hiddenTextarea.value = "";
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  (_hiddenTextarea = hiddenTextarea) === null || _hiddenTextarea === void 0 || (_hiddenTextarea = _hiddenTextarea.parentNode) === null || _hiddenTextarea === void 0 || _hiddenTextarea.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  var calcHeight = function calcHeight(rows) {
    var rowsHeight = singleRowHeight * rows;
    if (isBorderbox) {
      rowsHeight = rowsHeight + paddingSize + borderSize;
    }
    return rowsHeight;
  };
  if (!isNull(minRows)) {
    var minHeight = calcHeight(minRows);
    height = Math.max(minHeight, height);
    result.minHeight = "".concat(minHeight, "px");
  }
  if (!isNull(maxRows)) {
    height = Math.min(calcHeight(maxRows), height);
  }
  result.height = "".concat(height, "px");
  return result;
}

var _Textarea = defineComponent({
  name: "TTextarea",
  inheritAttrs: false,
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose;
    var prefix = usePrefixClass();
    var name = usePrefixClass("textarea");
    var TEXTAREA_TIPS_CLASS = computed(function () {
      return "".concat(name.value, "__tips");
    });
    var TEXTAREA_LIMIT = computed(function () {
      return "".concat(name.value, "__limit");
    });
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var disabled = useDisabled();
    var isReadonly = useReadonly();
    var textareaStyle = ref({});
    var refTextareaElem = ref();
    var focused = ref(false);
    var isComposing = ref(false);
    var focus = function focus() {
      var _refTextareaElem$valu;
      return (_refTextareaElem$valu = refTextareaElem.value) === null || _refTextareaElem$valu === void 0 ? void 0 : _refTextareaElem$valu.focus();
    };
    var blur = function blur() {
      var _refTextareaElem$valu2;
      return (_refTextareaElem$valu2 = refTextareaElem.value) === null || _refTextareaElem$valu2 === void 0 ? void 0 : _refTextareaElem$valu2.blur();
    };
    var adjustTextareaHeight = function adjustTextareaHeight() {
      var _refTextareaElem$valu3;
      if (props2.autosize === true) {
        nextTick(function () {
          textareaStyle.value = calcTextareaHeight(refTextareaElem.value);
        });
      } else if (props2.autosize && _typeof(props2.autosize) === "object") {
        var _props2$autosize = props2.autosize,
          minRows = _props2$autosize.minRows,
          maxRows = _props2$autosize.maxRows;
        nextTick(function () {
          textareaStyle.value = calcTextareaHeight(refTextareaElem.value, minRows, maxRows);
        });
      } else if (attrs.rows) {
        textareaStyle.value = {
          height: "auto",
          minHeight: "auto"
        };
      } else if (attrs.style && (_refTextareaElem$valu3 = refTextareaElem.value) !== null && _refTextareaElem$valu3 !== void 0 && (_refTextareaElem$valu3 = _refTextareaElem$valu3.style) !== null && _refTextareaElem$valu3 !== void 0 && _refTextareaElem$valu3.height) {
        textareaStyle.value = {
          height: refTextareaElem.value.style.height
        };
      }
    };
    var setInputValue = function setInputValue() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var textareaElem = refTextareaElem.value;
      var sV = String(v);
      if (!textareaElem) {
        return;
      }
      if (textareaElem.value !== sV) {
        textareaElem.value = sV;
        innerValue.value = sV;
      }
    };
    var inputValueChangeHandle = function inputValueChangeHandle(e) {
      var target = e.target;
      var val = target.value;
      if (props2.maxcharacter && props2.maxcharacter >= 0) {
        var stringInfo = getCharacterLength(val, props2.maxcharacter);
        if (!props2.allowInputOverMax) {
          val = _typeof(stringInfo) === "object" && stringInfo.characters;
        }
      }
      !isComposing.value && setInnerValue(val, {
        e: e
      });
      nextTick(function () {
        return setInputValue(val);
      });
      adjustTextareaHeight();
    };
    var handleInput = function handleInput(e) {
      inputValueChangeHandle(e);
    };
    var onCompositionstart = function onCompositionstart() {
      isComposing.value = true;
    };
    var onCompositionend = function onCompositionend(e) {
      isComposing.value = false;
      inputValueChangeHandle(e);
    };
    var eventDeal = function eventDeal(name2, e) {
      var _props2$eventName;
      if (disabled.value) return;
      var eventName = "on".concat(name2[0].toUpperCase()).concat(name2.slice(1));
      (_props2$eventName = props2[eventName]) === null || _props2$eventName === void 0 || _props2$eventName.call(props2, innerValue.value, {
        e: e
      });
    };
    var emitKeyDown = function emitKeyDown(e) {
      eventDeal("keydown", e);
    };
    var emitKeyUp = function emitKeyUp(e) {
      eventDeal("keyup", e);
    };
    var emitKeypress = function emitKeypress(e) {
      eventDeal("keypress", e);
    };
    var emitFocus = function emitFocus(e) {
      var _props2$onFocus;
      adjustTextareaHeight();
      if (disabled.value) return;
      focused.value = true;
      (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, innerValue.value, {
        e: e
      });
    };
    var formItem = inject(FormItemInjectionKey, void 0);
    var emitBlur = function emitBlur(e) {
      var _props2$onBlur;
      if (!e.target) return;
      adjustTextareaHeight();
      focused.value = false;
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, innerValue.value, {
        e: e
      });
      formItem === null || formItem === void 0 || formItem.handleBlur();
    };
    var textareaClasses = computed(function () {
      return [name.value, _defineProperty(_defineProperty({}, "".concat(prefix.value, "-is-disabled"), disabled.value), "".concat(prefix.value, "-is-readonly"), isReadonly.value)];
    });
    var inputAttrs = computed(function () {
      return getValidAttrs({
        autofocus: props2.autofocus,
        disabled: disabled.value,
        readonly: isReadonly.value,
        placeholder: props2.placeholder,
        maxlength: !props2.allowInputOverMax && props2.maxlength || void 0,
        name: props2.name || void 0
      });
    });
    var characterNumber = computed(function () {
      var characterInfo = getCharacterLength(String(innerValue.value || ""));
      if (_typeof(characterInfo) === "object") {
        return characterInfo.length;
      }
      return characterInfo;
    });
    var limitParams = computed(function () {
      return {
        value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
        status: props2.status,
        maxlength: Number(props2.maxlength),
        maxcharacter: props2.maxcharacter,
        allowInputOverMax: props2.allowInputOverMax,
        onValidate: props2.onValidate
      };
    });
    var _useLengthLimit = useLengthLimit(limitParams),
      tStatus = _useLengthLimit.tStatus;
    watch(function () {
      return innerValue.value;
    }, function () {
      return adjustTextareaHeight();
    });
    watch(refTextareaElem, function (el) {
      if (!el) return;
      adjustTextareaHeight();
      if (props2.autofocus) {
        el.focus();
      }
    });
    watch(textareaStyle, function (val) {
      var style = attrs.style;
      if (isObject(style)) {
        setStyle(refTextareaElem.value, merge(style, val));
      } else {
        setStyle(refTextareaElem.value, val);
      }
    });
    watch(innerValue, function () {
      nextTick(function () {
        return adjustTextareaHeight();
      });
    });
    watch(function () {
      return props2.autosize;
    }, adjustTextareaHeight, {
      deep: true
    });
    expose({
      focus: focus,
      blur: blur
    });
    onMounted(function () {
      adjustTextareaHeight();
    });
    var renderTNodeJSX = useTNodeJSX();
    return function () {
      var _String;
      var inputEvents = getValidAttrs({
        onFocus: emitFocus,
        onBlur: emitBlur,
        onKeydown: emitKeyDown,
        onKeyup: emitKeyUp,
        onKeypress: emitKeypress
      });
      var _useCommonClassName = useCommonClassName(),
        STATUS = _useCommonClassName.STATUS;
      var classes = computed(function () {
        return ["".concat(name.value, "__inner"), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefix.value, "-is-").concat(tStatus.value), tStatus.value), STATUS.value.disabled, disabled.value), STATUS.value.focused, focused.value), "".concat(prefix.value, "-resize-none"), _typeof(props2.autosize) === "object"), "".concat(prefix.value, "-hide-scrollbar"), props2.autosize === true)];
      });
      var tips = renderTNodeJSX("tips");
      var textTips = tips && createVNode("div", {
        "class": "".concat(TEXTAREA_TIPS_CLASS.value, " ").concat(name.value, "__tips--").concat(props2.status || "normal")
      }, [tips]);
      var limitText = props2.maxcharacter && createVNode("span", {
        "class": TEXTAREA_LIMIT.value
      }, ["".concat(characterNumber.value, "/").concat(props2.maxcharacter)]) || !props2.maxcharacter && props2.maxlength && createVNode("span", {
        "class": TEXTAREA_LIMIT.value
      }, ["".concat(innerValue.value ? (_String = String(innerValue.value)) === null || _String === void 0 ? void 0 : _String.length : 0, "/").concat(props2.maxlength)]);
      return createVNode("div", mergeProps({
        "class": textareaClasses.value
      }, omit(attrs, ["style"])), [createVNode("textarea", mergeProps({
        "onInput": handleInput,
        "onCompositionstart": onCompositionstart,
        "onCompositionend": onCompositionend,
        "ref": refTextareaElem,
        "value": innerValue.value,
        "class": classes.value
      }, inputEvents, inputAttrs.value), null), textTips || limitText ? createVNode("div", {
        "class": ["".concat(name.value, "__info_wrapper"), _defineProperty({}, "".concat(name.value, "__info_wrapper_align"), !textTips)]
      }, [textTips, limitText]) : null]);
    };
  }
});

export { _Textarea as default };
//# sourceMappingURL=textarea.mjs.map
