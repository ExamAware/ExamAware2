/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var defaultsOptions = {
  start: function start(coordinate, event) {},
  drag: function drag(coordinate, event) {},
  end: function end(coordinate, event) {}
};
var _Draggable_brand = /*#__PURE__*/new WeakSet();
var Draggable = /*#__PURE__*/function () {
  function Draggable(el, options) {
    _classCallCheck__default["default"](this, Draggable);
    _classPrivateMethodInitSpec(this, _Draggable_brand);
    _defineProperty__default["default"](this, "dragging", false);
    _defineProperty__default["default"](this, "$el", void 0);
    _defineProperty__default["default"](this, "props", void 0);
    _defineProperty__default["default"](this, "handles", void 0);
    this.$el = el;
    this.props = _objectSpread(_objectSpread({}, defaultsOptions), options);
    this.handles = {
      start: _assertClassBrand(_Draggable_brand, this, _dragStart).bind(this),
      drag: _assertClassBrand(_Draggable_brand, this, _drag).bind(this),
      end: _assertClassBrand(_Draggable_brand, this, _dragEnd).bind(this)
    };
    this.$el.addEventListener("mousedown", this.handles.start, false);
  }
  return _createClass__default["default"](Draggable, [{
    key: "destroy",
    value: function destroy() {
      this.$el.removeEventListener("mousedown", this.handles.start, false);
      window.removeEventListener("mousemove", this.handles.drag, false);
      window.removeEventListener("mouseup", this.handles.end, false);
      window.removeEventListener("contextmenu", this.handles.end, false);
    }
  }]);
}();
function _dragStart(event) {
  if (this.dragging) {
    return;
  }
  window.addEventListener("mousemove", this.handles.drag, false);
  window.addEventListener("mouseup", this.handles.end, false);
  window.addEventListener("contextmenu", this.handles.end, false);
  this.dragging = true;
  this.props.start(_assertClassBrand(_Draggable_brand, this, _getCoordinate).call(this, event), event);
}
function _drag(event) {
  if (!this.dragging) {
    return;
  }
  this.props.drag(_assertClassBrand(_Draggable_brand, this, _getCoordinate).call(this, event), event);
}
function _dragEnd(event) {
  var _this = this;
  setTimeout(function () {
    _this.dragging = false;
    _this.props.end(_assertClassBrand(_Draggable_brand, _this, _getCoordinate).call(_this, event), event);
  }, 0);
  window.removeEventListener("mousemove", this.handles.drag, false);
  window.removeEventListener("mouseup", this.handles.end, false);
  window.removeEventListener("contextmenu", this.handles.end, false);
}
function _getCoordinate(event) {
  var rect = this.$el.getBoundingClientRect();
  var mouseEvent = event;
  var left = mouseEvent.clientX - rect.left;
  var top = mouseEvent.clientY - rect.top;
  return {
    y: Math.min(Math.max(0, top), rect.height),
    x: Math.min(Math.max(0, left), rect.width)
  };
}

exports.Draggable = Draggable;
//# sourceMappingURL=dep-4498a40d.js.map
