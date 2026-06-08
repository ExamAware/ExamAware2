/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
var select_utils_index = require('../utils/index.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../config-provider/hooks/useConfig.js');
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
  var hoverIndex = Vue.ref(-1);
  var filteredOptions = Vue.ref([]);
  var virtualFilteredOptions = Vue.ref([]);
  var classPrefix = index.usePrefixClass();
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
          var newValue = select_utils_index.getNewMultipleValue(innerValue.value, optionValue);
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
  Vue.watch(innerPopupVisible, function (value) {
    if (value) {
      hoverIndex.value = -1;
      virtualFilteredOptions.value = [];
      filteredOptions.value = [];
    }
  });
  Vue.watch(hoverIndex, function (index) {
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

exports.useKeyboardControl = useKeyboardControl;
//# sourceMappingURL=useKeyboardControl.js.map
