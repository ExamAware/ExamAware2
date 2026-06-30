/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, computed, createVNode, mergeProps } from 'vue';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isObject } from 'lodash-es';
import { TagInput } from '../../tag-input/index.js';
import { Loading } from '../../loading/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../../_chunks/dep-aa34a263.js';
import { u as useDisabled } from '../../_chunks/dep-f7dd3c12.js';
import '../../_chunks/dep-880d05b9.js';
import { u as useReadonly } from '../../_chunks/dep-47b13687.js';
import { u as useEventForward } from '../../_chunks/dep-4d7b9152.js';
import '../../tag-input/tag-input.js';
import 'tdesign-icons-vue-next';
import '../../input/index.js';
import '../../input/input.js';
import '../../input/props.js';
import '../../_chunks/dep-2accc95a.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import '../../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../../_chunks/dep-3a7a2ef1.js';
import '../../input/hooks/useInput.js';
import '../../form/consts/index.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../_chunks/dep-51e5a827.js';
import '../../input/hooks/useLengthLimit.js';
import '../../_chunks/dep-8295e674.js';
import '../../_chunks/dep-80a99546.js';
import '../../input/hooks/useInputEventHandler.js';
import '../../input/hooks/useInputWidth.js';
import '../../_chunks/dep-80a77612.js';
import '../../input/input-group.js';
import '../../input/input-group-props.js';
import '../../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../../tag-input/props.js';
import '../../tag-input/hooks/useDragSorter.js';
import '../../tag-input/hooks/useHover.js';
import '../../tag-input/hooks/useTagScroll.js';
import '../../tag-input/hooks/useTagList.js';
import '../../tag/index.js';
import '../../tag/tag.js';
import 'tinycolor2';
import '../../tag/props.js';
import '../../tag/check-tag.js';
import '../../tag/check-tag-props.js';
import '../../_chunks/dep-30c631d1.js';
import '../../tag/check-tag-group.js';
import '../../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../../loading/directive.js';
import '../../loading/plugin.js';
import '../../_chunks/dep-ee693784.js';
import '../../loading/icon/gradient.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';

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
    var _context$slots = context.slots;
      _context$slots.tips;
      var slots = _objectWithoutProperties(_context$slots, _excluded);
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
//# sourceMappingURL=useMultiple.js.map
