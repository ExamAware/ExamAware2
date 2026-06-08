/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { n as elementInViewport, q as getWindowSize, s as scrollTo } from '../../_chunks/dep-16bcfabc.js';
import 'vue';
import 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';

function scrollToElm(elm) {
  var rect = elm.getBoundingClientRect();
  if (!elementInViewport(elm)) {
    var winHeight = getWindowSize().height;
    scrollTo(rect.top - (winHeight / 2 - rect.height / 2), {});
  }
}

export { scrollToElm };
//# sourceMappingURL=scrollToElm.js.map
