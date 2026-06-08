/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed } from 'vue';
import '../../_chunks/dep-7673347f.mjs';
import { COMPONENT_NAME } from '../consts/index.mjs';
import { getDayCn } from '../utils/index.mjs';
import { isObject } from 'lodash-es';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useColHeaders.mjs.map
