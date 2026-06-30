/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed } from 'vue';
import { isObject } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { COMPONENT_NAME } from '../consts/index.js';
import { getDayCn } from '../utils/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function useColHeaders(props, state) {
  var _useConfig = useConfig(COMPONENT_NAME),
    t = _useConfig.t,
    globalConfig = _useConfig.globalConfig;
  var weekDisplayText = computed(function () {
    return props.week || t(globalConfig.value.week).split(",");
  });
  function getWeekDisplay(weekNum) {
    var weekText = weekDisplayText.value;
    return isObject(weekText) && weekText[weekNum - 1] ? weekText[weekNum - 1] : getDayCn(weekNum);
  }
  var cellColHeaders = computed(function () {
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

export { useColHeaders };
//# sourceMappingURL=useColHeaders.js.map
