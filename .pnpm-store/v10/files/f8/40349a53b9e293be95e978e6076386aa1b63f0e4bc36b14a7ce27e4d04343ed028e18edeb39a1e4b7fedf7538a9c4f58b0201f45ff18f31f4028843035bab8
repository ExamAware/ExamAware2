/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var utils = require('../../_chunks/dep-8f212fc6.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/objectDestructuringEmpty');
require('@babel/runtime/helpers/extends');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-b9b30627.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-80a478d7.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-d54d4085.js');
require('../../_chunks/dep-9beee08e.js');
require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function useDisableDate(props) {
  var _disableDate = props.disableDate,
    format = props.format,
    mode = props.mode,
    start = props.start,
    end = props.end;
  return {
    disableDate: function disableDate(value) {
      return !utils.isEnabledDate({
        disableDate: _disableDate,
        format: format,
        mode: mode,
        value: value
      });
    },
    minDate: isObject.isObject(_disableDate) && "before" in _disableDate ? new Date(dayjs__default["default"](_disableDate.before).startOf("day").format()) : start,
    maxDate: isObject.isObject(_disableDate) && "after" in _disableDate ? new Date(dayjs__default["default"](_disableDate.after).endOf("day").format()) : end
  };
}

exports.useDisableDate = useDisableDate;
//# sourceMappingURL=useDisableDate.js.map
