/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, reactive, computed, nextTick, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { CloseCircleFilledIcon } from 'tdesign-icons-vue-next';
import { Input } from '../input/index.mjs';
import props from './props.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { u as usePrefixClass, a as useTNodeJSX, i as useGlobalIcon, e as useDisabled, n as useReadonly, k as useDefaultValue, o as useEventForward } from '../_chunks/dep-7673347f.mjs';
import './hooks/index.mjs';
import { isArray } from 'lodash-es';
import { useHover } from './hooks/useHover.mjs';
import { useDragSorter } from './hooks/useDragSorter.mjs';
import { useTagScroll } from './hooks/useTagScroll.mjs';
import { useTagList } from './hooks/useTagList.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../input/input.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import './style/css.mjs';
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
    NAME_CLASS: usePrefixClass("tag-input"),
    CLEAR_CLASS: usePrefixClass("tag-input__suffix-clear"),
    BREAK_LINE_CLASS: usePrefixClass("tag-input--break-line")
  };
};
var _TagInput = defineComponent({
  name: "TTagInput",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = useTNodeJSX();
    var _useComponentClassNam = useComponentClassName(),
      NAME_CLASS = _useComponentClassNam.NAME_CLASS,
      CLEAR_CLASS = _useComponentClassNam.CLEAR_CLASS,
      BREAK_LINE_CLASS = _useComponentClassNam.BREAK_LINE_CLASS;
    var _useGlobalIcon = useGlobalIcon({
        CloseCircleFilledIcon: CloseCircleFilledIcon
      }),
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
    var isDisabled = useDisabled();
    var isReadonly = useReadonly();
    var _toRefs = toRefs(props2),
      inputValue = _toRefs.inputValue,
      inputProps = _toRefs.inputProps,
      borderless = _toRefs.borderless,
      size = _toRefs.size,
      tips = _toRefs.tips,
      status = _toRefs.status,
      suffix = _toRefs.suffix,
      autoWidth = _toRefs.autoWidth,
      onPaste = _toRefs.onPaste;
    var _useDefaultValue = useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 2),
      tInputValue = _useDefaultValue2[0],
      setTInputValue = _useDefaultValue2[1];
    var _toRefs2 = toRefs(props2),
      excessTagsDisplayType = _toRefs2.excessTagsDisplayType,
      clearable = _toRefs2.clearable,
      placeholder = _toRefs2.placeholder;
    var _useHover = useHover({
        readonly: isReadonly.value,
        disabled: isDisabled.value,
        onMouseenter: props2.onMouseenter,
        onMouseleave: props2.onMouseleave
      }),
      isHover = _useHover.isHover,
      addHover = _useHover.addHover,
      cancelHover = _useHover.cancelHover;
    var isComposition = ref(false);
    var _useConfig = useConfig(),
      classPrefix = _useConfig.classPrefix;
    var isFocused = ref(false);
    var _useDragSorter = useDragSorter(_objectSpread(_objectSpread({}, props2), {}, {
        sortOnDraggable: props2.dragSort,
        onDragOverCheck: {
          x: true,
          targetClassNameRegExp: new RegExp("^".concat(classPrefix.value, "-tag"))
        }
      })),
      getDragProps = _useDragSorter.getDragProps;
    var _useTagScroll = useTagScroll(props2),
      scrollToRight = _useTagScroll.scrollToRight,
      onWheel = _useTagScroll.onWheel,
      scrollToRightOnEnter = _useTagScroll.scrollToRightOnEnter,
      scrollToLeftOnLeave = _useTagScroll.scrollToLeftOnLeave,
      tagInputRef = _useTagScroll.tagInputRef,
      isScrollable = _useTagScroll.isScrollable;
    var _useTagList = useTagList(reactive(_objectSpread(_objectSpread({}, toRefs(props2)), {}, {
        getDragProps: getDragProps
      }))),
      tagValue = _useTagList.tagValue,
      onInnerEnter = _useTagList.onInnerEnter,
      onInputBackspaceKeyUp = _useTagList.onInputBackspaceKeyUp,
      onInputBackspaceKeyDown = _useTagList.onInputBackspaceKeyDown,
      clearAll = _useTagList.clearAll,
      renderLabel = _useTagList.renderLabel,
      _onClose = _useTagList.onClose;
    var classes = computed(function () {
      var isEmpty = !(isArray(tagValue.value) && tagValue.value.length);
      return [NAME_CLASS.value, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, BREAK_LINE_CLASS.value, excessTagsDisplayType.value === "break-line"), "".concat(classPrefix.value, "-is-empty"), isEmpty), "".concat(classPrefix.value, "-tag-input--with-tag"), !isEmpty), "".concat(classPrefix.value, "-tag-input--drag-sort"), props2.dragSort && !isReadonly.value && !isDisabled.value)];
    });
    var tagInputPlaceholder = computed(function () {
      var _tagValue$value;
      return !((_tagValue$value = tagValue.value) !== null && _tagValue$value !== void 0 && _tagValue$value.length) ? placeholder.value : "";
    });
    var showClearIcon = computed(function () {
      var _tagValue$value2;
      return Boolean(!isReadonly.value && !isDisabled.value && clearable.value && isHover.value && (((_tagValue$value2 = tagValue.value) === null || _tagValue$value2 === void 0 ? void 0 : _tagValue$value2.length) || tInputValue.value));
    });
    var onInputEnter = function onInputEnter(value, context) {
      var _context$e, _context$e$preventDef;
      (_context$e = context.e) === null || _context$e === void 0 || (_context$e$preventDef = _context$e.preventDefault) === null || _context$e$preventDef === void 0 || _context$e$preventDef.call(_context$e);
      setTInputValue("", {
        e: context.e,
        trigger: "enter"
      });
      !isComposition.value && onInnerEnter(value, context);
      nextTick(function () {
        scrollToRight();
        isComposition.value = false;
      });
    };
    var onInputCompositionstart = function onInputCompositionstart(value, context) {
      var _inputProps$value, _inputProps$value$onC;
      isComposition.value = true;
      (_inputProps$value = inputProps.value) === null || _inputProps$value === void 0 || (_inputProps$value$onC = _inputProps$value.onCompositionstart) === null || _inputProps$value$onC === void 0 || _inputProps$value$onC.call(_inputProps$value, value, context);
    };
    var onInputCompositionend = function onInputCompositionend(value, context) {
      var _inputProps$value2, _inputProps$value2$on;
      isComposition.value = false;
      (_inputProps$value2 = inputProps.value) === null || _inputProps$value2 === void 0 || (_inputProps$value2$on = _inputProps$value2.onCompositionend) === null || _inputProps$value2$on === void 0 || _inputProps$value2$on.call(_inputProps$value2, value, context);
    };
    var onClick = function onClick(ctx) {
      var _tagInputRef$value, _props2$onClick;
      if (isDisabled.value) return;
      isFocused.value = true;
      (_tagInputRef$value = tagInputRef.value) === null || _tagInputRef$value === void 0 || _tagInputRef$value.focus();
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, ctx);
    };
    var onClearClick = function onClearClick(context) {
      var _props2$onClear;
      clearAll(context);
      setTInputValue("", {
        e: context.e,
        trigger: "clear"
      });
      (_props2$onClear = props2.onClear) === null || _props2$onClear === void 0 || _props2$onClear.call(props2, context);
    };
    var onMouseEnter = function onMouseEnter(context) {
      addHover(context);
      scrollToRightOnEnter();
    };
    var onMouseLeave = function onMouseLeave(context) {
      cancelHover(context);
      scrollToLeftOnLeave();
    };
    var onInnerFocus = function onInnerFocus(inputValue2, context) {
      var _props2$onFocus;
      if (isFocused.value) return;
      isFocused.value = true;
      (_props2$onFocus = props2.onFocus) === null || _props2$onFocus === void 0 || _props2$onFocus.call(props2, tagValue.value, {
        e: context.e,
        inputValue: inputValue2
      });
    };
    var onInnerBlur = function onInnerBlur(inputValue2, context) {
      var _props2$onBlur;
      isFocused.value = false;
      setTInputValue("", {
        e: context.e,
        trigger: "blur"
      });
      (_props2$onBlur = props2.onBlur) === null || _props2$onBlur === void 0 || _props2$onBlur.call(props2, tagValue.value, {
        e: context.e,
        inputValue: inputValue2
      });
    };
    var onInnerChange = function onInnerChange(val, context) {
      setTInputValue(val, _objectSpread(_objectSpread({}, context), {}, {
        trigger: "input"
      }));
    };
    watch(function () {
      return isScrollable.value;
    }, function (v) {
      if (props2.excessTagsDisplayType !== "scroll") return;
      var scrollElementClass = "".concat(classPrefix.value, "-input__prefix");
      var scrollElement = tagInputRef.value.$el.querySelector(".".concat(scrollElementClass));
      if (v) scrollElement.classList.add("".concat(scrollElementClass, "--scrollable"));else scrollElement.classList.remove("".concat(scrollElementClass, "--scrollable"));
    });
    return function () {
      var _inputProps$value3, _tagValue$value3;
      var suffixIconNode = showClearIcon.value ? createVNode(CloseCircleFilledIcon$1, {
        "class": CLEAR_CLASS.value,
        "onClick": onClearClick
      }, null) : renderTNodeJSX("suffixIcon");
      var prefixIconNode = renderTNodeJSX("prefixIcon");
      var suffixClass = "".concat(classPrefix.value, "-tag-input__with-suffix-icon");
      if (suffixIconNode && !classes.value.includes(suffixClass)) {
        classes.value.push(suffixClass);
      }
      var displayNode = renderTNodeJSX("valueDisplay", {
        params: {
          value: tagValue.value,
          onClose: function onClose(index) {
            return _onClose({
              index: index
            });
          }
        }
      });
      var _label = renderTNodeJSX("label", {
        silent: true
      });
      var readonly = isReadonly.value || ((_inputProps$value3 = inputProps.value) === null || _inputProps$value3 === void 0 ? void 0 : _inputProps$value3.readonly);
      var inputEvents = useEventForward(inputProps.value, {
        onWheel: onWheel,
        onChange: onInnerChange,
        onPaste: onPaste.value,
        onEnter: onInputEnter,
        onKeyup: onInputBackspaceKeyUp,
        onKeydown: onInputBackspaceKeyDown,
        onMouseenter: onMouseEnter,
        onMouseleave: onMouseLeave,
        onFocus: onInnerFocus,
        onBlur: onInnerBlur,
        onClick: onClick,
        onCompositionstart: onInputCompositionstart,
        onCompositionend: onInputCompositionend
      });
      return createVNode(Input, mergeProps({
        "ref": tagInputRef,
        "borderless": borderless.value,
        "readonly": readonly,
        "showInput": !readonly || !tagValue.value || !((_tagValue$value3 = tagValue.value) !== null && _tagValue$value3 !== void 0 && _tagValue$value3.length),
        "value": tInputValue.value,
        "autoWidth": true,
        "size": size.value,
        "disabled": isDisabled.value,
        "label": function label() {
          return renderLabel({
            displayNode: displayNode,
            label: _label
          });
        },
        "class": classes.value,
        "tips": tips.value,
        "status": status.value,
        "placeholder": tagInputPlaceholder.value,
        "suffix": suffix.value,
        "suffixIcon": function suffixIcon() {
          return suffixIconNode;
        },
        "prefixIcon": function prefixIcon() {
          return prefixIconNode;
        },
        "keepWrapperWidth": !autoWidth.value
      }, inputEvents.value), {
        suffix: slots.suffix
      });
    };
  }
});

export { _TagInput as default };
//# sourceMappingURL=tag-input.mjs.map
