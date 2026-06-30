/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { defineComponent, getCurrentInstance, ref, createVNode, onMounted, onBeforeUnmount } from 'vue';
import { CheckCircleFilledIcon, CloseIcon, ErrorCircleFilledIcon, HelpCircleFilledIcon, InfoCircleFilledIcon } from 'tdesign-icons-vue-next';
import { isString, isArray } from 'lodash-es';
import { a as addClass, o as on, c as off } from '../_chunks/dep-51a43106.mjs';
import props from './props.mjs';
import { i as useGlobalIcon, u as usePrefixClass, a as useTNodeJSX, A as useIcon, B as filterCommentNode } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { l as log } from '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

var _Alert = defineComponent({
  name: "TAlert",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var instance = getCurrentInstance();
    var _useConfig = useConfig("alert"),
      globalConfig = _useConfig.globalConfig,
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = useGlobalIcon({
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        CloseIcon: CloseIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon,
        HelpCircleFilledIcon: HelpCircleFilledIcon,
        InfoCircleFilledIcon: InfoCircleFilledIcon
      }),
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      CloseIcon$1 = _useGlobalIcon.CloseIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon,
      HelpCircleFilledIcon$1 = _useGlobalIcon.HelpCircleFilledIcon,
      InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon;
    var COMPONENT_NAME = usePrefixClass("alert");
    var renderTNodeJSX = useTNodeJSX();
    var renderIconTNode = useIcon();
    var alertRef = ref(null);
    var descriptionRef = ref(null);
    var descHeight = ref(0);
    var visible = ref(true);
    var collapsed = ref(true);
    var renderIcon = function renderIcon() {
      var Component = {
        info: InfoCircleFilledIcon$1,
        success: CheckCircleFilledIcon$1,
        warning: ErrorCircleFilledIcon$1,
        error: ErrorCircleFilledIcon$1,
        question: HelpCircleFilledIcon$1
      };
      var iconContent = renderIconTNode("icon", Component);
      return iconContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__icon")
      }, [iconContent]) : null;
    };
    var renderClose = function renderClose() {
      var closeBtn = props2.closeBtn;
      var isUsingClose = Object.prototype.hasOwnProperty.call(instance.vnode.props || {}, "close") || slots.close;
      var close = isUsingClose ? props2.close : closeBtn;
      if (isUsingClose) {
        log.warnOnce("TAlert", "prop `close` is going to be deprecated, please use `closeBtn` instead.");
      }
      var closeContent = null;
      if (close === true || close === "") {
        closeContent = createVNode(CloseIcon$1, null, null);
      } else if (isString(close)) {
        closeContent = close;
      } else {
        closeContent = renderTNodeJSX(isUsingClose ? "close" : "closeBtn");
      }
      return closeContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__close"),
        "onClick": handleClose
      }, [closeContent]) : null;
    };
    var renderTitle = function renderTitle() {
      var titleContent = renderTNodeJSX("title");
      return titleContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__title")
      }, [" ", titleContent]) : null;
    };
    var renderMessage = function renderMessage() {
      var operationContent = renderTNodeJSX("operation");
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__message")
      }, [renderDescription(), operationContent ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__operation")
      }, [operationContent]) : null]);
    };
    var renderDescription = function renderDescription() {
      var _descriptionRef$value;
      var messageContent = renderTNodeJSX("default") || renderTNodeJSX("message");
      if (isArray(messageContent)) {
        messageContent = filterCommentNode(messageContent);
      }
      var contentLength = isArray(messageContent) ? messageContent.length : 1;
      var hasCollapse = props2.maxLine > 0 && props2.maxLine < contentLength;
      var height = (_descriptionRef$value = descriptionRef.value) === null || _descriptionRef$value === void 0 || (_descriptionRef$value = _descriptionRef$value.children[0]) === null || _descriptionRef$value === void 0 ? void 0 : _descriptionRef$value.offsetHeight;
      if (hasCollapse && collapsed.value) {
        messageContent = messageContent.slice(0, props2.maxLine);
        height && (descriptionRef.value.style.height = "".concat(descHeight.value, "px"));
      } else if (hasCollapse) {
        height && (descriptionRef.value.style.height = "".concat(height * (contentLength - props2.maxLine) + descHeight.value, "px"));
      }
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__description"),
        "ref": descriptionRef
      }, [hasCollapse ? messageContent.map(function (content) {
        return createVNode("div", null, [content]);
      }) : messageContent, hasCollapse ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__collapse"),
        "onClick": function onClick() {
          collapsed.value = !collapsed.value;
        }
      }, [collapsed.value ? globalConfig.value.expandText : globalConfig.value.collapseText]) : null]);
    };
    var renderContent = function renderContent() {
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [renderTitle(), renderMessage()]);
    };
    var handleClose = function handleClose(e) {
      var _props2$onClose;
      (_props2$onClose = props2.onClose) === null || _props2$onClose === void 0 || _props2$onClose.call(props2, {
        e: e
      });
      addClass(alertRef.value, "".concat(COMPONENT_NAME.value, "--closing"));
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
    onMounted(function () {
      on(alertRef.value, "transitionend", handleCloseEnd);
      descHeight.value = descriptionRef.value.offsetHeight;
    });
    onBeforeUnmount(function () {
      off(alertRef.value, "transitionend", handleCloseEnd);
    });
    return function () {
      return createVNode("div", {
        "ref": alertRef,
        "class": ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "--").concat(props2.theme), _defineProperty({}, "".concat(classPrefix.value, "-is-hidden"), !visible.value)]
      }, [renderIcon(), renderContent(), renderClose()]);
    };
  }
});

export { _Alert as default };
//# sourceMappingURL=alert.mjs.map
