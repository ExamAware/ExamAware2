/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import TCascaderSubPanel from './components/Panel.js';
import { SelectInput } from '../select-input/index.js';
import FakeArrow from '../common-components/fake-arrow.js';
import props from './props.js';
import { getFakeArrowIconClass } from './utils/className.js';
import { handleRemoveTagEffect, closeIconClickEffect } from './utils/effect.js';
import { getMultipleContent, getSingleContent, getPanels } from './utils/helper.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../_chunks/dep-47b13687.js';
import { u as useEventForward } from '../_chunks/dep-4d7b9152.js';
import { useCascaderContext } from './hooks/index.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import './components/Item.js';
import 'tdesign-icons-vue-next';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../_chunks/dep-30c631d1.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-16bcfabc.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import '../tag-input/props.js';
import '../_chunks/dep-aa34a263.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import '../_chunks/dep-258d1362.js';
import 'mitt';
import '../_chunks/dep-423bbe8d.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Cascader = defineComponent({
  name: "TCascader",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("cascader");
    var classPrefix = usePrefixClass();
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var overlayClassName = usePrefixClass("cascader__popup");
    var _useConfig = useConfig("cascader"),
      globalConfig = _useConfig.globalConfig;
    var isDisabled = useDisabled();
    var isReadonly = useReadonly();
    var renderTNodeJSX = useTNodeJSX();
    var _useCascaderContext = useCascaderContext(props2),
      cascaderContext = _useCascaderContext.cascaderContext,
      innerValue = _useCascaderContext.innerValue,
      isFilterable = _useCascaderContext.isFilterable,
      getCascaderItems = _useCascaderContext.getCascaderItems;
    var displayValue = computed(function () {
      return props2.multiple ? getMultipleContent(cascaderContext.value) : getSingleContent(cascaderContext.value);
    });
    var panels = computed(function () {
      return getPanels(cascaderContext.value.treeNodes);
    });
    var inputPlaceholder = computed(function () {
      var _props2$placeholder;
      return cascaderContext.value.visible && !props2.multiple && getSingleContent(cascaderContext.value) || ((_props2$placeholder = props2.placeholder) !== null && _props2$placeholder !== void 0 ? _props2$placeholder : globalConfig.value.placeholder);
    });
    var renderSuffixIcon = function renderSuffixIcon() {
      if (props2.suffixIcon || slots.suffixIcon) {
        return renderTNodeJSX("suffixIcon");
      }
      var _cascaderContext$valu = cascaderContext.value,
        visible = _cascaderContext$valu.visible,
        disabled = _cascaderContext$valu.disabled;
      return createVNode(FakeArrow, {
        "overlayClassName": getFakeArrowIconClass(classPrefix.value, STATUS.value, cascaderContext.value),
        "isActive": visible,
        "disabled": disabled
      }, null);
    };
    var valueDisplayParams = computed(function () {
      var arrayValue = innerValue.value instanceof Array ? innerValue.value : [innerValue.value];
      var displayValue2 = props2.multiple && props2.minCollapsedNum ? arrayValue.slice(0, props2.minCollapsedNum) : innerValue.value;
      var options = getCascaderItems(arrayValue);
      return {
        value: innerValue.value,
        selectedOptions: options,
        onClose: function onClose(index) {
          handleRemoveTagEffect(cascaderContext.value, index, props2.onRemove);
        },
        displayValue: displayValue2
      };
    });
    var renderValueDisplay = function renderValueDisplay() {
      return renderTNodeJSX("valueDisplay", {
        params: valueDisplayParams.value
      });
    };
    var renderLabel = function renderLabel() {
      var label = renderTNodeJSX("label");
      if (props2.multiple) return label;
      if (!label) return null;
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-tag-input__prefix")
      }, [label]);
    };
    var cascaderClassNames = computed(function () {
      return [COMPONENT_NAME.value, props2.multiple ? "".concat(COMPONENT_NAME.value, "--multiple") : "".concat(COMPONENT_NAME.value, "--single")];
    });
    return function () {
      var _props2$popupProps;
      var _cascaderContext$valu2 = cascaderContext.value,
        setVisible = _cascaderContext$valu2.setVisible,
        visible = _cascaderContext$valu2.visible,
        inputVal = _cascaderContext$valu2.inputVal,
        setInputVal = _cascaderContext$valu2.setInputVal;
      var selectInputEvents = useEventForward(props2.selectInputProps, {
        onTagChange: function onTagChange(val, ctx) {
          if (ctx.trigger === "enter") return;
          handleRemoveTagEffect(cascaderContext.value, ctx.index, props2.onRemove);
        },
        onInputChange: function onInputChange(value) {
          if (!isFilterable.value) return;
          setInputVal("".concat(value));
        },
        onPopupVisibleChange: function onPopupVisibleChange(val, context) {
          if (isDisabled.value) return;
          setVisible(val, context);
        },
        onBlur: function onBlur(val, context) {
          var _props2$onBlur;
          (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, {
            value: cascaderContext.value.value,
            inputValue: context.inputValue || "",
            e: context.e
          });
        },
        onFocus: function onFocus(val, context) {
          var _props2$onFocus;
          (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, {
            value: cascaderContext.value.value,
            e: context.e
          });
        },
        onClear: function onClear() {
          closeIconClickEffect(cascaderContext.value);
        }
      });
      return createVNode(SelectInput, mergeProps({
        "class": cascaderClassNames.value,
        "value": displayValue.value,
        "inputValue": visible ? inputVal : "",
        "popupVisible": visible,
        "keys": props2.keys,
        "allowInput": isFilterable.value,
        "min-collapsed-num": props2.minCollapsedNum,
        "collapsed-items": props2.collapsedItems,
        "readonly": isReadonly.value,
        "disabled": isDisabled.value,
        "clearable": props2.clearable,
        "placeholder": inputPlaceholder.value,
        "multiple": props2.multiple,
        "loading": props2.loading,
        "status": props2.status,
        "tips": props2.tips,
        "borderless": props2.borderless,
        "label": renderLabel,
        "valueDisplay": renderValueDisplay,
        "prefixIcon": props2.prefixIcon,
        "suffix": props2.suffix,
        "suffixIcon": function suffixIcon() {
          return renderSuffixIcon();
        },
        "popupProps": _objectSpread(_objectSpread({}, props2.popupProps), {}, {
          overlayInnerStyle: panels.value.length && !props2.loading ? {
            width: "auto"
          } : "",
          overlayClassName: [overlayClassName.value, (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.overlayClassName]
        }),
        "inputProps": _objectSpread({
          size: props2.size
        }, props2.inputProps),
        "tagInputProps": _objectSpread({
          size: props2.size
        }, props2.tagInputProps),
        "tagProps": _objectSpread({}, props2.tagProps)
      }, selectInputEvents.value), {
        label: slots.label,
        suffix: slots.suffix,
        prefixIcon: slots.prefixIcon,
        panel: function panel() {
          return createVNode(Fragment, null, [renderTNodeJSX("panelTopContent"), createVNode(TCascaderSubPanel, {
            "option": props2.option,
            "options": props2.options,
            "empty": props2.empty,
            "visible": visible,
            "trigger": props2.trigger,
            "loading": props2.loading,
            "loadingText": props2.loadingText,
            "cascaderContext": cascaderContext.value
          }, {
            option: slots.option,
            empty: slots.empty,
            loadingText: slots.loadingText
          }), renderTNodeJSX("panelBottomContent")]);
        },
        collapsedItems: slots.collapsedItems
      });
    };
  }
});

export { _Cascader as default };
//# sourceMappingURL=cascader.js.map
