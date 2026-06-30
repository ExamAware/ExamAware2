/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isObject } from 'lodash-es';
import { d as dayjs } from '../../_chunks/dep-ad588525.mjs';
import { b as isEnabledDate } from '../../_chunks/dep-2fe12221.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-63305cb0.mjs';
import '../../_chunks/dep-83649365.mjs';
import '../../_chunks/dep-c0b36067.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../_chunks/dep-97ecacde.mjs';

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
//# sourceMappingURL=useDisableDate.mjs.map
