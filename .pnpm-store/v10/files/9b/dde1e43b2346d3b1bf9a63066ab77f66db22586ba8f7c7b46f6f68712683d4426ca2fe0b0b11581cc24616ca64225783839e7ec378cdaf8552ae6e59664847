/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, onMounted, onUpdated, createVNode, isVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { debounce } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { e as isTextEllipsis } from '../../_chunks/dep-16bcfabc.js';
import { a as useContent } from '../../_chunks/dep-2accc95a.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { Tooltip } from '../../tooltip/index.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../_chunks/dep-fb805f69.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../../tooltip/tooltip.js';
import '../../tooltip/props.js';
import '../../popup/props.js';
import '../../popup/index.js';
import '../../popup/popup.js';
import '@popperjs/core';
import '../../_chunks/dep-4f8b6591.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-2ea19dca.js';
import '../../_chunks/dep-51e5a827.js';
import '../../popup/container.js';
import '../../_chunks/dep-80a77612.js';
import '../../_chunks/dep-664b8b22.js';
import '../../tooltip/utils/index.js';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var TEllipsis = defineComponent({
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
    var root = ref();
    var flag = ref(false);
    var isOverflow = ref(false);
    var renderContent = useContent();
    var ellipsisClasses = computed(function () {
      return ["".concat(props.classPrefix, "-table__ellipsis"), "".concat(props.classPrefix, "-text-ellipsis")];
    });
    var innerEllipsisClassName = computed(function () {
      return ["".concat(props.classPrefix, "-table__ellipsis-content"), props.overlayClassName];
    });
    onMounted(function () {
      isOverflow.value = isTextEllipsis(root.value);
    });
    onUpdated(function () {
      isOverflow.value = isTextEllipsis(root.value);
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
    var onMouseAround = debounce(function (e) {
      e.type === "mouseleave" ? onTriggerMouseleave() : onTriggerMouseenter();
    }, 80);
    return function () {
      var cellNode = renderContent("default", "content");
      var ellipsisContent = createVNode("div", {
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
        content = createVNode(Tooltip, rProps, _isSlot(ellipsisContent) ? ellipsisContent : {
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

export { TEllipsis as default };
//# sourceMappingURL=ellipsis.js.map
