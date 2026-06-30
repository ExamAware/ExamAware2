/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref } from 'vue';
import { E as useListener } from '../../_chunks/dep-7673347f.mjs';
import { i as isServer } from '../../_chunks/dep-51a43106.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-257428bc.mjs';
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
import '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=index.mjs.map
