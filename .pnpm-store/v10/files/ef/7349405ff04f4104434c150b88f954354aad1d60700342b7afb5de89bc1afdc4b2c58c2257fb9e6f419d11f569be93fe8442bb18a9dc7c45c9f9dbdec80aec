/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, inject, ref, getCurrentInstance, computed, onMounted, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './menu-item-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { u as useRipple } from '../_chunks/dep-d2a6e7a4.js';
import { Tooltip } from '../tooltip/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-2ea19dca.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _MenuItem = defineComponent({
  name: "TMenuItem",
  props: props,
  emits: ["click"],
  setup: function setup(props2, ctx) {
    var _toRefs = toRefs(props2),
      href = _toRefs.href,
      target = _toRefs.target,
      to = _toRefs.to,
      disabled = _toRefs.disabled,
      value = _toRefs.value,
      onClick = _toRefs.onClick,
      routerLink = _toRefs.routerLink,
      replace = _toRefs.replace;
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var menu = inject("TdMenu");
    var itemRef = ref();
    var instance = getCurrentInstance();
    useRipple(itemRef);
    var submenu = inject("TdSubmenu", null);
    var active = computed(function () {
      return menu.activeValue.value === props2.value;
    });
    var collapsed = computed(function () {
      var _menu$collapsed;
      return (_menu$collapsed = menu.collapsed) === null || _menu$collapsed === void 0 ? void 0 : _menu$collapsed.value;
    });
    var classes = computed(function () {
      return ["".concat(classPrefix.value, "-menu__item"), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(classPrefix.value, "-is-active"), active.value), "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-menu__item--plain"), !ctx.slots.icon && !props2.icon), "".concat(classPrefix.value, "-submenu__item"), !!submenu && !menu.isHead)];
    });
    var router = computed(function () {
      return props2.router || (instance === null || instance === void 0 ? void 0 : instance.proxy.$router);
    });
    var handleClick = function handleClick(e) {
      var _onClick$value, _submenu$closeParentP;
      e.stopPropagation();
      if (disabled.value) return;
      menu.select(value.value);
      (_onClick$value = onClick.value) === null || _onClick$value === void 0 || _onClick$value.call(onClick, {
        e: e,
        value: value.value
      });
      if (to.value || routerLink.value && href.value) {
        var methods = replace.value ? "replace" : "push";
        router.value[methods](to.value || href.value)["catch"](function (err) {
          if (err.name !== "NavigationDuplicated" && !err.message.includes("Avoided redundant navigation to current location")) {
            throw err;
          }
        });
      }
      submenu === null || submenu === void 0 || (_submenu$closeParentP = submenu.closeParentPopup) === null || _submenu$closeParentP === void 0 || _submenu$closeParentP.call(submenu, e);
    };
    onMounted(function () {
      var _menu$vMenu;
      menu === null || menu === void 0 || (_menu$vMenu = menu.vMenu) === null || _menu$vMenu === void 0 || _menu$vMenu.add(_objectSpread({
        value: props2.value,
        parent: submenu === null || submenu === void 0 ? void 0 : submenu.value,
        vnode: ctx.slots["default"]
      }, props2));
      var activeValues = menu.activeValues.value;
      if (activeValues.includes(props2.value) && !activeValues.includes(submenu === null || submenu === void 0 ? void 0 : submenu.value)) {
        activeValues.push(submenu === null || submenu === void 0 ? void 0 : submenu.value);
      }
    });
    return function () {
      var _router$value;
      var liContent = createVNode("li", {
        "ref": itemRef,
        "class": classes.value,
        "onClick": handleClick
      }, [renderTNodeJSX("icon"), routerLink.value ? createVNode("a", {
        "href": href.value ? href.value : to.value ? (_router$value = router.value) === null || _router$value === void 0 ? void 0 : _router$value.resolve(to.value).href : "",
        "target": target.value,
        "class": "".concat(classPrefix.value, "-menu__item-link"),
        "onClick": function onClick(e) {
          return e.preventDefault();
        }
      }, [createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]) : href.value ? createVNode("a", {
        "href": href.value,
        "target": target.value,
        "class": "".concat(classPrefix.value, "-menu__item-link"),
        "onClick": function onClick(e) {
          return disabled.value && e.preventDefault();
        }
      }, [createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]) : createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]);
      var node = instance === null || instance === void 0 ? void 0 : instance.parent;
      if (collapsed.value && /tmenu/i.test(node === null || node === void 0 ? void 0 : node.type.name)) {
        return createVNode(Tooltip, {
          "content": function content() {
            return renderContent("default", "content");
          },
          "placement": "right"
        }, _isSlot(liContent) ? liContent : {
          "default": function _default() {
            return [liContent];
          }
        });
      }
      return liContent;
    };
  }
});

export { _MenuItem as default };
//# sourceMappingURL=menu-item.js.map
