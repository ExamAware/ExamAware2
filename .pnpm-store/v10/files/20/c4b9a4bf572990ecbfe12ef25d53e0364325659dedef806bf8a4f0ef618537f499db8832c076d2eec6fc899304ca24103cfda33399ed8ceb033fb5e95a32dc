/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { toRefs, computed } from 'vue';
import useClassName from './useClassName.mjs';
import { c as useCommonClassName } from '../../_chunks/dep-7673347f.mjs';
import { useConfig } from '../../config-provider/hooks/useConfig.mjs';
import '../../_chunks/dep-257428bc.mjs';
import 'lodash-es';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=useStyle.mjs.map
