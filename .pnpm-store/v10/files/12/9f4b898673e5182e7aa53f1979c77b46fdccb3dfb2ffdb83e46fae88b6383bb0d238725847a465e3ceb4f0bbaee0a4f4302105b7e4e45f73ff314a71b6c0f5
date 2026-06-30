/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, createVNode, mergeProps } from 'vue';
import { _ as _objectWithoutProperties } from '../../_chunks/dep-0dcc778a.mjs';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { isObject } from 'lodash-es';
import { TagInput } from '../../tag-input/index.mjs';
import { Loading } from '../../loading/index.mjs';
import { u as usePrefixClass, k as useDefaultValue, e as useDisabled, n as useReadonly, o as useEventForward } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../tag-input/tag-input.mjs';
import 'tdesign-icons-vue-next';
import '../../input/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import './style/css.mjs';
import '../../tag-input/props.mjs';
import '../../tag-input/hooks/index.mjs';
import '../../tag-input/hooks/useDragSorter.mjs';
import '../../tag-input/hooks/useHover.mjs';
import '../../tag-input/hooks/useTagScroll.mjs';
import '../../tag-input/hooks/useTagList.mjs';
import '../../tag/index.mjs';
import '../../tag/tag.mjs';
import '../../_chunks/dep-b31d8258.mjs';
import '../../tag/props.mjs';
import '../../tag/check-tag.mjs';
import '../../tag/check-tag-props.mjs';
import '../../tag/check-tag-group.mjs';
import '../../tag/check-tag-group-props.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../loading/props.mjs';

var _excluded = ["tips"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_KEYS = {
  label: "label",
  key: "key",
  children: "children"
};
function useMultiple(props, context, popupRef) {
  var _toRefs = toRefs(props),
    inputValue = _toRefs.inputValue;
  var classPrefix = usePrefixClass();
  var tagInputRef = ref();
  var isMultipleFocus = ref(props.autofocus);
  var _useDefaultValue = useDefaultValue(inputValue, props.defaultInputValue, props.onInputChange, "inputValue"),
    _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
    tInputValue = _useDefaultValue2[0],
    setTInputValue = _useDefaultValue2[1];
  var disable = useDisabled();
  var isReadonly = useReadonly();
  var iKeys = computed(function () {
    return _objectSpread(_objectSpread({}, DEFAULT_KEYS), props.keys);
  });
  var tags = computed(function () {
    if (!(props.value instanceof Array)) {
      return isObject(props.value) ? [props.value[iKeys.value.label]] : [props.value];
    }
    return props.value.map(function (item) {
      return isObject(item) ? item[iKeys.value.label] : item;
    });
  });
  var tPlaceholder = computed(function () {
    return !tags.value || !tags.value.length ? props.placeholder : "";
  });
  var onTagInputChange = function onTagInputChange(val, context2) {
    var _props$onTagChange;
    if (context2.trigger === "tag-remove") {
      var _context2$e;
      (_context2$e = context2.e) === null || _context2$e === void 0 || _context2$e.stopPropagation();
    }
    (_props$onTagChange = props.onTagChange) === null || _props$onTagChange === void 0 || _props$onTagChange.call(props, val, context2);
  };
  var onInputChange = function onInputChange(val, ctx) {
    if (ctx.trigger === "enter" || ctx.trigger === "blur") return;
    setTInputValue(val, {
      trigger: ctx.trigger,
      e: ctx.e
    });
  };
  var onBlur = function onBlur(val, ctx) {
    var _popupRef$value, _props$onBlur;
    var overlayState = (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 ? void 0 : _popupRef$value.getOverlayState();
    if (overlayState !== null && overlayState !== void 0 && overlayState.hover) return;
    isMultipleFocus.value = false;
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, props.value, _objectSpread(_objectSpread({}, ctx), {}, {
      tagInputValue: val
    }));
  };
  var onFocus = function onFocus(val, ctx) {
    var _popupRef$value2, _props$onFocus;
    var overlayState = (_popupRef$value2 = popupRef.value) === null || _popupRef$value2 === void 0 ? void 0 : _popupRef$value2.getOverlayState();
    if (isMultipleFocus.value || overlayState !== null && overlayState !== void 0 && overlayState.hover) return;
    isMultipleFocus.value = true;
    var params = _objectSpread(_objectSpread({}, ctx), {}, {
      tagInputValue: val
    });
    (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, props.value, params);
  };
  var onEnter = function onEnter(val, ctx) {
    var _props$onEnter;
    var params = _objectSpread(_objectSpread({}, ctx), {}, {
      tagInputValue: val
    });
    (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, props.value, params);
  };
  var renderSelectMultiple = function renderSelectMultiple(p) {
    var tagInputProps = _objectSpread(_objectSpread({}, p.commonInputProps), {}, {
      tagProps: props.tagProps,
      label: props.label,
      autoWidth: props.autoWidth,
      readonly: isReadonly.value,
      placeholder: tPlaceholder.value,
      minCollapsedNum: props.minCollapsedNum,
      collapsedItems: props.collapsedItems,
      tag: props.tag,
      value: tags.value,
      valueDisplay: props.valueDisplay,
      inputValue: p.popupVisible && p.allowInput ? tInputValue.value : "",
      inputProps: _objectSpread({
        readonly: !props.allowInput || isReadonly.value,
        inputClass: _defineProperty({}, "".concat(classPrefix.value, "-input--focused"), p.popupVisible)
      }, props.inputProps),
      suffixIcon: !disable.value && props.loading ? function () {
        return createVNode(Loading, {
          "loading": true,
          "size": "small"
        }, null);
      } : props.suffixIcon
    }, props.tagInputProps);
    var tagInputEvents = useEventForward(tagInputProps, {
      onInputChange: onInputChange,
      onChange: onTagInputChange,
      onClear: p.onInnerClear,
      onBlur: onBlur,
      onEnter: onEnter,
      onFocus: onFocus
    });
    var _context$slots = context.slots,
      _tips = _context$slots.tips,
      slots = _objectWithoutProperties(_context$slots, _excluded);
    return createVNode(TagInput, mergeProps({
      "ref": tagInputRef
    }, tagInputEvents.value), slots);
  };
  return {
    tags: tags,
    tPlaceholder: tPlaceholder,
    tagInputRef: tagInputRef,
    isMultipleFocus: isMultipleFocus,
    multipleInputValue: tInputValue,
    renderSelectMultiple: renderSelectMultiple
  };
}

export { useMultiple };
//# sourceMappingURL=useMultiple.mjs.map
