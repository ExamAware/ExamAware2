/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { ref, computed } from 'vue';
import { isArray, uniqBy, isFunction, get } from 'lodash-es';
import { b as useChildComponentSlots } from '../../_chunks/dep-e3ce8c8f.js';
import '../../_chunks/dep-fe23be6e.js';
import '../../config-provider/hooks/useConfig.js';
import '@babel/runtime/helpers/slicedToArray';
import '../../_chunks/dep-880d05b9.js';
import '@babel/runtime/helpers/typeof';
import '../../_chunks/dep-fb805f69.js';
import '../../_chunks/dep-81b01cae.js';
import '../../config-provider/utils/context.js';
import '../../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useSelectOptions = function useSelectOptions(props, keys, inputValue, innerValue) {
  var getChildComponentSlots = useChildComponentSlots();
  var optionsCache = ref([]);
  var options = computed(function () {
    var _props$options;
    var dynamicIndex = 0;
    var innerOptions = ((_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.map(function (option) {
      var getFormatOption = function getFormatOption(option2) {
        var _keys$value = keys.value,
          value = _keys$value.value,
          label = _keys$value.label,
          disabled = _keys$value.disabled;
        var res = _objectSpread(_objectSpread({}, option2), {}, {
          index: dynamicIndex,
          label: get(option2, label),
          value: get(option2, value),
          disabled: get(option2, disabled) || false
        });
        dynamicIndex++;
        return res;
      };
      if (option.children) {
        return _objectSpread(_objectSpread({}, option), {}, {
          children: option.children.map(function (child) {
            return getFormatOption(child);
          })
        });
      }
      return getFormatOption(option);
    })) || [];
    var optionsSlots = getChildComponentSlots("Option");
    var groupSlots = getChildComponentSlots("OptionGroup");
    if (isArray(groupSlots)) {
      var _iterator = _createForOfIteratorHelper(groupSlots),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _group$props;
          var group = _step.value;
          var groupOption = _objectSpread(_objectSpread({
            group: (_group$props = group.props) === null || _group$props === void 0 ? void 0 : _group$props.label
          }, group.props), {}, {
            children: []
          });
          var res = getChildComponentSlots("Option", group.children);
          if (!isArray(res)) continue;
          var _iterator2 = _createForOfIteratorHelper(res),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              groupOption.children.push(_objectSpread(_objectSpread({}, child.props), {}, {
                slots: child.children,
                index: dynamicIndex
              }));
              dynamicIndex++;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          innerOptions.push(groupOption);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (isArray(optionsSlots)) {
      var _iterator3 = _createForOfIteratorHelper(optionsSlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _child = _step3.value;
          innerOptions.push(_objectSpread(_objectSpread({}, _child.props), {}, {
            slots: _child.children,
            index: dynamicIndex
          }));
          dynamicIndex++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    return innerOptions;
  });
  var optionsList = computed(function () {
    var res = [];
    var _getOptionsList = function getOptionsList(options2) {
      var _iterator4 = _createForOfIteratorHelper(options2),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var option = _step4.value;
          if (option.children) {
            _getOptionsList(option.children);
          } else {
            res.push(option);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    };
    _getOptionsList(options.value);
    return res;
  });
  var optionsMap = computed(function () {
    var res = /* @__PURE__ */new Map();
    optionsCache.value.concat(optionsList.value).forEach(function (option) {
      res.set(option.value, option);
    });
    return res;
  });
  var filterMethods = function filterMethods(option) {
    var _option$label, _option$label$toLower;
    if (isFunction(props.filter)) {
      return props.filter("".concat(inputValue.value), option);
    }
    return ((_option$label = option.label) === null || _option$label === void 0 || (_option$label$toLower = _option$label.toLowerCase) === null || _option$label$toLower === void 0 ? void 0 : _option$label$toLower.call(_option$label).indexOf("".concat(inputValue.value).toLowerCase())) > -1;
  };
  var searchOptions = ref([]);
  var getSelectedOptions = function getSelectedOptions(options2, selectValue) {
    return options2.filter(function (option) {
      if (option.checkAll) return;
      if (isArray(selectValue)) return selectValue.includes(option.value);
      return selectValue === option.value;
    });
  };
  var searchDisplayOptions = computed(function () {
    var currentSelectedOptions = getSelectedOptions(optionsList.value, innerValue.value);
    searchOptions.value = uniqBy([].concat(_toConsumableArray(searchOptions.value), _toConsumableArray(currentSelectedOptions)), "value");
    var searchSelectedOptions = getSelectedOptions(searchOptions.value, innerValue.value);
    return uniqBy([].concat(_toConsumableArray(searchSelectedOptions), _toConsumableArray(optionsList.value)), "value");
  });
  var displayOptions = computed(function () {
    if (props.onSearch && props.filterable) return options.value;
    if (!inputValue.value || !(props.filterable || isFunction(props.filter))) return options.value;
    var checkAllOption;
    var res = [];
    options.value.forEach(function (option) {
      if (option.children) {
        res.push(_objectSpread(_objectSpread({}, option), {}, {
          children: option.children.filter(filterMethods)
        }));
      }
      if ((option === null || option === void 0 ? void 0 : option.checkAll) === true) checkAllOption = option;
      if (filterMethods(option)) {
        res.push(option);
      }
    });
    if (!isFunction(props.filter)) {
      var exactMatch = res.filter(function (item) {
        return item.label === inputValue.value;
      });
      var fuzzyMatch = res.filter(function (item) {
        return item.label !== inputValue.value;
      });
      res = exactMatch.concat(fuzzyMatch);
    }
    return res.length && checkAllOption ? [checkAllOption].concat(_toConsumableArray(res)) : res;
  });
  return {
    options: options,
    optionsMap: optionsMap,
    optionsList: optionsList,
    optionsCache: optionsCache,
    displayOptions: displayOptions,
    filterMethods: filterMethods,
    searchDisplayOptions: searchDisplayOptions
  };
};

export { useSelectOptions };
//# sourceMappingURL=useSelectOptions.js.map
