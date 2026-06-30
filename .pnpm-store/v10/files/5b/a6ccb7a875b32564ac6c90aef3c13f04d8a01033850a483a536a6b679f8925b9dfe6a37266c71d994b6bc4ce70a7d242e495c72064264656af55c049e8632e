/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import { P as PLACEMENT_OFFSET, _ as _Message } from '../_chunks/dep-4883eca1.mjs';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'tdesign-icons-vue-next';
import 'lodash-es';
import '../loading/index.mjs';
import '../loading/directive.mjs';
import '../loading/plugin.mjs';
import '../loading/loading.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../loading/icon/gradient.mjs';
import '../_chunks/dep-0cde7579.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-0dcc778a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../loading/props.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';
import './style/css.mjs';
import './props.mjs';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_Z_INDEX = 6e3;
var getUniqueId = function () {
  var id = 0;
  return function () {
    id += 1;
    return id;
  };
}();
var MessageList = defineComponent({
  name: "TMessageList",
  props: {
    zIndex: {
      type: Number,
      "default": 0
    },
    placement: {
      type: String,
      "default": ""
    }
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("message__list");
    var list = ref([]);
    var messageList = ref([]);
    var styles = computed(function () {
      return _objectSpread(_objectSpread({}, PLACEMENT_OFFSET[props.placement]), {}, {
        zIndex: props.zIndex !== DEFAULT_Z_INDEX ? props.zIndex : DEFAULT_Z_INDEX
      });
    });
    var add = function add(msg) {
      var mg = _objectSpread(_objectSpread({}, msg), {}, {
        key: getUniqueId()
      });
      list.value.push(mg);
      return mg.key;
    };
    var remove = function remove(index) {
      list.value.splice(index, 1);
    };
    var removeAll = function removeAll() {
      list.value = [];
    };
    var getOffset = function getOffset(val) {
      if (!val) return;
      return isNaN(Number(val)) ? val : "".concat(val, "px");
    };
    var msgStyles = function msgStyles(item) {
      return item.offset && {
        position: "relative",
        left: getOffset(item.offset[0]),
        top: getOffset(item.offset[1])
      };
    };
    var getProps = function getProps(index, item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        onCloseBtnClick: function onCloseBtnClick(e) {
          if (item.onCloseBtnClick) {
            item.onCloseBtnClick(e);
          }
          return remove(index);
        },
        onDurationEnd: function onDurationEnd() {
          if (item.onDurationEnd) {
            item.onDurationEnd();
          }
          return remove(index);
        }
      });
    };
    var addChild = function addChild(el) {
      if (el) {
        messageList.value.push(el);
      }
    };
    expose({
      add: add,
      removeAll: removeAll,
      list: list,
      messageList: messageList
    });
    return function () {
      if (!list.value.length) return;
      return createVNode("div", {
        "class": COMPONENT_NAME.value,
        "style": styles.value
      }, [list.value.map(function (item, index) {
        return createVNode(_Message, mergeProps({
          "key": item.key,
          "style": msgStyles(item),
          "ref": addChild
        }, getProps(index, item)), null);
      })]);
    };
  }
});

export { DEFAULT_Z_INDEX, MessageList, MessageList as default };
//# sourceMappingURL=message-list.mjs.map
