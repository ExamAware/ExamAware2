/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var largeNumber = require('./dep-48e7c2a2.js');
var log = require('./dep-733b2b51.js');
var isString = require('./dep-a55e8a08.js');
var isUndefined = require('./dep-fd5a369e.js');
var isNumber = require('./dep-990979bb.js');

function canAddNumber(num, max) {
  var largeNumber$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber$1 && isString.isString(num)) {
    return largeNumber.compareNumber(num, max, largeNumber$1) < 0;
  }
  return num < max;
}
function canReduceNumber(num, min) {
  var largeNumber$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!num && num !== 0) return true;
  if (largeNumber$1 && isString.isString(num)) {
    return largeNumber.compareNumber(num, min, largeNumber$1) > 0;
  }
  return num > min;
}
function putInRangeNumber(val, params) {
  if (val === "") return void 0;
  var max = params.max,
    min = params.min,
    lastValue = params.lastValue,
    largeNumber$1 = params.largeNumber;
  if (!largeNumber.isInputNumber(val)) return lastValue;
  if (largeNumber$1 && (isString.isString(max) || max === Infinity) && (isString.isString(min) || min === -Infinity)) {
    if (largeNumber.compareNumber(max, val, largeNumber$1) < 0) return max;
    if (largeNumber.compareNumber(min, val, largeNumber$1) > 0) return min;
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
    largeNumber$1 = p.largeNumber;
  if (Number(step) <= 0) {
    log.log.error("InputNumber", "step must be larger than 0.");
    return lastValue;
  }
  var tStep = isNumber.isNumber(step) ? String(step) : step;
  var newVal;
  if (op === "add") {
    if (largeNumber$1 && isString.isString(lastValue)) {
      newVal = largeNumber.largeNumberAdd(String(lastValue), String(tStep));
    } else {
      newVal = add(Number(lastValue || 0), Number(step));
    }
  } else if (op === "reduce") {
    if (largeNumber$1 && isString.isString(lastValue)) {
      newVal = largeNumber.largeNumberSubtract(String(lastValue), String(tStep));
    } else {
      newVal = subtract(Number(lastValue || 0), Number(step));
    }
  }
  if (isUndefined.isUndefined(lastValue)) {
    newVal = putInRangeNumber(newVal, {
      max: max,
      min: min,
      lastValue: lastValue,
      largeNumber: largeNumber$1
    });
  }
  return largeNumber$1 ? newVal : Number(newVal);
}
function getMaxOrMinValidateResult(p) {
  var largeNumber$1 = p.largeNumber,
    value = p.value,
    max = p.max,
    min = p.min;
  if (isUndefined.isUndefined(value) || isUndefined.isUndefined(largeNumber$1)) return void 0;
  if (largeNumber$1 && isNumber.isNumber(value)) {
    log.log.warn("InputNumber", "largeNumber value must be a string.");
  }
  var error;
  if (largeNumber.compareNumber(value, max, largeNumber$1) > 0) {
    error = "exceed-maximum";
  } else if (largeNumber.compareNumber(value, min, largeNumber$1) < 0) {
    error = "below-minimum";
  } else {
    error = void 0;
  }
  return error;
}
var specialCode = ["-", ".", "e", "E", "+"];
function canInputNumber(number, largeNumber$1) {
  var _number$match, _number$match2;
  if (["", null, void 0].includes(number)) return true;
  if (number.slice(0, 2) === "00") return false;
  if (number.match(/\s/g)) return false;
  if (((_number$match = number.match(/\./g)) === null || _number$match === void 0 ? void 0 : _number$match.length) > 1) return false;
  if (((_number$match2 = number.match(/e/g)) === null || _number$match2 === void 0 ? void 0 : _number$match2.length) > 1) return false;
  var tmpNumber = number.slice(1);
  var tmpMatched = tmpNumber.match(/(\+|-)/g);
  if (tmpMatched && (!/e(\+|-)/i.test(tmpNumber) || tmpMatched.length > 1)) return false;
  var isNumber2 = largeNumber$1 && largeNumber.isInputNumber(number) || !Number.isNaN(Number(number));
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
    largeNumber$1 = extra.largeNumber,
    isToFixed = extra.isToFixed;
  var newNumber = number.replace(/[.|+|\-|e]$/, "");
  if (largeNumber$1) {
    newNumber = largeNumber.formatENumber(newNumber);
  }
  if (decimalPlaces !== void 0) {
    newNumber = largeNumber.largeNumberToFixed(newNumber, decimalPlaces, largeNumber$1);
  }
  if (largeNumber$1) return newNumber;
  return isToFixed ? newNumber : parseFloat(newNumber);
}
function formatThousandths(number) {
  var thousandthsRegExp = /^[-+]?\d{1,3}(,\d{3})*(\.(\d*))?$/;
  if (thousandthsRegExp.test(number)) return number.replace(/,/g, "");
  return number;
}

exports.canAddNumber = canAddNumber;
exports.canInputNumber = canInputNumber;
exports.canReduceNumber = canReduceNumber;
exports.canSetValue = canSetValue;
exports.formatThousandths = formatThousandths;
exports.formatUnCompleteNumber = formatUnCompleteNumber;
exports.getMaxOrMinValidateResult = getMaxOrMinValidateResult;
exports.getStepValue = getStepValue;
exports.positiveAdd = positiveAdd;
exports.positiveSubtract = positiveSubtract;
//# sourceMappingURL=dep-2359c164.js.map
