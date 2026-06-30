/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var pagination_paginationMiniProps = require('./pagination-mini-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var button_index = require('../button/index.js');
var tooltip_index = require('../tooltip/index.js');
var isObject = require('../_chunks/dep-0813861e.js');
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
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _PaginationMini = Vue.defineComponent({
  name: "TPaginationMini",
  props: pagination_paginationMiniProps["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("pagination-mini");
    var _useGlobalIcon = index$1.useGlobalIcon({
        ChevronLeftIcon: tdesignIconsVueNext.ChevronLeftIcon,
        RoundIcon: tdesignIconsVueNext.RoundIcon,
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon,
        ChevronUpIcon: tdesignIconsVueNext.ChevronUpIcon,
        ChevronDownIcon: tdesignIconsVueNext.ChevronDownIcon
      }),
      ChevronLeftIcon = _useGlobalIcon.ChevronLeftIcon,
      RoundIcon = _useGlobalIcon.RoundIcon,
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon,
      ChevronUpIcon = _useGlobalIcon.ChevronUpIcon,
      ChevronDownIcon = _useGlobalIcon.ChevronDownIcon;
    var titleConfig = Vue.computed(function () {
      if (isObject.isObject(props2.tips)) return props2.tips;
      if (props2.tips === true) return {
        prev: "\u4E0A\u4E00\u9875",
        current: "\u5F53\u524D",
        next: "\u4E0B\u4E00\u9875"
      };
      return {};
    });
    var disabledConfig = Vue.computed(function () {
      if (isObject.isObject(props2.disabled)) return props2.disabled;
      if (props2.disabled === true) return {
        prev: true,
        current: true,
        next: true
      };
      return {
        prev: false,
        current: false,
        next: false
      };
    });
    var renderWithTooltip = function renderWithTooltip(content, node) {
      if (!content) return node;
      return Vue.createVNode(tooltip_index.Tooltip, {
        "content": content,
        "showArrow": false
      }, _isSlot(node) ? node : {
        "default": function _default() {
          return [node];
        }
      });
    };
    return function () {
      var jumperClass = [COMPONENT_NAME.value, _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--outline"), props2.variant === "outline")];
      return Vue.createVNode("div", {
        "class": jumperClass
      }, [renderWithTooltip(titleConfig.value.prev, Vue.createVNode(button_index.Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange;
          return (_props2$onChange = props2.onChange) === null || _props2$onChange === void 0 ? void 0 : _props2$onChange.call(props2, {
            e: e,
            trigger: "prev"
          });
        },
        "icon": props2.layout === "horizontal" ? function () {
          return Vue.createVNode(ChevronLeftIcon, null, null);
        } : function () {
          return Vue.createVNode(ChevronUpIcon, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__prev"),
        "disabled": disabledConfig.value.prev
      }, null)), props2.showCurrent && renderWithTooltip(titleConfig.value.current, Vue.createVNode(button_index.Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange2;
          return (_props2$onChange2 = props2.onChange) === null || _props2$onChange2 === void 0 ? void 0 : _props2$onChange2.call(props2, {
            e: e,
            trigger: "current"
          });
        },
        "icon": function icon() {
          return Vue.createVNode(RoundIcon, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__current"),
        "disabled": disabledConfig.value.current
      }, null)), renderWithTooltip(titleConfig.value.next, Vue.createVNode(button_index.Button, {
        "variant": props2.variant,
        "size": props2.size,
        "shape": "square",
        "onClick": function onClick(e) {
          var _props2$onChange3;
          return (_props2$onChange3 = props2.onChange) === null || _props2$onChange3 === void 0 ? void 0 : _props2$onChange3.call(props2, {
            e: e,
            trigger: "next"
          });
        },
        "icon": props2.layout === "horizontal" ? function () {
          return Vue.createVNode(ChevronRightIcon, null, null);
        } : function () {
          return Vue.createVNode(ChevronDownIcon, null, null);
        },
        "class": "".concat(COMPONENT_NAME.value, "__next"),
        "disabled": disabledConfig.value.next
      }, null))]);
    };
  }
});

exports["default"] = _PaginationMini;
//# sourceMappingURL=pagination-mini.js.map
