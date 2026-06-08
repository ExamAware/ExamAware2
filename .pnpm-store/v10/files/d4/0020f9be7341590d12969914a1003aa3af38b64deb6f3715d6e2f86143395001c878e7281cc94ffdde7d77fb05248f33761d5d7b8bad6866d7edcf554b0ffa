/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
var log = require('../../_chunks/dep-733b2b51.js');
var helper = require('../../_chunks/dep-55c70201.js');
var isNumber = require('../../_chunks/dep-990979bb.js');
var isObject = require('../../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/objectWithoutProperties');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function useLengthLimit(params) {
  var getValueByLimitNumber = function getValueByLimitNumber(inputValue) {
    var _params$value = params.value,
      allowInputOverMax = _params$value.allowInputOverMax,
      maxlength = _params$value.maxlength,
      maxcharacter = _params$value.maxcharacter;
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue) return inputValue;
    if (maxlength) {
      return helper.limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      var r = helper.getCharacterLength(inputValue, maxcharacter);
      if (isObject.isObject(r)) {
        return r.characters;
      }
    }
  };
  var limitNumber = Vue.computed(function () {
    var _params$value2 = params.value,
      maxlength = _params$value2.maxlength,
      maxcharacter = _params$value2.maxcharacter,
      value = _params$value2.value;
    if (isNumber.isNumber(value)) return String(value);
    if (maxlength && maxcharacter) {
      log.log.warn("Input", "Pick one of maxlength and maxcharacter please.");
    }
    if (maxlength) {
      var length = value !== null && value !== void 0 && value.length ? helper.getUnicodeLength(value) : 0;
      return "".concat(length, "/").concat(maxlength);
    }
    if (maxcharacter) {
      return "".concat(helper.getCharacterLength(value || ""), "/").concat(maxcharacter);
    }
    return "";
  });
  var innerStatus = Vue.computed(function () {
    if (limitNumber.value) {
      var _limitNumber$value$sp = limitNumber.value.split("/"),
        _limitNumber$value$sp2 = _slicedToArray__default["default"](_limitNumber$value$sp, 2),
        current = _limitNumber$value$sp2[0],
        total = _limitNumber$value$sp2[1];
      return Number(current) > Number(total) ? "error" : "";
    }
    return "";
  });
  var tStatus = Vue.computed(function () {
    var status = params.value.status;
    return status || innerStatus.value;
  });
  var onValidateChange = function onValidateChange() {
    var _params$value$onValid, _params$value3;
    (_params$value$onValid = (_params$value3 = params.value).onValidate) === null || _params$value$onValid === void 0 || _params$value$onValid.call(_params$value3, {
      error: innerStatus.value ? "exceed-maximum" : void 0
    });
  };
  Vue.watch(innerStatus, onValidateChange);
  Vue.onMounted(function () {
    innerStatus.value && onValidateChange();
  });
  return {
    tStatus: tStatus,
    limitNumber: limitNumber,
    getValueByLimitNumber: getValueByLimitNumber
  };
}

exports.useLengthLimit = useLengthLimit;
//# sourceMappingURL=useLengthLimit.js.map
