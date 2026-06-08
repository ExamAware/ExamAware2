/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps, Fragment } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isNumber, isArray, omit } from 'lodash-es';
import { Popup } from '../popup/index.js';
import _DropdownMenu from './dropdown-menu.js';
import props from './props.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import useDropdownOptions from './hooks/useDropdownOptions.js';
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
import '../_chunks/dep-51e5a827.js';
import '../popup/container.js';
import '../popup/props.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import '../_chunks/dep-fb805f69.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import 'tdesign-icons-vue-next';
import './dropdown-item.js';
import './dropdown-item-props.js';
import '../_chunks/dep-d2a6e7a4.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../divider/index.js';
import '../divider/divider.js';
import '../divider/props.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../_chunks/dep-e3ce8c8f.js';

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
//# sourceMappingURL=dropdown.js.map
