/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var constants = require('../../../_chunks/dep-4291c54c.js');
require('../../../_chunks/dep-8ec26d87.js');
var draggable = require('../../../_chunks/dep-4498a40d.js');
require('@babel/runtime/helpers/toConsumableArray');
var colorPicker_hooks_index = require('../../hooks/index.js');
var colorPicker_components_panel_baseProps = require('./base-props.js');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('tinycolor2');
require('../../../_chunks/dep-a55e8a08.js');
require('../../../_chunks/dep-b3b464e8.js');
require('@babel/runtime/helpers/typeof');
require('../../../_chunks/dep-87589faa.js');
require('../../../_chunks/dep-05f89f0d.js');
require('../../../_chunks/dep-4ccaead1.js');
require('../../../_chunks/dep-953a77eb.js');
require('../../../_chunks/dep-8abdfb41.js');
require('../../../_chunks/dep-ecaaae91.js');
require('../../../config-provider/hooks/useConfig.js');
require('../../../_chunks/dep-5d7e2375.js');
require('../../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../../_chunks/dep-92e23f17.js');
require('../../../_chunks/dep-0ff616fe.js');
require('../../../_chunks/dep-5f52cd42.js');
require('../../../_chunks/dep-48f60c78.js');
require('../../../_chunks/dep-0813861e.js');
require('../../../_chunks/dep-f57bcb19.js');
require('../../../_chunks/dep-dc4bbc14.js');
require('../../../_chunks/dep-e27ea667.js');
require('../../../_chunks/dep-165ca38a.js');
require('../../../_chunks/dep-32412d92.js');
require('../../../_chunks/dep-a8a3d718.js');
require('../../../_chunks/dep-54e566d9.js');
require('../../../_chunks/dep-591a72de.js');
require('../../../_chunks/dep-8adeee89.js');
require('../../../_chunks/dep-4d2ef282.js');
require('../../../_chunks/dep-929933ce.js');
require('../../../_chunks/dep-6b1f0ef8.js');
require('../../../_chunks/dep-cc66acf1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorSlider = Vue.defineComponent({
  name: "ColorSlider",
  props: _objectSpread(_objectSpread({}, colorPicker_components_panel_baseProps["default"]), {}, {
    className: {
      type: String,
      "default": ""
    },
    value: {
      type: Number,
      "default": 0
    },
    maxValue: {
      type: Number,
      "default": 360
    },
    railStyle: {
      type: Object
    },
    type: {
      type: String,
      "default": "hue"
    }
  }),
  setup: function setup(props) {
    var baseClassName = colorPicker_hooks_index.useBaseClassName();
    var refPanel = Vue.ref(null);
    var refThumb = Vue.ref(null);
    var dragInstance = Vue.ref(null);
    var panelRect = Vue.reactive({
      width: constants.SLIDER_DEFAULT_WIDTH
    });
    var styles = Vue.computed(function () {
      var width = panelRect.width;
      if (!width) {
        return;
      }
      var left = Math.round(props.value / props.maxValue * 100);
      var color = props.type === "hue" ? "hsl(".concat(props.color.hue, ", 100%, 50%)") : props.color.rgba;
      return {
        left: "".concat(left, "%"),
        color: color
      };
    });
    var handleDrag = function handleDrag(coordinate, isEnded) {
      if (props.disabled) {
        return;
      }
      var width = panelRect.width;
      var x = coordinate.x;
      var value = Math.round(x / width * props.maxValue * 100) / 100;
      props.onChange(value, isEnded);
    };
    var handleDragEnd = function handleDragEnd(coordinate) {
      if (props.disabled) {
        return;
      }
      handleDrag(coordinate, true);
    };
    Vue.onMounted(function () {
      panelRect.width = refPanel.value.offsetWidth || constants.SLIDER_DEFAULT_WIDTH;
      dragInstance.value = new draggable.Draggable(refPanel.value, {
        start: function start() {
          panelRect.width = refPanel.value.offsetWidth;
        },
        drag: function drag(coordinate) {
          handleDrag(coordinate);
        },
        end: handleDragEnd
      });
    });
    Vue.onBeforeUnmount(function () {
      dragInstance.value.destroy();
    });
    return function () {
      var paddingStyle = {
        background: "linear-gradient(90deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.0) 93%, ".concat(props.color.rgb, " 93%, ").concat(props.color.rgb, " 100%)")
      };
      return Vue.createVNode("div", {
        "class": ["".concat(baseClassName.value, "__slider-wrapper"), "".concat(baseClassName.value, "__slider-wrapper--").concat(props.type, "-type")]
      }, [props.type === "alpha" && Vue.createVNode("div", {
        "class": "".concat(baseClassName.value, "__slider-padding"),
        "style": paddingStyle
      }, null), Vue.createVNode("div", {
        "class": ["".concat(baseClassName.value, "__slider"), props.className],
        "ref": refPanel
      }, [Vue.createVNode("div", {
        "class": "".concat(baseClassName.value, "__rail"),
        "style": props.railStyle
      }, null), Vue.createVNode("span", {
        "class": ["".concat(baseClassName.value, "__thumb")],
        "role": "slider",
        "tabindex": 0,
        "ref": refThumb,
        "style": styles.value
      }, null)])]);
    };
  }
});

exports["default"] = ColorSlider;
//# sourceMappingURL=slider.js.map
