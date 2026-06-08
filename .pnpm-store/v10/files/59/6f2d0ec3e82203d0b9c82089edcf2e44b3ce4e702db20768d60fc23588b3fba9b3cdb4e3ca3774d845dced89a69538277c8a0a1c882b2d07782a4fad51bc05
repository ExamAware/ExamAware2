/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var notification_notification = require('./notification.js');
var notification_consts_index = require('./consts/index.js');
require('@babel/runtime/helpers/toConsumableArray');
require('@babel/runtime/helpers/typeof');
require('../_chunks/dep-953a77eb.js');
var index = require('../_chunks/dep-ecaaae91.js');
require('@babel/runtime/helpers/slicedToArray');
require('../_chunks/dep-cc66acf1.js');
require('tdesign-icons-vue-next');
require('../_chunks/dep-47c460dd.js');
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
require('../_chunks/dep-31c76dc6.js');
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
require('./props.js');
require('./utils/animate.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NotificationList = Vue.defineComponent({
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
    var COMPONENT_NAME = index.usePrefixClass("notification-list");
    var placement = props.placement,
      offset = props.offset;
    var list = Vue.ref([]);
    var notificationList = Vue.ref([]);
    var styles = Vue.computed(function () {
      var style = _objectSpread({
        zIndex: notification_consts_index.DEFAULT_Z_INDEX
      }, notification_consts_index.PLACEMENT_OFFSET[placement]);
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
        marginBottom: notification_consts_index.DISTANCE
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
      return Vue.createVNode("div", {
        "class": "".concat(COMPONENT_NAME.value, "__show"),
        "style": styles.value
      }, [list.value.map(function (item, index) {
        return Vue.createVNode(notification_notification["default"], Vue.mergeProps({
          "ref": addChild,
          "key": item.id,
          "style": notificationStyles(item)
        }, getProps(index, item)), null);
      })]);
    };
  }
});

exports["default"] = NotificationList;
//# sourceMappingURL=notification-list.js.map
