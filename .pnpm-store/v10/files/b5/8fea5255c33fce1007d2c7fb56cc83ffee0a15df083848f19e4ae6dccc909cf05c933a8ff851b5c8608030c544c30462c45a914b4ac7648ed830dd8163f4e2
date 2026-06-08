/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tabs_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-b6058ff9.js');
var debounce = require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-80a478d7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var TTabNavBar = Vue.defineComponent({
  props: {
    navs: {
      type: Array
    },
    placement: tabs_props["default"].placement,
    value: tabs_props["default"].value
  },
  setup: function setup(props) {
    var COMPONENT_NAME = index.usePrefixClass("tabs");
    var classPrefix = index.usePrefixClass();
    var barRef = Vue.ref();
    var navBarClass = Vue.computed(function () {
      return ["".concat(COMPONENT_NAME.value, "__bar"), "".concat(classPrefix.value, "-is-").concat(props.placement)];
    });
    var navBarStyle = Vue.ref(null);
    var getStyle = function getStyle() {
      var isVertical = ["left", "right"].includes(props.placement.toLowerCase());
      var _ref = isVertical ? ["height", "top"] : ["width", "left"],
        _ref2 = _slicedToArray__default["default"](_ref, 2),
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
      return _defineProperty__default["default"](_defineProperty__default["default"]({}, offsetPropName, "".concat(offset, "px")), sizePropName, props.navs[i].el ? getComputedStyle(props.navs[i].el)[sizePropName] : "0px");
    };
    var update = function update() {
      return navBarStyle.value = getStyle();
    };
    Vue.onMounted(function () {
      Vue.nextTick(function () {
        update();
      });
    });
    Vue.watch([function () {
      return props.navs;
    }, function () {
      return props.value;
    }, function () {
      return props.placement;
    }], function () {
      Vue.nextTick(function () {
        update();
      });
    });
    index$1.useResizeObserver(barRef, debounce.debounce(function () {
      update();
    }, 35));
    return function () {
      return Vue.createVNode("div", {
        "class": navBarClass.value,
        "style": navBarStyle.value,
        "ref": barRef
      }, null);
    };
  }
});

exports["default"] = TTabNavBar;
//# sourceMappingURL=tab-nav-bar.js.map
