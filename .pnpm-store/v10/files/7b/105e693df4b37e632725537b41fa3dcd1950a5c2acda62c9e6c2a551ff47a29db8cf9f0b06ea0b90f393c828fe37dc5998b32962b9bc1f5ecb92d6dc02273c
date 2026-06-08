/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, provide, createVNode } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { isArray, isNil } from 'lodash-es';
import { b as useChildComponentSlots } from '../_chunks/dep-e3ce8c8f.js';
import { u as useTNodeJSX } from '../_chunks/dep-2accc95a.js';
import { u as useCommonClassName } from '../_chunks/dep-4f8b6591.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import '../_chunks/dep-fe23be6e.js';
import '@babel/runtime/helpers/toConsumableArray';
import props from './props.js';
import { descriptionsKey } from './consts/index.js';
import DescriptionsRow from './descriptions-row.js';
import { I as ItemsType, r as renderCustomNode, i as itemTypeIsProps } from '../_chunks/dep-a204dd2d.js';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-16bcfabc.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

var _Descriptions = defineComponent({
  name: "TDescriptions",
  props: props,
  setup: function setup(props2) {
    var COMPONENT_NAME = usePrefixClass("descriptions");
    var _useCommonClassName = useCommonClassName(),
      SIZE = _useCommonClassName.SIZE;
    var getChildByName = useChildComponentSlots();
    var renderTNodeJSX = useTNodeJSX();
    var itemsType = ref(ItemsType.props);
    var getRows = function getRows() {
      var column = props2.column,
        layout = props2.layout;
      var items = [];
      if (isArray(props2.items)) {
        items = props2.items.map(function (item) {
          return {
            label: renderCustomNode(item.label),
            content: renderCustomNode(item.content),
            span: item.span || 1
          };
        });
        itemsType.value = ItemsType.props;
      } else {
        var slots = getChildByName("TDescriptionsItem");
        if (slots.length !== 0) {
          items = slots;
          itemsType.value = ItemsType.slots;
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
        if (itemTypeIsProps(itemsType.value)) {
          span = isNil(item.span) ? span : item.span;
          span = span > column ? column : span;
        } else {
          var _item$props;
          item.props = item.props || {};
          span = isNil((_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.span) ? span : item.props.span;
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
          if (itemTypeIsProps(itemsType.value)) {
            item.span += reset;
          } else {
            item.props.span += reset;
          }
          res.push(temp);
        }
      });
      return res;
    };
    provide(descriptionsKey, props2);
    var renderBody = function renderBody() {
      var tableClass = ["".concat(COMPONENT_NAME.value, "__body"), SIZE.value[props2.size], _defineProperty({}, "".concat(COMPONENT_NAME.value, "__body--fixed"), props2.tableLayout === "fixed"), _defineProperty({}, "".concat(COMPONENT_NAME.value, "__body--border"), props2.bordered)];
      return createVNode("table", {
        "class": tableClass
      }, [createVNode("tbody", null, [getRows().map(function (row) {
        return createVNode(DescriptionsRow, {
          "item-type": itemsType.value,
          "row": row
        }, null);
      })])]);
    };
    var renderHeader = function renderHeader() {
      var title = renderTNodeJSX("title");
      return title ? createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__header")
      }, [title]) : "";
    };
    return function () {
      return createVNode("div", {
        "class": COMPONENT_NAME.value
      }, [renderHeader(), renderBody()]);
    };
  }
});

export { _Descriptions as default };
//# sourceMappingURL=descriptions.js.map
