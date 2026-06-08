/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { defineComponent, createVNode, h } from 'vue';
import { isString, isNumber, isFunction } from 'lodash-es';
import { u as usePrefixClass, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import '../_chunks/dep-257428bc.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=input-adornment.mjs.map
