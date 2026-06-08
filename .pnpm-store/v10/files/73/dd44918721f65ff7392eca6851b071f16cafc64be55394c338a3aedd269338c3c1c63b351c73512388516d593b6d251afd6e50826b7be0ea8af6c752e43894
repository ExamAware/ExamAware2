/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { ref, watch } from 'vue';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/defineProperty';
import { getNewMultipleValue } from '../utils/index.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/hooks/useConfig.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function useKeyboardControl(_ref) {
  var displayOptions = _ref.displayOptions,
    optionsList = _ref.optionsList,
    innerPopupVisible = _ref.innerPopupVisible,
    setInnerPopupVisible = _ref.setInnerPopupVisible,
    selectPanelRef = _ref.selectPanelRef,
    isFilterable = _ref.isFilterable,
    isRemoteSearch = _ref.isRemoteSearch,
    getSelectedOptions = _ref.getSelectedOptions,
    setInnerValue = _ref.setInnerValue,
    onCheckAllChange = _ref.onCheckAllChange,
    innerValue = _ref.innerValue,
    popupContentRef = _ref.popupContentRef,
    multiple = _ref.multiple,
    max = _ref.max,
    isCheckAll = _ref.isCheckAll;
  var hoverIndex = ref(-1);
  var filteredOptions = ref([]);
  var virtualFilteredOptions = ref([]);
  var classPrefix = usePrefixClass();
  var handleKeyDown = function handleKeyDown(e) {
    var _optionsList$value$ne, _optionsList$value$ne2;
    var optionsListLength = displayOptions.value.length;
    var newIndex = hoverIndex.value;
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        if (hoverIndex.value === -1) {
          newIndex = 0;
        } else if (hoverIndex.value === 0 || hoverIndex.value > displayOptions.value.length - 1) {
          newIndex = optionsListLength - 1;
        } else {
          newIndex--;
        }
        if ((_optionsList$value$ne = optionsList.value[newIndex]) !== null && _optionsList$value$ne !== void 0 && _optionsList$value$ne.disabled) {
          newIndex--;
        }
        hoverIndex.value = newIndex;
        break;
      case "ArrowDown":
        e.preventDefault();
        if (hoverIndex.value === -1 || hoverIndex.value >= optionsListLength - 1) {
          newIndex = 0;
        } else {
          newIndex++;
        }
        if ((_optionsList$value$ne2 = optionsList.value[newIndex]) !== null && _optionsList$value$ne2 !== void 0 && _optionsList$value$ne2.disabled) {
          newIndex++;
        }
        hoverIndex.value = newIndex;
        break;
      case "Enter":
        if (hoverIndex.value === -1) break;
        var finalOptions = selectPanelRef.value.isVirtual && isFilterable.value && virtualFilteredOptions.value.length ? virtualFilteredOptions.value : isRemoteSearch.value ? optionsList.value : filteredOptions.value;
        if (!finalOptions.length) finalOptions = optionsList.value;
        if (!innerPopupVisible.value) {
          setInnerPopupVisible(true, {
            e: e
          });
          break;
        }
        if (!multiple) {
          var selectedOptions = getSelectedOptions(finalOptions[hoverIndex.value].value);
          setInnerValue(finalOptions[hoverIndex.value].value, {
            option: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions[0],
            selectedOptions: getSelectedOptions(finalOptions[hoverIndex.value].value),
            trigger: "check",
            e: e
          });
          setInnerPopupVisible(false, {
            e: e
          });
        } else {
          var _finalOptions$hoverIn;
          if (hoverIndex.value === -1) return;
          if (finalOptions[hoverIndex.value].checkAll) {
            onCheckAllChange(!isCheckAll.value);
            return;
          }
          var optionValue = (_finalOptions$hoverIn = finalOptions[hoverIndex.value]) === null || _finalOptions$hoverIn === void 0 ? void 0 : _finalOptions$hoverIn.value;
          if (!optionValue) return;
          var newValue = getNewMultipleValue(innerValue.value, optionValue);
          if (max > 0 && newValue.value.length > max) return;
          var _selectedOptions = getSelectedOptions(newValue.value);
          setInnerValue(newValue.value, {
            option: _selectedOptions.find(function (v) {
              return v.value == optionValue;
            }),
            selectedOptions: _selectedOptions,
            trigger: newValue.isCheck ? "check" : "uncheck",
            e: e
          });
          filteredOptions.value = [];
        }
        break;
      case "Escape":
        setInnerPopupVisible(false, {
          e: e
        });
        break;
    }
  };
  watch(innerPopupVisible, function (value) {
    if (value) {
      hoverIndex.value = -1;
      virtualFilteredOptions.value = [];
      filteredOptions.value = [];
    }
  });
  watch(hoverIndex, function (index) {
    var _selectPanelRef$value;
    var optionHeight = (_selectPanelRef$value = selectPanelRef.value) === null || _selectPanelRef$value === void 0 || (_selectPanelRef$value = _selectPanelRef$value.innerRef) === null || _selectPanelRef$value === void 0 || (_selectPanelRef$value = _selectPanelRef$value.querySelector(".".concat(classPrefix.value, "-select-option"))) === null || _selectPanelRef$value === void 0 ? void 0 : _selectPanelRef$value.clientHeight;
    var scrollHeight = optionHeight * index;
    popupContentRef.value.scrollTo({
      top: scrollHeight,
      behavior: "smooth"
    });
  });
  return {
    hoverIndex: hoverIndex,
    handleKeyDown: handleKeyDown,
    virtualFilteredOptions: virtualFilteredOptions,
    filteredOptions: filteredOptions
  };
}

export { useKeyboardControl };
//# sourceMappingURL=useKeyboardControl.js.map
