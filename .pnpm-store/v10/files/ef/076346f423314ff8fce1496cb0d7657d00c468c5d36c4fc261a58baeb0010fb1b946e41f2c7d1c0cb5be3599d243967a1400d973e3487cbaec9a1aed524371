/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, onMounted, onUnmounted } from 'vue';
import { i as isServer } from '../../_chunks/dep-16bcfabc.js';
import 'lodash-es';
import '../../_chunks/dep-fe23be6e.js';
import '../../_chunks/dep-81b01cae.js';

var useMouse = function useMouse() {
  var x = ref(0);
  var y = ref(0);
  var onMouseMove = function onMouseMove(e) {
    x.value = e.clientX;
    y.value = e.clientY;
  };
  if (!isServer) {
    onMounted(function () {
      window.addEventListener("mousemove", onMouseMove, {
        passive: true
      });
    });
    onUnmounted(function () {
      window.removeEventListener("mousemove", onMouseMove);
    });
  }
  return {
    x: x,
    y: y
  };
};

export { useMouse };
//# sourceMappingURL=index.js.map
