/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var popup_index = require('../popup/index.js');
var selectInput_props = require('./props.js');
var selectInput_hooks_useMultiple = require('./hooks/useMultiple.js');
var selectInput_hooks_useOverlayInnerStyle = require('./hooks/useOverlayInnerStyle.js');
var selectInput_hooks_useSingle = require('./hooks/useSingle.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../tag-input/index.js');
require('../tag-input/tag-input.js');
require('tdesign-icons-vue-next');
require('../input/index.js');
require('../input/input.js');
require('../input/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-bc848944.js');
require('../input/hooks/useInput.js');
require('../form/consts/index.js');
require('../input/hooks/useLengthLimit.js');
require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../input/hooks/useInputEventHandler.js');
require('../input/hooks/useInputWidth.js');
require('../input/input-group.js');
require('../input/input-group-props.js');
require('../tag-input/props.js');
require('../_chunks/dep-f20044b8.js');
require('../_chunks/dep-bf113ca4.js');
require('../tag-input/hooks/useDragSorter.js');
require('../tag-input/hooks/useHover.js');
require('../tag-input/hooks/useTagScroll.js');
require('../tag-input/hooks/useTagList.js');
require('../tag/index.js');
require('../tag/tag.js');
require('tinycolor2');
require('../tag/props.js');
require('../tag/check-tag.js');
require('../tag/check-tag-props.js');
require('../_chunks/dep-6280a7f6.js');
require('../tag/check-tag-group.js');
require('../tag/check-tag-group-props.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-b5e1f81f.js');
require('../_chunks/dep-04599720.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useComponentClassName = function useComponentClassName() {
  return {
    NAME_CLASS: index.usePrefixClass("select-input"),
    BASE_CLASS_BORDERLESS: index.usePrefixClass("select-input--borderless"),
    BASE_CLASS_MULTIPLE: index.usePrefixClass("select-input--multiple"),
    BASE_CLASS_POPUP_VISIBLE: index.usePrefixClass("select-input--popup-visible"),
    BASE_CLASS_EMPTY: index.usePrefixClass("select-input--empty")
  };
};
var _SelectInput = Vue.defineComponent({
  name: "TSelectInput",
  props: _objectSpread(_objectSpread({}, selectInput_props["default"]), {}, {
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
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var selectInputRef = Vue.ref();
    var popupRef = Vue.ref();
    var _toRefs = Vue.toRefs(props2),
      multiple = _toRefs.multiple,
      value = _toRefs.value,
      popupVisible = _toRefs.popupVisible,
      borderless = _toRefs.borderless,
      popupProps = _toRefs.popupProps,
      panel = _toRefs.panel,
      allowInput = _toRefs.allowInput,
      status = _toRefs.status;
    var _useOverlayInnerStyle = selectInput_hooks_useOverlayInnerStyle.useOverlayInnerStyle(props2),
      tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
      innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
      onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
    var _useSingle = selectInput_hooks_useSingle.useSingle(props2, context, popupRef),
      isSingleFocus = _useSingle.isSingleFocus,
      commonInputProps = _useSingle.commonInputProps,
      onInnerClear = _useSingle.onInnerClear,
      renderSelectSingle = _useSingle.renderSelectSingle;
    var _useMultiple = selectInput_hooks_useMultiple.useMultiple(props2, context, popupRef),
      isMultipleFocus = _useMultiple.isMultipleFocus,
      tagInputRef = _useMultiple.tagInputRef,
      renderSelectMultiple = _useMultiple.renderSelectMultiple;
    var isFocus = Vue.computed(function () {
      return props2.multiple ? isMultipleFocus.value : isSingleFocus.value;
    });
    var classes = Vue.computed(function () {
      var _popupVisible$value;
      return ["".concat(NAME_CLASS.value), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, BASE_CLASS_MULTIPLE.value, multiple.value), BASE_CLASS_BORDERLESS.value, borderless.value), BASE_CLASS_POPUP_VISIBLE.value, (_popupVisible$value = popupVisible.value) !== null && _popupVisible$value !== void 0 ? _popupVisible$value : innerPopupVisible.value), BASE_CLASS_EMPTY.value, value.value instanceof Array ? !value.value.length : !value.value)];
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
    Vue.watch([isFocus], function (_ref2) {
      var _ref3 = _slicedToArray__default["default"](_ref2, 1),
        isFocus2 = _ref3[0];
      if (popupVisible.value) return;
      if (isFocus2) {
        selectInputRef.value.addEventListener("keydown", addKeyboardEventListener);
      } else {
        selectInputRef.value.removeEventListener("keydown", addKeyboardEventListener);
      }
    });
    Vue.onMounted(function () {
      if (!popupVisible.value && isFocus) {
        selectInputRef.value.addEventListener("keydown", addKeyboardEventListener);
      }
    });
    Vue.onBeforeUnmount(function () {
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
      var mainContent = Vue.createVNode(popup_index.Popup, Vue.mergeProps({
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
      return Vue.createVNode("div", {
        "ref": selectInputRef,
        "class": classes.value
      }, [mainContent, tipsNode && Vue.createVNode("div", {
        "class": tipsClasses
      }, [tipsNode])]);
    };
  }
});

exports["default"] = _SelectInput;
//# sourceMappingURL=select-input.js.map
