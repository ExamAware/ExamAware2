/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isString, isNumber, isUndefined } from 'lodash-es';
import { c as compareNumber, i as isInputNumber, a as largeNumberAdd, b as largeNumberSubtract, f as formatENumber, l as largeNumberToFixed } from './dep-db81c302.mjs';
import './dep-6d2705e1.mjs';
import { l as log } from './dep-97ecacde.mjs';

function canAddNumber(num, max) {
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber && isString(num)) {
    return compareNumber(num, max, largeNumber) < 0;
  }
  return num < max;
}
function canReduceNumber(num, min) {
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber && isString(num)) {
    return compareNumber(num, min, largeNumber) > 0;
  }
  return num > min;
}
function putInRangeNumber(val, params) {
  if (val === "") return void 0;
  var max = params.max,
    min = params.min,
    lastValue = params.lastValue,
    largeNumber = params.largeNumber;
  if (!isInputNumber(val)) return lastValue;
  if (largeNumber && (isString(max) || max === Infinity) && (isString(min) || min === -Infinity)) {
    if (compareNumber(max, val, largeNumber) < 0) return max;
    if (compareNumber(min, val, largeNumber) > 0) return min;
    return val;
  }
  return Math.max(Number(min), Math.min(Number(max), Number(val)));
}
function positiveAdd(num1, num2) {
  var _num1$toString$split$, _num2$toString$split$;
  if (!num1 || !num2) return (num1 || 0) + (num2 || 0);
  var r1 = ((_num1$toString$split$ = num1.toString().split(".")[1]) === null || _num1$toString$split$ === void 0 ? void 0 : _num1$toString$split$.length) || 0;
  var r2 = ((_num2$toString$split$ = num2.toString().split(".")[1]) === null || _num2$toString$split$ === void 0 ? void 0 : _num2$toString$split$.length) || 0;
  if (!r1 && !r2) return num1 + num2;
  var newNumber1 = num1;
  var newNumber2 = num2;
  var diff = Math.abs(r1 - r2);
  var digit = Math.pow(10, Math.max(r1, r2));
  if (diff > 0) {
    var cm = Math.pow(10, diff);
    if (r1 > r2) {
      newNumber1 = Number(num1.toString().replace(".", ""));
      newNumber2 = Number(num2.toString().replace(".", "")) * cm;
    } else {
      newNumber1 = Number(num1.toString().replace(".", "")) * cm;
      newNumber2 = Number(num2.toString().replace(".", ""));
    }
  } else {
    newNumber1 = Number(num1.toString().replace(".", ""));
    newNumber2 = Number(num2.toString().replace(".", ""));
  }
  return (newNumber1 + newNumber2) / digit;
}
function positiveSubtract(num1, num2) {
  var _num1$toString$split$2, _num2$toString$split$2;
  if (!num1 || !num2) return (num1 || 0) - (num2 || 0);
  var r1 = ((_num1$toString$split$2 = num1.toString().split(".")[1]) === null || _num1$toString$split$2 === void 0 ? void 0 : _num1$toString$split$2.length) || 0;
  var r2 = ((_num2$toString$split$2 = num2.toString().split(".")[1]) === null || _num2$toString$split$2 === void 0 ? void 0 : _num2$toString$split$2.length) || 0;
  var digit = Math.pow(10, Math.max(r1, r2));
  var n = r1 >= r2 ? r1 : r2;
  return Number(((num1 * digit - num2 * digit) / digit).toFixed(n));
}
function add(num1, num2) {
  if (num1 < 0 && num2 > 0) return positiveSubtract(num2, Math.abs(num1));
  if (num1 < 0 && num2 < 0) return positiveAdd(Math.abs(num1), Math.abs(num2)) * -1;
  if (num1 > 0 && num2 < 0) return positiveSubtract(num1, Math.abs(num2));
  return positiveAdd(num1, num2);
}
function subtract(num1, num2) {
  if (num1 < 0 && num2 > 0) return positiveAdd(Math.abs(num1), num2) * -1;
  if (num1 < 0 && num2 < 0) return positiveSubtract(Math.abs(num2), Math.abs(num1));
  if (num1 > 0 && num2 < 0) return positiveAdd(num1, Math.abs(num2));
  return positiveSubtract(num1, num2);
}
function getStepValue(p) {
  var op = p.op,
    step = p.step,
    lastValue = p.lastValue,
    max = p.max,
    min = p.min,
    largeNumber = p.largeNumber;
  if (Number(step) <= 0) {
    log.error("InputNumber", "step must be larger than 0.");
    return lastValue;
  }
  var tStep = isNumber(step) ? String(step) : step;
  var newVal;
  if (op === "add") {
    if (largeNumber && isString(lastValue)) {
      newVal = largeNumberAdd(String(lastValue), String(tStep));
    } else {
      newVal = add(Number(lastValue || 0), Number(step));
    }
  } else if (op === "reduce") {
    if (largeNumber && isString(lastValue)) {
      newVal = largeNumberSubtract(String(lastValue), String(tStep));
    } else {
      newVal = subtract(Number(lastValue || 0), Number(step));
    }
  }
  if (isUndefined(lastValue)) {
    newVal = putInRangeNumber(newVal, {
      max: max,
      min: min,
      lastValue: lastValue,
      largeNumber: largeNumber
    });
  }
  return largeNumber ? newVal : Number(newVal);
}
function getMaxOrMinValidateResult(p) {
  var largeNumber = p.largeNumber,
    value = p.value,
    max = p.max,
    min = p.min;
  if (isUndefined(value) || isUndefined(largeNumber)) return void 0;
  if (largeNumber && isNumber(value)) {
    log.warn("InputNumber", "largeNumber value must be a string.");
  }
  var error;
  if (compareNumber(value, max, largeNumber) > 0) {
    error = "exceed-maximum";
  } else if (compareNumber(value, min, largeNumber) < 0) {
    error = "below-minimum";
  } else {
    error = void 0;
  }
  return error;
}
var specialCode = ["-", ".", "e", "E", "+"];
function canInputNumber(number, largeNumber) {
  var _number$match, _number$match2;
  if (["", null, void 0].includes(number)) return true;
  if (number.slice(0, 2) === "00") return false;
  if (number.match(/\s/g)) return false;
  if (((_number$match = number.match(/\./g)) === null || _number$match === void 0 ? void 0 : _number$match.length) > 1) return false;
  if (((_number$match2 = number.match(/e/g)) === null || _number$match2 === void 0 ? void 0 : _number$match2.length) > 1) return false;
  var tmpNumber = number.slice(1);
  var tmpMatched = tmpNumber.match(/(\+|-)/g);
  if (tmpMatched && (!/e(\+|-)/i.test(tmpNumber) || tmpMatched.length > 1)) return false;
  var isNumber2 = largeNumber && isInputNumber(number) || !Number.isNaN(Number(number));
  if (!isNumber2 && !specialCode.includes(number.slice(-1))) return false;
  if (/e/i.test(number) && (!/\de/i.test(number) || /e\./.test(number))) return false;
  return true;
}
function canSetValue(number, lastNumber) {
  return parseFloat(number) !== lastNumber && !Number.isNaN(Number(number));
}
function formatUnCompleteNumber(number) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (["", null, void 0].includes(number) || !/\d+/.test(number)) return void 0;
  var decimalPlaces = extra.decimalPlaces,
    largeNumber = extra.largeNumber,
    isToFixed = extra.isToFixed;
  var newNumber = number.replace(/[.|+|\-|e]$/, "");
  if (largeNumber) {
    newNumber = formatENumber(newNumber);
  }
  if (decimalPlaces !== void 0) {
    newNumber = largeNumberToFixed(newNumber, decimalPlaces, largeNumber);
  }
  if (largeNumber) return newNumber;
  return isToFixed ? newNumber : parseFloat(newNumber);
}
function formatThousandths(number) {
  var thousandthsRegExp = /^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;
  if (thousandthsRegExp.test(number)) return number.replace(/,/g, "");
  return number;
}

export { canAddNumber as a, getStepValue as b, canReduceNumber as c, formatThousandths as d, canInputNumber as e, formatUnCompleteNumber as f, getMaxOrMinValidateResult as g, canSetValue as h, positiveSubtract as i, positiveAdd as p };
//# sourceMappingURL=dep-29754cb4.mjs.map
