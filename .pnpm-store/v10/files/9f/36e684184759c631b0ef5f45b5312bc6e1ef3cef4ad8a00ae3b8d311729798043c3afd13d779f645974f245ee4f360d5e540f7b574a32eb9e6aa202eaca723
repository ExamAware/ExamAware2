/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { v as elementInViewport, x as getWindowSize, s as scrollTo } from '../../_chunks/dep-51a43106.mjs';
import 'vue';
import '../../_chunks/dep-fe644854.mjs';
import 'lodash-es';

function scrollToElm(elm) {
  var rect = elm.getBoundingClientRect();
  if (!elementInViewport(elm)) {
    var winHeight = getWindowSize().height;
    scrollTo(rect.top - (winHeight / 2 - rect.height / 2), {});
  }
}

export { scrollToElm };
//# sourceMappingURL=scrollToElm.mjs.map
