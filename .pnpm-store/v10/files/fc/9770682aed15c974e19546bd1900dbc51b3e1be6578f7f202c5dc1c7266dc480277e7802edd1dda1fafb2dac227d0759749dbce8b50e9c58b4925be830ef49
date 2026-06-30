/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import { computed } from 'vue';
import { e as getIEVersion } from '../../_chunks/dep-0cde7579.mjs';
import { c as useCommonClassName } from '../../_chunks/dep-7673347f.mjs';
import '../../_chunks/dep-257428bc.mjs';
import '../../_chunks/dep-00b4e06a.mjs';
import '../../_chunks/dep-9f459d8b.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import '../../_chunks/dep-9003fde5.mjs';
import 'lodash-es';
import '../../_chunks/dep-51a43106.mjs';
import '../../_chunks/dep-fe644854.mjs';
import '../../config-provider/hooks/useConfig.mjs';
import '../../config-provider/utils/context.mjs';
import '../../_chunks/dep-a4c09318.mjs';
import '../../_chunks/dep-ffb85102.mjs';
import '../../_chunks/dep-ad588525.mjs';
import '../../_chunks/dep-22ebd6af.mjs';
import '../../_chunks/dep-cdd448ec.mjs';
import '../../_chunks/dep-97ecacde.mjs';
import '../../_chunks/dep-84fd47b3.mjs';
import '../../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=usePaginationClasses.mjs.map
