/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var radio_props = require('./props.js');
var radio_radio = require('./radio.js');
var radio_consts_index = require('./consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
require('../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var omit = require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-bc848944.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _RadioButton = Vue.defineComponent({
  name: "TRadioButton",
  inheritAttrs: false,
  props: radio_props["default"],
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    Vue.provide(radio_consts_index.RadioButtonInjectionKey, Vue.reactive({}));
    var radioProps = Vue.computed(function () {
      var res = _objectSpread(_objectSpread({}, props2), omit.omit(attrs, Object.keys(attrs).filter(function (key) {
        return key.startsWith("on");
      })));
      return res;
    });
    var renderContent = index.useContent();
    return function () {
      var _slot;
      return Vue.createVNode(radio_radio["default"], radioProps.value, _isSlot(_slot = renderContent("default", "label")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

exports["default"] = _RadioButton;
//# sourceMappingURL=radio-button.js.map
