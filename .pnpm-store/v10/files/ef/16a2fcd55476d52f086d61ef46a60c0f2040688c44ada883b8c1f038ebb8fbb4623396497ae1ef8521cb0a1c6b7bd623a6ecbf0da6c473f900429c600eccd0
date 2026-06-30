/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { toRefs, ref, watch, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../../_chunks/dep-1dacc319.mjs';
import '../../_chunks/dep-7673347f.mjs';
import { Pagination } from '../../pagination/index.mjs';
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
import '../../pagination/pagination.mjs';
import '../../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../../input-number/index.mjs';
import '../../input-number/input-number.mjs';
import '../../button/index.mjs';
import '../../button/button.mjs';
import '../../loading/index.mjs';
import '../../loading/directive.mjs';
import '../../loading/plugin.mjs';
import '../../loading/loading.mjs';
import '../../loading/icon/gradient.mjs';
import '../../_chunks/dep-0cde7579.mjs';
import '../../loading/props.mjs';
import './style/css.mjs';
import '../../button/props.mjs';
import '../../input/index.mjs';
import '../../input/input.mjs';
import '../../input/props.mjs';
import '../../input/hooks/index.mjs';
import '../../input/hooks/useInput.mjs';
import '../../form/consts/index.mjs';
import '../../input/hooks/useLengthLimit.mjs';
import '../../_chunks/dep-6d2705e1.mjs';
import '../../input/hooks/useInputEventHandler.mjs';
import '../../input/hooks/useInputWidth.mjs';
import '../../input/input-group.mjs';
import '../../input/input-group-props.mjs';
import '../../input-number/props.mjs';
import '../../input-number/hooks/useInputNumber.mjs';
import '../../_chunks/dep-29754cb4.mjs';
import '../../_chunks/dep-db81c302.mjs';
import '../../select/index.mjs';
import '../../select/select.mjs';
import '../../_chunks/dep-88e5a7b0.mjs';
import '../../common-components/fake-arrow.mjs';
import '../../select-input/index.mjs';
import '../../select-input/select-input.mjs';
import '../../popup/index.mjs';
import '../../popup/popup.mjs';
import '@popperjs/core';
import '../../popup/container.mjs';
import '../../popup/props.mjs';
import '../../select-input/props.mjs';
import '../../select-input/hooks/index.mjs';
import '../../select-input/hooks/useMultiple.mjs';
import '../../tag-input/index.mjs';
import '../../tag-input/tag-input.mjs';
import '../../tag-input/props.mjs';
import '../../tag-input/hooks/index.mjs';
import '../../tag-input/hooks/useDragSorter.mjs';
import '../../tag-input/hooks/useHover.mjs';
import '../../tag-input/hooks/useTagScroll.mjs';
import '../../tag-input/hooks/useTagList.mjs';
import '../../tag/index.mjs';
import '../../tag/tag.mjs';
import '../../_chunks/dep-b31d8258.mjs';
import '../../tag/props.mjs';
import '../../tag/check-tag.mjs';
import '../../tag/check-tag-props.mjs';
import '../../tag/check-tag-group.mjs';
import '../../tag/check-tag-group-props.mjs';
import '../../select-input/hooks/useOverlayInnerStyle.mjs';
import '../../select-input/hooks/useSingle.mjs';
import '../../select/components/select-panel.mjs';
import '../../select/option.mjs';
import '../../select/option-props.mjs';
import '../../checkbox/index.mjs';
import '../../checkbox/checkbox.mjs';
import '../../checkbox/props.mjs';
import '../../checkbox/consts/index.mjs';
import '../../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../../checkbox/hooks/useKeyboardEvent.mjs';
import '../../checkbox/group.mjs';
import '../../checkbox/checkbox-group-props.mjs';
import '../../select/utils/index.mjs';
import '../../select/consts/index.mjs';
import '../../select/option-group.mjs';
import '../../select/option-group-props.mjs';
import '../../select/props.mjs';
import '../../select/hooks/index.mjs';
import '../../select/hooks/useKeyboardControl.mjs';
import '../../select/hooks/usePanelVirtualScroll.mjs';
import '../../select/hooks/useSelectOptions.mjs';
import '../../input-adornment/index.mjs';
import '../../input-adornment/input-adornment.mjs';
import '../../input-adornment/props.mjs';
import '../../pagination/props.mjs';
import '../../pagination/hooks/index.mjs';
import '../../pagination/hooks/useMoreAction.mjs';
import '../../pagination/hooks/usePaginationClasses.mjs';
import '../../pagination/pagination-mini.mjs';
import '../../pagination/pagination-mini-props.mjs';
import '../../tooltip/index.mjs';
import '../../tooltip/tooltip.mjs';
import '../../tooltip/props.mjs';
import '../../tooltip/utils/index.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function usePagination(props, context, tableContentRef) {
  var _toRefs = toRefs(props),
    pagination = _toRefs.pagination,
    data = _toRefs.data,
    disableDataPage = _toRefs.disableDataPage;
  var _useConfig = useConfig(),
    classPrefix = _useConfig.classPrefix;
  var innerPagination = ref(props.pagination);
  var dataSource = ref([]);
  var isPaginateData = ref(false);
  var updateDataSourceAndPaginate = function updateDataSourceAndPaginate() {
    var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var data2 = props.data;
    var t = Boolean(!disableDataPage.value && data2.length > pageSize);
    isPaginateData.value = t;
    if (t) {
      var start = (current - 1) * pageSize;
      var end = current * pageSize;
      dataSource.value = data2.slice(start, end);
    } else {
      dataSource.value = data2;
    }
  };
  watch(function () {
    var _pagination$value, _pagination$value2;
    return [(_pagination$value = pagination.value) === null || _pagination$value === void 0 ? void 0 : _pagination$value.current, (_pagination$value2 = pagination.value) === null || _pagination$value2 === void 0 ? void 0 : _pagination$value2.pageSize, data.value.length, disableDataPage];
  }, function () {
    if (!pagination.value || !pagination.value.current) return;
    var _pagination$value3 = pagination.value,
      current = _pagination$value3.current,
      pageSize = _pagination$value3.pageSize;
    var newPageInfo = {
      current: current,
      pageSize: pageSize
    };
    innerPagination.value = newPageInfo;
    updateDataSourceAndPaginate(pagination.value.current, pagination.value.pageSize || pagination.value.defaultPageSize);
  }, {
    immediate: true
  });
  watch([data], function () {
    var _innerPagination$valu, _innerPagination$valu2;
    if (!pagination.value || !pagination.value.defaultCurrent) return;
    var isControlled = Boolean(pagination.value.current);
    if (isControlled) return;
    updateDataSourceAndPaginate((_innerPagination$valu = innerPagination.value.current) !== null && _innerPagination$valu !== void 0 ? _innerPagination$valu : pagination.value.defaultCurrent, (_innerPagination$valu2 = innerPagination.value.pageSize) !== null && _innerPagination$valu2 !== void 0 ? _innerPagination$valu2 : pagination.value.defaultPageSize);
  }, {
    immediate: true
  });
  var renderPagination = function renderPagination() {
    if (!props.pagination) return null;
    var paginationProps = _objectSpread({}, props.pagination);
    delete paginationProps.onChange;
    return createVNode("div", {
      "class": "".concat(classPrefix.value, "-table__pagination")
    }, [createVNode(Pagination, mergeProps({
      "size": props.size === "large" ? null : props.size
    }, paginationProps, {
      "onChange": function onChange(pageInfo) {
        var _props$pagination, _props$pagination$onC, _props$onPageChange;
        (_props$pagination = props.pagination) === null || _props$pagination === void 0 || (_props$pagination$onC = _props$pagination.onChange) === null || _props$pagination$onC === void 0 || _props$pagination$onC.call(_props$pagination, pageInfo);
        innerPagination.value = pageInfo;
        updateDataSourceAndPaginate(pageInfo.current, pageInfo.pageSize);
        (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, pageInfo, dataSource.value);
        var ref2 = tableContentRef.value;
        if (ref2.scrollTo) {
          ref2.scrollTo({
            top: 0,
            left: 0
          });
        } else {
          ref2.scrollTop = 0;
          ref2.scrollLeft = 0;
        }
      }
    }), {
      totalContent: context.slots.totalContent
    })]);
  };
  return {
    isPaginateData: isPaginateData,
    dataSource: dataSource,
    innerPagination: innerPagination,
    renderPagination: renderPagination
  };
}

export { usePagination as default };
//# sourceMappingURL=usePagination.mjs.map
