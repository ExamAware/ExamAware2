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
var autoComplete_props = require('./props.js');
var input_index = require('../input/index.js');
var popup_index = require('../popup/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-8382953f.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
var index$3 = require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-cc66acf1.js');
var index$4 = require('../_chunks/dep-bc848944.js');
var index = require('../_chunks/dep-e8ff2c13.js');
var index$5 = require('../_chunks/dep-bf113ca4.js');
var autoComplete_components_optionList = require('./components/option-list.js');
require('../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('tdesign-icons-vue-next');
require('../input/props.js');
require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-31c76dc6.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-0813861e.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../_chunks/dep-b6058ff9.js');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../_chunks/dep-d62a674d.js');
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
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-d45110a6.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-c3dee00a.js');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-ecb34b89.js');
require('../_chunks/dep-6280a7f6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _AutoComplete = Vue.defineComponent({
  name: "TAutoComplete",
  props: autoComplete_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      tValue = _useVModel2[0],
      setTValue = _useVModel2[1];
    var renderContent = index$1.useContent();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useCommonClassName = index$2.useCommonClassName(),
      classPrefix = _useCommonClassName.classPrefix,
      SIZE = _useCommonClassName.SIZE;
    var _useConfig = configProvider_hooks_useConfig.useConfig("input"),
      global = _useConfig.globalConfig;
    var isDisabled = index$3.useDisabled();
    var isReadonly = index$4.useReadonly();
    var popupVisible = Vue.ref();
    var optionListRef = Vue.ref();
    var getOverlayStyle = function getOverlayStyle(trigger, popupElement) {
      var _props2$popupProps;
      var triggerWidth = trigger.getBoundingClientRect().width || trigger.offsetWidth || trigger.clientWidth;
      var popupWidth = popupElement.getBoundingClientRect().width || popupElement.offsetWidth || popupElement.clientWidth;
      return _objectSpread({
        width: triggerWidth >= popupWidth ? "".concat(triggerWidth, "px") : "auto"
      }, (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayInnerStyle);
    };
    var classes = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-auto-complete")];
    });
    var popupClasses = Vue.computed(function () {
      var _props2$popupProps2;
      var classes2 = ["".concat(classPrefix.value, "-select__dropdown")];
      if ((_props2$popupProps2 = props2.popupProps) !== null && _props2$popupProps2 !== void 0 && _props2$popupProps2.overlayClassName) {
        classes2 = classes2.concat(props2.popupProps.overlayClassName);
      }
      return classes2;
    });
    var popupInnerClasses = Vue.computed(function () {
      var _props2$popupProps3;
      var classes2 = ["".concat(classPrefix.value, "-select__dropdown-inner")];
      if ((_props2$popupProps3 = props2.popupProps) !== null && _props2$popupProps3 !== void 0 && _props2$popupProps3.overlayInnerClassName) {
        classes2 = classes2.concat(props2.popupProps.overlayInnerClassName);
      }
      return classes2;
    });
    var onInputChange = function onInputChange(value2, context) {
      popupVisible.value = true;
      setTValue(value2, context);
    };
    var innerInputProps = Vue.computed(function () {
      var tProps = _objectSpread({
        value: tValue.value,
        size: props2.size
      }, props2.inputProps);
      return tProps;
    });
    var onInnerFocus = function onInnerFocus(value2, context) {
      var _props2$onFocus;
      if (isReadonly.value || isDisabled.value) return;
      popupVisible.value = true;
      (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, _objectSpread(_objectSpread({}, context), {}, {
        value: value2
      }));
      Vue.nextTick(function () {
        var _optionListRef$value;
        (_optionListRef$value = optionListRef.value) === null || _optionListRef$value === void 0 || _optionListRef$value.addKeyboardListener();
      });
    };
    var onInnerBlur = function onInnerBlur(value2, context) {
      var _props2$onBlur;
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, _objectSpread(_objectSpread({}, context), {}, {
        value: value2
      }));
    };
    var onInnerCompositionend = function onInnerCompositionend(value2, context) {
      var _props2$onComposition;
      (_props2$onComposition = props2.onCompositionend) === null || _props2$onComposition === void 0 || _props2$onComposition.call(props2, _objectSpread(_objectSpread({}, context), {}, {
        value: value2
      }));
    };
    var onInnerCompositionstart = function onInnerCompositionstart(value2, context) {
      var _props2$onComposition2;
      (_props2$onComposition2 = props2.onCompositionstart) === null || _props2$onComposition2 === void 0 || _props2$onComposition2.call(props2, _objectSpread(_objectSpread({}, context), {}, {
        value: value2
      }));
    };
    var onInnerEnter = function onInnerEnter(value2, context) {
      var _props2$onEnter;
      (_props2$onEnter = props2.onEnter) === null || _props2$onEnter === void 0 || _props2$onEnter.call(props2, _objectSpread(_objectSpread({}, context), {}, {
        value: value2
      }));
    };
    var onInnerSelect = function onInnerSelect(value2, context) {
      var _props2$onSelect;
      if (isReadonly.value || isDisabled.value) return;
      popupVisible.value = false;
      setTValue(value2, context);
      (_props2$onSelect = props2.onSelect) === null || _props2$onSelect === void 0 || _props2$onSelect.call(props2, value2, context);
    };
    var onPopupVisibleChange = function onPopupVisibleChange(visible, _ref2) {
      var trigger = _ref2.trigger;
      if (isReadonly.value || isDisabled.value) return;
      if (trigger !== "trigger-element-click") {
        popupVisible.value = visible;
      }
    };
    return function () {
      var _props2$placeholder;
      var inputEvents = index$5.useEventForward(innerInputProps.value, {
        onChange: onInputChange,
        onFocus: onInnerFocus,
        onBlur: onInnerBlur,
        onClear: props2.onClear,
        onCompositionend: onInnerCompositionend,
        onCompositionstart: onInnerCompositionstart,
        onEnter: onInnerEnter
      });
      var triggerNode = renderContent("default", "triggerElement") || Vue.createVNode(input_index.Input, Vue.mergeProps({
        "borderless": props2.borderless,
        "placeholder": (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : global.value.placeholder,
        "tips": props2.tips,
        "status": props2.status,
        "readonly": isReadonly.value,
        "disabled": isDisabled.value,
        "autofocus": props2.autofocus,
        "clearable": props2.clearable
      }, inputEvents.value), slots);
      var listContent = Array.isArray(props2.options) && Vue.createVNode(autoComplete_components_optionList["default"], {
        "ref": optionListRef,
        "value": tValue.value,
        "options": props2.options,
        "size": props2.size,
        "sizeClassNames": SIZE,
        "onSelect": onInnerSelect,
        "popupVisible": popupVisible.value,
        "highlightKeyword": props2.highlightKeyword,
        "filterable": props2.filterable,
        "filter": props2.filter,
        "empty": renderTNodeJSX("empty")
      }, {
        option: slots.option
      });
      var topContent = renderTNodeJSX("panelTopContent");
      var bottomContent = renderTNodeJSX("panelBottomContent");
      var panelContent = topContent || listContent || bottomContent ? Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-auto-complete__panel")
      }, [topContent, listContent, bottomContent]) : null;
      var popupProps = _objectSpread(_objectSpread({}, props2.popupProps), {}, {
        overlayInnerStyle: getOverlayStyle,
        overlayInnerClassName: popupInnerClasses.value,
        overlayClassName: popupClasses.value
      });
      var popupEvents = index$5.useEventForward(popupProps, {
        onVisibleChange: onPopupVisibleChange
      });
      return Vue.createVNode("div", {
        "class": classes.value
      }, [Vue.createVNode(popup_index.Popup, Vue.mergeProps({
        "visible": popupVisible.value,
        "onVisibleChange": onPopupVisibleChange,
        "trigger": "focus",
        "placement": "bottom-left",
        "hideEmptyPopup": true,
        "content": panelContent ? function () {
          return panelContent;
        } : null
      }, popupEvents.value), _isSlot(triggerNode) ? triggerNode : {
        "default": function _default() {
          return [triggerNode];
        }
      })]);
    };
  }
});

exports["default"] = _AutoComplete;
//# sourceMappingURL=auto-complete.js.map
