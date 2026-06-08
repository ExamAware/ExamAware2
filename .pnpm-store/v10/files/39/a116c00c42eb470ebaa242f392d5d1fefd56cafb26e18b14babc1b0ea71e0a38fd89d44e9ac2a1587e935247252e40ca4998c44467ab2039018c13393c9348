/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps, isVNode } from 'vue';
import _typeof from '@babel/runtime/helpers/typeof';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import props from './text-props.js';
import copy from './utils/copy-to-clipboard.js';
import { CheckIcon, CopyIcon } from 'tdesign-icons-vue-next';
import Ellipsis from './components/ellipsis.js';
import { Tooltip } from '../tooltip/index.js';
import { Button } from '../button/index.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import './paragraph-props.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import '../tooltip/utils/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';

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
//# sourceMappingURL=text.js.map
