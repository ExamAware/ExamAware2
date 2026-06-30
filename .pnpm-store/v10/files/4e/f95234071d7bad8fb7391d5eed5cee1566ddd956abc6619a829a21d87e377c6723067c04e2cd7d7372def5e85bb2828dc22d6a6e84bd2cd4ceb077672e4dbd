/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../_chunks/dep-88e5a7b0.mjs';
import { defineComponent, computed, createVNode, ref, nextTick } from 'vue';
import { CloseCircleFilledIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon, CloseIcon, CheckIcon, ErrorIcon } from 'tdesign-icons-vue-next';
import { d as getBackgroundColor } from '../_chunks/dep-0cde7579.mjs';
import { CIRCLE_SIZE_PX, CIRCLE_SIZE, PRO_THEME, CIRCLE_FONT_SIZE_RATIO, STATUS_ICON } from './consts/index.mjs';
import props from './props.mjs';
import { a as useTNodeJSX, u as usePrefixClass, i as useGlobalIcon, p as useResizeObserver } from '../_chunks/dep-7673347f.mjs';
import { isString, isObject } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var _Progress = defineComponent({
  name: "TProgress",
  props: props,
  setup: function setup(props2) {
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("progress");
    var _useGlobalIcon = useGlobalIcon({
        CloseCircleFilledIcon: CloseCircleFilledIcon,
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon,
        CloseIcon: CloseIcon,
        CheckIcon: CheckIcon,
        ErrorIcon: ErrorIcon
      }),
      CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon,
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon,
      CloseIcon$1 = _useGlobalIcon.CloseIcon,
      CheckIcon$1 = _useGlobalIcon.CheckIcon,
      ErrorIcon$1 = _useGlobalIcon.ErrorIcon;
    var CIRCLE_ICONS_MAP = {
      success: CheckIcon$1,
      warning: ErrorIcon$1,
      error: CloseIcon$1
    };
    var NORMAL_ICONS_MAP = {
      success: CheckCircleFilledIcon$1,
      warning: ErrorCircleFilledIcon$1,
      error: CloseCircleFilledIcon$1
    };
    var statusStyle = computed(function () {
      if (!props2.status && props2.percentage >= 100) {
        return "success";
      }
      return props2.status || "default";
    });
    var trackBgStyle = computed(function () {
      var style = {};
      if (props2.strokeWidth) {
        var height = isString(props2.strokeWidth) ? props2.strokeWidth : "".concat(props2.strokeWidth, "px");
        style.height = height;
        style.borderRadius = height;
      }
      if (props2.trackColor) {
        style.backgroundColor = props2.trackColor;
      }
      return style;
    });
    var barStyle = computed(function () {
      return {
        width: "".concat(props2.percentage, "%"),
        background: props2.color && getBackgroundColor(props2.color)
      };
    });
    var circlePathStyle = computed(function () {
      var strokeColor = isObject(props2.color) ? "" : props2.color;
      return {
        stroke: strokeColor
      };
    });
    var circleOuterStyle = computed(function () {
      var strokeColor = isObject(props2.trackColor) ? "" : props2.trackColor;
      return {
        stroke: strokeColor
      };
    });
    var diameter = computed(function () {
      var diameterValue = CIRCLE_SIZE_PX.MEDIUM;
      if (!props2.size) {
        return diameterValue;
      }
      var SMALL = CIRCLE_SIZE.SMALL,
        LARGE = CIRCLE_SIZE.LARGE,
        MEDIUM = CIRCLE_SIZE.MEDIUM;
      switch (props2.size) {
        case SMALL:
          diameterValue = CIRCLE_SIZE_PX.SMALL;
          break;
        case MEDIUM:
          diameterValue = CIRCLE_SIZE_PX.MEDIUM;
          break;
        case LARGE:
          diameterValue = CIRCLE_SIZE_PX.LARGE;
          break;
        default:
          var customSize = Number(props2.size);
          diameterValue = !isNaN(customSize) && customSize > 0 ? customSize : CIRCLE_SIZE_PX.MEDIUM;
          break;
      }
      return diameterValue;
    });
    var rPoints = computed(function () {
      return diameter.value / 2;
    });
    var radius = computed(function () {
      return rPoints.value - circleStrokeWidth.value / 2;
    });
    var circleStyle = computed(function () {
      if (props2.theme !== PRO_THEME.CIRCLE) {
        return {};
      }
      var fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.MEDIUM;
      if (diameter.value <= CIRCLE_SIZE_PX.SMALL) {
        fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.SMALL;
      } else if (diameter.value >= CIRCLE_SIZE_PX.LARGE) {
        fontSize = diameter.value * CIRCLE_FONT_SIZE_RATIO.LARGE;
      }
      return {
        width: "".concat(diameter.value, "px"),
        height: "".concat(diameter.value, "px"),
        fontSize: "".concat(fontSize, "px")
      };
    });
    var circleStrokeWidth = computed(function () {
      var defaultWidth = props2.size === CIRCLE_SIZE.SMALL ? 4 : 6;
      return props2.strokeWidth ? Number(props2.strokeWidth) : defaultWidth;
    });
    var strokeDashArr = computed(function () {
      var radius2 = (diameter.value - circleStrokeWidth.value) / 2;
      var perimeter = Math.PI * 2 * radius2;
      var percent = props2.percentage / 100;
      return "".concat(perimeter * percent, "  ").concat(perimeter * (1 - percent));
    });
    var getIconMap = computed(function () {
      return props2.theme === PRO_THEME.CIRCLE ? CIRCLE_ICONS_MAP : NORMAL_ICONS_MAP;
    });
    var getLabelContent = function getLabelContent() {
      var labelContentRender = "".concat(props2.percentage, "%");
      var status = props2.status || "";
      if (STATUS_ICON.includes(status) && props2.theme !== PRO_THEME.PLUMP) {
        var component = getIconMap.value[status];
        if (component) {
          labelContentRender = createVNode(component, {
            "class": ["".concat(COMPONENT_NAME.value, "__icon")]
          }, null);
        }
      }
      return labelContentRender;
    };
    var infoIsOut = ref(true);
    var infoRef = ref(null);
    var separateClasses = computed(function () {
      return infoIsOut.value ? "".concat(COMPONENT_NAME.value, "--over-ten") : "".concat(COMPONENT_NAME.value, "--under-ten");
    });
    function updateInfoIsOut() {
      return _updateInfoIsOut.apply(this, arguments);
    }
    function _updateInfoIsOut() {
      _updateInfoIsOut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var infoEl;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(props2.theme === PRO_THEME.PLUMP)) {
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
              return nextTick();
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
    useResizeObserver(infoRef, updateInfoIsOut);
    return function () {
      var labelContent = createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__info")
      }, [renderTNodeJSX("label", getLabelContent())]);
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [props2.theme === PRO_THEME.LINE && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--thin ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value)
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__bar"),
        "style": trackBgStyle.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "style": barStyle.value
      }, null)]), labelContent]), props2.theme === PRO_THEME.PLUMP && createVNode("div", {
        "class": ["".concat(COMPONENT_NAME.value, "__bar ").concat(COMPONENT_NAME.value, "--plump ").concat(separateClasses.value), _defineProperty({}, "".concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value), statusStyle.value)],
        "style": trackBgStyle.value
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner"),
        "ref": infoRef,
        "style": barStyle.value
      }, [infoIsOut.value && labelContent]), !infoIsOut.value && labelContent]), props2.theme === PRO_THEME.CIRCLE && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "--circle ").concat(COMPONENT_NAME.value, "--status--").concat(statusStyle.value),
        "style": circleStyle.value
      }, [labelContent, createVNode("svg", {
        "width": diameter.value,
        "height": diameter.value,
        "viewBox": "0 0 ".concat(diameter.value, " ").concat(diameter.value)
      }, [createVNode("circle", {
        "cx": rPoints.value,
        "cy": rPoints.value,
        "r": radius.value,
        "stroke-width": circleStrokeWidth.value,
        "fill": "none",
        "class": ["".concat(COMPONENT_NAME.value, "__circle-outer")],
        "style": circleOuterStyle.value
      }, null), props2.percentage > 0 && createVNode("circle", {
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

export { _Progress as default };
//# sourceMappingURL=progress.mjs.map
