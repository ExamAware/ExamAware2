/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var collapse_props = require('./props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('../_chunks/dep-cc66acf1.js');
var index$2 = require('../_chunks/dep-e8ff2c13.js');
require('../_chunks/dep-8abdfb41.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
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
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

var _Collapse = Vue.defineComponent({
  name: "TCollapse",
  props: collapse_props["default"],
  setup: function setup(props2) {
    var componentName = index.usePrefixClass("collapse");
    var borderlessClass = index.usePrefixClass("-border-less");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var _toRefs = Vue.toRefs(props2),
      value = _toRefs.value,
      expandMutex = _toRefs.expandMutex,
      borderless = _toRefs.borderless,
      modelValue = _toRefs.modelValue;
    var _useVModel = index$2.useVModel(value, modelValue, props2.defaultValue, props2.onChange),
      _useVModel2 = _slicedToArray__default["default"](_useVModel, 2),
      collapseValue = _useVModel2[0],
      setCollapseValue = _useVModel2[1];
    var updateCollapseValue = function updateCollapseValue(value2) {
      var newValue = [].concat(collapseValue.value || []);
      var index = newValue.indexOf(value2);
      if (index >= 0) {
        newValue.splice(index, 1);
      } else if (expandMutex.value) {
        newValue = [value2];
      } else {
        newValue.push(value2);
      }
      setCollapseValue(newValue);
    };
    var classes = Vue.computed(function () {
      return [componentName.value, _defineProperty__default["default"]({}, borderlessClass.value, !!borderless.value)];
    });
    var getUniqId = function () {
      var index = 0;
      return function () {
        return index++;
      };
    }();
    Vue.provide("collapseValue", collapseValue);
    Vue.provide("updateCollapseValue", updateCollapseValue);
    Vue.provide("collapseProps", Vue.toRefs(props2));
    Vue.provide("getUniqId", getUniqId);
    Vue.provide("renderParentTNode", renderTNodeJSX);
    return function () {
      var nodes = renderTNodeJSX("default");
      return Vue.createVNode("div", {
        "class": classes.value
      }, [nodes]);
    };
  }
});

exports["default"] = _Collapse;
//# sourceMappingURL=collapse.js.map
