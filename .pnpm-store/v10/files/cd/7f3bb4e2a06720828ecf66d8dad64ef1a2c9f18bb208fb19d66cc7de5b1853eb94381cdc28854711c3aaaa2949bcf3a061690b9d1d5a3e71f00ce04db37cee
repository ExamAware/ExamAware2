/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { defineComponent, toRefs, ref, computed, createVNode, h, nextTick, watch, onMounted, Fragment, mergeProps, Teleport } from 'vue';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isFunction } from 'lodash-es';
import props from './props.mjs';
import './utils/index.mjs';
import { a as useTNodeJSX, u as usePrefixClass, j as useVModel, s as setStyle, C as useResize } from '../_chunks/dep-7673347f.mjs';
import { j as isFixed, k as getWindowScroll, i as isServer, r as removeClass, a as addClass } from '../_chunks/dep-51a43106.mjs';
import { Button } from '../button/index.mjs';
import { Popup } from '../popup/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { getRelativePosition } from './utils/getRelativePosition.mjs';
import { getTargetElm } from './utils/getTargetElm.mjs';
import { scrollToParentVisibleArea } from './utils/getScrollParent.mjs';
import { scrollToElm } from './utils/scrollToElm.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../loading/props.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';

var _Guide = defineComponent({
  name: "TGuide",
  props: props,
  setup: function setup(props2, context) {
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("guide");
    var LOCK_CLASS = usePrefixClass("guide--lock");
    var _useConfig = useConfig("guide"),
      globalConfig = _useConfig.globalConfig;
    var _toRefs = toRefs(props2),
      current = _toRefs.current,
      modelValue = _toRefs.modelValue,
      hideCounter = _toRefs.hideCounter,
      hidePrev = _toRefs.hidePrev,
      hideSkip = _toRefs.hideSkip,
      steps = _toRefs.steps,
      zIndex = _toRefs.zIndex;
    var _useVModel = useVModel(current, modelValue, props2.defaultCurrent, props2.onChange, "current"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerCurrent = _useVModel2[0],
      setInnerCurrent = _useVModel2[1];
    var overlayLayerRef = ref();
    var highlightLayerRef = ref();
    var referenceLayerRef = ref();
    var currentHighlightLayerElm = ref();
    var dialogWrapperRef = ref();
    var dialogTooltipRef = ref();
    var popupTooltipRef = ref();
    var actived = ref(false);
    var stepsTotal = computed(function () {
      return steps.value.length;
    });
    var currentStepInfo = computed(function () {
      return steps.value[innerCurrent.value];
    });
    var isPopup = computed(function () {
      return getCurrentCrossProps("mode") === "popup";
    });
    var currentElmIsFixed = computed(function () {
      return isFixed(currentHighlightLayerElm.value || document.body);
    });
    var getCurrentCrossProps = function getCurrentCrossProps(propsName) {
      var _currentStepInfo$valu;
      return (_currentStepInfo$valu = currentStepInfo.value[propsName]) !== null && _currentStepInfo$valu !== void 0 ? _currentStepInfo$valu : props2[propsName];
    };
    var currentCustomHighlightContent = computed(function () {
      var highlightContent = currentStepInfo.value.highlightContent;
      var node = highlightContent;
      if (isFunction(highlightContent)) {
        node = highlightContent(hWithParams());
      } else if (context.slots.highlightContent) {
        node = context.slots.highlightContent(hWithParams());
      } else if (context.slots["highlight-content"]) {
        node = context.slots["highlight-content"](hWithParams());
      } else if (!!highlightContent) {
        node = createVNode(node, null, null);
      }
      if (node) {
        if (!node.props) node.props = {};
        node.props["class"] = node.props["class"] || "";
      }
      return node;
    });
    var showCustomHighlightContent = computed(function () {
      return Boolean(currentCustomHighlightContent.value && isPopup.value);
    });
    var popupVisible = ref(false);
    var hWithParams = function hWithParams() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        currentStepInfo: currentStepInfo.value
      };
      var newH = new Function("return " + h.toString())();
      return Object.assign({}, newH, params);
    };
    var setHighlightLayerPosition = function setHighlightLayerPosition(highlightLayer) {
      var isReference = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _getRelativePosition = getRelativePosition(currentHighlightLayerElm.value),
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
        var _getWindowScroll = getWindowScroll(),
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
      setStyle(highlightLayer, style);
    };
    var showPopupGuide = function showPopupGuide() {
      nextTick(function () {
        var _popupTooltipRef$valu;
        currentHighlightLayerElm.value = getTargetElm(currentStepInfo.value.element);
        if (!currentHighlightLayerElm.value) return;
        scrollToParentVisibleArea(currentHighlightLayerElm.value);
        setHighlightLayerPosition(highlightLayerRef.value);
        setHighlightLayerPosition(referenceLayerRef.value, true);
        scrollToElm(currentHighlightLayerElm.value);
        (_popupTooltipRef$valu = popupTooltipRef.value) === null || _popupTooltipRef$valu === void 0 || _popupTooltipRef$valu.update();
      });
    };
    var destroyTooltipElm = function destroyTooltipElm() {
      var _referenceLayerRef$va;
      (_referenceLayerRef$va = referenceLayerRef.value) === null || _referenceLayerRef$va === void 0 || _referenceLayerRef$va.parentNode.removeChild(referenceLayerRef.value);
    };
    var showDialogGuide = function showDialogGuide() {
      nextTick(function () {
        currentHighlightLayerElm.value = dialogTooltipRef.value;
        scrollToParentVisibleArea(currentHighlightLayerElm.value);
        setHighlightLayerPosition(highlightLayerRef.value);
        scrollToElm(currentHighlightLayerElm.value);
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
    useResize(function () {
      if (!popupVisible.value) return;
      showGuide();
    }, !isServer && document.body);
    var destroyGuide = function destroyGuide() {
      var _highlightLayerRef$va2, _overlayLayerRef$valu;
      destroyTooltipElm();
      destroyDialogTooltipElm();
      (_highlightLayerRef$va2 = highlightLayerRef.value) === null || _highlightLayerRef$va2 === void 0 || _highlightLayerRef$va2.parentNode.removeChild(highlightLayerRef.value);
      (_overlayLayerRef$valu = overlayLayerRef.value) === null || _overlayLayerRef$valu === void 0 || _overlayLayerRef$valu.parentNode.removeChild(overlayLayerRef.value);
      removeClass(document.body, LOCK_CLASS.value);
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
          addClass(document.body, LOCK_CLASS.value);
        }
        showGuide();
      }
    };
    watch(innerCurrent, function (val) {
      if (val >= 0 && val < steps.value.length) {
        popupVisible.value = false;
        initGuide();
      } else {
        actived.value = false;
        destroyGuide();
      }
    });
    onMounted(function () {
      initGuide();
    });
    return function () {
      var renderOverlayLayer = function renderOverlayLayer() {
        return createVNode("div", {
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
        return createVNode("div", {
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
        var popupDefaultCounter = createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__counter")
        }, [popupSlotCounter || "".concat(innerCurrent.value + 1, "/").concat(stepsTotal.value)]);
        return createVNode(Fragment, null, [!hideCounter.value && popupDefaultCounter]);
      };
      var renderAction = function renderAction(mode) {
        var _getCurrentCrossProps, _getCurrentCrossProps2, _getCurrentCrossProps3, _props2$finishButtonP;
        var isLast = innerCurrent.value === stepsTotal.value - 1;
        var isFirst = innerCurrent.value === 0;
        var buttonSize = mode === "popup" ? "small" : "medium";
        return createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__action")
        }, [!hideSkip.value && !isLast && createVNode(Button, mergeProps({
          "key": "skip",
          "class": "".concat(COMPONENT_NAME.value, "__skip"),
          "theme": "default",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleSkip
        }, (_getCurrentCrossProps = getCurrentCrossProps("skipButtonProps")) !== null && _getCurrentCrossProps !== void 0 ? _getCurrentCrossProps : globalConfig.value.skipButtonProps), null), !hidePrev.value && !isFirst && createVNode(Button, mergeProps({
          "key": "prev",
          "class": "".concat(COMPONENT_NAME.value, "__prev"),
          "theme": "default",
          "size": buttonSize,
          "variant": "base",
          "onClick": handlePrev
        }, (_getCurrentCrossProps2 = getCurrentCrossProps("prevButtonProps")) !== null && _getCurrentCrossProps2 !== void 0 ? _getCurrentCrossProps2 : globalConfig.value.prevButtonProps), null), !isLast && createVNode(Button, mergeProps({
          "key": "next",
          "class": "".concat(COMPONENT_NAME.value, "__next"),
          "theme": "primary",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleNext
        }, (_getCurrentCrossProps3 = getCurrentCrossProps("nextButtonProps")) !== null && _getCurrentCrossProps3 !== void 0 ? _getCurrentCrossProps3 : globalConfig.value.nextButtonProps), null), isLast && createVNode(Button, mergeProps({
          "key": "finish",
          "class": "".concat(COMPONENT_NAME.value, "__finish"),
          "theme": "primary",
          "size": buttonSize,
          "variant": "base",
          "onClick": handleFinish
        }, (_props2$finishButtonP = props2.finishButtonProps) !== null && _props2$finishButtonP !== void 0 ? _props2$finishButtonP : globalConfig.value.finishButtonProps), null)]);
      };
      var renderTitle = function renderTitle() {
        var functionTitle = isFunction(currentStepInfo.value.title) ? currentStepInfo.value.title() : void 0;
        var slotTitle = context.slots.title ? context.slots.title(hWithParams()) : void 0;
        return functionTitle || slotTitle || currentStepInfo.value.title;
      };
      var renderTooltipBody = function renderTooltipBody() {
        var title = createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__title")
        }, [renderTitle()]);
        var bodyRender = currentStepInfo.value.body;
        var descBody;
        if (isFunction(bodyRender)) {
          descBody = bodyRender(hWithParams());
        } else if (context.slots.body) {
          descBody = context.slots.body({
            currentStepInfo: currentStepInfo.value
          });
        } else if (typeof bodyRender === "string") {
          descBody = bodyRender;
        } else {
          descBody = createVNode(bodyRender, null, null);
        }
        var desc = createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__desc")
        }, [descBody]);
        return createVNode(Fragment, null, [title, desc]);
      };
      var renderPopupContent = function renderPopupContent() {
        var footerClasses = ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--popup")];
        var action = createVNode("div", {
          "class": footerClasses
        }, [renderCounter(), renderAction("popup")]);
        return createVNode("div", {
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
        if (isFunction(content)) {
          renderBody = function renderBody() {
            return content(hWithParams(contentProps));
          };
        } else if (context.slots.content) {
          renderBody = function renderBody() {
            return context.slots.content(hWithParams(contentProps));
          };
        } else if (content) {
          renderBody = function renderBody() {
            return createVNode(content, contentProps, null);
          };
        } else {
          renderBody = renderPopupContent;
        }
        var classes = ["".concat(COMPONENT_NAME.value, "__reference"), "".concat(COMPONENT_NAME.value, "--").concat(currentElmIsFixed.value ? "fixed" : "absolute")];
        var innerClassName = [_defineProperty({}, "".concat(COMPONENT_NAME.value, "__popup--content"), !!content)];
        return createVNode(Popup, mergeProps({
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
            return [createVNode("div", {
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
        var wrapperClasses = ["".concat(COMPONENT_NAME.value, "__wrapper"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "__wrapper--center"), currentStepInfo.value.placement === "center")];
        var dialogClasses = ["".concat(COMPONENT_NAME.value, "__reference"), "".concat(COMPONENT_NAME.value, "--absolute"), "".concat(COMPONENT_NAME.value, "__dialog"), _defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "__dialog--nomask"), !getCurrentCrossProps("showOverlay")), currentStepInfo.value.stepOverlayClass, !!currentStepInfo.value.stepOverlayClass)];
        var footerClasses = ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--popup")];
        return createVNode(Fragment, null, [createVNode("div", {
          "ref": dialogWrapperRef,
          "class": wrapperClasses,
          "style": style
        }, [createVNode("div", {
          "ref": dialogTooltipRef,
          "class": dialogClasses
        }, [renderTooltipBody(), createVNode("div", {
          "class": footerClasses
        }, [renderCounter(), renderAction("dialog")])])])]);
      };
      var renderGuide = function renderGuide() {
        return createVNode(Fragment, null, [createVNode(Teleport, {
          "to": "body"
        }, {
          "default": function _default() {
            return [renderOverlayLayer(), renderHighlightLayer(), isPopup.value ? renderPopupGuide() : renderDialogGuide()];
          }
        })]);
      };
      return createVNode(Fragment, null, [actived.value && renderGuide()]);
    };
  }
});

export { _Guide as default };
//# sourceMappingURL=guide.mjs.map
