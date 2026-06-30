/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { i as isServer, o as on } from '../../_chunks/dep-16bcfabc.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var nodeList = /* @__PURE__ */new Map();
var startClick;
var uid = 0;
if (!isServer && window.document) {
  on(document, "mousedown", function (e) {
    return startClick = e;
  });
  on(document, "mouseup", function (e) {
    var _iterator = _createForOfIteratorHelper(nodeList.values()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var handler = _step.value.handler;
        handler(e);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}
var createDocumentHandler = function createDocumentHandler(elements, handler) {
  var includePopup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var POPUP_SELECTOR = usePrefixClass("popup");
  return function (e) {
    var _startClick;
    if (includePopup) {
      document.querySelectorAll(POPUP_SELECTOR.value).forEach(function (ele) {
        elements.push(ele);
      });
    }
    elements = Array.from(new Set(elements));
    var mouseUpTarget = e.target;
    var mouseDownTarget = (_startClick = startClick) === null || _startClick === void 0 ? void 0 : _startClick.target;
    var isTargetUnExists = !mouseUpTarget || !mouseDownTarget;
    if (isTargetUnExists) {
      return;
    }
    var isContained = elements.some(function (el) {
      var isSelf = el === mouseUpTarget;
      var isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
      return isSelf || isContainedByEl;
    });
    if (isContained) {
      return;
    }
    handler();
  };
};
var useClickOutsider = function useClickOutsider() {
  uid++;
  var clickOutsiderId = uid;
  var addClickOutsider = function addClickOutsider(els, handler) {
    var elements = Array.from(new Set(els.filter(function (el) {
      return el;
    }))).map(function (el) {
      var node = el.el || el.$el || el;
      return node;
    });
    var documentHandler = createDocumentHandler(elements, handler, true);
    nodeList.set(clickOutsiderId, {
      elements: elements,
      handler: documentHandler
    });
  };
  var removeClickOutsider = function removeClickOutsider() {
    nodeList.has(clickOutsiderId) && nodeList["delete"](clickOutsiderId);
  };
  return {
    clickOutsiderId: clickOutsiderId,
    addClickOutsider: addClickOutsider,
    removeClickOutsider: removeClickOutsider
  };
};

export { useClickOutsider };
//# sourceMappingURL=click-outsider.js.map
