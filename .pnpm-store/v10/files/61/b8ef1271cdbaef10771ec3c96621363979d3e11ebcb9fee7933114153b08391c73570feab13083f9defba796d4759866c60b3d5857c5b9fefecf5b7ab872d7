/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var table_hooks_useClassName = require('./useClassName.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-8382953f.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('../../_chunks/dep-ecaaae91.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function formatCSSUnit(unit) {
  if (!unit) return unit;
  return isNaN(Number(unit)) ? unit : "".concat(unit, "px");
}
function useStyle(props) {
  var _toRefs = Vue.toRefs(props),
    size = _toRefs.size,
    bordered = _toRefs.bordered,
    stripe = _toRefs.stripe,
    hover = _toRefs.hover,
    verticalAlign = _toRefs.verticalAlign,
    height = _toRefs.height,
    maxHeight = _toRefs.maxHeight,
    tableContentWidth = _toRefs.tableContentWidth;
  var _useClassName = table_hooks_useClassName["default"](),
    tableBaseClass = _useClassName.tableBaseClass,
    tableAlignClasses = _useClassName.tableAlignClasses;
  var _useCommonClassName = index.useCommonClassName(),
    SIZE = _useCommonClassName.SIZE;
  var _useConfig = configProvider_hooks_useConfig.useConfig("table", props.locale),
    globalConfig = _useConfig.globalConfig;
  var tableSize = Vue.computed(function () {
    var _size$value;
    return (_size$value = size.value) !== null && _size$value !== void 0 ? _size$value : globalConfig.value.size;
  });
  var tableClasses = Vue.computed(function () {
    return [tableBaseClass.table, _defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"](_defineProperty__default["default"]({}, SIZE.value[tableSize.value], tableSize.value !== "medium"), tableBaseClass.bordered, bordered.value), tableBaseClass.striped, stripe.value), tableBaseClass.hover, hover.value), tableBaseClass.loading, props.loading), tableBaseClass.affixedHeader, props.headerAffixedTop), tableBaseClass.rowspanAndColspan, props.rowspanAndColspan), tableAlignClasses[verticalAlign.value], verticalAlign.value !== "middle")];
  });
  var tableContentStyles = Vue.computed(function () {
    return {
      height: formatCSSUnit(height.value),
      maxHeight: formatCSSUnit(maxHeight.value),
      overflowAnchor: "none"
    };
  });
  var tableElementStyles = Vue.computed(function () {
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

exports["default"] = useStyle;
exports.formatCSSUnit = formatCSSUnit;
//# sourceMappingURL=useStyle.js.map
