/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
var helper = require('../../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../../_chunks/dep-fd5a369e.js');
require('../../_chunks/dep-4ccaead1.js');
require('../../_chunks/dep-a55e8a08.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-990979bb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-48f60c78.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function usePaginationClasses(props, innerCurrent, innerPageSize, name) {
  var _useCommonClassName = index.useCommonClassName(),
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var pageCount = Vue.computed(function () {
    var c = Math.ceil(props.total / innerPageSize.value);
    return c > 0 ? c : 1;
  });
  var paginationClass = Vue.computed(function () {
    return ["".concat(name.value), SIZE.value[props.size], _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled), "".concat(name.value, "-ie"), helper.getIEVersion() < 11), props.theme === "simple" ? "".concat(name.value, "--simple") : ""];
  });
  var totalClass = Vue.computed(function () {
    return ["".concat(name.value, "__total")];
  });
  var sizerClass = Vue.computed(function () {
    return ["".concat(name.value, "__select")];
  });
  var preBtnClass = Vue.computed(function () {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-prev"), _defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled || innerCurrent.value === 1)];
  });
  var nextBtnClass = Vue.computed(function () {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-next"), _defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled || innerCurrent.value === pageCount.value)];
  });
  var btnWrapClass = Vue.computed(function () {
    return ["".concat(name.value, "__pager")];
  });
  var btnMoreClass = Vue.computed(function () {
    return ["".concat(name.value, "__number"), "".concat(name.value, "__number--more"), _defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled)];
  });
  var jumperClass = Vue.computed(function () {
    return ["".concat(name.value, "__jump")];
  });
  var jumperInputClass = Vue.computed(function () {
    return ["".concat(name.value, "__input")];
  });
  var simpleClass = Vue.computed(function () {
    return ["".concat(name.value, "__select")];
  });
  var getButtonClass = function getButtonClass(index) {
    return ["".concat(name.value, "__number"), _defineProperty__default["default"](_defineProperty__default["default"]({}, STATUS.value.disabled, props.disabled), STATUS.value.current, innerCurrent.value === index)];
  };
  return {
    pageCount: pageCount,
    paginationClass: paginationClass,
    totalClass: totalClass,
    sizerClass: sizerClass,
    preBtnClass: preBtnClass,
    nextBtnClass: nextBtnClass,
    btnWrapClass: btnWrapClass,
    btnMoreClass: btnMoreClass,
    jumperClass: jumperClass,
    jumperInputClass: jumperInputClass,
    simpleClass: simpleClass,
    getButtonClass: getButtonClass
  };
}

exports.usePaginationClasses = usePaginationClasses;
//# sourceMappingURL=usePaginationClasses.js.map
