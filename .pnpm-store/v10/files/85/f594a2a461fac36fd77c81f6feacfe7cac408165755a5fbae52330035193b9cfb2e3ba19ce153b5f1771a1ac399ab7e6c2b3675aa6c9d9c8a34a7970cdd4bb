/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _typeof = require('@babel/runtime/helpers/typeof');
require('@babel/runtime/helpers/toConsumableArray');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var typography_textProps = require('./text-props.js');
var typography_utils_copyToClipboard = require('./utils/copy-to-clipboard.js');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var typography_components_ellipsis = require('./components/ellipsis.js');
var tooltip_index = require('../tooltip/index.js');
var button_index = require('../button/index.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('./paragraph-props.js');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-e8ff2c13.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');
require('../button/button.js');
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../loading/props.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _typeof__default = /*#__PURE__*/_interopDefaultLegacy(_typeof);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Text = Vue.defineComponent({
  name: "TTypographyText",
  props: typography_textProps["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = index.usePrefixClass("typography");
    var _useConfig = configProvider_hooks_useConfig.useConfig("typography"),
      globalConfig = _useConfig.globalConfig;
    var isCopied = Vue.ref(false);
    var renderContent = index$1.useContent();
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
        currentContent = Vue.createVNode(Tag, {
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
    var classList = Vue.computed(function () {
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
    var tooltipText = Vue.computed(function () {
      var _copyable$tooltipProp;
      var copyable = props2.copyable;
      if (isCopied.value) return globalConfig.value.copiedText;else if (_typeof__default["default"](copyable) === "object") return (_copyable$tooltipProp = copyable.tooltipProps) === null || _copyable$tooltipProp === void 0 ? void 0 : _copyable$tooltipProp.content;
      return null;
    });
    var content = Vue.computed(function () {
      return props2.content || (slots === null || slots === void 0 ? void 0 : slots["default"]());
    });
    var renderCopy = function renderCopy() {
      var copyable = props2.copyable;
      var icon = isCopied.value ? function () {
        return Vue.createVNode(tdesignIconsVueNext.CheckIcon, null, null);
      } : function () {
        return Vue.createVNode(tdesignIconsVueNext.CopyIcon, null, null);
      };
      var tooltipConf = {
        theme: "default"
      };
      var onCopy = function onCopy() {};
      if (_typeof__default["default"](copyable) === "object") {
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
      return Vue.createVNode(tooltip_index.Tooltip, Vue.mergeProps(tooltipConf, {
        "content": tooltipText.value
      }), {
        "default": function _default() {
          return [Vue.createVNode(button_index.Button, {
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
      if (_typeof__default["default"](copyable) === "object" && copyable !== null && copyable !== void 0 && copyable.text) {
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
      typography_utils_copyToClipboard["default"](getChildrenText());
      cb === null || cb === void 0 || cb();
    };
    return function () {
      var content2 = renderContent("default", "content");
      return props2.ellipsis ? Vue.createVNode(typography_components_ellipsis["default"], Vue.mergeProps(props2, {
        "class": classList.value
      }), {
        "default": function _default() {
          return [wrapperDecorations(props2, content2), props2.copyable ? renderCopy() : null];
        }
      }) : Vue.createVNode("span", {
        "class": classList.value
      }, [wrapperDecorations(props2, content2), props2.copyable ? renderCopy() : null]);
    };
  }
});

exports["default"] = _Text;
//# sourceMappingURL=text.js.map
