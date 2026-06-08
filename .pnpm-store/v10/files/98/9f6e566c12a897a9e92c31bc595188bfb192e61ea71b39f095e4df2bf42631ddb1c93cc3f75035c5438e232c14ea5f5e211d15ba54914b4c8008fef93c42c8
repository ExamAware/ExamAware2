/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var utils = require('../../_chunks/dep-ccada3ec.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
  var tooltipRef = Vue.ref();
  var showTooltip = Vue.computed({
    get: function get() {
      return !tooltipConfig.value.tooltipProps === false;
    },
    set: function set(val) {
      return val;
    }
  });
  var normalizeProps = Vue.ref(_objectSpread({}, initialProps));
  var toggleTooltip = function toggleTooltip(toState) {
    if (!showTooltip.value) return;
    normalizeProps.value.visible = toState;
  };
  var renderTNodeJSX = index.useTNodeJSX();
  var validProps = Vue.computed(function () {
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
        return utils.formatLabel(label, value);
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

exports.useSliderTooltip = useSliderTooltip;
//# sourceMappingURL=useSliderTooltip.js.map
