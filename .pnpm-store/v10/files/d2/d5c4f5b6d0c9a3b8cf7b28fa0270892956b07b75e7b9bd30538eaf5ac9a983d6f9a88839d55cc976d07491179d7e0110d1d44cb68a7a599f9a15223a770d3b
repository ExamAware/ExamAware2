/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var autoComplete_components_highlightOption = require('../../_chunks/dep-ecb34b89.js');
require('@babel/runtime/helpers/typeof');
var dom = require('../../_chunks/dep-06276759.js');
var index = require('../../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
var log = require('../../_chunks/dep-733b2b51.js');
require('../../_chunks/dep-cc66acf1.js');
var common = require('../../_chunks/dep-6280a7f6.js');
var isString = require('../../_chunks/dep-a55e8a08.js');
var isFunction = require('../../_chunks/dep-48f60c78.js');
var configProvider_hooks_useConfig = require('../../config-provider/hooks/useConfig.js');
require('../../_chunks/dep-953a77eb.js');
require('../../_chunks/dep-8abdfb41.js');
require('../../_chunks/dep-71fa6bfc.js');
require('../../_chunks/dep-b3b464e8.js');
require('../../_chunks/dep-87589faa.js');
require('../../_chunks/dep-80a478d7.js');
require('../../_chunks/dep-05f89f0d.js');
require('../../_chunks/dep-5d7e2375.js');
require('../../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../../_chunks/dep-92e23f17.js');
require('../../_chunks/dep-0ff616fe.js');
require('../../_chunks/dep-5f52cd42.js');
require('../../_chunks/dep-0813861e.js');
require('../../_chunks/dep-f57bcb19.js');
require('../../_chunks/dep-dc4bbc14.js');
require('../../_chunks/dep-e27ea667.js');
require('../../_chunks/dep-165ca38a.js');
require('../../_chunks/dep-32412d92.js');
require('../../_chunks/dep-a8a3d718.js');
require('../../_chunks/dep-54e566d9.js');
require('../../_chunks/dep-591a72de.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../../_chunks/dep-8adeee89.js');
require('../../_chunks/dep-4d2ef282.js');
require('../../_chunks/dep-929933ce.js');
require('../../_chunks/dep-6b1f0ef8.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var AutoCompleteOptionList = Vue.defineComponent({
  name: "AutoCompleteOptionList",
  props: {
    sizeClassNames: Object,
    value: String,
    size: String,
    options: Array,
    popupVisible: Boolean,
    highlightKeyword: Boolean,
    filterable: Boolean,
    filter: Function,
    empty: [String, Function]
  },
  emits: ["select"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      slots = _ref.slots,
      expose = _ref.expose;
    var active = Vue.ref("");
    var classPrefix = index.usePrefixClass();
    var _useConfig = configProvider_hooks_useConfig.useConfig("autoComplete"),
      globalConfig = _useConfig.globalConfig;
    var classes = Vue.computed(function () {
      return "".concat(classPrefix.value, "-select__list");
    });
    var optionClasses = Vue.computed(function () {
      return ["".concat(classPrefix.value, "-select-option"), _defineProperty__default["default"]({}, props.sizeClassNames.value[props.size], props.size)];
    });
    var tOptions = Vue.computed(function () {
      var options = (props.options || []).map(function (item) {
        var option = {};
        if (isString.isString(item)) {
          option = {
            text: item,
            label: item
          };
        } else {
          if (item.text && !isString.isString(item.text)) {
            log.log.warn("AutoComplete", "`text` must be a string.");
          }
          if (!item.text) {
            if (isString.isString(item.label)) {
              option = _objectSpread(_objectSpread({}, item), {}, {
                text: item.label
              });
            } else {
              log.log.warn("AutoComplete", "one of `label` and `text` must be a existed string.");
            }
          } else {
            option = item;
          }
        }
        return option;
      });
      if (props.filter) {
        options = options.filter(function (option) {
          return props.filter(props.value, option);
        });
      } else if (props.filterable) {
        var regExp = new RegExp(autoComplete_components_highlightOption.escapeRegExp(props.value), "i");
        options = options.filter(function (item) {
          return regExp.test(item.text);
        });
      }
      return options;
    });
    var onOptionClick = function onOptionClick(e) {
      var liNode = e.target;
      while (liNode && liNode.tagName !== "LI") {
        liNode = liNode.parentNode;
      }
      var keyword = liNode.getAttribute("title");
      active.value = keyword;
      emit("select", keyword, {
        e: e
      });
    };
    var onKeyInnerPress = function onKeyInnerPress(e) {
      if (common.ARROW_UP_REG.test(e.code) || common.ARROW_UP_REG.test(e.key)) {
        var _tOptions$value$newIn;
        var index = tOptions.value.findIndex(function (item) {
          return item.text === active.value;
        });
        var newIndex = index - 1 < 0 ? tOptions.value.length - 1 : index - 1;
        active.value = (_tOptions$value$newIn = tOptions.value[newIndex]) === null || _tOptions$value$newIn === void 0 ? void 0 : _tOptions$value$newIn.text;
      } else if (common.ARROW_DOWN_REG.test(e.code) || common.ARROW_DOWN_REG.test(e.key)) {
        var _tOptions$value$_newI;
        var _index = tOptions.value.findIndex(function (item) {
          return item.text === active.value;
        });
        var _newIndex = _index + 1 >= tOptions.value.length ? 0 : _index + 1;
        active.value = (_tOptions$value$_newI = tOptions.value[_newIndex]) === null || _tOptions$value$_newI === void 0 ? void 0 : _tOptions$value$_newI.text;
      } else if (common.ENTER_REG.test(e.code) || common.ENTER_REG.test(e.key)) {
        if (active.value) {
          emit("select", active.value, {
            e: e
          });
        }
      }
    };
    var addKeyboardListener = function addKeyboardListener() {
      dom.on(document, "keydown", onKeyInnerPress);
    };
    var removeKeyboardListener = function removeKeyboardListener() {
      dom.off(document, "keydown", onKeyInnerPress);
    };
    expose({
      addKeyboardListener: addKeyboardListener,
      removeKeyboardListener: removeKeyboardListener
    });
    Vue.watch(function () {
      return props.popupVisible;
    }, function () {
      if (props.popupVisible) {
        addKeyboardListener();
      } else {
        removeKeyboardListener();
      }
    }, {
      immediate: true
    });
    Vue.watch(function () {
      return props.value;
    }, function () {
      if (!props.value) {
        active.value = "";
      }
    }, {
      immediate: true
    });
    Vue.onBeforeUnmount(function () {
      removeKeyboardListener();
    });
    return function () {
      if (!tOptions.value.length) {
        return Vue.createVNode("div", {
          "class": "".concat(classPrefix.value, "-auto-complete__panel--empty")
        }, [props.empty || globalConfig.value.empty]);
      }
      return Vue.createVNode("ul", {
        "class": classes.value
      }, [tOptions.value.map(function (item) {
        var cls = _toConsumableArray__default["default"](optionClasses.value);
        if (item.text === active.value) {
          cls.push("".concat(classPrefix.value, "-select-option--hover"));
        }
        var labelNode = item.label;
        if (isFunction.isFunction(item.label)) {
          labelNode = item.label(Vue.h);
        } else if (slots.option) {
          var _slots$option;
          labelNode = (_slots$option = slots.option) === null || _slots$option === void 0 ? void 0 : _slots$option.call(slots, {
            option: item
          });
        }
        var content = labelNode || item.text;
        return Vue.createVNode("li", {
          "key": item.text,
          "class": cls,
          "title": item.text,
          "onClick": onOptionClick
        }, [isString.isString(content) && props.highlightKeyword ? Vue.createVNode(autoComplete_components_highlightOption._HighlightOption, {
          "content": content,
          "keyword": props.value
        }, null) : content]);
      })]);
    };
  }
});

exports["default"] = AutoCompleteOptionList;
//# sourceMappingURL=option-list.js.map
