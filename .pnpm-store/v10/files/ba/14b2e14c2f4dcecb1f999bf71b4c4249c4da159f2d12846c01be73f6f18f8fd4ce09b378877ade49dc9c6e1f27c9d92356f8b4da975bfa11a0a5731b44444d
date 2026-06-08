/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var tabs_tabPanelProps = require('./tab-panel-props.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index$2 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
var index$3 = require('../_chunks/dep-92c8c5c9.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
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

var _TabPanel = Vue.defineComponent({
  name: "TTabPanel",
  props: tabs_tabPanelProps["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("tab-panel");
    var _useCommonClassName = index$1.useCommonClassName(),
      STATUS = _useCommonClassName.STATUS;
    var renderTNodeContent = index$2.useContent();
    index$3.useDestroyOnClose();
    var tabs = Vue.inject("tabs");
    var isActive = Vue.computed(function () {
      return props2.value === tabs.value.value;
    });
    var isMount = Vue.ref(props2.lazy ? isActive.value : true);
    Vue.watch(isActive, function () {
      if (isActive.value) {
        if (!isMount.value) {
          isMount.value = true;
        }
      } else if (props2.destroyOnHide) {
        isMount.value = false;
      }
    }, {
      immediate: true
    });
    var tabPanelClass = Vue.computed(function () {
      return [COMPONENT_NAME.value, _defineProperty__default["default"]({}, STATUS.value.hidden, !isActive.value)];
    });
    return function () {
      if (!isMount.value) return null;
      return Vue.createVNode("div", {
        "key": props2.value,
        "class": tabPanelClass.value
      }, [renderTNodeContent("default", "panel")]);
    };
  }
});

exports["default"] = _TabPanel;
//# sourceMappingURL=tab-panel.js.map
