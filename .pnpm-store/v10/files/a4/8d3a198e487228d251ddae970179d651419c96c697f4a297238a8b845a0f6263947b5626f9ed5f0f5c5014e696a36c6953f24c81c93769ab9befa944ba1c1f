/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var helper = require('../_chunks/dep-55c70201.js');
var progress_consts_index = require('./consts/index.js');
var progress_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index$2 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-b6058ff9.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isObject = require('../_chunks/dep-0813861e.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-4fa46641.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);

var _Progress = Vue.defineComponent({
  name: "TProgress",
  props: progress_props["default"],
  setup: function setup(props2) {
    var renderTNodeJSX = index.useTNodeJSX();
    var COMPONENT_NAME = index$1.usePrefixClass("progress");
    var _useGlobalIcon = index$2.useGlobalIcon({
        CloseCircleFilledIcon: tdesignIconsVueNext.CloseCircleFilledIcon,
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon,
        CloseIcon: tdesignIconsVueNext.CloseIcon,
        CheckIcon: tdesignIconsVueNext.CheckIcon,
        ErrorIcon: tdesignIconsVueNext.ErrorIcon
      }),
      CloseCircleFilledIcon = _useGlobalIcon.CloseCircleFilledIcon,
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon,
      CloseIcon = _useGlobalIcon.CloseIcon,
      CheckIcon = _useGlobalIcon.CheckIcon,
      ErrorIcon = _useGlobalIcon.ErrorIcon;
    var CIRCLE_ICONS_MAP = {
      success: CheckIcon,
      warning: ErrorIcon,
      error: CloseIcon
    };
    var NORMAL_ICONS_MAP = {
      success: CheckCircleFilledIcon,
      warning: ErrorCircleFilledIcon,
      error: CloseCircleFilledIcon
    };
    var statusStyle = Vue.computed(function () {
      if (!props2.status && props2.percentage >= 100) {
        return "success";
      }
      return props2.status || "default";
    });
    var trackBgStyle = Vue.computed(function () {
      var style = {};
      if (props2.strokeWidth) {
        var height = isString.isString(props2.strokeWidth) ? props2.strokeWidth : "".concat(props2.strokeWidth, "px");
        style.height = height;
        style.borderRadius = height;
      }
      if (props2.trackColor) {
        style.backgroundColor = props2.trackColor;
      }
      return style;
    });
    var barStyle = Vue.computed(function () {
      return {
        width: "".concat(props2.percentage, "%"),
        background: props2.color && helper.getBackgroundColor(props2.color)
      };
    });
    var circlePathStyle = Vue.computed(function () {
      var strokeColor = isObject.isObject(props2.color) ? "" : props2.color;
      return {
        stroke: strokeColor
      };
    });
    var circleOuterStyle = Vue.computed(function () {
      var strokeColor = isObject.isObject(props2.trackColor) ? "" : props2.trackColor;
      return {
        stroke: strokeColor
      };
    });
    var diameter = Vue.computed(function () {
      var diameterValue = progress_consts_index.CIRCLE_SIZE_PX.MEDIUM;
      if (!props2.size) {
        return diameterValue;
      }
      var SMALL = progress_consts_index.CIRCLE_SIZE.SMALL,
        LARGE = progress_consts_index.CIRCLE_SIZE.LARGE,
        MEDIUM = progress_consts_index.CIRCLE_SIZE.MEDIUM;
      switch (props2.size) {
        case SMALL:
          diameterValue = progress_consts_index.CIRCLE_SIZE_PX.SMALL;
          break;
        case MEDIUM:
          diameterValue = progress_consts_index.CIRCLE_SIZE_PX.MEDIUM;
          break;
        case LARGE:
          diameterValue = progress_consts_index.CIRCLE_SIZE_PX.LARGE;
          break;
        default:
          var customSize = Number(props2.size);
          diameterValue = !isNaN(customSize) && customSize > 0 ? customSize : progress_consts_index.CIRCLE_SIZE_PX.MEDIUM;
          break;
      }
      return diameterValue;
    });
    var rPoints = Vue.computed(function () {
      return diameter.value / 2;
    });
    var radius = Vue.computed(function () {
      return rPoints.value - circleStrokeWidth.value / 2;
    });
    var circleStyle = Vue.computed(function () {
      if (props2.theme !== progress_consts_index.PRO_THEME.CIRCLE) {
        return {};
      }
      var fontSize = diameter.value * progress_consts_index.CIRCLE_FONT_SIZE_RATIO.MEDIUM;
      if (diameter.value <= progress_consts_index.CIRCLE_SIZE_PX.SMALL) {
        fontSize = diameter.value * progress_consts_index.CIRCLE_FONT_SIZE_RATIO.SMALL;
      } else if (diameter.value >= progress_consts_index.CIRCLE_SIZE_PX.LARGE) {
        fontSize = diameter.value * progress_consts_index.CIRCLE_FONT_SIZE_RATIO.LARGE;
      }
      return {
        width: "".concat(diameter.value, "px"),
        height: "".concat(diameter.value, "px"),
        fontSize: "".concat(fontSize, "px")
      };
    });
    var circleStrokeWidth = Vue.computed(function () {
      var defaultWidth = props2.size === progress_consts_index.CIRCLE_SIZE.SMALL ? 4 : 6;
      return props2.strokeWidth ? Number(props2.strokeWidth) : defaultWidth;
    });
    var strokeDashArr = Vue.computed(function () {
      var radius2 = (diameter.value - circleStrokeWidth.value) / 2;
      var perimeter = Math.PI * 2 * radius2;
      var percent = props2.percentage / 100;
      return "".concat(perimeter * percent, "  ").concat(perimeter * (1 - percent));
    });
    var getIconMap = Vue.computed(function () {
      return props2.theme === progress_consts_index.PRO_THEME.CIRCLE ? CIRCLE_ICONS_MAP : NORMAL_ICONS_MAP;
    });
    var getLabelContent = function getLabelContent() {
      var labelContentRender = "".concat(props2.percentage, "%");
      var status = props2.status || "";
      if (progress_consts_index.STATUS_ICON.includes(status) && props2.theme !== progress_consts_index.PRO_THEME.PLUMP) {
        var component = getIconMap.value[status];
        if (component) {
          labelContentRender = Vue.createVNode(component, {
            "class": ["".concat(COMPONENT_NAME.value, "__icon")]
          }, null);
        }
      }
      return labelContentRender;
    };
    var infoIsOut = Vue.ref(true);
    var infoRef = Vue.ref(null);
    var separateClasses = Vue.computed(function () {
      return infoIsOut.value ? "".concat(COMPONENT_NAME.value, "--over-ten") : "".concat(COMPONENT_NAME.value, "--under-ten");
    });
    function updateInfoIsOut() {
      return _updateInfoIsOut.apply(this, arguments);
    }
    function _updateInfoIsOut() {
      _updateInfoIsOut = _asyncToGenerator__default["default"](/*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
        var infoEl;
        return _regeneratorRuntime__default["default"].wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(props2.theme === progress_consts_index.PRO_THEME.PLUMP)) {
                _context.next = 3;
                break;
              }
              if (!(!infoRef.value || props2.label === false)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              _context.next = 2;
              return Vue.nextTick();
            case 2:
              infoEl = infoRef.value.querySelector(".".concat(COMPONENT_NAME.value, "__info")) || infoRef.value.nextElementSibling;
              infoIsOut.value = infoRef.value.clientWidth > (infoEl === null || infoEl === void 0 ? void 0 : infoEl.clientWidth) + 10;
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _updateInfoIsOut.apply(this, arguments);
    }
    index$3.useResizeObserver(infoRef, updateInfoIsOut);
    return function () {
      var labelContent = Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__info")
      }, [renderTNodeJSX("label", getLabelContent())]);
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [props2.theme === progress_consts_index.PRO_THEME.LINE && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--thin ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value)
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__bar"),
        "style": trackBgStyle.value
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": barStyle.value
      }, null)]), labelContent]), props2.theme === progress_consts_index.PRO_THEME.PLUMP && Vue.createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__bar ").concat(COMPONENT_NAME.value, "--plump ").concat(separateClasses.value), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value), statusStyle.value)],
        "style": trackBgStyle.value
      }, [Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "ref": infoRef,
        "style": barStyle.value
      }, [infoIsOut.value && labelContent]), !infoIsOut.value && labelContent]), props2.theme === progress_consts_index.PRO_THEME.CIRCLE && Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--circle ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value),
        "style": circleStyle.value
      }, [labelContent, Vue.createVNode("svg", {
        "width": diameter.value,
        "height": diameter.value,
        "viewBox": "0 0 ".concat(diameter.value, " ").concat(diameter.value)
      }, [Vue.createVNode("circle", {
        "cx": rPoints.value,
        "cy": rPoints.value,
        "r": radius.value,
        "stroke-width": circleStrokeWidth.value,
        "fill": "none",
        "class": ["".concat(COMPONENT_NAME.value, "__circle-outer")],
        "style": circleOuterStyle.value
      }, null), props2.percentage > 0 && Vue.createVNode("circle", {
        "cx": rPoints.value,
        "cy": rPoints.value,
        "r": radius.value,
        "stroke-width": circleStrokeWidth.value,
        "fill": "none",
        "stroke-linecap": "round",
        "class": ["".concat(COMPONENT_NAME.value, "__circle-inner")],
        "transform": "matrix(0,-1,1,0,0,".concat(diameter.value, ")"),
        "stroke-dasharray": strokeDashArr.value,
        "style": circlePathStyle.value
      }, null)])])]);
    };
  }
});

exports["default"] = _Progress;
//# sourceMappingURL=progress.js.map
