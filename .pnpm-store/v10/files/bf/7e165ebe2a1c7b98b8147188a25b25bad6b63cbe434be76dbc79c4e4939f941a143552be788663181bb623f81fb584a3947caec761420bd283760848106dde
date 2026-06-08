/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { defineComponent, h, createVNode } from 'vue';
import { isString, isNumber, isFunction } from 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import props from './props.js';
import '../_chunks/dep-81b01cae.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _InputAdornment = defineComponent({
  name: "TInputAdornment",
  props: props,
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = usePrefixClass("input-adornment");
    var renderTNodeJSX = useTNodeJSX();
    var renderAddon = function renderAddon(h2, type, addon) {
      var addonNode;
      var isContentNode = isString(addon) || isNumber(addon);
      if (!slots[type] && isString(addon) && !addon) return null;
      if (slots[type]) {
        if (slots[type](null).length === 1 && typeof slots[type](null)[0].children === "string") {
          addonNode = createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "__text")
          }, [slots[type](null)]);
        } else {
          addonNode = slots[type](null);
        }
      } else if (isFunction(addon)) {
        addonNode = addon(h2);
      } else {
        addonNode = isContentNode ? createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__text")
        }, [addon]) : addon;
      }
      return addonNode ? createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__").concat(type)
      }, [addonNode]) : addonNode;
    };
    return function () {
      var prepend = renderAddon(h, "prepend", props2.prepend);
      var append = renderAddon(h, "append", props2.append);
      var defaultSlot = renderTNodeJSX("default") || [null];
      var className = [COMPONENT_NAME.value, _defineProperty(_defineProperty({}, "".concat(COMPONENT_NAME.value, "--prepend"), prepend), "".concat(COMPONENT_NAME.value, "--append"), append)];
      if (!prepend && !append) {
        return defaultSlot[0];
      }
      return createVNode("div", {
        "class": className
      }, [prepend, defaultSlot[0], append]);
    };
  }
});

export { _InputAdornment as default };
//# sourceMappingURL=input-adornment.js.map
