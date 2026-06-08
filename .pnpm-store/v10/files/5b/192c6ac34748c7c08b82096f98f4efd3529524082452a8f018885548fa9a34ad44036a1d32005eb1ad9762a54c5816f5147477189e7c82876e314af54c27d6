/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { cloneDeep } from 'lodash-es';

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var getSingleContent = function getSingleContent(value, isRemote, searchDisplayOptions, optionsMap) {
  if (isRemote) {
    var _searchDisplayOptions;
    return ((_searchDisplayOptions = searchDisplayOptions.value.filter(function (option2) {
      return option2.value === value;
    })[0]) === null || _searchDisplayOptions === void 0 ? void 0 : _searchDisplayOptions.label) || (value === null || value === void 0 ? void 0 : value.toString());
  }
  var option = optionsMap.value.get(value);
  return (option === null || option === void 0 ? void 0 : option.label) || (value === null || value === void 0 ? void 0 : value.toString());
};
var getMultipleContent = function getMultipleContent(value, isRemote, searchDisplayOptions, optionsMap) {
  var res = [];
  var _iterator = _createForOfIteratorHelper(value),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var iterator = _step.value;
      var resLabel = getSingleContent(iterator, isRemote, searchDisplayOptions, optionsMap);
      if (resLabel) {
        res.push(resLabel);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return res;
};
var getNewMultipleValue = function getNewMultipleValue(innerValue, optionValue) {
  var value = cloneDeep(innerValue);
  var valueIndex = value.indexOf(optionValue);
  if (valueIndex < 0) {
    value.push(optionValue);
  } else {
    value.splice(valueIndex, 1);
  }
  return {
    value: value,
    isCheck: valueIndex < 0
  };
};

export { getMultipleContent, getNewMultipleValue, getSingleContent };
//# sourceMappingURL=index.mjs.map
