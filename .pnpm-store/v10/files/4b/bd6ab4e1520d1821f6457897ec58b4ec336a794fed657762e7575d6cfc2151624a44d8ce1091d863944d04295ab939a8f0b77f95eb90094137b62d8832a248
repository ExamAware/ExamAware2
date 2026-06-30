/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, watch, onMounted, onBeforeUnmount, createVNode, mergeProps } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { Popup } from '../popup/index.mjs';
import props from './props.mjs';
import './hooks/index.mjs';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import { useOverlayInnerStyle } from './hooks/useOverlayInnerStyle.mjs';
import { useSingle } from './hooks/useSingle.mjs';
import { useMultiple } from './hooks/useMultiple.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import 'lodash-es';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
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
import '../input/index.mjs';
import '../input/input.mjs';
import 'tdesign-icons-vue-next';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../loading/props.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useComponentClassName = function useComponentClassName() {
  return {
    NAME_CLASS: usePrefixClass("select-input"),
    BASE_CLASS_BORDERLESS: usePrefixClass("select-input--borderless"),
    BASE_CLASS_MULTIPLE: usePrefixClass("select-input--multiple"),
    BASE_CLASS_POPUP_VISIBLE: usePrefixClass("select-input--popup-visible"),
    BASE_CLASS_EMPTY: usePrefixClass("select-input--empty")
  };
};
var _SelectInput = defineComponent({
  name: "TSelectInput",
  props: _objectSpread(_objectSpread({}, props), {}, {
    valueDisplayOptions: {
      type: Object
    }
  }),
  setup: function setup(props2, context) {
    var _useComponentClassNam = useComponentClassName(),
      NAME_CLASS = _useComponentClassNam.NAME_CLASS,
      BASE_CLASS_BORDERLESS = _useComponentClassNam.BASE_CLASS_BORDERLESS,
      BASE_CLASS_MULTIPLE = _useComponentClassNam.BASE_CLASS_MULTIPLE,
      BASE_CLASS_POPUP_VISIBLE = _useComponentClassNam.BASE_CLASS_POPUP_VISIBLE,
      BASE_CLASS_EMPTY = _useComponentClassNam.BASE_CLASS_EMPTY;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var selectInputRef = ref();
    var popupRef = ref();
    var _toRefs = toRefs(props2),
      multiple = _toRefs.multiple,
      value = _toRefs.value,
      popupVisible = _toRefs.popupVisible,
      borderless = _toRefs.borderless,
      popupProps = _toRefs.popupProps,
      panel = _toRefs.panel,
      allowInput = _toRefs.allowInput,
      status = _toRefs.status;
    var _useOverlayInnerStyle = useOverlayInnerStyle(props2),
      tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
      innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
      onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
    var _useSingle = useSingle(props2, context, popupRef),
      isSingleFocus = _useSingle.isSingleFocus,
      commonInputProps = _useSingle.commonInputProps,
      onInnerClear = _useSingle.onInnerClear,
      renderSelectSingle = _useSingle.renderSelectSingle;
    var _useMultiple = useMultiple(props2, context, popupRef),
      isMultipleFocus = _useMultiple.isMultipleFocus,
      tagInputRef = _useMultiple.tagInputRef,
      renderSelectMultiple = _useMultiple.renderSelectMultiple;
    var isFocus = computed(function () {
      return props2.multiple ? isMultipleFocus.value : isSingleFocus.value;
    });
    var classes = computed(function () {
      var _popupVisible$value;
      return ["".concat(NAME_CLASS.value), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, BASE_CLASS_MULTIPLE.value, multiple.value), BASE_CLASS_BORDERLESS.value, borderless.value), BASE_CLASS_POPUP_VISIBLE.value, (_popupVisible$value = popupVisible.value) !== null && _popupVisible$value !== void 0 ? _popupVisible$value : innerPopupVisible.value), BASE_CLASS_EMPTY.value, value.value instanceof Array ? !value.value.length : !value.value)];
    });
    var addKeyboardEventListener = function addKeyboardEventListener(e) {
      var _e$key;
      var code = e.code || ((_e$key = e.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
      if (/(ArrowDown|ArrowUp)/.test(code) && !popupVisible.value) {
        var _props2$onPopupVisibl;
        var ctx = _objectSpread(_objectSpread({}, context), {}, {
          trigger: "trigger-element-focus"
        });
        (_props2$onPopupVisibl = props2.onPopupVisibleChange) === null || _props2$onPopupVisibl === void 0 || _props2$onPopupVisibl.call(props2, true, ctx);
      }
    };
    watch([isFocus], function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        isFocus2 = _ref3[0];
      if (popupVisible.value) return;
      if (isFocus2) {
        selectInputRef.value.addEventListener("keydown", addKeyboardEventListener);
      } else {
        selectInputRef.value.removeEventListener("keydown", addKeyboardEventListener);
      }
    });
    onMounted(function () {
      if (!popupVisible.value && isFocus) {
        selectInputRef.value.addEventListener("keydown", addKeyboardEventListener);
      }
    });
    onBeforeUnmount(function () {
      var _selectInputRef$value;
      (_selectInputRef$value = selectInputRef.value) === null || _selectInputRef$value === void 0 || _selectInputRef$value.removeEventListener("keydown", addKeyboardEventListener);
    });
    var onOverlayClick = function onOverlayClick(ctx) {
      var _ctx$e, _tagInputRef$value, _tagInputRef$value$fo;
      (_ctx$e = ctx.e) === null || _ctx$e === void 0 || _ctx$e.stopPropagation();
      if (ctx.e.target.tabIndex >= 0) return;
      if (props2.multiple) (_tagInputRef$value = tagInputRef.value) === null || _tagInputRef$value === void 0 || (_tagInputRef$value$fo = _tagInputRef$value.focus) === null || _tagInputRef$value$fo === void 0 || _tagInputRef$value$fo.call(_tagInputRef$value);
    };
    context.expose({
      popupRef: popupRef,
      allowInput: allowInput
    });
    return function () {
      var _popupVisible$value2, _popupProps$value;
      var visibleProps = {
        visible: (_popupVisible$value2 = popupVisible.value) !== null && _popupVisible$value2 !== void 0 ? _popupVisible$value2 : innerPopupVisible.value
      };
      var mainContent = createVNode(Popup, mergeProps({
        "ref": popupRef,
        "trigger": ((_popupProps$value = popupProps.value) === null || _popupProps$value === void 0 ? void 0 : _popupProps$value.trigger) || "click",
        "placement": "bottom-left"
      }, visibleProps, {
        "content": panel.value,
        "hideEmptyPopup": true
      }, _objectSpread(_objectSpread({
        onVisibleChange: onInnerPopupVisibleChange,
        onOverlayClick: onOverlayClick
      }, popupProps.value), {}, {
        overlayInnerStyle: tOverlayInnerStyle.value
      })), _objectSpread({
        "default": function _default() {
          return [multiple.value ? renderSelectMultiple({
            commonInputProps: commonInputProps.value,
            onInnerClear: onInnerClear,
            popupVisible: visibleProps.visible,
            allowInput: allowInput.value
          }) : renderSelectSingle(visibleProps.visible)];
        }
      }, _objectSpread(_objectSpread({}, context.slots), {}, {
        content: context.slots.panel
      })));
      var tipsNode = renderTNodeJSX("tips");
      var tipsClasses = ["".concat(classPrefix.value, "-input__tips"), "".concat(classPrefix.value, "-tips"), "".concat(classPrefix.value, "-is-").concat(status.value)];
      return createVNode("div", {
        "ref": selectInputRef,
        "class": classes.value
      }, [mainContent, tipsNode && createVNode("div", {
        "class": tipsClasses
      }, [tipsNode])]);
    };
  }
});

export { _SelectInput as default };
//# sourceMappingURL=select-input.mjs.map
