/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, inject, computed, getCurrentInstance, onMounted, onBeforeUpdate, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './breadcrumb-item-props.mjs';
import { Tooltip } from '../tooltip/index.mjs';
import { e as isTextEllipsis } from '../_chunks/dep-51a43106.mjs';
import { b as useContent, a as useTNodeJSX, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../tooltip/tooltip.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../tooltip/utils/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var localTBreadcrumbOrigin = {
  separator: "",
  theme: "light",
  maxItemWidth: void 0
};
var _BreadcrumbItem = defineComponent({
  name: "TBreadcrumbItem",
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, props), {}, {
    isEllipsisItem: Boolean
  }),
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderContent = useContent();
    var renderTNodeJSX = useTNodeJSX();
    var breadcrumbText = ref();
    var localTBreadcrumb = inject("tBreadcrumb", localTBreadcrumbOrigin);
    var themeClassName = ref(localTBreadcrumb === null || localTBreadcrumb === void 0 ? void 0 : localTBreadcrumb.theme);
    var isCutOff = ref(false);
    var COMPONENT_NAME = usePrefixClass("breadcrumb__item");
    var separatorClass = usePrefixClass("breadcrumb__separator");
    var disableClass = usePrefixClass("is-disabled");
    var linkClass = usePrefixClass("link");
    var maxLengthClass = usePrefixClass("breadcrumb__inner");
    var textFlowClass = usePrefixClass("breadcrumb--text-overflow");
    var maxWithStyle = computed(function () {
      var maxItemWidth = localTBreadcrumb === null || localTBreadcrumb === void 0 ? void 0 : localTBreadcrumb.maxItemWidth;
      var maxWith = props2.maxWidth || maxItemWidth || "120";
      return {
        maxWidth: "".concat(maxWith, "px")
      };
    });
    var _getCurrentInstance = getCurrentInstance(),
      proxy = _getCurrentInstance.proxy;
    onMounted(function () {
      if (breadcrumbText.value) {
        isCutOff.value = isTextEllipsis(breadcrumbText.value);
      }
    });
    onBeforeUpdate(function () {
      if (breadcrumbText.value) {
        isCutOff.value = isTextEllipsis(breadcrumbText.value);
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
      var textContent = createVNode("span", {
        "class": maxLengthClass.value,
        style: maxWithStyle.value
      }, [renderTNodeJSX("icon"), createVNode("span", {
        "ref": breadcrumbText,
        "class": "".concat(maxLengthClass.value, "-text")
      }, [_content])]);
      var itemContent = createVNode("span", _objectSpread({
        "class": textClass
      }, listeners), [textContent]);
      if ((props2.href || props2.to) && !props2.disabled) {
        textClass.push(linkClass.value);
        itemContent = createVNode("a", mergeProps({
          "class": textClass,
          "href": props2.href,
          "target": props2.target
        }, listeners, {
          "onClick": bindEvent
        }), [textContent]);
      }
      if (props2 !== null && props2 !== void 0 && props2.isEllipsisItem) {
        itemContent = createVNode("div", {
          "style": "display: flex"
        }, [_content]);
      }
      return createVNode("div", mergeProps({
        "class": itemClass
      }, attrs, {
        "onClick": !props2.disabled && props2.onClick
      }), [isCutOff.value ? createVNode(Tooltip, {
        "content": function content() {
          return _content;
        }
      }, _isSlot(itemContent) ? itemContent : {
        "default": function _default() {
          return [itemContent];
        }
      }) : itemContent, createVNode("span", {
        "class": separatorClass.value,
        "style": {
          textOverflow: isCutOff.value ? "ellipsis" : "clip"
        }
      }, [localTBreadcrumb.separator])]);
    };
  }
});

export { _BreadcrumbItem as default };
//# sourceMappingURL=breadcrumb-item.mjs.map
