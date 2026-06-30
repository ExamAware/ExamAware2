/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode, computed, ref, toRefs, watch, onMounted } from 'vue';
import { ArrowTriangleUpFilledIcon, ArrowTriangleDownFilledIcon } from 'tdesign-icons-vue-next';
import { isNumber, isFunction } from 'lodash-es';
import props from './props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { Skeleton } from '../skeleton/index.js';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import { e as getIEVersion } from '../_chunks/dep-80a99546.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '../skeleton/skeleton.js';
import '../skeleton/props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/skeleton/_index.less';
import '@babel/runtime/helpers/objectWithoutProperties';

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
    _classCallCheck(this, Tween);
    _defineProperty(this, "from", void 0);
    _defineProperty(this, "to", void 0);
    _defineProperty(this, "duration", void 0);
    _defineProperty(this, "onStart", void 0);
    _defineProperty(this, "onUpdate", void 0);
    _defineProperty(this, "onFinish", void 0);
    _defineProperty(this, "startTime", void 0);
    _defineProperty(this, "started", void 0);
    _defineProperty(this, "finished", void 0);
    _defineProperty(this, "timer", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "time", 0);
    _defineProperty(this, "elapsed", 0);
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
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      if (_this.to[key] === void 0) {
        _this.to[key] = value;
      }
    });
    Object.entries(to).forEach(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];
      if (_this.from[key] === void 0) {
        _this.from[key] = value;
      }
    });
  }
  return _createClass(Tween, [{
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
      if (getIEVersion() < 10) this.polyfillStart();else this.normalStart();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (getIEVersion() < 10) clearInterval(this.timer);else cancelAnimationFrame(this.timer);
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

var _Statistic = defineComponent({
  name: "TStatistic",
  props: props,
  setup: function setup(props2, _ref) {
    var _props2$animation$val, _props2$animation;
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("statistic");
    var renderTNodeJSX = useTNodeJSX();
    var _useGlobalIcon = useGlobalIcon({
        ArrowTriangleUpFilledIcon: ArrowTriangleUpFilledIcon,
        ArrowTriangleDownFilledIcon: ArrowTriangleDownFilledIcon
      }),
      ArrowTriangleUpFilledIcon$1 = _useGlobalIcon.ArrowTriangleUpFilledIcon,
      ArrowTriangleDownFilledIcon$1 = _useGlobalIcon.ArrowTriangleDownFilledIcon;
    var trendIcons = {
      increase: createVNode(ArrowTriangleUpFilledIcon$1, null, null),
      decrease: createVNode(ArrowTriangleDownFilledIcon$1, null, null)
    };
    var numberValue = computed(function () {
      return isNumber(props2.value) ? props2.value : 0;
    });
    var innerValue = ref((_props2$animation$val = (_props2$animation = props2.animation) === null || _props2$animation === void 0 ? void 0 : _props2$animation.valueFrom) !== null && _props2$animation$val !== void 0 ? _props2$animation$val : props2.value);
    var innerDecimalPlaces = computed(function () {
      var _ref2, _props2$decimalPlaces, _numberValue$value$to;
      return (_ref2 = (_props2$decimalPlaces = props2.decimalPlaces) !== null && _props2$decimalPlaces !== void 0 ? _props2$decimalPlaces : (_numberValue$value$to = numberValue.value.toString().split(".")[1]) === null || _numberValue$value$to === void 0 ? void 0 : _numberValue$value$to.length) !== null && _ref2 !== void 0 ? _ref2 : 0;
    });
    var tween = ref();
    var _toRefs = toRefs(props2),
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
    var formatValue = computed(function () {
      if (isFunction(props2.format)) {
        return props2.format(innerValue.value);
      }
      return getFormatValue(innerValue.value, props2.decimalPlaces, props2.separator);
    });
    var contentStyle = computed(function () {
      return {
        color: COLOR_MAP[props2.color] || props2.color
      };
    });
    watch(function () {
      return props2.animationStart;
    }, function (value2) {
      if (props2.animation && value2 && !tween.value) {
        start();
      }
    });
    watch(value, function (value2) {
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
    onMounted(function () {
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
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [title && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-title")
      }, [title]), createVNode(Skeleton, {
        "animation": "gradient",
        "theme": "text",
        "loading": !!props2.loading
      }, {
        "default": function _default() {
          return [createVNode("div", {
            "class": "".concat(COMPONENT_NAME.value, "-content"),
            "style": contentStyle.value
          }, [prefix && createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-prefix")
          }, [prefix]), createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-value")
          }, [formatValue.value]), unit && createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-unit")
          }, [unit]), suffix && createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "-content-suffix")
          }, [suffix])])];
        }
      }), extra && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-extra")
      }, [extra])]);
    };
  }
});

export { _Statistic as default };
//# sourceMappingURL=statistic.js.map
