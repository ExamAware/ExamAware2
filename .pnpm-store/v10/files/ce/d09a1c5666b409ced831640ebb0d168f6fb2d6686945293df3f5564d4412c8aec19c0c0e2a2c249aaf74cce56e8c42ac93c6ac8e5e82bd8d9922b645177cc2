/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _cacheHas = require('./dep-8b33876c.js');
var _arrayIncludesWith = require('./dep-445924d5.js');
var toString = require('./dep-71fa6bfc.js');
var _baseUnary = require('./dep-dc4bbc14.js');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
    includes = _arrayIncludesWith.arrayIncludes,
    isCommon = true,
    length = array.length,
    result = [],
    valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = toString.arrayMap(values, _baseUnary.baseUnary(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith.arrayIncludesWith;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = _cacheHas.cacheHas;
    isCommon = false;
    values = new _cacheHas.SetCache(values);
  }
  outer: while (++index < length) {
    var value = array[index],
      computed = iteratee == null ? value : iteratee(value);
    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

exports.baseDifference = baseDifference;
//# sourceMappingURL=dep-01738d56.js.map
