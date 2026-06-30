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
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var input_index = require('../input/index.js');
var tagInput_props = require('./props.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$6 = require('../_chunks/dep-ecaaae91.js');
var index$4 = require('../_chunks/dep-f20044b8.js');
var index$2 = require('../_chunks/dep-874d2900.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-bc848944.js');
var index$5 = require('../_chunks/dep-bf113ca4.js');
var tagInput_hooks_useDragSorter = require('./hooks/useDragSorter.js');
var tagInput_hooks_useHover = require('./hooks/useHover.js');
var tagInput_hooks_useTagScroll = require('./hooks/useTagScroll.js');
var tagInput_hooks_useTagList = require('./hooks/useTagList.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../input/props.js');
require('../_chunks/dep-8382953f.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-0813861e.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../_chunks/dep-d62a674d.js');
require('../tag/index.js');
require('../tag/tag.js');
require('tinycolor2');
require('../tag/props.js');
require('../tag/check-tag.js');
require('../tag/check-tag-props.js');
require('../_chunks/dep-6280a7f6.js');
require('../tag/check-tag-group.js');
require('../tag/check-tag-group-props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useComponentClassName = function useComponentClassName() {
  return {
    NAME_CLASS: index$6.usePrefixClass("tag-input"),
    CLEAR_CLASS: index$6.usePrefixClass("tag-input__suffix-clear"),
    BREAK_LINE_CLASS: index$6.usePrefixClass("tag-input--break-line")
  };
};
var _TagInput = Vue.defineComponent({
  name: "TTagInput",
  props: tagInput_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = index.useTNodeJSX();
    var _useComponentClassNam = useComponentClassName(),
      NAME_CLASS = _useComponentClassNam.NAME_CLASS,
      CLEAR_CLASS = _useComponentClassNam.CLEAR_CLASS,
      BREAK_LINE_CLASS = _useComponentClassNam.BREAK_LINE_CLASS;
    var _useGlobalIcon = index$1.useGlobalIcon({
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon
      }),
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon;
    var isDisabled = index$2.useDisabled();
    var isReadonly = index$3.useReadonly();
    var _toRefs = Vue.toRefs(props2),
      inputValue = _toRefs.inputValue,
      inputProps = _toRefs.inputProps,
      borderless = _toRefs.borderless,
      size = _toRefs.size,
      tips = _toRefs.tips,
      status = _toRefs.status,
      suffix = _toRefs.suffix,
      autoWidth = _toRefs.autoWidth,
      onPaste = _toRefs.onPaste;
    var _useDefaultValue = index$4.useDefaultValue(inputValue, props2.defaultInputValue, props2.onInputChange, "inputValue"),
      _useDefaultValue2 = _slicedToArray__default["default"](_useDefaultValue, 2),
      tInputValue = _useDefaultValue2[0],
      setTInputValue = _useDefaultValue2[1];
    var _toRefs2 = Vue.toRefs(props2),
      excessTagsDisplayType = _toRefs2.excessTagsDisplayType,
      clearable = _toRefs2.clearable,
      placeholder = _toRefs2.placeholder;
    var _useHover = tagInput_hooks_useHover.useHover({
        readonly: isReadonly.value,
        disabled: isDisabled.value,
        onMouseenter: props2.onMouseenter,
        onMouseleave: props2.onMouseleave
      }),
      isHover = _useHover.isHover,
      addHover = _useHover.addHover,
      cancelHover = _useHover.cancelHover;
    var isComposition = Vue.ref(false);
    var _useConfig = configProvider_hooks_useConfig.useConfig(),
      classPrefix = _useConfig.classPrefix;
    var isFocused = Vue.ref(false);
    var _useDragSorter = tagInput_hooks_useDragSorter.useDragSorter(_objectSpread(_objectSpread({}, props2), {}, {
        sortOnDraggable: props2.dragSort,
        onDragOverCheck: {
          x: true,
          targetClassNameRegExp: new RegExp("^".concat(classPrefix.value, "-tag"))
        }
      })),
      getDragProps = _useDragSorter.getDragProps;
    var _useTagScroll = tagInput_hooks_useTagScroll.useTagScroll(props2),
      scrollToRight = _useTagScroll.scrollToRight,
      onWheel = _useTagScroll.onWheel,
      scrollToRightOnEnter = _useTagScroll.scrollToRightOnEnter,
      scrollToLeftOnLeave = _useTagScroll.scrollToLeftOnLeave,
      tagInputRef = _useTagScroll.tagInputRef,
      isScrollable = _useTagScroll.isScrollable;
    var _useTagList = tagInput_hooks_useTagList.useTagList(Vue.reactive(_objectSpread(_objectSpread({}, Vue.toRefs(props2)), {}, {
        getDragProps: getDragProps
      }))),
      tagValue = _useTagList.tagValue,
      onInnerEnter = _useTagList.onInnerEnter,
      onInputBackspaceKeyUp = _useTagList.onInputBackspaceKeyUp,
      onInputBackspaceKeyDown = _useTagList.onInputBackspaceKeyDown,
      clearAll = _useTagList.clearAll,
      renderLabel = _useTagList.renderLabel,
      _onClose = _useTagList.onClose;
    var classes = Vue.computed(function () {
      var isEmpty = !(isArray.isArray(tagValue.value) && tagValue.value.length);
      return [NAME_CLASS.value, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, BREAK_LINE_CLASS.value, excessTagsDisplayType.value === "break-line"), "".concat(classPrefix.value, "-is-empty"), isEmpty), "".concat(classPrefix.value, "-tag-input--with-tag"), !isEmpty), "".concat(classPrefix.value, "-tag-input--drag-sort"), props2.dragSort && !isReadonly.value && !isDisabled.value)];
    });
    var tagInputPlaceholder = Vue.computed(function () {
      var _tagValue$value;
      return !((_tagValue$value = tagValue.value) !== null && _tagValue$value !== void 0 && _tagValue$value.length) ? placeholder.value : "";
    });
    var showClearIcon = Vue.computed(function () {
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
      Vue.nextTick(function () {
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
    Vue.watch(function () {
      return isScrollable.value;
    }, function (v) {
      if (props2.excessTagsDisplayType !== "scroll") return;
      var scrollElementClass = "".concat(classPrefix.value, "-input__prefix");
      var scrollElement = tagInputRef.value.$el.querySelector(".".concat(scrollElementClass));
      if (v) scrollElement.classList.add("".concat(scrollElementClass, "--scrollable"));else scrollElement.classList.remove("".concat(scrollElementClass, "--scrollable"));
    });
    return function () {
      var _inputProps$value3, _tagValue$value3;
      var suffixIconNode = showClearIcon.value ? Vue.createVNode(CloseCircleFilledIcon, {
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
      var inputEvents = index$5.useEventForward(inputProps.value, {
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
      return Vue.createVNode(input_index.Input, Vue.mergeProps({
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

exports["default"] = _TagInput;
//# sourceMappingURL=tag-input.js.map
