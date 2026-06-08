/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var menu_menuItemProps = require('./menu-item-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-0b6215b5.js');
var tooltip_index = require('../tooltip/index.js');
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
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
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
var _MenuItem = Vue.defineComponent({
  name: "TMenuItem",
  props: menu_menuItemProps["default"],
  emits: ["click"],
  setup: function setup(props2, ctx) {
    var _toRefs = Vue.toRefs(props2),
      href = _toRefs.href,
      target = _toRefs.target,
      to = _toRefs.to,
      disabled = _toRefs.disabled,
      value = _toRefs.value,
      onClick = _toRefs.onClick,
      routerLink = _toRefs.routerLink,
      replace = _toRefs.replace;
    var classPrefix = index.usePrefixClass();
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderContent = index$1.useContent();
    var menu = Vue.inject("TdMenu");
    var itemRef = Vue.ref();
    var instance = Vue.getCurrentInstance();
    index$2.useRipple(itemRef);
    var submenu = Vue.inject("TdSubmenu", null);
    var active = Vue.computed(function () {
      return menu.activeValue.value === props2.value;
    });
    var collapsed = Vue.computed(function () {
      var _menu$collapsed;
      return (_menu$collapsed = menu.collapsed) === null || _menu$collapsed === void 0 ? void 0 : _menu$collapsed.value;
    });
    var classes = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-menu__item"), _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-active"), active.value), "".concat(classPrefix.value, "-is-disabled"), props2.disabled), "".concat(classPrefix.value, "-menu__item--plain"), !ctx.slots.icon && !props2.icon), "".concat(classPrefix.value, "-submenu__item"), !!submenu && !menu.isHead)];
    });
    var router = Vue.computed(function () {
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
    Vue.onMounted(function () {
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
      var liContent = Vue.createVNode("li", {
        "ref": itemRef,
        "class": classes.value,
        "onClick": handleClick
      }, [renderTNodeJSX("icon"), routerLink.value ? Vue.createVNode("a", {
        "href": href.value ? href.value : to.value ? (_router$value = router.value) === null || _router$value === void 0 ? void 0 : _router$value.resolve(to.value).href : "",
        "target": target.value,
        "class": "".concat(classPrefix.value, "-menu__item-link"),
        "onClick": function onClick(e) {
          return e.preventDefault();
        }
      }, [Vue.createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]) : href.value ? Vue.createVNode("a", {
        "href": href.value,
        "target": target.value,
        "class": "".concat(classPrefix.value, "-menu__item-link"),
        "onClick": function onClick(e) {
          return disabled.value && e.preventDefault();
        }
      }, [Vue.createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]) : Vue.createVNode("span", {
        "class": "".concat(classPrefix.value, "-menu__content")
      }, [renderContent("default", "content")])]);
      var node = instance === null || instance === void 0 ? void 0 : instance.parent;
      if (collapsed.value && /tmenu/i.test(node === null || node === void 0 ? void 0 : node.type.name)) {
        return Vue.createVNode(tooltip_index.Tooltip, {
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

exports["default"] = _MenuItem;
//# sourceMappingURL=menu-item.js.map
