/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { isVNode, defineComponent, toRefs, computed, createVNode } from 'vue';
import { _ as _toConsumableArray } from '../_chunks/dep-00b4e06a.mjs';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { _ as _slicedToArray } from '../_chunks/dep-9003fde5.mjs';
import { isFunction, pick } from 'lodash-es';
import TransferList from './components/transfer-list.mjs';
import TransferOperations from './components/transfer-operations.mjs';
import { TRANSFER_NAME, getTransferData, filterTransferData, SOURCE, getDataValues, TARGET, getTransferListOption } from './utils/index.mjs';
import props from './props.mjs';
import { e as useDisabled, u as usePrefixClass, j as useVModel, k as useDefaultValue } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../pagination/index.mjs';
import '../pagination/pagination.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import 'tdesign-icons-vue-next';
import '../input-number/index.mjs';
import '../input-number/input-number.mjs';
import '../button/index.mjs';
import '../button/button.mjs';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../loading/props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import '../button/props.mjs';
import '../input/index.mjs';
import '../input/input.mjs';
import '../input/props.mjs';
import '../input/hooks/index.mjs';
import '../input/hooks/useInput.mjs';
import '../form/consts/index.mjs';
import '../input/hooks/useLengthLimit.mjs';
import '../_chunks/dep-6d2705e1.mjs';
import '../input/hooks/useInputEventHandler.mjs';
import '../input/hooks/useInputWidth.mjs';
import '../input/input-group.mjs';
import '../input/input-group-props.mjs';
import '../input-number/props.mjs';
import '../input-number/hooks/useInputNumber.mjs';
import '../_chunks/dep-29754cb4.mjs';
import '../_chunks/dep-db81c302.mjs';
import '../select/index.mjs';
import '../select/select.mjs';
import '../_chunks/dep-88e5a7b0.mjs';
import '../common-components/fake-arrow.mjs';
import '../select-input/index.mjs';
import '../select-input/select-input.mjs';
import '../popup/index.mjs';
import '../popup/popup.mjs';
import '@popperjs/core';
import '../popup/container.mjs';
import '../popup/props.mjs';
import '../select-input/props.mjs';
import '../select-input/hooks/index.mjs';
import '../select-input/hooks/useMultiple.mjs';
import '../tag-input/index.mjs';
import '../tag-input/tag-input.mjs';
import '../tag-input/props.mjs';
import '../tag-input/hooks/index.mjs';
import '../tag-input/hooks/useDragSorter.mjs';
import '../tag-input/hooks/useHover.mjs';
import '../tag-input/hooks/useTagScroll.mjs';
import '../tag-input/hooks/useTagList.mjs';
import '../tag/index.mjs';
import '../tag/tag.mjs';
import '../_chunks/dep-b31d8258.mjs';
import '../tag/props.mjs';
import '../tag/check-tag.mjs';
import '../tag/check-tag-props.mjs';
import '../tag/check-tag-group.mjs';
import '../tag/check-tag-group-props.mjs';
import '../select-input/hooks/useOverlayInnerStyle.mjs';
import '../select-input/hooks/useSingle.mjs';
import '../select/components/select-panel.mjs';
import '../select/option.mjs';
import '../select/option-props.mjs';
import '../checkbox/index.mjs';
import '../checkbox/checkbox.mjs';
import '../checkbox/props.mjs';
import '../checkbox/consts/index.mjs';
import '../checkbox/hooks/useCheckboxLazyLoad.mjs';
import '../checkbox/hooks/useKeyboardEvent.mjs';
import '../checkbox/group.mjs';
import '../checkbox/checkbox-group-props.mjs';
import '../select/utils/index.mjs';
import '../select/consts/index.mjs';
import '../select/option-group.mjs';
import '../select/option-group-props.mjs';
import '../select/props.mjs';
import '../select/hooks/index.mjs';
import '../select/hooks/useKeyboardControl.mjs';
import '../select/hooks/usePanelVirtualScroll.mjs';
import '../select/hooks/useSelectOptions.mjs';
import '../input-adornment/index.mjs';
import '../input-adornment/input-adornment.mjs';
import '../input-adornment/props.mjs';
import '../pagination/props.mjs';
import '../pagination/hooks/index.mjs';
import '../pagination/hooks/useMoreAction.mjs';
import '../pagination/hooks/usePaginationClasses.mjs';
import '../pagination/pagination-mini.mjs';
import '../pagination/pagination-mini-props.mjs';
import '../tooltip/index.mjs';
import '../tooltip/tooltip.mjs';
import '../tooltip/props.mjs';
import '../tooltip/utils/index.mjs';
import './components/transfer-search.mjs';
import './hooks/useDragSort.mjs';

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
//# sourceMappingURL=transfer.mjs.map
