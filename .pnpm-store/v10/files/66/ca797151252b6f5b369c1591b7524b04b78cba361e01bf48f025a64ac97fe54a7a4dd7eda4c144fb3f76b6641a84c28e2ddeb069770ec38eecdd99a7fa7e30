/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var anchor_utils_index = require('./utils/index.js');
var anchor_anchorItemProps = require('./anchor-item-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var anchor_consts_index = require('./consts/index.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var localProps = _objectSpread(_objectSpread({}, anchor_anchorItemProps["default"]), {}, {
  href: {
    type: String,
    required: true,
    validator: function validator(v) {
      return anchor_utils_index.ANCHOR_SHARP_REGEXP.test(v);
    }
  }
});
var _AnchorItem = Vue.defineComponent({
  name: "TAnchorItem",
  inject: {
    tAnchor: {
      "default": void 0
    }
  },
  props: localProps,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var anchor = Vue.inject(anchor_consts_index.AnchorInjectionKey, void 0);
    var CLASSNAME_PREFIX = index.usePrefixClass("anchor__item");
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var register = function register() {
      anchor.registerLink(props2.href);
    };
    var unregister = function unregister() {
      var href = props2.href;
      if (!href) return;
      anchor.unregisterLink(href);
    };
    var handleClick = function handleClick(e) {
      var href = props2.href,
        title = props2.title;
      if (!props2.customScroll) anchor.handleScrollTo(href);
      anchor.handleLinkClick({
        href: href,
        title: isString.isString(title) ? title : void 0,
        e: e
      });
    };
    var renderTitle = function renderTitle() {
      var title = props2.title;
      var titleSlot = slots.title;
      var titleVal;
      if (isString.isString(title)) {
        titleVal = title;
      } else if (isFunction.isFunction(title)) {
        titleVal = title(Vue.h);
      } else if (titleSlot) {
        titleVal = titleSlot(null);
      }
      return titleVal;
    };
    Vue.watch(function () {
      return props2.href;
    }, function () {
      unregister();
      register();
    }, {
      immediate: true
    });
    Vue.onMounted(function () {
      register();
    });
    Vue.onUnmounted(function () {
      unregister();
    });
    return function () {
      var href = props2.href,
        target = props2.target;
      var children = slots["default"],
        titleSlot = slots.title;
      var title = renderTitle();
      var titleAttr = isString.isString(title) ? title : null;
      var active = anchor.active === href;
      var wrapperClass = _defineProperty__default["default"](_defineProperty__default["default"]({}, CLASSNAME_PREFIX.value, true), STATUS.value.active, active);
      var titleClass = _defineProperty__default["default"]({}, "".concat(CLASSNAME_PREFIX.value, "-link"), true);
      return Vue.createVNode("div", {
        "class": wrapperClass
      }, [Vue.createVNode("a", {
        "href": href,
        "title": titleAttr,
        "class": titleClass,
        "target": target,
        "onClick": handleClick
      }, [titleSlot ? titleSlot(null) : title]), children && children(null)]);
    };
  }
});

exports["default"] = _AnchorItem;
//# sourceMappingURL=anchor-item.js.map
