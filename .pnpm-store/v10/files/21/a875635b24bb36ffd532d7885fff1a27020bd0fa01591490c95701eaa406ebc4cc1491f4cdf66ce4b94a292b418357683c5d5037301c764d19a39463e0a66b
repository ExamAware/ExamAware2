/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var tdesignIconsVueNext = require('tdesign-icons-vue-next');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-47c460dd.js');
var configProvider_hooks_useConfig = require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
var rate_props = require('./props.js');
var tooltip_index = require('../tooltip/index.js');
var isArray = require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../tooltip/tooltip.js');
require('../tooltip/props.js');
require('../popup/props.js');
require('../popup/index.js');
require('../popup/popup.js');
require('@popperjs/core');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-c3dee00a.js');
require('../popup/container.js');
require('../_chunks/dep-b6058ff9.js');
require('../_chunks/dep-39403bd1.js');
require('../_chunks/dep-e86abdd2.js');
require('../_chunks/dep-3a7785db.js');
require('../_chunks/dep-441a3b7b.js');
require('../_chunks/dep-d62a674d.js');
require('../tooltip/utils/index.js');
require('../_chunks/dep-ace0b57c.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-11b67e11.js');
require('../_chunks/dep-dcb859c6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Rate = Vue.defineComponent({
  name: "TRate",
  props: rate_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = index.useTNodeJSX();
    var _useConfig = configProvider_hooks_useConfig.useConfig("rate"),
      globalConfig = _useConfig.globalConfig;
    var activeColor = Vue.computed(function () {
      return isArray.isArray(props2.color) ? props2.color[0] : props2.color;
    });
    var defaultColor = Vue.computed(function () {
      return isArray.isArray(props2.color) ? props2.color[1] : "var(--td-bg-color-component)";
    });
    var _toRefs = Vue.toRefs(props2),
      inputValue = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$1.useVModel(inputValue, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      starValue = _useVModel2[0],
      setStarValue = _useVModel2[1];
    var hoverValue = Vue.ref(void 0);
    var root = Vue.ref();
    var displayValue = Vue.computed(function () {
      return Number(hoverValue.value || starValue.value);
    });
    var displayTexts = Vue.computed(function () {
      return props2.texts.length === 0 ? globalConfig.value.rateText : props2.texts;
    });
    var displayText = Vue.computed(function () {
      return displayTexts.value[Math.ceil(displayValue.value - 1)];
    });
    var RateIcon = function RateIcon(iconProps) {
      if (slots.icon !== void 0) {
        return renderTNodeJSX("icon", {
          params: iconProps
        });
      }
      return Vue.createVNode(tdesignIconsVueNext.StarFilledIcon, iconProps, null);
    };
    var getStarValue = function getStarValue(event, index) {
      if (props2.allowHalf) {
        var _root$value$getBoundi = root.value.getBoundingClientRect(),
          left = _root$value$getBoundi.left;
        var firstStar = root.value.firstChild.nextSibling;
        var _firstStar$getBoundin = firstStar.getBoundingClientRect(),
          width = _firstStar$getBoundin.width;
        var clientX = event.clientX;
        var starMiddle = width * (index - 0.5) + props2.gap * (index - 1);
        if (clientX - left >= starMiddle) return index;
        if (clientX - left < starMiddle) return index - 0.5;
      }
      return index;
    };
    var mouseEnterHandler = function mouseEnterHandler(event, index) {
      if (props2.disabled) return;
      hoverValue.value = getStarValue(event, index);
    };
    var mouseLeaveHandler = function mouseLeaveHandler() {
      if (props2.disabled) return;
      hoverValue.value = void 0;
    };
    var clickHandler = function clickHandler(event, index) {
      if (props2.disabled) return;
      var value = getStarValue(event, index);
      if (props2.clearable && value === starValue.value) {
        hoverValue.value = void 0;
        setStarValue(0);
      } else {
        setStarValue(value);
      }
    };
    var getStarCls = function getStarCls(index) {
      if (props2.allowHalf && index + 0.5 === displayValue.value) return "".concat(classPrefix.value, "-rate__item--half");
      if (index >= displayValue.value) return "";
      if (index < displayValue.value) return "".concat(classPrefix.value, "-rate__item--full");
    };
    var _useConfig2 = configProvider_hooks_useConfig.useConfig("classPrefix"),
      classPrefix = _useConfig2.classPrefix;
    return function () {
      return Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-rate"),
        "onMouseleave": mouseLeaveHandler
      }, [Vue.createVNode("ul", {
        "class": "".concat(classPrefix.value, "-rate__list"),
        "style": {
          gap: "".concat(props2.gap, "px")
        },
        "ref": root
      }, [_toConsumableArray__default["default"](Array(Number(props2.count))).map(function (_, index) {
        return Vue.createVNode("li", {
          "key": index,
          "class": ["".concat(classPrefix.value, "-rate__item"), getStarCls(index)],
          "onClick": function onClick(event) {
            return clickHandler(event, index + 1);
          },
          "onMousemove": function onMousemove(event) {
            return mouseEnterHandler(event, index + 1);
          }
        }, [props2.showText ? Vue.createVNode(tooltip_index.Tooltip, {
          "key": index,
          "content": displayText.value
        }, {
          "default": function _default() {
            return [Vue.createVNode("div", {
              "class": "".concat(classPrefix.value, "-rate__star-top")
            }, [Vue.createVNode(RateIcon, {
              "size": props2.size,
              "color": activeColor.value
            }, null)]), Vue.createVNode("div", {
              "class": "".concat(classPrefix.value, "-rate__star-bottom")
            }, [Vue.createVNode(RateIcon, {
              "size": props2.size,
              "color": defaultColor.value
            }, null)])];
          }
        }) : Vue.createVNode(Vue.Fragment, null, [Vue.createVNode("div", {
          "class": "".concat(classPrefix.value, "-rate__star-top")
        }, [Vue.createVNode(RateIcon, {
          "size": props2.size,
          "color": activeColor.value
        }, null)]), Vue.createVNode("div", {
          "class": "".concat(classPrefix.value, "-rate__star-bottom")
        }, [Vue.createVNode(RateIcon, {
          "size": props2.size,
          "color": defaultColor.value
        }, null)])])]);
      })]), props2.showText && Vue.createVNode("div", {
        "class": "".concat(classPrefix.value, "-rate__text")
      }, [displayText.value])]);
    };
  }
});

exports["default"] = _Rate;
//# sourceMappingURL=rate.js.map
