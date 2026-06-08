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
var dropdown_dropdownMenu = require('./dropdown-menu.js');
var dropdown_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var dropdown_hooks_useDropdownOptions = require('./hooks/useDropdownOptions.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isArray = require('../_chunks/dep-87589faa.js');
var omit = require('../_chunks/dep-ace0b57c.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
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
require('tdesign-icons-vue-next');
require('./dropdown-item.js');
require('./dropdown-item-props.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../divider/index.js');
require('../divider/divider.js');
require('../divider/props.js');
require('../_chunks/dep-31c76dc6.js');
require('../_chunks/dep-3565d523.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Dropdown = Vue.defineComponent({
  name: "TDropdown",
  props: dropdown_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderTNodeJSX = index.useTNodeJSX();
    var COMPONENT_NAME = index$1.usePrefixClass("dropdown");
    var popupElem = Vue.ref(null);
    var isPopupVisible = Vue.ref(false);
    var manualCloseTimeout = Vue.computed(function () {
      var _props2$popupProps, _delay$;
      var delay = (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.delay;
      if (isNumber.isNumber(delay)) return delay + 10;
      if (isArray.isArray(delay)) return ((_delay$ = delay[1]) !== null && _delay$ !== void 0 ? _delay$ : delay[0]) + 10;
      return 160;
    });
    var handleMenuClick = function handleMenuClick(data, context) {
      var _props2$onClick;
      if (props2.hideAfterItemClick) {
        var _props2$popupProps2, _props2$popupProps2$o, _props2$popupProps3, _props2$popupProps3$o;
        setTimeout(function () {
          return isPopupVisible.value = false;
        }, manualCloseTimeout.value);
        (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 || (_props2$popupProps2$o = _props2$popupProps2.onVisibleChange) === null || _props2$popupProps2$o === void 0 || _props2$popupProps2$o.call(_props2$popupProps2, false, context);
        (_props2$popupProps3 = props2.popupProps) === null || _props2$popupProps3 === void 0 || (_props2$popupProps3$o = _props2$popupProps3["on-visible-change"]) === null || _props2$popupProps3$o === void 0 || _props2$popupProps3$o.call(_props2$popupProps3, false, context);
      }
      props2 === null || props2 === void 0 || (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, data, context);
    };
    var handleVisibleChange = function handleVisibleChange(visible, context) {
      var _props2$popupProps4, _props2$popupProps4$o, _props2$popupProps5, _props2$popupProps5$o;
      isPopupVisible.value = visible;
      (_props2$popupProps4 = props2.popupProps) === null || _props2$popupProps4 === void 0 || (_props2$popupProps4$o = _props2$popupProps4.onVisibleChange) === null || _props2$popupProps4$o === void 0 || _props2$popupProps4$o.call(_props2$popupProps4, visible, context);
      (_props2$popupProps5 = props2.popupProps) === null || _props2$popupProps5 === void 0 || (_props2$popupProps5$o = _props2$popupProps5["on-visible-change"]) === null || _props2$popupProps5$o === void 0 || _props2$popupProps5$o.call(_props2$popupProps5, visible, context);
    };
    return function () {
      var _renderTNodeJSX, _props2$popupProps6;
      var trigger = (_renderTNodeJSX = renderTNodeJSX("default")) === null || _renderTNodeJSX === void 0 ? void 0 : _renderTNodeJSX[0];
      var options = dropdown_hooks_useDropdownOptions["default"](props2);
      var popupParams = _objectSpread(_objectSpread(_objectSpread({}, attrs), {}, {
        disabled: props2.disabled,
        placement: props2.placement,
        trigger: props2.trigger
      }, omit.omit(props2.popupProps, ["onVisibleChange", "on-visible-change"])), {}, {
        overlayInnerClassName: [COMPONENT_NAME.value, (_props2$popupProps6 = props2.popupProps) === null || _props2$popupProps6 === void 0 ? void 0 : _props2$popupProps6.overlayInnerClassName]
      });
      return Vue.createVNode(popup_index.Popup, Vue.mergeProps({
        "destroyOnClose": true,
        "ref": popupElem,
        "visible": isPopupVisible.value,
        "onVisibleChange": handleVisibleChange,
        "expandAnimation": true
      }, popupParams), {
        "default": function _default() {
          return [trigger];
        },
        content: function content() {
          var _options$value;
          return Vue.createVNode(Vue.Fragment, null, [renderTNodeJSX("panelTopContent"), (_options$value = options.value) !== null && _options$value !== void 0 && _options$value.length ? Vue.createVNode(dropdown_dropdownMenu["default"], Vue.mergeProps(omit.omit(props2, "onClick"), {
            "options": options.value,
            "onClick": handleMenuClick
          }), null) : null, renderTNodeJSX("panelBottomContent")]);
        }
      });
    };
  }
});

exports["default"] = _Dropdown;
//# sourceMappingURL=dropdown.js.map
