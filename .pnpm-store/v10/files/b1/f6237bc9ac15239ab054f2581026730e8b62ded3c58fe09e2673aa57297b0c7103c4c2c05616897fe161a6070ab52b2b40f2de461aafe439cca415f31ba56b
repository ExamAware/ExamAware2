/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, computed, createVNode, mergeProps, isVNode, nextTick } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import props from './props.js';
import { Input } from '../input/index.js';
import { Popup } from '../popup/index.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent, u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import AutoCompleteOptionList from './components/option-list.js';
import '../input/input.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../input/props.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import './components/highlight-option.js';
import '../_chunks/dep-30c631d1.js';

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
//# sourceMappingURL=auto-complete.js.map
