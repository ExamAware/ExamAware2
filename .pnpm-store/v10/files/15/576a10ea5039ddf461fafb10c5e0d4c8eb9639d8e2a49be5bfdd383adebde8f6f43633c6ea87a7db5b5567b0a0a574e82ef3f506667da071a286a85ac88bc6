/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var index$2 = require('../_chunks/dep-3565d523.js');
var index$3 = require('../_chunks/dep-47c460dd.js');
var index$1 = require('../_chunks/dep-8382953f.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('../_chunks/dep-953a77eb.js');
require('@babel/runtime/helpers/toConsumableArray');
var descriptions_props = require('./props.js');
var descriptions_consts_index = require('./consts/index.js');
var descriptions_descriptionsRow = require('./descriptions-row.js');
var descriptions_utils_index = require('../_chunks/dep-8dd5720a.js');
var isArray = require('../_chunks/dep-87589faa.js');
var isNil = require('../_chunks/dep-6f2064e4.js');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-4fa46641.js');
require('../_chunks/dep-0813861e.js');
require('../_chunks/dep-a55e8a08.js');
require('../_chunks/dep-b3b464e8.js');
require('../_chunks/dep-05f89f0d.js');
require('../_chunks/dep-06276759.js');
require('../_chunks/dep-48f60c78.js');
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
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var _Descriptions = Vue.defineComponent({
  name: "TDescriptions",
  props: descriptions_props["default"],
  setup: function setup(props2) {
    var COMPONENT_NAME = index.usePrefixClass("descriptions");
    var _useCommonClassName = index$1.useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var getChildByName = index$2.useChildComponentSlots();
    var renderTNodeJSX = index$3.useTNodeJSX();
    var itemsType = Vue.ref(descriptions_utils_index.ItemsType.props);
    var getRows = function getRows() {
      var column = props2.column,
        layout = props2.layout;
      var items = [];
      if (isArray.isArray(props2.items)) {
        items = props2.items.map(function (item) {
          return {
            label: descriptions_utils_index.renderCustomNode(item.label),
            content: descriptions_utils_index.renderCustomNode(item.content),
            span: item.span || 1
          };
        });
        itemsType.value = descriptions_utils_index.ItemsType.props;
      } else {
        var slots = getChildByName("TDescriptionsItem");
        if (slots.length !== 0) {
          items = slots;
          itemsType.value = descriptions_utils_index.ItemsType.slots;
        }
      }
      if (layout === "vertical") {
        return [items];
      }
      var temp = [];
      var reset = column;
      var res = [];
      items.forEach(function (item, index) {
        var span = 1;
        if (descriptions_utils_index.itemTypeIsProps(itemsType.value)) {
          span = isNil.isNil(item.span) ? span : item.span;
          span = span > column ? column : span;
        } else {
          var _item$props;
          item.props = item.props || {};
          span = isNil.isNil((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.span) ? span : item.props.span;
          span = span > column ? column : span;
          item.props.span = span;
        }
        if (reset >= span) {
          temp.push(item);
          reset -= span;
        } else {
          res.push(temp);
          temp = [item];
          reset = column - span;
        }
        if (index === items.length - 1) {
          if (descriptions_utils_index.itemTypeIsProps(itemsType.value)) {
            item.span += reset;
          } else {
            item.props.span += reset;
          }
          res.push(temp);
        }
      });
      return res;
    };
    Vue.provide(descriptions_consts_index.descriptionsKey, props2);
    var renderBody = function renderBody() {
      var tableClass = ["".concat(COMPONENT_NAME.value, "__body"), SIZE.value[props2.size], _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__body--fixed"), props2.tableLayout === "fixed"), _defineProperty__default["default"]({}, "".concat(COMPONENT_NAME.value, "__body--border"), props2.bordered)];
      return Vue.createVNode("table", {
        "class": tableClass
      }, [Vue.createVNode("tbody", null, [getRows().map(function (row) {
        return Vue.createVNode(descriptions_descriptionsRow["default"], {
          "item-type": itemsType.value,
          "row": row
        }, null);
      })])]);
    };
    var renderHeader = function renderHeader() {
      var title = renderTNodeJSX("title");
      return title ? Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [title]) : "";
    };
    return function () {
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [renderHeader(), renderBody()]);
    };
  }
});

exports["default"] = _Descriptions;
//# sourceMappingURL=descriptions.js.map
