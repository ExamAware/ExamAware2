/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var TSliderMark = defineComponent({
  name: "TSliderMark",
  props: {
    mark: {
      type: [Object, Array, String, Number]
    },
    point: {
      type: Number
    },
    onClickMarkPoint: {
      type: Function,
      "default": function _default() {}
    }
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("slider__mark");
    var changeValue = function changeValue(e) {
      var _props$onClickMarkPoi;
      e.stopPropagation();
      props === null || props === void 0 || (_props$onClickMarkPoi = props.onClickMarkPoint) === null || _props$onClickMarkPoi === void 0 || _props$onClickMarkPoi.call(props, props.point);
    };
    return function () {
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-text"),
        "onClick": changeValue
      }, [props.mark]);
    };
  }
});

export { TSliderMark as default };
//# sourceMappingURL=slider-mark.mjs.map
