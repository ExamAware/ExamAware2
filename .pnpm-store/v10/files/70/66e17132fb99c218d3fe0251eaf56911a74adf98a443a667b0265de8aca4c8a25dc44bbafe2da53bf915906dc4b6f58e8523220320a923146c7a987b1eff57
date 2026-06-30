/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { ref, computed } from 'vue';
import { b as formatLabel } from '../../_chunks/dep-4e271ede.mjs';
import { a as useTNodeJSX } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useSliderTooltip.mjs.map
