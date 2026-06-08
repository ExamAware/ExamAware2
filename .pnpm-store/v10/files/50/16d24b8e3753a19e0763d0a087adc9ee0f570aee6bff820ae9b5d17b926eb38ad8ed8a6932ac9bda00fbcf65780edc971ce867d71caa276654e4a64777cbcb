/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, onMounted, nextTick, watch, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import props from './props.js';
import { debounce } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useResizeObserver } from '../_chunks/dep-80a77612.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var TTabNavBar = defineComponent({
  props: {
    navs: {
      type: Array
    },
    placement: props.placement,
    value: props.value
  },
  setup: function setup(props) {
    var COMPONENT_NAME = usePrefixClass("tabs");
    var classPrefix = usePrefixClass();
    var barRef = ref();
    var navBarClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__bar"), "".concat(classPrefix.value, "-is-").concat(props.placement)];
    });
    var navBarStyle = ref(null);
    var getStyle = function getStyle() {
      var isVertical = ["left", "right"].includes(props.placement.toLowerCase());
      var _ref = isVertical ? ["height", "top"] : ["width", "left"],
        _ref2 = _slicedToArray(_ref, 2),
        sizePropName = _ref2[0],
        offsetPropName = _ref2[1];
      var offset = 0;
      var i = 0;
      for (; i < props.navs.length; i++) {
        var _props$navs$i;
        if (props.navs[i].props.value === props.value) {
          break;
        }
        if ((_props$navs$i = props.navs[i]) !== null && _props$navs$i !== void 0 && _props$navs$i.el) {
          var sizeWithUnit = getComputedStyle(props.navs[i].el)[sizePropName];
          var size = parseFloat(sizeWithUnit);
          offset += size;
        }
      }
      if (!props.navs[i]) return {};
      return _defineProperty(_defineProperty({}, offsetPropName, "".concat(offset, "px")), sizePropName, props.navs[i].el ? getComputedStyle(props.navs[i].el)[sizePropName] : "0px");
    };
    var update = function update() {
      return navBarStyle.value = getStyle();
    };
    onMounted(function () {
      nextTick(function () {
        update();
      });
    });
    watch([function () {
      return props.navs;
    }, function () {
      return props.value;
    }, function () {
      return props.placement;
    }], function () {
      nextTick(function () {
        update();
      });
    });
    useResizeObserver(barRef, debounce(function () {
      update();
    }, 35));
    return function () {
      return createVNode("div", {
        "class": navBarClass.value,
        "style": navBarStyle.value,
        "ref": barRef
      }, null);
    };
  }
});

export { TTabNavBar as default };
//# sourceMappingURL=tab-nav-bar.js.map
