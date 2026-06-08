/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var FakeArrow = defineComponent({
  name: "TFakeArrow",
  props: {
    isActive: {
      type: Boolean
    },
    overlayClassName: {
      type: [String, Object, Array]
    },
    overlayStyle: {
      type: [Object, String]
    }
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("fake-arrow");
    var classes = computed(function () {
      return [COMPONENT_NAME.value, _defineProperty({}, "".concat(COMPONENT_NAME.value, "--active"), props.isActive), props.overlayClassName];
    });
    return function () {
      return createVNode("svg", {
        "class": classes.value,
        "width": "16",
        "height": "16",
        "viewBox": "0 0 16 16",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg",
        "style": props.overlayStyle
      }, [createVNode("path", {
        "d": "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
        "stroke": "black",
        "stroke-opacity": "0.9",
        "stroke-width": "1.3"
      }, null)]);
    };
  }
});

export { FakeArrow as default };
//# sourceMappingURL=fake-arrow.js.map
