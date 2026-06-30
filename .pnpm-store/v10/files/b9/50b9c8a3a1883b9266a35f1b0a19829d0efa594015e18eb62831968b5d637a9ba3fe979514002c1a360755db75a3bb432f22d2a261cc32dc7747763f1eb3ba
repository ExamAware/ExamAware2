/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { computed } from 'vue';
import { e as getIEVersion } from '../../_chunks/dep-80a99546.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as useCommonClassName } from '../../_chunks/dep-4f8b6591.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function usePaginationClasses(props, innerCurrent, innerPageSize, name) {
  var _useCommonClassName = useCommonClassName(),
    SIZE = _useCommonClassName.SIZE,
    STATUS = _useCommonClassName.STATUS;
  var pageCount = computed(function () {
    var c = Math.ceil(props.total / innerPageSize.value);
    return c > 0 ? c : 1;
  });
  var paginationClass = computed(function () {
    return ["".concat(name.value), SIZE.value[props.size], _defineProperty(_defineProperty({}, STATUS.value.disabled, props.disabled), "".concat(name.value, "-ie"), getIEVersion() < 11), props.theme === "simple" ? "".concat(name.value, "--simple") : ""];
  });
  var totalClass = computed(function () {
    return ["".concat(name.value, "__total")];
  });
  var sizerClass = computed(function () {
    return ["".concat(name.value, "__select")];
  });
  var preBtnClass = computed(function () {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-prev"), _defineProperty({}, STATUS.value.disabled, props.disabled || innerCurrent.value === 1)];
  });
  var nextBtnClass = computed(function () {
    return ["".concat(name.value, "__btn"), "".concat(name.value, "__btn-next"), _defineProperty({}, STATUS.value.disabled, props.disabled || innerCurrent.value === pageCount.value)];
  });
  var btnWrapClass = computed(function () {
    return ["".concat(name.value, "__pager")];
  });
  var btnMoreClass = computed(function () {
    return ["".concat(name.value, "__number"), "".concat(name.value, "__number--more"), _defineProperty({}, STATUS.value.disabled, props.disabled)];
  });
  var jumperClass = computed(function () {
    return ["".concat(name.value, "__jump")];
  });
  var jumperInputClass = computed(function () {
    return ["".concat(name.value, "__input")];
  });
  var simpleClass = computed(function () {
    return ["".concat(name.value, "__select")];
  });
  var getButtonClass = function getButtonClass(index) {
    return ["".concat(name.value, "__number"), _defineProperty(_defineProperty({}, STATUS.value.disabled, props.disabled), STATUS.value.current, innerCurrent.value === index)];
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

export { usePaginationClasses };
//# sourceMappingURL=usePaginationClasses.js.map
