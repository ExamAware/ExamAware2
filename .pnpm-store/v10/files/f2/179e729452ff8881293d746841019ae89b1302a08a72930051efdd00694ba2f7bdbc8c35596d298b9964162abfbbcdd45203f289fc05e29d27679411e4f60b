/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, createVNode } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

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
//# sourceMappingURL=slider-mark.js.map
