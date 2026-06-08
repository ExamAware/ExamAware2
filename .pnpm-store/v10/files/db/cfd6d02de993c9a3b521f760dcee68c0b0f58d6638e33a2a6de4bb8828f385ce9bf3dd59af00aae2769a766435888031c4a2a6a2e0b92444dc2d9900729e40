/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var calendar_consts_index = require('../consts/index.js');
var calendar_utils_index = require('../utils/index.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
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

function useColHeaders(props, state) {
  var _useConfig = configProvider_hooks_useConfig.useConfig(calendar_consts_index.COMPONENT_NAME),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var weekDisplayText = Vue.computed(function () {
    return props.week || t(globalConfig.value.week).split(",");
  });
  function getWeekDisplay(weekNum) {
    var weekText = weekDisplayText.value;
    return isObject.isObject(weekText) && weekText[weekNum - 1] ? weekText[weekNum - 1] : calendar_utils_index.getDayCn(weekNum);
  }
  var cellColHeaders = Vue.computed(function () {
    var re = [];
    var min = 1;
    var max = 7;
    for (var i = state.realFirstDayOfWeek; i <= max; i++) {
      re.push({
        num: i,
        display: getWeekDisplay(i)
      });
    }
    if (state.realFirstDayOfWeek > min) {
      for (var _i = min; _i < state.realFirstDayOfWeek; _i++) {
        re.push({
          num: _i,
          display: getWeekDisplay(_i)
        });
      }
    }
    return re;
  });
  return {
    cellColHeaders: cellColHeaders
  };
}

exports.useColHeaders = useColHeaders;
//# sourceMappingURL=useColHeaders.js.map
