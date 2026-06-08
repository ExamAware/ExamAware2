/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, getCurrentInstance, computed, h, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { CloseIcon } from 'tdesign-icons-vue-next';
import { isString } from 'lodash-es';
import { t as tinycolor } from '../_chunks/dep-b31d8258.mjs';
import props from './props.mjs';
import { u as usePrefixClass, i as useGlobalIcon, a as useTNodeJSX, b as useContent, c as useCommonClassName } from '../_chunks/dep-7673347f.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var _Tag = defineComponent({
  name: "TTag",
  props: props,
  setup: function setup(props2) {
    var _useConfig = useConfig("tag"),
      tagGlobalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("tag");
    var _useGlobalIcon = useGlobalIcon({
        CloseIcon: CloseIcon
      }),
      CloseIcon$1 = _useGlobalIcon.CloseIcon;
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var _getCurrentInstance = getCurrentInstance(),
      vnode = _getCurrentInstance.vnode;
    var tagClass = computed(function () {
      return ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props2.theme), "".concat(COMPONENT_NAME.value, "--").concat(props2.variant), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--ellipsis"), props2.maxWidth), "".concat(COMPONENT_NAME.value, "--close"), props2.closable), "".concat(COMPONENT_NAME.value, "--disabled"), props2.disabled), SIZE.value[props2.size], props2.size !== "medium"), props2.shape !== "square" && "".concat(COMPONENT_NAME.value, "--").concat(props2.shape)];
    });
    var tagStyle = computed(function () {
      return getTagColorStyle();
    });
    var textStyle = computed(function () {
      if (!props2.maxWidth) return {};
      return {
        maxWidth: isNaN(Number(props2.maxWidth)) ? String(props2.maxWidth) : "".concat(props2.maxWidth, "px")
      };
    });
    var getTagColorStyle = function getTagColorStyle() {
      var color = props2.color,
        variant = props2.variant;
      if (!color) return {};
      var luminance = tinycolor(color).getLuminance();
      var style = {
        color: luminance > 0.5 ? "black" : "white"
      };
      if (variant === "outline" || variant === "light-outline") {
        style.borderColor = color;
      }
      if (variant !== "outline") {
        var getLightestShade = function getLightestShade() {
          var _tinycolor$toRgb = tinycolor(color).toRgb(),
            r = _tinycolor$toRgb.r,
            g = _tinycolor$toRgb.g,
            b = _tinycolor$toRgb.b;
          return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.1)");
        };
        style.backgroundColor = variant === "dark" ? color : getLightestShade();
      }
      if (variant !== "dark") {
        style.color = color;
      }
      return style;
    };
    var handleClick = function handleClick(e) {
      var _props2$onClick;
      if (props2.disabled) return;
      (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
        e: e
      });
    };
    var getCloseIcon = function getCloseIcon() {
      if (!props2.closable) return null;
      var iconClassName = "".concat(COMPONENT_NAME.value, "__icon-close");
      if (tagGlobalConfig.value.closeIcon) {
        return h(tagGlobalConfig.value.closeIcon(h), {
          "class": iconClassName
        });
      }
      return createVNode(CloseIcon$1, {
        "onClick": function onClick(_ref2) {
          var _props2$onClose;
          var e = _ref2.e;
          if (e) e.stopPropagation();
          (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
            e: e
          });
        },
        "class": iconClassName
      }, null);
    };
    var renderTitle = function renderTitle(tagContent) {
      var vProps = vnode.props || {};
      if (Reflect.has(vProps, "title")) {
        return vProps.title || void 0;
      }
      if (tagContent) {
        return tagContent;
      }
      return void 0;
    };
    return function () {
      var closeIcon = getCloseIcon();
      var tagContent = renderContent("default", "content");
      var icon = renderTNodeJSX("icon");
      var title = renderTitle(isString(tagContent) ? tagContent : "");
      return createVNode("div", {
        "class": tagClass.value,
        "style": tagStyle.value,
        "onClick": handleClick
      }, [icon, createVNode("span", {
        "class": props2.maxWidth ? "".concat(COMPONENT_NAME.value, "--text") : void 0,
        "style": textStyle.value,
        "title": title
      }, [tagContent]), !props2.disabled && closeIcon]);
    };
  }
});

export { _Tag as default };
//# sourceMappingURL=tag.mjs.map
