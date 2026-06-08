/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var popup_index = require('../popup/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var rangeInput_rangeInput = require('./range-input.js');
var rangeInput_rangeInputPopupProps = require('./range-input-popup-props.js');
var selectInput_hooks_useOverlayInnerStyle = require('../select-input/hooks/useOverlayInnerStyle.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
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
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('tdesign-icons-vue-next');
require('../input/index.js');
require('../input/input.js');
require('@babel/runtime/helpers/objectWithoutProperties');
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
require('./props.js');
require('../_chunks/dep-bf113ca4.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _RangeInputPopup = Vue.defineComponent({
  name: "TRangeInputPopup",
  props: rangeInput_rangeInputPopupProps["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("range-input-popup");
    var _useOverlayInnerStyle = selectInput_hooks_useOverlayInnerStyle.useOverlayInnerStyle(props2),
      tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle,
      innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible,
      onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
    var popupClasses = Vue.computed(function () {
      return [COMPONENT_NAME.value, _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--visible"), props2.popupVisible || innerPopupVisible.value)];
    });
    return function () {
      return Vue.createVNode("div", {
        "class": popupClasses.value
      }, [Vue.createVNode(popup_index.Popup, Vue.mergeProps({
        "hideEmptyPopup": true,
        "content": props2.panel,
        "trigger": "click",
        "placement": "bottom-left",
        "disabled": props2.disabled,
        "visible": props2.popupVisible || innerPopupVisible.value
      }, _objectSpread({
        overlayInnerStyle: tOverlayInnerStyle.value,
        onVisibleChange: onInnerPopupVisibleChange
      }, props2.popupProps)), {
        "default": function _default() {
          return [Vue.createVNode(rangeInput_rangeInput["default"], _objectSpread({
            value: props2.inputValue,
            onChange: props2.onInputChange,
            disabled: props2.disabled,
            label: props2.label,
            status: props2.status,
            tips: props2.tips
          }, props2.rangeInputProps), null)];
        }
      })]);
    };
  }
});

exports["default"] = _RangeInputPopup;
//# sourceMappingURL=range-input-popup.js.map
