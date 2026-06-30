/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tooltip_props = require('./props.js');
var popup_props = require('../popup/props.js');
var popup_index = require('../popup/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index = require('../_chunks/dep-e8ff2c13.js');
var tooltip_utils_index = require('./utils/index.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
var omit = require('../_chunks/dep-ace0b57c.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-8382953f.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('../_chunks/dep-c3dee00a.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var _Tooltip = Vue.defineComponent({
  name: "TTooltip",
  props: _objectSpread(_objectSpread({}, popup_props["default"]), tooltip_props["default"]),
  setup: function setup(props2, ctx) {
    var timer = Vue.ref(null);
    var popupRef = Vue.ref(null);
    var _toRefs = Vue.toRefs(props2),
      visible = _toRefs.visible,
      modelValue = _toRefs.modelValue;
    var _useVModel = index.useVModel(visible, modelValue, props2.defaultVisible, props2.onVisibleChange, "visible"),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerVisible = _useVModel2[0],
      setInnerVisible = _useVModel2[1];
    var vm = Vue.getCurrentInstance();
    var innerTooltipVisible = Vue.ref(props2.visible || props2.defaultVisible);
    var classPrefix = index$1.usePrefixClass();
    var renderTNodeJSX = index$2.useTNodeJSX();
    var renderContent = index$2.useContent();
    var _useMouse = tooltip_utils_index.useMouse(),
      x = _useMouse.x;
    var offsetX = Vue.ref(x.value);
    Vue.onMounted(function () {
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
    var tooltipOverlayClassName = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-tooltip"), _defineProperty__default["default"]({}, "".concat(classPrefix.value, "-tooltip--").concat(props2.theme), props2.theme), props2.overlayClassName];
    });
    var popupProps2 = Vue.computed(function () {
      return _objectSpread(_objectSpread({}, (vm === null || vm === void 0 ? void 0 : vm.vnode.props) || {}), {}, {
        placement: props2.placement === "mouse" ? "bottom-left" : props2.placement,
        showArrow: props2.placement === "mouse" ? false : props2.showArrow,
        overlayClassName: tooltipOverlayClassName.value,
        onVisibleChange: onTipVisibleChange,
        disabled: props2.disabled
      });
    });
    var overlayInnerStyle = Vue.computed(function () {
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
          return _objectSpread(_objectSpread({}, offsetStyle(triggerEl)), isFunction.isFunction(props2.overlayInnerStyle) ? props2.overlayInnerStyle(triggerEl, popupEl) : props2.overlayInnerStyle);
        };
      }
      return offsetStyle;
    });
    Vue.watch(function () {
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
      return Vue.createVNode(popup_index.Popup, Vue.mergeProps(omit.omit(popupProps2.value, ["content", "default"]), {
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

exports["default"] = _Tooltip;
//# sourceMappingURL=tooltip.js.map
