/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var Vue = require('vue');
var common = require('./dep-6280a7f6.js');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var isEqual = require('./dep-9cc695aa.js');
var debounce = require('./dep-441a3b7b.js');
var isString = require('./dep-a55e8a08.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_OPTIONS = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTIONS;
  var mergedOptions = Vue.ref(_objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options));
  var observer = null;
  var initObserver = function initObserver() {
    var _observer;
    if (!targetEl) return;
    var _mergedOptions$value = mergedOptions.value,
      _mergedOptions$value$ = _mergedOptions$value.debounceTime,
      debounceTime = _mergedOptions$value$ === void 0 ? 0 : _mergedOptions$value$,
      _mergedOptions$value$2 = _mergedOptions$value.config,
      config = _mergedOptions$value$2 === void 0 ? DEFAULT_OPTIONS.config : _mergedOptions$value$2;
    var handler = function handler() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      callback === null || callback === void 0 || callback.apply(void 0, args);
    };
    (_observer = observer) === null || _observer === void 0 || _observer.disconnect();
    observer = new MutationObserver(debounceTime > 0 ? debounce.debounce(handler, debounceTime) : handler);
    observer.observe(targetEl, config);
  };
  Vue.watch(function () {
    return options;
  }, function (newOptions) {
    if (!isEqual.isEqual(newOptions, mergedOptions.value)) {
      mergedOptions.value = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), newOptions);
      initObserver();
    }
  }, {
    deep: true
  });
  Vue.onMounted(initObserver);
  Vue.onBeforeUnmount(function () {
    var _observer2;
    return (_observer2 = observer) === null || _observer2 === void 0 ? void 0 : _observer2.disconnect();
  });
}

var getColorTokenColor = function getColorTokenColor(token) {
  var _document, _styles$getPropertyVa;
  if (typeof window === "undefined") return "";
  var targetElement = (_document = document) === null || _document === void 0 ? void 0 : _document.documentElement;
  var styles = getComputedStyle(targetElement);
  return (_styles$getPropertyVa = styles.getPropertyValue(token).trim()) !== null && _styles$getPropertyVa !== void 0 ? _styles$getPropertyVa : "";
};

function useVariables(variables) {
  var _document;
  var values = {};
  var varsArray = [];
  varsArray = Object.values(variables);
  Object.entries(variables).forEach(function (_ref) {
    var _ref2 = _slicedToArray__default["default"](_ref, 2),
      key = _ref2[0],
      varName = _ref2[1];
    values[key] = Vue.ref(getColorTokenColor(varName));
  });
  varsArray.forEach(function (varName) {
    values[varName] = Vue.ref(getColorTokenColor(varName));
  });
  var targetElement = (_document = document) === null || _document === void 0 ? void 0 : _document.documentElement;
  useMutationObservable(targetElement, function (mutationsList) {
    mutationsList.some(function (mutation) {
      if (mutation.type === "attributes" && mutation.attributeName === common.THEME_MODE) {
        if (isString.isString(variables) || Array.isArray(variables)) {
          varsArray.forEach(function (varName) {
            values[varName].value = getColorTokenColor(varName);
          });
        } else {
          Object.entries(variables).forEach(function (_ref3) {
            var _ref4 = _slicedToArray__default["default"](_ref3, 2),
              key = _ref4[0],
              varName = _ref4[1];
            values[key].value = getColorTokenColor(varName);
          });
        }
        return true;
      }
      return false;
    });
  });
  return values;
}

exports.useVariables = useVariables;
//# sourceMappingURL=dep-f927fdb9.js.map
