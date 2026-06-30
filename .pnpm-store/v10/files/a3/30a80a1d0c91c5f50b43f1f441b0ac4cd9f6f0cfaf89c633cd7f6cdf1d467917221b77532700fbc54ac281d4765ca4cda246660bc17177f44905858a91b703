import { computed } from 'vue';
import useCommonClassName from './use-common-classname.js';
import './config-context.js';

function useSizeProps(size) {
  var COMMON_SIZE_CLASS_NAMES = useCommonClassName().SIZE;
  var className = computed(() => {
    if (size.value in COMMON_SIZE_CLASS_NAMES) {
      return COMMON_SIZE_CLASS_NAMES[size.value];
    }
    return "";
  });
  var style = computed(() => {
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

export default useSizeProps;
//# sourceMappingURL=use-size-props.js.map
