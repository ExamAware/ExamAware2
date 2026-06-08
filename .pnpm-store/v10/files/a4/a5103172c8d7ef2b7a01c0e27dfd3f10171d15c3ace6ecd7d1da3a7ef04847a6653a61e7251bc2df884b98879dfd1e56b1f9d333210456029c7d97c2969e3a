/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, ref, computed, onMounted, onUpdated, createVNode } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { debounce } from 'lodash-es';
import { b as useContent } from '../../_chunks/dep-7673347f.mjs';
import { e as isTextEllipsis } from '../../_chunks/dep-51a43106.mjs';
import { Tooltip } from '../../tooltip/index.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../popup/props.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import './style/css.mjs';
import '../../tooltip/utils/index.mjs';

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
//# sourceMappingURL=ellipsis.mjs.map
