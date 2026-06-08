/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var dropdown_dropdownItem = require('./dropdown-item.js');
var dropdown_props = require('./props.js');
var divider_index = require('../divider/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$1 = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('./dropdown-item-props.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-0b6215b5.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../divider/divider.js');
require('../divider/props.js');
require('../_chunks/dep-d62a674d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DropdownMenu = Vue.defineComponent({
  name: "TDropdownMenu",
  props: dropdown_props["default"],
  setup: function setup(props2) {
    var dropdownClass = index.usePrefixClass("dropdown");
    var dropdownMenuClass = index.usePrefixClass("dropdown__menu");
    var scrollTopMap = Vue.reactive({});
    var itemHeight = Vue.ref(null);
    var menuRef = Vue.ref();
    var isOverMaxHeight = Vue.ref(false);
    var _useGlobalIcon = index$1.useGlobalIcon({
        ChevronRightIcon: tdesignIconsVueNext.ChevronRightIcon
      }),
      ChevronRightIcon = _useGlobalIcon.ChevronRightIcon;
    var handleItemClick = function handleItemClick(options) {
      var _data$onClick, _props2$onClick;
      var data = options.data,
        context = options.context;
      data === null || data === void 0 || (_data$onClick = data.onClick) === null || _data$onClick === void 0 || _data$onClick.call(data, data, context);
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, data, context);
    };
    var handleScroll = function handleScroll(e, deep) {
      var scrollTop = e.target.scrollTop;
      scrollTopMap[deep] = scrollTop;
    };
    Vue.onMounted(function () {
      if (menuRef.value) {
        var _window;
        var menuHeight = parseInt((_window = window) === null || _window === void 0 ? void 0 : _window.getComputedStyle(menuRef.value).height, 10);
        if (menuHeight >= props2.maxHeight) isOverMaxHeight.value = true;
      }
      itemHeight.value = document.querySelector(".".concat(dropdownClass.value, "__item")).scrollHeight + 2;
    });
    var getContent = function getContent(content) {
      if (isFunction.isFunction(content)) {
        return content(Vue.h);
      }
      return content;
    };
    var _renderOptions = function renderOptions(data, deep) {
      var _data$forEach;
      var arr = [];
      var renderContent;
      (_data$forEach = data.forEach) === null || _data$forEach === void 0 || _data$forEach.call(data, function (menu, idx) {
        var optionItem = _objectSpread({}, menu);
        var onViewIdx = idx - Math.ceil(scrollTopMap[deep] / itemHeight.value);
        var renderIdx = onViewIdx >= 0 ? onViewIdx : idx;
        if (optionItem.children) {
          optionItem.children = _renderOptions(optionItem.children, deep + 1);
          renderContent = Vue.createVNode("div", {
            "key": idx
          }, [Vue.createVNode(dropdown_dropdownItem["default"], {
            "style": optionItem.style,
            "class": ["".concat(dropdownClass.value, "__item"), "".concat(dropdownClass.value, "__item--suffix"), optionItem["class"]],
            "value": optionItem.value,
            "theme": optionItem.theme,
            "active": optionItem.active,
            "prefixIcon": optionItem.prefixIcon,
            "disabled": optionItem.disabled,
            "minColumnWidth": props2.minColumnWidth,
            "maxColumnWidth": props2.maxColumnWidth,
            "isSubmenu": true
          }, {
            "default": function _default() {
              return [Vue.createVNode("div", {
                "class": "".concat(dropdownClass.value, "__item-content")
              }, [Vue.createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)]), Vue.createVNode(ChevronRightIcon, {
                "class": "".concat(dropdownClass.value, "__item-direction"),
                "size": "16"
              }, null)]), Vue.createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu-wrapper"), _defineProperty__default["default"]({}, "".concat(dropdownClass.value, "__submenu-wrapper--").concat(props2.direction), props2.direction)],
                "style": {
                  position: "absolute",
                  top: "".concat(renderIdx * itemHeight.value, "px")
                }
              }, [Vue.createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu"), _defineProperty__default["default"]({}, "".concat(dropdownClass.value, "__submenu--disabled"), optionItem.disabled)],
                "style": {
                  position: "static",
                  maxHeight: "".concat(props2.maxHeight, "px")
                },
                "onScroll": function onScroll(e) {
                  return handleScroll(e, deep + 1);
                }
              }, [Vue.createVNode("ul", null, [optionItem.children])])])];
            }
          }), optionItem.divider ? Vue.createVNode(divider_index.Divider, null, null) : null]);
        } else {
          renderContent = Vue.createVNode("div", {
            "key": idx
          }, [Vue.createVNode(dropdown_dropdownItem["default"], {
            "style": optionItem.style,
            "class": ["".concat(dropdownClass.value, "__item"), optionItem["class"]],
            "value": optionItem.value,
            "theme": optionItem.theme,
            "active": optionItem.active,
            "prefixIcon": optionItem.prefixIcon,
            "disabled": optionItem.disabled,
            "minColumnWidth": props2.minColumnWidth,
            "maxColumnWidth": props2.maxColumnWidth,
            "onClick": optionItem.disabled || optionItem.children ? function () {
              return null;
            } : function (value, context) {
              return handleItemClick({
                data: optionItem,
                context: context
              });
            }
          }, {
            "default": function _default() {
              return [Vue.createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)])];
            }
          }), optionItem.divider ? Vue.createVNode(divider_index.Divider, null, null) : null]);
        }
        arr.push(renderContent);
      });
      return arr;
    };
    return function () {
      return Vue.createVNode("div", {
        "class": [dropdownMenuClass.value, "".concat(dropdownMenuClass.value, "--").concat(props2.direction), _defineProperty__default["default"]({}, "".concat(dropdownMenuClass.value, "--overflow"), isOverMaxHeight.value)],
        "style": {
          maxHeight: "".concat(props2.maxHeight, "px")
        },
        "ref": menuRef,
        "onScroll": function onScroll(e) {
          return handleScroll(e, 0);
        }
      }, [_renderOptions(props2.options, 0)]);
    };
  }
});

exports["default"] = _DropdownMenu;
//# sourceMappingURL=dropdown-menu.js.map
