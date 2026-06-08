/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { a as useContent } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import { p as pxCompat } from '../_chunks/dep-80a99546.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '@babel/runtime/helpers/objectWithoutProperties';

var _Divider = defineComponent({
  name: "TDivider",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("divider");
    var renderContent = useContent();
    return function () {
      var children = renderContent("default", "content");
      var isHorizontal = computed(function () {
        return props2.layout !== "vertical";
      });
      var showText = computed(function () {
        return isHorizontal.value && !!children;
      });
      var dividerClassNames = ["".concat(COMPONENT_NAME.value), ["".concat(COMPONENT_NAME.value, "--").concat(props2.layout)], _defineProperty(_defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--dashed"), !!props2.dashed), "".concat(COMPONENT_NAME.value, "--with-text"), !!showText.value), "".concat(COMPONENT_NAME.value, "--with-text-").concat(props2.align), !!showText.value)];
      var dividerWrapperStyle = computed(function () {
        if (props2.size) {
          var margin = isHorizontal.value ? "".concat(pxCompat(props2.size), " 0") : "0 ".concat(pxCompat(props2.size));
          return {
            margin: margin
          };
        }
        return null;
      });
      return createVNode("div", {
        "class": dividerClassNames,
        "style": dividerWrapperStyle.value
      }, [showText.value && createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__inner-text")
      }, [children])]);
    };
  }
});

export { _Divider as default };
//# sourceMappingURL=divider.js.map
