/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps, Fragment } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isNumber, isArray, omit } from 'lodash-es';
import { Popup } from '../popup/index.mjs';
import _DropdownMenu from './dropdown-menu.mjs';
import props from './props.mjs';
import { a as useTNodeJSX, u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import useDropdownOptions from './hooks/useDropdownOptions.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../popup/popup.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '@popperjs/core';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../popup/container.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../popup/props.mjs';
import './style/css.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import 'tdesign-icons-vue-next';
import './dropdown-item.mjs';
import './dropdown-item-props.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../divider/index.mjs';
import '../divider/divider.mjs';
import '../divider/props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Dropdown = defineComponent({
  name: "TDropdown",
  props: props,
  setup: function setup(props2, _ref) {
    var attrs = _ref.attrs;
    var renderTNodeJSX = useTNodeJSX();
    var COMPONENT_NAME = usePrefixClass("dropdown");
    var popupElem = ref(null);
    var isPopupVisible = ref(false);
    var manualCloseTimeout = computed(function () {
      var _props2$popupProps, _delay$;
      var delay = (_props2$popupProps = props2.popupProps) === null || _props2$popupProps === void 0 ? void 0 : _props2$popupProps.delay;
      if (isNumber(delay)) return delay + 10;
      if (isArray(delay)) return ((_delay$ = delay[1]) !== null && _delay$ !== void 0 ? _delay$ : delay[0]) + 10;
      return 160;
    });
    var handleMenuClick = function handleMenuClick(data, context) {
      var _props2$onClick;
      if (props2.hideAfterItemClick) {
        var _props2$popupProps2, _props2$popupProps2$o, _props2$popupProps3, _props2$popupProps3$o;
        setTimeout(function () {
          return isPopupVisible.value = false;
        }, manualCloseTimeout.value);
        (_props2$popupProps2 = props2.popupProps) === null || _props2$popupProps2 === void 0 || (_props2$popupProps2$o = _props2$popupProps2.onVisibleChange) === null || _props2$popupProps2$o === void 0 || _props2$popupProps2$o.call(_props2$popupProps2, false, context);
        (_props2$popupProps3 = props2.popupProps) === null || _props2$popupProps3 === void 0 || (_props2$popupProps3$o = _props2$popupProps3["on-visible-change"]) === null || _props2$popupProps3$o === void 0 || _props2$popupProps3$o.call(_props2$popupProps3, false, context);
      }
      props2 === null || props2 === void 0 || (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, data, context);
    };
    var handleVisibleChange = function handleVisibleChange(visible, context) {
      var _props2$popupProps4, _props2$popupProps4$o, _props2$popupProps5, _props2$popupProps5$o;
      isPopupVisible.value = visible;
      (_props2$popupProps4 = props2.popupProps) === null || _props2$popupProps4 === void 0 || (_props2$popupProps4$o = _props2$popupProps4.onVisibleChange) === null || _props2$popupProps4$o === void 0 || _props2$popupProps4$o.call(_props2$popupProps4, visible, context);
      (_props2$popupProps5 = props2.popupProps) === null || _props2$popupProps5 === void 0 || (_props2$popupProps5$o = _props2$popupProps5["on-visible-change"]) === null || _props2$popupProps5$o === void 0 || _props2$popupProps5$o.call(_props2$popupProps5, visible, context);
    };
    return function () {
      var _renderTNodeJSX, _props2$popupProps6;
      var trigger = (_renderTNodeJSX = renderTNodeJSX("default")) === null || _renderTNodeJSX === void 0 ? void 0 : _renderTNodeJSX[0];
      var options = useDropdownOptions(props2);
      var popupParams = _objectSpread(_objectSpread(_objectSpread({}, attrs), {}, {
        disabled: props2.disabled,
        placement: props2.placement,
        trigger: props2.trigger
      }, omit(props2.popupProps, ["onVisibleChange", "on-visible-change"])), {}, {
        overlayInnerClassName: [COMPONENT_NAME.value, (_props2$popupProps6 = props2.popupProps) === null || _props2$popupProps6 === void 0 ? void 0 : _props2$popupProps6.overlayInnerClassName]
      });
      return createVNode(Popup, mergeProps({
        "destroyOnClose": true,
        "ref": popupElem,
        "visible": isPopupVisible.value,
        "onVisibleChange": handleVisibleChange,
        "expandAnimation": true
      }, popupParams), {
        "default": function _default() {
          return [trigger];
        },
        content: function content() {
          var _options$value;
          return createVNode(Fragment, null, [renderTNodeJSX("panelTopContent"), (_options$value = options.value) !== null && _options$value !== void 0 && _options$value.length ? createVNode(_DropdownMenu, mergeProps(omit(props2, "onClick"), {
            "options": options.value,
            "onClick": handleMenuClick
          }), null) : null, renderTNodeJSX("panelBottomContent")]);
        }
      });
    };
  }
});

export { _Dropdown as default };
//# sourceMappingURL=dropdown.mjs.map
