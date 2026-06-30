/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var grid_colProps = require('./col-props.js');
var grid_hooks_index = require('./hooks/index.js');
var grid_utils_index = require('./utils/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$1 = require('../_chunks/dep-47c460dd.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('@babel/runtime/helpers/defineProperty');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-87589faa.js');
require('../_chunks/dep-05f89f0d.js');
require('../config-provider/hooks/useConfig.js');
require('../_chunks/dep-5d7e2375.js');
require('../_chunks/dep-94a7dc2d.js');
require('../_chunks/dep-8abdfb41.js');
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
require('../_chunks/dep-5d4742f2.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-422dd97f.js');
require('../_chunks/dep-71fa6bfc.js');
require('../_chunks/dep-80a478d7.js');
require('../_chunks/dep-427dabac.js');
require('../_chunks/dep-72c4cc44.js');
require('../_chunks/dep-ee355a9a.js');
require('../_chunks/dep-23f77e26.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _isSlot(s) {
  return typeof s === 'function' || Object.prototype.toString.call(s) === '[object Object]' && !Vue.isVNode(s);
}
var _Col = Vue.defineComponent({
  name: "TCol",
  inject: ["rowContext"],
  props: grid_colProps["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("col");
    var renderTNodeJSX = index$1.useTNodeJSX();
    var rowContext = Vue.inject("rowContext", /* @__PURE__ */Object.create(null));
    var size = grid_hooks_index.useRowSize();
    var colClasses = Vue.computed(function () {
      return grid_utils_index.getColClasses(COMPONENT_NAME.value, props2);
    });
    var colStyle = Vue.computed(function () {
      var colStyle2 = {};
      var flex = props2.flex;
      flex && (colStyle2.flex = grid_utils_index.parseFlex(flex));
      if (rowContext) {
        var rowGutter = rowContext.gutter;
        Object.assign(colStyle2, grid_utils_index.calcColPadding(rowGutter, size.value));
      }
      return colStyle2;
    });
    return function () {
      var _slot;
      var TAG = props2.tag;
      return Vue.createVNode(TAG, {
        "class": colClasses.value,
        "style": colStyle.value
      }, _isSlot(_slot = renderTNodeJSX("default")) ? _slot : {
        "default": function _default() {
          return [_slot];
        }
      });
    };
  }
});

exports["default"] = _Col;
//# sourceMappingURL=col.js.map
