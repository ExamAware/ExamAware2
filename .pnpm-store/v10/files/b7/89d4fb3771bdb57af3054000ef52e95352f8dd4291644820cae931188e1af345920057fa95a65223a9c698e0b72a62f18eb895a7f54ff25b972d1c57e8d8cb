/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _slicedToArray } from '../../_chunks/dep-9003fde5.mjs';
import { computed, watch, onMounted } from 'vue';
import '../../_chunks/dep-6d2705e1.mjs';
import { l as limitUnicodeMaxLength, b as getCharacterLength, f as getUnicodeLength } from '../../_chunks/dep-0cde7579.mjs';
import { isObject, isNumber } from 'lodash-es';
import { l as log } from '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-257428bc.mjs';

function useLengthLimit(params) {
  var getValueByLimitNumber = function getValueByLimitNumber(inputValue) {
    var _params$value = params.value,
      allowInputOverMax = _params$value.allowInputOverMax,
      maxlength = _params$value.maxlength,
      maxcharacter = _params$value.maxcharacter;
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue) return inputValue;
    if (maxlength) {
      return limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      var r = getCharacterLength(inputValue, maxcharacter);
      if (isObject(r)) {
        return r.characters;
      }
    }
  };
  var limitNumber = computed(function () {
    var _params$value2 = params.value,
      maxlength = _params$value2.maxlength,
      maxcharacter = _params$value2.maxcharacter,
      value = _params$value2.value;
    if (isNumber(value)) return String(value);
    if (maxlength && maxcharacter) {
      log.warn("Input", "Pick one of maxlength and maxcharacter please.");
    }
    if (maxlength) {
      var length = value !== null && value !== void 0 && value.length ? getUnicodeLength(value) : 0;
      return "".concat(length, "/").concat(maxlength);
    }
    if (maxcharacter) {
      return "".concat(getCharacterLength(value || ""), "/").concat(maxcharacter);
    }
    return "";
  });
  var innerStatus = computed(function () {
    if (limitNumber.value) {
      var _limitNumber$value$sp = limitNumber.value.split("/"),
        _limitNumber$value$sp2 = _slicedToArray(_limitNumber$value$sp, 2),
        current = _limitNumber$value$sp2[0],
        total = _limitNumber$value$sp2[1];
      return Number(current) > Number(total) ? "error" : "";
    }
    return "";
  });
  var tStatus = computed(function () {
    var status = params.value.status;
    return status || innerStatus.value;
  });
  var onValidateChange = function onValidateChange() {
    var _params$value$onValid, _params$value3;
    (_params$value$onValid = (_params$value3 = params.value).onValidate) === null || _params$value$onValid === void 0 || _params$value$onValid.call(_params$value3, {
      error: innerStatus.value ? "exceed-maximum" : void 0
    });
  };
  watch(innerStatus, onValidateChange);
  onMounted(function () {
    innerStatus.value && onValidateChange();
  });
  return {
    tStatus: tStatus,
    limitNumber: limitNumber,
    getValueByLimitNumber: getValueByLimitNumber
  };
}

export { useLengthLimit };
//# sourceMappingURL=useLengthLimit.mjs.map
