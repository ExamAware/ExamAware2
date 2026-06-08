/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, provide, onUpdated } from 'vue';

var TDisplayNoneElementRefresh = "t-display-none-element-refresh";
function useDestroyOnClose() {
  var refresh = ref(0);
  provide(TDisplayNoneElementRefresh, refresh);
  onUpdated(function () {
    refresh.value += 1;
  });
}

export { useDestroyOnClose as u };
//# sourceMappingURL=dep-7f74a978.js.map
