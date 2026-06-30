/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _assignValue = require('./dep-0ff616fe.js');
var _baseGet = require('./dep-ac11336c.js');
var _isIndex = require('./dep-32412d92.js');
var isObject = require('./dep-0813861e.js');

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject.isObject(object)) {
    return object;
  }
  path = _baseGet.castPath(path, object);
  var index = -1,
    length = path.length,
    lastIndex = length - 1,
    nested = object;
  while (nested != null && ++index < length) {
    var key = _baseGet.toKey(path[index]),
      newValue = value;
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject.isObject(objValue) ? objValue : _isIndex.isIndex(path[index + 1]) ? [] : {};
      }
    }
    _assignValue.assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

exports.baseSet = baseSet;
//# sourceMappingURL=dep-04599720.js.map
