/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _objectWithoutProperties } from '../../_chunks/dep-0dcc778a.mjs';
import { unref, getCurrentScope, onScopeDispose, watch } from 'vue';

var _excluded = ["window"];
var defaultWindow = typeof window !== "undefined" ? window : void 0;
function unrefElement(elRef) {
  var _plain$$el;
  var plain = unref(elRef);
  return (_plain$$el = plain === null || plain === void 0 ? void 0 : plain.$el) !== null && _plain$$el !== void 0 ? _plain$$el : plain;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useMutationObserver(target, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$window = options.window,
    window2 = _options$window === void 0 ? defaultWindow : _options$window,
    mutationOptions = _objectWithoutProperties(options, _excluded);
  var observer;
  var isSupported = window2 && "MutationObserver" in window2;
  var cleanup = function cleanup() {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  var stopWatch = watch(function () {
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

export { defaultWindow, tryOnScopeDispose, unrefElement, useMutationObserver };
//# sourceMappingURL=index.mjs.map
