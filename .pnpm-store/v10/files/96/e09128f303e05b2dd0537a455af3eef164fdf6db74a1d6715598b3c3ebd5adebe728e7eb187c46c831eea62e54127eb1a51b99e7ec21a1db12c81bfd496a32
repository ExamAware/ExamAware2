/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var space_props = require('./props.js');
var index$2 = require('../_chunks/dep-3565d523.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-953a77eb.js');
require('@babel/runtime/helpers/toConsumableArray');
var helper = require('../_chunks/dep-55c70201.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isString = require('../_chunks/dep-a55e8a08.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var sizeMap = {
  small: "8px",
  medium: "16px",
  large: "24px"
};
var defaultNeedPolyfill = helper.getFlexGapPolyFill();
var _Space = Vue.defineComponent({
  name: "TSpace",
  props: _objectSpread(_objectSpread({}, space_props["default"]), {}, {
    forceFlexGapPolyfill: Boolean
  }),
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("space");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var getChildSlots = index$2.useChildSlots();
    var getFlatChildren = index$2.useFlatChildrenSlots();
    var needPolyfill = Vue.computed(function () {
      return props2.forceFlexGapPolyfill || defaultNeedPolyfill;
    });
    var renderStyle = Vue.computed(function () {
      var renderGap = "";
      if (isArray.isArray(props2.size)) {
        renderGap = props2.size.map(function (s) {
          if (isNumber.isNumber(s)) return "".concat(s, "px");
          if (isString.isString(s) && ["small", "medium", "large"].includes(s)) return sizeMap[s];
          return s;
        }).join(" ");
      } else if (isString.isString(props2.size)) {
        renderGap = ["small", "medium", "large"].includes(props2.size) ? sizeMap[props2.size] : props2.size;
      } else if (isNumber.isNumber(props2.size)) {
        renderGap = "".concat(props2.size, "px");
      }
      var style = {};
      if (needPolyfill.value) {
        var _renderGap$split = renderGap.split(" "),
          _renderGap$split2 = _slicedToArray__default["default"](_renderGap$split, 2),
          columnGap = _renderGap$split2[0],
          rowGap = _renderGap$split2[1];
        style["--td-space-column-gap"] = columnGap;
        style["--td-space-row-gap"] = rowGap || columnGap;
      } else {
        style.gap = renderGap;
      }
      return style;
    });
    function renderChildren() {
      var children = getFlatChildren(getChildSlots());
      var separatorContent = renderTNodeJSX("separator");
      return children.map(function (child, index) {
        var showSeparator = index + 1 !== children.length && separatorContent;
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item")
        }, [child]), showSeparator && Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "-item-separator")
        }, [separatorContent])]);
      });
    }
    return function () {
      var spaceClassNames = ["".concat(COMPONENT_NAME.value), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "-align-").concat(props2.align), props2.align), "".concat(COMPONENT_NAME.value, "-").concat(props2.direction), props2.direction), "".concat(COMPONENT_NAME.value, "--break-line"), props2.breakLine), "".concat(COMPONENT_NAME.value, "--polyfill"), needPolyfill.value)];
      return Vue.createVNode("div", {
        "class": spaceClassNames,
        "style": renderStyle.value
      }, [renderChildren()]);
    };
  }
});

exports["default"] = _Space;
//# sourceMappingURL=space.js.map
