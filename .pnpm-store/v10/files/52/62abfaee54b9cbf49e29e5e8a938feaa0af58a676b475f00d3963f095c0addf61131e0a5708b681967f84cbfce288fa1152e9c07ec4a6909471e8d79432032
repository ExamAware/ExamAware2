/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, withDirectives, createVNode, resolveDirective, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { CloseIcon, InfoCircleFilledIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import dialogCardProps from './dialog-card-props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { useAction } from './hooks/useAction.js';
import props from './props.js';
import { initDragEvent, getCSSValue } from './utils/index.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '../_chunks/dep-664b8b22.js';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _DialogCard = defineComponent({
  name: "TDialogCard",
  directives: {
    draggable: function draggable(el, binding) {
      if (el && binding && binding.value) {
        initDragEvent(el);
      }
    }
  },
  props: _objectSpread(_objectSpread({}, props), dialogCardProps),
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var rootRef = ref(null);
    var COMPONENT_NAME = usePrefixClass("dialog");
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var _useConfig = useConfig("dialog"),
      globalConfig = _useConfig.globalConfig;
    var _useGlobalIcon = useGlobalIcon({
        CloseIcon: CloseIcon,
        InfoCircleFilledIcon: InfoCircleFilledIcon,
        CheckCircleFilledIcon: CheckCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon
      }),
      CloseIcon$1 = _useGlobalIcon.CloseIcon,
      InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon,
      CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var _toRefs = toRefs(props),
      cancelBtn = _toRefs.cancelBtn,
      confirmBtn = _toRefs.confirmBtn,
      confirmLoading = _toRefs.confirmLoading;
    var confirmBtnAction = function confirmBtnAction(e) {
      var _props$onConfirm;
      return (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0 ? void 0 : _props$onConfirm.call(props, {
        e: e
      });
    };
    var cancelBtnAction = function cancelBtnAction(e) {
      var _props$onCancel;
      return (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, {
        e: e
      });
    };
    var _useAction = useAction({
        confirmBtnAction: confirmBtnAction,
        cancelBtnAction: cancelBtnAction
      }),
      getConfirmBtn = _useAction.getConfirmBtn,
      getCancelBtn = _useAction.getCancelBtn;
    var isModeLess = computed(function () {
      return props.mode === "modeless";
    });
    var isFullScreen = computed(function () {
      return props.mode === "full-screen";
    });
    var closeBtnAction = function closeBtnAction(e) {
      var _props$onCloseBtnClic;
      return props === null || props === void 0 || (_props$onCloseBtnClic = props.onCloseBtnClick) === null || _props$onCloseBtnClic === void 0 ? void 0 : _props$onCloseBtnClic.call(props, {
        e: e
      });
    };
    var onStopDown = function onStopDown(e) {
      if (isModeLess.value && props !== null && props !== void 0 && props.draggable) e.stopPropagation();
    };
    var resetPosition = function resetPosition() {
      if (!rootRef.value && isModeLess.value && props.draggable) return;
      rootRef.value.style.position = "relative";
      rootRef.value.style.left = "unset";
      rootRef.value.style.top = "unset";
    };
    expose({
      $el: rootRef,
      resetPosition: resetPosition
    });
    var dialogClass = computed(function () {
      var dialogClass2 = ["".concat(COMPONENT_NAME.value), "".concat(COMPONENT_NAME.value, "__modal-").concat(props.theme), isModeLess.value && props.draggable && "".concat(COMPONENT_NAME.value, "--draggable"), props.dialogClassName];
      if (isFullScreen.value) {
        dialogClass2.push("".concat(COMPONENT_NAME.value, "__fullscreen"));
      } else {
        dialogClass2.push.apply(dialogClass2, ["".concat(COMPONENT_NAME.value, "--default"), "".concat(COMPONENT_NAME.value, "--").concat(props.placement)]);
      }
      return dialogClass2;
    });
    var dialogStyle = computed(function () {
      return !isFullScreen.value ? _objectSpread({
        width: getCSSValue(props.width)
      }, props.dialogStyle) : _objectSpread({}, props.dialogStyle);
    });
    var renderCard = function renderCard() {
      var confirmBtnLoading = computed(function () {
        var _confirmBtn$value;
        return ((_confirmBtn$value = confirmBtn.value) === null || _confirmBtn$value === void 0 ? void 0 : _confirmBtn$value.loading) || confirmLoading.value;
      });
      var defaultFooter = createVNode("div", null, [getCancelBtn({
        cancelBtn: cancelBtn.value,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel")
      }), getConfirmBtn({
        theme: props === null || props === void 0 ? void 0 : props.theme,
        confirmBtn: confirmBtn.value,
        globalConfirm: globalConfig.value.confirm,
        globalConfirmBtnTheme: globalConfig.value.confirmBtnTheme,
        className: "".concat(COMPONENT_NAME.value, "__confirm"),
        confirmLoading: confirmBtnLoading.value
      })]);
      var footerContent = renderTNodeJSX("footer", defaultFooter);
      var renderHeader = function renderHeader() {
        var _renderTNodeJSX;
        var header = (_renderTNodeJSX = renderTNodeJSX("header", createVNode("h5", {
          "class": "title"
        }, null))) !== null && _renderTNodeJSX !== void 0 ? _renderTNodeJSX : false;
        var headerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__header"), "".concat(COMPONENT_NAME.value, "__header--fullscreen")] : "".concat(COMPONENT_NAME.value, "__header");
        var closeClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__close"), "".concat(COMPONENT_NAME.value, "__close--fullscreen")] : "".concat(COMPONENT_NAME.value, "__close");
        var getIcon = function getIcon() {
          var icon = {
            info: createVNode(InfoCircleFilledIcon$1, {
              "class": "".concat(classPrefix.value, "-is-info")
            }, null),
            warning: createVNode(ErrorCircleFilledIcon$1, {
              "class": "".concat(classPrefix.value, "-is-warning")
            }, null),
            danger: createVNode(ErrorCircleFilledIcon$1, {
              "class": "".concat(classPrefix.value, "-is-error")
            }, null),
            success: createVNode(CheckCircleFilledIcon$1, {
              "class": "".concat(classPrefix.value, "-is-success")
            }, null)
          };
          return icon[props === null || props === void 0 ? void 0 : props.theme];
        };
        return (header || (props === null || props === void 0 ? void 0 : props.closeBtn)) && createVNode("div", {
          "class": headerClassName,
          "onMousedown": onStopDown
        }, [createVNode("div", {
          "class": "".concat(COMPONENT_NAME.value, "__header-content")
        }, [getIcon(), header]), props !== null && props !== void 0 && props.closeBtn ? createVNode("span", {
          "class": closeClassName,
          "onClick": closeBtnAction
        }, [renderTNodeJSX("closeBtn", createVNode(CloseIcon$1, null, null))]) : null]);
      };
      var renderBody = function renderBody() {
        var body = renderContent("default", "body");
        var bodyClassName = (props === null || props === void 0 ? void 0 : props.theme) === "default" ? ["".concat(COMPONENT_NAME.value, "__body")] : ["".concat(COMPONENT_NAME.value, "__body__icon")];
        if (isFullScreen.value && footerContent) {
          bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen"));
        } else if (isFullScreen.value) {
          bodyClassName.push("".concat(COMPONENT_NAME.value, "__body--fullscreen--without-footer"));
        }
        return createVNode("div", {
          "class": bodyClassName,
          "onMousedown": onStopDown
        }, [body]);
      };
      var renderFooter = function renderFooter() {
        var footerClassName = isFullScreen.value ? ["".concat(COMPONENT_NAME.value, "__footer"), "".concat(COMPONENT_NAME.value, "__footer--fullscreen")] : "".concat(COMPONENT_NAME.value, "__footer");
        return footerContent && createVNode("div", {
          "class": footerClassName,
          "onMousedown": onStopDown
        }, [footerContent]);
      };
      return createVNode(Fragment, null, [renderHeader(), renderBody(), !!props.footer && renderFooter()]);
    };
    return function () {
      return withDirectives(createVNode("div", {
        "key": "dialog",
        "ref": rootRef,
        "class": dialogClass.value,
        "style": dialogStyle.value
      }, [renderCard()]), [[resolveDirective("draggable"), isModeLess.value && props.draggable]]);
    };
  }
});

export { _DialogCard as default };
//# sourceMappingURL=dialog-card.js.map
