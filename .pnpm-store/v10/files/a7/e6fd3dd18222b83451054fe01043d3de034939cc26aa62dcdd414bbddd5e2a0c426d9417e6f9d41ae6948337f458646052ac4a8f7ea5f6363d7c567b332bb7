/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ref, computed } from 'vue';
import { b as formatLabel } from '../../_chunks/dep-0240b8a6.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-16bcfabc.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var initialProps = {
  visible: false,
  trigger: "hover",
  showArrow: true,
  overlayInnerStyle: void 0,
  overlayClassName: void 0,
  attach: "body",
  theme: "default"
};
var useSliderTooltip = function useSliderTooltip(tooltipConfig) {
  var tooltipRef = ref();
  var showTooltip = computed({
    get: function get() {
      return !tooltipConfig.value.tooltipProps === false;
    },
    set: function set(val) {
      return val;
    }
  });
  var normalizeProps = ref(_objectSpread({}, initialProps));
  var toggleTooltip = function toggleTooltip(toState) {
    if (!showTooltip.value) return;
    normalizeProps.value.visible = toState;
  };
  var renderTNodeJSX = useTNodeJSX();
  var validProps = computed(function () {
    var _tooltipConfig$value = tooltipConfig.value,
      vertical = _tooltipConfig$value.vertical,
      tooltipProps = _tooltipConfig$value.tooltipProps,
      label = _tooltipConfig$value.label,
      value = _tooltipConfig$value.value,
      position = _tooltipConfig$value.position,
      range = _tooltipConfig$value.range;
    var placement = vertical ? "right" : "top";
    var content = function () {
      if (label === true) {
        return String(value);
      }
      if (typeof label === "string") {
        return formatLabel(label, value);
      }
      return renderTNodeJSX("label", {
        params: range ? {
          value: value,
          position: position
        } : {
          value: value
        }
      });
    }();
    if (tooltipProps instanceof Object) {
      if (!(tooltipProps !== null && tooltipProps !== void 0 && tooltipProps.placement)) {
        normalizeProps.value.placement = placement;
      }
      if (tooltipProps.content) {
        content = tooltipProps.content;
      }
      return _objectSpread(_objectSpread(_objectSpread({}, normalizeProps.value), tooltipProps), {}, {
        content: content
      });
    }
    return _objectSpread(_objectSpread({}, normalizeProps.value), {}, {
      placement: placement,
      content: content
    });
  });
  return {
    tooltipRef: tooltipRef,
    tooltipProps: validProps,
    toggleTooltip: toggleTooltip,
    showTooltip: showTooltip
  };
};

export { useSliderTooltip };
//# sourceMappingURL=useSliderTooltip.js.map
