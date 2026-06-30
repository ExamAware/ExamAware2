/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, watch, onMounted, onBeforeUnmount, createVNode, mergeProps } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Popup } from '../popup/index.js';
import props from './props.js';
import { useMultiple } from './hooks/useMultiple.js';
import { useOverlayInnerStyle } from './hooks/useOverlayInnerStyle.js';
import { useSingle } from './hooks/useSingle.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../_chunks/dep-80a99546.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../tag-input/props.js';
import '../_chunks/dep-aa34a263.js';
import '../_chunks/dep-4d7b9152.js';
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
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
//# sourceMappingURL=select-input.js.map
