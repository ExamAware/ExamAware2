/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { InfoCircleFilledIcon, ErrorCircleFilledIcon } from 'tdesign-icons-vue-next';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, b as useTNodeDefault, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { Popup } from '../popup/index.js';
import props from './props.js';
import { useAction } from '../dialog/hooks/useAction.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../loading/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';

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
//# sourceMappingURL=popconfirm.js.map
