/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var Vue = require('vue');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
var inputAdornment_props = require('./props.js');
var isString = require('../_chunks/dep-a55e8a08.js');
var isNumber = require('../_chunks/dep-990979bb.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('../config-provider/hooks/useConfig.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _InputAdornment = Vue.defineComponent({
  name: "TInputAdornment",
  props: inputAdornment_props["default"],
  setup: function setup(props2, _ref) {
    var slots = _ref.slots;
    var COMPONENT_NAME = index.usePrefixClass("input-adornment");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var renderAddon = function renderAddon(h2, type, addon) {
      var addonNode;
      var isContentNode = isString.isString(addon) || isNumber.isNumber(addon);
      if (!slots[type] && isString.isString(addon) && !addon) return null;
      if (slots[type]) {
        if (slots[type](null).length === 1 && typeof slots[type](null)[0].children === "string") {
          addonNode = Vue.createVNode("span", {
            "class": "".concat(COMPONENT_NAME.value, "__text")
          }, [slots[type](null)]);
        } else {
          addonNode = slots[type](null);
        }
      } else if (isFunction.isFunction(addon)) {
        addonNode = addon(h2);
      } else {
        addonNode = isContentNode ? Vue.createVNode("span", {
          "class": "".concat(COMPONENT_NAME.value, "__text")
        }, [addon]) : addon;
      }
      return addonNode ? Vue.createVNode("span", {
        "class": "".concat(COMPONENT_NAME.value, "__").concat(type)
      }, [addonNode]) : addonNode;
    };
    return function () {
      var prepend = renderAddon(Vue.h, "prepend", props2.prepend);
      var append = renderAddon(Vue.h, "append", props2.append);
      var defaultSlot = renderTNodeJSX("default") || [null];
      var className = [COMPONENT_NAME.value, _defineProperty__default["default"](_defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "--prepend"), prepend), "".concat(COMPONENT_NAME.value, "--append"), append)];
      if (!prepend && !append) {
        return defaultSlot[0];
      }
      return Vue.createVNode("div", {
        "class": className
      }, [prepend, defaultSlot[0], append]);
    };
  }
});

exports["default"] = _InputAdornment;
//# sourceMappingURL=input-adornment.js.map
