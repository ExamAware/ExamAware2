/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$1 = require('../_chunks/dep-e8ff2c13.js');
require('@babel/runtime/helpers/defineProperty');
var tag_checkTagGroupProps = require('./check-tag-group-props.js');
var tag_checkTag = require('./check-tag.js');
var isFunction = require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-8abdfb41.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('dayjs');
require('../_chunks/dep-92e23f17.js');
require('../_chunks/dep-0ff616fe.js');
require('../_chunks/dep-5f52cd42.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-f57bcb19.js');
require('../_chunks/dep-dc4bbc14.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-e27ea667.js');
require('../_chunks/dep-165ca38a.js');
require('../_chunks/dep-32412d92.js');
require('../_chunks/dep-a8a3d718.js');
require('../_chunks/dep-54e566d9.js');
require('../_chunks/dep-591a72de.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-8adeee89.js');
require('../_chunks/dep-4d2ef282.js');
require('../_chunks/dep-929933ce.js');
require('../_chunks/dep-6b1f0ef8.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-23f77e26.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('./check-tag-props.js');
require('../_chunks/dep-47c460dd.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-8382953f.js');
require('../_chunks/dep-6280a7f6.js');
require('./tag.js');
require('tdesign-icons-vue-next');
require('tinycolor2');
require('./props.js');
require('../_chunks/dep-31c76dc6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _CheckTagGroup = Vue.defineComponent({
  name: "TCheckTagGroup",
  props: tag_checkTagGroupProps["default"],
  setup: function setup(props2, context) {
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      modelValue = _toRefs.modelValue,
      options = _toRefs.options;
    var componentName = index.usePrefixClass("check-tag-group");
    var checkTagGroupClasses = Vue.computed(function () {
      return [componentName.value];
    });
    var _useVModel = index$1.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      innerValue = _useVModel2[0],
      setInnerValue = _useVModel2[1];
    var onCheckTagChange = function onCheckTagChange(checked, ctx) {
      var value2 = ctx.value;
      if (checked) {
        if (props2.multiple) {
          setInnerValue(innerValue.value.concat(value2), {
            e: ctx.e,
            type: "check",
            value: value2
          });
        } else {
          setInnerValue([value2], {
            e: ctx.e,
            type: "check",
            value: value2
          });
        }
      } else {
        var newValue = [];
        if (props2.multiple) {
          newValue = innerValue.value.filter(function (t) {
            return t !== value2;
          });
        }
        setInnerValue(newValue, {
          e: ctx.e,
          type: "uncheck",
          value: value2
        });
      }
    };
    var getTagContent = function getTagContent(option) {
      if (context.slots.option) return context.slots.option(option);
      if (context.slots.label) return context.slots.label(option);
      if (option.label) {
        return isFunction.isFunction(option.label) ? option.label(Vue.h) : option.label;
      }
      if (option.content && isFunction.isFunction(option.content)) return option.content(Vue.h);
      if (option["default"] && isFunction.isFunction(option["default"])) return option["default"](Vue.h);
      return option.value;
    };
    return function () {
      return Vue.createVNode("div", {
        "class": checkTagGroupClasses.value
      }, [(options.value || []).map(function (option) {
        var _slot;
        return Vue.createVNode(tag_checkTag["default"], {
          "key": option.value,
          "value": option.value,
          "checkedProps": props2.checkedProps,
          "uncheckedProps": props2.uncheckedProps,
          "checked": innerValue.value.includes(option.value),
          "onChange": onCheckTagChange,
          "disabled": option.disabled,
          "size": option.size,
          "data-value": option.value
        }, _isSlot(_slot = getTagContent(option)) ? _slot : {
          "default": function _default() {
            return [_slot];
          }
        });
      })]);
    };
  }
});

exports["default"] = _CheckTagGroup;
//# sourceMappingURL=check-tag-group.js.map
