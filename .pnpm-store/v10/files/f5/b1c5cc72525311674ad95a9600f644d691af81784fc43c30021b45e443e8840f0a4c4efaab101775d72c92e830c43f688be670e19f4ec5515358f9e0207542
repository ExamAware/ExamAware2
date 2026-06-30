/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { computed } from 'vue';
import { useConfig } from '../config-provider/hooks/useConfig.js';

function usePrefixClass(componentName) {
  var _useConfig = useConfig("classPrefix"),
    classPrefix = _useConfig.classPrefix;
  return computed(function () {
    return componentName ? "".concat(classPrefix.value, "-").concat(componentName) : classPrefix.value;
  });
}

export { usePrefixClass as u };
//# sourceMappingURL=dep-9e6d8a78.js.map
