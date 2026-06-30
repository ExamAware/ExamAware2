/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isObject } from 'lodash-es';
import dayjs from 'dayjs';
import { b as isEnabledDate } from '../../_chunks/dep-67991c5a.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/objectDestructuringEmpty';
import '@babel/runtime/helpers/extends';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-bf4a6186.js';
import '../../_chunks/dep-bcf15bc2.js';
import '../../_chunks/dep-4cdcccb6.js';
import '../../_chunks/dep-8295e674.js';

function useDisableDate(props) {
  var _disableDate = props.disableDate,
    format = props.format,
    mode = props.mode,
    start = props.start,
    end = props.end;
  return {
    disableDate: function disableDate(value) {
      return !isEnabledDate({
        disableDate: _disableDate,
        format: format,
        mode: mode,
        value: value
      });
    },
    minDate: isObject(_disableDate) && "before" in _disableDate ? new Date(dayjs(_disableDate.before).startOf("day").format()) : start,
    maxDate: isObject(_disableDate) && "after" in _disableDate ? new Date(dayjs(_disableDate.after).endOf("day").format()) : end
  };
}

export { useDisableDate };
//# sourceMappingURL=useDisableDate.js.map
