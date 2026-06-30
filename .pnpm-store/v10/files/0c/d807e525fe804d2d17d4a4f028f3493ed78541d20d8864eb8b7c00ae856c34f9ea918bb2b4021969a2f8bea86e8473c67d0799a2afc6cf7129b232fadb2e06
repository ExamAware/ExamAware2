/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, computed, createVNode, isVNode } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { isFunction, pick } from 'lodash-es';
import TransferList from './components/transfer-list.js';
import TransferOperations from './components/transfer-operations.js';
import { TRANSFER_NAME, getTransferData, filterTransferData, SOURCE, getDataValues, TARGET, getTransferListOption } from './utils/index.js';
import props from './props.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import { u as useDefaultValue } from '../_chunks/dep-aa34a263.js';
import { u as useDisabled } from '../_chunks/dep-f7dd3c12.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '../pagination/index.js';
import '../pagination/pagination.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../input-number/index.js';
import '../input-number/input-number.js';
import '../button/index.js';
import '../button/button.js';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import '../button/props.js';
import '../_chunks/dep-d2a6e7a4.js';
import 'tdesign-vue-next/esm/common/style/web/components/button/_index.less';
import '../input/index.js';
import '../input/input.js';
import '../input/props.js';
import '../_chunks/dep-47b13687.js';
import '../input/hooks/useInput.js';
import '../form/consts/index.js';
import '../input/hooks/useLengthLimit.js';
import '../_chunks/dep-8295e674.js';
import '../input/hooks/useInputEventHandler.js';
import '../input/hooks/useInputWidth.js';
import '../_chunks/dep-80a77612.js';
import '../input/input-group.js';
import '../input/input-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input/_index.less';
import '../input-number/props.js';
import '../_chunks/dep-4d7b9152.js';
import '../input-number/hooks/useInputNumber.js';
import '../_chunks/dep-1a63d163.js';
import '../_chunks/dep-05f15b4e.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-number/_index.less';
import '../select/index.js';
import '../select/select.js';
import '@babel/runtime/helpers/asyncToGenerator';
import '@babel/runtime/regenerator';
import '../common-components/fake-arrow.js';
import '../select-input/index.js';
import '../select-input/select-input.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../popup/container.js';
import '../popup/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../select-input/props.js';
import '../select-input/hooks/useMultiple.js';
import '../tag-input/index.js';
import '../tag-input/tag-input.js';
import '../tag-input/props.js';
import '../tag-input/hooks/useDragSorter.js';
import '../tag-input/hooks/useHover.js';
import '../tag-input/hooks/useTagScroll.js';
import '../tag-input/hooks/useTagList.js';
import '../tag/index.js';
import '../tag/tag.js';
import 'tinycolor2';
import '../tag/props.js';
import '../tag/check-tag.js';
import '../tag/check-tag-props.js';
import '../_chunks/dep-30c631d1.js';
import '../tag/check-tag-group.js';
import '../tag/check-tag-group-props.js';
import 'tdesign-vue-next/esm/common/style/web/components/tag/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/tag-input/_index.less';
import '../select-input/hooks/useOverlayInnerStyle.js';
import '../select-input/hooks/useSingle.js';
import 'tdesign-vue-next/esm/common/style/web/components/select-input/_index.less';
import '../select/components/select-panel.js';
import '../select/option.js';
import '../select/option-props.js';
import '../checkbox/index.js';
import '../checkbox/checkbox.js';
import '../checkbox/props.js';
import '../checkbox/consts/index.js';
import '../checkbox/hooks/useCheckboxLazyLoad.js';
import '../_chunks/dep-6264b0a7.js';
import '../checkbox/hooks/useKeyboardEvent.js';
import '../checkbox/group.js';
import '../checkbox/checkbox-group-props.js';
import '../_chunks/dep-e3ce8c8f.js';
import 'tdesign-vue-next/esm/common/style/web/components/checkbox/_index.less';
import '../select/utils/index.js';
import '../select/consts/index.js';
import '../select/option-group.js';
import '../select/option-group-props.js';
import '../select/props.js';
import '../select/hooks/usePanelVirtualScroll.js';
import '../select/hooks/useKeyboardControl.js';
import '../select/hooks/useSelectOptions.js';
import 'tdesign-vue-next/esm/common/style/web/components/select/_index.less';
import '../input-adornment/index.js';
import '../input-adornment/input-adornment.js';
import '../input-adornment/props.js';
import 'tdesign-vue-next/esm/common/style/web/components/input-adornment/_index.less';
import '../pagination/props.js';
import '../pagination/hooks/useMoreAction.js';
import '../pagination/hooks/usePaginationClasses.js';
import '../pagination/pagination-mini.js';
import '../pagination/pagination-mini-props.js';
import '../tooltip/index.js';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';
import 'tdesign-vue-next/esm/common/style/web/components/pagination/_index.less';
import './components/transfer-search.js';
import './hooks/useDragSort.js';

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !isVNode(s);
}
var _Transfer = defineComponent({
  name: TRANSFER_NAME,
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var disabled = useDisabled();
    var classPrefix = usePrefixClass();
    var _toRefs = toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      checked = _toRefs.checked;
    var _useVModel = useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var _useDefaultValue = useDefaultValue(checked, props2.defaultChecked, props2.onCheckedChange, "checked"),
      _useDefaultValue2 = _slicedToArray(_useDefaultValue, 1),
      innerChecked = _useDefaultValue2[0];
    var valueList = computed(function () {
      return innerValue.value;
    });
    var isTreeMode = computed(function () {
      var treeSlot = slots.tree;
      return isFunction(treeSlot);
    });
    var leftButtonDisabled = computed(function () {
      return props2.direction === "right";
    });
    var rightButtonDisabled = computed(function () {
      return props2.direction === "left";
    });
    var transferData = computed(function () {
      return getTransferData(props2.data, props2.keys, isTreeMode.value);
    });
    var sourceList = computed(function () {
      return filterTransferData(transferData.value, valueList.value, false, isTreeMode.value);
    });
    var targetList = computed(function () {
      return filterTransferData(transferData.value, valueList.value, true, isTreeMode.value);
    });
    var checkedValue = computed(function () {
      return _defineProperty(_defineProperty({}, SOURCE, getDataValues(sourceList.value, innerChecked.value, {
        isTreeMode: isTreeMode.value
      })), TARGET, getDataValues(targetList.value, innerChecked.value, {
        isTreeMode: isTreeMode.value
      }));
    });
    var hasFooter = computed(function () {
      return !!slots.footer || !!props2.footer;
    });
    var showPagination = computed(function () {
      return !!props2.pagination && !slots.content;
    });
    var showSearch = computed(function () {
      return !!props2.search;
    });
    var footerOption = computed(function () {
      var footer = props2.footer || "";
      return getTransferListOption(footer);
    });
    var emptyOption = computed(function () {
      return getTransferListOption(props2.empty);
    });
    var searchOption = computed(function () {
      return getTransferListOption(props2.search);
    });
    var checkAllOption = computed(function () {
      return getTransferListOption(props2.showCheckAll);
    });
    var disabledOption = computed(function () {
      return getTransferListOption(disabled.value);
    });
    var titleOption = computed(function () {
      return getTransferListOption(props2.title);
    });
    var paginationOption = computed(function () {
      return getTransferListOption(props2.pagination);
    });
    var handleCheckedChange = function handleCheckedChange(val, listType) {
      var _props2$onCheckedChan;
      var sourceChecked = listType === SOURCE ? val : checkedValue.value[SOURCE];
      var targetChecked = listType === TARGET ? val : checkedValue.value[TARGET];
      var checked2 = [].concat(_toConsumableArray(sourceChecked), _toConsumableArray(targetChecked));
      var event = {
        checked: checked2,
        sourceChecked: sourceChecked,
        targetChecked: targetChecked,
        type: listType
      };
      innerChecked.value = checked2;
      (_props2$onCheckedChan = props2.onCheckedChange) === null || _props2$onCheckedChan === void 0 || _props2$onCheckedChan.call(props2, event);
    };
    var transferTo = function transferTo(toDirection) {
      var oldTargetValue = JSON.parse(JSON.stringify(valueList.value));
      var newTargetValue;
      var selfCheckedValue = toDirection === TARGET ? checkedValue.value[SOURCE] : checkedValue.value[TARGET];
      if (toDirection === SOURCE) {
        newTargetValue = oldTargetValue.filter(function (v) {
          return !selfCheckedValue.includes(v);
        });
      } else if (props2.targetSort === "original") {
        var remainValue = transferData.value.reduce(function (acc, data) {
          if (oldTargetValue.includes(data.value) && data.disabled) {
            return acc.concat(data.value);
          }
          return acc;
        }, []);
        newTargetValue = getDataValues(transferData.value, oldTargetValue.concat(selfCheckedValue), {
          isTreeMode: isTreeMode.value,
          remainValue: remainValue
        });
      } else if (props2.targetSort === "unshift") {
        newTargetValue = selfCheckedValue.concat(oldTargetValue);
      } else {
        newTargetValue = oldTargetValue.concat(selfCheckedValue);
      }
      handleCheckedChange([], toDirection === SOURCE ? TARGET : SOURCE);
      var params = {
        type: toDirection,
        movedValue: selfCheckedValue
      };
      setInnerValue(newTargetValue, params);
    };
    var transferToRight = function transferToRight() {
      transferTo(TARGET);
    };
    var transferToLeft = function transferToLeft() {
      transferTo(SOURCE);
    };
    var handleScroll = function handleScroll(e, listType) {
      var _props2$onScroll;
      var target = e.target;
      var bottomDistance = target.scrollHeight - target.scrollTop - target.clientHeight;
      var event = {
        e: e,
        bottomDistance: bottomDistance,
        type: listType
      };
      (_props2$onScroll = props2.onScroll) === null || _props2$onScroll === void 0 || _props2$onScroll.call(props2, event);
    };
    var handleSearch = function handleSearch(e) {
      var _props2$onSearch;
      (_props2$onSearch = props2.onSearch) === null || _props2$onSearch === void 0 || _props2$onSearch.call(props2, e);
    };
    var handlePageChange = function handlePageChange(pageInfo, listType) {
      var _props2$onPageChange;
      (_props2$onPageChange = props2.onPageChange) === null || _props2$onPageChange === void 0 || _props2$onPageChange.call(props2, pageInfo, {
        type: listType
      });
    };
    var handleDataChange = function handleDataChange(data, movedValue) {
      setInnerValue(data, {
        type: TARGET,
        movedValue: movedValue
      });
    };
    var renderTransferList = function renderTransferList(listType) {
      var scopedSlots = pick(slots, ["title", "empty", "footer", "operation", "transferItem", "default", "tree"]);
      return createVNode(TransferList, {
        "checkboxProps": props2.checkboxProps,
        "transferItem": props2.transferItem,
        "list-type": listType,
        "title": titleOption.value[listType],
        "data-source": listType === SOURCE ? sourceList.value : targetList.value,
        "checked-value": checkedValue.value[listType],
        "disabled": disabledOption.value[listType],
        "search": searchOption.value[listType],
        "pagination": paginationOption.value[listType],
        "check-all": checkAllOption.value[listType],
        "footer": footerOption.value[listType],
        "empty": emptyOption.value[listType],
        "onCheckedChange": function onCheckedChange($event) {
          return handleCheckedChange($event, listType);
        },
        "onScroll": function onScroll($event) {
          return handleScroll($event, listType);
        },
        "onSearch": handleSearch,
        "onPageChange": function onPageChange($event) {
          return handlePageChange($event, listType);
        },
        "isTreeMode": isTreeMode.value,
        "onDataChange": handleDataChange,
        "currentValue": valueList.value,
        "draggable": props2.targetDraggable && listType === TARGET
      }, _isSlot(scopedSlots) ? scopedSlots : {
        "default": function _default() {
          return [scopedSlots];
        }
      });
    };
    return function () {
      return createVNode("div", {
        "class": ["".concat(classPrefix.value, "-transfer"), showSearch.value ? "".concat(classPrefix.value, "-transfer__search") : "", hasFooter.value ? "".concat(classPrefix.value, "-transfer__footer") : "", showPagination.value ? "".concat(classPrefix.value, "-transfer__pagination") : "", isTreeMode.value ? "".concat(classPrefix.value, "-transfer--with-tree") : ""]
      }, [renderTransferList(SOURCE), createVNode(TransferOperations, {
        "leftDisabled": disabledOption.value[TARGET] || leftButtonDisabled.value || checkedValue.value[TARGET].length === 0,
        "rightDisabled": disabledOption.value[SOURCE] || rightButtonDisabled.value || checkedValue.value[SOURCE].length === 0,
        "operation": props2.operation,
        "onMoveToRight": transferToRight,
        "onMoveToLeft": transferToLeft
      }, {
        operation: slots.operation
      }), renderTransferList(TARGET)]);
    };
  }
});

export { _Transfer as default };
//# sourceMappingURL=transfer.js.map
