/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
var dom = require('../_chunks/dep-06276759.js');
var alert_props = require('./props.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
var index = require('../_chunks/dep-31c76dc6.js');
require('@babel/runtime/helpers/slicedToArray');
var log = require('../_chunks/dep-733b2b51.js');
require('../_chunks/dep-cc66acf1.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isArray = require('../_chunks/dep-87589faa.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
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
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function useIcon() {
  var instance = Vue.getCurrentInstance();
  return function renderIconTNode(iconType, defaultIcons) {
    var iconContent;
    if (isFunction.isFunction(instance.props[iconType])) {
      iconContent = instance.props[iconType](Vue.h);
    } else if (instance.slots[iconType]) {
      iconContent = instance.slots[iconType] && instance.slots[iconType](null)[0];
    } else if (defaultIcons) {
      var Component = defaultIcons[instance.props.theme];
      iconContent = Vue.createVNode(Component, null, null);
    }
    return iconContent;
  };
}

var _Alert = Vue.defineComponent({
  name: "TAlert",
  props: alert_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var instance = Vue.getCurrentInstance();
    var _useConfig = configProvider_hooks_useConfig.useConfig("alert"),
      globalConfig = _useConfig.globalConfig,
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = index.useGlobalIcon({
        CheckCircleFilledIcon: tdesignIconsVueNext.CheckCircleFilledIcon,
        CloseIcon: tdesignIconsVueNext.CloseIcon,
        ErrorCircleFilledIcon: tdesignIconsVueNext.ErrorCircleFilledIcon,
        HelpCircleFilledIcon: tdesignIconsVueNext.HelpCircleFilledIcon,
        InfoCircleFilledIcon: tdesignIconsVueNext.InfoCircleFilledIcon
      }),
      CheckCircleFilledIcon = _useGlobalIcon.CheckCircleFilledIcon,
      CloseIcon = _useGlobalIcon.CloseIcon,
      ErrorCircleFilledIcon = _useGlobalIcon.ErrorCircleFilledIcon,
      HelpCircleFilledIcon = _useGlobalIcon.HelpCircleFilledIcon,
      InfoCircleFilledIcon = _useGlobalIcon.InfoCircleFilledIcon;
    var COMPONENT_NAME = index$1.usePrefixClass("alert");
    var renderTNodeJSX = index$2.useTNodeJSX();
    var renderIconTNode = useIcon();
    var alertRef = Vue.ref(null);
    var descriptionRef = Vue.ref(null);
    var descHeight = Vue.ref(0);
    var visible = Vue.ref(true);
    var collapsed = Vue.ref(true);
    var renderIcon = function renderIcon() {
      var Component = {
        info: InfoCircleFilledIcon,
        success: CheckCircleFilledIcon,
        warning: ErrorCircleFilledIcon,
        error: ErrorCircleFilledIcon,
        question: HelpCircleFilledIcon
      };
      var iconContent = renderIconTNode("icon", Component);
      return iconContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__icon")
      }, [iconContent]) : null;
    };
    var renderClose = function renderClose() {
      var closeBtn = props2.closeBtn;
      var isUsingClose = Object.prototype.hasOwnProperty.call(instance.vnode.props || {}, "close") || slots.close;
      var close = isUsingClose ? props2.close : closeBtn;
      if (isUsingClose) {
        log.log.warnOnce("TAlert", "prop `close` is going to be deprecated, please use `closeBtn` instead.");
      }
      var closeContent = null;
      if (close === true || close === "") {
        closeContent = Vue.createVNode(CloseIcon, null, null);
      } else if (isString.isString(close)) {
        closeContent = close;
      } else {
        closeContent = renderTNodeJSX(isUsingClose ? "close" : "closeBtn");
      }
      return closeContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__close"),
        "onClick": handleClose
      }, [closeContent]) : null;
    };
    var renderTitle = function renderTitle() {
      var titleContent = renderTNodeJSX("title");
      return titleContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [" ", titleContent]) : null;
    };
    var renderMessage = function renderMessage() {
      var operationContent = renderTNodeJSX("operation");
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__message")
      }, [renderDescription(), operationContent ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__operation")
      }, [operationContent]) : null]);
    };
    var renderDescription = function renderDescription() {
      var _descriptionRef$value;
      var messageContent = renderTNodeJSX("default") || renderTNodeJSX("message");
      if (isArray.isArray(messageContent)) {
        messageContent = index$2.filterCommentNode(messageContent);
      }
      var contentLength = isArray.isArray(messageContent) ? messageContent.length : 1;
      var hasCollapse = props2.maxLine > 0 && props2.maxLine < contentLength;
      var height = (_descriptionRef$value = descriptionRef.value) === null || _descriptionRef$value === void 0 || (_descriptionRef$value = _descriptionRef$value.children[0]) === null || _descriptionRef$value === void 0 ? void 0 : _descriptionRef$value.offsetHeight;
      if (hasCollapse && collapsed.value) {
        messageContent = messageContent.slice(0, props2.maxLine);
        height && (descriptionRef.value.style.height = "".concat(descHeight.value, "px"));
      } else if (hasCollapse) {
        height && (descriptionRef.value.style.height = "".concat(height * (contentLength - props2.maxLine) + descHeight.value, "px"));
      }
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__description"),
        "ref": descriptionRef
      }, [hasCollapse ? messageContent.map(function (content) {
        return Vue.createVNode("div", null, [content]);
      }) : messageContent, hasCollapse ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__collapse"),
        "onClick": function onClick() {
          collapsed.value = !collapsed.value;
        }
      }, [collapsed.value ? globalConfig.value.expandText : globalConfig.value.collapseText]) : null]);
    };
    var renderContent = function renderContent() {
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [renderTitle(), renderMessage()]);
    };
    var handleClose = function handleClose(e) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
        e: e
      });
      dom.addClass(alertRef.value, "".concat(COMPONENT_NAME.value, "--closing"));
    };
    var handleCloseEnd = function handleCloseEnd(e) {
      var isTransitionTarget = e.target === alertRef.value;
      if (e.propertyName === "opacity" && isTransitionTarget) {
        var _props2$onClosed;
        visible.value = false;
        (_props2$onClosed = props2.onClosed) === null || _props2$onClosed === void 0 || _props2$onClosed.call(props2, {
          e: e
        });
      }
    };
    Vue.onMounted(function () {
      dom.on(alertRef.value, "transitionend", handleCloseEnd);
      descHeight.value = descriptionRef.value.offsetHeight;
    });
    Vue.onBeforeUnmount(function () {
      dom.off(alertRef.value, "transitionend", handleCloseEnd);
    });
    return function () {
      return Vue.createVNode("div", {
        "ref": alertRef,
        "class": ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props2.theme), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-is-hidden"), !visible.value)]
      }, [renderIcon(), renderContent(), renderClose()]);
    };
  }
});

exports["default"] = _Alert;
//# sourceMappingURL=alert.js.map
