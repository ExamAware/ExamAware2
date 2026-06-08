/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { isBoolean, isFunction } from 'lodash-es';
import { computed, nextTick } from 'vue';
import { d as dayjs } from '../../_chunks/dep-ad588525.mjs';
import { COMPONENT_NAME } from '../consts/index.mjs';
import '../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var _useConfig = useConfig(COMPONENT_NAME),
    globalConfig = _useConfig.globalConfig;
  var options = computed(function () {
    var dayJsFilterDate = dayjs("".concat(state.curSelectedYear, "-").concat(state.curSelectedMonth));
    var re = {
      isShowWeekend: state.isShowWeekend,
      filterDate: dayJsFilterDate.toDate(),
      formattedFilterDate: dayJsFilterDate.format(props.format),
      mode: state.curSelectedMode
    };
    return re;
  });
  var configData = computed(function () {
    var _ref, _props$controllerConf;
    var controllerConfig = (_ref = (_props$controllerConf = props.controllerConfig) !== null && _props$controllerConf !== void 0 ? _props$controllerConf : globalConfig.value.controllerConfig) !== null && _ref !== void 0 ? _ref : true;
    if (isBoolean(controllerConfig)) {
      return getDefaultControllerConfigData(controllerConfig);
    }
    return _objectSpread(_objectSpread({}, getDefaultControllerConfigData()), controllerConfig);
  });
  var visible = computed(function () {
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
    nextTick(function () {
      isFunction(props.onControllerChange) && props.onControllerChange(_objectSpread({}, options.value));
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

export { userController };
//# sourceMappingURL=useController.mjs.map
