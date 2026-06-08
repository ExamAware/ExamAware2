/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, onMounted, nextTick, watch, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import props from './props.mjs';
import { u as usePrefixClass, p as useResizeObserver } from '../_chunks/dep-7673347f.mjs';
import { debounce } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
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
//# sourceMappingURL=tab-nav-bar.mjs.map
