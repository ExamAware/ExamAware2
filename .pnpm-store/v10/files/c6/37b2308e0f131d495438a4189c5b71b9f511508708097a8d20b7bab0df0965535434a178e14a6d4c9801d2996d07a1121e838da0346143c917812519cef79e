/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isObject, isString, isNumber } from 'lodash-es';
import { l as log } from './dep-8295e674.js';

function fillZero(length) {
  return new Array(length).fill(0).join("");
}
function isInputNumber(num) {
  if (!num) return true;
  if (isNumber(num)) return !Number.isNaN(num);
  var r = /^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(num);
  if (!r) return false;
  var eCount = 0;
  var negativeCount = 0;
  var dotCount = 0;
  for (var i = 0, len = num.length; i < len; i++) {
    if (num[i] === ".") {
      dotCount += 1;
      if (dotCount > 1) return false;
    }
    if (/(e|E)+/.test(num[i])) {
      eCount += 1;
      if (eCount > 1) return false;
    }
    if (num[i] === "-") {
      negativeCount += 1;
      if (negativeCount > 2) return false;
    }
  }
  return true;
}
function removeInvalidZero(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (num.indexOf(".") !== -1) {
    log.error("InputNumber", "num is not a integer number.");
    return num;
  }
  if (!num || num === "0" && decimal) return "";
  if (num === "0") return num;
  return (decimal ? num.replace(/0+$/, "") : num.replace(/^0+/, "")) || "0";
}
function largeIntNumberAdd(num1, num2) {
  var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var number1 = removeInvalidZero(num1, decimal);
  var number2 = removeInvalidZero(num2, decimal);
  var isFirstLarger = number1.length > number2.length;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len = decimal ? minNumber.length : maxNumber.length;
  for (var i = len - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) + (Number(minNumber[minIndex]) || 0) + (step[i] || 0);
    if (count >= 10) {
      step[i - 1] = 1;
    }
    newNumber.unshift(String(count % 10));
  }
  if (step[-1]) {
    newNumber.unshift("1");
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
  }
  return newNumber.join("");
}
function largePositiveNumberAdd(num1, num2) {
  var _num1$split = num1.split("."),
    _num1$split2 = _slicedToArray(_num1$split, 2),
    _num1$split2$ = _num1$split2[0],
    intNumber1 = _num1$split2$ === void 0 ? "0" : _num1$split2$,
    _num1$split2$2 = _num1$split2[1],
    decimalNumber1 = _num1$split2$2 === void 0 ? "0" : _num1$split2$2;
  var _num2$split = num2.split("."),
    _num2$split2 = _slicedToArray(_num2$split, 2),
    _num2$split2$ = _num2$split2[0],
    intNumber2 = _num2$split2$ === void 0 ? "0" : _num2$split2$,
    _num2$split2$2 = _num2$split2[1],
    decimalNumber2 = _num2$split2$2 === void 0 ? "0" : _num2$split2$2;
  var integerSum = largeIntNumberAdd(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0") return integerSum;
  var newDecimalNumber1 = removeInvalidZero(decimalNumber1, true);
  var newDecimalNumber2 = removeInvalidZero(decimalNumber2, true);
  var decimalNumberSum = largeIntNumberAdd(newDecimalNumber1, newDecimalNumber2, true);
  var decimalLength = decimalNumberSum.length;
  if (decimalLength > newDecimalNumber1.length && decimalLength > newDecimalNumber2.length) {
    return [removeInvalidZero(largeIntNumberAdd(integerSum, "1")), removeInvalidZero(decimalNumberSum.slice(1), true)].filter(function (v) {
      return v;
    }).join(".");
  }
  return [removeInvalidZero(integerSum), removeInvalidZero(decimalNumberSum, true)].filter(function (v) {
    return v;
  }).join(".");
}
function compareLargeIntegerNumber(num1, num2) {
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  if (number1.length === number2.length) {
    for (var i = 0, len = number1.length; i < len; i++) {
      if (number1[i] > number2[i]) return 1;
      if (number1[i] < number2[i]) return -1;
    }
    return 0;
  }
  return number1.length > number2.length ? 1 : -1;
}
function compareLargeDecimalNumber(num1, num2) {
  var number1 = num1 && num1 !== "0" ? num1.replace(/0+$/, "") : "0";
  var number2 = num2 && num2 !== "0" ? num2.replace(/0+$/, "") : "0";
  var maxLength = Math.max(number1.length, number2.length);
  for (var i = 0, len = maxLength; i < len; i++) {
    if ((number1[i] || 0) > (number2[i] || 0)) return 1;
    if ((number1[i] || 0) < (number2[i] || 0)) return -1;
  }
  return 0;
}
function formatENumber(num) {
  var _num$split = num.split("e"),
    _num$split2 = _slicedToArray(_num$split, 2),
    num1 = _num$split2[0],
    num2 = _num$split2[1];
  if (!num2) return num;
  var _num$split3 = num.split("."),
    _num$split4 = _slicedToArray(_num$split3, 2),
    integer = _num$split4[0],
    _num$split4$ = _num$split4[1],
    initDecimal = _num$split4$ === void 0 ? "" : _num$split4$;
  var zeroCount = Number(num2);
  var _initDecimal$split = initDecimal.split("e"),
    _initDecimal$split2 = _slicedToArray(_initDecimal$split, 1),
    decimal = _initDecimal$split2[0];
  if (zeroCount > decimal.length) {
    var multipleZero = fillZero(zeroCount - decimal.length);
    return num1.replace(/(^0+|\.)/g, "") + multipleZero;
  }
  var n1 = integer.replace(/^0+/, "") + decimal.slice(0, zeroCount);
  var d2 = decimal.slice(zeroCount);
  return d2 ? [n1, d2].join(".") : n1;
}
function compareLargeNumber(num1, num2) {
  var _formatENumber$split = formatENumber(num1).split("."),
    _formatENumber$split2 = _slicedToArray(_formatENumber$split, 2),
    integer1 = _formatENumber$split2[0],
    decimal1 = _formatENumber$split2[1];
  var _formatENumber$split3 = formatENumber(num2).split("."),
    _formatENumber$split4 = _slicedToArray(_formatENumber$split3, 2),
    integer2 = _formatENumber$split4[0],
    decimal2 = _formatENumber$split4[1];
  var result = compareLargeIntegerNumber(integer1.replace("-", ""), integer2.replace("-", ""));
  var integer1IsNegative = integer1.includes("-");
  var integer2IsNegative = integer2.includes("-");
  if (integer1IsNegative && !integer2IsNegative) return -1;
  if (!integer1IsNegative && integer2IsNegative) return 1;
  if (integer1IsNegative && integer2IsNegative) {
    if (result === 0) return 0;
    return result > 0 ? -1 : 1;
  }
  if (result === 0) {
    return compareLargeDecimalNumber(decimal1, decimal2);
  }
  return result;
}
function isInfinity(num) {
  return [-Infinity, Infinity].includes(Number(num));
}
function isSafeNumber(num) {
  return Number(num) < Number.MAX_SAFE_INTEGER && Number(num) > Number.MIN_SAFE_INTEGER;
}
function compareNumber(num1, num2, largeNumber) {
  var isSafeNumberCompare = isSafeNumber(num1) && isSafeNumber(num2) && !largeNumber;
  var isInfinityCompare = isInfinity(num1) || isInfinity(num2);
  if (isSafeNumberCompare || isInfinityCompare) {
    if (Number(num1) === Number(num2)) return 0;
    return Number(num1) > Number(num2) ? 1 : -1;
  }
  return compareLargeNumber(String(num1), String(num2));
}
function largeIntegerNumberSubtract(num1, num2, p) {
  if (num1 === num2) return "0";
  var _ref = p || {},
    decimal = _ref.decimal,
    stayZero = _ref.stayZero;
  var number1 = removeInvalidZero(num1);
  var number2 = removeInvalidZero(num2);
  var isFirstLarger = compareLargeIntegerNumber(number1, number2) > 0;
  var maxNumber = isFirstLarger ? number1 : number2;
  var minNumber = isFirstLarger ? number2 : number1;
  var newNumber = [];
  var step = [];
  var diff = decimal ? 0 : maxNumber.length - minNumber.length;
  var len = decimal ? minNumber.length : maxNumber.length;
  for (var i = len - 1; i >= 0; i--) {
    var minIndex = i - diff;
    var count = Number(maxNumber[i]) - (Number(minNumber[minIndex]) || 0) - (step[i] || 0);
    if (count < 0) {
      step[i - 1] = 1;
      count += 10;
    }
    newNumber.unshift(String(count));
  }
  if (decimal) {
    return newNumber.concat(maxNumber.slice(len, maxNumber.length)).join("");
  }
  var finalNumber = newNumber.join("");
  if (!stayZero) {
    finalNumber = finalNumber.replace(/^0+/, "");
  }
  return removeInvalidZero(isFirstLarger ? finalNumber : "-".concat(finalNumber));
}
function largePositiveNumberSubtract(num1, num2) {
  if (num1 === num2) return "0";
  var isFirstLarger = compareNumber(num1, num2, true) > 0;
  var maxNumber = isFirstLarger ? num1 : num2;
  var minNumber = isFirstLarger ? num2 : num1;
  var _maxNumber$split = maxNumber.split("."),
    _maxNumber$split2 = _slicedToArray(_maxNumber$split, 2),
    intNumber1 = _maxNumber$split2[0],
    _maxNumber$split2$ = _maxNumber$split2[1],
    decimalNumber1 = _maxNumber$split2$ === void 0 ? "0" : _maxNumber$split2$;
  var _minNumber$split = minNumber.split("."),
    _minNumber$split2 = _slicedToArray(_minNumber$split, 2),
    intNumber2 = _minNumber$split2[0],
    _minNumber$split2$ = _minNumber$split2[1],
    decimalNumber2 = _minNumber$split2$ === void 0 ? "0" : _minNumber$split2$;
  var integerNumber = largeIntegerNumberSubtract(intNumber1, intNumber2);
  if (decimalNumber1 === "0" && decimalNumber2 === "0") {
    return isFirstLarger ? integerNumber : "-".concat(integerNumber);
  }
  var decimalNumber = "";
  var addOneNumber = decimalNumber1;
  if (decimalNumber1.length < decimalNumber2.length) {
    addOneNumber = "".concat(decimalNumber1).concat(fillZero(decimalNumber2.length - decimalNumber1.length));
  }
  if (compareLargeDecimalNumber(addOneNumber, decimalNumber2) >= 0) {
    decimalNumber = largeIntegerNumberSubtract(addOneNumber, decimalNumber2, {
      decimal: true
    });
  } else {
    if (decimalNumber1.length < decimalNumber2.length || decimalNumber1 === "0") {
      decimalNumber = largeIntegerNumberSubtract("1".concat(addOneNumber), decimalNumber2, {
        stayZero: true
      });
      decimalNumber = fillZero(decimalNumber2.length - decimalNumber.length) + decimalNumber;
    } else {
      decimalNumber = largeIntegerNumberSubtract(decimalNumber1, decimalNumber2, {
        decimal: true
      });
    }
    integerNumber = largeIntegerNumberSubtract(integerNumber, "1");
  }
  var finalNumber = decimalNumber ? [integerNumber, decimalNumber].join(".") : integerNumber;
  return isFirstLarger ? finalNumber : "-".concat(finalNumber);
}
function largeNumberSubtract(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    var r = largePositiveNumberAdd(num1.slice(1), num2);
    return "-".concat(r);
  }
  if (isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num2.slice(1), num1.slice(1));
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberAdd(num1, num2.slice(1));
  }
  return largePositiveNumberSubtract(num1, num2);
}
function largeNumberAdd(num1, num2) {
  var isFirstNegative = num1[0] === "-";
  var isSecondNegative = num2[0] === "-";
  if (isFirstNegative && !isSecondNegative) {
    return largePositiveNumberSubtract(num2, num1.slice(1));
  }
  if (isFirstNegative && isSecondNegative) {
    var r = largePositiveNumberAdd(num2.slice(1), num1.slice(1));
    return "-".concat(r);
  }
  if (!isFirstNegative && isSecondNegative) {
    return largePositiveNumberSubtract(num1, num2.slice(1));
  }
  return largePositiveNumberAdd(num1, num2);
}
function formatDecimal(num, places) {
  var enableRound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (enableRound) {
    return num.toFixed(places);
  }
  var _num$toString$split = num.toString().split("."),
    _num$toString$split2 = _slicedToArray(_num$toString$split, 2),
    integer = _num$toString$split2[0],
    decimal = _num$toString$split2[1];
  if (places === 0) {
    return integer;
  }
  if (decimal) {
    var decimalNumber = decimal.slice(0, places);
    if (decimal.length < places) {
      decimalNumber += fillZero(places - decimal.length);
    }
    return [integer, decimalNumber].join(".");
  }
  return [integer, fillZero(places)].join(".");
}
function decimalPlacesToFixedNum(num, decimalPlaces) {
  if (isObject(decimalPlaces)) {
    var _decimalPlaces$enable;
    return formatDecimal(num, decimalPlaces.places, (_decimalPlaces$enable = decimalPlaces.enableRound) !== null && _decimalPlaces$enable !== void 0 ? _decimalPlaces$enable : true);
  }
  return formatDecimal(num, decimalPlaces, true);
}
function largeNumberToFixed(number) {
  var _decimalPlaces$enable2;
  var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var largeNumber = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (Number.isNaN(Number(number))) return "";
  if (!largeNumber) {
    return decimalPlacesToFixedNum(Number(number), decimalPlaces);
  }
  var places = isObject(decimalPlaces) ? decimalPlaces.places : decimalPlaces;
  var enableRound = isObject(decimalPlaces) ? (_decimalPlaces$enable2 = decimalPlaces.enableRound) !== null && _decimalPlaces$enable2 !== void 0 ? _decimalPlaces$enable2 : true : true;
  if (!isString(number)) return String(number);
  var _number$split = number.split("."),
    _number$split2 = _slicedToArray(_number$split, 2),
    num1 = _number$split2[0],
    num2 = _number$split2[1];
  if (!num2) {
    return places > 0 && enableRound ? [number, fillZero(places)].join(".") : number;
  }
  if (places === 0) {
    return enableRound && Number(num2[0]) >= 5 ? largePositiveNumberAdd(num1, "1") : num1;
  }
  var decimalNumber = num2.slice(0, places);
  if (num2.length < places) {
    decimalNumber += fillZero(places - num2.length);
  } else if (enableRound) {
    var _decimalNumber$match;
    var leadZeroNum = (_decimalNumber$match = decimalNumber.match(/^0+/)) === null || _decimalNumber$match === void 0 ? void 0 : _decimalNumber$match[0].length;
    var leadNineNum = decimalNumber.match(/^9+/);
    var needAdded = Number(num2[places]) >= 5;
    decimalNumber = needAdded ? largePositiveNumberAdd(decimalNumber, "1") : decimalNumber;
    if (leadZeroNum && needAdded && leadZeroNum + decimalNumber.length >= places) {
      decimalNumber = "".concat(fillZero(places - decimalNumber.length)).concat(decimalNumber);
    }
    if (leadNineNum && decimalNumber.length > places) {
      num1 = (Number(num1) + 1).toString();
      decimalNumber = fillZero(places);
    }
  }
  return [num1, decimalNumber].join(".");
}

export { largeNumberAdd as a, largeNumberSubtract as b, compareNumber as c, formatENumber as f, isInputNumber as i, largeNumberToFixed as l };
//# sourceMappingURL=dep-05f15b4e.js.map
