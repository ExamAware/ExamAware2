/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, provide, createVNode } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { isArray, isNil } from 'lodash-es';
import { u as usePrefixClass, c as useCommonClassName, h as useChildComponentSlots, a as useTNodeJSX } from '../_chunks/dep-7673347f.mjs';
import props from './props.mjs';
import { descriptionsKey } from './consts/index.mjs';
import DescriptionsRow from './descriptions-row.mjs';
import { I as ItemsType, r as renderCustomNode, i as itemTypeIsProps } from '../_chunks/dep-5ca37dbe.mjs';
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
        if (itemTypeIsProps(itemsType.value, item)) {
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
          if (itemTypeIsProps(itemsType.value, item)) {
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
//# sourceMappingURL=descriptions.mjs.map
