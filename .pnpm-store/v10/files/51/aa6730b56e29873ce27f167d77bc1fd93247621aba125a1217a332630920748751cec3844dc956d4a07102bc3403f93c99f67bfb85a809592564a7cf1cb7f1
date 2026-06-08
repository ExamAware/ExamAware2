/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var divider_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var helper = require('../_chunks/dep-55c70201.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
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
require('../_chunks/dep-990979bb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _Divider = Vue.defineComponent({
  name: "TDivider",
  props: divider_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("divider");
    var renderContent = index$1.useContent();
    return function () {
      var children = renderContent("default", "content");
      var isHorizontal = Vue.computed(function () {
        return props2.layout !== "vertical";
      });
      var showText = Vue.computed(function () {
        return isHorizontal.value && !!children;
      });
      var dividerClassNames = ["".concat(COMPONENT_NAME.value), ["".concat(COMPONENT_NAME.value, "--").concat(props2.layout)], _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--dashed"), !!props2.dashed), "".concat(COMPONENT_NAME.value, "--with-text"), !!showText.value), "".concat(COMPONENT_NAME.value, "--with-text-").concat(props2.align), !!showText.value)];
      var dividerWrapperStyle = Vue.computed(function () {
        if (props2.size) {
          var margin = isHorizontal.value ? "".concat(helper.pxCompat(props2.size), " 0") : "0 ".concat(helper.pxCompat(props2.size));
          return {
            margin: margin
          };
        }
        return null;
      });
      return Vue.createVNode("div", {
        "class": dividerClassNames,
        "style": dividerWrapperStyle.value
      }, [showText.value && Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__inner-text")
      }, [children])]);
    };
  }
});

exports["default"] = _Divider;
//# sourceMappingURL=divider.js.map
