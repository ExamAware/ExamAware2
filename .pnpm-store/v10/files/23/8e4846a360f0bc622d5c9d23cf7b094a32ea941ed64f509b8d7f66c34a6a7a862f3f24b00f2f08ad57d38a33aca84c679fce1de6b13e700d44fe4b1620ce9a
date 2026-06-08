/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, computed, createVNode, Fragment, withDirectives, resolveDirective } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { CloseIcon, InfoCircleFilledIcon, CheckCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import dialogCardProps from './dialog-card-props.mjs';
import { u as usePrefixClass, a as useTNodeJSX, b as useContent, i as useGlobalIcon } from '../_chunks/dep-7673347f.mjs';
import './hooks/index.mjs';
import props from './props.mjs';
import { initDragEvent, getCSSValue } from './utils/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { useAction } from './hooks/useAction.mjs';
import '../_chunks/dep-257428bc.mjs';
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
import '../_chunks/dep-d36c4a3f.mjs';
import './hooks/useSameTarget.mjs';
import '../button/index.mjs';
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
//# sourceMappingURL=dialog-card.mjs.map
