/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tag_index = require('../../tag/index.js');
require('@babel/runtime/helpers/typeof');
require('../../_chunks/dep-953a77eb.js');
var index = require('../../_chunks/dep-47c460dd.js');
var index$1 = require('../../_chunks/dep-ecaaae91.js');
var index$3 = require('../../_chunks/dep-874d2900.js');
require('../../_chunks/dep-cc66acf1.js');
var index$4 = require('../../_chunks/dep-bc848944.js');
var index$2 = require('../../_chunks/dep-e8ff2c13.js');
var index$5 = require('../../_chunks/dep-bf113ca4.js');
require('../../tag/tag.js');
require('tdesign-icons-vue-next');
require('tinycolor2');
require('../../tag/props.js');
require('../../_chunks/dep-8382953f.js');
require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('../../_chunks/dep-8abdfb41.js');
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
require('../../_chunks/dep-31c76dc6.js');
require('../../_chunks/dep-06276759.js');
require('../../_chunks/dep-4fa46641.js');
require('../../_chunks/dep-422dd97f.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-427dabac.js');
require('../../_chunks/dep-72c4cc44.js');
require('../../_chunks/dep-ee355a9a.js');
require('../../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../tag/check-tag.js');
require('../../tag/check-tag-props.js');
require('../../_chunks/dep-6280a7f6.js');
require('../../tag/check-tag-group.js');
require('../../tag/check-tag-group-props.js');
require('../../_chunks/dep-d62a674d.js');
require('../../_chunks/dep-d45110a6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useTagList(props) {
  var renderTNode = index.useTNodeJSX();
  var classPrefix = index$1.usePrefixClass();
  var _toRefs = Vue.toRefs(props),
    value = _toRefs.value,
    modelValue = _toRefs.modelValue,
    onRemove = _toRefs.onRemove,
    max = _toRefs.max,
    minCollapsedNum = _toRefs.minCollapsedNum,
    size = _toRefs.size,
    tagProps = _toRefs.tagProps,
    getDragProps = _toRefs.getDragProps;
  var _useVModel = index$2.useVModel(value, modelValue, props.defaultValue || [], props.onChange),
    _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
    _tagValue = _useVModel2[0],
    setTagValue = _useVModel2[1];
  var tagValue = Vue.computed(function () {
    return _tagValue.value || [];
  });
  var oldInputValue = Vue.ref();
  var isDisabled = index$3.useDisabled();
  var isReadonly = index$4.useReadonly();
  var _onClose = function onClose(p) {
    var _onRemove$value;
    var arr = _toConsumableArray__default["default"](tagValue.value);
    var _arr$splice = arr.splice(p.index, 1),
      _arr$splice2 = _slicedToArray__default["default"](_arr$splice, 1),
      item = _arr$splice2[0];
    setTagValue(arr, _objectSpread(_objectSpread({
      trigger: "tag-remove"
    }, p), {}, {
      item: item
    }));
    (_onRemove$value = onRemove.value) === null || _onRemove$value === void 0 || _onRemove$value.call(onRemove, _objectSpread(_objectSpread({}, p), {}, {
      item: item,
      trigger: "tag-remove",
      value: arr
    }));
  };
  var clearAll = function clearAll(context) {
    setTagValue([], {
      trigger: "clear",
      e: context.e
    });
  };
  var onInnerEnter = function onInnerEnter(value2, context) {
    var _props$onEnter;
    var valueStr = value2 ? String(value2).trim() : "";
    var isLimitExceeded = max && tagValue.value.length >= max.value;
    var newValue = tagValue.value;
    if (!isLimitExceeded && valueStr) {
      newValue = tagValue.value.concat(String(valueStr));
      setTagValue(newValue, {
        trigger: "enter",
        index: newValue.length - 1,
        item: valueStr,
        e: context.e
      });
    }
    props === null || props === void 0 || (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, _objectSpread(_objectSpread({}, context), {}, {
      inputValue: value2
    }));
  };
  var onInputBackspaceKeyUp = function onInputBackspaceKeyUp(value2) {
    if (!tagValue.value.length) return;
    oldInputValue.value = value2;
  };
  var onInputBackspaceKeyDown = function onInputBackspaceKeyDown(value2, context) {
    var e = context.e;
    if (!tagValue.value.length || e.key === "Process" || isReadonly.value) return;
    var isDelete = /(Backspace|NumpadDelete)/i.test(e.code) || /(Backspace|NumpadDelete)/i.test(e.key);
    if (!value2 && isDelete) {
      var _onRemove$value2;
      var index = tagValue.value.length - 1;
      var item = tagValue.value[index];
      var trigger = "backspace";
      var newValue = tagValue.value.slice(0, -1);
      setTagValue(newValue, {
        e: e,
        index: index,
        item: item,
        trigger: trigger
      });
      (_onRemove$value2 = onRemove.value) === null || _onRemove$value2 === void 0 || _onRemove$value2.call(onRemove, {
        e: e,
        index: index,
        item: item,
        trigger: trigger,
        value: newValue
      });
    }
    oldInputValue.value = value2;
  };
  var renderLabel = function renderLabel(_ref) {
    var displayNode = _ref.displayNode,
      label = _ref.label;
    var newList = minCollapsedNum.value ? tagValue.value.slice(0, minCollapsedNum.value) : tagValue.value;
    var list = displayNode ? [displayNode] : newList.map(function (item, index) {
      var _getDragProps$value;
      var tagContent = renderTNode("tag", {
        params: {
          value: item
        }
      });
      var tagEvents = index$5.useEventForward(tagProps.value, {
        onClose: function onClose(context) {
          return _onClose({
            e: context.e,
            index: index
          });
        }
      });
      return Vue.createVNode(tag_index.Tag, Vue.mergeProps({
        "key": index,
        "size": size.value,
        "disabled": isDisabled.value,
        "closable": !isReadonly.value && !isDisabled.value
      }, (_getDragProps$value = getDragProps.value) === null || _getDragProps$value === void 0 ? void 0 : _getDragProps$value.call(getDragProps, index, item), tagEvents.value), {
        "default": function _default() {
          return [tagContent !== null && tagContent !== void 0 ? tagContent : item];
        }
      });
    }) || [];
    if (![null, void 0, ""].includes(label)) {
      list.unshift(Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-tag-input__prefix"),
        "key": "label"
      }, [label]));
    }
    if (newList.length !== tagValue.value.length) {
      var len = tagValue.value.length - newList.length;
      var more = renderTNode("collapsedItems", {
        params: {
          value: tagValue.value,
          count: tagValue.value.length - minCollapsedNum.value,
          collapsedTags: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length),
          collapsedSelectedItems: tagValue.value.slice(minCollapsedNum.value, tagValue.value.length),
          onClose: _onClose
        }
      });
      list.push(more !== null && more !== void 0 ? more : Vue.createVNode(tag_index.Tag, Vue.mergeProps({
        "key": "more",
        "size": size.value
      }, tagProps.value), {
        "default": function _default() {
          return ["+", len];
        }
      }));
    }
    return list;
  };
  return {
    tagValue: tagValue,
    clearAll: clearAll,
    onClose: _onClose,
    onInnerEnter: onInnerEnter,
    onInputBackspaceKeyUp: onInputBackspaceKeyUp,
    onInputBackspaceKeyDown: onInputBackspaceKeyDown,
    renderLabel: renderLabel
  };
}

exports.useTagList = useTagList;
//# sourceMappingURL=useTagList.js.map
