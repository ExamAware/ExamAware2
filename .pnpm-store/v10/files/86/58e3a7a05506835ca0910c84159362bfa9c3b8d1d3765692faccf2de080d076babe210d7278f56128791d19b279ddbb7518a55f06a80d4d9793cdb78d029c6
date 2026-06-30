/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _typeof = require('@babel/runtime/helpers/typeof');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var form_consts_index = require('../form/consts/index.js');
var setStyle = require('../_chunks/dep-c3dee00a.js');
var helper = require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/toConsumableArray');
require('../_chunks/dep-953a77eb.js');
var index$4 = require('../_chunks/dep-47c460dd.js');
var index$5 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-bc848944.js');
var index$1 = require('../_chunks/dep-e8ff2c13.js');
var input_hooks_useLengthLimit = require('../input/hooks/useLengthLimit.js');
var textarea_props = require('./props.js');
var isNull = require('../_chunks/dep-4ccaead1.js');
var isObject = require('../_chunks/dep-0813861e.js');
var configProvider_utils_context = require('../_chunks/dep-5d7e2375.js');
var omit = require('../_chunks/dep-ace0b57c.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

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
  var _calculateNodeSize = helper.calculateNodeSize(targetElement),
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
  if (!isNull.isNull(minRows)) {
    var minHeight = calcHeight(minRows);
    height = Math.max(minHeight, height);
    result.minHeight = "".concat(minHeight, "px");
  }
  if (!isNull.isNull(maxRows)) {
    height = Math.min(calcHeight(maxRows), height);
  }
  result.height = "".concat(height, "px");
  return result;
}

var _Textarea = Vue.defineComponent({
  name: "TTextarea",
  inheritAttrs: false,
  props: textarea_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs,
      expose = _ref.expose;
    var prefix = index.usePrefixClass();
    var name = index.usePrefixClass("textarea");
    var TEXTAREA_TIPS_CLASS = Vue.computed(function () {
      return "".concat(name.value, "__tips");
    });
    var TEXTAREA_LIMIT = Vue.computed(function () {
      return "".concat(name.value, "__limit");
    });
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$1.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var disabled = index$2.useDisabled();
    var isReadonly = index$3.useReadonly();
    var textareaStyle = Vue.ref({});
    var refTextareaElem = Vue.ref();
    var focused = Vue.ref(false);
    var isComposing = Vue.ref(false);
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
        Vue.nextTick(function () {
          textareaStyle.value = calcTextareaHeight(refTextareaElem.value);
        });
      } else if (props2.autosize && _typeof__default["default"](props2.autosize) === "object") {
        var _props2$autosize = props2.autosize,
          minRows = _props2$autosize.minRows,
          maxRows = _props2$autosize.maxRows;
        Vue.nextTick(function () {
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
        var stringInfo = helper.getCharacterLength(val, props2.maxcharacter);
        if (!props2.allowInputOverMax) {
          val = _typeof__default["default"](stringInfo) === "object" && stringInfo.characters;
        }
      }
      !isComposing.value && setInnerValue(val, {
        e: e
      });
      Vue.nextTick(function () {
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
    var formItem = Vue.inject(form_consts_index.FormItemInjectionKey, void 0);
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
    var textareaClasses = Vue.computed(function () {
      return [name.value, _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-is-disabled"), disabled.value), "".concat(prefix.value, "-is-readonly"), isReadonly.value)];
    });
    var inputAttrs = Vue.computed(function () {
      return helper.getValidAttrs({
        autofocus: props2.autofocus,
        disabled: disabled.value,
        readonly: isReadonly.value,
        placeholder: props2.placeholder,
        maxlength: !props2.allowInputOverMax && props2.maxlength || void 0,
        name: props2.name || void 0
      });
    });
    var characterNumber = Vue.computed(function () {
      var characterInfo = helper.getCharacterLength(String(innerValue.value || ""));
      if (_typeof__default["default"](characterInfo) === "object") {
        return characterInfo.length;
      }
      return characterInfo;
    });
    var limitParams = Vue.computed(function () {
      return {
        value: [void 0, null].includes(innerValue.value) ? void 0 : String(innerValue.value),
        status: props2.status,
        maxlength: Number(props2.maxlength),
        maxcharacter: props2.maxcharacter,
        allowInputOverMax: props2.allowInputOverMax,
        onValidate: props2.onValidate
      };
    });
    var _useLengthLimit = input_hooks_useLengthLimit.useLengthLimit(limitParams),
      tStatus = _useLengthLimit.tStatus;
    Vue.watch(function () {
      return innerValue.value;
    }, function () {
      return adjustTextareaHeight();
    });
    Vue.watch(refTextareaElem, function (el) {
      if (!el) return;
      adjustTextareaHeight();
      if (props2.autofocus) {
        el.focus();
      }
    });
    Vue.watch(textareaStyle, function (val) {
      var style = attrs.style;
      if (isObject.isObject(style)) {
        setStyle.setStyle(refTextareaElem.value, configProvider_utils_context.merge(style, val));
      } else {
        setStyle.setStyle(refTextareaElem.value, val);
      }
    });
    Vue.watch(innerValue, function () {
      Vue.nextTick(function () {
        return adjustTextareaHeight();
      });
    });
    Vue.watch(function () {
      return props2.autosize;
    }, adjustTextareaHeight, {
      deep: true
    });
    expose({
      focus: focus,
      blur: blur
    });
    Vue.onMounted(function () {
      adjustTextareaHeight();
    });
    var renderTNodeJSX = index$4.useTNodeJSX();
    return function () {
      var _String;
      var inputEvents = helper.getValidAttrs({
        onFocus: emitFocus,
        onBlur: emitBlur,
        onKeydown: emitKeyDown,
        onKeyup: emitKeyUp,
        onKeypress: emitKeypress
      });
      var _useCommonClassName = index$5.useCommonClassName(),
        STATUS = _useCommonClassName.STATUS;
      var classes = Vue.computed(function () {
        return ["".concat(name.value, "__inner"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(prefix.value, "-is-").concat(tStatus.value), tStatus.value), STATUS.value.disabled, disabled.value), STATUS.value.focused, focused.value), "".concat(prefix.value, "-resize-none"), _typeof__default["default"](props2.autosize) === "object"), "".concat(prefix.value, "-hide-scrollbar"), props2.autosize === true)];
      });
      var tips = renderTNodeJSX("tips");
      var textTips = tips && Vue.createVNode("div", {
        "class": "".concat(TEXTAREA_TIPS_CLASS.value, " ").concat(name.value, "__tips--").concat(props2.status || "normal")
      }, [tips]);
      var limitText = props2.maxcharacter && Vue.createVNode("span", {
        "class": TEXTAREA_LIMIT.value
      }, ["".concat(characterNumber.value, "/").concat(props2.maxcharacter)]) || !props2.maxcharacter && props2.maxlength && Vue.createVNode("span", {
        "class": TEXTAREA_LIMIT.value
      }, ["".concat(innerValue.value ? (_String = String(innerValue.value)) === null || _String === void 0 ? void 0 : _String.length : 0, "/").concat(props2.maxlength)]);
      return Vue.createVNode("div", Vue.mergeProps({
        "class": textareaClasses.value
      }, omit.omit(attrs, ["style"])), [Vue.createVNode("textarea", Vue.mergeProps({
        "onInput": handleInput,
        "onCompositionstart": onCompositionstart,
        "onCompositionend": onCompositionend,
        "ref": refTextareaElem,
        "value": innerValue.value,
        "class": classes.value
      }, inputEvents, inputAttrs.value), null), textTips || limitText ? Vue.createVNode("div", {
        "class": ["".concat(name.value, "__info_wrapper"), _defineProperty__default["default"]({}, "".concat(name.value, "__info_wrapper_align"), !textTips)]
      }, [textTips, limitText]) : null]);
    };
  }
});

exports["default"] = _Textarea;
//# sourceMappingURL=textarea.js.map
