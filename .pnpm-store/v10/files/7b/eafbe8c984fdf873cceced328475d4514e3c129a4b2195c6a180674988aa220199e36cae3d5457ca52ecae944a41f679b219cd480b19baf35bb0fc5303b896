/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, reactive, ref, onMounted, h, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { ChevronRightIcon } from 'tdesign-icons-vue-next';
import _DropdownItem from './dropdown-item.mjs';
import props from './props.mjs';
import { Divider } from '../divider/index.mjs';
import { u as usePrefixClass, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import { isFunction } from 'lodash-es';
import '../_chunks/dep-257428bc.mjs';
import './dropdown-item-props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-9003fde5.mjs';
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
import '../divider/divider.mjs';
import '../divider/props.mjs';
import './style/css.mjs';

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
//# sourceMappingURL=dropdown-menu.mjs.map
