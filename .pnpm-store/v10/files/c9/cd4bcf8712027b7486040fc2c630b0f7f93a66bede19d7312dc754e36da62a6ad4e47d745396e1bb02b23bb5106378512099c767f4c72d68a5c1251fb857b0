/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
var dom = require('../../_chunks/dep-06276759.js');
var index = require('../../_chunks/dep-47c460dd.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
var tooltip_index = require('../../tooltip/index.js');
var debounce = require('../../_chunks/dep-441a3b7b.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
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
require('../../tooltip/tooltip.js');
require('../../tooltip/props.js');
require('../../popup/props.js');
require('../../popup/index.js');
require('../../popup/popup.js');
require('@popperjs/core');
require('../../_chunks/dep-8382953f.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-c3dee00a.js');
require('../../_chunks/dep-e8ff2c13.js');
require('../../popup/container.js');
require('../../_chunks/dep-b6058ff9.js');
require('../../_chunks/dep-39403bd1.js');
require('../../_chunks/dep-e86abdd2.js');
require('../../_chunks/dep-3a7785db.js');
require('../../_chunks/dep-d62a674d.js');
require('../../tooltip/utils/index.js');
require('../../_chunks/dep-ace0b57c.js');
require('../../_chunks/dep-ac11336c.js');
require('../../_chunks/dep-11b67e11.js');
require('../../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var TEllipsis = Vue.defineComponent({
  name: "TEllipsis",
  props: {
    content: {
      type: [String, Function]
    },
    "default": {
      type: [String, Function]
    },
    tooltipContent: {
      type: [String, Number, Function]
    },
    placement: String,
    attach: [String, Function],
    tooltipProps: Object,
    zIndex: Number,
    overlayClassName: String,
    classPrefix: {
      type: String,
      "default": "t"
    }
  },
  setup: function setup(props) {
    var root = Vue.ref();
    var flag = Vue.ref(false);
    var isOverflow = Vue.ref(false);
    var renderContent = index.useContent();
    var ellipsisClasses = Vue.computed(function () {
      return ["".concat(props.classPrefix, "-table__ellipsis"), "".concat(props.classPrefix, "-text-ellipsis")];
    });
    var innerEllipsisClassName = Vue.computed(function () {
      return ["".concat(props.classPrefix, "-table__ellipsis-content"), props.overlayClassName];
    });
    Vue.onMounted(function () {
      isOverflow.value = dom.isTextEllipsis(root.value);
    });
    Vue.onUpdated(function () {
      isOverflow.value = dom.isTextEllipsis(root.value);
    });
    var onTriggerMouseenter = function onTriggerMouseenter() {
      if (!root.value) return;
      flag.value = true;
    };
    var onTriggerMouseleave = function onTriggerMouseleave() {
      if (!root.value) return;
    };
    var handleVisibleChange = function handleVisibleChange(v) {
      if (!v) flag.value = false;
    };
    var onMouseAround = debounce.debounce(function (e) {
      e.type === "mouseleave" ? onTriggerMouseleave() : onTriggerMouseenter();
    }, 80);
    return function () {
      var cellNode = renderContent("default", "content");
      var ellipsisContent = Vue.createVNode("div", {
        "ref": root,
        "class": ellipsisClasses.value,
        "onMouseenter": onMouseAround,
        "onMouseleave": onMouseAround,
        "style": {
          textOverflow: isOverflow.value ? "ellipsis" : "clip"
        }
      }, [cellNode]);
      var content = null;
      var tooltipProps = props.tooltipProps;
      if (isOverflow.value && flag.value) {
        var rProps = _objectSpread({
          content: props.tooltipContent || function () {
            return cellNode;
          },
          destroyOnClose: true,
          zIndex: props.zIndex,
          attach: props.attach,
          placement: props.placement,
          overlayClassName: tooltipProps !== null && tooltipProps !== void 0 && tooltipProps.overlayClassName ? innerEllipsisClassName.value.concat(tooltipProps.overlayClassName) : innerEllipsisClassName.value,
          onVisibleChange: handleVisibleChange
        }, tooltipProps);
        content = Vue.createVNode(tooltip_index.Tooltip, rProps, _isSlot(ellipsisContent) ? ellipsisContent : {
          "default": function _default() {
            return [ellipsisContent];
          }
        });
      } else {
        content = ellipsisContent;
      }
      return content;
    };
  }
});

exports["default"] = TEllipsis;
//# sourceMappingURL=ellipsis.js.map
