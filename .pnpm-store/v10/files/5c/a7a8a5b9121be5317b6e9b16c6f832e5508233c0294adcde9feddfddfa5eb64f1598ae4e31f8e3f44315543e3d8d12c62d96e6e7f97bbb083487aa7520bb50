/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var dropdown_dropdownItemProps = require('./dropdown-item-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var index$2 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-0b6215b5.js');
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
require('../_chunks/dep-c3dee00a.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DropdownItem = Vue.defineComponent({
  name: "TDropdownItem",
  props: _objectSpread(_objectSpread({}, dropdown_dropdownItemProps["default"]), {}, {
    maxColumnWidth: {
      type: [String, Number],
      "default": 100
    },
    minColumnWidth: {
      type: [String, Number],
      "default": 10
    },
    isSubmenu: Boolean
  }),
  setup: function setup(props) {
    var renderTNodeJSX = index.useTNodeJSX();
    var renderContent = index.useContent();
    var itemRef = Vue.ref();
    index$1.useRipple(props.isSubmenu ? null : itemRef);
    var prefixIcon = renderTNodeJSX("prefixIcon");
    var dropdownItemClass = index$2.usePrefixClass("dropdown__item");
    var handleItemClick = function handleItemClick(e) {
      var _props$onClick;
      if (props.disabled) return;
      (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props, props.value, {
        e: e
      });
    };
    return function () {
      var content = renderContent("default", "content");
      var classes = [dropdownItemClass.value, "".concat(dropdownItemClass.value, "--theme-").concat(props.theme), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(dropdownItemClass.value, "--active"), props.active), "".concat(dropdownItemClass.value, "--disabled"), props.disabled)];
      return Vue.createVNode("li", {
        "class": classes,
        "onClick": handleItemClick,
        "style": {
          maxWidth: helper.pxCompat(props.maxColumnWidth),
          minWidth: helper.pxCompat(props.minColumnWidth)
        },
        "ref": itemRef
      }, [props.prefixIcon ? Vue.createVNode("div", {
        "class": "".concat(dropdownItemClass.value, "-icon")
      }, [prefixIcon]) : null, content]);
    };
  }
});

exports["default"] = _DropdownItem;
//# sourceMappingURL=dropdown-item.js.map
