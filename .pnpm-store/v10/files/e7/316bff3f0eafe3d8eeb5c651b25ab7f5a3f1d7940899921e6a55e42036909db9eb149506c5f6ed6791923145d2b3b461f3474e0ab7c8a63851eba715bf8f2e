/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, reactive, computed, onMounted, onBeforeUnmount, createVNode, nextTick } from 'vue';
import { S as SATURATION_PANEL_DEFAULT_WIDTH, d as SATURATION_PANEL_DEFAULT_HEIGHT } from '../../../_chunks/dep-8d136a55.js';
import '../../../_chunks/dep-110706c1.js';
import { D as Draggable } from '../../../_chunks/dep-ddf323ca.js';
import '@babel/runtime/helpers/toConsumableArray';
import { useBaseClassName } from '../../hooks/index.js';
import baseProps from './base-props.js';
import '@babel/runtime/helpers/slicedToArray';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/defineProperty';
import 'tinycolor2';
import 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../../../_chunks/dep-fe23be6e.js';
import '../../../_chunks/dep-81b01cae.js';
import '../../../_chunks/dep-9e6d8a78.js';
import '../../../config-provider/hooks/useConfig.js';
import '../../../config-provider/utils/context.js';
import '../../../_chunks/dep-938cd955.js';
import 'dayjs';
import '../../../_chunks/dep-880d05b9.js';

var SaturationPanel = defineComponent({
  name: "SaturationPanel",
  props: baseProps,
  setup: function setup(props) {
    var baseClassName = useBaseClassName();
    var refPanel = ref(null);
    var refThumb = ref(null);
    var dragInstance = ref(null);
    var panelRect = reactive({
      width: SATURATION_PANEL_DEFAULT_WIDTH,
      height: SATURATION_PANEL_DEFAULT_HEIGHT
    });
    var styles = computed(function () {
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
      nextTick(function () {
        handleDrag(coordinate, true);
      });
    };
    var panelBackground = computed(function () {
      return "hsl(".concat(props.color.hue, ", 100%, 50%)");
    });
    onMounted(function () {
      panelRect.width = refPanel.value.offsetWidth || SATURATION_PANEL_DEFAULT_WIDTH;
      panelRect.height = refPanel.value.offsetHeight || SATURATION_PANEL_DEFAULT_HEIGHT;
      dragInstance.value = new Draggable(refPanel.value, {
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
    onBeforeUnmount(function () {
      dragInstance.value.destroy();
    });
    return function () {
      return createVNode("div", {
        "class": ["".concat(baseClassName.value, "__saturation")],
        "ref": refPanel,
        "style": {
          background: panelBackground.value
        }
      }, [createVNode("span", {
        "class": ["".concat(baseClassName.value, "__thumb")],
        "role": "slider",
        "tabindex": 0,
        "ref": refThumb,
        "style": styles.value
      }, null)]);
    };
  }
});

export { SaturationPanel as default };
//# sourceMappingURL=saturation.js.map
