/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import { i as isServer } from '../../_chunks/dep-16bcfabc.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import { a as useListener } from '../../_chunks/dep-172a2a45.js';
import '@babel/runtime/helpers/defineProperty';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var calcSize = function calcSize(width) {
  var size = "xs";
  if (width < 768) {
    size = "xs";
  } else if (width >= 768 && width < 992) {
    size = "sm";
  } else if (width >= 992 && width < 1200) {
    size = "md";
  } else if (width >= 1200 && width < 1400) {
    size = "lg";
  } else if (width >= 1400 && width < 1880) {
    size = "xl";
  } else {
    size = "xxl";
  }
  return size;
};

function useRowSize() {
  var size = ref(calcSize(isServer ? 0 : window.innerWidth));
  var updateSize = function updateSize() {
    size.value = calcSize(isServer ? 0 : window.innerWidth);
  };
  useListener("resize", updateSize);
  return size;
}

export { useRowSize };
//# sourceMappingURL=index.js.map
