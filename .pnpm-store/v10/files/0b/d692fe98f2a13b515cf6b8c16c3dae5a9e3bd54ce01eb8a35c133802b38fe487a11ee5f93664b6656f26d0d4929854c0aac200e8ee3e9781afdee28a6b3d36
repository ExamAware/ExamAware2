/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed } from 'vue';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useEventForward(componentsProps, internalHandlers) {
  return computed(function () {
    var merged = _objectSpread({}, componentsProps);
    Object.keys(internalHandlers !== null && internalHandlers !== void 0 ? internalHandlers : {}).forEach(function (key) {
      var selfDefinedHandler = componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps[key];
      var internalHandler = internalHandlers === null || internalHandlers === void 0 ? void 0 : internalHandlers[key];
      if (typeof selfDefinedHandler === "function" && typeof internalHandler === "function") {
        merged[key] = function () {
          try {
            internalHandler.apply(void 0, arguments);
          } catch (error) {
            console.warn("[useEventForward]: Error in component callback for ".concat(String(key), ":"), error);
          }
          try {
            selfDefinedHandler.apply(void 0, arguments);
          } catch (error) {
            console.warn("[useEventForward]: Error in self defined callback for ".concat(String(key), ":"), error);
          }
        };
      } else if (typeof internalHandler === "function") {
        merged[key] = internalHandler;
      }
    });
    return merged;
  });
}

export { useEventForward as u };
//# sourceMappingURL=dep-4d7b9152.js.map
