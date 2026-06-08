/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import 'vue';
import { useConfig } from '../config-provider/hooks/useConfig.js';

function useGlobalIcon(tdIcon) {
  var _useConfig = useConfig("icon"),
    globalConfig = _useConfig.globalConfig;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function (key) {
    var _globalConfig$value;
    resultIcon[key] = ((_globalConfig$value = globalConfig.value) === null || _globalConfig$value === void 0 ? void 0 : _globalConfig$value[key]) || tdIcon[key];
  });
  return resultIcon;
}

export { useGlobalIcon as u };
//# sourceMappingURL=dep-3a7a2ef1.js.map
