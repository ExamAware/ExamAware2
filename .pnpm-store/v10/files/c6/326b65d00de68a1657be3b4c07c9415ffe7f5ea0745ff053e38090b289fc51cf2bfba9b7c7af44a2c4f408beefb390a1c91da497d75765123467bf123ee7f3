/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var breadcrumb_breadcrumbItemProps = require('./breadcrumb-item-props.js');
var tooltip_index = require('../tooltip/index.js');
var dom = require('../_chunks/dep-06276759.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var localTBreadcrumbOrigin = {
  separator: "",
  theme: "light",
  maxItemWidth: void 0
};
var _BreadcrumbItem = Vue.defineComponent({
  name: "TBreadcrumbItem",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, breadcrumb_breadcrumbItemProps["default"]), {}, {
    isEllipsisItem: Boolean
  }),
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderContent = index.useContent();
    var renderTNodeJSX = index.useTNodeJSX();
    var breadcrumbText = Vue.ref();
    var localTBreadcrumb = Vue.inject("tBreadcrumb", localTBreadcrumbOrigin);
    var themeClassName = Vue.ref(localTBreadcrumb === null || localTBreadcrumb === void 0 ? void 0 : localTBreadcrumb.theme);
    var isCutOff = Vue.ref(false);
    var COMPONENT_NAME = index$1.usePrefixClass("breadcrumb__item");
    var separatorClass = index$1.usePrefixClass("breadcrumb__separator");
    var disableClass = index$1.usePrefixClass("is-disabled");
    var linkClass = index$1.usePrefixClass("link");
    var maxLengthClass = index$1.usePrefixClass("breadcrumb__inner");
    var textFlowClass = index$1.usePrefixClass("breadcrumb--text-overflow");
    var maxWithStyle = Vue.computed(function () {
      var maxItemWidth = localTBreadcrumb === null || localTBreadcrumb === void 0 ? void 0 : localTBreadcrumb.maxItemWidth;
      var maxWith = props2.maxWidth || maxItemWidth || "120";
      return {
        maxWidth: "".concat(maxWith, "px")
      };
    });
    var _getCurrentInstance = Vue.getCurrentInstance(),
      proxy = _getCurrentInstance.proxy;
    Vue.onMounted(function () {
      if (breadcrumbText.value) {
        isCutOff.value = dom.isTextEllipsis(breadcrumbText.value);
      }
    });
    Vue.onBeforeUpdate(function () {
      if (breadcrumbText.value) {
        isCutOff.value = dom.isTextEllipsis(breadcrumbText.value);
      }
    });
    var handleClick = function handleClick() {
      var router = props2.router || proxy.$router;
      if (props2.to && router) {
        props2.replace ? router.replace(props2.to) : router.push(props2.to);
      } else {
        window.location.href = props2.href;
      }
    };
    var bindEvent = function bindEvent(e) {
      if (!props2.disabled) {
        e.preventDefault();
        if (props2.target === "_blank") {
          props2.href ? window.open(props2.href) : window.open(props2.to);
        } else {
          handleClick();
        }
      }
    };
    return function () {
      var itemClass = [COMPONENT_NAME.value, themeClassName.value];
      var textClass = [textFlowClass.value];
      if (props2.disabled) {
        textClass.push(disableClass.value);
      }
      var listeners = {
        onClick: function onClick(e) {
          if (props2.disabled) {
            e.stopPropagation();
            return;
          }
        }
      };
      var _content = renderContent("default", "content");
      var textContent = Vue.createVNode("span", {
        "class": maxLengthClass.value,
        style: maxWithStyle.value
      }, [renderTNodeJSX("icon"), Vue.createVNode("span", {
        "ref": breadcrumbText,
        "class": "".concat(maxLengthClass.value, "-text")
      }, [_content])]);
      var itemContent = Vue.createVNode("span", _objectSpread({
        "class": textClass
      }, listeners), [textContent]);
      if ((props2.href || props2.to) && !props2.disabled) {
        textClass.push(linkClass.value);
        itemContent = Vue.createVNode("a", Vue.mergeProps({
          "class": textClass,
          "href": props2.href,
          "target": props2.target
        }, listeners, {
          "onClick": bindEvent
        }), [textContent]);
      }
      if (props2 !== null && props2 !== void 0 && props2.isEllipsisItem) {
        itemContent = Vue.createVNode("div", {
          "style": "display: flex"
        }, [_content]);
      }
      return Vue.createVNode("div", Vue.mergeProps({
        "class": itemClass
      }, attrs, {
        "onClick": !props2.disabled && props2.onClick
      }), [isCutOff.value ? Vue.createVNode(tooltip_index.Tooltip, {
        "content": function content() {
          return _content;
        }
      }, _isSlot(itemContent) ? itemContent : {
        "default": function _default() {
          return [itemContent];
        }
      }) : itemContent, Vue.createVNode("span", {
        "class": separatorClass.value,
        "style": {
          textOverflow: isCutOff.value ? "ellipsis" : "clip"
        }
      }, [localTBreadcrumb.separator])]);
    };
  }
});

exports["default"] = _BreadcrumbItem;
//# sourceMappingURL=breadcrumb-item.js.map
