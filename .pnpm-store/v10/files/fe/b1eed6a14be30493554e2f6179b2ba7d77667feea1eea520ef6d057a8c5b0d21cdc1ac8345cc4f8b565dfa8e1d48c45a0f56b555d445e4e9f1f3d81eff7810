/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, createVNode, computed, mergeProps } from 'vue';
import { _ as _typeof } from '../_chunks/dep-257428bc.mjs';
import { u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import props from './text-props.mjs';
import copy from './utils/copy-to-clipboard.mjs';
import { CheckIcon, CopyIcon } from 'tdesign-icons-vue-next';
import Ellipsis from './components/ellipsis.mjs';
import { Tooltip } from '../tooltip/index.mjs';
import { Button } from '../button/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import 'lodash-es';
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
import '../_chunks/dep-1dacc319.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './paragraph-props.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../popup/props.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import './style/css.mjs';
import '../tooltip/utils/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import '../button/props.mjs';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Text = defineComponent({
  name: "TTypographyText",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("typography");
    var _useConfig = useConfig("typography"),
      globalConfig = _useConfig.globalConfig;
    var isCopied = ref(false);
    var renderContent = useContent();
    var wrapperDecorations = function wrapperDecorations(_ref2, content2) {
      var code = _ref2.code,
        underline = _ref2.underline,
        del = _ref2["delete"],
        strong = _ref2.strong,
        keyboard = _ref2.keyboard,
        mark = _ref2.mark,
        italic = _ref2.italic;
      var currentContent = content2;
      function wrap(needed, Tag) {
        var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!needed) return;
        var _currentContent = function () {
          return currentContent;
        }();
        currentContent = createVNode(Tag, {
          "style": styles
        }, _isSlot(currentContent) ? currentContent : {
          "default": function _default() {
            return [_currentContent];
          }
        });
      }
      wrap(strong, "strong");
      wrap(underline, "u");
      wrap(del, "del");
      wrap(code, "code");
      wrap(mark !== false, "mark", mark ? {
        backgroundColor: mark
      } : {});
      wrap(keyboard, "kbd");
      wrap(italic, "i");
      return currentContent;
    };
    var classList = computed(function () {
      var theme = props2.theme,
        disabled = props2.disabled;
      var prefix = COMPONENT_NAME.value;
      var list = [prefix];
      if (disabled) {
        list.push("".concat(prefix, "--disabled"));
      } else if (theme && ["primary", "secondary", "success", "warning", "error"].includes(theme)) {
        list.push("".concat(prefix, "--").concat(theme));
      }
      return list;
    });
    var tooltipText = computed(function () {
      var _copyable$tooltipProp;
      var copyable = props2.copyable;
      if (isCopied.value) return globalConfig.value.copiedText;else if (_typeof(copyable) === "object") return (_copyable$tooltipProp = copyable.tooltipProps) === null || _copyable$tooltipProp === void 0 ? void 0 : _copyable$tooltipProp.content;
      return null;
    });
    var content = computed(function () {
      return props2.content || (slots === null || slots === void 0 ? void 0 : slots["default"]());
    });
    var renderCopy = function renderCopy() {
      var copyable = props2.copyable;
      var icon = isCopied.value ? function () {
        return createVNode(CheckIcon, null, null);
      } : function () {
        return createVNode(CopyIcon, null, null);
      };
      var tooltipConf = {
        theme: "default"
      };
      var onCopy = function onCopy() {};
      if (_typeof(copyable) === "object") {
        if (copyable.suffix && !isCopied.value) {
          icon = copyable.suffix;
        }
        if (copyable.tooltipProps) {
          tooltipConf = copyable.tooltipProps;
        }
        if (typeof copyable.onCopy === "function") {
          onCopy = copyable.onCopy;
        }
      }
      return createVNode(Tooltip, mergeProps(tooltipConf, {
        "content": tooltipText.value
      }), {
        "default": function _default() {
          return [createVNode(Button, {
            "icon": icon,
            "shape": "square",
            "theme": "primary",
            "variant": "text",
            "onClick": function onClick(e) {
              return onCopyClick(e, onCopy);
            }
          }, null)];
        }
      });
    };
    var getChildrenText = function getChildrenText() {
      var copyable = props2.copyable;
      if (_typeof(copyable) === "object" && copyable !== null && copyable !== void 0 && copyable.text) {
        return copyable.text;
      }
      if (typeof content.value === "string") {
        return content.value;
      } else if (Array.isArray(content.value)) {
        return content.value.map(function (v) {
          return v.children;
        }).join("");
      }
    };
    var onCopyClick = function onCopyClick(e, cb) {
      e.preventDefault();
      e.stopPropagation();
      isCopied.value = true;
      setTimeout(function () {
        isCopied.value = false;
      }, 1500);
      copy(getChildrenText());
      cb === null || cb === void 0 || cb();
    };
    return function () {
      var content2 = renderContent("default", "content");
      return props2.ellipsis ? createVNode(Ellipsis, mergeProps(props2, {
        "class": classList.value
      }), {
        "default": function _default() {
          return [wrapperDecorations(props2, content2), props2.copyable ? renderCopy() : null];
        }
      }) : createVNode("span", {
        "class": classList.value
      }, [wrapperDecorations(props2, content2), props2.copyable ? renderCopy() : null]);
    };
  }
});

export { _Text as default };
//# sourceMappingURL=text.mjs.map
