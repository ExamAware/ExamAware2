/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { toRefs, computed } from 'vue';
import useClassName from './useClassName.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../_chunks/dep-4f8b6591.js';
import { useConfig } from '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '../../_chunks/dep-9e6d8a78.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function formatCSSUnit(unit) {
  if (!unit) return unit;
  return isNaN(Number(unit)) ? unit : "".concat(unit, "px");
}
function useStyle(props) {
  var _toRefs = toRefs(props),
    size = _toRefs.size,
    bordered = _toRefs.bordered,
    stripe = _toRefs.stripe,
    hover = _toRefs.hover,
    verticalAlign = _toRefs.verticalAlign,
    height = _toRefs.height,
    maxHeight = _toRefs.maxHeight,
    tableContentWidth = _toRefs.tableContentWidth;
  var _useClassName = useClassName(),
    tableBaseClass = _useClassName.tableBaseClass,
    tableAlignClasses = _useClassName.tableAlignClasses;
  var _useCommonClassName = useCommonClassName(),
    SIZE = _useCommonClassName.SIZE;
  var _useConfig = useConfig("table", props.locale),
    globalConfig = _useConfig.globalConfig;
  var tableSize = computed(function () {
    var _size$value;
    return (_size$value = size.value) !== null && _size$value !== void 0 ? _size$value : globalConfig.value.size;
  });
  var tableClasses = computed(function () {
    return [tableBaseClass.table, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, SIZE.value[tableSize.value], tableSize.value !== "medium"), tableBaseClass.bordered, bordered.value), tableBaseClass.striped, stripe.value), tableBaseClass.hover, hover.value), tableBaseClass.loading, props.loading), tableBaseClass.affixedHeader, props.headerAffixedTop), tableBaseClass.rowspanAndColspan, props.rowspanAndColspan), tableAlignClasses[verticalAlign.value], verticalAlign.value !== "middle")];
  });
  var tableContentStyles = computed(function () {
    return {
      height: formatCSSUnit(height.value),
      maxHeight: formatCSSUnit(maxHeight.value),
      overflowAnchor: "none"
    };
  });
  var tableElementStyles = computed(function () {
    return {
      width: formatCSSUnit(tableContentWidth.value)
    };
  });
  return {
    tableClasses: tableClasses,
    sizeClassNames: SIZE.value,
    tableElementStyles: tableElementStyles,
    tableContentStyles: tableContentStyles
  };
}

export { useStyle as default, formatCSSUnit };
//# sourceMappingURL=useStyle.js.map
