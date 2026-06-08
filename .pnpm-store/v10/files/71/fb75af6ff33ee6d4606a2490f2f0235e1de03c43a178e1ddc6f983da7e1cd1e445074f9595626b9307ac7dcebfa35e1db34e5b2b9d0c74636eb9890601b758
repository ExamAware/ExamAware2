/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { InfoCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import { u as usePrefixClass, i as useGlobalIcon, j as useVModel, a as useTNodeJSX, q as useTNodeDefault, b as useContent } from '../_chunks/dep-7673347f.mjs';
import { Popup } from '../popup/index.mjs';
import props from './props.mjs';
import '../dialog/hooks/index.mjs';
import { useConfig } from '../config-provider/hooks/useConfig.mjs';
import { useAction } from '../dialog/hooks/useAction.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../dialog/hooks/useSameTarget.mjs';
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
import '../button/props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Popconfirm = defineComponent({
  name: "TPopconfirm",
  props: props,
  setup: function setup(props2) {
    var _useConfig = useConfig("popconfirm"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("popconfirm");
    var _useGlobalIcon = useGlobalIcon({
        InfoCircleFilledIcon: InfoCircleFilledIcon,
        ErrorCircleFilledIcon: ErrorCircleFilledIcon
      }),
      InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon,
      ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon;
    var _toRefs = toRefs(props2),
      visible = _toRefs.visible,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(visible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerVisible = _useVModel2[0],
      setInnerVisible = _useVModel2[1];
    var confirmBtnAction = function confirmBtnAction(e) {
      var _props2$onConfirm;
      (_props2$onConfirm = props2.onConfirm) === null || _props2$onConfirm === void 0 || _props2$onConfirm.call(props2, {
        e: e
      });
      setInnerVisible(false, {
        e: e,
        trigger: "confirm"
      });
    };
    var cancelBtnAction = function cancelBtnAction(e) {
      var _props2$onCancel;
      (_props2$onCancel = props2.onCancel) === null || _props2$onCancel === void 0 || _props2$onCancel.call(props2, {
        e: e
      });
      setInnerVisible(false, {
        e: e,
        trigger: "cancel"
      });
    };
    var _useAction = useAction({
        confirmBtnAction: confirmBtnAction,
        cancelBtnAction: cancelBtnAction
      }),
      getConfirmBtn = _useAction.getConfirmBtn,
      getCancelBtn = _useAction.getCancelBtn;
    var renderTNodeJSX = useTNodeJSX();
    var innerPopupProps = computed(function () {
      return _objectSpread({
        showArrow: props2.showArrow,
        overlayClassName: COMPONENT_NAME.value,
        trigger: "click",
        destroyOnClose: props2.destroyOnClose,
        placement: props2.placement
      }, props2.popupProps);
    });
    var renderTNodeDefault = useTNodeDefault();
    var renderContent = function renderContent() {
      var cancelBtn = getCancelBtn({
        cancelBtn: props2.cancelBtn,
        globalCancel: globalConfig.value.cancel,
        className: "".concat(COMPONENT_NAME.value, "__cancel"),
        size: "small"
      });
      var confirmBtn = getConfirmBtn({
        theme: props2.theme,
        confirmBtn: props2.confirmBtn,
        globalConfirm: globalConfig.value.confirm,
        globalConfirmBtnTheme: globalConfig.value.confirmBtnTheme,
        className: "".concat(COMPONENT_NAME.value, "__confirm"),
        size: "small"
      });
      var renderIcon = function renderIcon() {
        var Icon = {
          "default": InfoCircleFilledIcon$1,
          warning: ErrorCircleFilledIcon$1,
          danger: ErrorCircleFilledIcon$1
        }[props2.theme];
        var theme = props2.theme || "default";
        return renderTNodeDefault("icon", createVNode(Icon, {
          "class": "".concat(COMPONENT_NAME.value, "__icon--").concat(theme)
        }, null));
      };
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__content")
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__body")
      }, [renderIcon(), createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__inner")
      }, [renderTNodeJSX("content")])]), Boolean(cancelBtn || confirmBtn) && createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__buttons")
      }, [cancelBtn, confirmBtn])]);
    };
    var onPopupVisibleChange = function onPopupVisibleChange(val, context) {
      setInnerVisible(val, context);
    };
    var renderTNodeContent = useContent();
    return function () {
      return createVNode(Popup, mergeProps({
        "visible": innerVisible.value
      }, innerPopupProps.value, {
        "onVisibleChange": onPopupVisibleChange
      }), {
        "default": function _default() {
          return [renderTNodeContent("default", "triggerElement")];
        },
        content: renderContent
      });
    };
  }
});

export { _Popconfirm as default };
//# sourceMappingURL=popconfirm.mjs.map
