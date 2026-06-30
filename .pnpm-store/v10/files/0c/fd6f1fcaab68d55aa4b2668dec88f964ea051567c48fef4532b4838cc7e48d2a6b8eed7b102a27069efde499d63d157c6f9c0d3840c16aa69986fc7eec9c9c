/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var constants = require('../../../_chunks/dep-4291c54c.js');
require('../../../_chunks/dep-8ec26d87.js');
var draggable = require('../../../_chunks/dep-4498a40d.js');
require('@babel/runtime/helpers/toConsumableArray');
var colorPicker_hooks_index = require('../../hooks/index.js');
var colorPicker_components_panel_baseProps = require('./base-props.js');
require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/defineProperty');
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

var SaturationPanel = Vue.defineComponent({
  name: "SaturationPanel",
  props: colorPicker_components_panel_baseProps["default"],
  setup: function setup(props) {
    var baseClassName = colorPicker_hooks_index.useBaseClassName();
    var refPanel = Vue.ref(null);
    var refThumb = Vue.ref(null);
    var dragInstance = Vue.ref(null);
    var panelRect = Vue.reactive({
      width: constants.SATURATION_PANEL_DEFAULT_WIDTH,
      height: constants.SATURATION_PANEL_DEFAULT_HEIGHT
    });
    var styles = Vue.computed(function () {
      var _props$color = props.color,
        saturation = _props$color.saturation,
        value = _props$color.value;
      var width = panelRect.width,
        height = panelRect.height;
      var top = Math.round((1 - value) * height);
      var left = Math.round(saturation * width);
      return {
        color: props.color.rgb,
        left: "".concat(left, "px"),
        top: "".concat(top, "px")
      };
    });
    var getSaturationAndValueByCoordinate = function getSaturationAndValueByCoordinate(coordinate) {
      var width = panelRect.width,
        height = panelRect.height;
      var x = coordinate.x,
        y = coordinate.y;
      var saturation = Math.round(x / width * 100);
      var value = Math.round((1 - y / height) * 100);
      return {
        saturation: saturation,
        value: value
      };
    };
    var handleDrag = function handleDrag(coordinate, isEnded) {
      if (props.disabled) {
        return;
      }
      var _getSaturationAndValu = getSaturationAndValueByCoordinate(coordinate),
        saturation = _getSaturationAndValu.saturation,
        value = _getSaturationAndValu.value;
      props.onChange({
        saturation: saturation / 100,
        value: value / 100,
        addUsedColor: isEnded
      });
    };
    var handleDragEnd = function handleDragEnd(coordinate) {
      if (props.disabled) {
        return;
      }
      Vue.nextTick(function () {
        handleDrag(coordinate, true);
      });
    };
    var panelBackground = Vue.computed(function () {
      return "hsl(".concat(props.color.hue, ", 100%, 50%)");
    });
    Vue.onMounted(function () {
      panelRect.width = refPanel.value.offsetWidth || constants.SATURATION_PANEL_DEFAULT_WIDTH;
      panelRect.height = refPanel.value.offsetHeight || constants.SATURATION_PANEL_DEFAULT_HEIGHT;
      dragInstance.value = new draggable.Draggable(refPanel.value, {
        start: function start() {
          panelRect.width = refPanel.value.offsetWidth;
          panelRect.height = refPanel.value.offsetHeight;
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
      return Vue.createVNode("div", {
        "class": ["".concat(baseClassName.value, "__saturation")],
        "ref": refPanel,
        "style": {
          background: panelBackground.value
        }
      }, [Vue.createVNode("span", {
        "class": ["".concat(baseClassName.value, "__thumb")],
        "role": "slider",
        "tabindex": 0,
        "ref": refThumb,
        "style": styles.value
      }, null)]);
    };
  }
});

exports["default"] = SaturationPanel;
//# sourceMappingURL=saturation.js.map
