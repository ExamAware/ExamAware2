/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps } from 'vue';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _Notification from './notification.js';
import { PLACEMENT_OFFSET, DEFAULT_Z_INDEX, DISTANCE } from './consts/index.js';
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
import './props.js';
import './utils/animate.js';
import '@babel/runtime/helpers/createClass';
import '@babel/runtime/helpers/classCallCheck';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NotificationList = defineComponent({
  props: {
    offset: Array,
    placement: {
      type: String,
      "default": "top-right",
      validator: function validator(v) {
        return ["top-left", "top-right", "bottom-left", "bottom-right"].indexOf(v) > -1;
      }
    }
  },
  setup: function setup(props, _ref) {
    var expose = _ref.expose;
    var COMPONENT_NAME = usePrefixClass("notification-list");
    var placement = props.placement,
      offset = props.offset;
    var list = ref([]);
    var notificationList = ref([]);
    var styles = computed(function () {
      var style = _objectSpread({
        zIndex: DEFAULT_Z_INDEX
      }, PLACEMENT_OFFSET[placement]);
      if (Array.isArray(offset) && offset.length === 2) {
        var _getOffset, _getOffset2;
        var horizontalProp = placement.includes("left") ? "left" : "right";
        var verticalProp = placement.includes("top") ? "top" : "bottom";
        style[horizontalProp] = (_getOffset = getOffset(offset[0])) !== null && _getOffset !== void 0 ? _getOffset : style[horizontalProp];
        style[verticalProp] = (_getOffset2 = getOffset(offset[1])) !== null && _getOffset2 !== void 0 ? _getOffset2 : style[verticalProp];
      }
      return style;
    });
    var add = function add(options) {
      list.value.push(options);
      return list.value.length - 1;
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
    var notificationStyles = function notificationStyles(item) {
      var styles2 = {
        marginBottom: DISTANCE
      };
      if (item.zIndex) styles2["z-index"] = item.zIndex;
      return styles2;
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
        },
        onClose: function onClose() {
          if (item.onClose) {
            item.onClose();
          }
          return remove(index);
        }
      });
    };
    var addChild = function addChild(el) {
      if (el) {
        notificationList.value.push(el);
      }
    };
    expose({
      add: add,
      remove: remove,
      removeAll: removeAll,
      list: list,
      notificationList: notificationList
    });
    return function () {
      if (!list.value.length) return;
      return createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__show"),
        "style": styles.value
      }, [list.value.map(function (item, index) {
        return createVNode(_Notification, mergeProps({
          "ref": addChild,
          "key": item.id,
          "style": notificationStyles(item)
        }, getProps(index, item)), null);
      })]);
    };
  }
});

export { NotificationList as default };
//# sourceMappingURL=notification-list.js.map
