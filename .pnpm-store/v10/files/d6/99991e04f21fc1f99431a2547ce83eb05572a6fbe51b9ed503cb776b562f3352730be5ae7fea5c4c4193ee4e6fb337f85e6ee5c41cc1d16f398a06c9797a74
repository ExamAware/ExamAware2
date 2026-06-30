/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var dayjs = require('dayjs');
var calendar_consts_index = require('../consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var isBoolean = require('../../_chunks/dep-d45110a6.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getDefaultControllerConfigData = function getDefaultControllerConfigData() {
  var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    visible: visible,
    disabled: false,
    mode: {
      visible: true,
      radioGroupProps: {}
    },
    year: {
      visible: true,
      selectProps: {}
    },
    month: {
      visible: true,
      selectProps: {}
    },
    weekend: {
      visible: true,
      showWeekendButtonProps: {},
      hideWeekendButtonProps: {}
    },
    current: {
      visible: true,
      currentDayButtonProps: {},
      currentMonthButtonProps: {}
    }
  };
};
function userController(props, state) {
  var _useConfig = configProvider_hooks_useConfig.useConfig(calendar_consts_index.COMPONENT_NAME),
    globalConfig = _useConfig.globalConfig;
  var options = Vue.computed(function () {
    var dayJsFilterDate = dayjs__default["default"]("".concat(state.curSelectedYear, "-").concat(state.curSelectedMonth));
    var re = {
      isShowWeekend: state.isShowWeekend,
      filterDate: dayJsFilterDate.toDate(),
      formattedFilterDate: dayJsFilterDate.format(props.format),
      mode: state.curSelectedMode
    };
    return re;
  });
  var configData = Vue.computed(function () {
    var _ref, _props$controllerConf;
    var controllerConfig = (_ref = (_props$controllerConf = props.controllerConfig) !== null && _props$controllerConf !== void 0 ? _props$controllerConf : globalConfig.value.controllerConfig) !== null && _ref !== void 0 ? _ref : true;
    if (isBoolean.isBoolean(controllerConfig)) {
      return getDefaultControllerConfigData(controllerConfig);
    }
    return _objectSpread(_objectSpread({}, getDefaultControllerConfigData()), controllerConfig);
  });
  var visible = Vue.computed(function () {
    return !!configData.value && configData.value.visible;
  });
  function checkControllerVisible(name) {
    var re = true;
    var conf = configData.value;
    if (!conf || !conf.visible || conf[name] === false || conf[name] && !conf[name].visible) {
      re = false;
    }
    return re;
  }
  function checkControllerDisabled(name, propsName) {
    var re = false;
    var conf = configData.value;
    if (conf && (conf.disabled || conf[name] && conf[name][propsName] && conf[name][propsName].disabled)) {
      re = true;
    }
    return re;
  }
  function emitControllerChange() {
    Vue.nextTick(function () {
      isFunction.isFunction(props.onControllerChange) && props.onControllerChange(_objectSpread({}, options.value));
    });
  }
  return {
    options: options,
    configData: configData,
    visible: visible,
    checkControllerVisible: checkControllerVisible,
    checkControllerDisabled: checkControllerDisabled,
    emitControllerChange: emitControllerChange
  };
}

exports.userController = userController;
//# sourceMappingURL=useController.js.map
