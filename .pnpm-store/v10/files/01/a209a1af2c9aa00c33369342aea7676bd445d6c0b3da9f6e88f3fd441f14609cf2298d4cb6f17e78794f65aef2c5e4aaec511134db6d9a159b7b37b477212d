/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, ref, onMounted, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import _DropdownItem from './dropdown-item.js';
import props from './props.js';
import { Divider } from '../divider/index.js';
import { isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import './dropdown-item-props.js';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../divider/divider.js';
import '../divider/props.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/divider/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DropdownMenu = defineComponent({
  name: "TDropdownMenu",
  props: props,
  setup: function setup(props2) {
    var dropdownClass = usePrefixClass("dropdown");
    var dropdownMenuClass = usePrefixClass("dropdown__menu");
    var scrollTopMap = reactive({});
    var itemHeight = ref(null);
    var menuRef = ref();
    var isOverMaxHeight = ref(false);
    var _useGlobalIcon = useGlobalIcon({
        ChevronRightIcon: ChevronRightIcon
      }),
      ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon;
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
    onMounted(function () {
      if (menuRef.value) {
        var _window;
        var menuHeight = parseInt((_window = window) === null || _window === void 0 ? void 0 : _window.getComputedStyle(menuRef.value).height, 10);
        if (menuHeight >= props2.maxHeight) isOverMaxHeight.value = true;
      }
      itemHeight.value = document.querySelector(".".concat(dropdownClass.value, "__item")).scrollHeight + 2;
    });
    var getContent = function getContent(content) {
      if (isFunction(content)) {
        return content(h);
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
          renderContent = createVNode("div", {
            "key": idx
          }, [createVNode(_DropdownItem, {
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
              return [createVNode("div", {
                "class": "".concat(dropdownClass.value, "__item-content")
              }, [createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)]), createVNode(ChevronRightIcon$1, {
                "class": "".concat(dropdownClass.value, "__item-direction"),
                "size": "16"
              }, null)]), createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu-wrapper"), _defineProperty({}, "".concat(dropdownClass.value, "__submenu-wrapper--").concat(props2.direction), props2.direction)],
                "style": {
                  position: "absolute",
                  top: "".concat(renderIdx * itemHeight.value, "px")
                }
              }, [createVNode("div", {
                "class": ["".concat(dropdownClass.value, "__submenu"), _defineProperty({}, "".concat(dropdownClass.value, "__submenu--disabled"), optionItem.disabled)],
                "style": {
                  position: "static",
                  maxHeight: "".concat(props2.maxHeight, "px")
                },
                "onScroll": function onScroll(e) {
                  return handleScroll(e, deep + 1);
                }
              }, [createVNode("ul", null, [optionItem.children])])])];
            }
          }), optionItem.divider ? createVNode(Divider, null, null) : null]);
        } else {
          renderContent = createVNode("div", {
            "key": idx
          }, [createVNode(_DropdownItem, {
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
              return [createVNode("span", {
                "class": "".concat(dropdownClass.value, "__item-text")
              }, [getContent(optionItem.content)])];
            }
          }), optionItem.divider ? createVNode(Divider, null, null) : null]);
        }
        arr.push(renderContent);
      });
      return arr;
    };
    return function () {
      return createVNode("div", {
        "class": [dropdownMenuClass.value, "".concat(dropdownMenuClass.value, "--").concat(props2.direction), _defineProperty({}, "".concat(dropdownMenuClass.value, "--overflow"), isOverMaxHeight.value)],
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

export { _DropdownMenu as default };
//# sourceMappingURL=dropdown-menu.js.map
