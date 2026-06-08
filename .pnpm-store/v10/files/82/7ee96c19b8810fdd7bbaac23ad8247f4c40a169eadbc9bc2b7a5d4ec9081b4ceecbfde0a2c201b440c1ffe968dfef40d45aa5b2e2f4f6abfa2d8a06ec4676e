/**
 * tdesign v1.17.7
 * (c) 2025 tdesign
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Vue = require('vue');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var message_message = require('../_chunks/dep-56601f8d.js');
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
require('../loading/index.js');
require('../_chunks/dep-95261778.js');
require('../loading/plugin.js');
require('../_chunks/dep-237ed01f.js');
require('../loading/icon/gradient.js');
require('../_chunks/dep-c3dee00a.js');
require('../_chunks/dep-55c70201.js');
require('@babel/runtime/helpers/objectWithoutProperties');
require('../_chunks/dep-fd5a369e.js');
require('../_chunks/dep-4ccaead1.js');
require('../_chunks/dep-990979bb.js');
require('../_chunks/dep-8382953f.js');
require('../loading/props.js');
require('@babel/runtime/helpers/createClass');
require('@babel/runtime/helpers/classCallCheck');
require('../_chunks/dep-9cc695aa.js');
require('../_chunks/dep-48de95ee.js');
require('../_chunks/dep-8b33876c.js');
require('../_chunks/dep-912c9727.js');
require('../_chunks/dep-0b8a4740.js');
require('../_chunks/dep-cd8cfdc0.js');
require('../_chunks/dep-ac11336c.js');
require('../_chunks/dep-9ce6873a.js');
require('../_chunks/dep-779f6290.js');
require('../_chunks/dep-d62a674d.js');
require('./props.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_Z_INDEX = 6e3;
var getUniqueId = function () {
  var id = 0;
  return function () {
    id += 1;
    return id;
  };
}();
var MessageList = Vue.defineComponent({
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
    var COMPONENT_NAME = index.usePrefixClass("message__list");
    var list = Vue.ref([]);
    var messageList = Vue.ref([]);
    var styles = Vue.computed(function () {
      return _objectSpread(_objectSpread({}, message_message.PLACEMENT_OFFSET[props.placement]), {}, {
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
      return Vue.createVNode("div", {
        "class": COMPONENT_NAME.value,
        "style": styles.value
      }, [list.value.map(function (item, index) {
        return Vue.createVNode(message_message._Message, Vue.mergeProps({
          "key": item.key,
          "style": msgStyles(item),
          "ref": addChild
        }, getProps(index, item)), null);
      })]);
    };
  }
});

exports.DEFAULT_Z_INDEX = DEFAULT_Z_INDEX;
exports.MessageList = MessageList;
exports["default"] = MessageList;
//# sourceMappingURL=message-list.js.map
