/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, ref, computed, nextTick, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import props from './props.mjs';
import { Input } from '../input/index.mjs';
import { Popup } from '../popup/index.mjs';
import { j as useVModel, b as useContent, a as useTNodeJSX, c as useCommonClassName, e as useDisabled, n as useReadonly, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import AutoCompleteOptionList from './components/option-list.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../input/input.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import 'lodash-es';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import './style/css.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './components/highlight-option.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _AutoComplete = defineComponent({
  name: "TAutoComplete",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      tValue = _useVModel2[0],
      setTValue = _useVModel2[1];
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var _useCommonClassName = useCommonClassName(),
      classPrefix = _useCommonClassName.classPrefix,
      SIZE = _useCommonClassName.SIZE;
    var _useConfig = useConfig("input"),
      global = _useConfig.globalConfig;
    var isDisabled = useDisabled();
    var isReadonly = useReadonly();
    var popupVisible = ref();
    var optionListRef = ref();
    var getOverlayStyle = function getOverlayStyle(trigger, popupElement) {
      var _props2$popupProps;
      var triggerWidth = trigger.getBoundingClientRect().width || trigger.offsetWidth || trigger.clientWidth;
      var popupWidth = popupElement.getBoundingClientRect().width || popupElement.offsetWidth || popupElement.clientWidth;
      return _objectSpread({
        width: triggerWidth >= popupWidth ? "".concat(triggerWidth, "px") : "auto"
      }, (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayInnerStyle);
    };
    var classes = computed(function () {
      return ["".concat(classPrefix.value, "-auto-complete")];
    });
    var popupClasses = computed(function () {
      var _props2$popupProps2;
      var classes2 = ["".concat(classPrefix.value, "-select__dropdown")];
      if ((_props2$popupProps2 = props2.popupProps) !== null && _props2$popupProps2 !== void 0 && _props2$popupProps2.overlayClassName) {
        classes2 = classes2.concat(props2.popupProps.overlayClassName);
      }
      return classes2;
    });
    var popupInnerClasses = computed(function () {
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
    var innerInputProps = computed(function () {
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
      nextTick(function () {
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
      var inputEvents = useEventForward(innerInputProps.value, {
        onChange: onInputChange,
        onFocus: onInnerFocus,
        onBlur: onInnerBlur,
        onClear: props2.onClear,
        onCompositionend: onInnerCompositionend,
        onCompositionstart: onInnerCompositionstart,
        onEnter: onInnerEnter
      });
      var triggerNode = renderContent("default", "triggerElement") || createVNode(Input, mergeProps({
        "borderless": props2.borderless,
        "placeholder": (_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : global.value.placeholder,
        "tips": props2.tips,
        "status": props2.status,
        "readonly": isReadonly.value,
        "disabled": isDisabled.value,
        "autofocus": props2.autofocus,
        "clearable": props2.clearable
      }, inputEvents.value), slots);
      var listContent = Array.isArray(props2.options) && createVNode(AutoCompleteOptionList, {
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
      var panelContent = topContent || listContent || bottomContent ? createVNode("div", {
        "class": "".concat(classPrefix.value, "-auto-complete__panel")
      }, [topContent, listContent, bottomContent]) : null;
      var popupProps = _objectSpread(_objectSpread({}, props2.popupProps), {}, {
        overlayInnerStyle: getOverlayStyle,
        overlayInnerClassName: popupInnerClasses.value,
        overlayClassName: popupClasses.value
      });
      var popupEvents = useEventForward(popupProps, {
        onVisibleChange: onPopupVisibleChange
      });
      return createVNode("div", {
        "class": classes.value
      }, [createVNode(Popup, mergeProps({
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

export { _AutoComplete as default };
//# sourceMappingURL=auto-complete.mjs.map
