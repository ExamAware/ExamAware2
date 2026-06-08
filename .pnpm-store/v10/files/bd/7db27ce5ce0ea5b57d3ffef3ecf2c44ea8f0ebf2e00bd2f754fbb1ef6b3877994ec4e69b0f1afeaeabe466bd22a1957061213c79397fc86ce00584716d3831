/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode, mergeProps, Fragment } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import TCascaderSubPanel from './components/Panel.mjs';
import { SelectInput } from '../select-input/index.mjs';
import FakeArrow from '../common-components/fake-arrow.mjs';
import props from './props.mjs';
import './utils/index.mjs';
import { u as usePrefixClass, c as useCommonClassName, e as useDisabled, n as useReadonly, a as useTNodeJSX, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import { useCascaderContext } from './hooks/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { getMultipleContent, getSingleContent, getPanels } from './utils/helper.mjs';
import { getFakeArrowIconClass } from './utils/className.mjs';
import { handleRemoveTagEffect, closeIconClickEffect } from './utils/effect.mjs';
import '../_chunks/dep-257428bc.mjs';
import './components/Item.mjs';
import 'tdesign-icons-vue-next';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../checkbox/group.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../checkbox/checkbox-group-props.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import './style/css.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
import '../tag/index.mjs';
import '../tag/tag.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../tag/props.mjs';
import '../tag/check-tag.mjs';
import '../tag/check-tag-props.mjs';
import '../tag/check-tag-group.mjs';
import '../tag/check-tag-group-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';
import '../_chunks/dep-225a059b.mjs';
import 'mitt';
import '../_chunks/dep-07809d3f.mjs';
import '../_chunks/dep-88e5a7b0.mjs';

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
//# sourceMappingURL=cascader.mjs.map
