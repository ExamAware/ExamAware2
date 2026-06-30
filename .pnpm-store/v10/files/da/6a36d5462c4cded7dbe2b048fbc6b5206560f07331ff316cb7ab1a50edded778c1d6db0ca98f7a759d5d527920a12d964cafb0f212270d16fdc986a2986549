/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, toRefs, ref, reactive, computed, watch, onMounted, nextTick, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { debounce, range, padStart } from 'lodash-es';
import dayjs from 'dayjs';
import { c as customParseFormat } from './dep-bcf15bc2.js';
import { E as EPickerCols, b as TIME_FORMAT, c as panelColProps, d as TWELVE_HOUR_FORMAT, A as AM, M as MERIDIEM_LIST, P as PM } from './dep-af8a928d.js';
import { a as advancedFormat } from './dep-bf4a6186.js';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import './dep-fe23be6e.js';
import { u as useCommonClassName } from './dep-4f8b6591.js';
import { u as usePrefixClass } from './dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import './dep-880d05b9.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';

dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);
function validateInputValue(value, format) {
  return dayjs(value, format).format(format) === value;
}
function formatInputValue(value, format) {
  return dayjs(value, format).format(format);
}
function closestLookup(availableArr, calcVal, step) {
  if (step <= 1) return calcVal;
  return availableArr.sort(function (a, b) {
    return Math.abs(calcVal + 1 - a) - Math.abs(calcVal + 1 - b);
  })[0];
}
function getPickerCols(format) {
  var renderCol = [];
  var meridiem = EPickerCols.meridiem,
    hour = EPickerCols.hour,
    minute = EPickerCols.minute,
    second = EPickerCols.second,
    milliSecond = EPickerCols.milliSecond;
  var match = format.match(TIME_FORMAT);
  match.forEach(function (m) {
    switch (m) {
      case "H":
      case "HH":
      case "h":
      case "hh":
        renderCol.push(hour);
        break;
      case "a":
      case "A":
        renderCol.push(meridiem);
        break;
      case "m":
      case "mm":
        renderCol.push(minute);
        break;
      case "s":
      case "ss":
        renderCol.push(second);
        break;
      case "SSS":
        renderCol.push(milliSecond);
        break;
    }
  });
  return renderCol;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
dayjs.extend(customParseFormat);
var timeArr = [EPickerCols.hour, EPickerCols.minute, EPickerCols.second, EPickerCols.milliSecond];
var panelOffset = {
  top: 15,
  bottom: 21
};
var SinglePanel = defineComponent({
  name: "TTimePickerPanelCol",
  props: _objectSpread(_objectSpread({}, panelColProps()), {}, {
    position: String,
    triggerScroll: Boolean,
    onChange: Function,
    resetTriggerScroll: Function,
    isShowPanel: Boolean
  }),
  setup: function setup(props) {
    var _useConfig = useConfig("timePicker"),
      globalConfig = _useConfig.globalConfig;
    var COMPONENT_NAME = usePrefixClass("time-picker__panel");
    var _useCommonClassName = useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var _toRefs = toRefs(props),
      steps = _toRefs.steps,
      value = _toRefs.value,
      format = _toRefs.format,
      position = _toRefs.position,
      triggerScroll = _toRefs.triggerScroll;
    var cols = ref([]);
    var bodyRef = ref();
    var maskRef = ref(null);
    var colsRef = reactive({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null
    });
    var dayjsValue = computed(function () {
      var isStepsSet = !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
      if (value.value) return dayjs(value.value, format.value);
      if (isStepsSet) return dayjs().hour(0).minute(0).second(0);
      return dayjs();
    });
    watch(function () {
      return dayjsValue.value;
    }, function () {
      if (dayjsValue.value && value.value) updateTimeScrollPos(true);
    });
    watch(function () {
      return triggerScroll.value;
    }, function () {
      if (triggerScroll.value) {
        updateTimeScrollPos(true);
      }
    });
    onMounted(function () {
      cols.value = getPickerCols(format.value);
    });
    var getItemHeight = function getItemHeight() {
      var _maskRef$value;
      var maskDom = (_maskRef$value = maskRef.value) === null || _maskRef$value === void 0 ? void 0 : _maskRef$value.querySelector("div");
      if (!maskDom) {
        return {
          offsetHeight: 0,
          margin: 0
        };
      }
      return {
        offsetHeight: parseFloat(getComputedStyle(maskDom).height),
        margin: parseFloat(getComputedStyle(maskDom).marginTop)
      };
    };
    var timeItemCanUsed = function timeItemCanUsed(col, el) {
      var colIdx = timeArr.indexOf(col);
      if (colIdx !== -1) {
        var _props$disableTime;
        var params = [dayjsValue.value.hour(), dayjsValue.value.minute(), dayjsValue.value.second(), dayjsValue.value.millisecond()];
        params[colIdx] = Number(el);
        return !((_props$disableTime = props.disableTime) !== null && _props$disableTime !== void 0 && (_props$disableTime = _props$disableTime.call.apply(_props$disableTime, [props].concat(params, [{
          partial: position.value || "start"
        }]))) !== null && _props$disableTime !== void 0 && (_props$disableTime = _props$disableTime[col]) !== null && _props$disableTime !== void 0 && _props$disableTime.includes(Number(el)));
      }
      return true;
    };
    var getColList = function getColList(col) {
      var count = 0;
      if (timeArr.includes(col)) {
        var colIdx = timeArr.indexOf(col);
        var colStep = steps.value[colIdx] || 1;
        if (col === EPickerCols.hour) count = TWELVE_HOUR_FORMAT.test(format.value) ? 11 : 23;else if (col === EPickerCols.milliSecond) count = 999;else count = 59;
        var colList = range(0, count + 1, Number(colStep)).map(function (v) {
          return padStart(String(v), 2, "0");
        }) || [];
        return props.hideDisabledTime && !!props.disableTime ? colList.filter(function (t) {
          var _props$disableTime2;
          var params = [dayjsValue.value.hour(), dayjsValue.value.minute(), dayjsValue.value.second(), dayjsValue.value.millisecond()];
          params[colIdx] = Number(t);
          return !((_props$disableTime2 = props.disableTime) !== null && _props$disableTime2 !== void 0 && (_props$disableTime2 = _props$disableTime2.call.apply(_props$disableTime2, [props].concat(params, [{
            partial: position.value || "start"
          }]))) !== null && _props$disableTime2 !== void 0 && (_props$disableTime2 = _props$disableTime2[col]) !== null && _props$disableTime2 !== void 0 && _props$disableTime2.includes(Number(t)));
        }) : colList;
      }
      return MERIDIEM_LIST;
    };
    var getScrollDistance = function getScrollDistance(col, time) {
      if (col === EPickerCols.hour && /[h]{1}/.test(format.value)) time %= 12;
      var itemIdx = getColList(col).indexOf(padStart(String(time), 2, "0"));
      var _getItemHeight = getItemHeight(),
        offsetHeight = _getItemHeight.offsetHeight,
        margin = _getItemHeight.margin;
      var timeItemTotalHeight = offsetHeight + margin;
      var distance = Math.abs(Math.max(0, itemIdx) * timeItemTotalHeight);
      return distance;
    };
    var handleScroll = function handleScroll(col, idx, e) {
      var _colsRef$idx, _props$onChange;
      var val;
      var formattedVal;
      if (!props.isShowPanel) return;
      var scrollTop = (((_colsRef$idx = colsRef[idx]) === null || _colsRef$idx === void 0 ? void 0 : _colsRef$idx.scrollTop) || 0) + panelOffset.top;
      var _getItemHeight2 = getItemHeight(),
        offsetHeight = _getItemHeight2.offsetHeight,
        margin = _getItemHeight2.margin;
      var timeItemTotalHeight = offsetHeight + margin;
      var colStep = Math.abs(Math.round(scrollTop / timeItemTotalHeight + 0.5));
      var meridiem = MERIDIEM_LIST[Math.min(colStep - 1, 1)].toLowerCase();
      if (Number.isNaN(colStep)) colStep = 1;
      if (timeArr.includes(col)) {
        var max = 59;
        if (col === EPickerCols.hour) max = /[h]{1}/.test(format.value) ? 11 : 23;else if (col === EPickerCols.milliSecond) max = 999;
        var colIdx = timeArr.indexOf(col);
        var availableArr = range(0, max + 1, Number(steps.value[colIdx]) || 1);
        val = closestLookup(availableArr, Number(getColList(col)[Math.min(colStep - 1, max + 1, availableArr.length - 1)]), Number(steps.value[colIdx]) || 1);
        if (Number.isNaN(val)) val = availableArr[availableArr.length - 1];
        if (col === EPickerCols.hour && cols.value.includes(EPickerCols.meridiem) && dayjsValue.value.hour() >= 12) {
          val = Number(val) + 12;
        }
      } else val = meridiem;
      var distance = getScrollDistance(col, val);
      if (!dayjs(dayjsValue.value).isValid() || value.value && !dayjs(value.value, format.value, true).isValid()) return;
      if (timeArr.includes(col)) {
        var _dayjsValue$value$col, _dayjsValue$value;
        if (timeItemCanUsed(col, val)) formattedVal = (_dayjsValue$value$col = (_dayjsValue$value = dayjsValue.value)[col]) === null || _dayjsValue$value$col === void 0 ? void 0 : _dayjsValue$value$col.call(_dayjsValue$value, val).format(format.value);else formattedVal = dayjsValue.value.format(format.value);
      } else {
        var currentHour = dayjsValue.value.hour();
        if (meridiem === AM && currentHour >= 12) {
          formattedVal = dayjsValue.value.hour(currentHour - 12).format(format.value);
        } else if (meridiem === PM && currentHour < 12) {
          formattedVal = dayjsValue.value.hour(currentHour + 12).format(format.value);
        } else {
          formattedVal = dayjsValue.value.format(format.value);
        }
      }
      if (formattedVal !== value.value) (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, formattedVal, e);
      if (distance !== scrollTop) {
        var _scrollCtrl$scrollTo;
        var scrollCtrl = colsRef[cols.value.indexOf(col)];
        if (!scrollCtrl || scrollCtrl.scrollTop === distance) return;
        (_scrollCtrl$scrollTo = scrollCtrl.scrollTo) === null || _scrollCtrl$scrollTo === void 0 || _scrollCtrl$scrollTo.call(scrollCtrl, {
          top: distance,
          behavior: "smooth"
        });
      }
    };
    var scrollToTime = function scrollToTime(col, time, idx) {
      var _scrollCtrl$scrollTo2;
      var behavior = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "auto";
      var distance = getScrollDistance(col, time);
      var scrollCtrl = colsRef[idx];
      if (!scrollCtrl || scrollCtrl.scrollTop === distance || !timeItemCanUsed(col, time)) return;
      (_scrollCtrl$scrollTo2 = scrollCtrl.scrollTo) === null || _scrollCtrl$scrollTo2 === void 0 || _scrollCtrl$scrollTo2.call(scrollCtrl, {
        top: distance,
        behavior: behavior
      });
    };
    var handleTimeItemClick = function handleTimeItemClick(col, el, idx, e) {
      if (!timeItemCanUsed(col, el)) return;
      if (timeArr.includes(col)) {
        if (col === EPickerCols.hour && dayjsValue.value.format("a") === PM && cols.value.includes(EPickerCols.meridiem)) {
          el = Number(el) + 12;
        }
        scrollToTime(col, el, idx, "smooth");
      } else {
        var currentHour = dayjsValue.value.hour();
        if (el === AM && currentHour >= 12) {
          var _props$onChange2;
          (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 || _props$onChange2.call(props, dayjsValue.value.hour(currentHour - 12).format(format.value), e);
        } else if (el === PM && currentHour < 12) {
          var _props$onChange3;
          (_props$onChange3 = props.onChange) === null || _props$onChange3 === void 0 || _props$onChange3.call(props, dayjsValue.value.hour(currentHour + 12).format(format.value), e);
        }
      }
    };
    var updateTimeScrollPos = function updateTimeScrollPos() {
      var isAutoScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var behavior = value.value && !isAutoScroll ? "smooth" : "auto";
      var isStepsSet = !!steps.value.filter(function (step) {
        return Number(step) > 1;
      }).length;
      nextTick(function () {
        cols.value.forEach(function (col, idx) {
          if (!isStepsSet || isStepsSet && value.value) {
            var _dayjsValue$value$col2, _dayjsValue$value2;
            scrollToTime(col, timeArr.includes(col) ? (_dayjsValue$value$col2 = (_dayjsValue$value2 = dayjsValue.value)[col]) === null || _dayjsValue$value$col2 === void 0 ? void 0 : _dayjsValue$value$col2.call(_dayjsValue$value2) : dayjsValue.value.format("a"), idx, behavior);
          } else {
            var _getColList;
            scrollToTime(col, (_getColList = getColList(col)) === null || _getColList === void 0 ? void 0 : _getColList[0], idx, behavior);
          }
        });
      });
      props.resetTriggerScroll();
    };
    var isCurrent = function isCurrent(col, colItem) {
      var _dayjsValue$value$col3, _dayjsValue$value3;
      var colVal;
      if (col === EPickerCols.meridiem) {
        var currentMeridiem = dayjsValue.value.format("a");
        return currentMeridiem === colItem;
      }
      colVal = (_dayjsValue$value$col3 = (_dayjsValue$value3 = dayjsValue.value)[col]) === null || _dayjsValue$value$col3 === void 0 ? void 0 : _dayjsValue$value$col3.call(_dayjsValue$value3);
      if (col === EPickerCols.hour && /[h]{1}/.test(format.value)) {
        colVal %= 12;
      }
      return colVal === Number(colItem);
    };
    return function () {
      var _cols$value$map, _cols$value, _cols$value$map2, _cols$value2;
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-body"),
        "ref": bodyRef
      }, [createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "-body-active-mask"),
        "ref": maskRef
      }, [(_cols$value$map = (_cols$value = cols.value).map) === null || _cols$value$map === void 0 ? void 0 : _cols$value$map.call(_cols$value, function (col, idx) {
        return createVNode("div", {
          "key": "".concat(col, "_").concat(idx)
        }, null);
      })]), (_cols$value$map2 = (_cols$value2 = cols.value).map) === null || _cols$value$map2 === void 0 ? void 0 : _cols$value$map2.call(_cols$value2, function (col, idx) {
        return createVNode("ul", {
          "key": "".concat(col, "_").concat(idx),
          "ref": function ref(el) {
            return colsRef[idx] = el;
          },
          "class": "".concat(COMPONENT_NAME.value, "-body-scroll"),
          "onScroll": debounce(function (e) {
            return handleScroll(col, idx, e);
          }, 50)
        }, [getColList(col).map(function (el) {
          return createVNode("li", {
            "key": el,
            "class": ["".concat(COMPONENT_NAME.value, "-body-scroll-item"), _defineProperty(_defineProperty({}, STATUS.value.disabled, !timeItemCanUsed(col, el)), STATUS.value.current, isCurrent(col, el))],
            "onClick": function onClick(e) {
              return handleTimeItemClick(col, el, idx, e);
            }
          }, [timeArr.includes(col) ? TWELVE_HOUR_FORMAT.test(format.value) && col === EPickerCols.hour && el === "00" ? "12" : el : globalConfig.value[el === AM ? "anteMeridiem" : "postMeridiem"]]);
        })]);
      })]);
    };
  }
});

export { SinglePanel as S, formatInputValue as f, validateInputValue as v };
//# sourceMappingURL=dep-86ee5d0c.js.map
