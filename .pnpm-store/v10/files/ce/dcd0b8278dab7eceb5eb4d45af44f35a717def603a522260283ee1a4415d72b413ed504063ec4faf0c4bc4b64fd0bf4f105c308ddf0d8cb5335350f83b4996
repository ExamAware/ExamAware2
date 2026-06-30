/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var statistic_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var skeleton_index = require('../skeleton/index.js');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var helper = require('../_chunks/dep-55c70201.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../skeleton/skeleton.js');
require('../skeleton/props.js');
require('../_chunks/dep-d62a674d.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);

var quartOut = function quartOut(t) {
  return 1 - Math.abs(Math.pow(t - 1, 4));
};
var Tween = /*#__PURE__*/function () {
  function Tween(_ref) {
    var _this = this;
    var from = _ref.from,
      to = _ref.to,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 200 : _ref$duration,
      onStart = _ref.onStart,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate,
      onFinish = _ref.onFinish;
    _classCallCheck__default["default"](this, Tween);
    _defineProperty__default["default"](this, "from", void 0);
    _defineProperty__default["default"](this, "to", void 0);
    _defineProperty__default["default"](this, "duration", void 0);
    _defineProperty__default["default"](this, "onStart", void 0);
    _defineProperty__default["default"](this, "onUpdate", void 0);
    _defineProperty__default["default"](this, "onFinish", void 0);
    _defineProperty__default["default"](this, "startTime", void 0);
    _defineProperty__default["default"](this, "started", void 0);
    _defineProperty__default["default"](this, "finished", void 0);
    _defineProperty__default["default"](this, "timer", void 0);
    _defineProperty__default["default"](this, "keys", void 0);
    _defineProperty__default["default"](this, "time", 0);
    _defineProperty__default["default"](this, "elapsed", 0);
    this.from = from;
    this.to = to;
    this.duration = duration;
    this.onStart = onStart;
    this.onUpdate = onUpdate;
    this.onFinish = onFinish;
    this.startTime = Date.now();
    this.started = false;
    this.finished = false;
    this.timer = null;
    this.keys = {};
    Object.entries(from).forEach(function (_ref2) {
      var _ref3 = _slicedToArray__default["default"](_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      if (_this.to[key] === void 0) {
        _this.to[key] = value;
      }
    });
    Object.entries(to).forEach(function (_ref4) {
      var _ref5 = _slicedToArray__default["default"](_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];
      if (_this.from[key] === void 0) {
        _this.from[key] = value;
      }
    });
  }
  return _createClass__default["default"](Tween, [{
    key: "update",
    value: function update() {
      var _this2 = this;
      this.time = Date.now();
      if (this.time < this.startTime || this.finished) return;
      if (this.elapsed >= this.duration) {
        var _this$onFinish;
        this.finished = true;
        (_this$onFinish = this.onFinish) === null || _this$onFinish === void 0 || _this$onFinish.call(this, this.keys);
        return;
      }
      var elapsed = Math.min(this.time - this.startTime, this.duration);
      this.elapsed = elapsed;
      var progress = quartOut(elapsed / this.duration);
      Object.keys(this.to).forEach(function (key) {
        var delta = _this2.to[key] - _this2.from[key];
        _this2.keys[key] = _this2.from[key] + delta * progress;
      });
      if (!this.started) {
        var _this$onStart;
        (_this$onStart = this.onStart) === null || _this$onStart === void 0 || _this$onStart.call(this, this.keys);
        this.started = true;
      }
      this.onUpdate(this.keys);
    }
  }, {
    key: "polyfillStart",
    value: function polyfillStart() {
      var _this3 = this;
      var elapsed = Date.now() - this.startTime;
      var interval = quartOut(elapsed / this.duration);
      this.timer = setInterval(function () {
        _this3.update();
        if (_this3.finished) {
          clearInterval(_this3.timer);
        }
      }, interval);
    }
  }, {
    key: "normalStart",
    value: function normalStart() {
      var _this4 = this;
      var _tick = function tick() {
        _this4.update();
        _this4.timer = requestAnimationFrame(_tick);
        if (_this4.finished) {
          cancelAnimationFrame(_this4.timer);
          _this4.timer = null;
        }
      };
      _tick();
    }
  }, {
    key: "start",
    value: function start() {
      this.startTime = Date.now();
      if (helper.getIEVersion() < 10) this.polyfillStart();else this.normalStart();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (helper.getIEVersion() < 10) clearInterval(this.timer);else cancelAnimationFrame(this.timer);
      this.timer = null;
    }
  }]);
}();

var COLOR_MAP = {
  black: "var(--td-text-color-primary)",
  blue: "var(--td-brand-color)",
  red: "var(--td-error-color)",
  orange: "var(--td-warning-color)",
  green: "var(--td-success-color)"
};
function getFormatValue(value, decimalPlaces, separator) {
  var options = {
    minimumFractionDigits: decimalPlaces !== null && decimalPlaces !== void 0 ? decimalPlaces : 0,
    maximumFractionDigits: decimalPlaces !== null && decimalPlaces !== void 0 ? decimalPlaces : 20,
    useGrouping: !!separator
  };
  return value.toLocaleString(void 0, options).replace(/,|，/g, separator);
}

var _Statistic = Vue.defineComponent({
  name: "TStatistic",
  props: statistic_props["default"],
  setup: function setup(props2, _ref) {
    var _props2$animation$val, _props2$animation;
    var expose = _ref.expose;
    var COMPONENT_NAME = index.usePrefixClass("statistic");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _useGlobalIcon = index$2.useGlobalIcon({
        ArrowTriangleUpFilledIcon: tdesignIconsVueNext.ArrowTriangleUpFilledIcon,
        ArrowTriangleDownFilledIcon: tdesignIconsVueNext.ArrowTriangleDownFilledIcon
      }),
      ArrowTriangleUpFilledIcon = _useGlobalIcon.ArrowTriangleUpFilledIcon,
      ArrowTriangleDownFilledIcon = _useGlobalIcon.ArrowTriangleDownFilledIcon;
    var trendIcons = {
      increase: Vue.createVNode(ArrowTriangleUpFilledIcon, null, null),
      decrease: Vue.createVNode(ArrowTriangleDownFilledIcon, null, null)
    };
    var numberValue = Vue.computed(function () {
      return isNumber.isNumber(props2.value) ? props2.value : 0;
    });
    var innerValue = Vue.ref((_props2$animation$val = (_props2$animation = props2.animation) === null || _props2$animation === void 0 ? void 0 : _props2$animation.valueFrom) !== null && _props2$animation$val !== void 0 ? _props2$animation$val : props2.value);
    var innerDecimalPlaces = Vue.computed(function () {
      var _ref2, _props2$decimalPlaces, _numberValue$value$to;
      return (_ref2 = (_props2$decimalPlaces = props2.decimalPlaces) !== null && _props2$decimalPlaces !== void 0 ? _props2$decimalPlaces : (_numberValue$value$to = numberValue.value.toString().split(".")[1]) === null || _numberValue$value$to === void 0 ? void 0 : _numberValue$value$to.length) !== null && _ref2 !== void 0 ? _ref2 : 0;
    });
    var tween = Vue.ref();
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value;
    var start = function start() {
      var _props2$animation$val2, _props2$animation2;
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (_props2$animation$val2 = (_props2$animation2 = props2.animation) === null || _props2$animation2 === void 0 ? void 0 : _props2$animation2.valueFrom) !== null && _props2$animation$val2 !== void 0 ? _props2$animation$val2 : 0;
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : numberValue.value;
      if (from !== to) {
        var _tween$value;
        tween.value = new Tween({
          from: {
            value: from
          },
          to: {
            value: to
          },
          duration: props2.animation.duration,
          onUpdate: function onUpdate(keys) {
            innerValue.value = Number(keys.value.toFixed(innerDecimalPlaces.value));
          },
          onFinish: function onFinish() {
            innerValue.value = to;
          }
        });
        (_tween$value = tween.value) === null || _tween$value === void 0 || _tween$value.start();
      }
    };
    var formatValue = Vue.computed(function () {
      if (isFunction.isFunction(props2.format)) {
        return props2.format(innerValue.value);
      }
      return getFormatValue(innerValue.value, props2.decimalPlaces, props2.separator);
    });
    var contentStyle = Vue.computed(function () {
      return {
        color: COLOR_MAP[props2.color] || props2.color
      };
    });
    Vue.watch(function () {
      return props2.animationStart;
    }, function (value2) {
      if (props2.animation && value2 && !tween.value) {
        start();
      }
    });
    Vue.watch(value, function (value2) {
      if (tween.value) {
        var _tween$value2;
        (_tween$value2 = tween.value) === null || _tween$value2 === void 0 || _tween$value2.stop();
        tween.value = null;
      }
      innerValue.value = value2;
      if (props2.animationStart && props2.animation) {
        start();
      }
    });
    Vue.onMounted(function () {
      return props2.animation && props2.animationStart && start();
    });
    expose({
      start: start,
      contentStyle: contentStyle
    });
    return function () {
      var trendIcon = props2.trend ? trendIcons[props2.trend] : null;
      var prefix = renderTNodeJSX("prefix") || (trendIcon && props2.trendPlacement !== "right" ? trendIcon : null);
      var suffix = renderTNodeJSX("suffix") || (trendIcon && props2.trendPlacement === "right" ? trendIcon : null);
      var title = renderTNodeJSX("title");
      var unit = renderTNodeJSX("unit");
      var extra = renderTNodeJSX("extra");
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [title && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-title")
      }, [title]), Vue.createVNode(skeleton_index.Skeleton, {
        "animation": "gradient",
        "theme": "text",
        "loading": !!props2.loading
      }, {
        "default": function _default() {
          return [Vue.createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "-content"),
            "style": contentStyle.value
          }, [prefix && Vue.createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-prefix")
          }, [prefix]), Vue.createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-value")
          }, [formatValue.value]), unit && Vue.createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-unit")
          }, [unit]), suffix && Vue.createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-suffix")
          }, [suffix])])];
        }
      }), extra && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-extra")
      }, [extra])]);
    };
  }
});

exports["default"] = _Statistic;
//# sourceMappingURL=statistic.js.map
