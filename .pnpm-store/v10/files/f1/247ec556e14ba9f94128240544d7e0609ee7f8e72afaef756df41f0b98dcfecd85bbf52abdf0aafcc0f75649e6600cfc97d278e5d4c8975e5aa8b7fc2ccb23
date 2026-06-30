/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import props from './props.mjs';
import { u as usePrefixClass, b as useContent } from '../_chunks/dep-7673347f.mjs';
import { p as pxCompat } from '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import '../_chunks/dep-0dcc778a.mjs';

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
//# sourceMappingURL=divider.mjs.map
