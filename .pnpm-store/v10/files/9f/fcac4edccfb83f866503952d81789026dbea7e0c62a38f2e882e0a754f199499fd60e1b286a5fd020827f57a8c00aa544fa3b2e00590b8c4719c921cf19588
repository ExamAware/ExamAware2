/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var guide_props = require('./props.js');
var guide_utils_getScrollParent = require('./utils/getScrollParent.js');
var guide_utils_getRelativePosition = require('./utils/getRelativePosition.js');
var guide_utils_getTargetElm = require('./utils/getTargetElm.js');
var guide_utils_scrollToElm = require('./utils/scrollToElm.js');
var setStyle = require('../_chunks/dep-c3dee00a.js');
var dom = require('../_chunks/dep-06276759.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var index = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$3 = require('../_chunks/dep-5d4742f2.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
var button_index = require('../button/index.js');
var popup_index = require('../popup/index.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-953a77eb.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
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
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('../button/props.js');
require('../_chunks/dep-874d2900.js');
require('../_chunks/dep-d45110a6.js');
require('../_chunks/dep-0b6215b5.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../popup/container.js');
require('../popup/props.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Guide = Vue.defineComponent({
  name: "TGuide",
  props: guide_props["default"],
  setup: function setup(props2, context) {
    var renderTNodeJSX = index.useTNodeJSX();
    var COMPONENT_NAME = index$1.usePrefixClass("guide");
    var LOCK_CLASS = index$1.usePrefixClass("guide--lock");
    var _useConfig = configProvider_hooks_useConfig.useConfig("guide"),
      globalConfig = _useConfig.globalConfig;
    var _toRefs = Vue.toRefs(props2),
      current = _toRefs.current,
      modelValue = _toRefs.modelValue,
      hideCounter = _toRefs.hideCounter,
      hidePrev = _toRefs.hidePrev,
      hideSkip = _toRefs.hideSkip,
      steps = _toRefs.steps,
      zIndex = _toRefs.zIndex;
    var _useVModel = index$2.useVModel(current, modelValue, props2.defaultCurrent, props2.onChange, "current"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerCurrent = _useVModel2[0],
      setInnerCurrent = _useVModel2[1];
    var overlayLayerRef = Vue.ref();
    var highlightLayerRef = Vue.ref();
    var referenceLayerRef = Vue.ref();
    var currentHighlightLayerElm = Vue.ref();
    var dialogWrapperRef = Vue.ref();
    var dialogTooltipRef = Vue.ref();
    var popupTooltipRef = Vue.ref();
    var actived = Vue.ref(false);
    var stepsTotal = Vue.computed(function () {
      return steps.value.length;
    });
    var currentStepInfo = Vue.computed(function () {
      return steps.value[innerCurrent.value];
    });
    var isPopup = Vue.computed(function () {
      return getCurrentCrossProps("mode") === "popup";
    });
    var currentElmIsFixed = Vue.computed(function () {
      return dom.isFixed(currentHighlightLayerElm.value || document.body);
    });
    var getCurrentCrossProps = function getCurrentCrossProps(propsName) {
      var _currentStepInfo$valu;
      return (_currentStepInfo$valu = currentStepInfo.value[propsName]) !== null && _currentStepInfo$valu !== void 0 ? _currentStepInfo$valu : props2[propsName];
    };
    var currentCustomHighlightContent = Vue.computed(function () {
      var highlightContent = currentStepInfo.value.highlightContent;
      var node = highlightContent;
      if (isFunction.isFunction(highlightContent)) {
        node = highlightContent(hWithParams());
      } else if (context.slots.highlightContent) {
        node = context.slots.highlightContent(hWithParams());
      } else if (context.slots["highlight-content"]) {
        node = context.slots["highlight-content"](hWithParams());
      } else if (!!highlightContent) {
        node = Vue.createVNode(node, null, null);
      }
      if (node) {
        if (!node.props) node.props = {};
        node.props["class"] = node.props["class"] || "";
      }
      return node;
    });
    var showCustomHighlightContent = Vue.computed(function () {
      return Boolean(currentCustomHighlightContent.value && isPopup.value);
    });
    var popupVisible = Vue.ref(false);
    var hWithParams = function hWithParams() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        currentStepInfo: currentStepInfo.value
      };
      var newH = new Function("return " + Vue.h.toString())();
      return Object.assign({}, newH, params);
    };
    var setHighlightLayerPosition = function setHighlightLayerPosition(highlightLayer) {
      var isReference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _getRelativePosition = guide_utils_getRelativePosition.getRelativePosition(currentHighlightLayerElm.value),
        top = _getRelativePosition.top,
        left = _getRelativePosition.left;
      var _currentHighlightLaye = currentHighlightLayerElm.value.getBoundingClientRect(),
        width = _currentHighlightLaye.width,
        height = _currentHighlightLaye.height;
      var highlightPadding = getCurrentCrossProps("highlightPadding");
      if (isPopup.value) {
        width += highlightPadding * 2;
        height += highlightPadding * 2;
        top -= highlightPadding;
        left -= highlightPadding;
      } else {
        var _getWindowScroll = dom.getWindowScroll(),
          scrollTop = _getWindowScroll.scrollTop,
          scrollLeft = _getWindowScroll.scrollLeft;
        top += scrollTop;
        left += scrollLeft;
      }
      var style = {
        top: "".concat(top, "px"),
        left: "".concat(left, "px")
      };
      if (showCustomHighlightContent.value) {
        if (isReference) {
          var _highlightLayerRef$va = highlightLayerRef.value.getBoundingClientRect(),
            width2 = _highlightLayerRef$va.width,
            height2 = _highlightLayerRef$va.height;
          Object.assign(style, {
            width: "".concat(width2, "px"),
            height: "".concat(height2, "px")
          });
        } else {
          Object.assign(style, {
            width: "auto",
            height: "auto"
          });
        }
      } else {
        Object.assign(style, {
          width: "".concat(width, "px"),
          height: "".concat(height, "px")
        });
      }
      setStyle.setStyle(highlightLayer, style);
    };
    var showPopupGuide = function showPopupGuide() {
      Vue.nextTick(function () {
        var _popupTooltipRef$valu;
        currentHighlightLayerElm.value = guide_utils_getTargetElm.getTargetElm(currentStepInfo.value.element);
        if (!currentHighlightLayerElm.value) return;
        guide_utils_getScrollParent.scrollToParentVisibleArea(currentHighlightLayerElm.value);
        setHighlightLayerPosition(highlightLayerRef.value);
        setHighlightLayerPosition(referenceLayerRef.value, true);
        guide_utils_scrollToElm.scrollToElm(currentHighlightLayerElm.value);
        (_popupTooltipRef$valu = popupTooltipRef.value) === null || _popupTooltipRef$valu === void 0 || _popupTooltipRef$valu.update();
      });
    };
    var destroyTooltipElm = function destroyTooltipElm() {
      var _referenceLayerRef$va;
      (_referenceLayerRef$va = referenceLayerRef.value) === null || _referenceLayerRef$va === void 0 || _referenceLayerRef$va.parentNode.removeChild(referenceLayerRef.value);
    };
    var showDialogGuide = function showDialogGuide() {
      Vue.nextTick(function () {
        currentHighlightLayerElm.value = dialogTooltipRef.value;
        guide_utils_getScrollParent.scrollToParentVisibleArea(currentHighlightLayerElm.value);
        setHighlightLayerPosition(highlightLayerRef.value);
        guide_utils_scrollToElm.scrollToElm(currentHighlightLayerElm.value);
      });
    };
    var destroyDialogTooltipElm = function destroyDialogTooltipElm() {
      var _dialogTooltipRef$val, _dialogWrapperRef$val;
      (_dialogTooltipRef$val = dialogTooltipRef.value) === null || _dialogTooltipRef$val === void 0 || _dialogTooltipRef$val.parentNode.removeChild(dialogTooltipRef.value);
      (_dialogWrapperRef$val = dialogWrapperRef.value) === null || _dialogWrapperRef$val === void 0 || _dialogWrapperRef$val.parentNode.removeChild(dialogWrapperRef.value);
    };
    var showGuide = function showGuide() {
      if (isPopup.value) {
        destroyDialogTooltipElm();
        showPopupGuide();
      } else {
        destroyTooltipElm();
        showDialogGuide();
      }
      popupVisible.value = true;
    };
    index$3.useResize(function () {
      if (!popupVisible.value) return;
      showGuide();
    }, !dom.isServer && document.body);
    var destroyGuide = function destroyGuide() {
      var _highlightLayerRef$va2, _overlayLayerRef$valu;
      destroyTooltipElm();
      destroyDialogTooltipElm();
      (_highlightLayerRef$va2 = highlightLayerRef.value) === null || _highlightLayerRef$va2 === void 0 || _highlightLayerRef$va2.parentNode.removeChild(highlightLayerRef.value);
      (_overlayLayerRef$valu = overlayLayerRef.value) === null || _overlayLayerRef$valu === void 0 || _overlayLayerRef$valu.parentNode.removeChild(overlayLayerRef.value);
      dom.removeClass(document.body, LOCK_CLASS.value);
    };
    var handleSkip = function handleSkip(e) {
      var _props2$onSkip;
      var total = stepsTotal.value;
      actived.value = false;
      setInnerCurrent(-1, {
        e: e,
        total: total
      });
      (_props2$onSkip = props2.onSkip) === null || _props2$onSkip === void 0 || _props2$onSkip.call(props2, {
        e: e,
        current: innerCurrent.value,
        total: total
      });
    };
    var handlePrev = function handlePrev(e) {
      var _props2$onPrevStepCli;
      var total = stepsTotal.value;
      setInnerCurrent(innerCurrent.value - 1, {
        e: e,
        total: total
      });
      (_props2$onPrevStepCli = props2.onPrevStepClick) === null || _props2$onPrevStepCli === void 0 || _props2$onPrevStepCli.call(props2, {
        e: e,
        prev: innerCurrent.value - 1,
        current: innerCurrent.value,
        total: total
      });
    };
    var handleNext = function handleNext(e) {
      var _props2$onNextStepCli;
      var total = stepsTotal.value;
      setInnerCurrent(innerCurrent.value + 1, {
        e: e,
        total: total
      });
      (_props2$onNextStepCli = props2.onNextStepClick) === null || _props2$onNextStepCli === void 0 || _props2$onNextStepCli.call(props2, {
        e: e,
        next: innerCurrent.value + 1,
        current: innerCurrent.value,
        total: total
      });
    };
    var handleFinish = function handleFinish(e) {
      var _props2$onFinish;
      var total = stepsTotal.value;
      actived.value = false;
      setInnerCurrent(-1, {
        e: e,
        total: total
      });
      (_props2$onFinish = props2.onFinish) === null || _props2$onFinish === void 0 || _props2$onFinish.call(props2, {
        e: e,
        current: innerCurrent.value,
        total: total
      });
    };
    var initGuide = function initGuide() {
      if (innerCurrent.value >= 0 && innerCurrent.value < steps.value.length) {
        if (!actived.value) {
          actived.value = true;
          dom.addClass(document.body, LOCK_CLASS.value);
        }
        showGuide();
      }
    };
    Vue.watch(innerCurrent, function (val) {
      if (val >= 0 && val < steps.value.length) {
        popupVisible.value = false;
        initGuide();
      } else {
        actived.value = false;
        destroyGuide();
      }
    });
    Vue.onMounted(function () {
      initGuide();
    });
    return function () {
      var renderOverlayLayer = function renderOverlayLayer() {
        return Vue.createVNode("div", {
          "ref": overlayLayerRef,
          "class": "".concat(COMPONENT_NAME.value, "__overlay"),
          "style": {
            zIndex: zIndex.value - 2
          }
        }, null);
      };
      var renderHighlightLayer = function renderHighlightLayer() {
        var style = {
          zIndex: zIndex.value - 1
        };
        var highlightClass = ["".concat(COMPONENT_NAME.value, "__highlight"), "".concat(COMPONENT_NAME.value, "__highlight--").concat(isPopup.value ? "popup" : "dialog"), "".concat(COMPONENT_NAME.value, "--").concat(currentElmIsFixed.value && isPopup.value ? "fixed" : "absolute")];
        var showOverlay = getCurrentCrossProps("showOverlay");
        var maskClass = ["".concat(COMPONENT_NAME.value, "__highlight--").concat(showOverlay ? "mask" : "nomask")];
        return Vue.createVNode("div", {
          "ref": highlightLayerRef,
          "class": [].concat(highlightClass, maskClass),
          "style": style
        }, [showCustomHighlightContent.value && currentCustomHighlightContent.value]);
      };
      var renderCounter = function renderCounter() {
        var popupSlotCounter = renderTNodeJSX("counter", {
          params: {
            total: stepsTotal.value,
            current: innerCurrent.value
          }
        });
        var popupDefaultCounter = Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__counter")
        }, [popupSlotCounter || "".concat(innerCurrent.value + 1, "/").concat(stepsTotal.value)]);
        return Vue.createVNode(Vue.Fragment, null, [!hideCounter.value && popupDefaultCounter]);
      };
      var renderAction = function renderAction(mode) {
        var _getCurrentCrossProps, _getCurrentCrossProps2, _getCurrentCrossProps3, _props2$finishButtonP;
        var isLast = innerCurrent.value === stepsTotal.value - 1;
        var isFirst = innerCurrent.value === 0;
        var buttonSize = mode === "popup" ? "small" : "medium";
        return Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__action")
        }, [!hideSkip.value && !isLast && Vue.createVNode(button_index.Button, Vue.mergeProps({
          "key": "skip",
          "class": "".concat(COMPONENT_NAME.value, "__skip"),
          "theme": "default",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleSkip
        }, (_getCurrentCrossProps = getCurrentCrossProps("skipButtonProps")) !== null && _getCurrentCrossProps !== void 0 ? _getCurrentCrossProps : globalConfig.value.skipButtonProps), null), !hidePrev.value && !isFirst && Vue.createVNode(button_index.Button, Vue.mergeProps({
          "key": "prev",
          "class": "".concat(COMPONENT_NAME.value, "__prev"),
          "theme": "default",
          "size": buttonSize,
          "variant": "base",
          "onClick": handlePrev
        }, (_getCurrentCrossProps2 = getCurrentCrossProps("prevButtonProps")) !== null && _getCurrentCrossProps2 !== void 0 ? _getCurrentCrossProps2 : globalConfig.value.prevButtonProps), null), !isLast && Vue.createVNode(button_index.Button, Vue.mergeProps({
          "key": "next",
          "class": "".concat(COMPONENT_NAME.value, "__next"),
          "theme": "primary",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleNext
        }, (_getCurrentCrossProps3 = getCurrentCrossProps("nextButtonProps")) !== null && _getCurrentCrossProps3 !== void 0 ? _getCurrentCrossProps3 : globalConfig.value.nextButtonProps), null), isLast && Vue.createVNode(button_index.Button, Vue.mergeProps({
          "key": "finish",
          "class": "".concat(COMPONENT_NAME.value, "__finish"),
          "theme": "primary",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleFinish
        }, (_props2$finishButtonP = props2.finishButtonProps) !== null && _props2$finishButtonP !== void 0 ? _props2$finishButtonP : globalConfig.value.finishButtonProps), null)]);
      };
      var renderTitle = function renderTitle() {
        var functionTitle = isFunction.isFunction(currentStepInfo.value.title) ? currentStepInfo.value.title() : void 0;
        var slotTitle = context.slots.title ? context.slots.title(hWithParams()) : void 0;
        return functionTitle || slotTitle || currentStepInfo.value.title;
      };
      var renderTooltipBody = function renderTooltipBody() {
        var title = Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__title")
        }, [renderTitle()]);
        var bodyRender = currentStepInfo.value.body;
        var descBody;
        if (isFunction.isFunction(bodyRender)) {
          descBody = bodyRender(hWithParams());
        } else if (context.slots.body) {
          descBody = context.slots.body({
            currentStepInfo: currentStepInfo.value
          });
        } else if (typeof bodyRender === "string") {
          descBody = bodyRender;
        } else {
          descBody = Vue.createVNode(bodyRender, null, null);
        }
        var desc = Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__desc")
        }, [descBody]);
        return Vue.createVNode(Vue.Fragment, null, [title, desc]);
      };
      var renderPopupContent = function renderPopupContent() {
        var footerClasses = ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--popup")];
        var action = Vue.createVNode("div", {
          "class": footerClasses
        }, [renderCounter(), renderAction("popup")]);
        return Vue.createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__tooltip")
        }, [renderTooltipBody(), action]);
      };
      var renderPopupGuide = function renderPopupGuide() {
        var _currentStepInfo$valu2;
        var content = currentStepInfo.value.content;
        var contentProps = {
          handlePrev: handlePrev,
          handleNext: handleNext,
          handleSkip: handleSkip,
          handleFinish: handleFinish,
          current: innerCurrent.value,
          total: stepsTotal.value
        };
        var renderBody;
        if (isFunction.isFunction(content)) {
          renderBody = function renderBody() {
            return content(hWithParams(contentProps));
          };
        } else if (context.slots.content) {
          renderBody = function renderBody() {
            return context.slots.content(hWithParams(contentProps));
          };
        } else if (content) {
          renderBody = function renderBody() {
            return Vue.createVNode(content, contentProps, null);
          };
        } else {
          renderBody = renderPopupContent;
        }
        var classes = ["".concat(COMPONENT_NAME.value, "__reference"), "".concat(COMPONENT_NAME.value, "--").concat(currentElmIsFixed.value ? "fixed" : "absolute")];
        var innerClassName = [_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__popup--content"), !!content)];
        return Vue.createVNode(popup_index.Popup, Vue.mergeProps({
          "ref": popupTooltipRef,
          "visible": popupVisible.value,
          "show-arrow": !content,
          "zIndex": zIndex.value,
          "placement": currentStepInfo.value.placement
        }, currentStepInfo.value.popupProps, {
          "content": renderBody,
          "overlayClassName": ["".concat(COMPONENT_NAME.value, "__popup"), currentStepInfo.value.stepOverlayClass],
          "overlayInnerClassName": innerClassName.concat((_currentStepInfo$valu2 = currentStepInfo.value.popupProps) === null || _currentStepInfo$valu2 === void 0 ? void 0 : _currentStepInfo$valu2.overlayInnerClassName)
        }), {
          "default": function _default() {
            return [Vue.createVNode("div", {
              "ref": referenceLayerRef,
              "class": classes
            }, null)];
          }
        });
      };
      var renderDialogGuide = function renderDialogGuide() {
        var style = {
          zIndex: zIndex.value
        };
        var wrapperClasses = ["".concat(COMPONENT_NAME.value, "__wrapper"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__wrapper--center"), currentStepInfo.value.placement === "center")];
        var dialogClasses = ["".concat(COMPONENT_NAME.value, "__reference"), "".concat(COMPONENT_NAME.value, "--absolute"), "".concat(COMPONENT_NAME.value, "__dialog"), _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__dialog--nomask"), !getCurrentCrossProps("showOverlay")), currentStepInfo.value.stepOverlayClass, !!currentStepInfo.value.stepOverlayClass)];
        var footerClasses = ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--popup")];
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
          "ref": dialogWrapperRef,
          "class": wrapperClasses,
          "style": style
        }, [Vue.createVNode("div", {
          "ref": dialogTooltipRef,
          "class": dialogClasses
        }, [renderTooltipBody(), Vue.createVNode("div", {
          "class": footerClasses
        }, [renderCounter(), renderAction("dialog")])])])]);
      };
      var renderGuide = function renderGuide() {
        return Vue.createVNode(Vue.Fragment, null, [Vue.createVNode(Vue.Teleport, {
          "to": "body"
        }, {
          "default": function _default() {
            return [renderOverlayLayer(), renderHighlightLayer(), isPopup.value ? renderPopupGuide() : renderDialogGuide()];
          }
        })]);
      };
      return Vue.createVNode(Vue.Fragment, null, [actived.value && renderGuide()]);
    };
  }
});

exports["default"] = _Guide;
//# sourceMappingURL=guide.js.map
