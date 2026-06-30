/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var Vue = require('vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

var _excluded = ["window"];
var defaultWindow = typeof window !== "undefined" ? window : void 0;
function unrefElement(elRef) {
  var _plain$$el;
  var plain = Vue.unref(elRef);
  return (_plain$$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _plain$$el !== void 0 ? _plain$$el : plain;
}
function tryOnScopeDispose(fn) {
  if (Vue.getCurrentScope()) {
    Vue.onScopeDispose(fn);
    return true;
  }
  return false;
}
function useMutationObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$window = options.window,
    window2 = _options$window === void 0 ? defaultWindow : _options$window,
    mutationOptions = _objectWithoutProperties__default["default"](options, _excluded);
  var observer;
  var isSupported = window2 && "MutationObserver" in window2;
  var cleanup = function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  var stopWatch = Vue.watch(function () {
    return unrefElement(target);
  }, function (el) {
    cleanup();
    if (isSupported && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, {
    immediate: true
  });
  var stop = function stop() {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported: isSupported,
    stop: stop
  };
}

exports.defaultWindow = defaultWindow;
exports.tryOnScopeDispose = tryOnScopeDispose;
exports.unrefElement = unrefElement;
exports.useMutationObserver = useMutationObserver;
//# sourceMappingURL=index.js.map
