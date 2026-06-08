/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../../_chunks/dep-06276759.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var nodeList = /* @__PURE__ */new Map();
var startClick;
var uid = 0;
if (!dom.isServer && window.document) {
  dom.on(document, "mousedown", function (e) {
    return startClick = e;
  });
  dom.on(document, "mouseup", function (e) {
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
  var POPUP_SELECTOR = index.usePrefixClass("popup");
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

exports.useClickOutsider = useClickOutsider;
//# sourceMappingURL=click-outsider.js.map
