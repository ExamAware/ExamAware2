/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, computed, toRefs, ref, createVNode, Fragment } from 'vue';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { StarFilledIcon } from 'tdesign-icons-vue-next';
import { isArray } from 'lodash-es';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { useConfig } from '../config-provider/hooks/useConfig.js';
import '../_chunks/dep-880d05b9.js';
import { u as useVModel } from '../_chunks/dep-51e5a827.js';
import '@babel/runtime/helpers/defineProperty';
import props from './props.js';
import { Tooltip } from '../tooltip/index.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../tooltip/tooltip.js';
import '../tooltip/props.js';
import '../popup/props.js';
import '../popup/index.js';
import '../popup/popup.js';
import '@popperjs/core';
import '../_chunks/dep-4f8b6591.js';
import '../_chunks/dep-9e6d8a78.js';
import '../_chunks/dep-2ea19dca.js';
import '../popup/container.js';
import '../_chunks/dep-80a77612.js';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/popup/_index.less';
import '../tooltip/utils/index.js';
import 'tdesign-vue-next/esm/common/style/web/components/tooltip/_index.less';

var _Rate = defineComponent({
  name: "TRate",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var renderTNodeJSX = useTNodeJSX();
    var _useConfig = useConfig("rate"),
      globalConfig = _useConfig.globalConfig;
    var activeColor = computed(function () {
      return isArray(props2.color) ? props2.color[0] : props2.color;
    });
    var defaultColor = computed(function () {
      return isArray(props2.color) ? props2.color[1] : "var(--td-bg-color-component)";
    });
    var _toRefs = toRefs(props2),
      inputValue = _toRefs.value,
      modelValue = _toRefs.modelValue;
    var _useVModel = useVModel(inputValue, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray(_useVModel, 2),
      starValue = _useVModel2[0],
      setStarValue = _useVModel2[1];
    var hoverValue = ref(void 0);
    var root = ref();
    var displayValue = computed(function () {
      return Number(hoverValue.value || starValue.value);
    });
    var displayTexts = computed(function () {
      return props2.texts.length === 0 ? globalConfig.value.rateText : props2.texts;
    });
    var displayText = computed(function () {
      return displayTexts.value[Math.ceil(displayValue.value - 1)];
    });
    var RateIcon = function RateIcon(iconProps) {
      if (slots.icon !== void 0) {
        return renderTNodeJSX("icon", {
          params: iconProps
        });
      }
      return createVNode(StarFilledIcon, iconProps, null);
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
    var _useConfig2 = useConfig("classPrefix"),
      classPrefix = _useConfig2.classPrefix;
    return function () {
      return createVNode("div", {
        "class": "".concat(classPrefix.value, "-rate"),
        "onMouseleave": mouseLeaveHandler
      }, [createVNode("ul", {
        "class": "".concat(classPrefix.value, "-rate__list"),
        "style": {
          gap: "".concat(props2.gap, "px")
        },
        "ref": root
      }, [_toConsumableArray(Array(Number(props2.count))).map(function (_, index) {
        return createVNode("li", {
          "key": index,
          "class": ["".concat(classPrefix.value, "-rate__item"), getStarCls(index)],
          "onClick": function onClick(event) {
            return clickHandler(event, index + 1);
          },
          "onMousemove": function onMousemove(event) {
            return mouseEnterHandler(event, index + 1);
          }
        }, [props2.showText ? createVNode(Tooltip, {
          "key": index,
          "content": displayText.value
        }, {
          "default": function _default() {
            return [createVNode("div", {
              "class": "".concat(classPrefix.value, "-rate__star-top")
            }, [createVNode(RateIcon, {
              "size": props2.size,
              "color": activeColor.value
            }, null)]), createVNode("div", {
              "class": "".concat(classPrefix.value, "-rate__star-bottom")
            }, [createVNode(RateIcon, {
              "size": props2.size,
              "color": defaultColor.value
            }, null)])];
          }
        }) : createVNode(Fragment, null, [createVNode("div", {
          "class": "".concat(classPrefix.value, "-rate__star-top")
        }, [createVNode(RateIcon, {
          "size": props2.size,
          "color": activeColor.value
        }, null)]), createVNode("div", {
          "class": "".concat(classPrefix.value, "-rate__star-bottom")
        }, [createVNode(RateIcon, {
          "size": props2.size,
          "color": defaultColor.value
        }, null)])])]);
      })]), props2.showText && createVNode("div", {
        "class": "".concat(classPrefix.value, "-rate__text")
      }, [displayText.value])]);
    };
  }
});

export { _Rate as default };
//# sourceMappingURL=rate.js.map
