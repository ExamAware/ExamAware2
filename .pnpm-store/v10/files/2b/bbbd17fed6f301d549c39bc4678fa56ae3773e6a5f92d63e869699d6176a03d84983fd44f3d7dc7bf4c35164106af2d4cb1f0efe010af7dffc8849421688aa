'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var utils_useCommonClassname = require('./use-common-classname.js');
require('./config-context.js');

function useSizeProps(size) {
  var COMMON_SIZE_CLASS_NAMES = utils_useCommonClassname['default']().SIZE;
  var className = vue.computed(() => {
    if (size.value in COMMON_SIZE_CLASS_NAMES) {
      return COMMON_SIZE_CLASS_NAMES[size.value];
    }
    return "";
  });
  var style = vue.computed(() => {
    if (size.value === void 0 || size.value in COMMON_SIZE_CLASS_NAMES) {
      return {};
    }
    return {
      fontSize: size.value
    };
  });
  return {
    style,
    className
  };
}

exports.default = useSizeProps;
//# sourceMappingURL=use-size-props.js.map
