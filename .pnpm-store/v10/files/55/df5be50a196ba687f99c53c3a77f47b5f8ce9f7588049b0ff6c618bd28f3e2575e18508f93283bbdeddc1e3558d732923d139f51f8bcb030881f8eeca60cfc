/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, reactive, computed, onMounted, onBeforeUnmount, createVNode } from 'vue';
import { _ as _defineProperty } from '../../../_chunks/dep-1dacc319.mjs';
import { e as SLIDER_DEFAULT_WIDTH } from '../../../_chunks/dep-26597e10.mjs';
import '../../utils/index.mjs';
import { useBaseClassName } from '../../hooks/index.mjs';
import baseProps from './base-props.mjs';
import { D as Draggable } from '../../../_chunks/dep-149cfe2d.mjs';
import '../../../_chunks/dep-257428bc.mjs';
import '../../../_chunks/dep-9003fde5.mjs';
import '../../../_chunks/dep-9f459d8b.mjs';
import '../../../_chunks/dep-84fd47b3.mjs';
import '../../../_chunks/dep-b31d8258.mjs';
import 'lodash-es';
import '../../../_chunks/dep-00b4e06a.mjs';
import '../../../_chunks/dep-7673347f.mjs';
import '../../../_chunks/dep-51a43106.mjs';
import '../../../_chunks/dep-fe644854.mjs';
import '../../../config-provider/hooks/useConfig.mjs';
import '../../../config-provider/utils/context.mjs';
import '../../../_chunks/dep-a4c09318.mjs';
import '../../../_chunks/dep-ffb85102.mjs';
import '../../../_chunks/dep-ad588525.mjs';
import '../../../_chunks/dep-22ebd6af.mjs';
import '../../../_chunks/dep-cdd448ec.mjs';
import '../../../_chunks/dep-97ecacde.mjs';
import '../../../_chunks/dep-d36c4a3f.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorSlider = defineComponent({
  name: "ColorSlider",
  props: _objectSpread(_objectSpread({}, baseProps), {}, {
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
    var baseClassName = useBaseClassName();
    var refPanel = ref(null);
    var refThumb = ref(null);
    var dragInstance = ref(null);
    var panelRect = reactive({
      width: SLIDER_DEFAULT_WIDTH
    });
    var styles = computed(function () {
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
    onMounted(function () {
      panelRect.width = refPanel.value.offsetWidth || SLIDER_DEFAULT_WIDTH;
      dragInstance.value = new Draggable(refPanel.value, {
        start: function start() {
          panelRect.width = refPanel.value.offsetWidth;
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
      var paddingStyle = {
        background: "linear-gradient(90deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.0) 93%, ".concat(props.color.rgb, " 93%, ").concat(props.color.rgb, " 100%)")
      };
      return createVNode("div", {
        "class": ["".concat(baseClassName.value, "__slider-wrapper"), "".concat(baseClassName.value, "__slider-wrapper--").concat(props.type, "-type")]
      }, [props.type === "alpha" && createVNode("div", {
        "class": "".concat(baseClassName.value, "__slider-padding"),
        "style": paddingStyle
      }, null), createVNode("div", {
        "class": ["".concat(baseClassName.value, "__slider"), props.className],
        "ref": refPanel
      }, [createVNode("div", {
        "class": "".concat(baseClassName.value, "__rail"),
        "style": props.railStyle
      }, null), createVNode("span", {
        "class": ["".concat(baseClassName.value, "__thumb")],
        "role": "slider",
        "tabindex": 0,
        "ref": refThumb,
        "style": styles.value
      }, null)])]);
    };
  }
});

export { ColorSlider as default };
//# sourceMappingURL=slider.mjs.map
