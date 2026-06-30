/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, inject, watch, onMounted, onUnmounted, createVNode, h } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ANCHOR_SHARP_REGEXP } from './utils/index.js';
import props from './anchor-item-props.js';
import { isString, isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { AnchorInjectionKey } from './consts/index.js';
import '../_chunks/dep-81b01cae.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var localProps = _objectSpread(_objectSpread({}, props), {}, {
  href: {
    type: String,
    required: true,
    validator: function validator(v) {
      return ANCHOR_SHARP_REGEXP.test(v);
    }
  }
});
var _AnchorItem = defineComponent({
  name: "TAnchorItem",
  inject: {
    tAnchor: {
      "default": void 0
    }
  },
  props: localProps,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var anchor = inject(AnchorInjectionKey, void 0);
    var CLASSNAME_PREFIX = usePrefixClass("anchor__item");
    var _useCommonClassName = useCommonClassName(),
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
        title: isString(title) ? title : void 0,
        e: e
      });
    };
    var renderTitle = function renderTitle() {
      var title = props2.title;
      var titleSlot = slots.title;
      var titleVal;
      if (isString(title)) {
        titleVal = title;
      } else if (isFunction(title)) {
        titleVal = title(h);
      } else if (titleSlot) {
        titleVal = titleSlot(null);
      }
      return titleVal;
    };
    watch(function () {
      return props2.href;
    }, function () {
      unregister();
      register();
    }, {
      immediate: true
    });
    onMounted(function () {
      register();
    });
    onUnmounted(function () {
      unregister();
    });
    return function () {
      var href = props2.href,
        target = props2.target;
      var children = slots["default"],
        titleSlot = slots.title;
      var title = renderTitle();
      var titleAttr = isString(title) ? title : null;
      var active = anchor.active === href;
      var wrapperClass = _defineProperty(_defineProperty({}, CLASSNAME_PREFIX.value, true), STATUS.value.active, active);
      var titleClass = _defineProperty({}, "".concat(CLASSNAME_PREFIX.value, "-link"), true);
      return createVNode("div", {
        "class": wrapperClass
      }, [createVNode("a", {
        "href": href,
        "title": titleAttr,
        "class": titleClass,
        "target": target,
        "onClick": handleClick
      }, [titleSlot ? titleSlot(null) : title]), children && children(null)]);
    };
  }
});

export { _AnchorItem as default };
//# sourceMappingURL=anchor-item.js.map
