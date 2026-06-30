/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

var Vue = require('vue');

var TDisplayNoneElementRefresh = "t-display-none-element-refresh";
function useDestroyOnClose() {
  var refresh = Vue.ref(0);
  Vue.provide(TDisplayNoneElementRefresh, refresh);
  Vue.onUpdated(function () {
    refresh.value += 1;
  });
}

exports.useDestroyOnClose = useDestroyOnClose;
//# sourceMappingURL=dep-92c8c5c9.js.map
