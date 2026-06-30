/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, reactive, computed, nextTick, onMounted, onBeforeUnmount, createVNode } from 'vue';
import { S as SATURATION_PANEL_DEFAULT_WIDTH, d as SATURATION_PANEL_DEFAULT_HEIGHT } from '../../../_chunks/dep-26597e10.mjs';
import '../../utils/index.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import baseProps from './base-props.mjs';
import { D as Draggable } from '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-1dacc319.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';
import '../../../_chunks/dep-b31d8258.mjs';

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
//# sourceMappingURL=saturation.mjs.map
