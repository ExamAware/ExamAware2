/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

require('vue');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');

function useGlobalIcon(tdIcon) {
  var _useConfig = configProvider_hooks_useConfig.useConfig("icon"),
    globalConfig = _useConfig.globalConfig;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function (key) {
    var _globalConfig$value;
    resultIcon[key] = ((_globalConfig$value = globalConfig.value) === null || _globalConfig$value === void 0 ? void 0 : _globalConfig$value[key]) || tdIcon[key];
  });
  return resultIcon;
}

exports.useGlobalIcon = useGlobalIcon;
//# sourceMappingURL=dep-31c76dc6.js.map
