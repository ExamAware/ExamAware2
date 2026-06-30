/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, toRefs, getCurrentInstance, onMounted, computed, watch, createVNode, mergeProps } from 'vue';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isFunction, omit } from 'lodash-es';
import props from './props.js';
import popupProps from '../popup/props.js';
import { Popup } from '../popup/index.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX, a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import { useMouse } from './utils/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-4f8b6591.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Tooltip = defineComponent({
  name: "TTooltip",
  props: _objectSpread(_objectSpread({}, popupProps), props),
  setup: function setup(props2, ctx) {
    var timer = ref(null);
    var popupRef = ref(null);
    var _toRefs = toRefs(props2),
      visible = _toRefs.visible,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(visible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerVisible = _useVModel2[0],
      setInnerVisible = _useVModel2[1];
    var vm = getCurrentInstance();
    var innerTooltipVisible = ref(props2.visible || props2.defaultVisible);
    var classPrefix = usePrefixClass();
    var renderTNodeJSX = useTNodeJSX();
    var renderContent = useContent();
    var _useMouse = useMouse(),
      x = _useMouse.x;
    var offsetX = ref(x.value);
    onMounted(function () {
      if (props2.duration && innerTooltipVisible.value) {
        timer.value = setTimeout(function () {
          setInnerVisible(false, {});
          clearTimeout(timer.value);
          timer.value = null;
        }, props2.duration);
      }
    });
    var onTipVisibleChange = function onTipVisibleChange(val, ctx2) {
      if (timer.value && (ctx2 === null || ctx2 === void 0 ? void 0 : ctx2.trigger) !== "document") return;
      if (val) {
        offsetX.value = x.value;
      }
      setInnerVisible(val, ctx2);
    };
    var tooltipOverlayClassName = computed(function () {
      return ["".concat(classPrefix.value, "-tooltip"), _defineProperty({}, "".concat(classPrefix.value, "-tooltip--").concat(props2.theme), props2.theme), props2.overlayClassName];
    });
    var popupProps2 = computed(function () {
      return _objectSpread(_objectSpread({}, (vm === null || vm === void 0 ? void 0 : vm.vnode.props) || {}), {}, {
        placement: props2.placement === "mouse" ? "bottom-left" : props2.placement,
        showArrow: props2.placement === "mouse" ? false : props2.showArrow,
        overlayClassName: tooltipOverlayClassName.value,
        onVisibleChange: onTipVisibleChange,
        disabled: props2.disabled
      });
    });
    var overlayInnerStyle = computed(function () {
      if (props2.placement !== "mouse" || offsetX.value === 0) {
        return props2.overlayInnerStyle;
      }
      var offsetStyle = function offsetStyle(triggerEl) {
        return {
          transform: "translateX(".concat(offsetX.value - triggerEl.getBoundingClientRect().left, "px)")
        };
      };
      if (props2.overlayInnerStyle) {
        return function (triggerEl, popupEl) {
          return _objectSpread(_objectSpread({}, offsetStyle(triggerEl)), isFunction(props2.overlayInnerStyle) ? props2.overlayInnerStyle(triggerEl, popupEl) : props2.overlayInnerStyle);
        };
      }
      return offsetStyle;
    });
    watch(function () {
      return innerTooltipVisible.value;
    }, function () {
      if (timer.value && !innerTooltipVisible.value) {
        clearTimeout(timer.value);
        timer.value = null;
      }
    });
    var onPopupUpdate = function onPopupUpdate() {
      var _popupRef$value, _popupRef$value$updat;
      (_popupRef$value = popupRef.value) === null || _popupRef$value === void 0 || (_popupRef$value$updat = _popupRef$value.update) === null || _popupRef$value$updat === void 0 || _popupRef$value$updat.call(_popupRef$value);
    };
    ctx.expose({
      updatePopper: onPopupUpdate
    });
    return function () {
      var _content = renderTNodeJSX("content");
      if (!_content && !props2.content) {
        return renderContent("default", "triggerElement");
      }
      return createVNode(Popup, mergeProps(omit(popupProps2.value, ["content", "default"]), {
        "ref": popupRef,
        "overlayInnerStyle": overlayInnerStyle.value,
        "visible": innerVisible.value
      }), {
        "default": function _default() {
          return [renderContent("default", "triggerElement")];
        },
        content: function content() {
          return _content;
        }
      });
    };
  }
});

export { _Tooltip as default };
//# sourceMappingURL=tooltip.js.map
