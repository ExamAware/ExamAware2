/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

import { defineComponent, ref, computed, createVNode, mergeProps } from 'vue';
import { _ as _defineProperty } from '../_chunks/dep-1dacc319.mjs';
import _Notification from './notification.mjs';
import { DEFAULT_Z_INDEX, PLACEMENT_OFFSET, DISTANCE } from './consts/index.mjs';
import { u as usePrefixClass } from '../_chunks/dep-7673347f.mjs';
import '../_chunks/dep-257428bc.mjs';
import 'tdesign-icons-vue-next';
import 'lodash-es';
import './props.mjs';
import './utils/index.mjs';
import './utils/animate.mjs';
import '../config-provider/hooks/useConfig.mjs';
import '../config-provider/utils/context.mjs';
import '../_chunks/dep-a4c09318.mjs';
import '../_chunks/dep-fe644854.mjs';
import '../_chunks/dep-ffb85102.mjs';
import '../_chunks/dep-ad588525.mjs';
import '../_chunks/dep-9003fde5.mjs';
import '../_chunks/dep-9f459d8b.mjs';
import '../_chunks/dep-00b4e06a.mjs';
import '../_chunks/dep-51a43106.mjs';
import '../_chunks/dep-22ebd6af.mjs';
import '../_chunks/dep-cdd448ec.mjs';
import '../_chunks/dep-97ecacde.mjs';
import '../_chunks/dep-84fd47b3.mjs';
import '../_chunks/dep-d36c4a3f.mjs';

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
//# sourceMappingURL=notification-list.mjs.map
