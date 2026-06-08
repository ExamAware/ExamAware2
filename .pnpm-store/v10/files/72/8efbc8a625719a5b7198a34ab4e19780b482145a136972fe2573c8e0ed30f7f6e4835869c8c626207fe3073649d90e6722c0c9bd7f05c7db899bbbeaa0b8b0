/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var constants = require('../../../_chunks/dep-4291c54c.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-953a77eb.js');
var configProvider_hooks_useConfig = require('../../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../../_chunks/dep-cc66acf1.js');
var radio_index = require('../../../radio/index.js');
var colorPicker_colorPickerPanelProps = require('../../color-picker-panel-props.js');
var colorPicker_hooks_index = require('../../hooks/index.js');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-b3b464e8.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-87589faa.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../../radio/radio.js');
require('../../../_chunks/dep-47c460dd.js');
require('../../../_chunks/dep-06276759.js');
require('../../../_chunks/dep-4fa46641.js');
require('../../../_chunks/dep-422dd97f.js');
require('../../../_chunks/dep-71fa6bfc.js');
require('../../../_chunks/dep-80a478d7.js');
require('../../../_chunks/dep-427dabac.js');
require('../../../_chunks/dep-72c4cc44.js');
require('../../../_chunks/dep-ee355a9a.js');
require('../../../_chunks/dep-23f77e26.js');
require('../../../_chunks/dep-8382953f.js');
require('../../../_chunks/dep-ecaaae91.js');
require('../../../_chunks/dep-874d2900.js');
require('../../../_chunks/dep-d45110a6.js');
require('../../../_chunks/dep-bc848944.js');
require('../../../_chunks/dep-e8ff2c13.js');
require('../../../radio/props.js');
require('../../../radio/consts/index.js');
require('../../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../../_chunks/dep-fd5a369e.js');
require('../../../_chunks/dep-4ccaead1.js');
require('../../../_chunks/dep-990979bb.js');
require('../../../_chunks/dep-ace0b57c.js');
require('../../../_chunks/dep-ac11336c.js');
require('../../../_chunks/dep-11b67e11.js');
require('../../../_chunks/dep-dcb859c6.js');
require('../../../radio/group.js');
require('@babel/runtime/helpers/asyncToGenerator');
require('@babel/runtime/regenerator');
require('../../../radio/radio-group-props.js');
require('../../../radio/radio-button.js');
require('../../../_chunks/dep-b6058ff9.js');
require('../../../radio/hooks/useKeyboard.js');
require('../../../_chunks/dep-6280a7f6.js');
require('../../../watermark/hooks/index.js');
require('../../../_chunks/dep-9071ce5e.js');
require('../../../_chunks/dep-441a3b7b.js');
require('../../../_chunks/dep-e86abdd2.js');
require('../../../_chunks/dep-9cc695aa.js');
require('../../../_chunks/dep-48de95ee.js');
require('../../../_chunks/dep-8b33876c.js');
require('../../../_chunks/dep-912c9727.js');
require('../../../_chunks/dep-6f2064e4.js');
require('../../../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var PanelHeader = Vue.defineComponent({
  name: "PanelHeader",
  props: _objectSpread(_objectSpread({}, colorPicker_colorPickerPanelProps["default"]), {}, {
    mode: {
      type: String,
      "default": "color"
    },
    onModeChange: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  }),
  setup: function setup(props2) {
    var _useConfig = configProvider_hooks_useConfig.useConfig("colorPicker"),
      globalConfig = _useConfig.globalConfig;
    var baseClassName = colorPicker_hooks_index.useBaseClassName();
    var modeValue = Vue.ref(props2.mode);
    var handleModeChange = function handleModeChange(v) {
      return props2.onModeChange(v);
    };
    Vue.watch(function () {
      return props2.mode;
    }, function (v) {
      return modeValue.value = v;
    });
    return function () {
      var _slot2;
      var _props2$colorModes;
      if (((_props2$colorModes = props2.colorModes) === null || _props2$colorModes === void 0 ? void 0 : _props2$colorModes.length) === 1) {
        return null;
      }
      return Vue.createVNode("div", {
        "class": "".concat(baseClassName.value, "__head")
      }, [Vue.createVNode("div", {
        "class": "".concat(baseClassName.value, "__mode")
      }, [Vue.createVNode(radio_index.RadioGroup, {
        "variant": "default-filled",
        "size": "small",
        "modelValue": modeValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return modeValue.value = $event;
        },
        "onChange": handleModeChange
      }, _isSlot(_slot2 = Object.keys(constants.COLOR_MODES).map(function (key) {
        var _slot;
        return Vue.createVNode(radio_index.RadioButton, {
          "key": key,
          "value": key
        }, _isSlot(_slot = Reflect.get(globalConfig.value, constants.COLOR_MODES[key])) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      })) ? _slot2 : {
        "default": function _default() {
          return [_slot2];
        }
      })])]);
    };
  }
});

exports["default"] = PanelHeader;
//# sourceMappingURL=header.js.map
