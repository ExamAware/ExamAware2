/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { P as PLACEMENT_OFFSET, _ as _Message } from '../_chunks/dep-32ae5896.js';
import 'lodash-es';
import '@babel/runtime/helpers/toConsumableArray';
import '@babel/runtime/helpers/typeof';
import '../_chunks/dep-fe23be6e.js';
import { u as usePrefixClass } from '../_chunks/dep-9e6d8a78.js';
import '@babel/runtime/helpers/slicedToArray';
import '../_chunks/dep-880d05b9.js';
import 'tdesign-icons-vue-next';
import '../_chunks/dep-2accc95a.js';
import '../_chunks/dep-16bcfabc.js';
import '../_chunks/dep-fb805f69.js';
import '../_chunks/dep-3a7a2ef1.js';
import '../config-provider/hooks/useConfig.js';
import '../config-provider/utils/context.js';
import '../_chunks/dep-938cd955.js';
import '../_chunks/dep-81b01cae.js';
import 'dayjs';
import '../loading/index.js';
import '../loading/directive.js';
import '../loading/plugin.js';
import '../_chunks/dep-ee693784.js';
import '../loading/icon/gradient.js';
import '../_chunks/dep-2ea19dca.js';
import '../_chunks/dep-80a99546.js';
import '@babel/runtime/helpers/objectWithoutProperties';
import '../_chunks/dep-4f8b6591.js';
import '../loading/props.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';
import '../_chunks/dep-664b8b22.js';
import 'tdesign-vue-next/esm/common/style/web/components/loading/_index.less';
import './props.js';

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
//# sourceMappingURL=message-list.js.map
