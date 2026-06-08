/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, onMounted, onBeforeUnmount, computed, createVNode, Fragment, createTextVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import { BacktopIcon } from 'tdesign-icons-vue-next';
import { s as scrollTo } from '../_chunks/dep-16bcfabc.js';
import 'lodash-es';
import { u as useChildSlots } from '../_chunks/dep-e3ce8c8f.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useGlobalIcon } from '../_chunks/dep-3a7a2ef1.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/toConsumableArray';
import props from './props.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-fe23be6e.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _BackTop = defineComponent({
  name: "TBackTop",
  props: props,
  setup: function setup(props2) {
    var visible = ref(false);
    var containerRef = ref(null);
    var componentName = usePrefixClass("back-top");
    var _useConfig = useConfig("alert"),
      classPrefix = _useConfig.classPrefix;
    var _useGlobalIcon = useGlobalIcon({
        BacktopIcon: BacktopIcon
      }),
      BacktopIcon$1 = _useGlobalIcon.BacktopIcon;
    var renderContent = useContent();
    var getContainer = function getContainer(container) {
      if (typeof container === "string" && (typeof document === "undefined" ? "undefined" : _typeof(document)) !== void 0) {
        if (container === "body") {
          return document;
        }
        return document.querySelector(container);
      }
      if (typeof container === "function") {
        return container();
      }
      return null;
    };
    onMounted(function () {
      containerRef.value = getContainer(props2.container);
      var visibleHeight;
      if (typeof props2.visibleHeight === "string") {
        visibleHeight = Number(props2.visibleHeight.replace("px", ""));
      } else {
        visibleHeight = props2.visibleHeight;
      }
      if (visibleHeight === 0) {
        visible.value = true;
        return;
      }
      var scrollDOM;
      if (containerRef.value.scrollTop === void 0) {
        scrollDOM = document.documentElement;
      } else {
        scrollDOM = containerRef.value;
      }
      containerRef.value.onscroll = function () {
        var _scrollDOM;
        var scrollTop = (_scrollDOM = scrollDOM) === null || _scrollDOM === void 0 ? void 0 : _scrollDOM.scrollTop;
        if (scrollTop >= visibleHeight) {
          visible.value = true;
        }
        if (scrollTop < visibleHeight && visible.value) {
          visible.value = false;
        }
      };
    });
    onBeforeUnmount(function () {
      containerRef.value.onscroll = null;
    });
    return function () {
      var theme = props2.theme,
        shape = props2.shape,
        size = props2.size,
        target = props2.target,
        duration = props2.duration,
        offset = props2.offset,
        container = props2.container;
      var getChild = useChildSlots();
      var children = getChild();
      if (children.length < 1) children = null;
      var cls = computed(function () {
        return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, componentName.value, true), "".concat(componentName.value, "--theme-").concat(theme), true), "".concat(componentName.value, "--").concat(shape), true), "".concat(componentName.value, "--show"), visible.value), "".concat(classPrefix.value, "-size-s"), size === "small"), "".concat(classPrefix.value, "-size-m"), size === "medium");
      });
      var defaultContent = createVNode(Fragment, null, [createVNode(BacktopIcon$1, {
        "class": "".concat(componentName.value, "__icon"),
        "size": "24"
      }, null), createVNode("span", {
        "class": "".concat(componentName.value, "__text")
      }, [createTextVNode("TOP")])]);
      var getBackTo = function getBackTo() {
        if (target === container) return 0;
        if (target === "body") return 0;
        if (!target) return 0;
        var targetNode = getContainer(target);
        if (!targetNode) return 0;
        var y = targetNode.getBoundingClientRect().y;
        return y;
      };
      var handleClick = function handleClick(e) {
        var _props2$onClick;
        var y = getBackTo();
        scrollTo(y, {
          container: containerRef.value,
          duration: duration
        });
        (_props2$onClick = props2.onClick) === null || _props2$onClick === void 0 || _props2$onClick.call(props2, {
          e: e
        });
      };
      var positionStyle = computed(function () {
        return {
          insetInlineEnd: offset[0],
          insetBlockEnd: offset[1]
        };
      });
      return createVNode("button", {
        "type": "button",
        "class": cls.value,
        "style": positionStyle.value,
        "onClick": handleClick
      }, [renderContent("content", "default", defaultContent)]);
    };
  }
});

export { _BackTop as default };
//# sourceMappingURL=back-top.js.map
